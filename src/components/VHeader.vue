<template>
  <header>
    <nav>
      <router-link to="/films">Movies</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'v-header'
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: $cl-yellow;
  nav {
    padding: 16px 0;
    max-width: $container-width;
    margin: 0 auto;
    a {
      margin-right: 12px;
    }
  }
}
</style>
