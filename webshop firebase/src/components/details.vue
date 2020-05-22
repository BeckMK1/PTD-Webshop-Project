<template>
  <div class="details">
    <div class="container" v-for="(clothing,Pid) in clothings" :key="Pid">
      <div class="flex-container" v-if="proId == clothing.id">
        <div class="content">
          <h1 class="title">{{clothing.name}}</h1>
          <p class="dis">{{clothing.description}}</p>
          <div class="d-image">
            <img class="img" :src="clothing.image" alt />
          </div>
          <div class="add-btn">
            <button v-on:click="addToBasket(clothing)">add to basket</button>
          </div>
        </div>

        <div class="d-nav">
          <div id="pro-info">
            <p>product info</p>
          </div>
          <div id="specs">
            <p>specifications</p>
          </div>
          <div id="review">
            <p>review</p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  import {
    ClothingRef
  } from "../firebase-db"
  import {
    basketRef
  } from "../firebase-db"
  export default {
    name: 'detalis',
    data() {
      return {
        clothings: [],
        proId: this.$route.params.Pid,
        title: "details",
      }
    },
    firestore: {
      clothings: ClothingRef,
      baskets: basketRef
    },
    methods: {
      addToBasket(clothing) {
        basketRef.add({
          name: clothing.name,
          description: clothing.description,
          price: clothing.price
        })
      }
    }
  }
</script>
<style>
  .content {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 50%;
    height: auto;
    margin-left: 810px;
  }

  .d-image img {
    width: 100%;
  }

  .d-image {
    position: relative;
    right: 65px;
    width: 30%;
  }
  .dis {
    font-size: 12px;
  }
  .d-nav {
    background: grey;
    width: 60%;
    height: 50px;
    margin-left: 330px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around; 
  }
  .d-nav div p {
  margin-top: 15px;
  }
#specs{
  border-left: solid black;
  border-right: solid black;
}
#specs p{
margin-left: 130px;
margin-right: 130px;
}
#pro-info{
position: relative;
left:50px
}
#review{
position: relative;
right: 50px;
}

</style>