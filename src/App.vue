<template lang = "pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    ul
      artist(v-for="artist in artists"
      v-bind:artist="artist" v-bind:key="artist.mbid")
    
</template>

<script>
import Artist from './components/artist.vue'
import getArtists from './api'
export default {
  name: 'app',
  data () {
    return {
      artists: []
    }
  },
  components: {
    Artist
  },

  mounted: function(){ ///ejecutar metodo cuando el elemento fue montado en el DOM
    const self = this // de esta forma evitamos que el this apunte al objeto global
    getArtists()
      .then(function (artists){
        self.artists = artists
      })
  }
}
</script>

<style lang = "stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color red !important
  margin-top 60px

h1, h2
  font-weight normal

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
