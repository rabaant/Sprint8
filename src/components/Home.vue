<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Click on the button to access the App</p>
    <router-link to="/list"><button >MAY THE FORCE BE WITH YOU</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

button{
  background-color: #555;
  color:white;
  padding:1rem 2rem;
  border-radius:6px;
  border:none;
}
</style>
