<template>
  <div id="app">
    <img style="width: 50px;" alt="Vue logo" src="./assets/logo.png">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
   Header,
   Content,
   Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
