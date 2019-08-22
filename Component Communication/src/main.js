import Vue from 'vue'
import App from './App.vue'
import serverEdit from './components/Server/Server.vue'

export const eventBus = new Vue()

Vue.component('app-server-edit', serverEdit)

new Vue({
  el: '#app',
  render: h => h(App)
})
