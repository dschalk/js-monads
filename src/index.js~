'use strict';

var subject = require("./most-subject");  

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
    this.p = function () {};
  
    this.release = function () {
      return this.p.apply(this, arguments);
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
  }
}
