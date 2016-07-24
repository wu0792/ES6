'use strict';

var _bird;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var o = {
    flush: function flush(keepbuffer) {},

    hasBuffer: false
};

var o2 = {
    hasIterator: false,
    bufferManager: o };

var birth = '2000/1/1';
var Person = {
    name: 'Mary',
    birth: birth,
    sayHello: function sayHello() {
        console.log('hello, i\'m mary');
    }
};

var Point = {
    getLocation: function getLocation() {
        var x = 1;
        var y = 2;
        return { x: x, y: y };
    }
};

var cart = {
    _wheels: 4,
    get wheels() {
        return this._wheels;
    },
    set wheels(value) {
        if (value < this._wheels) {
            throw new Error('too small, shoud larger or equal than ' + _wheels);
        }
        this._wheels = value;
    }
};

var propKey = 'wing';
var bird = (_bird = {}, _defineProperty(_bird, 'has' + propKey, true), _defineProperty(_bird, 'can' + propKey, function () {
    return this['has' + propKey];
}), _bird);

var Num = function Num() {};
object.assign(Num.prototype, {
    start: function start() {},
    pause: function pause() {},
    stop: function stop() {},

    status: ''
});
Num.prototype.getStatus = function () {
    return this.status;
};

function clone(origin) {
    object.assign({}, origin);
}

var merge = function merge(target) {
    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        sources[_key - 1] = arguments[_key];
    }

    return object.assign(target, sources);
};

var DEFAULTS = {
    level: 0,
    format: 'html'
};

function process(options) {
    var realOptions = object.assign({}, DEFAULTS, options); //merge options parameter into default options
}