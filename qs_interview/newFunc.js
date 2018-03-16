function new2(func) {
    // 1 func 构造函数的执行
    // var obj1 = obj; //引用式赋值
    let o =  Object.create(func.prototype)
    let k = func.call(o)  
    // 生成一个对象 私有的__proto__属性指向
    return typeof k === 'object' ? k : o;
    return o
    // 2 obj 原型链对象必须为func
    // 3 返回一个obj
}
function M () {
    this.name = 'Amy';
}
let m = new2(M);
console.log(m instanceof M);
console.log(m instanceof Object); // 对象的实例
console.log(m.__proto__.constructor === M );
console.log(m.__proto__ === M.prototype );

// Object.create()
