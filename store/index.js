export const state = () => ({
  questions: []
})

export const mutations = {
  UPDATE_QUESTIONS(state, payload) {
    state.questions = payload
  }
}

export const actions = {
  updateQuestions({commit}, payload) {
    commit('UPDATE_QUESTIONS', payload)
  }
}
