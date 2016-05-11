'use strict'
import test from 'ava';
import mM from '.,/bundle.js';
var m = new mM.Monad('hello', 'm');
console.log('In test.js. mM is: ', mM);

test('foo', t => {
    t.pass();
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});

test('m.bnd(m.ret).x === m.x', t => {
    t.is('m.bnd(m.ret).x === m.x');
});


export default mM

