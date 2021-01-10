import Vue from 'vue';
import Vuex from 'vuex';

import ShiftModule from './Shift';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ShiftModule,
  },
});
