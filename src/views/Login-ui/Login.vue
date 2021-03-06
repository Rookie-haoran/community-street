<template>
  <div id="loginPage">
    <v-container class="login">
      <login-top></login-top>
      <v-row justify="center" text-align="center">
        <v-col cols="12" sm="6" md="6" lg="4">
          <v-card ref="from" flat class="loginBox">
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
            <v-card-actions class="mt-n4 px-4">
              <v-btn block class="light-blue white--text" @click="submit">
                <v-icon>mdi-login-variant</v-icon>
                登录
              </v-btn>
            </v-card-actions>
            <v-card-actions class="toRegister d-flex justify-center">
              <router-link
                to="/register"
                style="font-size: 12px; text-decoration: none"
              >
                注册
              </router-link>
              <span class="text-grey lighten-4 mx-2"> | </span>
              <router-link
                to="/register"
                style="font-size: 12px; text-decoration: none"
              >
                忘记密码
              </router-link>
            </v-card-actions>
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
import { mapMutations } from "vuex";

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
      formHasErrors: false,
      userToken: "",
    };
  },
  computed: {
    form() {
      return {
        stuNumber: this.stuNumber,
        password: this.password,
      };
    },
  },
  methods: {
    ...mapMutations(["changeLogin"]),
    submit() {
      const _this = this;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
        }
        this.$refs[f].validate(true);
      });
      if (this.formHasErrors === false) {
        request({
          method: "post",
          url: "/login/check",
          data: this.form,
        })
          .then((res) => {
            if (res.data.message === true) {
              _this.userToken = res.data.token;
              _this.changeLogin({ Authorization: _this.userToken });
              this.$router.push("/home");
            } else if (res.data === false) {
              alert("登录失败");
            }
          })
          .catch((err) => {
            alert("登录失败");
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
#loginPage {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/img/loginBack.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
.login {
  padding-top: 50px;
}

.loginBox {
  opacity: 0.8;
}
.toRegister {
  text-align: center;
  height: 40px;
  line-height: 40px;
}
</style>