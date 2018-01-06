<template>
  <div id="app">
    <counter-down></counter-down>
    <counter-footer></counter-footer>
  </div>
</template>

<script>
import CounterDown from './components/CounterDown.vue';
import CounterFooter from './components/CounterFooter.vue';

export default {
  name: 'app',
  components: {
    CounterDown,
    CounterFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
