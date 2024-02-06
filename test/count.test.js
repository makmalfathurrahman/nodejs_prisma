import { prismaClient } from "../src/prisma-client";

describe("Count Data Prisma", () => {
  it("Find Many with Select", async () => {
    const customer = await prismaClient.customer.count({
      where: {
        phone: "77777777",
      },
    });

    console.info(customer);

    expect(customer).toBe(1);
    expect(customer).not.toBe(0);
  });
});
