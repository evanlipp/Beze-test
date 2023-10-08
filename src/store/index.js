import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    organizationProfile: null,
     buildings: [
      {pavilion: '1', name: '', floors: '', rooms: ''},
    ],
  }),
  getters: {
    getOrganizationProfile(state) {
      return state.organizationProfile
    },

    getBuildings(state) {
      return state.buildings
    },
   
    getSavedBuildings(state) {
      return state.buildings
    },

    getBuildingsCount(state, getters) {
      return getters.getBuildings.length
    }
  },
  mutations: {
    saveOrganizationProfile(state, profile) {
      state.organizationProfile = profile
    },

    addBuildingToDraft(state, building) {
      state.buildings.push(building)
    },

    deleteBuildingFromDraft(state, building) {
      state.buildings = state.buildings.filter((item) => item.pavilion != building.pavilion)
    }
  },
  actions: {
  },
  modules: {
  }
})
