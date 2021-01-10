
import { getListShift, createShift, updateShift, deleteShift } from '@/services/shift';

const getters = {
  listShift: state => state.listShift,
};

const actions = {
  async requestListShift({ commit }) {
    try {
      const listShift = await getListShift();
      commit('SET_LIST_SHIFT', listShift);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
  async requestAddShift({ dispatch }, shift) {
    try {
      await createShift(shift);
      dispatch('requestListShift');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
  async requestUpdateShift({ dispatch }, idShift, shift) {
    try {
      await updateShift(idShift, shift);
      dispatch('requestListShift');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
  async requestRemoveShift({ dispatch }, idShift) {
    try {
      await deleteShift(idShift);
      dispatch('requestListShift');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  },
};

const mutations = {
  SET_LIST_SHIFT(state, listShift) {
    state.listShift = listShift;
  },
};

export default {
  namespaced: true,
  state: {
    listShift: [],
  },
  getters,
  actions,
  mutations,
};
