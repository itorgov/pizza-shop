<template>
  <b-tab title="Order is placed" :active="active" :disabled="!active">
    <b-container fluid>
      <b-row>
        <b-col class="text-center p-5">
          <h4>Thank you!</h4>
          <p class="mb-4">
            We have received your order. We'll call you in 5 minutes to confirm it.
          </p>
          <b-button to="/pizzas" variant="primary">Back to menu</b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-tab>
</template>

<script>
export default {
  name: 'CartOrderPlacedTab',

  props: {
    active: Boolean,
  },
};
</script>
