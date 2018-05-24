import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  status: '線上',
  username: '000',
  listData: []
}
const getters = {
  getProducts(state) {
    console.log('[getters] getProducts')
    return state.listData;
  }
}
const actions = {
  // changeStatus(){
  //   this.$store.state.status=this.status;
  //   }
  getData({
    commit
  }) {
    axios.get('https://randomuser.me/api/?results=50')
      .then(function (response) {
        // 成功回應
        // console.log(response.data.results);
        // console.log(vm.count)
        let data = response.data.results.map(item => {
          item.select = false;
          return item;
        })
        console.log(data);
        commit('GET_PRODUCTS', data);
        // vm.listData = response.data.results
        // vm.listData.forEach(element => {
        // vm.$set(element,'select',false);//跟你新增上去陣列的名稱一樣就好，他在這裡就會變成方法
        //         });
      })
      .catch(function (error) {
        // 失敗回應
        console.log(error);
      });
  }

}
const mutations = {
  ['GET_PRODUCTS'](state, products) {
    state.listData = products
  },
  updateMessage(state, message) {
    state.status = message
  },
  update(state, message) {
    state.username = message
  }

}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
