<template>
  <p v-if="$fetchState.pending">Fetching animes...</p>
  <p v-else-if="$fetchState.error">An error occurred :(</p>
  <div v-else>
    <h1>Anime List</h1>
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
            <b-button type="submit" variant="danger">Delete</b-button>
          </div>
          </b-card>
    </li>
    </ul>
    <button @click="$fetch">Refresh</button>
  </div>
</template>

<script>
  import animes from '../../static/animes.json';
  export default {
    data() {
      return {
        animes: [],
      }
    },
    async fetch() {
      this.animes = animes
    },
  }
</script>
