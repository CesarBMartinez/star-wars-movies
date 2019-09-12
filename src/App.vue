<template>
  <div id="app">
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

export default {
  name: 'app',
  components: {
    VFooter,
    VHeader
  }
};
</script>
