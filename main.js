// makes a new vue instance (an instance is like a heart that powers everything)

var app = new Vue({
  // options obj
  //element property that connects to the html div
  el: "#app",
  //data
  data: {
    product: "Socks",
    image: "./assets/unsplash-socks.jpg",
    inStock: true,
    details: ["80% cotton", "20 polyster", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green"
      },
      {
        varianId: 2235,
        variantColor: "blue"
      }
    ],
    sizes: [
      {
        sizeId: 1001,
        sizeType: "small"
      },
      {
        sizeId: 1002,
        sizeType: "medium"
      },
      {
        sizeId: 1003,
        sizeType: "Large"
      }
    ]
  }
});
