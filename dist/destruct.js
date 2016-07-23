'use strict';

var _varA;

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

//Array destructed style assignment
//basic
var a = 1;
var b = 2;
var c = 3;

//skip some elements

var _ref = [8, 9, 10];
var g = _ref[2];

//complex structure

var d = 4;
var _ref2 = [5, undefined, [6, 7]];
var e = _ref2[0];

var _ref2$ = _toArray(_ref2[2]);

var f = _ref2$;

//default value

var i = 'sunny';
var _rainy = 'rainy';
var h = _rainy === undefined ? 'hey u r nice' : _rainy;
var _ref3 = null;
var j = _ref3 === undefined ? 'nice too' : _ref3;
var _undefined = undefined;
var k = _undefined === undefined ? 'enn..' : _undefined;
// i: sunny
// h: rainy
// j: null  (only if the value if undefined the default value will be assigned)
// k: enn...

//===================================================================
//object destructed style assignment

var _name$length = { name: 'nicky', length: 177.8 };
var name = _name$length.name;
var length = _name$length.length;

// alias

var _prop = { prop: 'so lucky.' };
var alias = _prop.prop;

// undefined

var _anyany = { anyany: 'board' };
var notFoundKey = _anyany.notFoundKey;
// notFoundKey = undefined

//default value

var _scope = { scope: 'inner' };
var _scope$anotherKey = _scope.anotherKey;
var anotherKey = _scope$anotherKey === undefined ? 'split here' : _scope$anotherKey;
// so anotherKey === 'split here'

//assignment not declare

var varA = 'hi'((_varA = { varA: 'hello' }, varA = _varA.varA, _varA));

//get value by index from array
var arrayB = [0, 1, 2, 3];
var first = arrayB[0];
var last = arrayB[arrayB.length - 1];

//function param default value

function paint(_ref4) {
    var _ref4$color = _ref4.color;
    var color = _ref4$color === undefined ? 'white' : _ref4$color;
    var _ref4$brightness = _ref4.brightness;
    var brightness = _ref4$brightness === undefined ? .3 : _ref4$brightness;
}

paint({ color: 'pink', brightness: .5 }); //pink .5
paint({ color: 'skyblue' }); //skyblue  .3
paint({ brightness: .7 }); //white .7
paint({}); //white .3
paint(); //white .3

//function return multiple value
function manyToReutrn() {
    // billons lines of code here.
    return { usedTime: 100, completion: 95, remark: 'customer r so happy' };
}

var _manyToReutrn = manyToReutrn();

var usedTime = _manyToReutrn.usedTime;
var remark = _manyToReutrn.remark; // get the corresponding prop from the return object

//destruct json object

var leaderA = {
    age: 31,
    workingYears: 5,
    managementYears: 2
};

var age = leaderA.age;
var workingYears = leaderA.workingYears;
var managementYears = leaderA.managementYears;

//import specified modules

var _require = require('very magic');

var jQuery = _require.jQuery;
var gulp = _require.gulp;
var loadash = _require.loadash;