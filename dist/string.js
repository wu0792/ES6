'use strict';

//basic replacement
var date = new Date();
var nowStr = 'it is ' + date + ' now.';

//array
var levelList = [{ num: 1, count: 310 }, { num: 2, count: 220 }, { num: 3, count: 322 }];

var html = '';
levelList.forEach(function (l) {
    html += '\n    <tr>\n        <td>' + l.num + '</td>\n        <td>' + l.count + '</td>\n    </tr>\n    ';
});

//escape character
var seldom = 'the `` can used to represent special string for replacement';

//function  and expression can be used in ${}
function getName() {
    return 'lily a';
}
function getLocation() {
    return { area: 'NanShan', province: 'GuangDong' };
}
var funcSample = 'my name is ' + getName();
var expressionSample = 'my location is ' + (getLocation().province + ',' + getLocation().area);

//if the variable not defined
var notDefinedVal = 'enn this is ' + theFamouseStar; //ReferenceError

//nested generated template
var genTableHtml = function genTableHtml(addrs) {
    return '\n    <table>\n    ' + addrs.map(function (addr) {
        return '\n        <tr><td>' + addr.name + '</td><td>' + addr.location + '</td></tr>\n    ';
    }) + '\n    </table>';
};

var addrsData = [{ name: 'LA', location: 'USA' }, { name: 'BJ', location: 'CN' }];
var tableHtml = genTableHtml(addrsData);