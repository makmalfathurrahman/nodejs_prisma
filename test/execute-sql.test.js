import { prismaClient } from "../src/prisma-client";

describe("Execute SQL", () => {
  it("Execute SQL Query", async () => {
    const id = "1";
    const name = "one";

    const result =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name})`;
    expect(result).toBe(1);
  });
});
