'use strict';

var _moduleExport = require('./module-export');

var _moduleExport2 = _interopRequireDefault(_moduleExport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var module_export_path = './module-export';

//no braces surround variable

console.log('first:' + _moduleExport.firstName + ',lastName:' + _moduleExport.lastName + ',area:' + _moduleExport.area + ',company:' + _moduleExport.company);
console.log('release:' + (0, _moduleExport.release)() + ',getFullName:' + (0, _moduleExport.getFullName)());
console.log('default:' + (0, _moduleExport2.default)());

//code below demonstrate import directive actually import the reference
(0, _moduleExport.setFullName)('Donald', 'Duck');
console.log('getFullName:' + (0, _moduleExport.getFullName)());