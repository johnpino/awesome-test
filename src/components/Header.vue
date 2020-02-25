<template>
  <header class="header">
    <div class="header__toggle" v-on:click="toggleContent"><i class="fas fa-bars"></i></div>
    <h1 class="header__title"><i class="fad fa-ticket-alt"></i> The Awesome Movie App <i class="fad fa-ticket-alt"></i></h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  methods: {
    toggleContent () {
      console.log('click')
    }
  }
}
</script>

<style scoped>

</style>
