<template>
  <article class="about">
    <h1>Star Wars Movies Catalog</h1>
    <p>
      Developed by
      <a
        href="https://github.com/CesarBMartinez/"
        target="_blank"
        rel="noopener"
        >César Martinez.</a
      >
    </p>
    <p>Made with Vue and ☕ and ❤️</p>
    <p>
      Star Wars data provided by
      <a href="https://swapi.co/" target="_blank" rel="noopener">Swapi</a> - The
      Star Wars API.
    </p>
    <p>
      Project GitHub:
      <a
        href="https://github.com/CesarBMartinez/star-wars-movies"
        target="_blank"
        rel="noopener"
        >Star Wars Movies.</a
      >
    </p>
    <p>
      The covers of the movies were downloaded from the
      <a href="https://swapi.co/" target="_blank" rel="noopener">Coverwhiz.</a>
    </p>
    <p>Star Wars and all associated names are copyright Lucasfilm ltd.</p>
    <p>This project is open source and carries a MIT licence.</p>
  </article>
</template>

<script>
export default {
  name: 'about'
};
</script>

<style lang="scss" scoped>
.about {
  padding: 0 14px;
  color: white;
  a {
    color: $cl-yellow-darken;
  }
}
</style>
