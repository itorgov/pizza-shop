<template>
  <b-card no-body>
    <b-card-body>
      <b-card-title class="mb-0">Order details</b-card-title>
    </b-card-body>

    <b-list-group flush>
      <cart-order-details-item
        v-for="position in getPositions()"
        :name="position.name"
        :description="position.description"
        :quantity="position.quantity"
        :price="position.price"
        :key="position.id"
      />
      <cart-order-details-item
        name="Delivery fee"
        :quantity="1"
        :price="getDeliveryFee()"
      />
      <cart-order-details-item
        name="Total"
        :quantity="1"
        :price="getTotalPrice()"
      />
    </b-list-group>
  </b-card>
</template>

<script>
import { mapGetters } from 'vuex';
import CartOrderDetailsItem from '@/components/cart/contact/CartOrderDetailsItem.vue';

export default {
  name: 'CartOrderDetails',

  components: {
    CartOrderDetailsItem,
  },

  methods: {
    ...mapGetters('order', [
      'getPositions',
      'getDeliveryFee',
      'getTotalPrice',
    ]),
  },
};
</script>
