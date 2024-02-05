import { prismaClient } from "../src/prisma-client";

describe("Paging Prisma", () => {
  it("Paging Data with Prisma 1", async () => {
    const page1 = await prismaClient.customer.findMany({
      take: 1,
      skip: 0,
    });

    console.info(page1);

    expect(page1.length).toBe(1);
  });

  it("Paging Data with Prisma 2", async () => {
    const page2 = await prismaClient.customer.findMany({
      take: 3,
      skip: 0,
    });

    console.info(page2);

    expect(page2.length).toBe(3);
  });
});
