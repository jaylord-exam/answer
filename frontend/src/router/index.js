import Vue from 'vue';
import VueRouter from 'vue-router';
import CustomersView from '../views/CustomersView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'customers',
    component: CustomersView
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: LoginView
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
