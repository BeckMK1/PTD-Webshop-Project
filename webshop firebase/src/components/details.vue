<template>
    <div class="details">
        <div class="container" v-for="(clothing,Pid) in clothings" :key="Pid">
            <div class="flex-container" v-if="proId == clothing.id">
            <img class="img" :src="clothing.image" alt/>
            <h1 class="title">{{clothing.name}}</h1>
            <p class="dis">{{clothing.description}}</p>
            

            </div>
              <button v-on:click="addToBasket(clothing)">add to basket</button>
            </div>

            </div>
</template>
<script>
import { ClothingRef } from "../firebase-db"
import { basketRef } from "../firebase-db"
export default {
  name:'detalis',
  data(){
      return{
        clothings:[],
        proId:this.$route.params.Pid,    
        title:"details",
      }
  },
    firestore:{
      clothings: ClothingRef,
      baskets:basketRef
  },
  methods:{
    addToBasket(clothing){
      basketRef.add({
        name:clothing.name,
        description:clothing.description,
        price:clothing.price
      })
    }
  }
} 
</script>
<style>
/* edit */
.img{
width: 20%;
}
</style>