<template>
  <b-button variant="outline-primary" @click="opened = !opened">
    <slot></slot>
    <b-modal
      size="lg"
      body-class="p-0"
      centered
      hide-header
      v-model="opened"
    >
      <b-container fluid>
        <b-row>
          <b-col cols="12" md="5" lg="7" class="pl-0 pr-0 pr-md-3">
            <b-img class="pizza__img" :src="image" :alt="name"></b-img>
          </b-col>
          <b-col cols="12" md="7" lg="5" class="p-3 pl-md-0">
            <h4>{{ name }}</h4>
            <p class="text-muted">
              {{ description }}
            </p>
            <p>{{ toppings }}</p>
            <b-button-group size="sm" class="w-100 mb-3">
              <b-button
                v-for="size in sizes"
                :key="size.id"
                :pressed="size.id === currentSizeId"
                @click="changeSizeTo(size.id)"
                variant="light"
              >
                {{ size.size }}"
              </b-button>
            </b-button-group>
            <b-button-group size="sm" class="w-100 mb-3">
              <b-button
                :pressed="crust === 'traditional'"
                @click="changeCrustTo('traditional')"
                variant="light"
              >
                Traditional
              </b-button>
              <b-button
                :pressed="crust === 'thin'"
                @click="changeCrustTo('thin')"
                variant="light"
              >
                Thin
              </b-button>
            </b-button-group>
            <b-input-group size="sm" class="w-100">
              <b-input-group-prepend>
                <b-button
                  variant="light"
                  class="btn-light--bordered"
                  @click="decrementQuantity"
                >
                  -
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                class="text-center"
                type="number"
                min="1"
                step="1"
                readonly
                v-model="quantity"
              ></b-form-input>
              <b-input-group-append>
                <b-button
                  variant="light"
                  class="btn-light--bordered"
                  @click="incrementQuantity"
                >
                  +
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </b-col>
        </b-row>
      </b-container>
      <template v-slot:modal-footer>
        <b-button class="d-none d-md-block" variant="primary" @click="submit()">
          Add to basket for {{ price }}
        </b-button>

        <b-button class="d-block d-md-none" variant="primary" size="lg" block @click="submit">
          Add to basket for {{ price }}
        </b-button>
        <b-button class="d-block d-md-none" variant="light" block @click="close()">
          Cancel
        </b-button>
      </template>
    </b-modal>
  </b-button>
</template>

<script>
import formatPriceMixin from '@/mixins/formatPriceMixin';
import { mapActions } from 'vuex';

export default {
  name: 'PizzaSelectModal',

  mixins: [
    formatPriceMixin,
  ],

  props: {
    pizza: Object,
  },

  data() {
    return {
      opened: false,
      crust: 'traditional',
      currentSizeId: this.pizza.sizes[0].id,
      quantity: 1,
    };
  },

  computed: {
    image() {
      return this.pizza.image_url;
    },
    name() {
      return this.pizza.name;
    },
    description() {
      let description = '';

      if (this.currentSize) {
        description += `${this.currentSize.size}", `;
      }

      return `${description}${this.crust} crust`;
    },
    toppings() {
      return this.pizza.name;
    },
    sizes() {
      return this.pizza.sizes;
    },
    currentSize() {
      return this.pizza.sizes.find((size) => size.id === this.currentSizeId);
    },
    price() {
      return this.currentSize ? this.formatPrice(this.currentSize.price * this.quantity) : '';
    },
  },

  methods: {
    ...mapActions('order', [
      'addPizza',
    ]),
    changeSizeTo(sizeId) {
      this.currentSizeId = sizeId;
    },
    changeCrustTo(crust) {
      this.crust = crust;
    },
    decrementQuantity() {
      if (this.quantity > 1) {
        this.quantity = parseInt(this.quantity, 10) - 1;
      }
    },
    incrementQuantity() {
      this.quantity = parseInt(this.quantity, 10) + 1;
    },
    submit() {
      this.addPizza({
        name: this.name,
        description: this.description,
        sizeId: this.currentSizeId,
        quantity: this.quantity,
        crust: this.crust,
      });

      this.resetState();
      this.close();
    },
    resetState() {
      this.crust = 'traditional';
      this.currentSizeId = this.pizza.sizes[0].id;
      this.quantity = 1;
    },
    close() {
      this.opened = false;
    },
  },
};
</script>

<style scoped lang="scss">
  .pizza {
    &__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }

  .btn-light {
    &--bordered {
      border-color: #dae0e5;
    }
  }
</style>
