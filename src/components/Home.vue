<template>
  <div class="wrapper">
      <Header/>
      <div class="content">
          <div class="container mb-5">
              <h2 class="my-4 fw-600 d-blue">Top Rated</h2>
              <div class="row">
                  <div v-on:click="foodDetails(item)" v-for="item in topRated" :key="item.id" class="col-md-4 pointer">
                  <img :src="item.url" width="300px" height="300px" style="border-radius:15px" alt="" />
                  <h5 class="fw-600 black">{{item.name}}</h5>
              </div>
              </div>

              <h2 class="my-4 fw-600 d-blue">All Categories</h2>
              <div class="row">
                  <div v-on:click="foodDetails(item)" v-for="item in allCategaries" :key="item.id" class="col-md-4 pointer">
                      <img :src="item.url" alt="" width="300px" height="300px" style="border-radius:15px" />
                      <h5 class="fw-600 black">{{item.name}}</h5>
                  </div>
              </div>

              <h2 class="my-4 fw-600 d-blue">Dished Near You</h2>
              <div class="row">
                  <div v-on:click="foodDetails(item)" v-for="item in dishesNearYou" :key="item.id" class="col-md-4 pointer">
                      <img :src="item.url" alt="" width="300px" height="300px" style="border-radius:15px" />
                      <h5 class="fw-600 black">{{item.name}}</h5>
                  </div>
              </div>
          </div>
      </div>
      <Footer/>
  </div>
</template>
<script>
import Header from './common/Header.vue'
import Footer from './common/Footer.vue'
export default {
  name: "Home",
  components:{
      Header,
      Footer
  },
  computed:{
      topRated(){
          return this.$store.state.topRated;
      },
      allCategaries(){
          return this.$store.state.allCategaries;
      },
      dishesNearYou(){
          return this.$store.state.dishesNearYou;
      }
  },
  methods:{
      foodDetails(item){
          return this.$router.push({name:"food-details", params:item})
      }
  }
};
</script>

<style scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        height: 100vh;
    }
    .content{
        background: #efe9e2;
        flex: 1;
        overflow-y: auto;
    }
    .fw-600{
        font-weight: 600;
    }
    .d-blue{
        color: dodgerblue;
    }
    .black{
        color: black;
    }
    .pointer{
        cursor: pointer;
    }
</style>