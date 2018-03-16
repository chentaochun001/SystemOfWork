// co 顺序执行异步，自动化方案
// es6的新特性 
// generator 生成器函数  async函数 
// 表达方式有创新，箭头函数
function* fn (a) {
    // 生成器函数可以添加一些异步操作，同步运行
    // 函数在执行过程一碰到yield就会停下来，让异步发生，手动执行，后面接promise
    a = yield a;
    let b = yield 2;
    let c = yield 3;
    return a + b + c;
}
function co (fn, ...args) {
    
    let g = fn(...args);
    return new Promise((resolve, reject) => {
        function next(lastValue) {
            // next 参数可以参与yield后面的计算
            let { value, done } = g.next(lastValue);
            if(done) {
                resolve(value);
            } else {
                next(value);
            }
        }
        next();
    })
    // fn()  只有执行了才能去迭代
    // 只有 next() 才能往下走， 返回值为done true | false 在resolve的那一刻
}
// return promise resolve(fn, result)
co(fn, 100)
.then(value => {
    console.log(value);
})
// 生成器生成一个迭代器 手动完成异步
// let g = fn();
// 上一次停下来的yield的值
// {value:?, done: true}
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
