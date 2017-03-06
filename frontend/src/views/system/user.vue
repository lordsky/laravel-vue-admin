<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">用户列表</h3>
            <button class='btn btn-primary pull-right' data-toggle="modal" data-target="#myModal">添加</button>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <div class="alert alert-success" user="alert" v-show='showSuccess'>
              {{ message }}
            </div>
            <div class="alert alert-danger" user="alert" v-show='showError'>
              {{ message }}
            </div>
            <table id="project-table" class="table table-condensed table-bordered table-striped">
              <thead>
                <tr>
                  <th>id</th>
                  <th>用户名</th>
                  <th>邮箱</th>
                  <th>用户组</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='item in users'>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td>{{ item.email }}</td>
                  <td><span class="label label-info">{{ item.roles[0] ? item.roles[0].display_name : '' }}</span></td>
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
      <div class="modal fade" id="myModal" tabindex="-1" user="dialog">
        <form @submit.prevent="add" data-vv-scope="addForm">
        <div class="modal-dialog" user="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">新建</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">用户名</label>
                  <input type="text" name='name' v-model='newItem.name' v-validate="'required|alpha_num|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('addForm.name')">{{ errors.first('addForm.name') }}</span>
                  <span class='error text-danger' v-show="formErrors['name']">{{ formErrors['name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">邮箱</label>
                  <input type="text" name='email' v-model='newItem.email' v-validate="'required|email'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('addForm.email')">{{ errors.first('addForm.email') }}</span>
                  <span class='error text-danger' v-show="formErrors['email']">{{ formErrors['email'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">密码</label>
                  <input type="password" name='password' v-model='newItem.password' v-validate="'required|min:6'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('addForm.password')">{{ errors.first('addForm.password') }}</span>
                  <span class='error text-danger' v-show="formErrors['password']">{{ formErrors['password'] }}</span>
                </div>
                <div class="form-group">
                  <label for="">用户组</label>
                  <select class="form-control" v-model="newItem.role">
                      <option :value="item.name" v-for='item in roles'>{{ item.display_name }}</option>
                  </select>
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
      <div class="modal fade" id="editModal" tabindex="-1" user="dialog">
        <form @submit.prevent="update(fillItem.id)" data-vv-scope="updateForm">
        <div class="modal-dialog" user="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">编辑</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                  <label for="exampleInputEmail1">标识</label>
                  <input type="text" name='name' v-model='fillItem.name' v-validate="'required|alpha_num|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('updateForm.name')">{{ errors.first('updateForm.name') }}</span>
                  <span class='error text-danger' v-show="formErrors['name']">{{ formErrors['name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">名称</label>
                  <input type="text" name='display_name' v-model='fillItem.display_name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('updateForm.display_name')">{{ errors.first('display_name') }}</span>
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
   </div>
  </section>
</template>
<script>
  module.exports = {
    name: 'user',
    data: function () {
      return {
        users: {},
        newItem: {'name': '', 'password': '', 'email': '', 'role': ''},
        fillItem: {'name': '', 'password': '', 'email': ''},
        formErrors: {},
        showSuccess: false,
        showError: false,
        showSortBtn: false,
        message: '',
        roles: {}
      }
    },
    methods: {
      loadData () {
        this.showSortBtn = false
        this.$http.get('system/user').then((response) => {
          var result = response.data.data.data
          this.users = result
        })
      },
      loadRoleData () {
        this.$http.get('system/user/create').then((response) => {
          var result = response.data.data
          console.log('permissions result', result)
          this.roles = result
        })
      },
      add () {
        this.$validator.validateAll('addForm').then(success => {
          if (!success) {
            return
          }
          this.$http.post('system/user', this.newItem).then((response) => {
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
          this.$http.put('system/user/' + id, this.fillItem).then((response) => {
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
          this.$http.delete('system/user/' + item.id).then((response) => {
            var result = response.data
            console.log('result', result)
            this.loadData()
            window.swal('删除成功', '成功删除', 'success')
          })
        })
      },
      selectAll (permissions) {
        console.log('permissions before', permissions)
        // permissions.each((item) => {
        //   item.checked = true
        // })
        for (var i in permissions) {
          permissions[i].checked = 'checked'
        }
        console.log('permissions after', permissions)
      }
    },
    mounted () {
      this.loadData()
      this.loadRoleData()
    }
  }

</script>
