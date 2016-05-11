'use strict';

var sub = require('most-subject');
var subject = sub.subject;
// import {subject} from 'most-subject';

var O = {};
var monad = {};

var MonadStream = function MonadStream(g) {
  var _this = this;
  this.subject = subject();
  this.observer = this.subject.observer;
  this.stream = this.subject.stream;
  this.id = g;
  this.ret = function (a) {
    _this.observer.next(a);
    console.log('Streaming from ', _this.id);
    return _this;
  };
};

var mM$1 = new MonadStream('mM$1');

var Monad = function Monad(z, g) {
  var _this = this;

  this.x = z;
  if (arguments.length === 1) {
    this.id = 'anonymous';
  } else {
    this.id = g;
  }

  this.bnd = function (func, ...args) {
     return func(_this.x, ...args);
  };

  this.ret = function (a) {
    O[_this.id] = new Monad(a,_this.id);
    return O[_this.id];
  };
};

var MonadIter = function MonadIter() {
  var _this = this;
  this.p = function () {};

  this.release = function () {
    return this.p.apply(this, arguments);
  };

  this.bnd = function (func) {
    _this.p = func;
  };
};

var ret = function ret(v, id) {
  if (arguments.length === 1) {
    return (new Monad(v, 'anonymous'));
  }
  window[id] = new Monad(v, id);
  return window[id];
}

monad.O = {};

monad.MonadStream = function MonadStream(g) {
  var _this = this;
  this.subject = subject();
  this.observer = this.subject.observer;
  this.stream = this.subject.stream;
  this.id = g;
  this.ret = function (a) {
    _this.observer.next(a);
    console.log('Streaming from ', _this.id);
    return _this;
  };
};

monad.mM$1 = new MonadStream('mM$1');

monad.Monad = function Monad(z, g) {
  var _this = this;

  this.x = z;
  if (arguments.length === 1) {
    this.id = 'anonymous';
  } else {
    this.id = g;
  }

  this.bnd = function (func, ...args) {
     return func(_this.x, ...args);
  };

  this.ret = function (a) {
    O[_this.id] = new Monad(a,_this.id);
    return O[_this.id];
  };
};

monad.MonadIter = function MonadIter() {
  var _this = this;
  this.p = function () {};

  this.release = function () {
    return this.p.apply(this, arguments);
  };

  this.bnd = function (func) {
    _this.p = func;
  };
};

monad.ret = function ret(v, id) {
  if (arguments.length === 1) {
    return (new Monad(v, 'anonymous'));
  }
  window[id] = new Monad(v, id);
  return window[id];
}

monad.cube = function(v,mon) {
  if (arguments.length === 2) {
    return mon.ret(v*v*v);
  }
  return ret(v*v*v);
}

monad.add = function(x,b,mon) {
  if (arguments.length === 3) {
    return mon.ret(x + b);
  }
  return ret(x+b);
}

monad.calc = function calc(a,op,b) { 
  var result;
  switch (op) {
      case "add": result = (parseFloat(a) + parseFloat(b));
      break;
      case "subtract": result = (a - b);
      break;
      case "mult": result = (a * b);
      break;
      case "div": result = (a / b);
      break;
      case "concat": result = (a+""+b)*1.0;
      break;
      default : 'Major Malfunction in calc.';
  }
  return result;
};

monad.equals = function equals (x, mon1, mon2, mon3) {
  if (mon1.id === mon2.id && mon1.x === mon2.x) {
    mon3.ret('true');
  } else mon3.ret('false');
  return ret(x);
}
var wait = function wait(x, y, mon) {
  if (x === y) {
    mon2.release();
  }
  return mon;
};

monad.unshift = function unshift(y,v,mon) {
  if (Array.isArray(y)) {
    let ar = [];
    let keys = Object.keys(y);
    for (let k in keys) {ar[k] = y[k]};
    ar.unshift(v);
    return mon.ret(ar);  
  }
  console.log('The value provided to unshift is not an array');
  return ret(y);
};

monad.unshift2 = function unshift(y,v,mon) {
  return mon.ret(ret(y).x.unshift(v));
};

monad.toFloat = function toFloat(x) {
    return ret(parseFloat(x));
};

