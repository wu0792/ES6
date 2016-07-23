//Array destructed style assignment
//basic
let [a, b, c] = [1, 2, 3]

//skip some elements
let [,,g] = [8, 9, 10]

//complex structure
let [d, [e, ,[...f]]] = [4, [5, undefined, [6, 7]]]

//default value
let [i, h = 'hey u r nice', j = 'nice too', k = 'enn..'] = ['sunny', 'rainy', null, undefined]
// i: sunny
// h: rainy
// j: null  (only if the value if undefined the default value will be assigned)
// k: enn...

//===================================================================
//object destructed style assignment
let {name, length} = { name: 'nicky', length: 177.8}

// alias
let {prop: alias} = {prop: 'so lucky.'}

// undefined
let {notFoundKey} = {anyany: 'board'}
// notFoundKey = undefined

//default value
let {anotherKey = 'split here'} = {scope: 'inner'}
// so anotherKey === 'split here'

//assignment not declare
let varA = 'hi'
({varA} = {varA: 'hello'})

//get value by index from array
let arrayB = [0, 1, 2, 3]
let {0: first, [arrayB.length - 1]: last} = arrayB

//function param default value
function paint({color = 'white', brightness = .3}) {
    
}

paint({color: 'pink', brightness: .5})  //pink .5
paint({color: 'skyblue'})   //skyblue  .3
paint({brightness: .7}) //white .7
paint({})   //white .3
paint()     //white .3

//function return multiple value
function manyToReutrn() {
    // billons lines of code here.
    return {usedTime: 100, completion: 95, remark: 'customer r so happy'}
}

let {usedTime, remark} = manyToReutrn();    // get the corresponding prop from the return object

//destruct json object
let leaderA = {
    age: 31,
    workingYears: 5,
    managementYears: 2
}

let {age, workingYears, managementYears} = leaderA

//import specified modules
const {jQuery, gulp, loadash} = require('very magic')