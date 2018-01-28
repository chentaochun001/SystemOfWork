<template>
  <form class="input-area">
      <label>用户名：</label>
      <input type="text" class="user" placeholder="请输入姓名" ref="input"/>
      <br>
      <label>评论：</label>
      <textarea class="textarea" placeholder="请畅所欲言" ref="content"></textarea>
      <br>
      <button type="button" @click="Submit">提交</button>
  </form>
</template>
<script>
export default {
  methods: {
      Submit () {
          let bit = 6;
          let account = Math.random.toFixed(bit) * Math.row (10, bit);
          console.log(account);
          let time = new Date.toLocaleString();
          let user = this.$refs.input.value;
          let content = this.$refs.content.value;
          console.log(time,user,content);
      }
  }
}
</script>
<style>

</style>
