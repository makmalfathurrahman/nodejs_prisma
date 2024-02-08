import { prismaClient } from "../src/prisma-client";

describe("Implicit Model Prisma", () => {
  it("UPDATE Data", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "0001",
      },
      data: {
        favorites: {
          connect: [{ id: "P0001" }, { id: "P0002" }],
        },
      },
      include: {
        favorites: true,
      },
    });

    console.info(JSON.stringify(customer));
  });

  it("READ data with findUnique", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "0001",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    const result = customer.length;

    console.log(result);
    console.log(customer);
    console.log(JSON.stringify(customer));

    // expect(customer.length).toBe(result);
  });

  it("READ data with findMany", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });
    const result = customer.length;

    console.log(result);
    console.log(customer);
    console.log(JSON.stringify(customer));

    // expect(customer.length).toBe(result);
  });
});
