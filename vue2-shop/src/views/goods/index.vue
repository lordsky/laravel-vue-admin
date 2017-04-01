<template>
  <div class="container">
    <div style='margin-top:60px'><my-swiper :imgs="swiperData"></my-swiper></div>
    <h1>Goods</h1>
    <div v-for="goods in goodslist" class="col-md-3 goods">
      <div class='detail'>
        <router-link v-bind:to="'goods/'+goods.id">
        <img class='' v-lazy='goods.goods_images.archives.url' />
        <br />
        <span class="titles">{{ goods.name }}</span>id : {{ goods.id }}
        <p class="price">{{ goods.price }}元</p>
        </router-link>
        <button class="btn btn-primary" @click.stop='addToCart(goods)'>加入购物车</button>
        <button class="btn btn-info" @click.stop='toBuy(goods)'>直接购买</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Swiper from '../../components/swiper.vue'

export default {
  data () {
    return {
      swiperData: [],
      goodslist: []
    }
  },
  components: {
    'my-swiper': Swiper
  },
  mounted () {
    this.fetchGoodsList()
    this.fetchBannerData()
  },
  methods: {
    ...mapActions(['addToCart']),
    fetchGoodsList () {
      console.log('fetchGoodsList')
      this.$http.get('goods').then((response) => {
        console.log('response.data', response.data)
        console.log('response.data.data', response.data.data)
        this.goodslist = response.data.data
      })
    },
    fetchBannerData () {
      this.$http.get('banner').then((response) => {
        let data = response.data.data
        console.log('banner data', data)
        this.swiperData = data
      })
    },
    toBuy (goods) {
      window.toastr.error('功能还在开发中~')
      console.log('goods', goods)
    }
  }
}
</script>
<style>
.goods{
  padding:5px;
  text-align:center;
}
.goods .detail{
  background-color: #fff;
  padding-bottom: 10px;
  cursor: pointer;
  border-top:2px solid #fff;
}
.goods .detail a{
  color:#333;
}
.goods .detail a:hover{
  text-decoration: none;
}
.goods .detail:hover{
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    -webkit-transform: translate3d(0, -2px, 0);
    transform: translate3d(0, -2px, 0);
    transition: all .5s ease;
    border-top:2px solid #009b72;
}
.goods .detail img{width:200px;height:auto;overflow: hidden}
.goods .detail img[lazy=loading] {
    width:auto;height:auto;
  }
.goods .detail .titles{
      height:58px;
      line-height:58px;
 }
.goods .detail .price{
  color:#009b72;
  font-size:1.5rem;
  font-weight: bold;
}
</style>      
  
