<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">角色列表</h3>
            <button class='btn btn-primary pull-right' data-toggle="modal" data-target="#myModal">添加</button>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
              
            <div class="alert alert-success" role="alert" v-show='showSuccess'>
              {{ message }}
            </div>
            <div class="alert alert-danger" role="alert" v-show='showError'>
              {{ message }}
            </div>
            <table id="project-table" class="table table-condensed table-bordered table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>名称</th>
                  <th>描述</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='item in menus'>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.description }}</td>
                  <td>
                    <button class="btn btn-info"  @click='edit(item)'>编辑</button>
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
        <form @submit.prevent="add" data-vv-scope="addForm">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">新建</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">名称</label>
                  <input type="text" name='display_name' v-model='newItem.display_name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('display_name')">{{ errors.first('display_name') }}</span>
                  <span class='error text-danger' v-show="formErrors['display_name']">{{ formErrors['display_name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">说明</label>
                  <input type="text" name='description' v-model='newItem.description' class="form-control" />
                  <span class='error text-danger' v-show="formErrors['description']">{{ formErrors['description'] }}</span>
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
      <div class="modal fade" id="editModal" tabindex="-1" role="dialog">
        <form @submit.prevent="update(fillItem.id)" data-vv-scope="updateForm">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">编辑</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">名称</label>
                  <input type="text" name='display_name' v-model='fillItem.display_name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('display_name')">{{ errors.first('display_name') }}</span>
                  <span class='error text-danger' v-show="formErrors['display_name']">{{ formErrors['display_name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">说明</label>
                  <input type="text" name='description' v-model='fillItem.description' class="form-control" />
                  <span class='error text-danger' v-show="formErrors['description']">{{ formErrors['description'] }}</span>
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
    name: 'role',
    data: function () {
      return {
        menus: {},
        newItem: {'description': '', 'display_name': '', 'uri': ''},
        fillItem: {'description': '', 'display_name': '', 'uri': ''},
        formErrors: {},
        showSuccess: false,
        showError: false,
        showSortBtn: false,
        message: ''
      }
    },
    methods: {
      loadData () {
        this.showSortBtn = false
        this.$http.get('system/role').then((response) => {
          var result = response.data.data.data
          this.menus = result
        })
      },
      add () {
        this.$validator.validateAll('addForm').then(success => {
          if (!success) {
            return
          }
          this.$http.post('system/role', this.newItem).then((response) => {
            var result = response.data
            console.log('result', result)
            this.message = result.message
            this.showSuccess = true
            this.loadData()
            window.$('#myModal').modal('hide')
          }).catch(error => {
            console.log('error result', error.response)
            this.formErrors = error.response.data
            console.log('this.formErrors', this.formErrors)
          })
        }).catch(errormgs => {
          window.toastr.error('请完整填写表单')
        })
      },
      edit (item) {
        this.fillItem = item
        window.$('#editModal').modal('show')
      },
      update (id) {
        this.$validator.validateAll('updateForm').then(success => {
          if (!success) {
            return
          }
          this.$http.put('system/role/' + id, this.fillItem).then((response) => {
            var result = response.data
            console.log('result', result)
            this.message = result.message
            this.showSuccess = true
            this.loadData()
            window.$('#editModal').modal('hide')
          }).catch(error => {
            console.log('error result', error.response)
            this.formErrors = error.response.data
            console.log('this.formErrors', this.formErrors)
          })
        }).catch(errormgs => {
          window.toastr.error('请完整填写表单')
        })
      },
      remove (item) {
        window.swal({
          title: '确定删除吗?',
          type: 'warning',
          confirmButtonColor: '#DD6B55',
          confirmButtonText: 'Yes, delete it!',
          showCancelButton: true
        }, () => {
          this.$http.delete('system/role/' + item.id).then((response) => {
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
    }
  }

</script>
<style>
.dargDiv{
    text-align: center;
    cursor:move;
    width:100%;
    height:100%;
}
</style>