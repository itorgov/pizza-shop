<template>
  <b-card
    :title="pizza.name"
    :img-src="pizza.image_url"
    :img-alt="pizza.name"
    img-top
    tag="article"
    class="card--full-height"
  >
    <b-card-text>
      {{ pizza.toppings }}
    </b-card-text>

    <template v-slot:footer>
      <div class="d-flex justify-content-between align-items-center">
        <span class="h5 m-0">from {{ formatPrice(pizza.minPrice) }}</span>
        <pizza-select-modal :pizza="pizza">Select</pizza-select-modal>
      </div>
    </template>
  </b-card>
</template>

<script>
import formatPriceMixin from '@/mixins/formatPriceMixin';
import PizzaSelectModal from '@/components/pizza/PizzaSelectModal.vue';

export default {
  name: 'PizzaCard',

  components: {
    PizzaSelectModal,
  },

  mixins: [
    formatPriceMixin,
  ],

  props: {
    pizza: Object,
  },
};
</script>

<style scoped>
  .card--full-height {
    height: calc(100% - 1.5rem);
    margin-bottom: 1.5rem;
  }
</style>
