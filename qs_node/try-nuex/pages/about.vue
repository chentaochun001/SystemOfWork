<template>
  <div>
    <p>Hi from {{name}}</p>
    <nuxt-link to="/">Back Home</nuxt-link>
  </div>
</template>
<script>
export default {
    asyncData() {
        return {
            name: process.static ? 'static' : (process.server ? 'server' : 'client')
        }
        // nuxt 本质是将.vue交给后端去渲染
        // webpack server-side-renderer react 有next.js 
        // .vue 编译成 html/css/js
        // data 需要区分 前端还是后端
    },
    head: {
        title: 'About Page'
    }
}
</script>
<style>

</style>
