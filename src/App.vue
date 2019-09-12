<template>
  <div id="app">
    <!-- Header -->
    <v-header></v-header>

    <!-- Main Content of Routes -->
    <main class="container">
      <transition name="fade">
        <router-view />
      </transition>
    </main>

    <!-- Footer -->
    <v-footer></v-footer>
  </div>
</template>

<script>
import VFooter from './components/VFooter.vue';
import VHeader from './components/VHeader.vue';

export default {
  name: 'app',
  components: {
    VFooter,
    VHeader
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
