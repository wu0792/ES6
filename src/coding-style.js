'use strict';

//1: var is dead, using let instead, if variable will never be assigned again, use const
//bad
var array = []
for(var i = 0; i < 10; i++){
    array[i] = function(){
        return i
    }
}
console.log(`array[5]=${array[5]()}`)

//good
let array2 = []
for(let j = 0; j < 10; j++){
    array2[j] = function(){
        return j
    }
}
console.log(`array2[5]=${array2[5]()}`)

//2: using '' to surround the static string, using `` to surround the dynamic string
let url = 'http://g.cn'
let query = 'gws_rd=ssl,cr'
let fullUrl = `${url}?${query}`

//3: destruct assign not array
let array3 = [1, 2, 3, 4]

//bad
let firstEl = array3[0]
let secondEl = array3[1]

//good
let {firstEl2, secondEl2} = array3

//4: array:  using ... to copy array
let array4 = [1, 2, 3]
let copyArray4 = [...array4]


//5: using => function 
//bad
[1, 2, 3].map(function(x) {
    return x*x
})

//good
[1, 2, 3].map(x => { return x*x });

[1, 2, 3].map(x => x*x)

//6: using class not prototype
//bad
function Queue(contents = []) {
    this._queue = [...contents]
}
Queue.prototype.pop = function() {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
}

//good
class Queue2{
    constructor(contents = []){
        this._queue = [...contents]
    }
    pop(){
        const value = this._queue[0]
        this._queue.splice(0, 1)
        return value
    }
}

//7: import not require
//bad
const moduleA = require('moduleA')
const prize = moduleA.prize
const winner = moduleA.winner

//good
import {prize2, winner2} from 'moduleA2'


