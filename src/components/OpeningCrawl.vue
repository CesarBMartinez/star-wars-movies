<template>
  <div
    class="opening-crawl"
    v-if="show && film"
    @keydown.esc="onClose"
    tabindex="0"
  >
    <!-- Close on button or when ESC key is pressed -->
    <button class="btn primary" type="button" @click="onClose" tabindex="0">
      Close
    </button>

    <!-- Fade Effect -->
    <div class="fade"></div>

    <section class="crawl-container">
      <div class="crawl-content">
        <div class="title">
          <p>Episode {{ film.episode_id }}</p>
          <h1>{{ film.title }}</h1>
        </div>

        <p class="crawl-text">{{ film.opening_crawl }}</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'opening-crawl',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    film: {
      type: Object
    },
    onClose: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.opening-crawl {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: $cl-bg-body;
  z-index: 2;

  .fade {
    position: relative;
    width: 100%;
    min-height: 60vh;
    top: -25px;
    background-image: linear-gradient(0deg, transparent, black 75%);
    z-index: 1;
  }

  .crawl-container {
    display: flex;
    justify-content: center;
    position: relative;
    height: 800px;
    color: $cl-yellow-darken;
    font-size: 5rem;
    font-weight: 600;
    letter-spacing: 6px;
    line-height: 1.5;
    perspective: 400px;
    text-align: justify;

    .crawl-content {
      position: relative;
      top: 9999px;
      transform-origin: 50% 100%;
      animation: crawl 60s linear;
      .title {
        text-align: center;
        h1 {
          font-size: 1.3em;
          margin: 0 0 100px;
          text-transform: uppercase;
        }
      }
      .crawl-text {
        white-space: pre-line;
      }
    }
  }

  @keyframes crawl {
    0% {
      top: 0;
      transform: rotateX(20deg) translateZ(0);
    }
    100% {
      top: -6000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }

  .btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
  }
}
</style>
