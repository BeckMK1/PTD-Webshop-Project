<template>
    <div>
      <div class="grid-container">
        <div class="cContent">
        <article  v-for="clothing in clothings" :key="clothing.id">
          <div class="cEach" @click="goTodetail(clothing.id)">
        <img :src="clothing.image" alt />
        <h3>{{clothing.name}}</h3>
        <p class="price">${{clothing.price}}</p>
        <p>{{clothing.description}}</p>
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
      clothings: ClothingRef
  },

  methods:{
  goTodetail(clothingId){
    this.$router.push({name:'details',params:{Pid:clothingId}})
  }
  },
}
</script>
<style>
.cContent{
display: flex;
flex-direction: row;
margin-top: 50px;
margin-left: 100px;
user-select: none;
cursor: pointer;
}
.cEach{
display: flex;
flex-direction: column;
}

</style>
