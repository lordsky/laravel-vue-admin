<template>
  <section class="content">
    <a class="btn btn-primary" @click='return_to_index'>返回</a>
    <div class="row center-block" v-if="order">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title"></h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class='detail'>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
        
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
    },
    methods: {
      return_to_index: function () {
        this.$router.push('/admin/order')
      }
    }
  }
</script>