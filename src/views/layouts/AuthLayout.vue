<template>
  <div class="h-100 d-flex align-items-center bg-light">
    <b-container fluid="md">
      <b-row class="text-center mb-3">
        <b-col>
          <router-link to="/" class="text-decoration-none">
            <h1 class="d-inline">Pizza Shop</h1>
          </router-link>
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="12" md="8" lg="6">
          <b-card :title="title" class="shadow-lg">
            <slot></slot>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'AuthLayout',

  props: {
    title: String,
  },
};
</script>
