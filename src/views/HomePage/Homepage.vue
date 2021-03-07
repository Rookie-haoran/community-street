<template>
  <div>
    <app-bar></app-bar>

    <v-container class="mt-5">
      <carousel></carousel>
      <v-row>
        <v-col
          cols="12"
          lg="3"
          md="4"
          sm="4"
          v-for="info in activityInfo"
          :key="info.name"
        >
          <v-card class="mx-1 activityInfoBox" flat to="/activityinfo">
            <activity-home :info="info">
              <template v-slot:img>
                <img :src="info.picture" alt="" class="activityImg" />
              </template>
              <v-icon style="font-size: 2px">mdi-account</v-icon>
              <span
                >报名人数 {{ info.participation_COUNT }}/{{
                  info.participation_MAXVALUE
                }}</span
              >
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

import { request } from "@/utils/request";
export default {
  components: {
    AppBar,
    ActivityHome,
    Carousel,
  },
  data() {
    return {
      activityInfo: {},
    };
  },
  mounted() {
    request({
      url: "/activityinfo",
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        this.activityInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .activityInfoBox {
    margin: 0 10px !important;
  }
}

.activityImg {
  height: 150px;
  width: 100%;
}
</style>