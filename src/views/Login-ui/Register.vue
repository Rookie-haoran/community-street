<template>
  <div id="register">
    <v-container>
      <v-main>
        <login-top></login-top>
        <login-text></login-text>
      </v-main>
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
};
</script>

<style lang="less" scoped>
</style>