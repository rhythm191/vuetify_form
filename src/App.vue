<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TodoList</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <AddTodoForm/>
      <TodoList/>
    </v-content>
  </v-app>
</template>

<script>
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    AddTodoForm,
    TodoList
  },
  data() {
    return {
      //
    };
  }
};
</script>
