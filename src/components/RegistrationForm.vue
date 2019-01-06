<template>
  <div id="registration-form">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <form action="/users/registrations" method="POST">
            <v-text-field v-model="email" type="email" label="Email"></v-text-field>

            <v-select :items="birthes" label="生まれ年"></v-select>

            <v-radio-group v-model="status" row>
              <v-radio label="在職中" value="user_applicant_attributes_status_2000"></v-radio>
              <v-radio label="離職中" value="user_applicant_attributes_status_2001"></v-radio>
              <v-radio label="学生" value="user_applicant_attributes_status_2002"></v-radio>
            </v-radio-group>

            <v-select :items="languages" label="主な使用言語"></v-select>

            <v-radio-group v-model="intent_job_changed" row>
              <v-radio label="転職したい" value="user_applicant_attributes_intent_job_change_id_3200"></v-radio>
              <v-radio
                label="よい求人があれば転職を考えたい"
                value="user_applicant_attributes_intent_job_change_id_3201"
              ></v-radio>
              <v-radio label="まだ考えていない" value="user_applicant_attributes_intent_job_change_id_3202"></v-radio>
            </v-radio-group>

            <v-text-field v-model="password" type="password" label="Password"></v-text-field>
            <v-checkbox v-model="checkbox" :label="`提出コードを企業に匿名開示してオファーを受ける`"></v-checkbox>
            <v-btn block color="success" type="submit">登録</v-btn>
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
  name: "RegistrationForm",
  data() {
    return {
      birthes: [1939, 2019],
      languages: ["Ruby", "Java", "C#", "JavaScript", "Python"]
    };
  }
};
</script>
