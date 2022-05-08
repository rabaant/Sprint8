<template>
  <div>
    
    <div class="home text-center">
      <Home msg="Welcome to StarWars App"/>
    </div>
  </div>
</template>

<script>

import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>

<style scoped>
  .home{
    color:yellow;
    
  }
</style>
