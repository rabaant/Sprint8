<template>
  <div class="list">
    <h1 class="text-center">Starships</h1>
    <div></div>
      <div class ="d-flex block flex-wrap col-12 justify-content-center vh-90" >
        <div v-for = "(item,index) in starships" :key=index class="card col-3 m-2 block" style="width: 18rem; height:18rem">
           <img class="center m-auto  w-75" :src="`https://starwars-visualguide.com/assets/img/starships/${item.id}.jpg`" alt="StarShip" :onerror="`this.onerror=null;this.src='${defaultImg}'`">
            <ul class="list-group list-group-flush" >
                <li  class="list-group-item">

                  <router-link :to="{name:'starShip', params: {id:item.id}}" class="h3 text-center">{{item.name}} 
                  </router-link>
                  <p>{{item.model}}</p>
                </li>
            </ul>
          
        </div>  
          
      </div> 
      <div class="row vh-10 d-flex justify-content-center">
          <button @click="$store.dispatch('getList')" style="height:4rem;width:10rem;">More Starships</button>
      </div>
      
      <div>
        
      </div>
   </div>
  
</template>
<script>
import {mapGetters} from "vuex";

export default {
  name:'ListView',

  computed:{
    ...mapGetters({
        starships:'starships',
        defaultImg:'defaultImg'
       
    })
  },
  mounted () {
    this.$store.dispatch('getList');

  }
}
</script>

<style scoped>
.h3{
  color:white;
}
.card{
  color:black;
  background-color:gray;
}
li{
  background-color:gray;
  color:black;
}
a:hover{
  color:black;
}
  li{
    list-style: none;
  }
  div{
    color:white;
  }
  button{
    background-color: #555;
    color:white;
    padding:0.5rem 1rem;
    border-radius:6px;
    border:none;
}
</style>
