// jquery 是date-picker的依赖 es6模块化
import $ from 'jquery';

// 把事件绑定在外层 不容易出错, jquery封装的事件冒泡，
// 在事件注册时不在本事件注册，直接在body根上进行注册，性能会提高

import Factory from './Factory';

// console.log('Amy');
$('body').on('click', '.tqb-date-picker-input', event => {
    let target = $(event.currentTarget);
    console.log(event.target);
    console.log(target);
    let options = target.data();
    console.log(options);
    // Factory 用的太大了吧？ 如果别的地方也要用Factory概念？ 打包时会用命名空间， 外界访问不到Factory
    let picker = Factory.createDatePicker(target, options);

    // let target = $(event.currentTarget);
})
