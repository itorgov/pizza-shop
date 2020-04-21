<template>
  <b-row class="border-bottom py-3 align-items-center">
    <b-col cols="8">
      <h4>{{ position.name }}</h4>
      <p class="text-muted mb-0">
        {{ position.description }}
      </p>
    </b-col>
    <b-col class="text-right">
      <b-button variant="outline-primary" @click="decrementQuantity()">-</b-button>
      <strong class="px-4">{{ position.quantity }}</strong>
      <b-button variant="outline-primary" @click="incrementQuantity()">+</b-button>
    </b-col>
    <b-col class="text-right">
      <h5 class="mb-0">
        {{ price }}
        <b-button
          class="pr-0"
          variant="link"
          @click="remove()"
        >
          <b-icon-trash variant="danger"></b-icon-trash>
        </b-button>
      </h5>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from 'vuex';
import { BIconTrash } from 'bootstrap-vue';
import formatPriceMixin from '@/mixins/formatPriceMixin';

export default {
  name: 'CartItem',

  components: {
    BIconTrash,
  },

  mixins: [
    formatPriceMixin,
  ],

  props: {
    position: Object,
  },

  computed: {
    price() {
      return this.formatPrice(this.position.price * this.position.quantity);
    },
  },

  methods: {
    ...mapActions('order', [
      'incrementPositionQuantity',
      'decrementPositionQuantity',
      'removePosition',
    ]),
    incrementQuantity() {
      this.incrementPositionQuantity({
        type: this.position.type,
        id: this.position.id,
      });
    },
    decrementQuantity() {
      this.decrementPositionQuantity({
        type: this.position.type,
        id: this.position.id,
      });
    },
    remove() {
      this.removePosition({
        type: this.position.type,
        id: this.position.id,
      });
    },
  },
};
</script>
