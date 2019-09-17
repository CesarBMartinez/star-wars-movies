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

    <section class="right-col">
      <div class="movie-team">
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
      </div>

      <div class="opening">
        <p>
          The Star Wars opening crawl is the famous opening to the Star Wars
          saga.
        </p>
        <p>
          Click the button below to see the opening crawl animation, which was
          made in CSS, or read the episode opening transcript.
        </p>
        <button type="button" class="btn secondary" @click="showOpening = true">
          Opening Crawl Animation
        </button>
      </div>

      <!-- HTML5 Accordion -->
      <details open>
        <summary>Opening Crawl Transcript</summary>
        <p>{{ film.opening_crawl }}</p>
      </details>
    </section>

    <!-- Movie Resources -->
    <film-resources :film="film"></film-resources>

    <!-- Opening Crawl Animation -->
    <opening-crawl
      :film="film"
      :show="showOpening"
      :onClose="onClose"
    ></opening-crawl>
  </section>
</template>

<script>
import FilmResources from '../components/FilmResources.vue';
import OpeningCrawl from '../components/OpeningCrawl.vue';

export default {
  name: 'film-details',
  components: {
    FilmResources,
    OpeningCrawl
  },
  data() {
    return {
      episodeId: Number(this.$route.params.id),
      showOpening: false
    };
  },
  methods: {
    onClose() {
      this.showOpening = false;
    }
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
  flex: 0 0 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex: 0 0 calc(100% - 352px);
  }
  .movie-team {
    flex: 0 0 100%;
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
  /* HTML5 Accordion */
  details {
    $padding: 0.625rem;
    border: 1px solid $cl-gray-cc;
    border-radius: 3px;
    padding: $padding $padding 0;
    width: 100%;
    max-width: 320px;
    display: inline-block;
    flex: 0 0 100%;
    @media screen and (min-width: 992px) {
      flex: 0 0 50%;
    }
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
  .opening {
    margin-bottom: 12px;
    padding-right: 12px;
    flex: 0 0 100%;
    @media screen and (min-width: 992px) {
      flex: 0 0 50%;
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
  @media screen and (max-width: 767px) {
    flex: 0 0 calc(100% - 32px);
    img {
      width: 100%;
    }
  }
}
</style>
