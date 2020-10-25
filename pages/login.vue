<template>
   <b-container>
     <h3 class="mb-4">Login</h3>
     <Notification :message="error" v-if="error"/>
    <b-form method="post" @submit.prevent="login">

      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input
          type="email"
          id="input-1"
          v-model="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input
          type="password"
          id="input-2"
          v-model="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
</template>

<script>
import Notification from '~/components/Notification'

export default {
  components: {
    Notification,
  },

  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },

  methods: {
    async login() {
      try {
        await this.$axios.post('/api/user/login', {
          email: this.email,
          password: this.password
        })
        this.$router.push('/')

      } catch (e) {
        this.error = e.response.data.message
      }
    }
  }
}
</script>