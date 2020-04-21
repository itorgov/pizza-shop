import { mapGetters } from 'vuex';

export default {
  methods: {
    ...mapGetters([
      'getCurrency',
    ]),

    formatPrice(price, currency) {
      const formattedPrice = (price / 100).toFixed(2);

      switch (currency || this.getCurrency()) {
        case 'usd':
          return `$${formattedPrice}`;
        case 'eur':
          return `${formattedPrice} €`;
        default:
          return formattedPrice;
      }
    },
  },
};
