<template>
  <div class="home">
    <slider></slider>
    <homeSale></homeSale>
    <partners></partners>
  </div>
</template>

<script>
// @ is an alias to /src
import slider from '../components/slider.vue'
import homeSale from '../components/homeSale.vue'
import partners from '../components/partners.vue'
export default {
  name: 'Home',
  components: {
    slider,
    homeSale,
    partners
  },
}
</script>

