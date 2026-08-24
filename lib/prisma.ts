import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const connectionString = process.env.DATABASE_URL || "file:./prisma/dev.db";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: connectionString,
  }),
});

export default prisma;