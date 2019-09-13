<template>
  <div id="app">
    <!-- Loader -->
    <transition name="fade">
      <v-loader v-if="$store.getters.isLoading"></v-loader>
    </transition>

    <!-- Header -->
    <v-header></v-header>

    <!-- Main Content of Routes -->
    <main class="container">
      <router-view />
    </main>

    <!-- Footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from './components/VFooter.vue';
import VHeader from './components/VHeader.vue';
import VLoader from './components/VLoader.vue';

export default {
  name: 'app',
  components: {
    VFooter,
    VHeader,
    VLoader
  },
  created() {
    this.$store.dispatch('fetchData');
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in;
  transition-delay: 0.75s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
