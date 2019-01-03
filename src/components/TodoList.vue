<template>
  <div class="todo-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  created: function() {
    this.$store.commit("addTodo", "hgoe");
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
