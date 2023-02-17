
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

export default {
  props: {
    items: {
      type: Object
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
    };
    const onSlideChange = () => {
    };
    return {
      onSwiper,
      onSlideChange,
    };
  },
};
</script>
<template>
  <div class="position-relative" v-if="items">
    <div class="collection-item-name">
      <span class="glass-name"> {{ items.name }} </span>
    </div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(item, index) in items.glass_variants[0].media"
        :key="index"
      >
        <div>
          <img style="height: 320px" class="w-100" :src="item.url" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style>
.collection-item-name {
  display: flex;
  width: 100%;
  top: 20px;
  position: absolute;
  height: 40px;
  z-index: 5;
  justify-content: center;
  align-items: center;
  font-family: "Acumin Pro";
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.collection-item-name .glass-name {
  font-weight: 500;
  margin-right: 5px;
}
.collection-item-name .variant-name {
  font-weight: 300;
}
</style>
