'use strict';

import {subject} from 'most-subject'

var ret = function ret(v, id) {
  if (arguments.length === 1) {
    return (new Monad(v, 'anonymous'));
  }
  window[id] = new Monad(v, id);
  return window[id];
};

var Monad = function Monad(z, g) {
  var _this = this;

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
    O[_this.id] = new Monad(a,_this.id);
    return O[_this.id];
  };
}

var O = {};

module.exports = {

  O: {},
  
  Monad: function Monad(z, g) {
    var _this = this;
  
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
      O[_this.id] = new Monad(a,_this.id);
      return O[_this.id];
    };
  },
  
  MonadIter: function MonadIter() {
    var _this = this;
    this.p = function (a) {};
  
    this.release = function (x) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      this.p.apply(this, [x].concat(args));
    };
  
    this.bnd = function (func) {
      _this.p = func;
    };
  },
  
  MonadStream: function MonadStream(g) {
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
  },
  
  ret: function ret(v, id) {
    if (arguments.length === 1) {
      return (new Monad(v, 'anonymous'));
    }
    window[id] = new Monad(v, id);
    return window[id];
  },

  cube: function(v,mon) {
    if (arguments.length === 2) {
      return mon.ret(v*v*v);
    }
    return ret(v*v*v);
  },

  add: function(x,b,mon) {
    if (arguments.length === 3) {
      return mon.ret(x + b);
    }
    return ret(x+b);
  }
}
