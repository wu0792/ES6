'use strict';

//1: var is dead, using let instead, if variable will never be assigned again, use const
//bad

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moduleA = require('moduleA2');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var array = [];
for (var i = 0; i < 10; i++) {
    array[i] = function () {
        return i;
    };
}
console.log('array[5]=' + array[5]());

//good
var array2 = [];

var _loop = function _loop(j) {
    array2[j] = function () {
        return j;
    };
};

for (var j = 0; j < 10; j++) {
    _loop(j);
}
console.log('array2[5]=' + array2[5]());

//2: using '' to surround the static string, using `` to surround the dynamic string
var url = 'http://g.cn';
var query = 'gws_rd=ssl,cr';
var fullUrl = url + '?' + query;

//3: destruct assign not array
var array3 = [1, 2, 3, 4];

//bad
var firstEl = array3[0];
var secondEl = array3[1];

//good
var firstEl2 = array3.firstEl2;
var secondEl2 = array3.secondEl2;

//4: array:  using ... to copy array

var array4 = [1, 2, 3];
var copyArray4 = [].concat(array4)

//5: using => function 
//bad
[(1, 2, 3)].map(function (x) {
    return x * x;
})

//good
[(1, 2, 3)].map(function (x) {
    return x * x;
});

[1, 2, 3].map(function (x) {
    return x * x;
});

//6: using class not prototype
//bad
function Queue() {
    var contents = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    this._queue = [].concat(_toConsumableArray(contents));
}
Queue.prototype.pop = function () {
    var value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
};

//good

var Queue2 = function () {
    function Queue2() {
        var contents = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, Queue2);

        this._queue = [].concat(_toConsumableArray(contents));
    }

    _createClass(Queue2, [{
        key: 'pop',
        value: function pop() {
            var value = this._queue[0];
            this._queue.splice(0, 1);
            return value;
        }
    }]);

    return Queue2;
}();

//7: import not require
//bad


var moduleA = require('moduleA');
var prize = moduleA.prize;
var winner = moduleA.winner;

//good