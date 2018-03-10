module.exports = {
  build: {
    // vendor 表示lib 不会变
    vendor: ['axios']
  },
  loading: {
    color: '#4FC08D',
    failColor: '#bf5050',
    duration: 1500
  },
  head: {
    title: 'Nuxt vue blog'
  },
  generate: {
    routes: [
      '/posts/1'
    ]
  }
}