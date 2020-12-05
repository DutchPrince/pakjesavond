<template>
  <div
    class="star"
    :style="{
      width,
      height: width,
      backgroundColor: getRandomColor,
      left: randomWidthPosition,
      top: randomHeightPosition
    }"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      dur: 0,
      width: `${Math.round(Math.random() * 60)}px`
    };
  },
  computed: {
    randomWidthPosition() {
      if (process.client) {
        const vw = Math.max(
          document.documentElement.clientWidth || 0,
          window.innerWidth || 0
        );
        return `${Math.round(Math.random() * vw)}px`;
      }
      return `${Math.round(Math.random() * 100)}px`;
    },
    randomHeightPosition() {
      if (process.client) {
        const vh = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        return `${Math.round(Math.random() * vh)}px`;
      }
      return `${Math.round(Math.random() * 100)}px`;
    },
    getRandomColor() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  mounted() {
    this.dur = this.duration;
  }
};
</script>

<style lang="scss" scoped>
.star {
  position: absolute;
  z-index: 102;
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}
</style>
