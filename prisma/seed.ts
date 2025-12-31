import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@profixmasters.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@profixmasters.com',
      passwordHash: adminPassword,
      role: 'ADMIN',
      isActive: true,
    },
  });
  console.log('✅ Admin user created:', admin.email);

  // Create service categories
  const categories = [
    {
      name: 'AC Repair & Maintenance',
      description: 'Professional air conditioning repair, installation, and maintenance services',
      icon: '❄️',
    },
    {
      name: 'Cleaning Services',
      description: 'Home and office cleaning, deep cleaning, and sanitization services',
      icon: '🧹',
    },
    {
      name: 'Plumbing',
      description: 'Plumbing repairs, installations, and emergency services',
      icon: '🔧',
    },
    {
      name: 'Electrical Services',
      description: 'Electrical repairs, installations, and safety inspections',
      icon: '⚡',
    },
    {
      name: 'Painting',
      description: 'Interior and exterior painting services',
      icon: '🎨',
    },
    {
      name: 'Carpentry',
      description: 'Custom furniture, repairs, and woodwork services',
      icon: '🪚',
    },
    {
      name: 'Appliance Repair',
      description: 'Repair services for home appliances',
      icon: '🔌',
    },
    {
      name: 'Pest Control',
      description: 'Pest inspection, treatment, and prevention services',
      icon: '🐛',
    },
  ];

  for (const category of categories) {
    const created = await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: category,
    });
    console.log('✅ Category created:', created.name);
  }

  // Create admin settings
  const settings = [
    { settingKey: 'commission_rate', settingValue: '0.15' },
    { settingKey: 'platform_name', settingValue: 'Profix Masters Center' },
    { settingKey: 'support_email', settingValue: 'support@profixmasters.com' },
    { settingKey: 'min_booking_hours', settingValue: '2' },
    { settingKey: 'max_booking_days_advance', settingValue: '90' },
  ];

  for (const setting of settings) {
    const created = await prisma.adminSetting.upsert({
      where: { settingKey: setting.settingKey },
      update: { settingValue: setting.settingValue },
      create: setting,
    });
    console.log('✅ Setting created:', created.settingKey);
  }

  console.log('🎉 Database seeding completed!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
