<template lang="html">
<div>
  <li v-if="beer.favourite == true">{{beer.name}}</li>
  <p style="display: none">{{changed}} </p>
</div>

</template>

<script>
import BeerListItem from './BeerListItem.vue';


export default {
name: 'beer-list',
props: ['beer', 'changed'],
components: {

}

}
</script>

<style lang="css" scoped>
</style>
