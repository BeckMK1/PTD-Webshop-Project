<template>
    <div class="inBasket">
        <article v-for="basket in baskets" :key="basket.id">
            <h1>{{ basket.name }}</h1>
            <button @click="deleteItem(basket)">x</button>
            <button @click="sendEmail(basket)"> send</button>

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
    }
  }  
}
</script>