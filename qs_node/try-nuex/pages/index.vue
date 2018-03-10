<template>
  <div class="container">
    <h1>User Agent</h1>
    <p>{{ userAgent }}</p>
    <p>
      <nuxt-link to="/posts">Blog</nuxt-link>
    </p>
    <!-- <p>Welcome</p>
    <nuxt-link to="/about">About Page</nuxt-link> -->
  </div>
</template>
<script>
export default {
  asyncData: ({ req }) => ({
    // user-agent 表示用户服务器，可以查到用户用的版本号
    userAgent: (req ? req.headers['user-agent'] :
    (typeof navigator !== undefined ? navigator.userAgent: 'No user agent(generate)'))
  })
}
</script>
<style>

</style>
