interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail(options: EmailOptions): Promise<boolean> {
  // In a production environment, you would integrate with an email service
  // For now, we'll just log the email
  console.log('Sending email:', {
    to: options.to,
    subject: options.subject,
    preview: options.html.substring(0, 100),
  });
  
  // Return true to simulate successful send
  return true;
}

export function generateBookingConfirmationEmail(data: {
  customerName: string;
  serviceName: string;
  providerName: string;
  bookingDate: string;
  bookingTime: string;
  address: string;
  amount: number;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Confirmation</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a2c3d;">Booking Confirmed!</h1>
          <p>Dear ${data.customerName},</p>
          <p>Your booking has been confirmed. Here are the details:</p>
          <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Service:</strong> ${data.serviceName}</p>
            <p><strong>Provider:</strong> ${data.providerName}</p>
            <p><strong>Date:</strong> ${data.bookingDate}</p>
            <p><strong>Time:</strong> ${data.bookingTime}</p>
            <p><strong>Address:</strong> ${data.address}</p>
            <p><strong>Amount:</strong> $${data.amount}</p>
          </div>
          <p>Thank you for choosing Profix Masters Center!</p>
        </div>
      </body>
    </html>
  `;
}

export function generateProviderNotificationEmail(data: {
  providerName: string;
  customerName: string;
  serviceName: string;
  bookingDate: string;
  bookingTime: string;
  address: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Booking</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a2c3d;">New Booking Received!</h1>
          <p>Dear ${data.providerName},</p>
          <p>You have received a new booking:</p>
          <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Customer:</strong> ${data.customerName}</p>
            <p><strong>Service:</strong> ${data.serviceName}</p>
            <p><strong>Date:</strong> ${data.bookingDate}</p>
            <p><strong>Time:</strong> ${data.bookingTime}</p>
            <p><strong>Address:</strong> ${data.address}</p>
          </div>
          <p>Please log in to your dashboard to manage this booking.</p>
        </div>
      </body>
    </html>
  `;
}

export function generatePaymentReceiptEmail(data: {
  customerName: string;
  serviceName: string;
  amount: number;
  paymentMethod: string;
  transactionId: string;
  date: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Payment Receipt</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #1a2c3d;">Payment Receipt</h1>
          <p>Dear ${data.customerName},</p>
          <p>Thank you for your payment. Here are the details:</p>
          <div style="background-color: #f4f6f8; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Service:</strong> ${data.serviceName}</p>
            <p><strong>Amount:</strong> $${data.amount}</p>
            <p><strong>Payment Method:</strong> ${data.paymentMethod}</p>
            <p><strong>Transaction ID:</strong> ${data.transactionId}</p>
            <p><strong>Date:</strong> ${data.date}</p>
          </div>
          <p>Thank you for choosing Profix Masters Center!</p>
        </div>
      </body>
    </html>
  `;
}
