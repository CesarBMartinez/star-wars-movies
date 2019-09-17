<template>
  <div>
    <!-- Lists -->
    <div class="lists" v-if="film.resources">
      <div class="characte3rs list">
        <h3>Characters</h3>
        <ul v-if="film.characters.length > 0">
          <li
            v-for="(character, index) in film.resources.characters"
            :key="index"
          >
            {{ character.name }}
          </li>
        </ul>
        <p v-else>
          <em>Empty</em>
        </p>
      </div>

      <div class="planets list">
        <h3>Planets</h3>
        <ul v-if="film.planets.length > 0">
          <li v-for="(planet, index) in film.resources.planets" :key="index">
            {{ planet.name }}
          </li>
        </ul>
        <p v-else>
          <em>Empty</em>
        </p>
      </div>

      <div class="starships list">
        <h3>Starships</h3>
        <ul v-if="film.starships.length > 0">
          <li
            v-for="(starship, index) in film.resources.starships"
            :key="index"
          >
            {{ starship.name }}
          </li>
        </ul>
        <p v-else>
          <em>Empty</em>
        </p>
      </div>

      <div class="vehicles list">
        <h3>Vehicles</h3>
        <ul v-if="film.vehicles.length > 0">
          <li v-for="(vehicle, index) in film.resources.vehicles" :key="index">
            {{ vehicle.name }}
          </li>
        </ul>
        <p v-else>
          <em>Empty</em>
        </p>
      </div>

      <div class="species list">
        <h3>Species</h3>
        <ul v-if="film.species.length > 0">
          <li v-for="(specie, index) in film.resources.species" :key="index">
            {{ specie.name }}
          </li>
        </ul>
        <p v-else>
          <em>Empty</em>
        </p>
      </div>
    </div>
    <p v-else>Loading resources...</p>
  </div>
</template>

<script>
export default {
  name: 'film-resources',
  props: ['film'],
  created() {
    if (!this.film.resources) {
      this.$store.dispatch('fetchResources', this.film.episode_id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
