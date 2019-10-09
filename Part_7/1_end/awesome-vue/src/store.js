import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import { setData, calcPath } from "./shared/dataService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categories: [],
    entries: [],
    editEntry: {},
    editIndex: null
  },
  getters: {
    entryById: state => id => {
      return state.entries.find(entry => entry.id == id);
    }
  },
  mutations: {
    updateCategories(state, categories) {
      state.categories = categories;
    },
    updateEntries(state, entries) {
      state.entries = entries;
    },
    updateEntry(state, obj) {
      state.entries.splice(obj.index, 1, obj.item);
    },
    setEditEntry(state, entry) {
      state.editEntry = entry;
    },
    setEditIndex(state, index) {
      state.editIndex = index;
    }
  },
  actions: {
    editEntry({ commit, state }, entryId) {
      let entry;
      let entryIndex;
      if (entryId) {
        entryIndex = state.entries.findIndex(e => e.id == entryId);
        entry = Object.assign({}, state.entries[entryIndex]);
      } else {
        entryIndex = state.entries.length;
        entry = {
          id: state.entries.length + 1000,
          category: null,
          subCategory: null,
          title: null,
          url: null,
          description: null
        };
      }
      commit("setEditEntry", entry);
      commit("setEditIndex", entryIndex);

      router.push("edit");
    },
    cancelEdit({ commit }) {
      commit("setEditEntry", null);
      commit("setEditIndex", null);
      router.push("/");
    },
    saveEntry({ commit, state }, entry) {
      entry = calcPath(entry, state.categories);
      commit("updateEntry", { index: state.editIndex, item: entry });
      setData("entries", state.entries);
      commit("setEditEntry", null);
      commit("setEditIndex", null);
      router.push("/");
    }
  }
});
