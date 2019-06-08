import jsonData from '~/assets/json/data.json'

export const state = () => ({
  json: jsonData
})

export const getters = {
  getAll(state) {
    return state.json
  }
}
