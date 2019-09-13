<template>
  <div class="list-films">
    <div class="list-item" v-for="(film, index) in films" :key="index">
      <div class="card">
        <img
          :src="
            require(`@/assets/img/star-wars-episode-${film.episode_id}.jpg`)
          "
          :alt="film.title"
          width="200"
        />
        <h2>{{ film.title }}</h2>
        <h5>
          Release:
          <time :datetime="film.release_date">{{
            film.release_date | formatDate('dd/MM/yyyy')
          }}</time>
        </h5>
        <h5>Directed by: {{ film.director }}</h5>
        <h5>Produced by: {{ film.producer }}</h5>
      </div>
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
  margin: 0 -6px;
  .list-item {
    flex: 0 0 100%;
    text-align: center;
    padding: 10px;
    .card {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
      height: 100%;
      box-shadow: 0 0 5px #e2e2e2;
    }
    @media screen and (min-width: 560px) {
      flex: 0 0 50%;
    }
    @media screen and (min-width: 992px) {
      flex: 0 0 calc(100% / 3);
    }
  }
}
</style>
