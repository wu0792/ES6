let o = {
    flush(keepbuffer){

    },
    hasBuffer: false
}

let o2 = {
    hasIterator:false,
    bufferManager:o}

let birth = '2000/1/1'
let Person = {
    name: 'Mary',
    birth,
    sayHello(){
        console.log('hello, i\'m mary')
    }
}

let Point = {
    getLocation(){
        let x = 1
        let y = 2
        return {x, y}
    }
}

let cart = {
    _wheels: 4,
    get wheels(){
        return this._wheels
    },
    set wheels(value){
        if(value < this._wheels){
            throw new Error(`too small, shoud larger or equal than ${_wheels}`)
        }
        this._wheels = value
    }
}

let propKey = 'wing'
let bird= {
    ['has' + propKey]: true,
    ['can' + propKey](){
        return this['has' + propKey]
    }
}

let Num = function(){}
object.assign(Num.prototype, {
    start(){},
    pause(){},
    stop(){},
    status: ''
})
Num.prototype.getStatus = function(){
    return this.status
}

function clone(origin){
    object.assign({}, origin)
}

const merge = (target, ...sources) => object.assign(target, sources)

const DEFAULTS = {
    level: 0,
    format: 'html'
}

function process(options){
    let realOptions = object.assign({}, DEFAULTS, options)  //merge options parameter into default options
}

