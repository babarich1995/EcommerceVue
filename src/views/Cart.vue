<template>
  <div class="py-4 container">
     
    <div class="col-lg-12">
 <div class="card">
    <div class="row">
        <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg">Home</h5>
              </div>
             
            </div>
            <div>
                <h2 class="text-lg font-bold">Shopping Continue</h2>
            </div>
            <hr>
        <div class="col-lg-8 mb-3 mr-2">
         
               <div class="card card-custom" v-for="product in products" :key="product">
                <div class="row" v-if="finals.includes(product.id)">
                    <div class="col-lg-4">
                  <img class="image" :src="product.image" alt="product.title">
                    </div>
                    <div class="col-lg-8">
                    
                    <div class="d-flex justify-content-between">
                        <div>
                            <span class="text-sm">{{product.title}}</span>
                        </div>
                        <div class="ms-5 me-2">
                            

                       <input class="form-control" type="number" id="number" value="1" />

                            
                        
                                                     </div>
                                                     <div>
                    <p class="font-bold text-dark">Price:${{product.price}}</p>
                                                     </div>
                    </div>
              
                    </div>
                </div>
                   
									
                </div>
              
                
                
              </div>
              <div class="col-lg-4">
               <div class="card" style="background:#565ABB;width: 388px;
                  height: 644px;">
                   <p class="text-white">Card Details</p>
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
       products:[],
       carts:[],
       cartId:[],
       quantity:[],
       productCarts:[],
       finals:[]
      }
    },
 created(){
   
    
     this.getCart();
     this.getProducts();
    },
    computed:{
   filterProducts(){
  return this.productCarts.forEach(e =>{
    return e.productId
  })
}
},
methods:{
    getCart(){
        axios.get(`https://fakestoreapi.com/carts`,
       
        )
        .then(({data}) => {
          this.carts=data
          for (let index = 0; index < this.carts.length; index++) {
            this.cartId.push(this.carts[index].products)
            
          }
           this.cartId.forEach((i)=>{
               if(i.productId === this.products.id){
                 this.productCarts= i;
               }
           })
         for (let j = 0; j < this.productCarts.length; j++) {
            this.finals.push(this.productCarts[j].productId)
            
         }
        
        for (let j = 0; j < this.productCarts.length; j++) {
            this.quantity.push(this.productCarts[j].quantity)
            
         }
          this.loading=false
        }).catch(() => {
          
        });
    },
     getProducts(){
                axios.get(`https://fakestoreapi.com/products`,
       
        )
        .then(({data}) => {
          this.products=data
          
        

          this.loading=false
        }).catch(() => {
          
        });
        },
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
        increment(id){
      axios.get(`https://fakestoreapi.com/products/` +id)
        .then(() => {
		
        
        }).catch((err) => {
          console.log(err)
        });
	  },
      decrement(id){
       axios.get(`https://fakestoreapi.com/products/` +id)
        .then(() => {
		
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