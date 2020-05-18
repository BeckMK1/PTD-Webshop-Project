<template>
  <div class="slider">
      <div>
      <img :src="images[Math.abs(currentNumber) % images.length]" />
      </div>
  <a class="prev" @click="prev"> Previous</a>
  <a class="next" @click="next"> Next</a>

  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider1.jpg?alt=media&token=5ddce370-8213-46d0-889d-7dc6225a191a",
                "https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider2.jpg?alt=media&token=50c00bb5-ebc7-4cbc-a646-941eebb2ed0e",
                "https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider3.jpg?alt=media&token=dc97c4a0-1b40-4485-b9ce-98f8add9509b"
      ],
      // timer: null,
      currentNumber: 0
    };

  },
  ready: function (){
    this.startRotation();
  },
  methods: {
    startRotation: function() {
      this.timar = setInterval(this.next, 3000);
    },
    next: function(){
      this.currentNumber += 1;
    },
    prev: function(){
      this.currentNumber -= 1;
    }
  },
}
</script>
<style scoped>
fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
</style>
