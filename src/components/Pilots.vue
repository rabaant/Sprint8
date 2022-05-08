<template>
  <div class="pilots container">
   
    <div class="row">     
      <div class="col-12 card" >
        <div class="card-header">
          <h3 class="black">{{pilot.name}}</h3>
        </div>
       <ul class="list-group list-group-flush borderRed">
        
           <div class="col-12">
            <li class="list-group-item">Height: {{pilot.height}}</li>
            <li class="list-group-item">Mass: {{pilot.mass}}</li>
            <li class="list-group-item">Hair color: {{pilot.hair_color}}</li>
            <li class="list-group-item">Eye color: {{pilot.eye_color}}</li>
            <li class="list-group-item">Skin color: {{pilot.skin_color}}</li>
            <li class="list-group-item">Birth year: {{pilot.birth_year}}</li>  
            <li class="list-group-item">Genre: {{pilot.Male}}</li>
         
         </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pilots',
   props:['pilot'],
   beforeUnmount () {
   
    this.$store.dispatch('clear');

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
