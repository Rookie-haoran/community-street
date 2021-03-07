<template>
  <div>
    <!-- 应用栏 -->
    <app-bar></app-bar>

    <v-container>
      <div class="box">
        <div class="d-flex">
          <v-avatar size="120" rounded color="grey" class="ma-2">
            <img src="@/assets/logo/avatar.jpg" alt="" />
          </v-avatar>
          <span class="mt-16">
            <span class="display-1">{{ this.user.nickname }}</span>
          </span>
        </div>
        <v-spacer></v-spacer>
        <v-btn class="sign-out" @click="signOut" text color="error">
          <v-icon left>mdi-account-arrow-right-outline</v-icon>
          退出登录
        </v-btn>
      </div>
      <!-- 分割线 -->
      <v-divider></v-divider>

      <v-card class="mt-5">
        <v-tabs>
          <v-tab> 个人信息 </v-tab>
          <v-tab> 我的活动 </v-tab>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul>
                  <li class="my-2 grey lighten-4">
                    姓名：{{ this.user.name }}
                  </li>
                  <li class="my-2">学号：{{ this.user.stuNumber }}</li>
                  <li class="my-2 grey lighten-4">
                    性别：{{ this.user.gender }}
                  </li>
                  <li class="my-2">学院：{{ this.user.college }}</li>
                  <li class="my-2 grey lighten-4">
                    学分：{{ this.user.credit }}
                  </li>
                  <li class="my-2">邮箱：{{ this.user.mailbox }}</li>
                  <li class="my-2 grey lighten-4 sign">
                    签名：
                    {{ this.user.signature }}
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <popup></popup>
              </v-card-actions>
            </v-card>
          </v-tab-item>
          <v-tab-item class="mt-5 pa-5">
            <v-row>
              <v-col cols="12" lg="4" md="6" sm="6" v-for="i in 9" :key="i">
                <v-card class="myActBox" flat>
                  <activity-home></activity-home>
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
import ActivityHome from "@/views/HomePage/activity-home/Activity-home";
import popup from "./popup/Popup";

import { request } from "@/utils/request";

export default {
  components: {
    AppBar,
    ActivityHome,
    popup,
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
      user: {},
    };
  },
  methods: {
    signOut() {
      this.$router.push("/login");
    },
  },
  mounted() {
    request({
      url: "/profile",
      method: "get",
    })
      .then((res) => {
        // console.log(res.data);
        this.user = res.data;
        if (res.data.gender === "M") {
          this.user.gender = "男";
        } else if (res.data.gender === "F") {
          this.user.gender = "女";
        }
        console.log(this.user);
      })
      .catch((err) => {
        console.log(err);
      });
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

.sign {
  height: 200px;
  overflow: hidden;
}

@media (max-width: 600px) {
  .sign-out {
    position: absolute;
    right: 0;
    top: 10px;
  }
}

@media (min-width: 960px) {
  .myActBox {
    margin: 0 50px;
  }
}
</style>