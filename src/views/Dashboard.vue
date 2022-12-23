<template>
  <div class="py-4 container-fluid">
     
    <div class="row">
      <div class="col-lg-12">
      
        <div class="row">
          <div class="col-lg-12">
             <div class="d-flex justify-content-between">
              <div>
             <h5 class="text-lg">Home</h5>
              </div>
             
            </div>
            <div class="row">
              <h2 class="text-lg text-bold">Products</h2>
              <div class="col-lg-3 mb-3 mr-2"  v-for="product in products" :key="product">
               <router-link :to="{name:'view_product', params:{id:product.id}}">
               <div class="card card-custom">
                
                   <img class="image" :src="product.image" alt="product.title">
									
                </div>
               </router-link>
                
                <span class="text-sm">{{product.title}}</span>
                <p class="font-bold text-dark">Price:${{product.price}}</p>
              </div>
              
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
  name: "dashboard-default",
   
   
    created(){
  
     this.getProducts();
  
  },
  data() {
   
    return {
     
    
       products:[],
      
     
    };
  },
 
   methods:{
  
     getProducts(){
                axios.get(`https://fakestoreapi.com/products`,
       
        )
        .then(({data}) => {
          this.products=data
         
          this.loading=false
        }).catch(() => {
          
        });
        }
        
    
   },
 
};
</script>
<style scoped>
.card{
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 20px;
}
.custom-btn{
background: rgba(232, 232, 232, 0.1);
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(2.5px);
border-radius: 15px;
}
.card-custom{
width: 200px;
height: 300px;
}
.image{
      width: 100%;
      object-fit: fill;
      height: 300px;
      border-radius: 0.8rem;
  }
  .foots{
     color: #fff;
      padding: 3px 8px;
      font-size: 12px;
      border-radius: 6px;
      position: absolute;
      right: 40px;
      bottom: 20px;
  }
  .rate{
position: absolute;
width: 68px;
height: 28px;
left: 135px;
top: 5px;

  }
</style>
