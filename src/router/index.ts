import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';
import Login from '../views/Login.vue';
import NotFound from '../views/NotFound.vue';
import Forbidden from '../views/Forbidden.vue';
import Monitoring from '../views/Monitoring.vue';
import Aliyun from '../views/cloud/Aliyun.vue';


// 更新路由配置
const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: { requiresAuth: true },
    children: [
      { path: '', name: 'Home', component: () => import('../views/Home.vue') },
      // 这里可以添加更多需要main layout的页面
      { path: '/service', name: 'Service', component: () => import('../views/Service.vue') },
      { path: '/monitoring', name: 'Monitoring', component: Monitoring }, // 这种写法也可以
      { path: '/cloud/aliyun', name: 'Aliyun', component: Aliyun },
    ],
  },
  { path: '/login', name: 'Login', component: Login },

  { path: '/403', name: 'Forbidden', component: Forbidden },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth');
  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;