
import {test} from "tap";

import append from "./";

test(({same, end}) => {
  same(append("a")(["b"]), ["b", "a"]);

  end();
});

test(({same, end}) => {
  same(append("c")("ab"), "abc");

  end();
});

test(({throws, end}) => {
  throws(() => append("c")({}));

  end();
});
