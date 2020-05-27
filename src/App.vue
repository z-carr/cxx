<template>
  <div id="app">
    <router-view/>
    <BottonTap></BottonTap>
  </div>
</template>

<script>
// import Banner from './components/Banner'
import BottonTap from './components/BottomTap'
export default {
  name: 'App',
  components: {
    BottonTap
  }
}
</script>

<style>
#app {
 height: 100%;
}
</style>
