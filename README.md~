# js-monads
This package contains Monad, MonadIter, MonadStream, ret, add, and cube. An online demonstration is running at [JS-monads-stable](http://schalk.net:3055) The repository is for the demonstration is at [https://github.com/dschalk/JS-monads-stable](https://github.com/dschalk/JS-monads-stable). The entire JS-monads parts 1 through 5 online series is deprecated, not optimized, and uses older definitions of the monads, but it might be of some use. The demonstrations are available at [http://schalk.net](http://schalk.net).

"npm install --save js-monads && cd node_modules/js-monads && npm install &&  npm run test" should run ava on "a == b" and "c == d".

a, b, c, and d are defined as:

```
var a = mM1.ret(0).bnd(add,3).bnd(cube).x;
var b = mM1.ret(0).bnd(v => add(v,3).bnd(cube)).x;

var c = mM1.ret(0).bnd(add,3).bnd(cube).id;
var d = mM1.ret(0).bnd(v => add(v,3).bnd(cube)).id;
```
This tests for the associative property.

