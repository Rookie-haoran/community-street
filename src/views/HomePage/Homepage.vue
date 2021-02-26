<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <search></search>
      <v-row class="d-flex">
        <v-col cols="12" lg="4" md="4" sm="6" v-for="i in 9" :key="i">
          <router-link to="/activityinfo" style="text-decoration: none">
            <v-card class="mx-5" flat>
              <v-card-title>title(活动名称)</v-card-title>
              <v-card-subtitle>某社团(活动发起)</v-card-subtitle>
              <v-card-text>社团信息啦啦啦啦啦啦啦啦</v-card-text>
            </v-card>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar/AppBar";
import search from "@/components/search/Search";
export default {
  components: {
    AppBar,
    search,
  },
};
</script>