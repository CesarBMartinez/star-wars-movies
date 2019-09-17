<template>
  <div class="list-films row">
    <article class="list-item" v-for="(film, index) in films" :key="index">
      <div class="card">
        <!--Cover  -->
        <router-link
          :to="{ name: 'FilmDetails', params: { id: film.episode_id } }"
        >
          <img
            class="cover"
            :src="
              require(`@/assets/img/star-wars-episode-${film.episode_id}.jpg`)
            "
            :alt="film.title"
            width="250"
            :title="`${film.title} Cover`"
          />
        </router-link>

        <!-- Title -->
        <h2 class="title">{{ film.title }}</h2>

        <!-- Director -->
        <h4 class="director">
          Directed by:
          <strong>{{ film.director }}</strong>
        </h4>

        <!-- Producers -->
        <h5 class="producers">
          Produced by:
          <strong>{{ film.producer }}</strong>
        </h5>

        <!-- Release Date -->
        <h5 class="release">
          Release date:
          <time :datetime="film.release_date">
            <strong>{{ film.release_date | formatDate('dd/MM/yyyy') }}</strong>
          </time>
        </h5>

        <!-- Details Link -->
        <router-link
          class="btn primary"
          :to="{ name: 'FilmDetails', params: { id: film.episode_id } }"
          >Details</router-link
        >

        <!-- Details Link -->
        <button
          type="button"
          class="btn secondary"
          tabindex="0"
          @click="$emit('openingCrawl', film)"
        >
          Opening Crawl
        </button>
      </div>
    </article>
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
  .list-item {
    /* 1 column */
    flex: 0 0 100%;
    padding: 10px;
    /* 2 columns */
    @media screen and (min-width: 560px) {
      flex: 0 0 50%;
    }

    /* 3 columns */
    @media screen and (min-width: 992px) {
      flex: 0 0 calc(100% / 3);
    }

    .card {
      padding: 20px;
      background-color: white;
      border-radius: 3px;
      height: 100%;
      text-align: center;
    }
    .cover {
      &:hover {
        box-shadow: 0 0 10px $cl-body;
      }
    }
    .title {
      margin-bottom: 10px;
    }
    .director,
    .producers,
    .release {
      margin: 0 0 10px;
      font-weight: 400;
    }
    .btn {
      margin: 5px;
    }
  }
}
</style>
