<template>
  <div class="hello2 container">

  <div class="input-group mb-3">
  <input type="text" v-model="message" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
  <div class="input-group-append">
    <button class="btn btn-outline-secondary"  @click="send(message)" type="button">Button</button>
  </div>
</div>

 <div class="media my-3" v-for="item in messages"  >
  <img v-if="item.username!==username" class="align-self-start mr-3" src="https://picsum.photos/200/200" alt="Generic placeholder image">
  <div class="media-body">
    <h5 class="mt-0">{{item.username}}</h5>
      <p>{{item.message}}</p>
  </div>
    <img v-if="item.username===username" class="align-self-start mr-3" src="https://picsum.photos/200/200" alt="Generic placeholder image">
</div>
    <!-- <div class="media">
  <div class="media-body">
    <h5 class="mt-0 mb-1">Media object</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
  <img class="ml-3" src="https://picsum.photos/200/300
" alt="Generic placeholder image">
</div> -->

  </div>
</template>

<script>
export default {
  name: 'Hello2',
  data () {
    return {
      msg: '測試2',
      username:"哈哈",
      message:'',
      messages:[
        {
          username:"TT",
          message:"hello 你好"
        },
         {
          username:"哈哈",
          message:"hello 你好啊啊啊"
        }
      ]
    }
  },
  methods:{
    send(msg){
      let vm=this;
      vm.messages.unshift({username:vm.username,message:msg});
      vm.message='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
