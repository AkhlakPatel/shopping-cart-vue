<template>
  <div class="d-flex food-details-outer">
    <Header />
    <div class="food-details">
      <div class="container mb-5">
        <h4 class="my-4 fw-600 addToCart">Add Item to Cart</h4>
        <div class="row">
          <div class="col-md-4" style="cursor: pointer">
            <img
              :src="details.url"
              alt=""
              width="300px"
              height="300px"
              style="border-radius: 15px"
            />
          </div>
          <div class="col-md-4" style="cursor: pointer">
            <h5 class="my-4 fw-600">Name: {{ details.name }}</h5>
            <h5 class="my-4 fw-600">Price: {{ details.price }}</h5>
            <h5 class="my-4 fw-600">Description: {{ details.desc }}</h5>
            <h5 class="my-4 fw-600">Rating: {{ details.rate }}</h5>
            <div>
              <button v-on:click="goToCart" class="btn btn-primary">
                Go to Cart
              </button>
              <button v-on:click="addToCart" class="btn btn-success">
                Add Cart
              </button>
              <button v-on:click="removeItem" class="btn btn-danger">
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "./common/Header.vue";
import Footer from "./common/Footer.vue";
export default {
  components: { Header, Footer },
  name: "FoodDetails",
  data() {
    return {
      details: this.$route.params,
    };
  },
  methods: {
      goToCart() {
          this.$router.push("/cart");
    },
    addToCart() {
        this.$store.dispatch("addToCart", this.details);
    },
    removeItem() {
        this.$store.dispatch("removeItem", this.details);
    },
  },
  //set data in local storage
  created() {
      if (this.$route.params.id !== undefined)
      localStorage.setItem("details", JSON.stringify(this.$route.params));
  },
  mounted() {
      this.details = JSON.parse(localStorage.getItem("details"));
        },
};
</script>

<style scoped>
.food-details-outer {
  flex-direction: column;
  height: 100vh;
}
.food-details {
  background: #efe9e2;
  flex: 1;
  overflow-y: auto;
}
.fw-600 {
  font-weight: 600;
}
button {
  margin: 0px 2px;
  border-radius: 8px;
}
.addToCart {
  color: dodgerblue;
}
</style>