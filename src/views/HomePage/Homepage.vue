<template>
  <div>
    <app-bar></app-bar>

    <v-container class="mt-5">
      <carousel></carousel>
      <v-row>
        <v-col cols="12" lg="3" md="4" sm="4" v-for="i in 9" :key="i">
          <v-card class="mx-1 activityInfoBox" flat to="/activityinfo">
            <activity-home>
              <v-icon style="font-size: 2px">mdi-account</v-icon>
              <span>报名人数 10/100</span>
              <span class="isOver">已结束</span>
            </activity-home>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar/AppBar";
import Carousel from "./carousel/Carrousel";
import ActivityHome from "./activity-home/Activity-home";
export default {
  components: {
    AppBar,
    ActivityHome,
    Carousel,
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .activityInfoBox {
    margin: 0 10px !important;
  }
}
</style>