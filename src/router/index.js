import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Checkout from '../views/Checkout.vue';
import Goodbye from '../views/Goodbye.vue';
import Admin from '../views/Admin.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/checkout', component: Checkout },
  { path: '/goodbye', component: Goodbye },
  { path: '/admin', component: Admin }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
