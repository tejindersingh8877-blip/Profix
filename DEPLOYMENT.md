# Deployment Guide - Profix Masters Center

This guide covers deploying the Profix platform to production.

## Prerequisites

- Node.js 18+ runtime environment
- MySQL 8.0+ database
- Domain name (optional but recommended)
- SSL certificate (for HTTPS)

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

Vercel provides the easiest deployment for Next.js applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Environment Variables**
   
   In Vercel dashboard, add these environment variables:
   ```
   DATABASE_URL=mysql://user:password@host:3306/profix
   JWT_SECRET=your-production-jwt-secret
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_WEBHOOK_SECRET=whsec_...
   COMMISSION_RATE=0.15
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

5. **Set up Database**
   - Use PlanetScale, Railway, or any MySQL host
   - Run migrations: `npx prisma db push`
   - Seed database: `npm run db:seed`

6. **Configure Stripe Webhook**
   - In Stripe Dashboard, add webhook endpoint:
   - URL: `https://your-domain.vercel.app/api/payments/webhook`
   - Events: `payment_intent.succeeded`, `payment_intent.payment_failed`

---

### Option 2: Railway

Railway supports both the app and database.

#### Steps:

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Initialize**
   ```bash
   railway login
   railway init
   ```

3. **Add MySQL Database**
   ```bash
   railway add mysql
   ```

4. **Set Environment Variables**
   ```bash
   railway variables set JWT_SECRET="your-secret"
   railway variables set STRIPE_SECRET_KEY="sk_live_..."
   ```

5. **Deploy**
   ```bash
   railway up
   ```

---

### Option 3: Docker + VPS

Deploy using Docker on any VPS (DigitalOcean, AWS, etc.)

#### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=mysql://profix:password@db:3306/profix
      - JWT_SECRET=${JWT_SECRET}
      - STRIPE_SECRET_KEY=${STRIPE_SECRET_KEY}
    depends_on:
      - db
    restart: unless-stopped

  db:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: profix
      MYSQL_USER: profix
      MYSQL_PASSWORD: ${MYSQL_PASSWORD}
    volumes:
      - mysql_data:/var/lib/mysql
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped

volumes:
  mysql_data:
```

#### Deploy

```bash
# Build and start
docker-compose up -d

# Run migrations
docker-compose exec app npx prisma db push

# Seed database
docker-compose exec app npm run db:seed
```

---

### Option 4: Traditional VPS (Ubuntu)

#### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install MySQL
sudo apt install mysql-server -y
sudo mysql_secure_installation

# Install PM2
sudo npm install -g pm2
```

#### 2. Application Setup

```bash
# Clone repository
git clone https://github.com/tejindersingh8877-blip/Profix.git
cd Profix

# Install dependencies
npm install

# Configure environment
cp .env.example .env
nano .env  # Edit with production values

# Build application
npm run build

# Start with PM2
pm2 start npm --name "profix" -- start
pm2 save
pm2 startup
```

#### 3. Nginx Configuration

Create `/etc/nginx/sites-available/profix`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/profix /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 4. SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com
```

---

## Environment Variables

### Required Production Variables

```env
# Database
DATABASE_URL="mysql://user:password@host:port/database"

# Authentication
JWT_SECRET="generate-a-secure-random-string-here"
NEXT_PUBLIC_APP_URL="https://your-domain.com"

# Stripe (Use live keys)
STRIPE_SECRET_KEY="sk_live_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_live_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Email (Production SMTP)
SMTP_HOST="smtp.sendgrid.net"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASSWORD="your-sendgrid-api-key"
SMTP_FROM="noreply@your-domain.com"

# Commission
COMMISSION_RATE="0.15"
```

---

## Database Migration

### Initial Setup

```bash
npx prisma db push
npm run db:seed
```

### For Updates

```bash
# Generate migration
npx prisma migrate dev --name description_of_changes

# Apply to production
npx prisma migrate deploy
```

---

## Post-Deployment Checklist

- [ ] SSL certificate installed and working
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Database seeded with initial data
- [ ] Stripe webhooks configured
- [ ] Domain DNS configured
- [ ] Email sending tested
- [ ] Test all critical user flows
- [ ] Monitoring and logging set up
- [ ] Backup strategy implemented
- [ ] Security headers configured

---

## Monitoring

### Application Monitoring

Use services like:
- **Vercel Analytics** (if using Vercel)
- **Sentry** for error tracking
- **LogRocket** for session replay
- **New Relic** for APM

### Database Monitoring

- Set up automated backups
- Monitor slow queries
- Track connection pool usage
- Set up alerts for high CPU/memory

---

## Backup Strategy

### Database Backups

```bash
# Daily backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
mysqldump -u user -p profix > backup_$DATE.sql
# Upload to S3 or other storage
```

### File Uploads

If storing uploads locally:
- Regular backups of `/public/uploads`
- Consider using cloud storage (S3, Cloudinary)

---

## Scaling Considerations

### Horizontal Scaling

- Use load balancer (Nginx, AWS ALB)
- Multiple app instances
- Shared database
- Centralized session storage (Redis)

### Database Scaling

- Read replicas for read-heavy operations
- Connection pooling
- Database caching (Redis)
- Consider managed database (PlanetScale, AWS RDS)

---

## Troubleshooting

### Application Won't Start

1. Check environment variables
2. Verify database connection
3. Check application logs: `pm2 logs profix`
4. Ensure correct Node.js version

### Database Connection Issues

1. Verify DATABASE_URL
2. Check firewall rules
3. Ensure database is running
4. Test connection: `mysql -h host -u user -p`

### SSL Certificate Issues

1. Verify certificate files
2. Check Nginx configuration
3. Renew certificate: `sudo certbot renew`

---

## Security Checklist

- [ ] Use strong JWT_SECRET
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Set up rate limiting
- [ ] Enable security headers
- [ ] Regularly update dependencies
- [ ] Use environment variables for secrets
- [ ] Enable database SSL connection
- [ ] Set up firewall rules
- [ ] Regular security audits

---

## Support

For deployment support:
- Email: support@profixmasters.com
- Documentation: [README.md](./README.md)
