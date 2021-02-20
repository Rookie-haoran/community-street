<template>
  <div>
    <div class="top">
      <vue-typed-js
        :strings="[
          '大丈夫生于天地间',
          '岂能郁郁久居人下',
          '树叶的一生',
          '只是为了归根嘛',
          '精准与否',
          '就是屠宰和手术的区别',
        ]"
        :loop="true"
        :typeSpeed="150"
      >
        <h2 class="typing"></h2>
      </vue-typed-js>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f9c74f;
  height: 120px;
}
</style>

