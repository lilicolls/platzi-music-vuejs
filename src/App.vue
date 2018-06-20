<template lang = "pug">
  #app
    img(src='./assets/logo.png')
    h1 PlatziMusic
    select(v-model="selectedCountry")
      option(v-for="country in countries" v-bind:value="country.value") {{country.name}}
    spinner(v-show="loading")
    ul
      artist(v-for="artist in artists" 
      v-bind:artist="artist" v-bind:key="artist.mbid")
 
</template>

<script>
import Artist from './components/artist.vue'
import getArtists from './api'
import Spinner from './components/spinner.vue'
export default {
  name: 'app',
  data () {
    return {
      artists: [],
      countries: [
        {name: "Argentina", value: "argentina"},
        {name: "Colombia", value: "colombia"},
        {name: "España", value: "spain"},

      ],
      selectedCountry: "argentina",
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists(){
      const self = this // de esta forma evitamos que el this apunte al objeto global
      this.loading = true
      this.artists = []
      console.log("refrescaremos el valor")
      getArtists(this.selectedCountry)
       .then(function (artists){
         self.artists = artists
         self.loading = false
      })
    }
  }, 

  mounted: function() {  ///ejecutar metodo cuando el elemento fue montado en el DOM
   console.log("el componente se ha montado")
   this.refreshArtists();
  },

  watch: {  //con este objeto se establece los eventos a los que se quiere estar escuchando
    selectedCountry (){ //ejecutar una funcion cuando ocurra un cambio en selectedCountry
   this.refreshArtists();
   console.log("cambio un valor del value")
    }
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
