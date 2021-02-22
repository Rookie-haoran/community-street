<template>
  <div>
    <app-bar></app-bar>

    <v-container>
      <div class="d-flex">
        <v-avatar size="120" rounded color="grey" class="ma-2">
          <img src="@/assets/logo/avatar.jpg" alt="" />
        </v-avatar>
        <span class="d-flex flex-column mt-10">
          <span class="display-1">昵称</span>
          <span>学院：通信工程与信息工程学院</span>
        </span>
      </div>
      <v-divider></v-divider>
      <v-card class="mt-4 d-flex justify-space-around py-2" flat tile>
        <span
          ><router-link to="/profile/community" class="remove-underline"
            >社团</router-link
          ></span
        >
        <span
          ><router-link to="/profile/myactivity" class="remove-underline"
            >活动信息</router-link
          ></span
        >
        <span
          ><router-link to="/profile/friends" class="remove-underline"
            >好友</router-link
          ></span
        >
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";

export default {
  components: {
    AppBar,
  },
};
</script>

<style scoped>
.remove-underline {
  text-decoration: none;
  color: #000000;
}
</style>