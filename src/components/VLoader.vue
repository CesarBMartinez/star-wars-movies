<template>
  <div class="loader">
    <img
      :src="require('../assets/img/star_wars_logo.svg')"
      alt="Star Wars Logo"
    />
    <h2>Loading...</h2>
  </div>
</template>

<script>
export default {
  name: 'loader'
};
</script>

<style lang="scss" scoped>
$animation-time: 1s;

.loader {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  img {
    width: 100%;
    max-height: 100%;
    animation: scaleLoader $animation-time ease-in;
  }
  h2 {
    color: white;
    opacity: 0;
    animation: fadeIn $animation-time ease-in-out $animation-time forwards;
  }
}

@keyframes scaleLoader {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
