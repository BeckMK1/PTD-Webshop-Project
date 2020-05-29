<template>
  <div class="home">
    <slider></slider>
    <homeSale></homeSale>
  </div>
</template>

<script>
// @ is an alias to /src
import slider from '../components/slider.vue'
import homeSale from '../components/homeSale.vue'
export default {
  name: 'Home',
  components: {
    slider,
    homeSale
  },
}
</script>

