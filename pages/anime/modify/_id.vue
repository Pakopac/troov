<template>
  <p v-if="$fetchState.pending">Fetching animes...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <Navbar />
   <b-container style="margin-top: 50px">
     <h3 class="mb-4">Modify Anime</h3>
    <b-form method="post" @submit.prevent="modify">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input
          type="text"
          id="input-1"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="name"
          required
          placeholder="Enter Name"
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Image URL: " label-for="input-2">
        <b-form-input
          type="text"
          id="input-2"
          v-model="image_url"
          required
          placeholder="Enter Image URL"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Genre n°1: " label-for="input-3">
        <b-form-input
          type="text"
          id="input-3"
          v-model="genre1"
          required
          placeholder="Enter Genre n°1"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label="Genre n°2: " label-for="input-4">
        <b-form-input
          type="text"
          id="input-4"
           v-model="genre2"
          required
          placeholder="Enter Genre n°2"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-5" label="Rating: " label-for="input-5">
        <b-form-input
          type="number"
          step="0.01"
          id="input-5"
           v-model="rating"
          required
          placeholder="Enter Rating"
          max="10"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
  </div>
</template>

<script>
import Notification from '~/components/Notification'
import animes from '../../../static/animes.json';
import Navbar from '~/components/Navbar'

export default {
  data() {
    return {
      name: '',
      image_url: '',
      genre1: '',
      genre2: '',
      rating: '',
      animes: [],
      currentAnime: {}
    }
  },
  components: {
      Navbar,
    },

    async fetch() {
      this.animes = animes
      for(var i = 0; i<this.animes.length; i++){
        if(this.animes[i].id === parseInt(this.$route.params.id)){
          var currentAnime = this.animes[i]
        }
      }
      this.name = currentAnime.title
      this.image_url = currentAnime.image_url
      this.genre1 = currentAnime.genres[0]
      this.genre2 = currentAnime.genres[1]
      this.rating = currentAnime.rating
    },
    methods: {
    async modify() {
      try {
        await this.$axios.post('/api/anime/modify', {
          id: this.$route.params.id,
          name: this.name,
          image_url: this.image_url,
          genre1: this.genre1,
          genre2: this.genre2,
          rating: this.rating,
        })
        this.$router.push('/anime/list')

      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>