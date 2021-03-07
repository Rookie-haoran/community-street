<template>
  <div id="app">
    <v-app>
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less">
#app {
  background-color: #f5f6fa;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
