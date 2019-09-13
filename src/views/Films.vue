<template>
  <section>
    <h1>Movies</h1>
    <list-films></list-films>
  </section>
</template>

<script>
import ListFilms from '../components/ListFilms.vue';

export default {
  name: 'films',
  components: {
    ListFilms
  }
};
</script>

<style lang="scss" scoped>
h1 {
  color: $cl-yellow;
}
</style>
