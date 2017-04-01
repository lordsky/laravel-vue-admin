<template>
  <div class="container"> 
    <div class="goods">
      <div class='detail' v-if='goods'>
        <router-link v-bind:to="'/goods/'+goods.id">
        <br />
        <span class="titles">{{ goods.name }}</span>
        <img v-if='goods.goods_images' class='' :src='goods.goods_images.archives.url' />
        <p class="price">{{ goods.price }}元</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      goods: []
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.fetchGoodsDetail()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchGoodsDetail'
  },
  methods: {
    fetchGoodsDetail () {
      console.log('fetchGoodsDetail')
      this.$http.get('goods/' + this.id).then((response) => {
        console.log('response', response)
        console.log('response.data', response.data)
        this.goods = response.data.data
        console.log(this.goods)
      })
    }
  }
}
</script>

  
