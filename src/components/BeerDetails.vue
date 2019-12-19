<template lang="html">
  <div>
    <h2>{{beer.name}}</h2>
    <p>Tagline: {{beer.tagline}}</p>
    <p>Description: {{beer.description}}</p>
    <p>Favourited: {{beer.favourite}}</p>
    <img v-bind:src="beer.image_url">
    <p style="display: none">{{changed}} </p>
  </div>
</template>

<script>
export default {
  name: "beer-details",
  props: ['beer', 'changed']
}
</script>

<style lang="css" scoped>
img{
  height: 250px;
}
</style>
