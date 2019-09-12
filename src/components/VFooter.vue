<template>
  <footer>
    <p>
      Developed by
      <a href="https://github.com/CesarBMartinez/" target="_blank"
        >César Martinez</a
      >
      with Vue, Swapi, ☕ and ❤️
    </p>
  </footer>
</template>

<script>
export default {
  name: 'v-footer'
};
</script>

<style lang="scss" scoped>
footer {
  color: white;
  text-align: center;
  background-color: $cl-blue;
  width: 100%;
  margin-top: auto;
  a {
    color: $cl-yellow;
  }
}
</style>
