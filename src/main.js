import { createApp } from 'vue'
import router from '@/router'
import store from '@/store';
import './style/index.scss';
import App from './App.vue'

const app = createApp(App)
// app.use(ElementPlus)
app.use(router);
app.use(store);
app.mount('#app')
