import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import ProductPage from '../views/ProductPage.vue';
import PartnersPage from '../views/PartnersPage.vue';
import ContactsPage from '../views/ContactsPage.vue';

const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/products', component: ProductPage },
    { path: '/partners', component: PartnersPage },
    { path: '/contacts', component: ContactsPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
