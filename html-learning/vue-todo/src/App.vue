<template>
    <div id="app" class="container">
        <div class="todo-wrapper">
            <todo-header></todo-header>
            <div class="todo-content">
                <todo-report></todo-report>
                <todo-list :collection="listState.items"></todo-list>
            </div>
        </div>
    </div>
</template>
<script>
    // 引用组件，使用第三方组件
    import ListStore from '../data/store.js';
    import TodoHeader from './components/TodoHeader.vue';
    import TodoReport from './components/TodoReport.vue';
    import TodoList from './components/TodoList.vue';

    export default {
        data () {
            return {
                listState: ListStore.state
            }
        },
        components: {
            // "todo-header": Header,
            // "todo-report":  TodoReport,
            // "todo-list": TodoList

            // 简写
            TodoHeader,
            TodoReport,
            TodoList
        }
    }
</script>
<style lang="stylus">
@import "../styl/style.styl";
</style>
