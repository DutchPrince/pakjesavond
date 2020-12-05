<template>
  <div
    :class="`star star-${getDur}`"
    :style="{ width, height: width, backgroundColor: getRandomColor, left: randomWidthPosition, top: randomHeightPosition }"
  ></div>
</template>

<script>
export default {
  props: {
    duration: {
      type: Number
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
  },
  data() {
    return {
      dur: 0
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
    },
    getDur() {
      setInterval(() => {
        this.dur = Math.round(Math.random() * 3);
      }, 10000);
      return this.dur;
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
  &-0 {
    &:after {
      animation: slide 1s infinite 2s;
    }
  }
  &-1 {
    &:after {
      animation: slide 2s infinite 3s;
    }
  }
  &-2 {
    &:after {
      animation: slide 3s infinite 4s;
    }
  }
  &-3 {
    &:after {
      animation: slide 4s infinite 1s;
    }
  }
   &-5 {
    &:after {
      animation: slide 5 infinite 3s;
    }
  }
   &-6 {
    &:after {
      animation: slide 6s infinite 4s;
    }
  }
  &:after {
    content: "";
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 220px;
    position: absolute;
    z-index: 1;

    /*
  CSS Gradient - complete browser support from http://www.colorzilla.com/gradient-editor/
  */
    background: -moz-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0%, rgba(255, 255, 255, 0)),
      color-stop(50%, rgba(255, 255, 255, 0.8)),
      color-stop(99%, rgba(128, 186, 232, 0)),
      color-stop(100%, rgba(125, 185, 232, 0))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      left,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
  }
}
/* animation */

@keyframes slide {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
