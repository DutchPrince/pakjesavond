<template>
  <div
    class="questions
"
  >
    <div
      class="full-bg"
      v-for="(bg, i) in questions"
      :key="`image-${i}`"
      ref="image"
      :style="{
        backgroundImage: `url(${require('~/assets/images/' +
          questions[i].backgroundImage)})`
      }"
    ></div>

    <Star v-for="i in 10" :key="`star-${i}`" />

    <Question
      :question="questions[currentQuestion]"
      :index="currentQuestion"
      @question-answered="nextQuestion"
      @question-previous="previousQuestion"
    />

    <transition name="fade">
      <img
        class="saint"
        :src="require('~/assets/images/saint.png')"
        width="100"
        v-if="questions[currentQuestion].saint && completed"
      />
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      questions: [
        {
          question: "Hoe mag het paard van sinterklaas heten?",
          answer: "",
          backgroundImage: "image-0.jpg",
          type: "text",
          saint: false
        },
        {
          question: "Hoeveel schat u de haren op uw hoofd?",
          answer: "",
          backgroundImage: "image-1.jpg",
          type: "number",
          saint: true
        },
        {
          question: "Wat is uw favoriete youtube programma?",
          answer: "",
          backgroundImage: "image-2.jpg",
          type: "text",
          saint: false
        },
        {
          question: "Welk eten houdt u het minst van?",
          answer: "",
          backgroundImage: "image-3.jpg",
          type: "text",
          saint: false
        },
        {
          question: "Wijn of een bord soep?",
          answer: "",
          backgroundImage: "image-4.jpg",
          type: "text",
          saint: true
        },
        {
          question: "Hoeveel blokken hout schat u dat we thuis hebben?",
          answer: "",
          backgroundImage: "image-5.jpg",
          type: "number",
          saint: false
        },
        {
          question: "Wat is uw trouw datum?",
          answer: "",
          backgroundImage: "image-6.jpg",
          type: "date",
          saint: false
        },
        {
          question: "Zebra of Giraffe?",
          answer: "",
          backgroundImage: "image-7.jpg",
          type: "text",
          saint: true
        },
        {
          question: "1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 100?",
          answer: "",
          backgroundImage: "image-8.jpg",
          type: "text",
          saint: false
        },
        {
          question: "Wat wou u als kind graag voor beroep beoefenen?",
          answer: "",
          backgroundImage: "image-6.jpg",
          type: "text",
          saint: false
        }
      ],
      currentQuestion: 0,
      completed: false
    };
  },
  watch: {
    currentQuestion(newVal, oldVal) {
      this.crossFade(oldVal, newVal);
      this.completed = true;
      setTimeout(() => {
        this.completed = false;
      }, 4000);
    }
  },
  methods: {
    previousQuestion() {
      if (this.currentQuestion != 0) {
        this.currentQuestion -= 1;
      }
    },
    nextQuestion(val) {
      this.questions[this.currentQuestion].answer = val;
      const prevIndex = this.currentQuestion - 1;
      this.$store.dispatch("updateQuestions", this.questions).then(response => {
        if (this.currentQuestion !== this.questions.length - 1) {
          this.currentQuestion += 1;
        } else {
          // this.currentQuestion = 0;
          this.$router.push("/poem");
        }
      });
    },
    crossFade(prev, next) {
      const vm = this;
      this.$refs.image.forEach(function(e, i) {
        e.style.zIndex = vm.$refs.image.length + 1 - i;
      });
      let imagesAnim = gsap.timeline();
      imagesAnim
        .to(this.$refs.image[prev], 0.4, { autoAlpha: 0 })
        .to(this.$refs.image[next], 0.4, { autoAlpha: 1 }, "-=1");
    }
  },
  mounted() {
    const vm = this;
    this.$refs.image.forEach(function(e, i) {
      e.style.zIndex = vm.$refs.image.length + 1 - i;
    });
  }
};
</script>

<style lang="scss">
.questions {
  max-height: 100vh;
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  overflow: hidden;
  width: 100vw;
  position: relative;
  .full-bg {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: cover;
    background-position: center center;
    filter: brightness(0.3);
  }
  &::after {
    content: "";
    // background-image: repeating-linear-gradient(
    //   to right,
    //   rgba(255, 255, 255, 0.1),
    //   rgba(255, 255, 255, 0.1) 1px,
    //   transparent 1px,
    //   transparent
    // );
    background-size: 50px 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
}

.saint {
  z-index: 1111;
  position: absolute;
  right: 0;
  bottom: 0;
  transform: rotate(-33deg) scale(3.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
