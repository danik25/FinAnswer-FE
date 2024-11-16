import { createRouter, createWebHistory } from 'vue-router';
import Login from '@/components/account/Login.vue';
import Home from '../views/Home.vue';
import LoginRegister from '@/views/LoginRegister.vue';

const routes = [
  {
    path: '/',
    redirect: '/accounts'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/accounts',
    name: 'Register and login',
    component: LoginRegister,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
