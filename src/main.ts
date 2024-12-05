import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // 引入 Tailwind CSS 的样式

const app = createApp(App);

app.use(router);

app.mount('#app');