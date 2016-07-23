// part I: let
let letA = ''
letA = 'yes'

function func1() {
    let innerA = 'inner scope'  //inner scope usage
    console.log(letA)

    let letA = 'again declare letA in inner scope'
}

let innerA = 'again declare innerA' //can be declared again
{
    let letA = 'again again.'
    {
        let letA = 'again again again'  //renamed automated, hehe
    }
}

//1 variable promotion
let arrA = []
for(var i = 0;i<10; i++){
    arrA[i] = function () {
        console.log(i)
    }
}
arrA[6]()  // 10  because of variable promotion

//2 let variable never be protmoted
let arrA2 = []
for(let j = 0; j < 10; j++){
    arrA2[j] = function (){
        console.log(j)
    }
}
arrA2[6]()  //6   let variable j in loop never be protmoted

//3
console.log(declaredBelowVar);  // output: any
console.log(declaredBelowLet);  // output: ReferenceError

var declaredBelowVar = 'any'
let declaredBelowLet = 'any any'

var anyVar = 123
if(true){
    anyVar = 'hi, nice to meet u'   //Actually here can throw ReferenceError
                                    //for the sake of TDA (variable of let type can not be used before the variable be declared)
    let anyVar
}

// 4
{{{{
    let heheNotVisible = 'yep, i am here'    
    }
    console.log(heheNotVisible) // throw ReferenceError, because the heheNotVisible can not be found in outter scope
}}}


//part II: const

// 1
const constA = 'no'
//constA = 'again'   "constA" is read-only

// 2
//let constA = 'declare again' //  Duplicate declaration "constA"

//3
const constArrayA = []
constArrayA.push('const variable can not be assigned again, but its method can be called')


