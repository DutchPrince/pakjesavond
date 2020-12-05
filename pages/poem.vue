<template>
  <div class="poem">
    <span
      class="poem-bg"
      :style="{
        backgroundImage: `url(${require('~/assets/images/poem.jpg')})`
      }"
    ></span>
    <h1>Het bericht</h1>
    <hr />
    <div>
      Eens op een boerderij ver ver away was Kees aan het farmen.
    </div>
    <div>
      He! zegt Kees tegen {{ getQuestions[0].answer }} (zijn
      {{ getQuestions[7].answer }}).
    </div>
    <div>
      Daar loopt een mooie vrouw, laten we vragen wat haar naam is.
    </div>
    <div>
      Vlug telt Kees van 0 naar 100, maar vergeet de
      {{ getQuestions[8].answer }}.
    </div>
    <div>
      Wat is uw naam, jonge mevrouw? Vraagt Kees
    </div>
    <div>
      Mijn naam is Maja, wie ben jij? *giechel zegt Maja
    </div>
    <div>
      Ik ben Kees de jonge {{ getQuestions[9].answer }} uit deze omstreken zegt
      Kees
    </div>
    <div>
      Hoeveel blokken hout denkt u dat ik gehakt heb? Vraagt Kees
    </div>
    <div>Wel {{ getQuestions[5].answer }}. Zegt Kees</div>
    <div>
      Zo zo zo zo zegt Maja, wil je nu een
      {{ getQuestions[4].answer.toLowerCase() }}?
    </div>
    <div>
      Ja! antwoord Kees.
      {{
        getQuestions[4].answer.charAt(0).toLowerCase() === "w"
          ? "Mij maak je niet klein"
          : "Ik behoor tot die groep?=!"
      }}
    </div>
    <div>
      Dat zullen we nog weleens zien antwoordt Maja, en geeft Kees
      {{ getQuestions[3].answer }}.
    </div>
    <div>Kees en Maja gaan {{ getQuestions[2].answer }} kijken</div>
    <div>
      Bij Kees kwamen er spontaan {{ getQuestions[1].answer }} haren bij
    </div>
    <div>
      Waarna ze de verre zeeen gingen bevaren vanaf
      {{ getDate(getQuestions[6].answer) }}
    </div>
        <div>
      Ps. Open het luik en de vogels zullen je goed gezind zijn
    </div>
    <!-- <ul>
      <li v-for="(question, i) in getQuestions" :key="`answer-${i}`">
        {{ question.answer }}
      </li>
    </ul> -->
    <div class="animation-wrapper">
      <div class="water">
        <ul class="waves">
          <li
            class="wave-one"
            style="background-image: url('https://i.postimg.cc/7LtCC11Y/wave1.png');"
          ></li>
          <li
            class="wave-two"
            style="background-image: url('https://i.postimg.cc/P5hv05rh/wave2.png');"
          ></li>
          <li
            class="wave-three"
            style="background-image: url('https://i.postimg.cc/63Dyc91k/wave3.png');"
          ></li>
          <li
            class="wave-four"
            style="background-image: url('https://i.postimg.cc/1tg8DgM0/wave4.png');"
          ></li>
        </ul>
      </div>
      <div
        class="boat"
        style="background-image: url('https://i.postimg.cc/GmQTRnHD/boat2.png');"
      ></div>
      <div
        class="cloud"
        style="background-image: url('https://i.postimg.cc/VNkrLZCV/cloud-md.png');"
      ></div>
      <div
        class="cloud2"
        style="background-image: url('https://i.postimg.cc/VNkrLZCV/cloud-md.png');"
      ></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  computed: {
    getQuestions() {
      return this.$store.state.questions;
    }
  },
  methods: {
    getDate(date) {
      return moment(date)
        .locale("nl")
        .format("MMMM Do YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
.poem {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 2rem;
  text-align: left;
  color: #000;

  &-bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-size: cover;
    background-position: center;
    z-index: -1;
    background-attachment: fixed;
  }
  div:not(:first-of-type) {
    margin-top: 1rem;
  }
  padding-bottom: 50vh;
}

@media only screen and (max-width: 600px) {
  .poem {
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: flex-start;
  }
}

hr {
  width: 100%;
  border: 1px solid #000;
}

.animation-wrapper {
  background: #ace5ee;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  // top: 0;
}

.water {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  filter: grayscale(1);
}

.water ul.waves {
  list-style: none;
  margin: 0;
  padding: 0;
}

.water ul.waves li {
  background-repeat: repeat-x;
}

.water ul.waves li.wave-one {
  animation: wave 16.7s linear infinite;
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  bottom: 0px;
  height: 50px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 10;
}

.water ul.waves li.wave-two {
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  animation: wave 10s linear infinite;
  bottom: 0px;
  height: 84px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 9;
}

.water ul.waves li.wave-three {
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  animation: wave 25s linear infinite;
  bottom: 0;
  height: 190px;
  left: 0;
  position: absolute;
  right: 0;
  z-index: 8;
}

.water ul.waves li.wave-four {
  -webkit-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  animation: wave 25s linear infinite;
  bottom: 0;
  height: 205px;
  left: 0;
  position: absolute;
  right: 0;
}

.boat {
  animation: boat 3s linear infinite;
  background-repeat: no-repeat;
  bottom: 175px;
  height: 145px;
  left: 50%;
  position: absolute;
  width: 250px;
  filter: grayscale(1);
}

.cloud {
  animation: cloud 20s linear infinite;
  background-repeat: no-repeat;
  height: 165px;
  left: 0;
  position: absolute;
  width: 297px;
  filter: grayscale(1);
}

.cloud2 {
  animation: cloud 15s linear infinite;
  background-repeat: no-repeat;
  bottom: 320px;
  height: 165px;
  left: 140px;
  position: absolute;
  width: 297px;
  filter: grayscale(1);
}

.dolphin {
  animation: fish 15s linear infinite;
  background-repeat: no-repeat;
  bottom: 45px;
  height: 80px;
  left: 20%;
  position: absolute;
  width: 124px;
  z-index: 9;
  filter: grayscale(1);
}

/*Animation Keyframe Section*/

@keyframes wave {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 1920px 0;
  }
}

@keyframes boat {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(-3deg);
  }

  100% {
    transform: rotate(0);
  }
}

@keyframes cloud {
  0% {
    left: -30%;
  }

  100% {
    left: 100%;
  }
}
</style>
