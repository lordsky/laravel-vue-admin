<template>
  <div class="container container-table">
      <div class="row vertical-10p">
        <div class="container">
          <img src="/static/img/logo.png" class="center-block logo">
          <div class="text-center col-md-4 col-sm-offset-4">
            <!-- errors -->
            <div v-if=response class="text-red"><p>{{response}}</p></div>

            <!-- login form -->
            <form class="ui form loginForm"  @submit.prevent="checkCreds">

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                <input class="form-control" name="username" placeholder="Username" type="text" v-model="username">
              </div>

              <div class="input-group">
                <span class="input-group-addon"><i class="fa fa-lock"></i></span>
                <input class="form-control" name="password" placeholder="Password" type="password" v-model="password">
              </div>
              <button type="submit" v-bind:class="'btn btn-primary btn-lg ' + loading">Submit</button>
            </form>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { USER_SIGNIN } from '../store/modules/user'
module.exports = {
  name: 'Login',
  data: function (router) {
    return {
      section: 'Login',
      loading: '',
      username: 'admin@admin.com',
      password: '123456',
      response: ''
    }
  },
  methods: {
    ...mapActions([USER_SIGNIN]),
    checkCreds: function () {
      //  Change submit button
      var self = this
      this.toggleLoading()
      this.resetResponse()
      //  Login
      this.$http.post('login', { email: this.username, password: this.password }).then((response) => {
        if (response.data) {
          var data = response.data
          if (data.error) {
            if (data.error.name) { //  Object from LDAP at this point
              switch (data.error.name) {
                case 'InvalidCredentialsError' : self.response = 'Username/Password incorrect. Please try again.'; break
                default: self.response = data.error.name
              }
            } else {
              self.response = data.error
            }
          } else {
            console.log('data', data, data.data)
            //  success. Let's load up the dashboard
            if (data.data) {
              this.USER_SIGNIN(data.data)
              this.$router.replace({ path: '/admin' })
              // this.$router.push(data.redirect)
            }
          }
        } else {
          self.response = 'Did not receive a response. Please try again in a few minutes'
        }
        self.toggleLoading()
      })
      .catch((response) => {
        console.log('Error', response)
        self.response = 'Server appears to be offline'
        self.toggleLoading()
      })
    },
    toggleLoading: function () {
      this.loading = (this.loading === '') ? 'loading' : ''
    },
    resetResponse: function () {
      this.response = ''
    }
  }
}
</script>

<style>
html, body, .container-table {
  height: 100%;
  background-color: #282B30 !important;
}
.container-table {
    display: table;
    color: white;
}
.vertical-center-row {
    display: table-cell;
    vertical-align: middle;
}
.vertical-20p {
  padding-top: 20%;
}
.vertical-10p {
  padding-top: 10%;
}
.logo {
  width: 15em;
  padding: 3em;
}
.loginForm .input-group {
  padding-bottom: 1em;
  height: 4em;
}
.input-group input {
  height: 4em;
}
</style>
