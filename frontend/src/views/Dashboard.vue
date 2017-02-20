<template>
  <!-- Main content -->
  <section class='content'>
    <!-- Info boxes -->
    <div class='row'>
      <div class="alert alert-success alert-dismissible">
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
        <h4><i class="icon fa fa-check"></i> CoPilot is open source!</h4>
        Click on icon to check out it out on github. <a href='https://github.com/misterGF/CoPilot' target='_blank'><i class='fa fa-github fa-2x'></i></a>
      </div>
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-aqua'><i class='ion ion-ios-gear-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>CPU Traffic</span>
            <span class='info-box-number'>90<small>%</small></span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-red'><i class='fa fa-google-plus'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Likes</span>
            <span class='info-box-number'>41,410</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->

      <!-- fix for small devices only -->
      <div class='clearfix visible-sm-block'></div>

      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-green'><i class='ion ion-ios-cart-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>Sales</span>
            <span class='info-box-number'>760</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
      <div class='col-md-3 col-sm-6 col-xs-12'>
        <div class='info-box'>
          <span class='info-box-icon bg-yellow'><i class='ion ion-ios-people-outline'></i></span>

          <div class='info-box-content'>
            <span class='info-box-text'>New Members</span>
            <span class='info-box-number'>2,000</span>
          </div>
          <!-- /.info-box-content -->
        </div>
        <!-- /.info-box -->
      </div>
      <!-- /.col -->
    </div>
    <!-- /.row -->

    <!-- /.row -->
  </section>
  <!-- /.content -->
</template>

<script>
module.exports = {
  data: function () {
    return {
      generateRandomNumbers: function (numbers, max, min) {
        var a = []
        for (var i = 0; i < numbers; i++) {
          a.push(Math.floor(Math.random() * (max - min + 1)) + max)
        }
        return a
      }
    }
  },
  computed: {
    coPilotNumbers: function () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    personalNumbers: function () {
      return this.generateRandomNumbers(12, 1000000, 10000)
    },
    isMobile: function () {
      return (window.innerWidth <= 800 && window.innerHeight <= 600)
    }
  },
  mounted: function () {
  }
}
</script>
<style>
.info-box {
  cursor: pointer;
}
.info-box-content {
  text-align: center;
  vertical-align: middle;
  display: inherit;
}
.fullCanvas {
  width: 100%;
}
</style>
