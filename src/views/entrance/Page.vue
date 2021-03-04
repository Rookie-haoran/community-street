<template>
  <div id="page">
    <v-responsive class="container">
      <v-lazy
        v-model="isActive"
        :options="{
          threshold: 0.5,
        }"
        min-height="150"
        transition="fade-transition"
      >
        <p class="display-1 pageTitle">发现有趣的你</p>
      </v-lazy>
      <v-container class="suggest">
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-card width="300" height="200" class="mx-5 my-4">
            <v-card-title>海量社团</v-card-title>
            <v-card-text
              >Any application that can be written in JavaScript, will
              eventually bewritten in JavaScript.
            </v-card-text>
          </v-card>
        </v-lazy>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-card width="300" height="200" class="mx-5 my-4">
            <v-card-title>海量活动</v-card-title>
            <v-card-text
              >Any application that can be written in JavaScript, will
              eventually bewritten in JavaScript.
            </v-card-text>
          </v-card>
        </v-lazy>
        <v-lazy
          v-model="isActive"
          :options="{
            threshold: 0.5,
          }"
          min-height="200"
          transition="fade-transition"
        >
          <v-card width="300" height="200" class="mx-5 my-4">
            <v-card-title>社交能力</v-card-title>
            <v-card-text
              >Any application that can be written in JavaScript, will
              eventually bewritten in JavaScript.
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-container>
    </v-responsive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scoped>
#page {
  height: 95vh;
  margin-top: 50vh;
  background-color: white;
  position: relative;
}

.pageTitle {
  position: absolute;
  top: 50px;
}

.suggest {
  display: flex;
}

@media (max-width: 599px) {
  .container {
    max-height: 1200px;
  }
  .pageTitle {
    left: 20vw;
  }
  .suggest {
    flex-direction: column;
    align-items: center;
  }
}

@media (min-width: 600px) {
  .container {
    max-height: 600px;
  }
  .pageTitle {
    left: 38vw;
  }
  .suggest {
    flex-direction: row;
    justify-content: space-around;
  }
}
@media (min-width: 960px) {
  .pageTitle {
    left: 42vw;
  }
}
@media (min-width: 1264px) {
  .pageTitle {
    left: 45vw;
  }
}
</style>