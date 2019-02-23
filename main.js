// makes a new vue instance (an instance is like a heart that powers everything)

var app = new Vue({
  // options obj
  //element property that connects to the html div
  el: "#app",
  //data
  data: {
    product: "Socks",
    image: "./assets/unsplash-socks.jpg",
    inStock: false,
    onSale: true
  }
});
