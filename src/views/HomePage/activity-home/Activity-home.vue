<template>
  <div>
    <div class="score">{{ info.credit }}学分</div>
    <!-- <img src="../../../assets/logo/avatar.jpg"   /> -->
    <!-- <img
      src="https://i-1-easyicon.qqxzb-img.com/2020/7/17/f924d029-96be-446b-b41f-58382e738434.png?imageView2/2/q/100"
      class="activityImg"
      alt=""
    /> -->
    <slot name="img"></slot>
    <v-card-title>{{ info.name }}</v-card-title>
    <v-card-subtitle>{{ info.communityName }}</v-card-subtitle>
    <v-card-text class="mt-n2">
      <slot></slot>
      <div>
        <v-icon style="font-size: 10px">mdi-clock-time-three</v-icon>
        <span class="deadline"
          >{{ info.activity_START_TIME }}-{{ info.activity_DEADLINE }}</span
        >
      </div>
    </v-card-text>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
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

.deadline {
  font-size: 1px;
}

@media (max-width: 600px) {
  .deadline {
    font-size: 10px !important;
  }

  .isOver {
    font-size: 10px;
  }
}
</style>