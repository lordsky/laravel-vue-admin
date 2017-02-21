<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">菜单列表</h3>
            <button class='btn btn-primary pull-right' data-toggle="modal" data-target="#myModal">添加</button>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <table id="project-table" class="table table-condensed table-bordered table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>分类名</th>
                  <th>优先级</th>
                  <th>是否启用</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='item in categories'>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.sequence }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                    <button class="btn btn-info" @click='edit(item)'>编辑</button>
                    <button class="btn btn-danger" @click='remove(item)'>删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- /.box-body -->
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
        <form @submit.prevent="add">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">新建分类</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">分类名</label>
                  <input type="text" name='name' v-model='name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('name')">{{ errors.first('name') }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">说明</label>
                  <input type="text" name='desc' v-model='desc' class="form-control" />
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">状态</label>
                  <input type="text" name='status' v-model='status' v-validate="'required'" class="form-control" />
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
              <button type="submit" class="btn btn-primary">保存</button>
            </div>
            </form>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
    </div>
  </section>
</template>
<script>
  module.exports = {
    name: 'menu',
    data: function () {
      return {
        menus: {},
        showAdd: false,
        name: '',
        status: '',
        desc: ''
      }
    },
    methods: {
      loadData () {
        this.$http.get('menu').then((response) => {
          var result = response.data.data
          console.log('result', result)
          this.categories = result
        })
      },
      add () {
        this.$validator.validateAll().then(success => {
          if (!success) {
            return
          }
          var params = {
            name: this.name,
            status: this.status,
            desc: this.desc
          }
          this.$http.post('menu', params).then((response) => {
            var result = response.data
            console.log('result', result)
          })
        }).catch(errormgs => {
          window.toastr.error('请完整填写表单')
        })
      },
      edit (item) {
      },
      remove (item) {
        window.swal({
          title: '确定删除吗?',
          type: 'warning',
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          showCancelButton: true
        }, () => {
          this.$http.delete('menu/' + item.id).then((response) => {
            var result = response.data
            console.log('result', result)
            this.loadData()
            window.swal('删除成功', '成功删除', 'success')
          })
        })
      }
    },
    mounted () {
      this.loadData()
      // window.swal('Here a message!')
    }
  }

</script>