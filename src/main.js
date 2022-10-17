import {createApp} from 'vue'
import App from './App.vue'
const app = createApp(App);
import store from './store';

import './assets/scss/style.scss'


app.use(store)

app.mount('#app');