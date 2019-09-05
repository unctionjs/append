# @unction/append

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> A => OrderedEnumerableType<B> => OrderedEnumerableType<C>

Takes a value and puts it at the end of the given list.

``` javascript
append(4)([5]) // => [5, 4]
append("c")("ab") // => "abc"
```

> NOTE: While there is a type annotation in the README, this function cannot have type annotations due to a bug in flow.

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/append.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/append.svg?maxAge=2592000&style=flat-square
