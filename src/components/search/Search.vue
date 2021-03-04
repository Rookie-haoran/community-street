<template>
  <div>
    <v-container class="d-flex" fluid>
      <v-text-field
        placeholder="搜索"
        dense
        clearable
        class="searchBox mt-7"
        solo
        flat
      >
      </v-text-field>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    changeShow() {
      this.isShow = !this.isShow;
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