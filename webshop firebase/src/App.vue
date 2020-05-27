<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img src="./assets/ptd-logo.png" alt="logo"></router-link>
      <div class="circle"></div>
      <div id="search-container">
      <input autocomplete="off" type="text" id="search" v-model="search" placeholder="search..." @focusin="sIsHidden = false" @focusout="sIsHidden = true"  >
      <div v-for="clothing in filteredclothing" :key="clothing.id">
        <div v-if="search===''">
        </div>
        <div  v-else @click="goTodetail(clothing.id), search='', sIsHidden= true ">
        <div class="search-box">
        <img :src="clothing.image">
        <div class="s-text">
        <div class="sName">
        <p>{{clothing.name}}</p>
        </div>
        <div class="sDis">
        <p>{{clothing.description}}</p>
        </div>
        <div class="sStock">
          <div class="out" v-if="clothing.instock === 0">
            <div class="out-box"></div>
            <p>out of stuck</p>
          </div>
          <div class="in" v-else="">
            <div class="in-box"></div>
             <p>in stock: {{clothing.instock}}</p>
          </div>

        </div>
          <div>
            <p class="sPrice">${{clothing.price}}</p>
          </div>
        </div>
        </div>
        </div>
      </div>
      </div>
      <div id="round-icons">
        <router-link to="/basket"><div class="shop-circle">
          <div class="shop-img">
            <img src="./assets/shopping-cart.png" alt="">
          </div>
        </div></router-link>
        <div class="help-circle">
          <div class="help-img">
            <img src="./assets/help.png" alt="">
          </div>
        </div>
        <div class="profile-circle">
          <div class="profile-img">
            <img src="./assets/profile.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div id="nav">
      <div class="all" v-on:click="isHidden = !isHidden">
        <img class="lines" src="./assets/3-lines-sq.svg" alt="lines">
        <p>All products</p>
      </div>
      <router-link to="/clothing">Clothing</router-link>
     <div class="pop-out" v-if="!isHidden">
      <router-link to="/clothing"><p v-on:click="isHidden =!isHidden">Clothing</p></router-link>  
      <p v-on:click="isHidden =!isHidden">weapons</p>
    </div>
    </div>
    <router-view />
      <div class="blackOut" v-if="!isHidden || !sIsHidden"></div>
  </div>

</template>

<script>
import { ClothingRef } from "./firebase-db"
export default {
  data() {
    return{
      isHidden: true,
      clothings:[],
      search:'',
      sIsHidden:true
    }
  },
  firestore:{
      clothings: ClothingRef,
  },
  computed:{
      filteredclothing: function(){
          return this.clothings.filter((clothing)=>{
            return clothing.name.toLowerCase().match(this.search)
          })
      }
  },
  methods:{
  goTodetail(clothingId){
    this.$router.push({name:'details',params:{Pid:clothingId}})
    location.reload();
  }, 
}
}
</script>
<style>
  * {
    margin: 0;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #header {
    display: flex;
    justify-content: start;
    background: black;
    margin-top: -15px;
    width: 100%;
    height: 100px;
  }

  #header img {
    position: relative;
    left: 15px;
    top: 25px;
    z-index: 2;
  }

  #search {
    padding:10px;
    width: 93.5%;
  }
  #search-container{
    position: relative;
    width: 50%;
    height: 100%;
    top: 35px;
    margin-left: 250px;
  }
  .search-box{
  position: relative;
  z-index: 3;
  background: white;
  display: flex;
  font-size: 12px;
  height: 80px;
  padding-bottom:10px;
  align-items: center;
  }
  .circle {
    position: absolute;
    background-color: black;
    padding: 49px;
    border-radius: 180px;
    z-index: 1;
    left: 10px;
    top: 5px;
  }

  #nav {
    position: relative;
    background-color: gray;
    display: flex;
    justify-content: start;
    height: 50px;
    width: 100%;
    align-items: center;
    font-size: 20px;
    color: black;
  }

  #nav p {

    margin-right: 12px;
  }

  .all {
    position: relative;
    z-index: 3;
    border-right: black solid thin;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;
    margin-left: 110px;
    cursor: pointer;
    user-select: none;
  }

  .lines {
    width: 20px;
    height: 20px;
    margin-right: 5px;
    opacity: 80%;
  }

  #nav a {
    color: black;
    text-decoration: none;
  }

  #nav a.router-link-exact-active {
    color: black;
  }

  #round-icons {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  .shop-circle {
    position: relative;
    float: right;
    background: white;
    border: solid white;
    width: 60px;
    height: 60px;
    border-radius: 180px;
    margin-right: 12px;
  }

  .shop-img {
    position: relative;
    right: 15px;
    bottom: 15px;
  }

  .shop-img img {
    height: 40px;
    width: 40px;
  }

  .help-img img {
    height: 40px;
    width: 40px;
  }

  .help-img {
    position: relative;
    right: 15px;
    bottom: 15px;
  }

  .help-circle {
    float: right;
    position: relative;
    background: white;
    border: solid white;
    width: 60px;
    height: 60px;
    border-radius: 180px;
    margin-left: 12px;
    margin-right: 12px;
  }

  .profile-img img {
    height: 40px;
    width: 40px;
  }

  .profile-img {
    position: relative;
    right: 15px;
    bottom: 15px;
  }

  .profile-circle {
    float: right;
    position: relative;
    background: white;
    border: solid white;
    width: 60px;
    height: 60px;
    border-radius: 180px;
  }

  .pop-out{
    background-color: gray;
    position: absolute;
    top: 50px;
    width: 18%;
    border:solid black thin;
    z-index: 2;
  }
  .pop-out p{
  padding-top: 10px;
  border-bottom:solid black thin;
  }
  .blackOut{
    background: black;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
    top:135px;
    opacity: 70%;
  }
  .sName{
    margin: 0;
    font-weight: bold;
    font-size: 20px;
  }
  .sDis{

  }
  .search-box img{
    width: 15%;
    margin-top: -20px;
    height: auto;
  }

  .sStock{
  justify-content: center;
  display: flex;
  
  }
  .out{
display: flex;
}
.in{
display: flex;
}
  .s-text{
  position: relative;
  width: 100%;
  margin-top: 5px;
  }
.out-box{
width: 12px;
height: 12px;
margin-right: 5px;
background: red;
}
.in-box{
width: 12px;
height: 12px;
margin-right: 5px;
background: green;
}
.sPrice{
  font-weight: bold;
}
</style>
