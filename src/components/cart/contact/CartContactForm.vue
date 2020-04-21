<template>
  <div>
    <b-form-group label="Name" label-for="name">
      <b-form-input
        id="name"
        type="text"
        v-model="name"
        :state="state.name"
        autocomplete="off"
        trim
      />
    </b-form-group>
    <b-form-group label="Phone" label-for="phone">
      <b-form-input
        id="phone"
        type="tel"
        v-model="phone"
        :state="state.phone"
        autocomplete="off"
        trim
      />
    </b-form-group>
    <b-form-group label="Delivery address" label-for="address">
      <b-form-textarea
        id="address"
        placeholder="Enter your street address, apt., suite, room and comments..."
        rows="3"
        v-model="address"
        :state="state.address"
        autocomplete="off"
        trim
      ></b-form-textarea>
    </b-form-group>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CartContactForm',

  data() {
    return {
      state: {
        name: null,
        phone: null,
        address: null,
      },
    };
  },

  computed: {
    name: {
      get() {
        return this.getName();
      },
      set(value) {
        this.state.name = value.length > 0;
        this.updateName(value);
      },
    },
    phone: {
      get() {
        return this.getPhone();
      },
      set(value) {
        this.state.phone = value.length > 0;
        this.updatePhone(value);
      },
    },
    address: {
      get() {
        return this.getAddress();
      },
      set(value) {
        this.state.address = value.length > 0;
        this.updateAddress(value);
      },
    },
  },

  methods: {
    ...mapGetters('order', [
      'getName',
      'getPhone',
      'getAddress',
    ]),
    ...mapActions('order', [
      'updateName',
      'updatePhone',
      'updateAddress',
    ]),
    validate() {
      this.state.name = this.name.length > 0;
      this.state.phone = this.phone.length > 0;
      this.state.address = this.address.length > 0;
    },
    formIsValid() {
      this.validate();
      return this.state.name && this.state.phone && this.state.address;
    },
  },
};
</script>
