<template lang="html">
  <div>
    <li v-on:click="handleListClick">{{beer.name}}</li>
    <input v-on:change="handleCheckChange" type="checkbox" v-bind:name="beer.name" value="true">
  </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: "beer-list-item",
  props: ['beer','index'],
  methods: {
    handleListClick(){
      eventBus.$emit('selected-beer', this.beer)
    },
    handleCheckChange(){
      console.log(this.index)
      eventBus.$emit('favourite-beer', this.index)
    }
  }


}
</script>

<style lang="css" scoped>
</style>
