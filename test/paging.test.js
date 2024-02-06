import { prismaClient } from "../src/prisma-client";

describe("Paging Prisma", () => {
  it("Paging Data with Prisma Page 1", async () => {
    const page = 1;
    const pageSize = 3;
    const skip = (page - 1) * pageSize;

    const page1 = await prismaClient.customer.findMany({
      take: pageSize,
      skip: skip,
      orderBy: { phone: "asc" },
    });

    console.info(page1);

    expect(page1.length).toBe(3);
  });

  it("Paging Data with Prisma Page 2", async () => {
    const page = 2;
    const pageSize = 3;
    const skip = (page - 1) * pageSize;

    const page2 = await prismaClient.customer.findMany({
      take: pageSize,
      skip: skip,
      orderBy: { phone: "asc" },
    });

    console.info(page2);

    expect(page2.length).toBe(3);
  });

  it("Paging Data with Prisma Page 3", async () => {
    const page = 3;
    const pageSize = 3;
    const skip = (page - 1) * pageSize;

    const page2 = await prismaClient.customer.findMany({
      take: pageSize,
      skip: skip,
      orderBy: { phone: "asc" },
    });

    console.info(page2);

    expect(page2.length).toBe(3);
  });
});
