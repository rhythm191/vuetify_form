<template>
  <v-list subheader>
    <v-subheader>Todo list</v-subheader>
    <v-list-tile v-for="todo in todos" :key="todo.id" @click="toggleDone(todo.id)">
      <v-list-tile-content>
        <v-list-tile-title v-text="todo.text">{{ todo.text }}</v-list-tile-title>
      </v-list-tile-content>

      <v-list-tile-action>
        <v-icon v-if="todo.done">done_outline</v-icon>
      </v-list-tile-action>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {
  name: "TodoList",
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    toggleDone(id) {
      this.$store.commit("toggleDone", id);
    }
  }
};
</script>
