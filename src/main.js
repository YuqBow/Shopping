// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
/* eslint-disable no-new */
// js中使用new時是要赋值给某个变量的，但是vue实例化不需要赋值，所以这句可以去掉校验
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
