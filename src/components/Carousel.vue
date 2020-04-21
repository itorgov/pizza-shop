<template>
  <b-carousel
    v-model="slide"
    :interval="4000"
    fade
    indicators
    class="carousel"
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >
    <b-carousel-slide
      caption="Delicious recipes"
      text="We are cooking up perfection everyday."
    >
      <template v-slot:img>
        <div class="slide slide--1"></div>
      </template>
    </b-carousel-slide>

    <b-carousel-slide
      caption="Best pizza makers"
      text="The best pizza makers in our city cook for you."
    >
      <template v-slot:img>
        <div class="slide slide--2"></div>
      </template>
    </b-carousel-slide>

    <b-carousel-slide
      caption="Fast delivery"
      text="We will delivery your order in 1 hour."
    >
      <template v-slot:img>
        <div class="slide slide--3"></div>
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: 'Carousel',

  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },

  methods: {

    onSlideStart() {
      this.sliding = true;
    },

    onSlideEnd() {
      this.sliding = false;
    },

  },
};
</script>

<style scoped lang="scss">
  .carousel {
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4)
  }

  .slide {
    width: 100%;
    height: 80vh;
    background-position: center;
    background-size: cover;

    &--1 {
      background-image: url("../assets/slide-1.jpg");
    }

    &--2 {
      background-image: url("../assets/slide-2.jpg");
    }

    &--3 {
      background-image: url("../assets/slide-3.jpg");
    }
  }
</style>
