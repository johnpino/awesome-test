<template>
  <aside class="sidebar">
    <router-link to="/home" class="sidebar__link"><i class="fas fa-home"></i> Home</router-link>
    <router-link to="/top-10" class="sidebar__link"><i class="fas fa-star"></i> Top 10</router-link>
    <router-link to="/latest" class="sidebar__link"><i class="fas fa-list-alt"></i> Latest</router-link>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>

</style>
