import { createApp } from 'vue'
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import AppHome from './pages/AppHome.vue';
import AppPortfolio from './pages/AppPortfolio.vue';
import AppContact from './pages/AppContact.vue';



const routes = [
    {path: '/', component: AppHome },
    {path: '/portfolio', component: AppPortfolio },
    {path: '/contacts', component: AppContact },

    

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
})


createApp(App).use(router).mount('#app')