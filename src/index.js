
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

module.exports = {

Monad: function Monad(z, g) {
  _classCallCheck(this, Monad);

  this.x = z;
  if (arguments.length === 1) {
    this.id = 'anonymous';
  } else {
    this.id = g;
  }

  this.bnd = function (func) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return func.apply(undefined, [_this.x].concat(args));
  };

  this.ret = function (a) {
    _this.x = a;
    return _this;
  };
},

MonadIter: function MonadIter() {
  _classCallCheck(this, MonadIter);

  this.p = function () {};

  this.release = function () {
    return _this.p();
  };

  this.bnd = function (func) {
    _this.p = func;
  };
},

ret: function ret(v) {
  mon: new Monad(v, 'anonymous');
  return mon;
},

cube: function(v) {
  return ret(v*v*v);
},

add: function(a,b) {
  return ret(a+b);
},

addAr: function(a,b) {
  return ret(a.map(v => v*1 + b*1));
},

M: function M(a,b) {
  mon: new Monad(a,b);
  return mon;
},

MI: function MI() {
  return new MonadIter();
},

mM1: this.M([],'mM1'),
mM2: this.M(0,'mM2'),
mM3: this.M(0,'mM3'),
mM4: this.M([],'mM4'),
mM5: this.M(0,'mM5'),
mM6: this.M(0,'mM6'),
mM7: this.M(0,'mM7'),
mM8: this.M(0,'mM8'),
mM9: this.M(0,'mM9'),
mM10: this.M(0,'mM10'),
mM11: this.M([],'mM11'),
mM12: this.M(0,'mM12'),
mM13: this.M(0,'mM13'),
mM14: this.M(0,'mM14'),
mM15: this.M(0,'mM15'),
mM16: this.M(0,'mM16'),
mM17: this.M(0,'mM17'),
mM18: this.M(0,'mM18'),
mM19: this.M(0,'mM19'),
mMscbd: this.M([],'mMscbd'),
mMmessages: this.M([],'mMmessages'),
mMscoreboard: this.M([],'mMscoreboard'),
mMmsg: this.M([],'mMmsg'),
mMgoals: this.M(0,'mMgoals'),
mMgoals2: this.M('','mMgoals2'),
mMnbrs: this.M([],'mMnbrs'),
mMnumbers: this.M([],'mMnumbers'),
mMname: this.M('', 'mMname'),
mMar: this.M([1,2,3,4,5], 'mMar'),
mMscores: this.M('', 'mMscores'),
mMprefix: this.M('', 'mMprefix'),
mMfib: this.M([0,1], 'mMfib'),
mMmain: this.M(null, 'mMmain'),
mMcalc: this.M(null, 'mMcalc'),

mMZ1: this.MI(),
mMZ2: this.MI(),
mMZ3: this.MI(),
mMZ4: this.MI(),
mMZ5: this.MI(),
mMZ6: this.MI(),
mMZ7: this.MI(),
mMZ8: this.MI(),
mMZ9: this.MI(),

mMZ10: this.MI(),
mMZ11: this.MI(),
mMZ12: this.MI(),
mMZ13: this.MI(),
mMZ14: this.MI(),
mMZ15: this.MI(),
mMZ16: this.MI(),

mMZ20: this.MI(),
mMZ21: this.MI(),
mMZ22: this.MI(),
mMZ23: this.MI(),
mMZ24: this.MI(),
mMZ25: this.MI(),
mMZ26: this.MI(),

fib: function fib(x,k) {
  let j = k;

  while (j > 0) {
    x: [x[1], x[0] + x[1]];
    j -= 1;
  }
  return ret('fibonacci ' + k + ': ' + x[0]);
},

toNums: function toNums(x) {
  let y = x.map(x => parseFloat(x));
  return ret(y);
},

calc: function calc(a,op,b) { 
  result;
  switch (op) {
      case "add": result: (parseFloat(a) + parseFloat(b));
      break;
      case "subtract": result: (a - b);
      break;
      case "mult": result: (a * b);
      break;
      case "div": result: (a / b);
      break;
      case "concat": result: (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
},

pause: function(x,t,mon2) {
  let time = t*1000;
  setTimeout( function() {
    mon2.release();
  },time );
  return mon2;
},

wait: function wait(x, y, mon2) {
  if (x === y) {
    mon2.release();
  }
  return mon2;
},

unshift: function unshift(x,v) {
  x.unshift(v);
  return ret(x);
},

toFloat: function toFloat(x) {
  newx: x.map(function (a) {
    return parseFloat(a);
  });
  return ret(newx);
},

push: function push(x, j) {
  if (Array.isArray(x)) {
    return ret(x.push(j));
  }
  return ret(x);
},

push: function push(x,v) {
  let ar = x;
  ar.push(v);
  let cleanX = ar.filter(v => (v !== "" && v !== undefined));
  return ret(cleanX);
},
splice: function splice(x, j, k) {
  if (Array.isArray(x)) {
    return ret(x.splice(j,k));
  }
  return ret(x);
},

clean: function clean(x) {
  return ret(x.filter(v => v !== ""));
},

filter: function filter(x, condition) {
  if (Array.isArray(x)) {
    return ret(x.filter(v => condition))
  }
  return ret(x);
},

map: function map(x, y) {
  if (Array.isArray(x)) {
    return ret(x.map(v => y))
  }
  return ret(x);
},

reduce: function reduce(x, y) {
  if (Array.isArray(x) && x.length > 0) {
    return ret(x.reduce(y))
  }
  return ret(x);
},

pop: function pop(x) {
  let v = x[x.length - 1];
  console.log('In pop. v: ',v);
  return ret(v);
},

next: function next(x, y, mon2) {
  if (x === y) {
    mon2.release();
  }
  return ret(x);
},

next2: function next(x, condition, mon2) {
  if (condition) {
    mon2.release();
  }
  return ret(x);
},

hyp: function hyp(x,y) {
  return Math.sqrt(x*x + y*y);
},

doub: function doub(v) {
  return ret(v + v);
},

square: function square(v) {
  return ret(v * v);
},

mult: function mult(x, y) {
  return ret(x * y);
},

log: function log(x,message) {
  console.log(message);
  let mon = new Monad(x);
  return mon;
},

delay: function delay(x, mon) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 2000);
  });
}
}

