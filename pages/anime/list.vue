<template>
  <p v-if="$fetchState.pending">Fetching animes...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <Navbar />
    <div class="row" style="marginLeft: 100px">
      <h1>Anime List</h1>
      <div style="marginTop: 10px;marginLeft: 30px">
      <n-link :to="`/anime/add`">
        <b-button type="submit" variant="success">Add</b-button>
      </n-link> 
      <b-button variant="primary" @click="$fetch">Refresh</b-button>
      </div>
    </div>
    <ul class="card-deck">
      <li v-for="anime of animes" :key="anime.id" class="row">
           <b-card
                :title="anime.title"
                :img-src="anime.image_url"
                :img-alt="anime.title"
                img-height="200px"
                img-top
                tag="article"
                style="width: 13rem; margin: 10px 40px; padding-bottom: 50px"
            
            >
          <div>genre: {{anime.genres[0]}}, {{anime.genres[1]}}</div>
          <div>rating: {{anime.rating}}/10</div>
          <div class="position-absolute" style="bottom: 10px">
            <n-link :to="`/anime/modify/${anime.id}`">
              <b-button type="submit" variant="primary">Modify</b-button>
            </n-link>        
              <b-button @click="deleteAnime(anime.id)" type="submit" variant="danger">Delete</b-button>
          </div>
          </b-card>
    </li>
    </ul>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar'
  import animes from '../../static/animes.json';
  export default {
    components: {
      Navbar,
    },
    data() {
      return {
        animes: [],
      }
    },
    async fetch() {
      this.animes = animes
    },
    methods: {
      async deleteAnime(id) {
        try {
          await this.$axios.post('/api/anime/delete', {
            id: id
          })
          this.$router.push('/anime/list')

        } catch (e) {
          this.error = e.response.data.message
        }
      }
    },
  }
  
</script>
