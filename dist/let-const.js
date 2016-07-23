'use strict';

// part I: let
var letA = '';
letA = 'yes';

function func1() {
    var innerA = 'inner scope'; //inner scope usage
    console.log(letA);

    var letA = 'again declare letA in inner scope';
}

var innerA = 'again declare innerA'; //can be declared again
{
    var _letA = 'again again.';
    {
        var _letA2 = 'again again again'; //renamed automated, hehe
    }
}

//1 variable promotion
var arrA = [];
for (var i = 0; i < 10; i++) {
    arrA[i] = function () {
        console.log(i);
    };
}
arrA[6](); // 10  because of variable promotion

//2 let variable never be protmoted
var arrA2 = [];

var _loop = function _loop(j) {
    arrA2[j] = function () {
        console.log(j);
    };
};

for (var j = 0; j < 10; j++) {
    _loop(j);
}
arrA2[6](); //6   let variable j in loop never be protmoted

//3
console.log(declaredBelowVar); // output: any
console.log(declaredBelowLet); // output: ReferenceError

var declaredBelowVar = 'any';
var declaredBelowLet = 'any any';

var anyVar = 123;
if (true) {
    _anyVar = 'hi, nice to meet u'; //Actually here can throw ReferenceError
    //for the sake of TDA (variable of let type can not be used before the variable be declared)
    var _anyVar = void 0;
}

// 4
{
    {
        {
            {
                var _heheNotVisible = 'yep, i am here';
            }
            console.log(heheNotVisible); // throw ReferenceError, because the heheNotVisible can not be found in outter scope
        }
    }
}

//part II: const

// 1
var constA = 'no';
//constA = 'again'   "constA" is read-only

// 2
//let constA = 'declare again' //  Duplicate declaration "constA"

//3
var constArrayA = [];
constArrayA.push('const variable can not be assigned again, but its method can be called');