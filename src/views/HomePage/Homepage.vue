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
          <a href="/activityinfo" style="text-decoration: none">
            <v-card class="mx-5" flat loading="error">
              <v-card-title>title(活动名称)</v-card-title>
              <v-card-subtitle>某社团(活动发起)</v-card-subtitle>
              <v-card-text>社团信息啦啦啦啦啦啦啦啦</v-card-text>
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