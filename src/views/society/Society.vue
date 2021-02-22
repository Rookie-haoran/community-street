<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="搜索"
        solo
        dense
        clearable
      >
      </v-text-field>
      <v-row class="d-flex">
        <v-col cols="12" lg="4" md="4" sm="6" v-for="i in 9" :key="i">
          <a href="/societyInfo" style="text-decoration: none">
            <v-card class="mx-4" flat>
              <v-card-title>社团名称</v-card-title>
              <v-card-subtitle>类型(校级？院级?)</v-card-subtitle>
              <v-card-text>描述</v-card-text>
            </v-card>
          </a>
        </v-col>
      </v-row>
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
</style>