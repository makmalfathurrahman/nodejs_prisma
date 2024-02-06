import { prismaClient } from "../src/prisma-client";

describe("Aggregate Data Prisma", () => {
  it("Aggregate Data", async () => {
    const product = await prismaClient.product.aggregate({
      _min: {
        price: true,
      },
      _max: {
        price: true,
      },
      _avg: {
        price: true,
      },
    });

    console.info(product);

    expect(product._min.price).toBe(1000);
    expect(product._max.price).toBe(5000);
    expect(product._avg.price).toBe(3000);
  });
});
