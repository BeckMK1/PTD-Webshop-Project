<template>
    <div class="inBasket">
        <article v-for="basket in baskets" :key="basket.id">
            <div class="bContent" v-if="basket.name != null">
            <img :src="basket.image">
            <h1>{{ basket.name }}</h1>
            <p>{{basket.description}}</p>
             <div class="stock">
          <div class="out" v-if="basket.instock === 0">
            <div class="out-box"></div>
            <p>out of stuck</p>
          </div>
          <div class="in" v-else="">
            <div class="in-box"></div>
             <p>in stock: {{basket.instock}}</p>
          </div>
        </div>
            <button @click="deleteItem(basket)">x</button>
            </div>
        </article>
        <button @click="sendEmail(basket)"> order</button>
        <article v-for="basket in baskets" :key="basket.id">
        <div class="buy" v-if="basket.name != null">
            <div class="bPrice">
                <div class="bPriceContainer">
                <p>{{basket.name}}</p>
                <p class="bprice">${{basket.price}}</p>
                <p class="add"></p>
                </div>
                </div>
            </div>
            </article>
    </div>
</template>

<script>
import { basketRef } from "../firebase-db"
import emailjs from 'emailjs-com';
export default {
    name:'inBasket',
  data(){
      return{
          baskets:[],

      }
  },
  firestore:{
      baskets:basketRef
  },
  methods:{
      deleteItem(basket){
  basketRef.doc(basket.id).delete();
  },
    sendEmail: (baskets) => {
        console.log(baskets)
      emailjs.send('gmail','template_3SLgK9bf', baskets, 'user_6qFtVFe6FgxDVrU0OPOaL',)
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
    });
    },
  },
}
</script>
<style scoped>

.stock{
  font-size: 14px;
  display: flex;
  justify-content: center;
}
img {
width:200px;
}
.buy{
display: flex;
flex-direction: row;
justify-content: center;
position: relative;
top:200px;
}
.bPrice{
border:solid black thin;
width: 50%;
}
.bPriceContainer{ 
text-align: end;
margin-right: 50px;

}
.bContent img{
width: 150px;
}
.bPriceContainer{
  display: flex;
  justify-content: space-between;
}
.bprice{
position: relative;
left:400px
}
</style>