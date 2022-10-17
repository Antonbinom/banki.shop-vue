import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App);
import routers from './router';
import store from './store';

import './assets/scss/style.scss'

app.use(routers)
app.use(store)

app.mount('#app');