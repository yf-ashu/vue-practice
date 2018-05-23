<template>
  <div class="List container">
<!-- 要更新值的話要寫method，要拿值的要寫composed，model一樣綁定-->
<!-- <pre>{{listData}}</pre> -->
  <p>{{showStatus}}</p>

  <div class="form-inline">
<input type="text" class="form-control mr-1" v-model="input">
<button class="btn btn-primary" @click="update">更新</button>
    </div>
<table class="table">
  <div>

  </div>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th></th>
    </tr>
  </thead>
    <keep-alive>
  <tbody>
    <tr v-for="(item,index) in list" :class="{ 'bg-info':item.select}">
      <th scope="row" >{{index+1}}</th>
      <td>{{item.name.first}} {{item.name.last}}</td>
      <td>{{item.email}}</td>
      <td><img :src="item.picture.medium" alt="">
      <td>
        <button class="btn btn-outline-primary" @click="clickMe(item)">點我</button>
      </td>
</td>
    </tr>
  </tbody>
    </keep-alive>

</table>

  </div>
  
</template>

<script>
import { mapState,mapActions,mapGetters } from 'vuex'

export default {
  name: 'List', 

  data () {
    return {
      // listData:[],
      input:'test',
    }
  },
  methods:{
     ...mapActions([
      'getData'
    ]),
    update(value){
      this.$store.commit('update', this.input);
    },
    clickMe(item){
      item.select=!item.select;
    }
  },
computed:{
// showStatus(){
//   return this.$store.state.status;
// },
 ...mapGetters({
      list : 'getProducts',
      
    }),
 ...mapState({
   showStatus: 'status',
  //  list:'listData'
  })
},
  mounted(){
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
