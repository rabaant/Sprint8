<template>
    <div>
       
        <form @submit.prevent="login" class="text-center mt-5">
             <p v-if="$store.state.msgWrong !=''" class="danger w-50  m-auto">{{$store.state.msgWrong}}</p>
             <p v-if="$store.state.msgSucess !=''" class="success w-50  m-auto">{{$store.state.msgSucess}}</p>
            <h1 class="mb-5">Log In</h1>
            <div>
                <label class="mb-1">ENTER YOUR EMAIL ADDRESS</label><br>
                <input type="text" class="mb-2"  v-model='name' required>
            </div>
            <div>
                <label class="mb-1">ENTER YOUR PASSWORD</label><br>
                <input type="text" class="mb-2"  v-model='pass' required>
            </div>
            
             <button type="submit">Submit</button>
        </form>
    </div>
</template>
<script>

import {mapGetters} from "vuex";
export default {
   name:'Login',
   data(){
       return{
           name:'',
           pass:'',
       }
   },
    computed:{
    ...mapGetters({
       
        msgWrong:'msgWrong',
        msgSucess:'msgSucess',


        
    })
  },
  
   methods:{
    login(){
      if(localStorage.getItem('users')){
        this.users= JSON.parse(localStorage.getItem('users'));
        if(this.users.find(x=>x.name==this.name && x.password==this.pass)){
            this.$store.dispatch('isLogged');
            console.log('You are logged in');
            this.name='';
            this.pass='';
            this.$router.push('/');
            
        }else{
            this.$store.dispatch('sendMessage');
            
        }
      }else{
        this.$router.push('/register');
      }             

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
.danger{
    background-color: darkred;
    color:white;
    font-size: 1rem;
    border-radius: 15px;
}
.success{
    background-color: lightgreen;
    color:white;
    font-size: 1rem;
    border-radius: 15px;
}
</style>