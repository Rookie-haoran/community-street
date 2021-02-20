<template>
  <div>
    <profile></profile>
    <v-container class="my-n6">
      <v-divider></v-divider>
      <v-card flat tile class="pl-4 py-2">我的好友</v-card>
      <v-container class="my-n3 px-4">
        <v-divider></v-divider>
      </v-container>
      <v-card flat tile class="px-4" align="center">
        <v-expansion-panels>
          <v-expansion-panel v-for="list in lists" :key="list.name">
            <v-expansion-panel-header>
              <div>
                <v-avatar size="50" class="mr-3">
                  <img src="@/assets/logo/avatar.jpg" alt="" />
                </v-avatar>
                <span>{{ list.name }}</span>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col>
                  <p>此人什么都没留下</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col>
                  <v-btn depressed class="blue--text ml-3">
                    <v-icon>mdi-message</v-icon>
                    <!-- <span>私聊</span> -->
                  </v-btn>
                  <v-btn depressed class="red--text ml-3">
                    <v-icon>mdi-delete</v-icon>
                    <!-- <span>删除</span> -->
                  </v-btn>
                  <v-btn depressed class="orange--text ml-3">
                    <v-icon>mdi-pencil</v-icon>
                    <!-- <span>修改备注</span> -->
                  </v-btn>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <p class="my-3">没有更多内容</p>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import Profile from "@/views/Profile/Profile";
export default {
  components: {
    Profile,
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
};
</script>