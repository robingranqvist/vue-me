import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

// Pages
import Home from './Home.vue';
import Report from './Report.vue';
import Week from './Week.vue';

// Weeks
import Week1 from './components/weeks/Week1.vue';

// Nav component
import Nav from './components/Nav.vue';
Vue.component('app-nav', Nav);

// Footer
import Footer from './components/Footer.vue';
Vue.component('app-footer', Footer);

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    name: 'Hem',
    component: Home 
  },
  { 
    path: '/reports',
    name: 'Rapporter',
    component: Report,
    children: [
      {
        path: 'week',
        name: 'Vecka',
        component: Week,
        children: [{
          path: '1',
          name: 'Vecka 1',
          component: Week1
        }]
      }
    ]
  }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
