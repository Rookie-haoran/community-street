<template>
  <div>
    <div class="top">
      <vue-typed-js
        :strings="['我不知道怎么写:(', '我是菜逼']"
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

