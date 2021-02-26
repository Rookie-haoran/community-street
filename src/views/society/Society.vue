<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <search></search>
      <v-row class="d-flex">
        <v-col cols="12" lg="4" md="4" sm="6" v-for="i in 9" :key="i">
          <router-link to="/societyInfo" style="text-decoration: none">
            <v-card class="mx-4" flat>
              <v-card-title>社团名称</v-card-title>
              <v-card-subtitle>类型(校级？院级?)</v-card-subtitle>
              <v-card-text>描述</v-card-text>
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
<style scoped>
</style>