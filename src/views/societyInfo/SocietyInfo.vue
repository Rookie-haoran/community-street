<template>
  <v-dialog
    max-width="600px"
    transition="dialog-bottom-transition"
    :fullscreen="$vuetify.breakpoint.xs ? true : false"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" text color="primary">
        <v-icon left>mdi-cog-refresh</v-icon>查看
      </v-btn>
    </template>

    <template v-slot:default="dialog">
      <v-card>
        <!-- 选项卡 -->
        <v-tabs>
          <v-tab>社团信息</v-tab>
          <v-tab>社团活动</v-tab>
          <v-tab>社团人员</v-tab>

          <!-- 社团信息卡 -->
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul>
                  <li class="my-2 grey lighten-4">名称：{{ list.name }}</li>
                  <li>类型：{{ list.type }}</li>
                  <li class="my-2 grey lighten-4 sign">
                    简介：{{ list.describe }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-btn @click="dialog.value = false" text color="warning"
                  >关闭</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn outlined color="info" @click="join">
                  <v-icon left>mdi-account-multiple-plus-outline</v-icon>
                  加入
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>

          <!-- 社团活动卡 -->
          <v-tab-item>
            <v-card>
              <v-row class="d-flex">
                <v-col cols="12" lg="4" md="6" sm="6" v-for="i in 9" :key="i">
                  <v-card>
                    <activity-home></activity-home>
                  </v-card>
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn @click="dialog.value = false" text color="warning"
                  >关闭</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn outlined color="info" @click="join">
                  <v-icon left>mdi-account-multiple-plus-outline</v-icon>
                  加入
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>

          <!-- 社团人员卡 -->
          <v-tab-item>
            <v-card>
              <v-card-actions>
                <v-btn @click="dialog.value = false" text color="warning"
                  >关闭</v-btn
                >
                <v-spacer></v-spacer>
                <v-btn outlined color="info" @click="join">
                  <v-icon left>mdi-account-multiple-plus-outline</v-icon>
                  加入
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import AppBar from "@/components/AppBar/AppBar";
import ActivityHome from "@/views/HomePage/activity-home/Activity-home";

import { request } from "@/utils/request";

export default {
  props: ["list"],

  components: {
    AppBar,
    ActivityHome,
  },
  methods: {
    join() {
      request({
        headers: {
          "Content-Type": "application/json",
        },
        url: "/community/join",
        method: "post",
        data: JSON.stringify({
          name: this.list.name,
        }),
      })
        .then((res) => {
          console.log("加入成功");
        })
        .catch((err) => {
          console.log("加入失败");
          // console.log(this.list.name);
          console.log(
            JSON.stringify({
              name: this.list.name,
            })
          );
        });
      location.reload();
    },
  },
};
</script>
<style scoped>
.communityBox {
  margin-top: 20px;
}
ul li {
  list-style: none;
}

/*
  简介高度
 */
.sign {
  height: 200px;
}
</style>