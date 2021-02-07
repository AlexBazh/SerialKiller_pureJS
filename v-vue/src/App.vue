<template>
  <div id="app">
    <MainPage/>
  </div>
</template>

<script>
import MainPage from './components/pages/MainPage'

export default {
  name: 'App',
  components: {
    MainPage
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
