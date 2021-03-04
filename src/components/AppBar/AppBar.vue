<template>
  <div>
    <v-card class="overflow-hidden">
      <v-app-bar flat app class="white">
        <!-- src="https://picsum.photos/1920/1080" -->
        <!-- :prominent="$vuetify.breakpoint.xs ? false : true" -->
        <!-- <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          >
          </v-img>
        </template> -->
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title class="hide">社团街</v-app-bar-title>
        <v-spacer></v-spacer>
        <search></search>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn depressed class="white" v-on="on" v-bind="attrs">
              <v-icon>mdi-account-circle</v-icon>
              <span class="hide">19407020510</span>
              <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(list, i) in lists"
              :key="i"
              link
              :to="list.route"
            >
              <v-list-item-title v-text="list.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" color="#9A63FF" app>
        <v-row class="mt-5 text-center">
          <v-col>
            <v-avatar size="100" class="grey lighten-2">
              <img src="@/assets/logo/avatar.jpg" alt="" />
            </v-avatar>
            <p class="white--text mt-1">浩然</p>
          </v-col>
        </v-row>
        <v-list dark>
          <v-list-item
            v-for="(link, i) in links"
            :key="i"
            router
            :to="link.route"
          >
            <v-list-item-action>
              <v-icon>mdi-{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-title>
              {{ link.text }}
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-list dark>
          <v-subheader>用户</v-subheader>
          <v-list-item to="/profile">
            <v-list-item-action>
              <v-icon>mdi-account-details</v-icon>
            </v-list-item-action>
            <v-list-item-title>个人中心</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
import search from "@/components/search/Search";

import axios from "axios";
export default {
  components: {
    search,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home-search-outline", text: "首页", route: "/home" },
        { icon: "flag", text: "社团", route: "/society" },
      ],
      lists: [
        { text: "个人中心", route: "/profile" },
        { text: "退出", route: "/login" },
      ],
    };
  },
  methods: {
    signOut() {
      this.$router.push("/login");
    },
  },

  create() {
    axios.get("http://111.229.238.150:8188/register/verifycode");
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .hide {
    display: none;
  }
}
</style>