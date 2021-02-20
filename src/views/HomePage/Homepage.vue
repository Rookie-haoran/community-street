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