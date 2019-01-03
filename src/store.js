import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    id_counter: 0,
    todos: []
  },
  getters: {
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  mutations: {
    addTodo(state, text) {
      const id = state.id_counter;
      state.id_counter += 1;
      state.todos.push({ id, text, done: false });
    },
    toggleDone(state, id) {
      const todo = this.getters.getTodoById(id);
      todo.done = !todo.done;
    }
  },
  actions: {}
});
