import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
// import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaClient } from '../generated/prisma/client.js';

// import config from "../config/config";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

async function connectDb() {
  try {
    await prisma.$connect();
    console.log('Prisma connected to MySQL');
  } catch (err) {
    console.error('Prisma connection error:', err);
    process.exit(1);
  }
}

export { prisma, connectDb };
