
import append from "./index";

test("works", () => {
  expect(append("a")(["b"])).toEqual(["b", "a"]);
});

test("works", () => {
  expect(append("c")("ab")).toEqual("abc");
});

test("works", () => {
  expect(() => append("c")({})).toThrow();
});
