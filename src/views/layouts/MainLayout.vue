<template>
  <div class="h-100">
    <navbar></navbar>
    <slot></slot>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'MainLayout',

  components: {
    Navbar,
  },
};
</script>
