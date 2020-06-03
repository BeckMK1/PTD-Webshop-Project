<template>
  <div class="slider">
      <div class="slider-container">
      <img :src="images[Math.abs(currentNumber) % images.length]" />
        <a class="prev" @click="prev" href="#">&#10094; Previous </a>
        <a class="next" @click="next" href="#">&#10095; Next</a>
      </div>


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
.slider{
display: flex;
justify-content: center;
}
.slider-container{
width: 50%;
height: 50%;
}
.slider-container img{
width: 100%;
height: 100%;
max-width: 900px;
margin-top: 50px;
}
a{
  cursor: pointer;
  user-select: none;
}
.prev, .next {
  cursor: pointer;
  bottom: 280px;
  position: relative;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
}

.next {
  float: right;
  border-radius: 4px 0px 0px 4px;
}

.prev {
  float: left;
  border-radius: 0 4px 4px 0;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
</style>
