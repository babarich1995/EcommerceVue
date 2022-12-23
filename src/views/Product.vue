<template>
  <div class="py-4 container">
     <div>
        <router-link to="/cart">
        <button class="btn btn-outline-primary mt-4" type="button" style="border-radius:0px;">
         <i class="fa fa-arrow-left me-1"></i> Go To Cart</button> 
        </router-link>
    </div>
    <div class="col-lg-12">
 <div class="card">
    <div class="row">
        <div class="col-lg-4">
          <div class="card me-3 ms-3">
         <img class="image" :src="product.image" alt="product.title">
          </div>

          <p class="text-lg font-bold ms-3 me-3">Price:${{product.price}}</p>
  
        </div>
        <div class="col-lg-8">
        <h2 class="text-lg font-bold" style="color:#2EC5CE;">Description</h2>
        <p class="mb-3" style="margin-bottom:20px;">{{product.title}}</p>
        <p>{{product.description}}</p>
        <div>
        <button  class="btn btn-sm btn-primary" @click.prevent="addToCart(product.id)"><i class="fa fa-cart-plus me-2"></i> Add To Cart</button>
    
       </div>
        </div>
    </div>
   </div>
    </div>
  
  </div>
</template>

<script>
import axios from 'axios'
export default {
     data(){
      return {
       product:[],
       cart:[]
      }
    },
 created(){
    let id = this.$route.params.id
     axios.get(`https://fakestoreapi.com/products/` +id)
     .then(({data})=>(this.product=data))
     .catch(console.log(this.errors))
    },
methods:{
     addToCart(id){
      axios.get(`https://fakestoreapi.com/products/` +id)
        .then((data) => {
         this.cart=data.data
         localStorage.setItem('cart',this.cart)	
        alert("added to cart successfull")
        }).catch((err) => {
          console.log(err)
        });
	   },
}
}
</script>

<style scoped>

.image{
  object-fit: fill;
      height: 100px;
border-radius: 8px;
margin-top:20px;
margin-bottom:20px;
margin-left:50px;
width: 100px;
      
  }
</style>