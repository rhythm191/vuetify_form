<template>
  <div class="todo-list">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6>
          <ul>
            <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
          </ul>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  }
};
</script>
