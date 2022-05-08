<template>
    <div>
        <form @submit.prevent="addRegister" class="text-center mt-5">
            <h1 class="mb-5">Sign Up</h1>
             <div>
                <label class="mb-1">ENTER YOUR EMAIL ADDRESS</label><br>
                <input type="text" class="mb-2"  v-model='name' required>
            </div>
            <div>
                <label class="mb-1">ENTER YOUR PASSWORD</label><br>
                <input type="password" class="mb-2"  v-model='pass' required>
            </div>
            
             <button type="submit">Save</button>
        </form>
    </div>
</template>
<script>
export default {
   name:'Register',
   data(){
       return{
           name:'',
           pass:'',
           users:[],
       }
   },
   methods:{
     addRegister(){
      
      if(localStorage.getItem('users')){
       this.users= JSON.parse(localStorage.getItem('users'));
      }
      
      this.users.push({name:this.name,password:this.pass});
      localStorage.setItem('users',JSON.stringify(this.users));
      this.name='';
      this.pass='';
       this.$store.dispatch('sendMessageSuccess');
      this.$router.push('/login');
    },
   }
}
</script>
<style scoped>
label,h1{
    color:yellow;
}
button{
  background-color: #555;
  color:white;
  padding:0.5rem 1rem;
  border-radius:6px;
  border:none;
}
input{
    background-color:gray;
    border-radius: 10px;
}
</style>