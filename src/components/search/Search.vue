<template>
  <v-dialog fullscreen>
    <template class="d-flex" fluid v-slot:activator="{ on, attrs }">
      <v-text-field
        v-bind="attrs"
        v-on:enter="on"
        placeholder="搜索"
        prepend-inner-icon="mdi-magnify"
        dense
        clearable
        class="searchBox mt-7"
        solo
        flat
        v-model="content"
        @keyup.enter="search"
      >
      </v-text-field>
    </template>
    <template v-slot:default="dialog">
      <v-card>
        <v-card-title>搜索内容</v-card-title>
        <v-card-text>
          <h1>活动</h1>
          <v-card></v-card>
        </v-card-text>
        <v-card-text>
          <h1>社团</h1>
          <v-card>
            <v-card-title>
              {{ content.title }}
            </v-card-title>
            <v-card-subheader>
              {{ content.type }}
            </v-card-subheader>
            <v-card-text>
              {{ content.describe }}
            </v-card-text>
          </v-card>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="dialog.value = false" color="warning">关闭</v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script>
import { request } from "@/utils/request";
export default {
  data() {
    return {
      isShow: false,
      content: "",
    };
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
    },
    search() {
      // this.$router.push("/searchContent");
      request({
        url: "/community/search",
        method: "post",
        data: this.content,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .searchBox {
    width: 150px;
  }
}

@media (min-width: 960px) {
  .searchBox {
    width: 300px;
  }
}
</style>