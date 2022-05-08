<template>
  <div class="container">
    <div class="row">
      <div class="col-4  "></div>
      <div class="col-4  text-center ">
         <img id="logo" src="@/assets/logoStarWars.jpg" alt="logo Star Wars">
      </div>
      <div class=" col-4  d-flex justify-content-end ">
       
          <router-link :to="{name:'login'}" class="sign ">LOG IN</router-link>
       
          <router-link :to="{name:'register'}" class="sign ">SIGN UP</router-link> 
       
        
      </div>
      
    </div>
    <Navbar/> 
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name:'App',
  components : { Navbar },
 
}
</script>
<style>
#app {
  font-family: Matterhorn;
  
}
#logo{
  width: 15rem;
}
.sign{
  color:lightgray;
  margin-top:15%;
  margin-right: 2rem;

}
a {
  font-weight: bold;
  color:gray;
  text-decoration: none;
  
}
a:active,  a:hover{
  color:white
}

a.router-link-exact-active {
  color: white;
}
@font-face{font-family:'Matterhorn';
src:url("https://static-mh.content.disney.io/matterhorn/assets/m4-7e766c2825c7.eot#") format("eot"),
url("https://static-mh.content.disney.io/matterhorn/assets/m4-b366701d6945.woff") format("woff"),
url("https://static-mh.content.disney.io/matterhorn/assets/m4-ac909dff444f.ttf") format("truetype"),
url("https://static-mh.content.disney.io/matterhorn/assets/m4-3d636e3b4270.svg#Matterhorn") format("svg");
font-weight:400;font-style:normal}

@media(max-width: 776px){
  #logo{
  width: 5rem;
  }
  .sign{
    font-size: 0.8rem;
  }
  
  

}
</style>
