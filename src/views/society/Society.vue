<template>
  <div>
    <!-- 应用栏 -->
    <app-bar></app-bar>
    <v-container>
      <v-card flat class="mt-10">
        <!-- 选项卡 -->
        <v-tabs>
          <v-tab>我的社团</v-tab>
          <v-tab>加入的社团</v-tab>
          <v-tab>社团广场</v-tab>

          <!-- 我的社团卡 -->
          <v-tab-item class="none">
            <!-- 没有信息时展示的内容 -->
            <div class="none" v-if="!hasContent">
              <v-img
                src="../../assets/img/none.png"
                alt=""
                width="300"
                height="230"
              ></v-img>
              <p class="grey--text">暂时木有内容呀~~</p>
            </div>

            <v-card class="mx-4 my-5" width="250" v-else>
              <v-card-title>{{ myCommunity.name }}</v-card-title>
              <v-card-subtitle>{{ myCommunity.type }}</v-card-subtitle>
              <v-card-text>{{ myCommunity.describe }}</v-card-text>
            </v-card>

            <div class="my-5">
              <create :hasContent="hasContent"></create>
            </div>
          </v-tab-item>
          <!-- 加入的社团卡 -->
          <v-tab-item>
            <v-row class="d-flex">
              <v-col
                cols="12"
                lg="4"
                md="4"
                sm="6"
                v-for="join in myJoinCommunity"
                :key="join.id"
              >
                <v-card class="mx-4 my-5">
                  <v-card-title>{{ join.name }}</v-card-title>
                  <v-card-subtitle>{{ join.type }}</v-card-subtitle>
                  <v-card-text>{{ join.describe }}</v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <!-- 社团广场 -->
          <v-tab-item>
            <v-row class="d-flex">
              <v-col
                cols="12"
                lg="4"
                md="4"
                sm="6"
                v-for="list in communityInfo"
                :key="list.id"
              >
                <v-card class="mx-4 my-5">
                  <v-card-title>{{ list.name }}</v-card-title>
                  <v-card-subtitle>{{ list.type }}</v-card-subtitle>
                  <v-card-text>{{ list.describe }}</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <society-info :list="list"></society-info>
                  </v-card-actions>
                </v-card>
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
import create from "./create/Create";
import SocietyInfo from "../societyInfo/SocietyInfo";

import { request } from "@/utils/request";
export default {
  components: {
    AppBar,
    create,
    SocietyInfo,
  },
  data() {
    return {
      myCommunity: {},
      myJoinCommunity: {},
      communityInfo: {},
      hasContent: false,
    };
  },
  mounted() {
    request({
      url: "/community/communityinfo",
      method: "get",
    })
      .then((res) => {
        console.log(res);
        this.communityInfo = res.data.all;
        this.myJoinCommunity = res.data.myCommunities;
        this.myCommunity = res.data.myCreateCommunity;
        if (this.myCommunity.name !== null) {
          this.hasContent = true;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped>
.none {
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>