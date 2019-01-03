<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TodoList</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <TodoList/>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from "./components/TodoList";

export default {
  name: "App",
  components: {
    TodoList
  },
  data() {
    return {
      //
    };
  }
};
</script>
