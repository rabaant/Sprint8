<template>
  <div>
     <nav>
       <ul class="d-flex justify-content-center align-items-center">
         <li class="inline-block ">
           <router-link to="/" class="router ">HOME</router-link>
         </li>
         <li class="inline-block ">
           <router-link to="/list" class="router ">STARSHIPS</router-link>
         </li>
       </ul>
       
      
    </nav>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'Navbar',
  
}
</script>
<style scoped>
nav{
  font-size: 0.8rem;
  text-align: center;
  height: auto;
  padding:15px;
}
.router{
  border-left: 1px solid gray;
  border-right: 1px solid gray;
  padding: 1.7rem 3rem;
}
ul{
  border: 1px solid gray;
  padding: 1.5rem 0;
}
 
@media(max-width: 776px){
  ul{
    padding:24px 0;
  }
  li{
    padding: 4px 32px;
  }
  /*.router{
    padding:1rem 2rem;
    border-left: none;
    border-right: 1px solid gray;
  }*/
}
</style>