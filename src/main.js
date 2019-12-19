import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue();

Vue.config.productionTip = false

new Vue({
  methods: {
    checkIfInArray: function(beer){
    for(var i=0; i < this.favouriteBeers.length; i++){
      if(this.favouriteBeers[i].name == beer.name){
        return true
      }
    }
    return false
  }},
  render: h => h(App),
}).$mount('#app')
