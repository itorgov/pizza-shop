<template>
  <main-layout>
    <b-container class="mt-4">
      <b-row>
        <b-col>
          <h2>{{ user.name }}</h2>
          <h6>{{ user.email + (user.phone ? ` | ${user.phone}` : '')}}</h6>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col>
          <h4>Last orders</h4>
          <hr>
        </b-col>
      </b-row>
      <b-alert variant="info" :show="orders.length === 0">
        You haven't made orders yet.
      </b-alert>
      <div v-if="orders.length > 0">
        <b-row class="mb-4" v-for="order in orders" :key="order.id">
          <b-col>
            <h5>{{ `Order #${order.id}` }}</h5>
            <p>
              <strong>Name: </strong>{{ order.name }}<br>
              <strong>Phone: </strong>{{ order.phone }}<br>
              <strong>Address: </strong>{{ order.address }}<br>
            </p>
            <cart-order-details
              :positions="order.positions"
              :delivery-fee="order.delivery_fee"
              :total="order.total"
              :currency="order.currency"
            />
          </b-col>
        </b-row>
      </div>
    </b-container>
  </main-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainLayout from '@/views/layouts/MainLayout.vue';
import CartOrderDetails from '@/components/cart/contact/CartOrderDetails.vue';

export default {
  name: 'Profile',

  components: {
    MainLayout,
    CartOrderDetails,
  },

  data() {
    return {
      orders: [],
    };
  },

  computed: {
    user() {
      return this.getUser();
    },
  },

  methods: {
    ...mapGetters('user', [
      'getUser',
    ]),
    ...mapActions('user', [
      'lastOrders',
    ]),
    async getLastOrders() {
      const orders = await this.lastOrders();

      this.orders = orders.map((order) => ({
        ...order,
        total: order.pizzas.reduce(
          (sum, pizza) => sum + parseInt(pizza.price, 10) * parseInt(pizza.quantity, 10),
          parseInt(order.delivery_fee, 10),
        ),
        positions: order.pizzas.map((orderedPizza) => ({
          id: orderedPizza.id,
          name: orderedPizza.pizzaSize.pizza.name,
          description: `${orderedPizza.pizzaSize.size}", ${orderedPizza.crust} crust`,
          price: orderedPizza.price,
          quantity: orderedPizza.quantity,
        })),
      }));

      console.log(this.orders);
    },
  },

  mounted() {
    this.getLastOrders();
  },
};
</script>

<style scoped>

</style>
