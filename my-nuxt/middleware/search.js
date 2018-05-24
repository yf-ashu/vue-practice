
import axios from 'axios'

export default function({params,store}){
  // params.id="Changed"
return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
.then((res)=>{
store.commit('GET_DATA',res.data.results);

})


}