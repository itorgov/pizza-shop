<template>
  <b-tab title="My order" :active="active" :disabled="!active">
    <b-container fluid v-if="getPositions().length > 0">
      <cart-item
        v-for="position in getPositions()"
        :position="position"
        :key="position.id"
      ></cart-item>
      <b-row class="mt-3 text-right" v-if="getPositionsPrice() > 0">
        <b-col>
          <span class="h4">Total: </span>
          <span class="h3 text-primary">{{ formatPrice(getPositionsPrice()) }}</span>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-button to="/pizzas" variant="outline-secondary">Back to menu</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" class="px-5" @click="next">
            Next
          </b-button>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid v-else>
      <b-row>
        <b-col class="text-center p-5">
          <p class="text-muted">
            Your cart is empty.
          </p>
          <b-button to="/pizzas" variant="outline-primary">Back to menu</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-tab>
</template>

<script>
import { mapGetters } from 'vuex';
import formatPriceMixin from '@/mixins/formatPriceMixin';
import CartItem from '@/components/cart/items/CartItem.vue';

export default {
  name: 'CartItemsTab',

  components: {
    CartItem,
  },

  mixins: [
    formatPriceMixin,
  ],

  props: {
    active: Boolean,
  },

  methods: {
    ...mapGetters('order', [
      'getPositions',
      'getPositionsPrice',
    ]),
    next() {
      this.$emit('next');
    },
  },
};
</script>
