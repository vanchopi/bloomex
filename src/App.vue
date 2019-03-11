<template>
  <div id="app">
  <Catalog></Catalog>    
  </div>
</template>

<script>
import Catalog from './components/Catalog'

export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    Catalog
  }
}
</script>

<style>

  body{
    font-family: 'Open Sans', sans-serif;
    margin-top: 25px;
  }

  a{
    text-decoration: none;
  }

  .container{
    max-width: 1040px;
    width: 100%;
    margin: auto;
    position: relative;
  }
</style>
