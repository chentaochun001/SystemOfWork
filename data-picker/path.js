// common.js 规范，是node作为js的后端实现，也是node最成功的地方 在node环境下运行
const path = require('path');
// 返回的是绝对路径，写完了代码之后，可能会换目录存放，使用__dirname 将不受改变影响

// path.resolve 提供一个路径的解决方案
console.log(path.resolve(__dirname, 'dist'));
