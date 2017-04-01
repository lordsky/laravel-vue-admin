<template>
  <section class="content">
    <div class="row center-block">
      <h2></h2>
      <router-view></router-view>
      <div class="col-md-6">
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">编辑商品</h3>
            <button class='btn btn-danger btn-large pull-right' @click='deleteGoods(id)' v-show='id'>删除商品</button>
          </div>
          <!-- /.box-header -->
          <div class="box-body">
            <form @submit.prevent="update(fillItem)" data-vv-scope="addForm">
            <div class="form-group">
                <label>商品名称</label>
                <input type="text" name='name' v-model='fillItem.name' v-validate="'required'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.name')">{{ errors.first('addForm.name') }}</span>
                <span class='error text-danger' v-show="formErrors['name']">{{ formErrors['name'] }}</span>
            </div>
            <div class="form-group">
                <label for="">商品分类</label>
                <select class="form-control" v-model="fillItem.category_id" v-validate="'required'">
                    <option :value="item.id" v-for='item in categories'>{{ item.name }}</option>
                </select>
                <span class='help text-danger' v-show="errors.has('addForm.category_id')">{{ errors.first('addForm.category_id') }}</span>
                <span class='error text-danger' v-show="formErrors['category_id']">{{ formErrors['category_id'] }}</span>
            </div>
            <div class="form-group">
                <label for="">所属公司</label>
                <select class="form-control" v-model="fillItem.company_id" v-validate="'required'">
                    <option :value="item.id" v-for='item in companies'>{{ item.name }}</option>
                </select>
            </div>
            <div class="form-group">
                <label>物料代码</label>
                <input type="text" name='erp_code' v-model='fillItem.erp_code' v-validate="'required|numeric|min:6|max:6'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.erp_code')">{{ errors.first('addForm.erp_code') }}</span>
                <span class='error text-danger' v-show="formErrors['erp_code']">{{ formErrors['erp_code'] }}</span>
            </div>
            <div class="form-group">
                <label>内购价</label>
                <input type="text" name='price' v-model='fillItem.price' v-validate="'required|between:1,10000'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.price')">{{ errors.first('addForm.price') }}</span>
                <span class='error text-danger' v-show="formErrors['price']">{{ formErrors['price'] }}</span>
            </div>
            <div class="form-group">
                <label>特惠价</label>
                <input type="text" name='special_price' v-model='fillItem.special_price' v-validate="'between:1,10000'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.special_price')">{{ errors.first('addForm.special_price') }}</span>
                <span class='error text-danger' v-show="formErrors['special_price']">{{ formErrors['special_price'] }}</span>
            </div>
            <div class="form-group">
                <label>市场价</label>
                <input type="text" name='official_price' v-model='fillItem.official_price' v-validate="'between:1,10000'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.official_price')">{{ errors.first('addForm.official_price') }}</span>
                <span class='error text-danger' v-show="formErrors['official_price']">{{ formErrors['official_price'] }}</span>
            </div>
            <div class="form-group">
                <label>图片</label>
                <input type="file" ref="input" @change="uploadImg" name='img' v-validate="'image'" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.img')">{{ errors.first('addForm.img') }}</span>
                <span class='error text-danger' v-show="formErrors['img']">{{ formErrors['img'] }}</span>
                <img :src="fillItem.img" height=200 v-if='fillItem.img' />
            </div>
            <div class="form-group">
                <label>库存</label>
                <input type="text" name='stock' v-model='fillItem.stock' v-validate="'required|numeric'" class="form-control" placeholder="">
                <span class='help text-danger' v-show="errors.has('addForm.stock')">{{ errors.first('addForm.stock') }}</span>
                <span class='error text-danger' v-show="formErrors['stock']">{{ formErrors['stock'] }}</span>
            </div>
            <div class="checkbox">
                <label>
                    <input type='checkbox' v-model='fillItem.online'  />
                    是否上架
                </label>
                <span class='help text-danger' v-show="errors.has('addForm.online')">{{ errors.first('addForm.online') }}</span>
                <span class='error text-danger' v-show="formErrors['online']">{{ formErrors['online'] }}</span>
            </div>
            <div class="form-group">
                <button typee="submit" class="btn btn-primary">保存</button>
            </div>
            </form>
          <!-- /.box-body -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
  module.exports = {
    name: 'goods',
    data () {
      return {
        id: '',
        fillItem: {'name': '', 'category_id': '', 'company_id': '', 'erp_code': '', 'price': '', 'special_price': '', 'official_price': '', 'img': '', 'stock': '', 'online': false},
        formErrors: {},
        showSuccess: false,
        showError: false,
        message: '',
        categories: [],
        companies: [],
        uploadImgSrc: ''
      }
    },
    methods: {
      loadGoodsData () {
        let id = this.$route.params.id
        console.log('id', id)
        this.id = id
        this.$http.get('goods/' + id).then((response) => {
          var result = response.data.data
          console.log('result', result)
          this.fillItem = result
          this.fillItem.online = !!result.online
          console.log('this.fillItem.online', this.fillItem.online)
        })
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
          this.loadGoodsData()
        })
      },
      uploadImg () {
        let formData = new window.FormData()
        formData.append('file', this.$refs.input.files[0])
        this.$http.post('upload', formData)
        .then((response) => {
          console.log('response.data.data', response.data.data)
          this.fillItem.img = response.data.data
        }).catch(error => {
          window.toastr.error('图片上传失败' + error)
        })
      },
      update (item) {
        this.$validator.validateAll('addForm').then(success => {
          if (!success) {
            return
          }
          this.$http.put('goods/' + item.id, this.fillItem).then((response) => {
            var result = response.data
            console.log('result', result)
            this.message = result.message
            this.showSuccess = true
            this.$router.replace({ path: '/admin/goods' })
          }).catch(error => {
            this.formErrors = error.response.data
            console.log('this.formErrors', this.formErrors)
          })
        }).catch(errormgs => {
          window.toastr.error('请完整填写表单')
        })
      },
      deleteGoods (id) {
        window.swal({
          title: '确定删除吗?',
          type: 'warning',
          confirmButtonColor: '#DD6B55',
          confirmButtonText: '删除之后无法恢复!',
          showCancelButton: true
        }, () => {
          this.$http.delete('goods/' + id).then((response) => {
            var result = response.data
            console.log('result', result)
            window.swal('删除成功', '成功删除', 'success')
            this.$router.replace({ path: '/admin/goods' })
          })
        })
      }
    },
    mounted () {
      // window.setICheck()
      this.loadCategoryData()
      this.loadCompanyData()
    }
  }
</script>
