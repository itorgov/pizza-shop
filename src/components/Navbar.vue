<template>
  <b-navbar toggleable="lg" type="dark" variant="primary" sticky>
    <b-navbar-brand tag="h1" class="mb-0">Pizza Shop</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" exact>Home</b-nav-item>
        <b-nav-item to="/pizzas" exact>Pizza</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-button
          to="/cart"
          variant="outline-light"
          size="sm"
          class="btn-outline-light--custom mr-2"
        >
          My order {{ getPositionsQuantity() > 0 ? `| ${getPositionsQuantity()}` : '' }}
        </b-button>
        <b-nav-item-dropdown text="Currency" right>
          <b-dropdown-item
            @click="updateCurrency('usd')"
            :active="getCurrency() === 'usd'"
          >
            USD
          </b-dropdown-item>
          <b-dropdown-item
            @click="updateCurrency('eur')"
            :active="getCurrency() === 'eur'"
          >
            EUR
          </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="user.name" right v-if="isAuthenticated()">
          <b-dropdown-item to="/profile">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item to="/login" v-if="!isAuthenticated()">Sign In</b-nav-item>
        <b-nav-item to="/register" v-if="!isAuthenticated()">Sign Up</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Navbar',

  computed: {
    user() {
      return this.getUser();
    },
  },

  methods: {
    ...mapGetters([
      'getCurrency',
    ]),
    ...mapGetters('user', [
      'isAuthenticated',
      'getUser',
    ]),
    ...mapGetters('order', [
      'getPositionsQuantity',
    ]),
    ...mapActions([
      'updateCurrency',
    ]),
    ...mapActions('user', {
      logoutUser: 'logout',
    }),
    async logout() {
      const result = await this.logoutUser();

      if (result) {
        await this.$router.push('/');
      } else {
        this.$bvToast.toast('Something went wrong.', {
          title: 'Error',
          variant: 'danger',
          solid: true,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
  .btn-outline-light {
    &--custom {
      display: flex;
      justify-items: center;
      align-items: center;
      color: rgba(#fff, 0.5);
      border-color: rgba(#fff, 0.5);
      transition: all 0.2s;

      &:hover {
        color: rgba(#fff, 0.75);
        border-color: rgba(#fff, 0.75);
        background-color: transparent;
      }
    }
  }
</style>
