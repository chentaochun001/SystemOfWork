import $ from "jquery";
// webpack 不会重复打包 jquery被n个文件引用  但最后只打包一个jquery 根据引用顺序进行打包
import template from "../template/picker.hbs";

export default class DatePicker {
    constructor (el, options) {
        console.log('DatePicker');
        this.createElement(options);
        this.delegateEvent(options);
    }
    createElement(options) {
        let o = {
            static: true,
            scattered: true,
            confirm: true
        }
        let item = $(template(o));
        item.appendTo(document.body);
        setTimeout(() => {
            item.removeClass('out')
        }, 10);
    }
    delegateEvent(options) {

    }
}