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

function requireSeedPassword(name: string) {
  const password = process.env[name];

  if (!password || password.length < 16) {
    throw new Error(`${name} must be set to a password of at least 16 characters.`);
  }

  return password;
}

async function main() {
  const [adminPassword, accountantPassword] = await Promise.all([
    bcrypt.hash(requireSeedPassword("SEED_ADMIN_PASSWORD"), 10),
    bcrypt.hash(requireSeedPassword("SEED_ACCOUNTANT_PASSWORD"), 10),
  ]);
  
  const admin = await prisma.user.upsert({
    where: { email: "admin@coreridgetech.com" },
    update: { password: adminPassword },
    create: {
      email: "admin@coreridgetech.com",
      password: adminPassword,
      name: "System Admin",
      role: "ADMIN",
    },
  });

  console.log(`Admin user created: ${admin.email}`);

  const accountant = await prisma.user.upsert({
    where: { email: "accountant@coreridgetech.com" },
    update: { password: accountantPassword },
    create: {
      email: "accountant@coreridgetech.com",
      password: accountantPassword,
      name: "Accounts Manager",
      role: "ACCOUNTANT",
    },
  });

  console.log(`Accountant user created: ${accountant.email}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });