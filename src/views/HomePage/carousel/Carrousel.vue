<template>
  <div class="py-5 px-1">
    <v-carousel
      cycle
      height="300"
      hide-delimiter-background
      show-arrows-on-hover
      class="carousel"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
        <v-row class="fill-height" align="center" justify="center"> </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
import ActivityHome from "../activity-home/Activity-home";
export default {
  components: {
    ActivityHome,
  },
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: [
        {
          src:
            "https://pic4.zhimg.com/80/v2-0cc0f144548e12871d57b014e20449b0_1440w.jpg?source=1940e5cf",
          id: 1,
        },
        {
          src:
            "https://pic4.zhimg.com/80/v2-0cc0f144548e12871d57b014e20449b0_1440w.jpg?source=1940e5cf",
          id: 2,
        },
        {
          src:
            "https://pic4.zhimg.com/80/v2-0cc0f144548e12871d57b014e20449b0_1440w.jpg?source=1940e5cf",
          id: 3,
        },
        {
          src:
            "https://pic4.zhimg.com/80/v2-0cc0f144548e12871d57b014e20449b0_1440w.jpg?source=1940e5cf",
          id: 4,
        },
        {
          src:
            "https://pic4.zhimg.com/80/v2-0cc0f144548e12871d57b014e20449b0_1440w.jpg?source=1940e5cf",
          id: 5,
        },
      ],
    };
  },
};
</script>

<style scoped>
@media (max-width: 600px) {
  .carousel {
    height: 200px !important;
    padding: 0 10px !important;
  }
}
</style>