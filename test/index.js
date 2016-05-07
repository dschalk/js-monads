import test from 'ava';
import mM from '../src/index.js'

var add = mM.add;
var cube = mM.cube;
var Monad = mM.Monad;
var ret = mM.ret;

var mM1 = new Monad(0, 'mM1');

var a = mM1.ret(0).bnd(add,3).bnd(cube).x;
var b = mM1.ret(0).bnd(v => add(v,3).bnd(cube)).x;

var c = mM1.ret(0).bnd(add,3).bnd(cube).id;
var d = mM1.ret(0).bnd(v => add(v,3).bnd(cube)).id;

test(() => {
    a == b;
});

test(() => {
    c == d;
});

