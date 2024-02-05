const tagFunction = (array, ...args) => {
  console.info(array);
  console.info(args);
};

test("Tag Function Test", () => {
  const hello = "Hello!";
  const world = "World!";

  tagFunction`Hello ${world}, This is Tag Function`;
  tagFunction`${hello} ${world}, This is Tag Function`;
});

test("Tag Function Test", () => {
  const id = "A0001";
  const name = "Alex";

  tagFunction`SELECT * FROM nodejs_postgres WHERE id = ${id} AND name = ${name};`;
});
