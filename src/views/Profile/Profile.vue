<template>
  <div>
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
        <v-btn class="sign-out" @click="signOut" depressed>退出登录</v-btn>
      </div>
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
                  <!-- <li class="my-2 grey lighten-4">
                    {{ this.user.profession }}：
                  </li> -->
                  <li class="my-2 grey lighten-4">
                    学分：{{ this.user.credit }}
                  </li>
                  <li class="my-2">邮箱：{{ this.user.mailbox }}</li>
                  <!-- <li class="my-2">签名：{{ this.user.signature }}</li> -->
                  <li class="my-2 grey lighten-4">
                    签名：
                    {{ this.user.signature }}
                    <v-textarea disabled></v-textarea>
                  </li>
                </ul>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-dialog
                  max-width="600px"
                  transition="dialog-bottom-transition"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" depressed>
                      <v-icon left depressed>mdi-cog-refresh</v-icon>修改
                    </v-btn>
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-card-title class="grey--text lighten-4"
                        >修改个人信息</v-card-title
                      >
                      <v-card-text>
                        <v-form>
                          <v-text-field
                            v-for="i in changeUserInfo"
                            :key="i"
                            :label="i"
                          ></v-text-field>
                          <v-text-field
                            label="密码"
                            type="password"
                          ></v-text-field>
                          <v-text-field
                            label="确认密码"
                            type="password"
                          ></v-text-field>
                          <v-textarea
                            label="签名"
                            prepend-inner-icon="mdi-pencil"
                          ></v-textarea>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          class="warning"
                          @click="dialog.value = false"
                          depressed
                          >关闭</v-btn
                        >
                        <v-spacer></v-spacer>
                        <v-btn class="error" depressed>确认修改</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
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
        </v-tabs>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar/AppBar";
import ActivityHome from "@/views/HomePage/activity-home/Activity-home";

import { request } from "@/utils/request";

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
      changeUserInfo: ["昵称", "姓名", "性别"],
      user: {
        // name: "",
        // stuNumber: "",
        // genders: "",
        // colleage: "",
        // profession: "",
        // credits: "",
        // signature: "",
        // registerTime: "",
      },
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
        console.log(res.data);
        this.user = res.data;
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