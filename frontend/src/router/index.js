
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Assess from '../views/Assess.vue';
import Analyze from '../views/Analyze.vue';
import Act from '../views/Act.vue';
import startassesment  from '../views/startassesment.vue';
import Startassesment from '../views/startassesment.vue';
import thankyou from '../views/thankyou.vue';
import Thankyou from '../views/thankyou.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/assess', name: 'Assess', component: Assess },
  { path: '/analyze', name: 'Analyze', component: Analyze },
  { path: '/act', name: 'Act', component: Act },
  { path: '/startassesment',component: Startassesment},
  { path: '/thankyou',name:'ThankYou',component: Thankyou},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
