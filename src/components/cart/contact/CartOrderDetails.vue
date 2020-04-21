<template>
  <b-card no-body>
    <b-card-body>
      <b-card-title class="mb-0">Order details</b-card-title>
    </b-card-body>

    <b-list-group flush>
      <cart-order-details-item
        v-for="position in positions"
        :name="position.name"
        :description="position.description"
        :quantity="position.quantity"
        :price="position.price"
        :currency="currency"
        :key="position.id"
      />
      <cart-order-details-item
        name="Delivery fee"
        :quantity="1"
        :price="deliveryFee"
        :currency="currency"
      />
      <cart-order-details-item
        name="Total"
        :quantity="1"
        :price="total"
        :currency="currency"
      />
    </b-list-group>
  </b-card>
</template>

<script>
import CartOrderDetailsItem from '@/components/cart/contact/CartOrderDetailsItem.vue';

export default {
  name: 'CartOrderDetails',

  components: {
    CartOrderDetailsItem,
  },

  props: {
    positions: Array,
    deliveryFee: Number,
    total: Number,
    currency: String,
  },
};
</script>
