<template>
  <div id="entrancePage">
    <v-toolbar color="#001529" class="toolbar">
      <v-toolbar-title class="white--text">Community Street</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="startBox white--text">
        <router-link to="/login"><span>登录</span></router-link>
        <span>|</span>
        <router-link to="/register"><span>注册</span></router-link>
      </div>
    </v-toolbar>
    <h1 class="display-3 white--text logo">校园社团街</h1>
    <v-btn outlined class="toBtn white--text" @click="toLogin">
      Learn More
    </v-btn>
    <page></page>
  </div>
</template>

<script>
import Page from "./Page";
export default {
  components: {
    Page,
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
#entrancePage {
  width: 100vw;
  height: 120vh;
  background-image: url("../../assets/img/entrance.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
}

.toolbar {
  opacity: 0.8;
}

.startBox {
  width: 200px;
  display: flex;
  justify-content: space-around;
}
a {
  text-decoration: none;
}

.logo {
  text-align: center;
  margin-top: 200px;
}

.toBtn {
  margin-top: 20px;
}

@media (max-width: 599px) {
  .toBtn {
    margin-left: 30vw;
  }
}

@media (min-width: 600px) {
  .toBtn {
    margin-left: 40vw;
  }
}
@media (min-width: 960px) {
  .toBtn {
    margin-left: 45vw;
  }
}
@media (min-width: 1264px) {
  .toBtn {
    margin-left: 45vw;
  }
}
</style>