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
          <div id="specs" v-scroll-to="'#specsContent'">
            <p>specifications</p>
          </div>
          <div id="review">
            <p>review</p>
          </div>
        </div>
        <div id="pro-content">
          <div class="pro-text">
          <p>{{clothing.productInfo}}</p>
          </div>
        </div>
        <div id="specsContent">
          <div class="spec-text">
            <div class="spec-centered">
              <div class="nav-s-title">
              <p>specifications</p>
              </div>
          <div id="spec1" class="specs">
          <p class="sTitle">{{clothing.specTitle1}}</p>
          <p class="spec">{{clothing.spec1}}</p>
          </div>
          <div id="spec2" class="specs">
            <p class="sTitle">{{clothing.specTitle2}}</p>
            <p class="spec">{{clothing.spec2}}</p>
          </div>
          </div>
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
      baskets: basketRef,
    },
    methods: {
      addToBasket(clothing) {
        basketRef.add({
          name: clothing.name,
          description: clothing.description,
          price: clothing.price
        })
      }
    },
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
#pro-content{
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
.pro-text{
  width: 50%;
  text-align: start;
}
#specsContent{
display: flex;
justify-content: center;
margin-top: 50px;
}
.specs{
  display: flex;
  flex-direction: row;
  border: solid black thin;
  border-bottom: none;
  height: 50px;
}
.sTitle{
display: flex;
width: 10%;
text-align: start;
border-right:solid black thin;
align-items: center;
margin-left: 5px;
padding-right: 5px;
}
.spec-text{
width: 35%; 
display: flex;
}
.spec-centered{
width: 100%;
}
.spec{
display: flex;
align-items: center;
margin-left:12px;  
}
.nav-s-title{
text-align: start;
border: solid black thin;
border-bottom: none;
background: gray;
height: 50px;
display: flex;
align-items: center;
padding-left: 5px; 
}
</style>