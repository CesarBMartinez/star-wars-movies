<template>
  <header>
    <router-link to="/" class="logo">
      <img
        :src="require('../assets/img/star_wars_logo.svg')"
        alt="Star Wars Logo"
      />
    </router-link>
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
  display: flex;
  align-items: center;
  .logo {
    max-height: 72px;
    margin-right: 12px;
    img {
      height: 72px;
      width: auto;
    }
    @media screen and (max-width: 768px) {
      max-height: 56px;
      img {
        height: 56px;
      }
    }
  }
  nav {
    a {
      margin: 0 12px;
    }
  }
}
</style>
