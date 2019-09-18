import Vue from 'vue';
import Vuex from 'vuex';
import swapi from '../utils/swapi';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    films: [],
    isLoading: false
  },
  mutations: {
    LOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
    SET_FILMS(state, films) {
      state.films = films.results;
    },
    SET_FILM_RESOURCES(state, data) {
      const filmIndex = state.films.findIndex(
        film => film.episode_id === data.episodeId
      );
      const resources = {
        characters: data.responses[0],
        planets: data.responses[1],
        starships: data.responses[2],
        vehicles: data.responses[3],
        species: data.responses[4]
      };

      // Merge resources into film obj in films array
      Vue.set(state.films, filmIndex, { ...state.films[filmIndex], resources });
    }
  },
  actions: {
    async fetchData({ commit, dispatch }) {
      const response = await swapi.films();

      // Set films array
      commit('SET_FILMS', response);

      // Hide Loader
      dispatch('toogleLoader', false);
    },
    async fetchResources({ state, commit }, episodeId) {
      const film = state.films.find(film => film.episode_id === episodeId);
      const promises = [
        swapi.fetchResources(film.characters),
        swapi.fetchResources(film.planets),
        swapi.fetchResources(film.starships),
        swapi.fetchResources(film.vehicles),
        swapi.fetchResources(film.species)
      ];
      const responses = await Promise.all(promises);

      // Set films array
      commit('SET_FILM_RESOURCES', { episodeId, responses });
    },
    toogleLoader({ commit }, value = false) {
      commit('LOADING', value);
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
      return state.films.find(film => film.episode_id === episodeId);
    }
  }
});
