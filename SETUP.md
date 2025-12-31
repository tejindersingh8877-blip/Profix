# Setup Guide - Profix Masters Center

This guide will help you set up the Profix platform for local development.

## Prerequisites

### Required Software

1. **Node.js** (v18 or higher)
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify installation: `node --version`

2. **MySQL** (v8.0 or higher)
   - Download from [mysql.com](https://www.mysql.com/downloads/)
   - Or use Docker: `docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password mysql:8.0`

3. **Git**
   - Download from [git-scm.com](https://git-scm.com/)

### Optional Software

- **MySQL Workbench** - For database management
- **Postman** or **Insomnia** - For API testing
- **VS Code** - Recommended IDE with extensions:
  - ESLint
  - Prisma
  - Tailwind CSS IntelliSense

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/tejindersingh8877-blip/Profix.git
cd Profix
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js
- React
- Prisma
- Stripe
- Zod
- And more...

### 3. Database Setup

#### Create MySQL Database

```sql
CREATE DATABASE profix CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

#### Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and update the following variables:

```env
# Database - Update with your MySQL credentials
DATABASE_URL="mysql://root:your_password@localhost:3306/profix"

# Authentication - Generate a secure random string
JWT_SECRET="your-secure-jwt-secret-key"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Stripe - Get from https://dashboard.stripe.com/test/apikeys
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_publishable_key"
STRIPE_WEBHOOK_SECRET="whsec_your_webhook_secret"

# Email (Optional for development)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SMTP_FROM="noreply@profixmasters.com"

# Commission Settings
COMMISSION_RATE="0.15"
```

### 4. Generate Prisma Client

```bash
npx prisma generate
```

This generates the TypeScript types and Prisma Client based on your schema.

### 5. Push Schema to Database

```bash
npx prisma db push
```

This creates all the tables in your MySQL database.

### 6. Seed the Database

```bash
npm run db:seed
```

This populates the database with:
- Admin user (admin@profixmasters.com / admin123)
- Service categories
- Initial settings

### 7. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## Stripe Setup (Optional but Recommended)

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your test API keys from the [Dashboard](https://dashboard.stripe.com/test/apikeys)
3. Add the keys to your `.env` file
4. Install Stripe CLI for webhook testing (optional):
   ```bash
   stripe listen --forward-to localhost:3000/api/payments/webhook
   ```

## Troubleshooting

### Database Connection Issues

**Error**: `Can't connect to MySQL server`

**Solution**: 
- Verify MySQL is running: `mysql --version`
- Check connection credentials in `.env`
- Test connection: `mysql -u root -p`

### Port Already in Use

**Error**: `Port 3000 is already in use`

**Solution**:
```bash
# Kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9
# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

Or specify a different port:
```bash
PORT=3001 npm run dev
```

### Prisma Generation Fails

**Error**: `Prisma schema validation error`

**Solution**:
- Check `prisma/schema.prisma` for syntax errors
- Ensure `DATABASE_URL` in `.env` is correct
- Try: `npx prisma format` to auto-format the schema

### Build Errors

**Error**: TypeScript compilation errors

**Solution**:
- Delete `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Regenerate Prisma client: `npx prisma generate`

## Development Workflow

### Making Database Changes

1. Edit `prisma/schema.prisma`
2. Run `npx prisma db push` to apply changes
3. Regenerate client: `npx prisma generate`
4. Restart dev server

### Viewing Database

Use Prisma Studio:
```bash
npm run db:studio
```

Opens a GUI at [http://localhost:5555](http://localhost:5555)

## Testing the Application

### Test Accounts

After seeding, you can use:
- **Admin**: admin@profixmasters.com / admin123

Create additional test accounts:
1. Go to [http://localhost:3000](http://localhost:3000)
2. Click "Register" (when implemented)
3. Fill in the form and submit

### Test Stripe Payments

Use Stripe test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`
- Any future expiry date and CVC

## Next Steps

- Read the [API documentation](./API.md)
- Check the [deployment guide](./DEPLOYMENT.md)
- Review [contributing guidelines](./CONTRIBUTING.md)

## Getting Help

If you encounter any issues:
1. Check this setup guide
2. Review error messages carefully
3. Search existing GitHub issues
4. Create a new issue with:
   - Your environment (OS, Node version, etc.)
   - Steps to reproduce
   - Error messages and logs
