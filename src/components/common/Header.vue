<template>
  <header>
    <div class="header">
      <div v-on:click="goTo('home')" class="logo">
        <h4 class="sweat">Sweet Dish</h4>
        <img src="../../assets/cafe.png" alt="" class="cafe" />
      </div>
      <div class="d-flex cart">
        <i v-on:click="goTo('cart')" class="fa fa-shopping-cart cart-icon"></i>
        <span class="cart-count">{{ count }}</span>

        <h5 class="login">Login</h5>
        <h5 class="register">Signup</h5>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goTo(page){
      page === "home" ? this.$router.push('/') : this.$router.push('/cart')
    }
  },
  computed: {
    count() {
      return this.$store.state.cartItemCount;
    },
  },
};
</script>

<style scoped>
.header {
  height: 60px;
  background-color: lightgrey;
  display: flex;
  justify-content: space-between;

}
.logo {
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}
.cafe{
  width:"40px";
  height:"40px";
  margin-left: 4px;
  border-radius:25px;
  margin-bottom: 4px;
}
.sweat {
  color: deeppink;
  font-weight: 600;
  margin-top: 7px;
}
.cart-count {
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-top: 5px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
  margin-left: -44px;
}
.cart {
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}
.cart-icon {
  line-height: 45px;
  font-size: 24px;
  color: #2aa5a0;
  cursor: pointer;
}
.login,
.register {
  font-weight: 600;
  margin-top: 10px;
}
</style>