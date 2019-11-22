import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import AppCustomer from './components/AppCustomer.vue';
import AppProduct from './components/AppProduct.vue';

const routes = [
  {name: "Customers", path: "/customers", component: AppCustomer},
  {name: "Products", path: "/products", component: AppProduct}
]

const router = new VueRouter({
routes,
linkExactActiveClass: "link-active",
mode: "history"
});

Vue.config.productionTip = false

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
