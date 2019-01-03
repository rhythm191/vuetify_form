<template>
  <form @submit="submit">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field v-model="todoText" :counter="30" label="todo"></v-text-field>
          <v-btn color="success" @click="submit">Add</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </form>
</template>

<script>
export default {
  name: "AddTodoForm",
  data() {
    return {
      todoText: ""
    };
  },
  methods: {
    submit(event) {
      event.preventDefault();

      if (this.todoText !== "") {
        this.$store.commit("addTodo", this.todoText);
        this.todoText = "";
      }
    }
  }
};
</script>
