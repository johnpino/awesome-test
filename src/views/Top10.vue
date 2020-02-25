<template>
  <section class="content content--top10">
    <MovieCard
      v-for="movie in movies"
      :key="movie.title"
      :title="movie.title"
      :ranking="movie.ranking"
      :release="movie.release"
      :description="movie.description"
      :image="movie.image"
    />
  </section>
</template>

<script>
import MovieCard from '../components/MovieCard'
export default {
  name: 'Top10',
  components: { MovieCard },
  data () {
    return {
      movies: []
    }
  },
  mounted () {
    var _this = this
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=ba7fe308f26890a184e00c0917bab2ee&language=en-US&page=1')
      .then(function (response) {
        return response.json()
      })
      .then(function (data) {
        _this.populateCards(data)
      })
  },
  methods: {
    populateCards (data) {
      for (let i = 0; i < 10; i++) {
        const info = data.results[i]
        this.movies.push({
          ranking: info.vote_average,
          title: info.title,
          release: info.release_date,
          description: info.overview,
          image: info.backdrop_path
        })
      }
    }
  }
}
</script>
