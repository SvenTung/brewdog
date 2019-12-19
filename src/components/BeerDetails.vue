<template lang="html">
  <div>
    <h2>{{beer.name}}</h2>
    <p>Tagline: {{beer.tagline}}</p>
    <p>Description: {{beer.description}}</p>
    {{beer.favourite}}
    <img v-bind:src="beer.image_url">
  </div>
</template>

<script>
export default {
  name: "beer-details",
  props: ['beer']
}
</script>

<style lang="css" scoped>
img{
  height: 250px;
}
</style>
