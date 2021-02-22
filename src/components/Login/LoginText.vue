<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="4" justify="center" align="center">
        <v-card ref="from" flat>
          <v-card-text>
            <v-text-field
              ref="stuNumber"
              v-model="stuNumber"
              :rules="[() => !!stuNumber || '必须填写']"
              label="学号"
              required
            >
            </v-text-field>
            <v-text-field
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
              required
            >
            </v-text-field>
            <v-text-field
              ref="password"
              v-model="password"
              :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show ? 'text' : 'password'"
              label="密码"
              hint="至少8个字符"
              counter
              @click:append="show = !show"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-slide-x-reverse-transition>
              <v-tooltip v-if="formHasErrors" top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    class="my-0 mx-auto"
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
                <v-btn depressed class="white" @click="sendCoding"
                  >发送验证码</v-btn
                >
                <v-text-field class="mx-1" dense v-if="sendCode"></v-text-field>
              </div>
            </v-slide-x-reverse-transition>
          </v-card-actions>
          <v-btn block class="purple white--text" @click="submit">注册</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { request } from "@/util/request";
import axios from "axios";
export default {
  data() {
    return {
      show: false,
      stuNumber: null,
      mailbox: null,
      sendCode: false,
      password: "",
      rules: {
        required: (value) => !!value || "必须填写",
        min: (v) => v.length >= 8 || "少于8个字符",
      },
      formHasErrors: false,
    };
  },
  computed: {
    form() {
      return {
        stuNumber: this.stuNumber,
        mailbox: this.mailbox,
        password: this.password,
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
    submit() {
      this.formHasErrors = false;
      Object.keys(this.form).forEach((f) => {
        if (!this.form[f]) {
          this.formHasErrors = true;
        }
        this.$refs[f].validate(true);
      });
      if (this.formHasErrors === false) {
        axios
          .get("http://111.229.238.150:121", this.form)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("cccc");
          });
      }
    },
    sendCoding() {
      this.sendCode = true;
      // 发送验证码
    },
  },
};
</script>

