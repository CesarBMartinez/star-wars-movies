<template>
  <section class="resources">
    <h2>Movie Resources</h2>
    <!-- Lists -->
    <div class="lists" v-if="film.resources">
      <div class="list" v-for="(list, key) in film.resources" :key="key">
        <h3>{{ key }} List</h3>
        <small>{{ `(number of ${key}: ${list.length})` }}</small>
        <ul v-if="list.length > 0">
          <li v-for="(item, index) in list" :key="index">{{ item.name }}</li>
        </ul>
        <p v-else>
          <em>{{ emptyMessage }}</em>
        </p>
      </div>
    </div>
    <h3 class="loading" v-else>Loading resources...</h3>
  </section>
</template>

<script>
export default {
  name: 'film-resources',
  props: ['film'],
  data() {
    return {
      emptyMessage: 'No data found'
    };
  },
  created() {
    if (!this.film.resources) {
      this.$store.dispatch('fetchResources', this.film.episode_id);
    }
  }
};
</script>

<style lang="scss" scoped>
.resources {
  width: 100%;
  margin: 20px 6px 0;
  > h2 {
    text-align: center;
  }
}

.lists {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 100%;
  justify-content: space-between;
  .list {
    padding: 0 12px;
    h3 {
      text-transform: capitalize;
      margin-bottom: 0px;
    }
  }
  ul {
    padding-left: 0px;
    list-style: none;
  }
}

.loading {
  text-align: center;
  color: $cl-gray;
}
</style>
