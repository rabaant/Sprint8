<template>
  <div class="pilots container">
   
    <div class="row">     
      <div class="col-12 card" >
        <div class="card-header">
          <h3 class="black">{{film.title}}</h3>
        </div>
       <ul class="list-group list-group-flush borderRed">
        
           <div class="col-12">
            <li class="list-group-item">Episode: {{film.episode_id}}</li>
            <li class="list-group-item">Opening: {{film.opening_crawl}}</li>
            <li class="list-group-item">Director: {{film.director}}</li>
            <li class="list-group-item">Producer: {{film.producer}}</li>
            <li class="list-group-item">Released date: {{film.release_date}}</li>
                     
         </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Films',
   props:['film'],
   unmounted () {
   
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
h3{
  color:darkred;
}
</style>
