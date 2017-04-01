<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <a class="navbar-brand" href="/">内部购机系统</a>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div  id="navbar"  class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li><router-link :to="{ path:'/goods' }"> 商品列表 <span class="sr-only">(current)</span></router-link></li>
          <li><router-link :to="{ path:'/cart' }">购物车<span class="badge text-danger">{{ cart_total }}</span></router-link></li>
        </ul>
      </div>
      <!-- /.navbar-collapse -->
    </div>
    <!-- /.container-fluid -->
  </nav>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cart_total'])
  }
}
</script>
<style>
.navbar-inverse,.navbar-oppo {
    background-color: #009b72;
    border-color: #009b72;
}
.navbar-inverse .navbar-brand{
  color:#fff;
}
.navbar-inverse .navbar-brand:focus, .navbar-oppo .navbar-brand:hover {
  color:#fff;
  font-weight: bold;
}
.navbar-inverse .navbar-nav>li>a:focus, .navbar-inverse .navbar-nav>li>a:hover {
  font-weight: bold;
}
.navbar-inverse .navbar-nav>li>a{
    color:#fff;
}
</style>
