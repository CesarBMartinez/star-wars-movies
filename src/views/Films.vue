<template>
  <section>
    <h1>Movies</h1>
    <list-films v-on:openingCrawl="openingCrawl"></list-films>
    <opening-crawl
      :film="selectedFilm"
      :show="showOpening"
      :onClose="onClose"
    ></opening-crawl>
  </section>
</template>

<script>
import ListFilms from '../components/ListFilms.vue';
import OpeningCrawl from '../components/OpeningCrawl.vue';
import store from '../store';

export default {
  name: 'films',
  components: {
    ListFilms,
    OpeningCrawl
  },
  beforeRouteEnter(to, from, next) {
    if (store.getters.films.length === 0) {
      store.dispatch('toogleLoader', true);
      store.dispatch('fetchData').then(() => next());
    } else {
      next();
    }
  },
  data() {
    return {
      selectedFilm: null,
      showOpening: false
    };
  },
  methods: {
    onClose() {
      this.showOpening = false;
    },
    openingCrawl(film) {
      this.selectedFilm = film;
      this.showOpening = true;
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: white;
}
</style>
