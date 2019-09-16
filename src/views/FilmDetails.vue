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
      </div>

      <!-- Lists -->
      <div class="lists">
        <div class="characte3rs list">
          <h3>Characters</h3>
          <ul v-if="characters.length > 0 && !isLoading">
            <li v-for="(character, index) in characters" :key="index">
              {{ character.name }}
            </li>
          </ul>
          <p v-else-if="isLoading">Loading...</p>
          <p v-else>
            <em>Empty</em>
          </p>
        </div>

        <div class="planets list">
          <h3>Planets</h3>
          <ul v-if="planets.length > 0 && !isLoading">
            <li v-for="(planet, index) in planets" :key="index">
              {{ planet.name }}
            </li>
          </ul>
          <p v-else-if="isLoading">Loading...</p>
          <p v-else>
            <em>Empty</em>
          </p>
        </div>

        <div class="starships list">
          <h3>Starships</h3>
          <ul v-if="starships.length > 0 && !isLoading">
            <li v-for="(starship, index) in starships" :key="index">
              {{ starship.name }}
            </li>
          </ul>
          <p v-else-if="isLoading">Loading...</p>
          <p v-else>
            <em>Empty</em>
          </p>
        </div>

        <div class="vehicles list">
          <h3>Vehicles</h3>
          <ul v-if="vehicles.length > 0 && !isLoading">
            <li v-for="(vehicle, index) in vehicles" :key="index">
              {{ vehicle.name }}
            </li>
          </ul>
          <p v-else-if="isLoading">Loading...</p>
          <p v-else>
            <em>Empty</em>
          </p>
        </div>

        <div class="species list">
          <h3>Species</h3>
          <ul v-if="species.length > 0 && !isLoading">
            <li v-for="(specie, index) in species" :key="index">
              {{ specie.name }}
            </li>
          </ul>
          <p v-else-if="isLoading">Loading...</p>
          <p v-else>
            <em>Empty</em>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import swapi from '../utils/swapi';

export default {
  name: 'film-details',
  data() {
    return {
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      isLoading: true
    };
  },
  computed: {
    film() {
      const episodeId = Number(this.$route.params.id);
      const movie = this.$store.getters.getFilm(episodeId)[0];
      if (movie) {
        // Characters
        this.getData(movie, 'characters');

        // Planets
        this.getData(movie, 'planets');

        // Starships
        this.getData(movie, 'starships');

        // Vehicles
        this.getData(movie, 'vehicles');

        // Species
        this.getData(movie, 'species');

        return movie;
      }
      return null;
    }
  },
  methods: {
    async getData(movie, key) {
      this.isLoading = true;
      const response = await swapi.fetchArray(movie[key]);

      this.isLoading = false;
      this[key] = response;
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
  .lists {
    display: flex;
    flex-wrap: wrap;
    .list {
      flex: 0 0 50%;
      list-style: none;
    }
    ul {
      padding-left: 20px;
    }
  }
}

figure {
  margin: 16px;
  img {
    display: block;
  }
  figcaption {
    background-color: #ccc;
    text-align: center;
    padding: 5px;
  }
}
</style>
