try-get
===

[![Greenkeeper badge](https://badges.greenkeeper.io/SEAPUNK/try-get.svg)](https://greenkeeper.io/)

Gets a value of an object, giving provided default if not possible.

```js
import tryGet from 'try-get'

const a = {
  b: {
    c: 4
  }
}

tryGet(a, 'b.c', 'fail') // 4
tryGet(a, 'b.d', 'fail') // fail
tryGet(a, 'b.d') // undefined

```

related: [deep-exists]

[deep-exists]: https://github.com/SEAPUNK/deep-exists