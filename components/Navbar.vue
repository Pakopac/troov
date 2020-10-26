<template>
  <div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item href="/">Home</b-nav-item>
      <!-- <b-nav-item v-if="isAuthenticated" href="/anime/list">Anime List</b-nav-item>
      <b-nav-item v-if="isAuthenticated" href="/anime/add">Add Anime</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" href="/login">Login</b-nav-item>
      <b-nav-item v-if="!isAuthenticated" href="/register">Register</b-nav-item> -->

      <b-nav-item href="/anime/list">Anime List</b-nav-item>
      <b-nav-item href="/anime/add">Add Anime</b-nav-item>
      <b-nav-item href="/login">Login</b-nav-item>
      <b-nav-item href="/register">Register</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
import store from '../store/index.js'
import { mapGetters } from 'vuex'

export default {
 name: 'navbar',
   computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  }
}

</script>