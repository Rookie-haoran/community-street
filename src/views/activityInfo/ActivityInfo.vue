<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <v-card>
        <v-card-title>Activity Name</v-card-title>
        <v-card-subtitle>A ognization</v-card-subtitle>
        <v-card-text>
          <p>Description: 姜还是老的rua~</p>
          <p>Deadline: DD/MMMM/YYYY</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="info" depressed>立即加入</v-btn>
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