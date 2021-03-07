<template>
  <div>
    <app-bar></app-bar>
    <h1>活动</h1>
    <v-card></v-card>
    <h1>社团</h1>
    <v-card></v-card>
  </div>
  <!-- <v-dialog>
    <template v-slot:activator="{ on, attrs }">

    </template>
  </v-dialog> -->
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