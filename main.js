// makes a new vue instance (an instance is like a heart that powers everything)

var app = new Vue({
  // options obj
  //element property that connects to the html div
  el: "#app",
  //data
  data: {
    product: "Socks",
    image: "./assets/black-socks.jpg",
    inStock: true,
    details: ["80% cotton", "20 polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "black",
        variantImage: "./assets/black-socks.jpg"
      },
      {
        varianId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue-socks.jpg"
      }
    ],
    cart: 0
  },
  methods: {
    //anon function, this. refers to the cart in the data.
    addToCart: function() {
      this.cart += 1;
    },
    // ES6 shorthand
    updateProduct(variantImage) {
      this.image = variantImage;
    },
    subtractFromCart() {
      return this.cart === 0 ? (this.cart = 0) : (this.cart -= 1);
    }
  }
});
