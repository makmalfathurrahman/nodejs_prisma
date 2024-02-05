import { PrismaClient } from "@prisma/client";

describe("Prisma Client Test", () => {
  it("Connect Prisma Client", async () => {
    const prisma = new PrismaClient();
    prisma.$connect;

    console.info("Prisma connected!");

    prisma.$disconnect;
  });
});
