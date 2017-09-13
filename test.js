/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import append from "./index"

test(({same, end}) => {
  same(append("a")(["b"]), ["b", "a"])

  end()
})

test(({same, end}) => {
  same(append("c")("ab"), "abc")

  end()
})

test(({throws, end}) => {
  throws(() => append("c")({}))

  end()
})
