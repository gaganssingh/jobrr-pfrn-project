const build = require("../../src/app");

let app;
describe(`Root route`, () => {
  beforeEach(() => {
    app = build();
  });

  afterEach(() => {
    app.close();
  });

  it(`should return 200 when root route called`, async () => {
    const res = await app.inject({
      url: "/",
    });

    expect(res.statusCode).toBe(200);
    console.log(res.json());
    expect(res.json()).toEqual({ hello: "world" });
  });
});
