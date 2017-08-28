/* eslint-disable no-extra-parens, no-unused-expressions */

import type from "@unction/type"

export default function append (value: any): Function {
  return function appendValue (orderedList: any): any {
    switch (type(orderedList)) {
      case "String": {
        return `${orderedList}${value}`
      }
      case "Array": {
        return [...orderedList, value]
      }
      default: {
        throw new Error(`append doesn't know how to deal with ${type(orderedList)}`)
      }
    }
  }
}
