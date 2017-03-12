<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <router-view></router-view>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">商品列表</h3>
            <button class='btn btn-primary btn-large pull-right' @click='add'>添加商品</button>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="dataTables_wrapper form-inline dt-bootstrap" id="example1_wrapper">
              <div class="row">
                <div class="col-sm-12">
                  <form class="form-inline" role="form" id='search'>
                    <div class="form-group">
                      <label class="sr-only" for="exampleInputEmail2">商品名称</label>
                      <input type="text" class="form-control" id="exampleInputEmail2" placeholder="商品名称" name='name'>
                    </div>
                    <div class="form-group">
                      <label for="">商品分类</label>
                      <select class="form-control" name='category_id'>
                          <option value=''></option>
                          <option :value="item.id" v-for='item in categories'>{{ item.name }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">所属公司</label>
                      <select class="form-control" name='company_id'>
                          <option value=''></option>
                          <option :value="item.id" v-for='item in companies'>{{ item.name }}</option>
                      </select>
                    </div>
                    <button type="button" class="btn btn-primary but-large" @click='search'>查找</button>
                    <input type="hidden" name='limit' value="" id='limit' />
                    <input type="hidden" name='page' value="1" id='page' />
                  </form>
                  <hr />
                  <table id="project-table" class="table table-condensed table-bordered table-striped" >
                    <thead>
                      <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>类型</th>
                        <th>所属公司</th>
                        <th>商品图片</th>
                        <th>物料代码</th>
                        <th>内购价</th>
                        <th>特惠价</th>
                        <th>市场价</th>
                        <th>库存</th>
                        <th>是否上架</th>
                        <th>添加时间</th>
                        <th>操作</th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
            </div>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import $ from 'jquery'

// Require needed datatables modules
require('datatables.net')
require('datatables.net-bs')
module.exports = {
  name: 'Tables',
  data: function () {
    return {
      table: null,
      categories: [],
      companies: []
    }
  },
  methods: {
    search: function () {
      this.table.draw()
    },
    add () {
      this.$router.push('/admin/goods/add')
    },
    loadCategoryData () {
      this.$http.get('goods_category').then((response) => {
        var result = response.data.data.data
        console.log('categories data', result)
        this.categories = result
      })
    },
    loadCompanyData () {
      this.$http.get('company').then((response) => {
        var result = response.data.data.data
        this.companies = result
      })
    }
  },
  mounted: function () {
    this.loadCategoryData()
    this.loadCompanyData()
    this.$nextTick(function () {
      var self = this
      var table = $('#project-table').DataTable({
        'serverSide': true,
        'ordering': true,
        'stateSave': true,
        'processing': true,
        'language': {
          url: './static/datatable_zh_CN.json'
        },
        'ajax': function (data, callback, settings) {
          console.log('datatables data', data)
          $('#limit').val(data.length)
          $('#page').val((data.start / data.length) + 1)
          var param = $('#search').serialize()
          console.log('param', param)
          self.$http.get('goods?' + param)
          .then((response) => {
            var result = response.data.data
            var returnData = {}
            returnData.data = result.data
            returnData.recordsTotal = result.total
            returnData.recordsFiltered = result.total
            callback(returnData)
          })
        },
        columns: [{
          data: 'id',
          name: 'id'
        }, {
          data: 'name',
          name: 'name'
        }, {
          data: 'category_name',
          name: 'category_name'
        }, {
          data: 'company_name',
          name: 'company_name'
        }, {
          data: 'img',
          name: 'img'
        }, {
          data: 'erp_code',
          name: 'erp_code'
        }, {
          data: 'price',
          name: 'price'
        }, {
          data: 'special_price',
          name: 'special_price'
        }, {
          data: 'official_price',
          name: 'official_price'
        }, {
          data: 'stock',
          name: 'stock'
        }, {
          data: 'online',
          name: 'online'
        }, {
          data: 'created_at',
          name: 'created_at'
        }, {
          data: 'id'
        }],
        'columnDefs': [
          {
            'targets': -1,
            'data': 'id',
            'render': function (data, type, full) {
              return "<div class=’btn-group‘><button data-toggle='tooltip' title='点击查看详情' class='btn btn-danger btn-edit'><i class='fa fa-edit'></i>编辑</button></div>" +
              "<div class=’btn-group‘><button class='btn btn-info btn-setsequence' data-id='" + data + "'><i class='fa fa-sort'></i>上移一位</button></div>"
            }
          },
          {
            'targets': 4,
            'data': 'img',
            'render': function (data, type, full) {
              return '<img src=' + data + ' width=140 height=100 />'
            }
          },
          {
            'targets': 10,
            'data': 'online',
            'render': function (data, type, full) {
              return data ? '<span class="label label-success">上架中</span>' : '<span class="label label-danger">已下架</span>'
            }
          }
        ]
      })
      this.table = table
      $('#project-table').on('click', 'button.btn-edit', function () {
        var data = table.row($(this).parents('tr')).data()
        // self.$router.replace({ path: '/admin/order/' + data['id'] })
        self.$router.push('/admin/goods/' + data['id'])
      })
      self = this
      $('#project-table').on('click', 'button.btn-setsequence', function () {
        let id = $(this).attr('data-id')
        self.$http.post('goods/set_sequence/' + id).then((response) => {
          self.table.draw()
        }).catch(error => {
          this.formErrors = error.response.data
          console.log('this.formErrors', this.formErrors)
        })
      })
    })
  }
}
</script>
<style>
/* Using the bootstrap style, but overriding the font to not draw in
   the Glyphicons Halflings font as an additional requirement for sorting icons.

   An alternative to the solution active below is to use the jquery style
   which uses images, but the color on the images does not match adminlte.

@import url('/static/js/plugins/datatables/jquery.dataTables.min.css');
*/

@import url('/static/js/plugins/datatables/dataTables.bootstrap.css');

table.dataTable thead .sorting:after,
table.dataTable thead .sorting_asc:after,
table.dataTable thead .sorting_desc:after {
  font-family: 'FontAwesome';
}

table.dataTable thead .sorting:after {
  content: "\f0dc";
}

table.dataTable thead .sorting_asc:after {
  content: "\f0dd";
}

table.dataTable thead .sorting_desc:after {
  content: "\f0de";
}

</style>
