import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { requireRole, requireAuth } from '@/lib/auth';
import { calculateCommission } from '@/lib/commission';

// GET /api/bookings - List user's bookings
export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth(request);
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '20');

    const where: any = {};

    // Filter by user role
    if (user.role === 'CUSTOMER') {
      where.customerId = user.userId;
    } else if (user.role === 'PROVIDER') {
      const provider = await prisma.provider.findUnique({
        where: { userId: user.userId },
      });
      if (provider) {
        where.providerId = provider.id;
      }
    }

    // Filter by status
    if (status) {
      where.status = status.toUpperCase();
    }

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        include: {
          service: {
            include: {
              category: true,
            },
          },
          provider: {
            include: {
              user: {
                select: {
                  name: true,
                  phone: true,
                },
              },
            },
          },
          customer: {
            select: {
              name: true,
              phone: true,
              email: true,
            },
          },
          payment: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.booking.count({ where }),
    ]);

    return NextResponse.json({
      bookings,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

// POST /api/bookings - Create a new booking
const createBookingSchema = z.object({
  serviceId: z.string().min(1, 'Service is required'),
  bookingDate: z.string().min(1, 'Booking date is required'),
  bookingTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
  address: z.string().min(10, 'Address must be at least 10 characters'),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const user = await requireRole('CUSTOMER', request);

    const body = await request.json();
    const validatedData = createBookingSchema.parse(body);

    // Get service details
    const service = await prisma.service.findUnique({
      where: { id: validatedData.serviceId },
      include: {
        provider: true,
      },
    });

    if (!service) {
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    if (!service.isActive) {
      return NextResponse.json(
        { error: 'Service is not available' },
        { status: 400 }
      );
    }

    // Calculate commission
    const { commission, providerAmount } = calculateCommission(service.price);

    // Create booking
    const booking = await prisma.booking.create({
      data: {
        customerId: user.userId,
        serviceId: service.id,
        providerId: service.providerId,
        bookingDate: new Date(validatedData.bookingDate),
        bookingTime: validatedData.bookingTime,
        address: validatedData.address,
        notes: validatedData.notes,
        totalAmount: service.price,
        commissionAmount: commission,
        status: 'PENDING',
      },
      include: {
        service: {
          include: {
            category: true,
          },
        },
        provider: {
          include: {
            user: {
              select: {
                name: true,
                email: true,
              },
            },
          },
        },
      },
    });

    // Create pending payment record
    await prisma.payment.create({
      data: {
        bookingId: booking.id,
        amount: service.price,
        commissionAmount: commission,
        paymentMethod: 'PENDING',
        status: 'PENDING',
      },
    });

    return NextResponse.json(
      {
        message: 'Booking created successfully',
        booking,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation error', details: error.issues },
        { status: 400 }
      );
    }

    if (error instanceof Error && error.message.includes('Unauthorized')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (error instanceof Error && error.message.includes('Forbidden')) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}
