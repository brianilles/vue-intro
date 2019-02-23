// makes a new vue instance (an instance is like a heart that powers everything)

var app = new Vue({
  // options obj
  //element property that connects to the html div
  el: "#app",
  //data
  data: {
    brand: "Vue Mastery",
    product: "Socks",
    selectedVariant: 0,
    details: ["80% cotton", "20 polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "black",
        variantImage: "./assets/black-socks.jpg",
        variantQuantity: 10
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./assets/blue-socks.jpg",
        variantQuantity: 0
      }
    ],
    cart: 0,
    onSale: true
  },
  methods: {
    //anon function, this. refers to the cart in the data.
    addToCart: function() {
      this.cart += 1;
    },
    // ES6 shorthand
    updateProduct(index) {
      this.selectedVariant = index;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      return this.onSale
        ? `${this.brand} ${this.product} are on sale!`
        : `${this.brand} ${this.product} are not sale!`;
    }
  }
});
