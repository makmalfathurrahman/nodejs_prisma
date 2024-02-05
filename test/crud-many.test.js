import { prismaClient } from "../src/prisma-client";

describe("CRUD Many Prisma", () => {
  it("CREATE Many Data", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "SEV007",
          name: "seven",
          email: "seven@email.com",
          phone: "77777777",
        },
        {
          id: "EIG008",
          name: "eight",
          email: "eight@email.com",
          phone: "88888888",
        },
        {
          id: "NIN009",
          name: "nine",
          email: "nine@email.com",
          phone: "99999999",
        },
      ],
    });

    expect(count).toBe(3);
  });

  it("READ Many Data", async () => {
    const count = await prismaClient.customer.findMany({});

    console.info(count.length);

    expect(count.length).toBe(9);
  });

  it("UPDATE Many Data", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        name: "NINE",
      },
      where: {
        id: "NIN009",
      },
    });

    expect(count).toBe(1);
  });

  it("DELETE Many Data", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        id: "Empty",
      },
    });

    expect(count).toBe(0);
  });
});
