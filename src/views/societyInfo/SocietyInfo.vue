<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <v-card>
        <v-card-title>Society Name</v-card-title>
        <v-card-subtitle
          >Communication and Information Engineering</v-card-subtitle
        >
        <v-card-text>姜还是老的rua~</v-card-text>
        <v-row class="d-flex">
          <v-col cols="12" lg="3" md="4" sm="6" v-for="i in 9" :key="i">
            <v-card class="ma-6" tile>
              <v-card-title>name1</v-card-title>
              <v-card-subtitle>position</v-card-subtitle>
              <v-card-text>姜还是老的rua~</v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="red" depressed dark>加入</v-btn>
        </v-card-actions>
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