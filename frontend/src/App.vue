<template>
  <div>
    <router-view></router-view>
    <div id="app"></div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      callingAPI: false,
      caller: this.$http
    }
  },
  methods: {
    callAPI: function (method, url, data) {
      this.callingAPI = true
      url = url || this.serverURI // if no url is passed then inheret local server URI
      return this.caller({
        url: url,
        method: method,
        data: data
      })
    },
    logout: function () {
      this.$store.dispatch('SET_USER', null)
      this.$store.dispatch('SET_TOKEN', null)

      if (window.localStorage) {
        window.localStorage.setItem('user', null)
        window.localStorage.setItem('token', null)
      }

      this.$router.push('/login')
    }
  }
}
</script>
