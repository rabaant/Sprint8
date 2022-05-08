<template>
  <div class="starship container">
   
    <div class="row">
      <div class="col-12 col-md-4 col-lg-4 d-flex align-items-center text-center ">
        
          <img class="center m-auto  w-75" :src="`https://starwars-visualguide.com/assets/img/starships/${$route.params.id}.jpg`" alt="StarShip" :onerror="`this.onerror=null;this.src='${defaultImg}'`">
       
      </div>
    
      <div class="col-12 col-md-8 col-lg-8 card" >
        <div class="card-header">
          <h1 class="black">{{currentShip.name}}</h1>
          <button @click="$router.go(-1)">Back</button>
        </div>
       <ul class="list-group list-group-flush borderRed">
         <div class="d-flex col12 block flex-wrap">
           <div class="col-12 col-md-6">
            <li class="list-group-item">Model: {{currentShip.model}}</li>
            <li class="list-group-item">Manufacturer: {{currentShip.manufacturer}}</li>
            <li class="list-group-item">Cost: {{currentShip.cost_in_credits}}</li>
            <li class="list-group-item">Length: {{currentShip.length}}</li>
            <li class="list-group-item">Max athmosphering speed: {{currentShip.max_athmosphering_speed}}</li>
            <li class="list-group-item">Crew: {{currentShip.crew}}</li>  
          </div>
           <div class="col-12 col-md-6">
            <li class="list-group-item">Passengers: {{currentShip.passengers}}</li>
            <li class="list-group-item">Cargo capacity: {{currentShip.cargo_capacity}}</li>
            <li class="list-group-item">Consumables: {{currentShip.consumables}}</li>
            <li class="list-group-item">Hyperdrive rating: {{currentShip.hyperdrive_rating}}</li>
            <li class="list-group-item">MGLT: {{currentShip.MGLT}}</li>
            <li class="list-group-item">Starship class: {{currentShip.starship_class}}</li>
          </div>
         </div>
        </ul>
      </div>
    </div>
    <div class="row">
      <div v-if="currentPilots.length > 0">
        <div class="card-header">
          <h1 class="black">Pilots</h1>
        </div>
      
      <div class="d-flex col-12 block flex-wrap">
        <div v-for="(pilot,index) in currentPilotsData" :key=index >
            <Pilots :pilot="pilot" class="col-12 col-md-12"/>
        </div>  
      </div>
      </div>
    </div>
    <div class="row">
       <div v-if="currentFilms.length > 0">
        <div class="card-header">
          <h1 class="black">Appearances</h1>
        </div>
     
      <div class="d-flex col-12 block flex-wrap">
        <div v-for="(film,index) in currentFilmsData" :key=index >
            <Films :film="film" class="col-12 col-md-12"/>
        </div>  
      </div> 
      </div>
    </div>
    
                 
  </div>
   
  
</template>

<script>
import Pilots from '@/components/Pilots.vue';
import Films from '@/components/Films.vue';
import {mapGetters} from "vuex";



export default {
  name: 'StarShip',
  components:{
    Pilots,
    Films
  },
  computed:{
    ...mapGetters({
        currentShip:'currentShip',
        currentPilots:'currentPilots',
        currentPilotsData:'currentPilotsData',
        currentFilms:'currentFilms',
        currentFilmsData:'currentFilmsData',
        defaultImg:'defaultImg'


    })
  },
  
  
   mounted () {
    
    this.$store.dispatch('getShip',this.$route.params.id);

  },
  beforeUnmount(){
    this.$store.dispatch('getPilot');
    this.$store.dispatch('getFilm');
   
  } 
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.borderRed{
  border-left: 4px solid darkred;
}
.starship{
  color:white;
}
.card{
  background-color:transparent;
}
li{
  background-color: transparent;
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
