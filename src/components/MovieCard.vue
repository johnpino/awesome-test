<template>
  <div class="card">
    <p>Ranking {{ ranking }}</p>
    <p>Title {{ title }}</p>
    <p>Release Date {{ release }}</p>
    <p>Description {{ description }}</p>
    <img
      :src="'https://image.tmdb.org/t/p/w500/' + image"
      alt=""
    >
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: {
    title: String,
    ranking: Number,
    description: String,
    release: String,
    image: String
  }
}
</script>

<style scoped>

</style>
