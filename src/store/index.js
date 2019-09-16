import Vue from 'vue';
import Vuex from 'vuex';
import swapi from '../utils/swapi';

Vue.use(Vuex);

const filmsCache = localStorage.getItem('films')
  ? JSON.parse(localStorage.getItem('films'))
  : false;

export default new Vuex.Store({
  state: {
    films: filmsCache || [],
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    isLoading: !filmsCache
  },
  mutations: {
    LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_FILMS(state, films) {
      state.films = films.results;
      localStorage.setItem('films', JSON.stringify(films.results));
    }
  },
  actions: {
    async fetchData({ commit }) {
      const response = await swapi.films();

      // Set films array
      commit('SET_FILMS', response);

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
    },
    getFilm: state => episodeId => {
      return state.films.filter(film => film.episode_id === episodeId);
    }
  }
});
