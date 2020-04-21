<template>
  <b-list-group-item class="d-flex justify-content-between align-items-center">
    <div>
      <h5 class="mb-0">{{ name}}</h5>
      <span class="text-muted" v-if="description">{{ description }}</span>
    </div>
    <h4 class="mb-0">
      {{ formattedPrice }}
    </h4>
  </b-list-group-item>
</template>

<script>
import formatPriceMixin from '@/mixins/formatPriceMixin';

export default {
  name: 'CartOrderDetailsItem',

  mixins: [
    formatPriceMixin,
  ],

  props: {
    name: String,
    description: String,
    quantity: Number,
    price: Number,
    currency: String,
  },

  computed: {
    formattedPrice() {
      const price = this.formatPrice(this.price, this.currency);
      return this.quantity > 1 ? `${this.quantity} × ${price}` : price;
    },
  },
};
</script>
