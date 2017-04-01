<template>
  <div id="app">
    <my-header></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Header from './views/common/header.vue'
import Footer from './views/common/footer.vue'
export default {
  name: 'app',
  components: {
    'my-header': Header,
    'my-footer': Footer
  }
}
</script>
<style >
body{
  background-color:#f5f5f5
}
</style>
