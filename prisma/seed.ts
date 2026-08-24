import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "file:./dev.db";
const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: connectionString,
  }),
});

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@coreridgetech.com" },
    update: {},
    create: {
      email: "admin@coreridgetech.com",
      password: hashedPassword,
      name: "System Admin",
      role: "ADMIN",
    },
  });

  console.log(`Admin user created: ${admin.email}`);
  console.log("Password: admin123");

  // Create accountant user
  const accountantPassword = await bcrypt.hash("account123", 10);
  
  const accountant = await prisma.user.upsert({
    where: { email: "accountant@coreridgetech.com" },
    update: {},
    create: {
      email: "accountant@coreridgetech.com",
      password: accountantPassword,
      name: "Accounts Manager",
      role: "ACCOUNTANT",
    },
  });

  console.log(`Accountant user created: ${accountant.email}`);
  console.log("Password: account123");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });