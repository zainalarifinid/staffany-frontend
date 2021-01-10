import Vue from 'vue';
import Router from 'vue-router';
import ListShift from '@/views/ListShift';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ListShift',
      component: ListShift,
    },
  ],
});
