<template>
  <main class="main" :class="{ 'main--hideSidebar' : hide }">
    <Header @toggle="hideSidebar" />
    <Sidebar />
    <MainContent :class="{ 'content--hideSidebar' : hide }"/>
  </main>
</template>

<style lang="scss">
  @import "@/assets/scss/styles.scss";
</style>

<script>
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import MainContent from '@/components/MainContent'
export default {
  components: { MainContent, Sidebar, Header },
  data () {
    return {
      hide: true
    }
  },
  mounted () {
    const fontAwesome = document.createElement('script')
    fontAwesome.setAttribute('src', 'https://kit.fontawesome.com/03888eec40.js')
    document.head.appendChild(fontAwesome)
  },
  methods: {
    hideSidebar () {
      this.hide = !this.hide
    }
  }
}
</script>
