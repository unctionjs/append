import type from "@unction/type";

export default function append<A, B, C> (value: A) {
  return function appendValue (orderedEnumerable: OrderedArray<B> | Set<B> | Record<string | number | symbol, unknown> | Map<B, unknown> | string): Array<C> | string {
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
