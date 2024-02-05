import { prismaClient } from "../src/prisma-client";

describe("Query SQL", () => {
  it("Get Data using SQL Query", async () => {
    const id = "1";

    const results = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const result of results) {
      console.info(`id: ${result.id} | name: ${result.name}`);
    }
  });
});
