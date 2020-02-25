<template>
  <div class="movieCard" v-on:click="displayModal">
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
    <div class="modal" :class="{ 'modal--hide' : modalHide }">
      <div class="modal__container">
        <div class="modal__close">
          <i class="fas fa-times"></i>
        </div>
        <img
          :src="'https://image.tmdb.org/t/p/w500/' + image"
          alt=""
        >
        <div class="modal__information">
          <h2 class="movieCard__title">{{ title }}</h2>
          <p>Release Date: {{ new Date(release).toDateString() }}</p>
          <p><i class="fas fa-star"></i> {{ ranking }}</p>
          <p>Description {{ description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  data () {
    return {
      modalHide: true
    }
  },
  methods: {
    displayModal () {
      this.modalHide = !this.modalHide
    }
  },
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
