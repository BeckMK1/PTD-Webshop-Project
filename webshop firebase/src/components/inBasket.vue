<template>
    <div class="inBasket">
        <article v-for="basket in baskets" :key="basket.id">
            <p>{{basket.title}}</p>
        </article>
    </div>
</template>

<script>
import { basketRef } from "../firebase-db"
export default {
    name:'inBasket',
  data(){
      return{
          baskets:[]
      }
  },
  firestore:{
      baskets:basketRef
  }  
}
</script>