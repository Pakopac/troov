<template>
  <div>
     <Navbar />
   <b-container style="margin-top:50px">
     <h3 class="mb-4">Register</h3>
     <Notification :message="error" v-if="error"/>
    <b-form method="post" @submit.prevent="register">
      <b-form-group id="input-group-1" label="Firstname:" label-for="input-1">
        <b-form-input
          type="text"
          id="input-1"
          class="mb-2 mr-sm-2 mb-sm-0"
          v-model="firstname"
          required
          placeholder="Enter Firstname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Lastname:" label-for="input-2">
        <b-form-input
          type="text"
          id="input-2"
          v-model="lastname"
          required
          placeholder="Enter lastname"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Email:" label-for="input-3">
        <b-form-input
          type="text"
          id="input-3"
          v-model="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-4">
        <b-form-input
          type="password"
          id="input-4"
          v-model="password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </b-container>
  </div>
</template>

<script>
import Notification from '~/components/Notification'
import Navbar from '~/components/Navbar'

export default {
  components: {
    Notification,
    Navbar
  },

  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      error: null
    }
  },
  middleware: 'notLogged',
  methods: {
    async register() {
      try {
        await this.$axios.post('/api/user/register', {
          firstname: this.firstname,
          lastname: this.lastname,
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