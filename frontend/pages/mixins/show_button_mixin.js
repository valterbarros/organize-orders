const showButtonMixin = {
  methods: {
    show_button (fields) {
      return fields.indexOf(this.$router.currentRoute.name) > -1
    }
  }
}

export default showButtonMixin