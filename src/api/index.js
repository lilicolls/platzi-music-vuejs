
import config from './config'

const {apiKey} = config;
//const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`


export default function getArtist(country){
    const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&format=json`

    //const url = URL.replace(':contry', country)
    return fetch(URL)
  


    .then(res=> res.json())
    .then(json=> json.topartists.artist)
    .catch(err=> console.log(err)) 
}

