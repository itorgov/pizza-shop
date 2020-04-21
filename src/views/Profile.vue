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
      <b-alert variant="info" :show="true">You haven't made orders yet.</b-alert>
    </b-container>
  </main-layout>
</template>

<script>
import MainLayout from '@/views/layouts/MainLayout.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Profile',

  components: {
    MainLayout,
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
  },
};
</script>

<style scoped>

</style>
