<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <v-card flat class="mt-10">
        <v-tabs>
          <v-tab>我的社团</v-tab>
          <v-tab>加入的社团</v-tab>
          <v-tab>社团广场</v-tab>
          <v-tab-item class="mt-5">
            <v-card>
              <v-card-title>你还未创建任何社团</v-card-title>
            </v-card>
          </v-tab-item>
          <v-tab-item class="mt-5">
            <v-row class="d-flex">
              <v-col cols="12" lg="4" md="4" sm="6" v-for="i in 9" :key="i">
                <router-link to="/societyInfo" style="text-decoration: none">
                  <v-card class="mx-4 my-5">
                    <v-card-title>社团名称</v-card-title>
                    <v-card-subtitle>类型(校级？院级?)</v-card-subtitle>
                    <v-card-text>描述</v-card-text>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item class="mt-5">
            <v-row class="d-flex">
              <v-col cols="12" lg="4" md="4" sm="6" v-for="i in 9" :key="i">
                <router-link to="/societyInfo" style="text-decoration: none">
                  <v-card class="mx-4 my-5">
                    <v-card-title>社团名称</v-card-title>
                    <v-card-subtitle>类型(校级？院级?)</v-card-subtitle>
                    <v-card-text>描述</v-card-text>
                  </v-card>
                </router-link>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs>
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
</style>