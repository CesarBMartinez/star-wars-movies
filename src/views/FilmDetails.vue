<template>
  <section class="film-details" v-if="film">
    <figure class="cover">
      <img
        class="cover"
        :src="require(`@/assets/img/star-wars-episode-${film.episode_id}.jpg`)"
        :alt="film.title"
        width="320"
        :title="`${film.title} Movie Cover`"
      />
      <figcaption>{{ film.title }} Movie Cover</figcaption>
    </figure>

    <div class="right-col">
      <div class="details">
        <h1>{{ `Episode ${film.episode_id}: ${film.title}` }}</h1>
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

        <!-- HTML5 Accordion -->
        <details open>
          <summary>Opening Crawl Transcript</summary>
          <p>{{ film.opening_crawl }}</p>
        </details>
      </div>
    </div>
    <film-resources :film="film"></film-resources>
  </section>
</template>

<script>
import FilmResources from '../components/FilmResources.vue';

export default {
  name: 'film-details',
  components: {
    FilmResources
  },
  data() {
    return {
      episodeId: Number(this.$route.params.id)
    };
  },
  computed: {
    film() {
      const movie = this.$store.getters.getFilm(this.episodeId);
      return movie;
    }
  }
};
</script>

<style lang="scss" scoped>
.film-details {
  background-color: white;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 12px;
}
.right-col {
  padding: 0 16px;
  flex: 0 0 calc(100% - 352px);
  .details {
    .title {
      margin-bottom: 10px;
    }
    .director,
    .producers,
    .release {
      margin: 0 0 10px;
      font-weight: 400;
    }
  }
  details {
    $padding: 0.625rem;
    border: 1px solid $cl-gray-cc;
    border-radius: 3px;
    padding: $padding $padding 0;
    width: 100%;
    max-width: 320px;
    display: inline-block;
    summary {
      font-weight: bold;
      margin: (-$padding) (-$padding) 0;
      padding: $padding;
      cursor: pointer;
    }
    &[open] {
      padding: $padding;
      summary {
        border-bottom: 1px solid $cl-gray-cc;
        margin-bottom: $padding;
      }
    }
    p {
      white-space: pre-line;
    }
  }
}

figure {
  margin: 16px;
  img {
    display: block;
  }
  figcaption {
    background-color: $cl-gray-cc;
    text-align: center;
    padding: 5px;
  }
}
</style>
