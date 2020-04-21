<template>
  <b-tab title="Contact & address" :active="active" :disabled="!active">
    <b-container fluid>
      <b-row cols="1" cols-lg="2">
        <b-col>
          <cart-contact-form ref="form"/>
        </b-col>
        <b-col>
          <cart-order-details/>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col>
          <b-button variant="outline-secondary" @click="back">Back to the cart</b-button>
        </b-col>
        <b-col class="text-right">
          <b-button variant="primary" :disabled="loading" @click="placeOrder">
            <b-spinner small v-if="loading"></b-spinner>
            Order for {{ formatPrice(getTotalPrice()) }}
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </b-tab>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import formatPriceMixin from '@/mixins/formatPriceMixin';
import CartContactForm from '@/components/cart/contact/CartContactForm.vue';
import CartOrderDetails from '@/components/cart/contact/CartOrderDetails.vue';

export default {
  name: 'CartContactTab',

  components: {
    CartContactForm,
    CartOrderDetails,
  },

  mixins: [
    formatPriceMixin,
  ],

  props: {
    active: Boolean,
  },

  data() {
    return {
      loading: false,
    };
  },

  methods: {
    ...mapGetters('order', [
      'getTotalPrice',
    ]),
    ...mapActions('order', [
      'create',
    ]),
    back() {
      this.$emit('back');
    },
    next() {
      this.$emit('next');
    },
    async placeOrder() {
      if (!this.$refs.form.formIsValid()) {
        return;
      }

      this.loading = true;
      const result = await this.create();
      this.loading = false;

      if (result.status === 'ok') {
        this.next();
      } else {
        this.$bvToast.toast(result.errorDescription, {
          title: result.error,
          variant: 'danger',
          solid: true,
        });
      }
    },
  },
};
</script>
