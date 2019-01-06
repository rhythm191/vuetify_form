<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>form</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>add</v-icon>
            </v-btn>

            <!-- <v-btn icon>
            <v-icon>more_vert</v-icon>
            </v-btn>-->
          </v-toolbar>
          <LoginForm></LoginForm>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import LoginForm from "./components/LoginForm";

export default {
  name: "App",
  components: {
    LoginForm
  },
  data() {
    return {
      //
    };
  }
};
</script>
