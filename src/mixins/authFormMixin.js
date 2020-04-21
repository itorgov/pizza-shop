export default {
  data() {
    return {
      errors: [],
    };
  },

  methods: {
    handleResponse(response) {
      if (!response.errors) {
        this.$router.push('profile');
      } else {
        Object.keys(response.errors).forEach((key) => {
          if ({}.hasOwnProperty.call(response.errors, key)) {
            this.errors = [...this.errors, ...response.errors[key]];
          }
        });
      }
    },
  },
};
