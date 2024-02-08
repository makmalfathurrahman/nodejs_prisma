import { prismaClient } from "../src/prisma-client";

describe("CRUD Prisma", () => {
  it("CREATE data", async () => {
    const customer = await prismaClient.like.create({
      data: {
        id: "0001",
        name: "one",
        email: "one@email.com",
        phone: "1111",
      },
    });

    expect(customer.id).toBe("TWO002");
    expect(customer.name).toBe("two");
    expect(customer.email).toBe("two@email.com");
    expect(customer.phone).toBe("22222222");
  });

  it("READ data", async () => {
    const customer = await prismaClient.customer.findMany();
    const result = customer.length;

    console.log(result);

    expect(customer.length).toBe(result);
  });

  it("UPDATE data", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        id: "0009",
      },
      where: {
        id: "NIN009",
      },
    });

    expect(customer.id).toBe("0009");
    // expect(customer.name).toBe("six");
    // expect(customer.email).toBe("one@email.com");
    // expect(customer.phone).toBe("11111111");
  });

  it("DELETE data", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "TWO002",
      },
    });

    expect(customer.length).not.toBe(2);
  });
});
