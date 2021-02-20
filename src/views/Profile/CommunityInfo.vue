<template>
  <div>
    <profile></profile>
    <v-container class="my-n6">
      <v-divider></v-divider>
      <v-card flat tile class="pl-4 py-2">我的社团</v-card>
      <v-container class="my-n3 px-4">
        <v-divider></v-divider>
      </v-container>
      <v-card> </v-card>
    </v-container>
  </div>
</template>

<script>
import Profile from "@/views/Profile/Profile";
export default {
  components: {
    Profile,
  },
};
</script>