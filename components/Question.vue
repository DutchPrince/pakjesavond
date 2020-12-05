<template>
  <div class="question">
    <label>{{ question.question }}</label>
    <input :type="question.type" v-model="question.answer" />
    <div>
      <button v-if="index !== 0" @click="$emit('question-previous')">
        Vorige
      </button>
      <button @click="$emit('question-answered', question.answer)">
        Volgende
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.question {
  position: relative;
  background-color: transparent;
  padding: 1rem;
  min-width: 400px;
    border: 1px solid white;
  z-index: 999;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 5px;
    button {
      text-align: center;
      flex: 1;
    }
  }
  label {
    display: block;
    color: white;
  }

  input {
    padding-left: 1rem;
  }

  button,
  input {
    border: 1px solid white;
    background-color: transparent;
    color: white;
    &:focus {
      outline: none;
    }
  }
}
</style>
