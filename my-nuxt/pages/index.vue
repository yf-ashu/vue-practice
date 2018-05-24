<template>
<div class="container">
  <h1>Search itunes</h1>
  <br>
<form @submit.prevent="submit">
      <input placeholder="enter" v-model="search" autofocus />
  </form>
</div>
</template>

<script>

export default {
  components: {
    
  },
  data(){
    return {
      search:''
    }
  },
  methods:{
    submit(event){
      this.$router.push(`results/${this.search}`)  }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-align: center; */
  flex-flow: column nowrap;
}

</style>
