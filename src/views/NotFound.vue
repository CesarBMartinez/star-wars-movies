<template>
  <section class="not-found">
    <h1>404</h1>
    <h2>Page Not Found</h2>
    <router-link to="/" class="btn primary">Back home</router-link>
  </section>
</template>

<script>
export default {
  name: 'not-found'
};
</script>

<style lang="scss" scoped>
.not-found {
  flex-basis: 100%;
  color: white;
  text-align: center;
  margin-top: 50px;
}
</style>
