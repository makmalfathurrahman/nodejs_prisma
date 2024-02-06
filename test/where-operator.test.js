import { prismaClient } from "../src/prisma-client";

describe("Where Operator Prisma", () => {
  it("AND Operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        AND: [
          {
            name: "Product A",
          },
          {
            name: "Product B",
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.info(products.length);
    console.info(products);

    expect(products.length).toBe(0);
  });

  it("OR Operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        OR: [
          {
            name: "Product A",
          },
          {
            name: "Product B",
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.info(products.length);
    console.info(products);

    expect(products.length).toBe(4);
    expect(products[0].name).toBe("Product A");
    expect(products[1].name).toBe("Product A");
    expect(products[2].name).toBe("Product B");
    expect(products[3].name).toBe("Product B");
  });

  it("NOT Operator", async () => {
    const products = await prismaClient.product.findMany({
      where: {
        NOT: [
          {
            name: "Product A",
          },
          {
            name: "Product B",
          },
        ],
      },
      orderBy: {
        name: "asc",
      },
    });

    console.info(products.length);
    console.info(products);

    expect(products.length).toBe(6);
  });
});
