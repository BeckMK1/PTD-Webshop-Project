<template>
    <div>
      <div class="grid-container">
          <div class="cTitle">
            <p>Clothing</p>
          </div>
        <div class="cContent">
        <article  v-for="product in products" :key="product.id">
          <div class="cEach" @click="goTodetail(product.id)" v-if="product.category === 'weapon'">
          <div class="image">
        <img :src="product.image">
        </div>
        <h3>{{product.name}}</h3>
        <div class="dis">
        <p>{{product.description}}</p>
        </div>
        <div class="stock">
          <div class="out" v-if="product.instock === 0">
            <div class="out-box"></div>
            <p>out of stuck</p>
          </div>
          <div class="in" v-else="">
            <div class="in-box"></div>
             <p>in stock: {{product.instock}}</p>
          </div>
         
        </div>
        <div class="price-buy">
          <p class="price">$ {{product.price}}</p>
          <div class="buy-btn">
          <button>buy</button>
          </div>
          </div>
        </div>
        </article>
       </div>
        </div>
    </div>
</template>

<script>
import { productRef } from "../firebase-db"
export default {
  name:'clothingList',
  data(){
      return{
          products:[],
          search:''
   }
  },
  firestore:{
      products: productRef,
  },

  methods:{
  goTodetail(productId){
    this.$router.push({name:'details',params:{Pid:productId}})
  },
  },
}
</script>
<style>
.cContent{
display: flex;
flex-direction: row;
margin-top: 50px;
margin-left: 300px;
user-select: none;
cursor: pointer;
text-align: start;
}
.cEach{
display: flex;
flex-direction: column;
}
.price{
  font-weight: bold;
  font-size: 25px;
}
.dis p{
  font-size:12px;
}
.image img{
  width: 25%;
}
h3{
font-size: 20px;
}
.buy-btn button{
  width: 40%;
  -webkit-appearance: none;
  border:none;
  background: black;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
}
.buy-btn{
cursor:pointer;
text-align:end;
width: 20%;
}
.price-buy{
display: flex;
}
.cTitle{
  border-bottom: solid;
  text-align: start;
  width: 70%;
  margin-left: 250px;
  margin-top: 50px;
  font-size: 35px;
}
.stock{
  font-size: 14px;
  display: flex;
}
.out{
display: flex;
}
.in{
display: flex;
}
.out-box{
position: relative;
top:2px;
width: 12px;
height: 12px;
background: red;
margin-right: 5px;
}
.in-box{
position: relative;
top:2px;
width: 12px;
height: 12px;
background: green;
margin-right: 5px; 
}
</style>
