import type from "@unction/type";
import {OrderedEnumerableType} from "./types";

export default function append<A, B, C> (value: A) {
  return function appendValue (orderedEnumerable: OrderedEnumerableType<B>): OrderedEnumerableType<C> {
    switch (type(orderedEnumerable)) {
      case "String": {
        return `${orderedEnumerable}${value}`;
      }

      case "Array": {
        return [...orderedEnumerable, value];
      }

      default: {
        throw new Error(`append doesn't know how to deal with ${type(orderedEnumerable)}`);
      }
    }
  };
}
