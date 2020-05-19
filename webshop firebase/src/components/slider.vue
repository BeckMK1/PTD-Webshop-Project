<template>
  <div class="slider">
      <div class="slider-container" v-for="number in [currentNumber]" :key="number"
         transition="fade">
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
      images: ["https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider1-16by9.png?alt=media&token=77a6f6e4-b9b7-42c6-84a1-9df7adb7911e",
                "https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider2-16by9.png?alt=media&token=0e3438f4-73bd-4749-9909-56974ba3f22b",
                "https://firebasestorage.googleapis.com/v0/b/ptd-project-f7bf5.appspot.com/o/slider3-16by9.png?alt=media&token=1d011cc9-58b0-4993-8855-fb3a85cf41b0"
      ],
      timer: null,
      currentNumber: 0
    };

  },
  mounted: function (){
    this.startRotation();
  },
  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 3000);
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
.fade-enter-ative, .fade-leave-ative {
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
}
.slider-container img{
width: 50%;
height: 50%;
max-width: 900px;
margin-top: 50px;
}
a{
  cursor: pointer;
  user-select: none;
}
</style>
