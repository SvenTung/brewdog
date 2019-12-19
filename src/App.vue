<template>
  <div id="all-content">
    <div id="header">
      <h1><u>BREWDOG BEERS</u></h1>
    </div>

    <div id="main-content">
      <div id="beer-list">
        <h2>Beer List</h2>
        <beer-list :beers='beers'></beer-list>
      </div>

      <div id="beer-details">
        <h2>Beer Details</h2>
        <beer-details v-if="selectedBeer" :beer='selectedBeer'></beer-details>
      </div>

      <div id="fav-beer-list">
        <h2>Favourite Beers List</h2>
        <fav-beer-list v-for="(beer, index) in beers"  :changed="changed" :beer="beer" :index="index"></fav-beer-list>
      </div>
    </div>

  </div>
</template>

<script>
import BeerList from './components/BeerList.vue';
import {eventBus} from './main.js';
import BeerDetails from './components/BeerDetails.vue';
import FavBeerList from './components/FavBeerList.vue';

export default {
  name: 'app',
  data(){
    return{
      beers: [],
      changed: false,
      selectedBeer: null,
    };
  },
  components: {
    "beer-list": BeerList,
    "beer-details": BeerDetails,
    "fav-beer-list": FavBeerList
  },
  mounted() {
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then((beers) => {
      this.beers = beers
      for (let beer of this.beers){
         beer.favourite = false;
      }

    })

    eventBus.$on ('selected-beer', (beer) => {
      this.selectedBeer = beer
    });

    eventBus.$on ('favourite-beer', (beer_key) => {
      if (this.beers[beer_key].favourite == true) {
        this.changed = !this.changed;
        console.log("triggered favourite-beer ");
        this.beers[beer_key].favourite = false
      }
      else {
        this.changed = !this.changed;
        console.log("set fav favourite-beer ");
        this.beers[beer_key].favourite = true
      }
    });
  }
}

</script>

<style>

#header{
  display: flex;
  justify-content: center;
  background-color: #A4B0F5;
}
#main-content{
  display: flex;
  justify-content: space-around;
}
#beer-details{
  width: 30%;
}

#fav-beer-list input{
  display: none;

}
</style>
