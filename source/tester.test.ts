import { Tester } from "./tester.js";

describe("Tester", () => {
  test("#test()", () => {
    const tester = new Tester();
    expect(tester).toBeInstanceOf(Tester);
  });
});
