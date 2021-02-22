<template>
  <div>
    <v-card>
      <v-app-bar
        dark
        src="https://picsum.photos/1920/1080"
        :prominent="$vuetify.breakpoint.xs ? false : true"
        flat
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          >
          </v-img>
        </template>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>社团街</v-app-bar-title>
        <v-spacer></v-spacer>
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
            v-for="link in links"
            :key="link.text"
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
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "home-search-outline", text: "首页", route: "/home" },
        { icon: "flag", text: "社团", route: "/society" },
        { icon: "account-details", text: "个人信息", route: "/profile" },
      ],
    };
  },
};
</script>