<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>

  </div>
</template>

<style lang="scss">

</style>

<script>

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}

</script>
