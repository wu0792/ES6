//basic replacement
let date = new Date()
let nowStr = `it is ${date} now.`

//array
let levelList = [
    {num: 1, count: 310},
    {num: 2, count: 220},
    {num: 3, count: 322}
]

let html = '';
levelList.forEach(l=>{
    html += `
    <tr>
        <td>${l.num}</td>
        <td>${l.count}</td>
    </tr>
    `
})

//escape character
let seldom = `the \`\` can used to represent special string for replacement`

//function  and expression can be used in ${}
function getName() {
    return 'lily a'
}
function getLocation() {
    return {area: 'NanShan', province: 'GuangDong'}
}
let funcSample = `my name is ${getName()}`
let expressionSample = `my location is ${getLocation().province + ',' + getLocation().area}`

//if the variable not defined
let notDefinedVal = `enn this is ${theFamouseStar}` //ReferenceError

 //nested generated template
 const genTableHtml = addrs => `
    <table>
    ${addrs.map(addr=>`
        <tr><td>${addr.name}</td><td>${addr.location}</td></tr>
    `)}
    </table>`

let addrsData = [
    {name: 'LA', location: 'USA'},
    {name: 'BJ', location: 'CN'}
]
let tableHtml = genTableHtml(addrsData)