<template>
  <main-layout>
    <carousel></carousel>
    <b-container>
      <b-row class="cta__row my-3" align-h="center" align-v="center">
        <b-button variant="primary" size="lg" to="/pizzas">Order Pizza Now</b-button>
      </b-row>
    </b-container>
  </main-layout>
</template>

<script>
import MainLayout from '@/views/layouts/MainLayout.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Index',
  components: {
    MainLayout,
    Carousel,
  },
};
</script>

<style scoped lang="scss">
  .cta {
    &__row {
      height: calc(20vh - 56px - 2rem);
    }
  }
</style>
