import Vue from 'vue';
import App from './src/App.vue';
console.log(App)

window.onload = function () {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}