monad.push = function push(y,v,mon) {
  console.log('In push. y, v, mon are: ', y, v, mon);
    let ar = [];
    if (y.length == 0) {
      ar = [v];
    }
    else {
      let keys = Object.keys(y);
      for (let k in keys) {ar[k] = y[k]};
      ar.push(v);
    }
    return mon.ret(ar);
};

monad.spliceRemove = function spliceRemove(x, index, location, mon) {
  if (Array.isArray(x)) {
    let ar = [];
    let keys = Object.keys(x[index]);
    for (let k in keys) {
      ar[k] = x[index][k];
    }
    ar.splice(location,1);
    return mon.ret(ar);  
  }
  console.log('Major malfunction in spliceRemove. x, index, location, mon: ', x, index, location, mon);
};

monad.spliceAdd = function spliceAdd(x, index, value, mon) {
  if (Array.isArray(x)) {
    let ar = [];
    let keys = Object.keys(x);
    for (let k in keys) {ar[k] = x[k]};
    ar.splice(index, 0, value);
    return mon.ret(ar);  
  }
  console.log('The value provided to spliceAdd is not an array');
  return ret(x);
};

monad.splice = function splice(x, start, n, mon) {
  if (Array.isArray(x)) {
    let ar = [];
    let keys = Object.keys(x);
    for (let k in keys) {ar[k] = x[k]};
    ar.splice(start, n);
    return mon.ret(ar);  
  }
  console.log('The value provided to splice is not an array');
  return ret(x);
};

monad.concat = function concat(x, str, mon) {
  mon.ret(x + str)
}

monad. sliceFront = function sliceFront(x, n, mon) {
  if (Array.isArray(x)) {
    let ar = x.slice(n);
    return mon.ret(ar);  
  }
  console.log('The value provided to sliceFront is not an array');
  return ret(x);
};

monad.filter = function filter(x, condition) {
  if (Array.isArray(x)) {
    let ar = ret(x);
    return ret(ar.x.filter(v => condition))
  }
  return ret(x);
}

monad.map = function map(x, f, mon) {
  if (Array.isArray(x)) {
    let ar = [];
    let keys = Object.keys(x);
    for (let k in keys) {
      ar[k] = f(x[k]);
      return mon.ret(ar);  
    }
  }
  console.log('The value provided to map is not an array');
  return ret(x);
};

monad.reduce = function reduce(x, f, mon) {
  console.log('In reduce.  Array.isArray(x), x.length: ', Array.isArray(x), x.length);
  if (Array.isArray(x) && x.length > 0) {
    let ar = [];
    let keys = Object.keys(x);
    for (let k in keys) {ar[k] = x[k]};
    console.log('ar in reduce is ', ar);
    return mon.ret(ar.reduce(f));  
  }
  console.log('The value provided to reduce is not an array or is empty . Value: ', x);
  return ret(x);
};

monad.next = function next(x, y, mon2, a1, a2) {
  if (x === y) {
    mon2.release(a1, a2);
  }
  return ret(x);
}

monad.next2 = function next(x, condition, mon2) {
  if (condition) {
    mon2.release();
  }
  return ret(x);
}

monad.next3 = function next(x, y, z, mon2) {
  if (x === y) {
    mon2.ret(z);
    mon2.release();
  }
  return ret(x);
}

monad.log = function log(x, message) {
  console.log('In log.  message is: ', message);
    return ret(x);
};

monad.getIndex = function getIndex (event_object) {
  var task = event_object.currentTarget.parentNode.innerText;
  var possibilities = event_object.currentTarget.parentNode.parentNode.childNodes;
  var keys = Object.keys(possibilities);
  for (let k in keys) {
    if (task == possibilities[k].innerText) {
      return k
    }
  }
  console.log('In getIndex. No match');
}

monad.getIndex2 = function getIndex2 (e) {
  var elem = e.currentTarget.parentNode.children[0].innerHTML
  var elem2 = e.currentTarget.parentNode.parentNode.childNodes
  var keys = Object.keys(elem2);
  for (let k in keys) {
    if (elem == elem2[k].childNodes[0].innerHTML) {
      return k
    }
    console.log('In getIndex2. No match');
  }
}

module.exports = monad;

// export default {O, ret, Monad, MonadIter, MonadStream, add, cube, push, equals, splice, map, filter, reduce, unshift, calc, spliceAdd, spliceRemove, sliceFront, next, next2, log, getIndex, getIndex2, concat,   };

