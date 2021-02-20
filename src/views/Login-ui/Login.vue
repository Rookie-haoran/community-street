<template>
  <div>
    <v-container>
      <login-top></login-top>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="6" lg="4">
          <v-card ref="from" flat>
            <v-card-text>
              <v-text-field
                ref="stuNumber"
                v-model="stuNumber"
                :rules="[() => !!stuNumber || '必须填写']"
                label="学号"
                placeholder="请输入学号"
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
            <v-card-actions wrap>
              <v-btn block class="purple white--text" @click="submit"
                >登录</v-btn
              >
            </v-card-actions>
            <a href="/register" style="font-size: 12px; margin-left: 10px"
              >没有账号？去注册</a
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginTop from "@/components/Login/LoginTop";
import LoginText from "@/components/Login/LoginText";
export default {
  components: {
    LoginTop,
    LoginText,
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
        stuNumber: this.stuNumber,
        password: this.password,
      };
    },
  },
  methods: {
    async submit() {
      Object.keys(this.form).forEach((f) => {
        this.$refs[f].validate(true);
      });
      const res = await this.$http.post("", this.form);
      localStorage.token = res.data.token;
      this.$message({
        type: "success",
        message: "登录成功",
      });
      this.$router.push("/home");
    },
  },
};
</script>