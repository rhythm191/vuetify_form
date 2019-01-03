import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: []
  },
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    addTodo(state, text) {
      state.todos.push({ text: text, done: false });
    }
  },
  actions: {}
});
