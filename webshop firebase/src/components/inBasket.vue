<template>
    <div class="inBasket">
        <article v-for="basket in baskets" :key="basket.id">
            <div class="bContent" v-if="basket.name != null">
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
            <button @click="sendEmail(basket)"> send</button>
            </div>
        </article>
        <article v-for="basket in baskets" :key="basket.id">
        <div class="buy">
            <div class="bPrice">
                <div class="bPriceContainer">
                <p>${{basket.price}}</p>
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
<style>
.stock{
  font-size: 14px;
  display: flex;
  justify-content: center;
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
border-bottom: none;
}
.bPriceContainer{ 
text-align: end;
margin-right: 50px;

}
.bContent{
}
</style>