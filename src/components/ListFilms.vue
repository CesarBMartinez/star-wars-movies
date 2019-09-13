<template>
  <div class="list-films">
    <div class="list-item" v-for="film in films" :key="film.episode_id">
      <img
        :src="require(`@/assets/img/star-wars-episode-${film.episode_id}.jpg`)"
        :alt="film.title"
        width="200"
      />
      <h2>{{ film.title }}</h2>
      <h5>
        Release:
        <time :datetime="film.release_date">{{ film.release_date }}</time>
      </h5>
      <h5>Director: {{ film.director }}</h5>
      <h5>Producer: {{ film.producer }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list-films',
  computed: {
    films() {
      return this.$store.getters.films;
    }
  }
};
</script>

<style lang="scss" scoped>
.list-films {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    flex-basis: calc(100% / 3);
    text-align: center;
  }
}
</style>
