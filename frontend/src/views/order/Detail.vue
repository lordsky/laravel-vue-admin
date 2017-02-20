<template>
  <section class="content">
    <a class="btn btn-primary" @click='return_to_index'>返回</a>
    <div class="row center-block" v-if="order">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">{{ id }}</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class='detail'>
              金额: {{order.amount}}
              订单号: {{order.serial}}
            </div>
            <!-- {{ order.amount }} -->
            <!-- /.box-body -->
          </div>
        </div>
        <!-- 收货地址 -->
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">收货地址</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class='order' v-if="order.order_delivery">
              shipping_name: {{order.order_delivery.shipping_name}}
              详细地址: {{order.order_delivery.province}} {{order.order_delivery.city}} {{order.order_delivery.district}} {{order.order_delivery.town}} {{order.order_delivery.address}}
              <hr />
              物流状态:{{order.order_delivery.status_mapping}}
            </div>
            <!-- {{ order.amount }} -->
            <!-- /.box-body -->
          </div>
        </div>
        <!-- /.收货地址 -->
      </div>
    </div>
  </section>
</template>
<script type="text/javascript">
  export default {
    data: function () {
      return {
        id: '',
        order: null
      }
    },
    mounted: function () {
      let id = this.$route.params.id
      console.log('id', id)
      this.id = id
      this.$http.get('business/orders/' + id)
      .then((response) => {
        console.log('response', response)
        this.order = response.data.data
        console.log('response.data', response.data.data)
        console.log('this.order.amount', this.order.amount)
      })
    },
    methods: {
      return_to_index: function () {
        this.$router.push('/admin/order')
      }
    }
  }
</script>