<template>
  <main-layout>
    <b-container class="mt-4">
      <b-row>
        <b-col>
          <b-tabs class="border rounded" card>
            <cart-items-tab :active="step === 1" @next="nextStep"/>
            <cart-contact-tab :active="step === 2" @back="previousStep" @next="nextStep"/>
            <cart-order-placed-tab :active="step === 3"/>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </main-layout>
</template>

<script>
import MainLayout from '@/views/layouts/MainLayout.vue';
import CartItemsTab from '@/components/cart/CartItemsTab.vue';
import CartContactTab from '@/components/cart/CartContactTab.vue';
import CartOrderPlacedTab from '@/components/cart/CartOrderPlacedTab.vue';

export default {
  name: 'Cart',

  components: {
    MainLayout,
    CartItemsTab,
    CartContactTab,
    CartOrderPlacedTab,
  },

  data() {
    return {
      step: 1,
    };
  },

  methods: {
    previousStep() {
      this.step -= 1;
    },
    nextStep() {
      this.step += 1;
    },
  },
};
</script>
