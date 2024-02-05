import { prismaClient } from "../src/prisma-client";

describe("Transaction Prisma", () => {
  it("CREATE Sequential Transaction", async () => {
    const [customer3, customer4] = await prismaClient.$transaction([
      prismaClient.customer.create({
        data: {
          id: "THE003",
          name: "three",
          email: "three@email.com",
          phone: "33333333",
        },
      }),
      prismaClient.customer.create({
        data: {
          id: "FOU004",
          name: "four",
          email: "four@email.com",
          phone: "44444444",
        },
      }),
    ]);

    expect(customer3.id).toBe("THE003");
    expect(customer3.name).toBe("three");
    expect(customer3.email).toBe("three@email.com");
    expect(customer3.phone).toBe("33333333");

    expect(customer4.id).toBe("FOU004");
    expect(customer4.name).toBe("four");
    expect(customer4.email).toBe("four@email.com");
    expect(customer4.phone).toBe("44444444");
  });

  it("CREATE Interactive Transaction", async () => {
    const [customer5, customer6] = await prismaClient.$transaction(async (prisma) => {
      const customer5 = await prisma.customer.create({
        data: {
          id: "FIV005",
          name: "five",
          email: "five@email.com",
          phone: "55555555",
        },
      });
      const customer6 = await prisma.customer.create({
        data: {
          id: "SIX006",
          name: "six",
          email: "six@email.com",
          phone: "66666666",
        },
      });
      return [customer5, customer6];
    });

    expect(customer5.id).toBe("FIV005");
    expect(customer5.name).toBe("five");
    expect(customer5.email).toBe("five@email.com");
    expect(customer5.phone).toBe("55555555");

    expect(customer6.id).toBe("SIX006");
    expect(customer6.name).toBe("six");
    expect(customer6.email).toBe("six@email.com");
    expect(customer6.phone).toBe("66666666");
  });
});
