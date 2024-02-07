import { prismaClient } from "../src/prisma-client";

describe("One to One Relationship Prisma", () => {
  it("CREATE Data", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "W001",
        balance: 1000,
        customer_id: "0001",
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);

    expect(wallet.id).toBe("W001");
    expect(wallet.balance).toBe(1000);
    expect(wallet.customer_id).toBe("0001");
  });

  it("CREATE Data with Relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "0010",
        name: "ten",
        email: "ten@email.com",
        phone: "10101010",
        wallet: {
          create: {
            id: "W002",
            balance: 2000,
          },
        },
      },
    });

    console.info(customer);
  });

  it("READ data with Relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        id: "0010",
      },
      include: {
        wallet: true,
      },
    });
    const result = customer.length;

    console.log(result);
    console.log(customer);

    expect(customer.length).toBe(result);
  });
});
