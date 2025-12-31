# Profix Masters Center - Professional Service Marketplace

A comprehensive service marketplace platform built with Next.js 15, TypeScript, Prisma, and MySQL. This platform connects customers with professional service providers for AC repair, cleaning, home maintenance, and other services.

## 🌟 Features

### For Customers
- Browse and search services by category
- Filter by price, rating, and location
- Book services with flexible scheduling
- Secure payment processing via Stripe
- Review and rate service providers
- Track booking history and status
- Manage profile and preferences

### For Service Providers
- Create and manage service listings
- Receive booking notifications
- Manage availability and scheduling
- Track earnings and wallet balance
- Withdraw earnings
- View customer reviews and ratings
- Business verification system

### For Administrators
- Complete dashboard with analytics
- User and provider management
- Provider verification workflow
- Booking oversight and management
- Financial reports and commission settings
- Platform configuration
- Transaction monitoring

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Database**: MySQL with Prisma ORM
- **Styling**: Tailwind CSS v4
- **UI Components**: Custom components with shadcn/ui patterns
- **Authentication**: JWT with httpOnly cookies
- **Payments**: Stripe
- **Validation**: Zod
- **Forms**: React Hook Form

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or higher
- MySQL 8.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/tejindersingh8877-blip/Profix.git
cd Profix
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="mysql://user:password@localhost:3306/profix"
JWT_SECRET="your-jwt-secret"
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."
```

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Run database migrations:
```bash
npx prisma db push
```

6. Seed the database with initial data:
```bash
npm run db:seed
```

7. Start the development server:
```bash
npm run dev
```

8. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Database Schema

The application uses the following database tables:

- **users** - Multi-role user management (admin, provider, customer)
- **providers** - Service provider profiles and business information
- **services** - Service listings with pricing and details
- **categories** - Service categories
- **bookings** - Booking management with status tracking
- **payments** - Payment transactions
- **wallets** - Provider earnings wallet
- **wallet_transactions** - Wallet transaction history
- **reviews** - Customer reviews and ratings
- **admin_settings** - Platform configuration

## 🔐 Default Credentials

After seeding the database, use these credentials to log in:

- **Admin**: admin@profixmasters.com / admin123

## 📚 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run db:push` - Push schema changes to database
- `npm run db:migrate` - Run database migrations
- `npm run db:seed` - Seed database with initial data
- `npm run db:studio` - Open Prisma Studio

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Services (Coming Soon)
- `GET /api/services` - List all services
- `POST /api/services` - Create new service
- `GET /api/services/[id]` - Get service details
- `PUT /api/services/[id]` - Update service
- `DELETE /api/services/[id]` - Delete service

### Bookings (Coming Soon)
- `GET /api/bookings` - List bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings/[id]` - Get booking details
- `PUT /api/bookings/[id]` - Update booking status

## 🔒 Security

- JWT-based authentication with httpOnly cookies
- Password hashing with bcrypt
- Input validation with Zod
- SQL injection prevention via Prisma ORM
- XSS protection
- Secure file uploads
- Stripe for secure payment processing

## 📱 Mobile Support

The application is fully responsive and optimized for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## 📄 License

ISC

## 📞 Support

For support, email support@profixmasters.com

## 🗺️ Roadmap

- [x] Stage 1: Foundation & Authentication
- [ ] Stage 2: Core Marketplace Features
- [ ] Stage 3: Advanced Features (Payments & Notifications)
- [ ] Stage 4: Admin Dashboard
- [ ] Stage 5: Enhanced UX & Mobile Optimization

---

Built with ❤️ by Profix Team