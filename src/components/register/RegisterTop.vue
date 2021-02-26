<template>
  <div>
    <div class="top">
      <vue-typed-js
        :strings="['Welcome to ', 'Community Street']"
        :loop="true"
        :typeSpeed="100"
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
  height: 80px;
}
</style>

