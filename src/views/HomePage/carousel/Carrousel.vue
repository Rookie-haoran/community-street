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
        <v-row class="fill-height" align="center" justify="center">
          <div class="display-2">社团街</div>
        </v-row>
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
            "http://pic.90sjimg.com/back_origin_pic/05/71/85/19e87c21033668f9fb4a3e857d72ac4a.jpg!/fwfh/822x300/quality/90/unsharp/true/compress/true",
          id: 2,
        },
        {
          src:
            "https://img.tukuppt.com/ad_preview/00/14/12/5c9984610ccdf.jpg!/fw/780",
          id: 3,
        },
        {
          src:
            "https://p.sda1.dev/0/1cd4688d3a9f614d67b265e7f3dc9271/v2-da4b5a5cd8b3047ed8887bbffdc4422b_720w.jpg",
          id: 4,
        },
        {
          src:
            "http://pic.90sjimg.com/back_origin_pic/05/71/70/78e80f357865727a232475f257613e0f.jpg!/watermark/url/LzkwX3dhdGVyX3Y2LnBuZw==/repeat/true",
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
    height: 220px !important;
    padding: 0 10px !important;
  }
}
</style>