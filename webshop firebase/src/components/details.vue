<template>
  <div class="details">
    <div class="container" v-for="(clothing,Pid) in clothings" :key="Pid">
      <div class="flex-container" v-if="proId == clothing.id">
        <div class="content">
          <div class="left-container">
          <h1 class="title">{{clothing.name}}</h1>
          <p class="dis">{{clothing.description}}</p>
          <div class="d-image">
            <img class="img" :src="clothing.image" alt />
          </div>
          </div>
          <div class="add-container">
          <div class="add-content">
            <p class="add-price">${{clothing.price*1.25}}</p>
            <p class="add-tax-price">before tax: ${{clothing.price}}</p>
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
          </div>
          <div class="add-btn">
            <button v-on:click="addToBasket(clothing)">add to basket</button>
          </div>
          </div>
        </div>

        <div class="d-nav">
          <div id="pro-info" v-scroll-to="'#pro-content'">
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
          <p class="pro-title">Product Info</p>
          <p>{{clothing.productInfo}}</p>
          </div>
        </div>
        <div id="specsContent">
          <div class="spec-text">
            <div class="spec-centered">
            <p class="spec-title">Specifications</p>
            <div class="spec-filed">
              <div class="nav-s-title">
              <p>general</p>
              </div>
          <div id="spec1" class="specs">
          <p class="sTitle">{{clothing.specTitle1}}</p>
          <p class="spec">{{clothing.spec1}}</p>
          </div>
          <div id="spec2" class="specs last">
            <p class="sTitle">{{clothing.specTitle2}}</p>
            <p class="spec">{{clothing.spec2}}</p>
          </div>
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
      },
    },
  }
</script>
<style>
*{
  color:black
}
  .content {
    display: flex;
    flex-direction: row;
    text-align: start;
    height: auto;
    justify-content: center;
    margin-left:280px;
  }

  .d-image img {
    width: 200px;
    height: auto;
  }

  .d-image {
    width: 300px;
    height: 250px;
    display: flex;
    justify-content: center;
  }
  .dis {
    font-size: 12px;
  }
  .d-nav {
    background: grey;
    width: 60%;
    height: 50px;
    margin-left: 330px;
    margin-top: 100px;
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
  padding-top: 100px;
}
.pro-text{
  width: 50%;
  text-align: start;
}
#specsContent{
display: flex;
justify-content: center;
margin-top: 250px;
margin-bottom: 250px;
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
border-right:solid black thin;
margin-left: 5px;
padding-right: 5px;
}
.spec-text{
width: 50%; 
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
.last{
border-bottom: solid black thin;
}
.pro-title{
font-weight: bold;
margin-bottom:25px;
border-bottom: black solid;
font-size: 25px;
}
.spec-title{
  text-align: start;
  font-weight: bold;
  margin-bottom:25px;
  border-bottom: black solid;
  font-size: 25px;
}
.spec-filed{
width: 70%;
margin-left:15%
}
.add-container{
  width: 15%;
  height:auto;
  background: #adadad;
  margin-top: 12px;
}
.add-price{
margin-top: 12px;
font-size: 20px;
}
.add-content{
  margin-left: 12px;
}
.add-btn{
text-align: center;
margin-top: 12px;
}
.add-btn button{
  background: black;
  border: none;
  color:white;
  padding: 10px;
  border-radius: 5px;
  padding-left:50px ;
  padding-right: 50px;
  cursor: pointer;
  user-select: none;
}
.left-container{
margin-top: 5px;
width: 500px;
height: 250px;
display: flex;
flex-direction: column;
}
.add-tax-price{
margin-bottom: 12px;
}
</style>