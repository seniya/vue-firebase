import Vue from 'vue'

Vue.config.errorHandler = e => {
  console.error('errorHandler : ', e.message)
  alert(e.message)
  // Vue.prototype.$toast.error(e.message)
  Vue.prototype.$toast.error(e.message)
}
