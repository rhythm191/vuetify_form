<template>
  <div id="login-form">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <form action="/login" method="POST">
            <v-text-field v-model="email" type="email" label="Email" required></v-text-field>
            <v-text-field v-model="password" type="password" label="Password" required></v-text-field>
            <v-btn block color="success" type="submit">ログイン</v-btn>
          </form>

          <p>or ソーシャルログイン</p>
          <div id="social-login">
            <v-btn block href="/oauth/github" color="grey darken-4">
              <span class="social-btn">GitHubログイン</span>
            </v-btn>
            <v-btn block href="/oauth/twitter" color="light-blue accent-3">
              <span class="social-btn">Twitterログイン</span>
            </v-btn>
            <v-btn block href="/oauth/facebook" color="light-blue darken-4">
              <span class="social-btn">Facebookログイン</span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>



<style lang="scss">
.social-btn {
  color: white;
  text-transform: none;
}
</style>
