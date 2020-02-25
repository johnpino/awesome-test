<template>
  <div class="movieCard">
    <div class="movieCard__image">
      <img
      :src="'https://image.tmdb.org/t/p/w500/' + image"
      alt=""
    >
    </div>
    <div class="movieCard__information">
      <h2 class="movieCard__title">{{ title }}</h2>
      <p>Release Date: {{ new Date(release).toDateString() }}</p>
      <p><i class="fas fa-star"></i> {{ ranking }}</p>
      <p>Description {{ description }}</p>
    </div>
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
