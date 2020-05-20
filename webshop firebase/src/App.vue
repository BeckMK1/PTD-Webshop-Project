<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img src="./assets/ptd-logo.png" alt="logo"></router-link>
      <div class="circle"></div>
      <input type="text" id="search" placeholder="search...">
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
      <router-link to="/clothing"><p>Clothing</p></router-link>  
      <p>weapons</p>
    </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return{
      isHidden: true
    }
  },
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
  }

  #header img {
    position: relative;
    z-index: 3;
    left: 15px;
    top: 25px;
  }

  #search {
    position: relative;
    width: 50%;
    height: 100%;
    padding: 10px;
    top: 35px;
    margin-left: 250px;
  }

  .circle {
    position: absolute;
    background-color: black;
    padding: 49px;
    border-radius: 180px;
    z-index: 2;
    left: 10px;
    top: 5px;
  }

  #nav {
    position: relative;
    background-color: gray;
    z-index: 1;
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
  }
  .pop-out p{
  padding-top: 10px;
  border-bottom:solid black thin;
  }
</style>
