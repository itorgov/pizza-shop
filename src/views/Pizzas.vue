<template>
  <main-layout>
    <b-container class="mt-4">
      <b-row>
        <b-col>
          <h2>Pizza</h2>
          <hr>
        </b-col>
      </b-row>
      <list-loading v-if="!loaded"></list-loading>
      <b-alert variant="danger" show v-else-if="loaded && error">
        Can't get a list of pizza. Try again later.
      </b-alert>
      <b-alert variant="primary" show v-else-if="loaded && pizzas.length === 0">
        There is no pizza yet.
      </b-alert>
      <b-overlay :show="loading" rounded="sm" v-else>
        <b-row cols="1" cols-md="2" cols-lg="3">
          <b-col v-for="pizza in pizzas" :key="pizza.id">
            <pizza-card :pizza="pizza"></pizza-card>
          </b-col>
        </b-row>
        <b-row class="overflow-auto">
          <b-col>
            <b-pagination
              v-model="page"
              :per-page="perPage"
              :total-rows="total"
              :disabled="loading"
            />
          </b-col>
        </b-row>
      </b-overlay>
    </b-container>
  </main-layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MainLayout from '@/views/layouts/MainLayout.vue';
import ListLoading from '@/components/ListLoading.vue';
import PizzaCard from '@/components/pizza/PizzaCard.vue';

export default {
  name: 'Pizzas',

  components: {
    MainLayout,
    PizzaCard,
    ListLoading,
  },

  data() {
    return {
      loaded: false,
      loading: false,
      error: false,
      page: this.getCurrentPage(),
    };
  },

  computed: {
    pizzas() {
      return this.getList();
    },
    perPage() {
      return this.getItemsPerPage();
    },
    total() {
      return this.getTotalItems();
    },
  },

  watch: {
    page(newPage) {
      this.changePageTo(newPage);
      this.loadPizzas();
    },
  },

  methods: {
    ...mapGetters('pizzas', [
      'getList',
      'getCurrentPage',
      'getItemsPerPage',
      'getTotalItems',
    ]),
    ...mapActions('pizzas', [
      'loadPage',
      'changePageTo',
    ]),
    async loadPizzas() {
      this.loading = true;

      try {
        await this.loadPage();
      } catch (error) {
        this.error = true;
      }

      this.loading = false;
      this.loaded = true;
    },
  },

  mounted() {
    this.loadPizzas();
  },
};
</script>
