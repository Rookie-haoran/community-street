<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="6" md="6" lg="4">
        <v-card ref="from" flat class="registerBox">
          <top>用户注册</top>
          <v-card-text>
            <v-form>
              <v-text-field
                prepend-inner-icon="mdi-numeric"
                ref="stuNumber"
                v-model="stuNumber"
                :rules="[() => !!stuNumber || '必须填写']"
                label="学号"
                outlined
                dense
              >
              </v-text-field>
              <div class="d-flex">
                <v-text-field
                  prepend-inner-icon="mdi-email"
                  ref="mailbox"
                  v-model="mailbox"
                  :rules="[
                    () => !!mailbox || '必须填写',
                    () =>
                      (!!mailbox &&
                        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(
                          mailbox
                        )) ||
                      '邮箱格式错误',
                  ]"
                  label="邮箱"
                  outlined
                  dense
                >
                </v-text-field>
                <v-btn depressed class="ml-1 info" @click="sendCode"
                  >发送</v-btn
                >
              </div>
              <v-text-field
                prepend-inner-icon="mdi-lock"
                ref="password"
                v-model="password"
                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show ? 'text' : 'password'"
                label="密码"
                hint="至少8个字符"
                counter
                @click:append="show = !show"
                outlined
                dense
              >
              </v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-numeric-6-box-outline"
                ref="verifyCode"
                v-model="verifyCode"
                label="验证码"
                counter
                dense
                outlined
                :rules="[() => !!verifyCode || '必须填写']"
                hint="6位字符"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions class="mt-n8">
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="mx-auto"
                    v-bind="attrs"
                    @click="resetForm"
                    v-on="on"
                  >
                    <v-icon>mdi-refresh</v-icon>
                  </v-btn>
                </template>
                <span>重置</span>
              </v-tooltip>
              <div v-else class="d-flex ml-n2">
                <v-spacer></v-spacer>
              </div>
            </v-slide-x-reverse-transition>
          </v-card-actions>
          <v-card-actions class="px-4">
            <v-btn block class="light-blue white--text" @click="submit">
              <v-icon>mdi-emoticon-kiss</v-icon>
              注册
            </v-btn>
          </v-card-actions>
          <router-link
            to="/login"
            style="font-size: 12px; text-decoration: none"
            >已有账号？去登录</router-link
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Top from "@/components/login-registerTop/Top";

// import axios from "axios";
import { request } from "@/utils/request";
export default {
  data() {
    return {
      show: false,
      stuNumber: null,
      mailbox: "",
      verifyCode: null,
      isCode: false,
      backCode: null,
      emailbox: {
        mailbox: this.mailbox,
      },
      password: "",
      rules: {
        required: (value) => !!value || "必须填写",
        min: (v) => v.length >= 8 || "少于8个字符",
      },
      formHasErrors: false,
    };
  },
  components: {
    Top,
  },
  computed: {
    form() {
      return {
        stuNumber: this.stuNumber,
        mailbox: this.mailbox,
        password: this.password,
        verifyCode: this.verifyCode,
      };
    },
  },
  methods: {
    resetForm() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].reset();
      });
    },
    sendCode() {
      request({
        method: "post",
        url: "http://111.229.238.150:8188/register/verifycode",
        data: this.form,
      })
        .then((res) => {
          console.log(res.data);
          this.backCode = res.data;
          console.log(this.backCode);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(this.form);
    },

    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
        }
        this.$refs[f].validate(true);
      });
      if (this.backCode != this.verifyCode) {
        alert("验证码错误");
        this.isCode = false;
      } else {
        this.isCode = true;
      }
      if (this.formHasErrors === false && this.isCode === true) {
        request({
          method: "post",
          url: "http://111.229.238.150:8188/register/verifyuser",
          data: this.form,
        })
          .then((res) => {
            console.log(res);
            if (res.data === "success") {
              this.$router.push("/login");
            }
          })
          .catch((err) => {
            console.log(err);
            console.log("报错了");
          });
      }
    },
  },
};
</script>
<style>
.registerBox {
  opacity: 0.7;
}
</style>

