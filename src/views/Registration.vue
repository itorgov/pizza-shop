<template>
  <auth-layout title="Registration">
    <b-alert variant="danger" dismissible fade :show="errors.length > 0 ? 10 : 0">
      <p class="my-1" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </b-alert>
    <b-form @submit.prevent="submit">
      <b-form-group label="Your Name:" label-for="name">
        <b-form-input
          id="name"
          v-model="form.name"
          required
          autofocus
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="E-Mail address:"
        label-for="email"
        description="We'll never share your E-Mail with anyone else."
      >
        <b-form-input
          id="email"
          v-model="form.email"
          type="email"
          required
          autocomplete="username"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Phone:"
        label-for="phone"
        description="We'll never share your phone number with anyone else."
      >
        <b-form-input
          id="phone"
          v-model="form.phone"
          type="tel"
        ></b-form-input>
      </b-form-group>
      <b-form-group label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          required
          autocomplete="new-password"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        label="Password confirmation:"
        label-for="password_confirmation"
        description="Enter your password again."
      >
        <b-form-input
          id="password_confirmation"
          v-model="form.password_confirmation"
          type="password"
          required
          autocomplete="new-password"
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary" block>Register</b-button>
    </b-form>
  </auth-layout>
</template>

<script>
import { mapActions } from 'vuex';
import authFormMixin from '@/mixins/authFormMixin';
import AuthLayout from '@/views/layouts/AuthLayout.vue';

export default {
  name: 'Registration',

  components: {
    AuthLayout,
  },

  mixins: [
    authFormMixin,
  ],

  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        password: '',
        password_confirmation: '',
      },
    };
  },

  methods: {
    ...mapActions('user', [
      'register',
    ]),
    async submit() {
      this.errors = [];

      const result = await this.register(this.form);

      this.form.password = '';
      this.form.password_confirmation = '';
      this.handleResponse(result);
    },
  },
};
</script>

<style scoped>

</style>
