<template>
  <div class="slider">
    <article v-for="image in images" :key="image.id">
    <div>
      <img :src="image.image1" alt="">
      <p>{{image.title}}</p>
    </div>
    </article>
  </div>
</template>

<script>
import { postRef } from "../firebase-db.js"
export default {
  data() {
    return {
      images: [],

    };

  },
  firestore:{
    images: postRef
  },
}