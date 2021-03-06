<template>
  <v-dialog max-width="600px" transition="dialog-bottom-transition">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" depressed>
        <v-icon left depressed>mdi-cog-refresh</v-icon>修改
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-toolbar dark color="primary" dense>修改个人信息</v-toolbar>
        <v-card-text>
          <v-form ref="form">
            <v-text-field
              label="昵称"
              prepend-inner-icon="mdi-account-child"
              v-model="nickname"
              ref="nickname"
            ></v-text-field>
            <v-text-field
              label="姓名"
              prepend-inner-icon="mdi-account-box"
              v-model="name"
              ref="name"
              :rules="[
                () =>
                  (!!name && /^[\u4E00-\u9FA5]{2,6}$/.test(name)) ||
                  '名字格式错误',
              ]"
            ></v-text-field>
            <v-select
              label="性别"
              :items="['男', '女']"
              prepend-inner-icon="mdi-gender-male-female"
              v-model="gender"
              ref="gender"
            ></v-select>
            <v-text-field
              label="密码"
              type="password"
              prepend-inner-icon="mdi-lock"
              v-model="password"
              ref="password"
              :rules="[rules.min]"
            ></v-text-field>
            <v-text-field
              label="确认密码"
              type="password"
              prepend-inner-icon="mdi-lock"
              v-model="password1"
              :rules="[rules.required]"
            ></v-text-field>
            <v-textarea
              label="签名"
              prepend-inner-icon="mdi-pencil"
              v-model="signature"
              ref="signature"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn
            class="warning"
            depressed
            @click="
              {
                (dialog.value = false), resetForm();
              }
            "
            >关闭</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn class="error" depressed @click="updateUserInfo"
            >确认修改</v-btn
          >
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { request } from "@/utils/request";
export default {
  data() {
    return {
      nickname: null,
      name: null,
      gender: null,
      password: null,
      password1: null,
      signature: null,
      rules: {
        required: () => this.password === this.password1 || "两次密码不正确",
        min: (v) => v.length >= 8 || "少于8个字符",
      },
    };
  },
  computed: {
    form() {
      return {
        nickname: this.nickname,
        name: this.name,
        gender: this.gender,
        password: this.password,
        signature: this.signature,
      };
    },
  },
  methods: {
    resetForm() {
      this.$refs.form.reset();
    },
    updateUserInfo() {
      if (this.password === this.password1) {
        request({
          url: "/profile/updateuser",
          method: "post",
          data: this.form,
        })
          .then((res) => {
            // console.log(res);
            if (res.data === false) {
              alert("密码不能与上次相同");
            }
          })
          .catch((err) => {
            console.log(err);
          });
        console.log(this.form);
      }
    },
  },
};
</script>

<style scoped>
</style>