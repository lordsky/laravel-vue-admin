<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <div class="col-md-12">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">菜单列表</h3>
            <button class='btn btn-primary pull-right' data-toggle="modal" data-target="#myModal">添加</button>
            <button @click='saveSort()' v-show='showSortBtn' class='btn btn-info pull-right'>保存排序</button>
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
                  <th>id</th>
                  <th>名称</th>
                  <th>icon</th>
                  <th>url</th>
                  <th>优先级</th>
                  <th>操作</th>
                </tr>
              </thead>
                <draggable :list='menus' element="tbody" :move="onMove">
                <tr v-for='item in menus'>
                  <td><i class='fa fa-anchor dargDiv' aria-hidden="true"></i></td>
                  <td>{{ item.id }}</td>
                  <td>{{ item.name }}</td>
                  <td><i v-bind:class="'fa fa-' +item.icon + ''"></i></td>
                  <td>{{ item.uri }}</td>
                  <td>{{ item.sequence }}</td>
                  <td>
                    <button class="btn btn-info"  @click='edit(item)'>编辑</button>
                    <button class="btn btn-danger" @click='remove(item)'>删除</button>
                  </td>
                </tr>
                </transition-group>
                </draggable>
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
                  <input type="text" name='name' v-model='newItem.name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('name')">{{ errors.first('name') }}</span>
                  <span class='error text-danger' v-show="formErrors['name']">{{ formErrors['name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">说明</label>
                  <input type="text" name='desc' v-model='newItem.detail' class="form-control" />
                  <span class='error text-danger' v-show="formErrors['detail']">{{ formErrors['detail'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">icon</label>
                  <input type="text" name='status' v-model='newItem.icon' v-validate="'required'" class="form-control" />
                  <span class='error text-danger' v-show="formErrors['icon']">{{ formErrors['icon'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">uri</label>
                  <input type="text" name='status' v-model='newItem.uri' v-validate="'required'" class="form-control" />
                  <span class='error text-danger' v-show="formErrors['uri']">{{ formErrors['uri'] }}</span>
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
                  <input type="text" name='name' v-model='fillItem.name' v-validate="'required|min:2'" class="form-control" placeholder="">
                  <span class='help text-danger' v-show="errors.has('name')">{{ errors.first('name') }}</span>
                  <span class='error text-danger' v-show="formErrors['name']">{{ formErrors['name'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">说明</label>
                  <input type="text" name='desc' v-model='fillItem.detail' class="form-control" />
                  <span class='error text-danger' v-show="formErrors['detail']">{{ formErrors['detail'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">icon</label>
                  <input type="text" name='status' v-model='fillItem.icon' v-validate="'required'" class="form-control" />
                  <span class='error text-danger' v-show="formErrors['icon']">{{ formErrors['icon'] }}</span>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">uri</label>
                  <input type="text" name='status' v-model='fillItem.uri' v-validate="'required'" class="form-control" />
                  <span class='error text-danger' v-show="formErrors['uri']">{{ formErrors['uri'] }}</span>
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
  import draggable from 'vuedraggable'
  module.exports = {
    name: 'menu',
    components: {
      draggable
    },
    data: function () {
      return {
        menus: {},
        newItem: {'name': '', 'detail': '', 'icon': '', 'uri': ''},
        fillItem: {'name': '', 'detail': '', 'icon': '', 'uri': ''},
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
        this.$http.get('menu').then((response) => {
          var result = response.data.data.data
          console.log('menu', result)
          this.menus = result
        })
      },
      add () {
        this.$validator.validateAll('addForm').then(success => {
          if (!success) {
            return
          }
          this.$http.post('menu', this.newItem).then((response) => {
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
          this.$http.put('menu/' + id, this.fillItem).then((response) => {
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
          this.$http.delete('menu/' + item.id).then((response) => {
            var result = response.data
            console.log('result', result)
            this.loadData()
            window.swal('删除成功', '成功删除', 'success')
          })
        })
      },
      saveSort () {
        this.$http.post('menu/sort', this.menus).then((response) => {
          var result = response.data
          this.message = result.message
          this.showSuccess = true
          this.loadData()
        }).catch(() => {
          window.toastr.error('更新失败')
        })
      },
      onMove ({relatedContext, draggedContext}) {
        this.showSortBtn = true
      }
    },
    mounted () {
      this.loadData()
      // window.swal('Here a message!')
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