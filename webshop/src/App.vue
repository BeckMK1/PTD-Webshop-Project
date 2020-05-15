<template>
  <div id="app">
    <div id="header">
      <router-link to="/"><img src="./assets/ptd-logo.png" alt="logo"></router-link>
      <div class="circle"></div>
      <input type="text" id="search" placeholder="search...">
      <div id="round-icons">
        <div class="shop-circle">
          <div class="shop-img">
          <img src="./assets/shopping-cart.png" alt="">
          </div>
          </div>
      </div>
    </div>
    <div id="nav">
      <div class="all">
      <img class="lines" src="./assets/3-lines-sq.svg" alt="lines">
      <p>All products</p>
      </div>

      <router-link to="/clothing">Clothing</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
*{
margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#header{
display: flex;
justify-content: start;
background: black;
margin-top: -15px;
}
#header img{
position: relative;
z-index: 3;
left: 15px;
top: 25px;
}
#search{
width: 25%;
height: 100%;
padding: 10px;
}
.circle{
position: absolute;
background-color: black;
padding: 49px;
border-radius: 180px;
z-index: 2;
left:10px;
top: 5px;
}
#nav {
  position: relative;
  background-color: gray;
  z-index:1;
  display: flex;
  justify-content: start;
  height: 50px;
  width: 100%;
  align-items: center;
  font-size: 20px;
  color: black;
}
#nav p{

margin-right: 12px;
}
.all{
border-right: black solid thin;
height: 100%;
display: flex;
align-items: center;
margin-right: 20px;
margin-left: 110px;
}
.lines{
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
#round-icons{
width: 100%;
height:auto;

}
.shop-circle{
float: right;
background: white;
border: solid white; 
width: 60px;
height: 60px;
margin-right: 12px;
margin-top: 20px;
border-radius: 180px;
}
.shop-img{
position: relative;
right: 15px;
bottom: 15px;
}
.shop-img img{
height: 40px;
width: 40px;
}
</style>
