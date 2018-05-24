<template>
  <div class="container">
    <h1>Results for{{$route.params.id}}</h1>
    <div v-if="albumExists">
      <div v-for="(album,index) in  albumData"> 
      <Card
        :title="album.collectionCensoredName"
        :name="album.artistName"
        :img="album.artworkUrl100"
        :url="album.artistViewUrl"
        :color="picker(index)"
      />

      </div>



    <!-- <h2>{{ albumData }}</h2> -->
    </div>
    <div v-else>
      <h2>no data</h2>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import Card from '~/components/Card.vue'

  export default{
     asyncData ({params}) {
        return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
        .then((res)=>{
          
        return {albumData:res.data.results}
         })
        },
    middleware:'search'
    ,
    components:{
        Card
    },
    computed:{
      albumExists(){
        return this.albumData.length>0;
      }
    },
    methods:{
      picker(index){
        return index %2==0? 'red': "blue"
      }
    }
  }
</script>