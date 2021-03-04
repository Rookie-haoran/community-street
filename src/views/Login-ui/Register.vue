<template>
  <div id="register">
    <register-top></register-top>
    <register-text></register-text>
  </div>
</template>

<script>
import RegisterTop from "@/components/register/RegisterTop";
import RegisterText from "@/components/register/RegisterText";
export default {
  components: {
    RegisterTop,
    RegisterText,
  },
};
</script>

<style scoped>
#register {
  width: 100vw;
  height: 100vh;
  background-image: url("../../assets/img/registerBack.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>