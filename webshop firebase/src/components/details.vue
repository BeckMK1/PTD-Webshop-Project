<template>
    <div class="details">
        <div class="container" v-for="(clothing,Pid) in clothings" :key="Pid">
            <div class="flex-container" v-if="proId == clothing.id">
            <h1 class="title">{{clothing.title}}</h1>
            <p class="dis">{{clothing.description}}</p>
            <img class="img" :src="clothing.image" alt/>
            <button class="hide-btn" v-on:click="hide = !hide">edit</button>
            <div class="edit" v-if="hide"> 
              <input type="text" v-model="clothing.title" placeholder="type the title here" required>
              <input type="text" v-model="clothing.description" placeholder="type the description here">
            <div>
            </div>
            </div>
            </div>
            </div>
            </div>
</template>
<script>
import { ClothingRef } from "../firebase-db"
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
      clothing: ClothingRef
  },
} 
</script>
<style>
/* edit */
button {
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: var(--text-color-light);
  background-color: var(--secondary);
  width: 100%;
  max-width: 350px;
}

button.choose-image {
  background-color: var(--primary);
}
button{
 background-color:#42b983;
 color: white;
}
input {
  margin: 1em auto;
  width: 100%;
  max-width: 350px;
  padding: 12px 15px;
  box-sizing: border-box;
  display: block;
}

input[type="file"] {
    display: none;
}

.image-preview {
  max-width: 350px;
  width: 100%;
  padding: 1em 0;
}
.flex-container{
width: 100%;
height: 100%;
}
.DImg{
    max-width: 350px;
  width: 100%;
}
.flex-container{
display: grid;
grid-template-columns: 1fr 1fr 1fr ;
grid-template-rows: 50px 50px 265px 1fr;
grid-template-areas:
". title ."
". dis ."
". img ."
". hide-btn ."
". edit ."
;
}
.img{
justify-self: center;
grid-area: img;
}
.title{
grid-area: title;
}
.dis{
grid-area: dis;
}
.hide-btn{
justify-self: center;
grid-area: hide-btn;
text-align: center;
  cursor: pointer;
  border: none;
  padding: 12px 15px;
  font-size: 1em;
  border-radius: 0;
  color: white;
  background-color: #42b983;
  width: 100%;
  max-width: 350px;
  height: 50px;
}
.edit{
grid-area: edit;
}
</style>