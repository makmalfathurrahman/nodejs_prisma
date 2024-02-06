import { prismaClient } from "../src/prisma-client";

describe("Group Data Prisma", () => {
  it("Group Data using GroupBy", async () => {
    const product = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      orderBy: {
        category: "asc",
      },
    });

    console.info(product);
  });

  it("Group Data using GroupBy and Having", async () => {
    const product = await prismaClient.product.groupBy({
      by: ["category"],
      _min: {
        price: true,
        stock: true,
      },
      _max: {
        price: true,
        stock: true,
      },
      _avg: {
        price: true,
        stock: true,
      },
      orderBy: {
        category: "asc",
      },
      having: {
        price: {
          _avg: {
            gt: 3000,
          },
        },
      },
    });

    console.info(product);
  });
});
