<template>
  <div class="container"> 
    <div style='margin-top:60px'></div>
    <div class="panel panel-primary" v-if="cart.cart_goods.length">
        <div class="panel-heading">
            <span class="glyphicon glyphicon-shopping-cart"></span> 购物车
            <span class="pull-right"><strong>总计：{{ summary }}元</strong></span>
        </div>
        <div class="panel-body cart-detail">
            <div v-for="item in cart.cart_goods" class="row goods">
                <div class='detail'>
                    <img class='' v-lazy='item.goods_images.archives.url' />
                    <br />
                    <div class="info">
                      <span class="titles">{{ item.name }}</span><br />
                      <span class="price">{{ item.price }}元</span>
                      <span class="badge text-danger">{{ item.quantity }}</span>
                    </div>
                    <div class="pull-right operate">
                        <button class="btn btn-danger" @click.stop='removeFromCart(item)'>删除</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="panel-footer">
        <button class="btn btn-danger btn-block">结算<span class="glyphicon glyphicon-circle-arrow-right"></span>
            <span class="pull-right"><strong>总计：{{ summary }}元</strong></span>
        </button>
      </div>
    </div>
    <p class="bg-warning cart-empty" v-else>
      购物车为空<br /><br />
      <router-link :to="{ path:'/goods' }"> 查看商品列表 <span class="sr-only"></span></router-link>
    </p>
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      goodslist: []
    }
  },
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['summary'])
  },
  mounted () {
  },
  methods: {
    ...mapActions(['removeFromCart', 'updateQuantity']),
    toBuy (goods) {
      console.log('goods', goods)
    }
  }
}
</script>
<style scoped>
.cart-detail{
  background-color:#f5f5f5
}
.goods .detail {height:220px;padding:10px 20px;position: relative}
.goods .detail img{float:left;}
.goods .detail .info{text-align: left;}
.goods .detail .operate{
  position:absolute;bottom:10px;right:10px;
}
  .cart-empty {
    text-align: center;
    font-size: 18px;
    color:#333;
    padding: 50px;
    border-radius: 4px;
    border: 2px dashed #009b72;
  }
</style>
