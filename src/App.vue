<template>
  <div class="vh-100" id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'App',

  methods: {
    ...mapActions('order', [
      'getDeliveryFee',
    ]),
  },

  created() {
    this.getDeliveryFee();
  },
};
</script>
