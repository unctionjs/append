
import append from "./index.ts";

test(() => {
  expect(append("a")(["b"])).toEqual(["b", "a"]);
});

test(() => {
  expect(append("c")("ab")).toEqual("abc");
});

test(() => {
  expect(() => append("c")({})).toThrow();
});
