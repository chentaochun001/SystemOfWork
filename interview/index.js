// 如何判断一个变量是对象还是数组？
// 方法一：使用Object.prototype.toString.call()方法，兼容性较好
function isObjArr(value) {
    if(Object.prototype.toString.call(value) === "[object Array]") {
        console.log('数组');
    } else if (Object.prototype.toString.call(value) === '[object Object]') {
        console.log('既不是对象也不是数组');
    } else {
        console.log('既不是对象也不是数组');
    }
}

isObjArr('a');  // 既不是对象也不是数组
var a = {}
isObjArr(a);   // 对象
var b = [];
isObjArr(b);   // 数组


//方法二：使用判断typeof的类型再判断长度

var o = {'name': 'lee'};
var a = ['reg', 'blue'];
var b = 'aa';
var getDataType = function(value) {
    if(typeof value == 'object') {
        if(typeof value.length == 'number') {
            console.log(value + ' 为Array');
        } else{
            console.log(value + ' 为Object');
        }
    } else {
        console.log(value + '既不是数组也不是对象');
    }
}
getDataType(o);
getDataType(a);
getDataType(b);


//方法三：使用instanceof判断，先判断数组再判断对象 

var o = { 'name': 'lee'};
var a = ['reg', 'blue'];
var b = '';

// console.log(a instanceof Array);
// console.log(o instanceof Array);
// console.log(a instanceof Object);
// console.log(o instanceof Object);

var getDataType = function(value) {
    if(value instanceof Array) {
        console.log('是数组');
    } else if (value instanceof Object) {
        console.log('是对象');
    } else {
        console.log('既不是数组也不是对象');
    }
}
getDataType(o);
getDataType(a);
getDataType(b);



