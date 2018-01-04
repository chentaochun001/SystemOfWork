import $ from 'jquery';
// webpack 一切皆可打包
import template from '../template/user.hbs';
const user = {
    name: "杰哥",
    age: 18,
    photo: "https://tse1-mm.cn.bing.net/th?id=OIP.rSLlL0dSjlupE_-k_QomjwHaKV&w=181&h=253&c=7&o=5&pid=1.7"

}

$(function() {    
    let item = $(template(user));
    item.appendTo($('#root'));
})