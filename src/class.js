'use strict';

class people{
    eat(){}
    drink(){}
    speak(){}
}

class Point{
    constructor(x, y){
        this.x = x
        this.y = y
    }

    toString(){
        return `(${this.x},${this.y})`
    }
}

let point = new Point(1, 2)
console.log(point.toString())

class ColorPoint extends Point{
    constructor(x, y, color){
        super(x, y)
        this.color = color
    }

    toString(){
        return `Location:${super.toString()}(color:${this.color})`
    }

    getColor(){
        return this.color
    }
}

let colorPoint = new ColorPoint(3, 4, 'red')
console.log(colorPoint.toString())
console.log(`color:${colorPoint.getColor()}`)