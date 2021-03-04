<template>
  <div>
    <app-bar></app-bar>
    <v-container>
      <div class="box">
        <div class="d-flex">
          <v-avatar size="120" rounded color="grey" class="ma-2">
            <img src="@/assets/logo/avatar.jpg" alt="" />
          </v-avatar>
          <span class="d-flex flex-column mt-10">
            <span class="display-1">昵称</span>
            <span>学院：通信工程与信息工程学院</span>
          </span>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="sign-out" @click="signOut" depressed>退出登录</v-btn>
      </div>
      <v-divider></v-divider>

      <v-card class="mt-5">
        <v-tabs>
          <v-tab> 个人信息 </v-tab>
          <v-tab> 我的活动 </v-tab>
          <v-tab> 我的好友 </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul>
                  <li class="my-2 grey lighten-4">姓名：</li>
                  <li class="my-2">学号：</li>
                  <li class="my-2 grey lighten-4">性别：</li>
                  <li class="my-2">院系：</li>
                  <li class="my-2 grey lighten-4">专业：</li>
                  <li class="my-2">学分：</li>
                  <li class="my-2 grey lighten-4">签名：</li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-dialog>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" depressed>
                      <v-icon left depressed>mdi-cog-refresh</v-icon>修改
                    </v-btn>
                  </template>
                  <v-card></v-card>
                </v-dialog>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item class="mt-5 pa-5">
            <v-row>
              <v-col cols="12" lg="4" md="6" sm="6" v-for="i in 9" :key="i">
                <v-card class="myActBox">
                  <activity-home></activity-home>
                </v-card>
              </v-col>
            </v-row>
          </v-tab-item>
          <v-tab-item> 不搞 </v-tab-item>
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
  data() {
    return {
      lists: [
        { avatar: "@/assets/logo/avatar.jpg", name: "小红" },
        { avatar: "@/assets/logo/avatar.jpg", name: "小黄" },
        { avatar: "@/assets/logo/avatar.jpg", name: "小蓝" },
        { avatar: "@/assets/logo/avatar.jpg", name: "小绿" },
        { avatar: "@/assets/logo/avatar.jpg", name: "小明" },
      ],
    };
  },
  methods: {
    signOut() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
ul li {
  list-style: none;
}
.box {
  position: relative;
}
.sign-out {
  position: absolute;
  right: 0;
  bottom: 10px;
}

@media (max-width: 600px) {
  .sign-out {
    position: absolute;
    right: 0;
    top: 0;
  }
}

@media (min-width: 960px) {
  .myActBox {
    margin: 0 50px;
  }
}
</style>