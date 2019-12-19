<template lang="html">
<div >
  <ul>
    <beer-list-item v-for="(beer, index) in beers" :beer="beer" :index="index"></beer-list-item>
  </ul>
</div>

</template>

<script>
import BeerListItem from './BeerListItem.vue';


export default {
name: 'beer-list',
props: ['beers'],
components: {
  "beer-list-item": BeerListItem
}

}
</script>

<style lang="css" scoped>
</style>
