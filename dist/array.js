'use strict';

// Array.from
var arrayA = Array.from({
    '0': 0,
    '1': 1
});

var arrayB = Array.from({
    length: 3
});

//second function parameter used to map source el to target el
Array.from([1, 2, 3], function (e) {
    return e * e;
});

// code below equal to ahead
Array.from([1, 2, 3]).map(function (e) {
    return e * e;
});

//Array.fill
Array.from({
    length: 3
}).fill('init value');
//equal to
Array.from({
    length: 3
}).mpa(function (t) {
    return 'init value';
});

new Array(5).fill('hey');

//Array.of
Array.of(1, 2, 3);

//find / findIndex
[1, 2, 3, -5, -10].find(function (t) {
    return t < 0;
});
[1, 2, 3, -5, -10].findIndex(function (t) {
    return t < 0;
});

// keys(), values(), entries()
['a', 'b'].keys() //return iterator
[('a', 'b')].values()[('a', 'b')].entries()

//includes()
[(NaN, 1, 2, 3)].includes(1) //true
[(NaN, 1, 2, 3)].includes(NaN) //true
[(NaN, 1, 2, 3)].indexOf(NaN); // -1