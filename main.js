const app = Vue.createApp({
  data() {
      return {
          cart: 0,
          product: 'Socks',
          image: './assets/vmSocks-blue.jpg',
          inStock: false,
          details: ['50% cotton', '30% wool', '20% polyester'],
          variants: [
            { id: 2234, color: 'green', image: './assets/vmSocks-green.jpg'  },
            { id: 2235, color: 'blue', image: './assets/vmSocks-blue.jpg' },
          ]
      }
  },
  methods: {
      addToCart() {
          this.cart += 1
      },
      // solution
      removeFromCart() {
          if (this.cart >= 1) {
              this.cart -= 1
          }
      },
      // solution
      updateImage(variantImage) {
          this.image = variantImage
      }
  }
})
