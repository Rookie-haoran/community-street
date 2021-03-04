<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <v-card class="communityBox">
        <v-tabs>
          <v-tab>
            <!-- <v-icon>mdi-account-details</v-icon> -->
            社团信息
          </v-tab>
          <v-tab>
            <!-- <v-icon>mdi-format-list-bulleted-square</v-icon> -->
            社团活动
          </v-tab>
          <v-tab>
            <!-- <v-icon>mdi-account-multiple</v-icon> -->
            社团人员
          </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul>
                  <li class="my-2 grey lighten-4">名称：</li>

                  <li class="my-2 grey lighten-4">
                    简介：
                    <v-textarea disabled></v-textarea>
                  </li>
                </ul>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-dialog>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on"> 加入 </v-btn>
                  </template>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item class="mt-5 pa-5">
            <v-row class="d-flex">
              <v-col cols="12" lg="4" md="6" sm="6" v-for="i in 9" :key="i">
                <v-card>
                  <activity-home></activity-home>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item></v-tab-item>
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import AppBar from "@/components/AppBar/AppBar";
import ActivityHome from "@/views/HomePage/activity-home/Activity-home";
export default {
  components: {
    AppBar,
    ActivityHome,
  },
};
</script>
<style scoped>
.communityBox {
  margin-top: 100px;
}
ul li {
  list-style: none;
}
</style>