<template>
    <div class="row" style="width: 50">
        <div class="col-md-4">
            <h6>Total:</h6>
            <h6>Promo Code:</h6>
            <h6>Shipping:</h6>
            <div class="my-3 line w-120"></div>
            <h6>Subtotal:</h6>
            <div class="my-3 line w-120"></div>     
        </div>
        <div class="col-md-4">
            <h6>Rs {{totalPrice}}</h6>
            <h6>SWEETDISH</h6>
            <h6>Rs 50</h6>
            <div class="my-3 line w-60"></div>
            <h6>Rs {{totalPrice + 50}}</h6>
            <div class="my-3 line w-120"></div>     
        </div>

    </div>
</template>
<script>
export default {
    name:'Summary',
    props:['totalPrice'],
      mounted(){
      console.log(this.totalPrice)
   
  }
}
</script>

<style scoped>
.line{
    height: 2px;
    border-bottom: 1px solid #000;
}
.w-120{
    width: 165px;
}
.w-60{
    width: 130%;
}
.col-md-4 h6{
    width: 200px;
    padding-right: 10px;
}
</style>