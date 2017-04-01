<template>
<div class="swiper-container" id="swiper" :style='{height:height}'>
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in imgs">
        <a :href='item.link' :style="{backgroundImage: buildBackgroundUrl(item.src),height: height,width: width}">
        <span>{{ item.title }}</span>
        </a>
      </div>
    </div>
  <div class="swiper-pagination"></div>
</div>
</template>
<script>
require('../assets/css/swiper.min.css')
import Swiper from 'swiper'
export default{
  name: 'swiper',
  data () {
    return {
      swiper: {}
    }
  },
  props: {
    imgs: {
      type: Array,
      default: () => []
    },
    height: {
      type: String,
      default: '200px'
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  methods: {
    /* 背景图片路径 */
    buildBackgroundUrl: function (url) {
      return `url(${url})`
    }
  },
  watch: {
    imgs () {
      this.$nextTick(() => {
        this.swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 2000,
          autoplayDisableOnInteraction: false
        })
      })
    }
  }
}
</script>

<style>
  img {
    width: 100%;
    height: auto;
  }
  #swiper .swiper-pagination-bullet {
    background: #e5e8e8;
    opacity: 1; 
  }
  #swiper .swiper-pagination-bullet-active {
    background: #ff5733;
  }
  .swiper-container{
    width:100%;
  }
  .swiper-slide a{display:block;position:relative;background-size:cover;background-origin: content-box;background-repeat: no-repeat;}
  .swiper-slide a span{
    position:absolute;bottom:5px;right:20px;color:#fff;
  }
</style>
