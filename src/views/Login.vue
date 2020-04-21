<template>
  <auth-layout title="Login">
    <b-alert variant="danger" dismissible fade :show="errors.length > 0 ? 10 : 0">
      <p class="my-1" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </b-alert>
    <b-form @submit.prevent="submit">
      <b-form-group label="E-Mail address:" label-for="email">
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          autocomplete="username"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          autocomplete="current-password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Login</b-button>
    </b-form>
  </auth-layout>
</template>

<script>
import { mapActions } from 'vuex';
import authFormMixin from '@/mixins/authFormMixin';
import AuthLayout from '@/views/layouts/AuthLayout.vue';

export default {
  name: 'Login',

  components: {
    AuthLayout,
  },

  mixins: [
    authFormMixin,
  ],

  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },

  methods: {
    ...mapActions('user', [
      'login',
    ]),
    async submit() {
      this.errors = [];

      const result = await this.login(this.form);

      this.form.password = '';
      this.handleResponse(result);
    },
  },
};
</script>

<style scoped>

</style>
