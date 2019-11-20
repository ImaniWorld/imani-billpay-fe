export default function windowScrollPosition(propertyName) {
  return {
    data() {
      return {
        // Initialize scroll position at [0, 0]
        [propertyName]: false
      }
    },
    created() {
      // Only execute this code on the client side, server sticks to [0, 0]
      if (!this.$isServer) {
        this._scrollListener = () => {
          if (window.pageYOffset > 150) {
            this[propertyName] = true;
          } else {
            this[propertyName] = false;
          }
        }

        // Call listener once to detect initial position
        this._scrollListener()

        // When scrolling, update the position
        window.addEventListener('scroll', this._scrollListener)
      }
    },
    beforeDestroy() {
      // Detach the listener when the component is gone
      window.removeEventListener('scroll', this._scrollListener)
    }
  }
}
