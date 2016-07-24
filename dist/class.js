'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var people = function () {
    function people() {
        _classCallCheck(this, people);
    }

    _createClass(people, [{
        key: 'eat',
        value: function eat() {}
    }, {
        key: 'drink',
        value: function drink() {}
    }, {
        key: 'speak',
        value: function speak() {}
    }]);

    return people;
}();

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, [{
        key: 'toString',
        value: function toString() {
            return '(' + this.x + ',' + this.y + ')';
        }
    }]);

    return Point;
}();

var point = new Point(1, 2);
console.log(point.toString());

var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPoint).call(this, x, y));

        _this.color = color;
        return _this;
    }

    _createClass(ColorPoint, [{
        key: 'toString',
        value: function toString() {
            return 'Location:' + _get(Object.getPrototypeOf(ColorPoint.prototype), 'toString', this).call(this) + '(color:' + this.color + ')';
        }
    }, {
        key: 'getColor',
        value: function getColor() {
            return this.color;
        }
    }]);

    return ColorPoint;
}(Point);

var colorPoint = new ColorPoint(3, 4, 'red');
console.log(colorPoint.toString());
console.log('color:' + colorPoint.getColor());