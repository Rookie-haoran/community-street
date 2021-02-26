<template>
  <div id="login">
    <v-container>
      <login-top></login-top>
      <v-row justify="center">
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card ref="from" flat>
            <top>用户登录</top>
            <v-card-text class="mt-10">
              <v-text-field
                prepend-inner-icon="mdi-account"
                ref="stuNumber"
                v-model="stuNumber"
                :rules="[() => !!stuNumber || '必须填写']"
                label="学号"
                placeholder="请输入学号"
                outlined
                dense
              >
              </v-text-field>
              <v-text-field
                ref="password"
                prepend-inner-icon="mdi-lock"
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                label="密码"
                hint="至少8个字符"
                outlined
                counter
                dense
                @click:append="show = !show"
              >
              </v-text-field>
            </v-card-text>

            <v-btn block class="light-blue white--text" @click="submit"
              >登录</v-btn
            >
            <router-link to="/register" style="font-size: 12px"
              >没有账号？去注册</router-link
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginTop from "@/components/register/RegisterTop";
import LoginText from "@/components/register/RegisterText";

import Top from "@/components/login-registerTop/Top";
import { request } from "@/utils/request";

export default {
  components: {
    LoginTop,
    LoginText,

    Top,
  },
  data() {
    return {
      show: false,
      stuNumber: null,
      password: "",
      rules: {
        required: (value) => !!value || "必须填写",
        min: (v) => v.length >= 8 || "少于8个字符",
      },
    };
  },
  computed: {
    form() {
      return {
        userInfo: {
          stuNumber: this.stuNumber,
          password: this.password,
        },
      };
    },
  },
  methods: {
    // async submit() {
    //   // Object.keys(this.form).forEach((f) => {
    //   //   this.$refs[f].validate(true);
    //   // });
    // },
    submit() {
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
#login {
  margin-top: 50px;
}
</style>