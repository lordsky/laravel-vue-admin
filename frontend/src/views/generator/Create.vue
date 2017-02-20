<template>
<div class="container-fluid">
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-condensed table-bordered table-striped">
            <thead class="no-border">
              <tr>
                  <th>Name</th>
                  <th>Display</th>
                  <th>Type</th>
                  <th>Validations</th>
                  <th>DB Type</th>
                  <th style="width: 87px">Searchable</th>
                  <th style="width: 65px">In Form</th>
                  <th></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="field in fields">
                <td>
                  <input type='text' class='form-control' v-model.trim='field.name' name='display' />
                </td>
                <td>
                  <input type='text' class='form-control' v-model.trim='field.display' name='display' />
                </td>
                <td>
                  <select class="form-control drdHtmlType" style="width: 100%" v-model.trim='field.html_type'>
                    <option value="text">Text</option>
                    <option value="email">Email</option>
                    <option value="number">Number</option>
                    <option value="date">Date</option>
                    <option value="file">File</option>
                    <option value="password">Password</option>
                    <option value="select">Select</option>
                    <option value="radio">Radio</option>
                    <option value="checkbox">Checkbox</option>
                    <option value="textarea">TextArea</option>
                  </select>
                  <input type="text" class="form-control htmlValue txtHtmlValue" style="display: none"
                             placeholder=""/>
                </td>
                <td>
                  <input type='text' class='form-control' v-model.trim='field.validations' name='display' />
                </td>
                <td>
                  <input type='text' class='form-control' v-model.trim='field.type' name='display' />
                </td>
                <td>
                  <div class="checkbox" style="text-align: center">
                    <label style="padding-left: 0px">
                        <input type="checkbox" style="margin-left: 0px!important;" class="flat-red chkPrimary" v-model="field.is_search" />
                    </label>
                  </div>
                </td>
                <td>
                  <div class="checkbox" style="text-align: center">
                    <label style="padding-left: 0px">
                        <input type="checkbox" style="margin-left: 0px!important;" class="flat-red chkPrimary" v-model="field.is_inform" />
                    </label>
                  </div>
                </td>
                <td>
                  <button @click='addField' class="btn btn-info">add</button>
                  <button @click='removeField(field)' class="btn btn-danger"><i class="remove fa fa-trash-o"></i></button>

                </td>
              </tr>
              </tbody>
            </table>
            <div class="form-inline col-md-12" style="padding-top: 10px">
              <div class="form-group chk-align" style="border-color: transparent;">
                  <button @click='addField' type="button" class="btn btn-success btn-flat btn-green"> Add Field
                  </button>
              </div>
              <div class="form-group chk-align" style="border-color: transparent;">
                  <button @click='addFieldTimestamp' type="button" class="btn btn-success btn-flat btn-green" id="btnTimeStamps"> Add
                      Timestamps
                  </button>
              </div>
            </div>

            <div class="form-inline col-md-12" style="padding:15px 15px;text-align: right">
                <div class="form-group" style="border-color: transparent;padding-left: 10px">
                    <button type="submit" class="btn btn-flat btn-primary btn-blue" id="btnGenerate">Generate
                    </button>
                </div>
                <div class="form-group" style="border-color: transparent;padding-left: 10px">
                    <button type="button" class="btn btn-default btn-flat" id="btnReset" data-toggle="modal"
                            data-target="#confirm-delete"> Reset
                    </button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

<script>
// var $ = require('jquery')

// window.$(document).ready(function () {
//   console.log('ready')
//   window.$('select').select2({width: '100%'})
//   window.$('input').iCheck({
//     checkboxClass: 'icheckbox_square-blue',
//     radioClass: 'iradio_square-blue',
//     increaseArea: '20%' // optional
//   })
// })

export default {
  name: 'create',
  data: function () {
    var field = {
      name: '',
      display: '',
      type: '',
      validations: '',
      html_type: '',
      is_search: true,
      is_inform: true
    }
    return {
      field: field,
      fields: [field]
    }
  },
  mounted: function () {
  },
  methods: {
    addField: function () {
      this.fields.push(this.field)
    },
    addFieldTimestamp: function () {
      let field = Object.assign({}, this.field, {type: 'timestamp'})
      this.fields.push(field)
    },
    removeField: function (field) {
      console.log('field', field)

      if (this.fields.length <= 1) {
        alert('xxxx')
      }
      this.fields.splice(this.fields.indexOf(field), 1)
    }
  }
}
</script>

<style>
</style>
