<template>
    <div>
      <div class="grid-container">
          <div class="cTitle">
            <p>Clothing</p>
          </div>
        <div class="cContent">
        <article  v-for="clothing in clothings" :key="clothing.id">
          <div class="cEach" @click="goTodetail(clothing.id)">
          <div class="image">
        <img :src="clothing.image">
        </div>
        <h3>{{clothing.name}}</h3>
        <div class="dis">
        <p>{{clothing.description}}</p>
        </div>
        <div class="stock">
          <div class="out" v-if="clothing.instock === 0">
            <div class="out-box"></div>
            <p>out of stuck</p>
          </div>
          <div class="in" v-else="">
            <div class="in-box"></div>
             <p>in stock: {{clothing.instock}}</p>
          </div>
         
        </div>
        <div class="price-buy">
          <p class="price">$ {{clothing.price}}</p>
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
import { ClothingRef } from "../firebase-db"
export default {
  name:'clothingList',
  data(){
      return{
          clothings:[],
          search:''
   }
  },
  firestore:{
      clothings: ClothingRef,
  },

  methods:{
  goTodetail(clothingId){
    this.$router.push({name:'details',params:{Pid:clothingId}})
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
