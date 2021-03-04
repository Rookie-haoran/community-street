<template>
  <div>
    <div class="score">0.2学分</div>
    <img src="../../../assets/logo/avatar.jpg" class="activityImg" />
    <v-card-title>title(活动名称)</v-card-title>
    <v-card-subtitle>某社团(活动发起)</v-card-subtitle>
    <v-card-text class="mt-n2">
      <slot></slot>
      <div>
        <v-icon style="font-size: 10px">mdi-clock-time-three</v-icon>
        <span style="font-size: 1px">YYYY.MM.DD-YYYY.MM.DD</span>
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.isOver {
  position: absolute;
  right: 5px;
  color: orange;
  font-size: 5px;
}

.activityImg {
  height: 150px;
  width: 100%;
}

.score {
  position: absolute;
  left: 0;
  top: 0;
  background-color: orange;
  border-radius: 1px;
  color: white;
  padding: 2px;
  font-size: 10px;
}
</style>