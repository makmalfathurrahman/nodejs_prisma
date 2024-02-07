import { prismaClient } from "../src/prisma-client";

describe("Many to Many Relationship Prisma", () => {
  it("CREATE Data", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "0002",
        product_id: "P0006",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
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
