<template>
  <v-app>
    <v-layout row>
      <v-flex xs12 lg8 offset-lg2>
        <v-card>
          <v-toolbar color="indigo" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>

            <v-toolbar-title>form</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn flat to="/login">ログイン</v-btn>
            <v-btn flat to="/registration">登録</v-btn>
          </v-toolbar>
          <router-view></router-view>
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
