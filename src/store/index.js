import { extractIdentifiers } from '@vue/compiler-core';
import axios from 'axios';
import { stringifyQuery } from 'vue-router';
import { createStore, Store, storeKey } from 'vuex'

export default createStore({
  state: {
    starships:[],
    currentShip:{},
    currentPilots:[],
    currentPilotsData:[],
    currentFilms:[],
    currentFilmsData:[],
    page:0,
    isLogged:false,
    msgWrong:'',
    msgSucess:'',
    defaultImg:require('../assets/placeholder.jpg'),
  },
  getters: {
    starships( state ){
      return state.starships;
    },
    currentShip(state){
      return state.currentShip;
    },
    currentPilots(state){
      return state.currentPilots;
    },
    currentPilotsData(state){
      return state.currentPilotsData;
    },
    currentFilms(state){
      return state.currentFilms;
    },
    currentFilmsData(state){
      return state.currentFilmsData;
    },
    page(state){
      return state.page;
    },
    isLogged(state){
      return state.isLogged;
    },
    msgWrong(state){
      return state.msgWrong;
    },
    msgSucess(state){
      return state.msgSucess;
    },
    defaultImg(state){
      return state.defaultImg;
    }

  },
  mutations: {
    isLogged(state){
      state.isLogged=true;
    },
    addList(state,starshipsList){
      state.starships.push(...starshipsList);
    },
    currentShip(state,ship){
     
      state.currentShip=ship;
      state.currentPilots=ship.pilots;
      state.currentFilms=ship.films;
     
    },
    currentPilots(state,pilot){
      state.currentPilotsData.push(pilot);
     
    },
    currentFilms(state,film){
      state.currentFilmsData.push(film);
    },

    messageWrong(state){
      state.msgSucess=''
      state.msgWrong='The email or password is wrong';
    },
    messageSuccess(state){
      state.msgWrong='';
      state.msgSucess='Welcome!!, log in to access the app';
    },
    messageFail(state){
      state.msgSucess='';
      state.msgWrong='The user is already registered';
    },
    clear(state){
      state.currentPilots=[];
      state.currentPilotsData=[];
      state.currentFilms=[];
      state.currentFilmsData=[];
    }
  },
  actions: {
    isLogged: function(){
      this.commit('isLogged');
    },

    getList : async function ({commit}){
      this.state.page++;
      if (this.state.page > 4){
        return;
      };

      let response = await axios.get(`https://swapi.dev/api/starships/?page=${this.state.page}`);
      let ships=response.data.results;
      let shipsWithId=ships.map(x=> {
        let id = x.url.split('/');
        id = id[id.length-2];
        return {...x,id};
      })
      commit('addList',shipsWithId);
    },
    getShip : async function ({commit},id){
      let response = await axios.get(`https://swapi.dev/api/starships/${id}`);
      let ship=response.data;
      
      commit('currentShip',ship);
    },

    getPilot : async function ({commit,state}){
      let pilots=state.currentPilots;
      //console.log(pilots);
      let pilot='';

      for(let i=0;i<pilots.length;i++){
        pilot=pilots[i];
        let response = await axios.get(`${pilot}`);
        
        pilot=response.data;
        commit('currentPilots',pilot);
      }   
    },
    getFilm : async function ({commit,state}){
      let films=state.currentFilms;
        let film='';
  
        for(let i=0;i<films.length;i++){
          film=films[i];
          let response = await axios.get(`${film}`);
          
          film=response.data;
          commit('currentFilms',film);
        }   
     
    },
       
    sendMessage : function(){
      this.commit('messageWrong');
    },
    sendMessageFail : function(){
      this.commit('messageFail');
    },
    sendMessageSuccess : function(){
      this.commit('messageSuccess');
    },
    clear : function(){
      this.commit('clear');
    },
  },
  modules: {
  },

  
})
