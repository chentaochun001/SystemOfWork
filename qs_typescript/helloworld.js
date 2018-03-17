// ts 带来了预编译的js 从动态语言，静态，
// 类型检测，杜绝错误
// typescript 带来了哪些类型？
// 用类型来约束代码
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var isDone = false;
isDone = true;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var notNumber = NaN;
var infinityNumber = Infinity;
var myName = 'Amy';
var myAge = 25;
var sentence = "Hello, my name is " + myName + ". I will be " + (myAge + 1) + " years old next month";
// typescript 认为undefined是其他类型的子类型
var u = undefined;
var n = null;
var num2 = undefined;
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
function getLength(something) {
    // return 7
    return something.toString();
}
var tom = {
    name: 'Tom',
    age: 25
};
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.alert = function () {
        console.log('Car alert');
    };
    Car.prototype.LightOn = function () {
        console.log('Car light on');
    };
    Car.prototype.LightOff = function () {
        console.log('Car light off');
    };
    return Car;
}());
var Door = /** @class */ (function () {
    function Door() {
    }
    return Door;
}());
var SecurityDoor = /** @class */ (function (_super) {
    __extends(SecurityDoor, _super);
    function SecurityDoor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecurityDoor.prototype.alert = function () {
    };
    return SecurityDoor;
}(Door));
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Amy';
console.log(sayHello(user));
// typescript 中的泛型：
// 是指在定义函数，接口或类的时候，不预先指定具体的类型，在使用时再指定类型的一种特性
// 创建数组，要适应很多情况，可能是数值数组，字符数组，T表示泛型
function createArray(length, value) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}
// 数组类型的定义
var fibonacci = [1, 1, 2, 4];
// any 表示任何类型，
var list = ['Xcat Liu', 25, {
        website: 'http://www.baidu.com'
    }];
// IArguments 内部的实现
function sum() {
    var args = arguments;
}
// 函数表达 后面的number表示返回值的类型
function add(a, b) {
    return a + b;
}
// ?: 表示这个属性不一定必填
function buildName(firstName, lastName) {
    if (firstName) {
        return firstName + ' ' + lastName;
    }
    else {
        return lastName;
    }
}
var xcatliu = ['Xcat Liu', 25];
// 未对类型定义时会对类型进行判断
var myFavoriteNumber2 = 'seven';
myFavoriteNumber2 = 'one';
// 枚举 enum 
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days["Sun"] === 0);
