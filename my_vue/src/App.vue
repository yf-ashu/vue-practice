<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <router-link to="/" class="nav-link">Vue1</router-link>

      </li>
      <li class="nav-item">
        <router-link to="/hello2" class="nav-link">Vue2</router-link>
      </li>
       </li>
      <li class="nav-item">
        <router-link to="/list" class="nav-link">List</router-link>
      </li>
    </ul>
 
  </div>
  <div class="form-inline mr-3">

   <select class="form-control" id="inputGroupSelect01" v-model="message">
    <option selected>{{message}}</option>
    <option value="線上">線上</option>
    <option value="線下">線下</option>
   </select>
    </div>
Hi:{{ showUpdate}}
Hi:{{ username}}

</nav>
    <router-view  ></router-view>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data(){
  return{
    // status:this.$store.state.status,
    // username: this.$store.state.username
  }
  },
  methods:{
    // changeStatus(){
    //     this.$store.state.status=this.status;
    //     }
    // },
    // selfUpdate(val){
    //      this.$store.state.username = val;
    // }
  },
  computed:{
    message: {
    get () {
      return this.$store.state.status
    },
    set (value) {
      this.$store.commit('updateMessage', value)
    }
  },
 ...mapState([
   'username','status'
 ]),
 ...mapState({
    // showUpdate(){
    //     return this.$store.state.username;
    // }
    
    showUpdate:'username'
        // count: state => state.count,

  },
  ),
    ...mapGetters([
      'doneTodosCount',
      // ...
    ])
  },
  mounted(){
    // this.$on('update', this.selfUpdate);//呼叫父層自己的方法
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";

</style>
