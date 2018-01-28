import Vue from 'vue';
// 使用 vue 构建 webapp 
import App from './App.vue';
// 将App 挂载 mount 到页面 root 上 其他组件挂载到App上（挂载点）

// Vue实例也是一个组件
new Vue({
    el: "#root",  //挂载点
    template: "<App />",  // 模板
    // 第三方组件都需要components来声明
    components: {
        App
    }
})