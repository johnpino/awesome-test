<template>
  <main class="main">
    <Header />
    <Sidebar />
    <MainContent />
  </main>
</template>

<style lang="scss">
  @import "@/assets/scss/styles.scss";
</style>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
export default {
  components: { MainContent, Sidebar, Header }
}
</script>
