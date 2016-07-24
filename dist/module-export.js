'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getFullName = getFullName;
exports.setFullName = setFullName;

exports.default = function () {
    return 'default function here.';
};

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var firstName = exports.firstName = 'Micky';
var lastName = exports.lastName = 'Mouse';

var year = 1958;
var area = 'USA';
var company = 'Disney';

exports.area = area;
exports.company = company;
function getFullName() {
    return firstName + ' ' + lastName;
}

function setFullName() {
    var firstNameNew = arguments.length <= 0 || arguments[0] === undefined ? firstName : arguments[0];
    var lastNameNew = arguments.length <= 1 || arguments[1] === undefined ? lastName : arguments[1];

    exports.firstName = firstName = firstNameNew;
    exports.lastName = lastName = lastNameNew;
}

var ReleaseInfo = function () {
    function ReleaseInfo(area, year, company) {
        var author = arguments.length <= 3 || arguments[3] === undefined ? 'unknown' : arguments[3];

        _classCallCheck(this, ReleaseInfo);

        this.area = area;
        this.year = year;
        this.company = company;
        this.author = author;
    }

    _createClass(ReleaseInfo, [{
        key: 'toString',
        value: function toString() {
            return 'area:' + this.area + ',year:' + this.year + ',company:' + this.company + ',author:' + this.author;
        }
    }]);

    return ReleaseInfo;
}();

function getReleaseInfo() {
    return new ReleaseInfo(area, year, company);
}

exports.release = getReleaseInfo;