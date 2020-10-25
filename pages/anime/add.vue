<template>
   <b-container>
     <h3 class="mb-4">Add Anime</h3>
    <b-form method="post" @submit.prevent="add">
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
          step="0.1"
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
</template>

<script>
import Notification from '~/components/Notification'

export default {

  data() {
    return {
      name: '',
      image_url: '',
      genre1: '',
      genre2: '',
      rating: ''
    }
  },

  
    methods: {
    async add() {
      try {
        await this.$axios.post('/api/anime/add', {
          name: this.name,
          image_url: this.image_url,
          genre1: this.genre1,
          genre2: this.genre2,
          rating: this.rating
        })
        this.$router.push('/anime/list')

      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>