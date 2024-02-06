import { prismaClient } from "../src/prisma-client";

describe("Auto Increment Prisma", () => {
  it("Create Data with Auto-Increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });

    console.info(category);

    expect(category).toHaveProperty("id");
  });
});
