import Vue from 'vue';
import Vuex from 'vuex';
import swapi from '../utils/swapi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    isLoading: true
  },
  mutations: {
    LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_FILMS(state, films) {
      state.films = films.results;
    }
  },
  actions: {
    async fetchData({ commit }) {
      const response = await Promise.all([swapi.get('films')]);
      // Fill films array
      commit('SET_FILMS', response[0]);

      // Hide Loader
      commit('LOADING', false);
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    films(state) {
      return state.films;
    }
  }
});
