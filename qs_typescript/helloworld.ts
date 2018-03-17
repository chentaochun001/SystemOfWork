// ts 带来了预编译的js 从动态语言，静态，
// 类型检测，杜绝错误
// typescript 带来了哪些类型？
// 用类型来约束代码

let isDone:boolean = false
isDone = true
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let notNumber: number = NaN;
let infinityNumber: number = Infinity;

let myName: string = 'Amy';
let myAge: number = 25;
let sentence: string = `Hello, my name is ${myName}. I will be ${myAge + 1} years old next month`;

// typescript 认为undefined是其他类型的子类型
let u: undefined = undefined;
let n: null = null;
let num2: number = undefined;

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7;

function getLength( something: string | number): string {
    // return 7
    return something.toString()
}

// interface 设计模式是针对接口的模式
interface Person {
    name: string;
    age: number;
}
let tom: Person = {
    name: 'Tom',
    age: 25
}


interface Alarm {
    alert()
}
interface Light {
    LightOff();
    LightOn();
}
class Car implements Alarm, Light {
    alert() {
        console.log('Car alert');
    }
    LightOn() {
        console.log('Car light on');
    }
    LightOff() {
        console.log('Car light off');
    }
}

class Door {}
class SecurityDoor extends Door implements Alarm{
    alert() {

    }
}

function sayHello(person:string) {
    return 'Hello, ' + person;
}

let user = 'Amy';
console.log(sayHello(user));

// typescript 中的泛型：
// 是指在定义函数，接口或类的时候，不预先指定具体的类型，在使用时再指定类型的一种特性
// 创建数组，要适应很多情况，可能是数值数组，字符数组，T表示泛型

function createArray<T>(length: number, value: T):Array<T> {
    let result: T[] = [];
    for(let i = 0; i < length; i++) {
        result[i] = value
    }
    return result;
}

// 数组类型的定义
let fibonacci: number[] = [1,1,2,4];

// any 表示任何类型，
let list: any[] = ['Xcat Liu', 25, {
    website: 'http://www.baidu.com'
}]

// IArguments 内部的实现
function sum() {
    let args:IArguments = arguments
}

// 函数表达 后面的number表示返回值的类型
function add(a: number, b: number):number {
    return a+b;
}

// ?: 表示这个属性不一定必填
function buildName(firstName: string, lastName?: string): string {
    if(firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
}

let xcatliu: [string, number] = ['Xcat Liu', 25];

// 未对类型定义时会对类型进行判断
let myFavoriteNumber2:string = 'seven';
myFavoriteNumber2 = 'one';

// 枚举 enum 
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}
console.log(Days["Sun"] === 0)
