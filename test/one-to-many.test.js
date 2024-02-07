import { prismaClient } from "../src/prisma-client";

describe("One to One Relationship Prisma", () => {
  it("CREATE Data ", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "0002",
        title: "Insert Comment",
        description: "THIS IS FROM INSERT",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("CREATE Data with Relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "0011",
        name: "eleven",
        email: "eleven@email.com",
        phone: "11|11|11|11",
        comments: {
          createMany: {
            data: [
              {
                title: "Insert Comment 1",
                description: "THIS IS FROM INSERT 1",
              },
              {
                title: "Insert Comment 2",
                description: "THIS IS FROM INSERT 2",
              },
              {
                title: "Insert Comment 3",
                description: "THIS IS FROM INSERT 3",
              },
            ],
          },
        },
      },
    });

    console.info(customer);
  });

  it("READ data with Relation", async () => {
    const comment = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    const result = comment.length;

    console.log(result);
    console.log(comment);

    // expect(customer.length).toBe(result);
  });
});
