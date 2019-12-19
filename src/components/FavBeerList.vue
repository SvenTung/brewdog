<template lang="html">
<div>
  <li v-if="beer.favourite == true" v-on:click="handleListClick">{{beer.name}}</li>
  <p style="display: none">{{changed}} </p>
</div>

</template>

<script>
import { eventBus } from '../main.js';

export default {
  name: 'beer-list',
  props: ['beer', 'changed'],
  methods: {
    handleListClick(){
      eventBus.$emit('selected-beer', this.beer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
