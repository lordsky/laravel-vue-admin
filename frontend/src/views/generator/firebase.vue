<template>
<div class="container-fluid">
  <section class="content">
    <div class="box">
      <div class="box-body">
        <div class="row">
          <div class="col-sm-12">
            <table class="table table-condensed table-bordered">
              <tr v-for="field in fields">
                <td>
                  <input type='text' class='form-control' v-model='field.display' name='display' />
                </td>
                <td>{{ field.type }}</td>
                <td>{{ field.validations }}</td>
                <td>{{ field.is_primary }}</td>
                <td>{{ field.is_search }}</td>
                <td>
                  <button @click='addField' class="btn btn-info">add</button>
                  <button @click='removeField(field)' class="btn btn-danger">remove</button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

</template>

<script>
var Vue = require('vue')
var VueFire = require('vuefire')
var Firebase = require('firebase')
Vue.use(VueFire)
// var fieldsRef = new Firebase('https://helloworld-2be2d.firebaseio.com')
var firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCuMX0u-ccoMe8SdQQTgQu014980NPNP4M',
  authDomain: 'helloworld-2be2d.firebaseapp.com',
  databaseURL: 'https://helloworld-2be2d.firebaseio.com',
  storageBucket: 'helloworld-2be2d.appspot.com',
  messagingSenderId: '417056611879'
})
var db = firebaseApp.database()
// 需要使用use将Vuefire引用到Vue环境中

export default {
  name: 'create',
  firebase: {
    fields: db.ref('fields')
  },
  data: function () {
    var field = {
      display: 'ttt',
      type: '',
      validations: '',
      is_primary: '',
      is_search: false
    }
    return {
      field: field
    }
  },
  mounted: function () {
    // this.$firebaseRefs.fields.push(this.field)
  },
  methods: {
    addField: function () {
      // this.fields.push(this.field)
      this.$firebaseRefs.fields.push(this.field)
    },
    removeField: function (field) {
      console.log('field', field)

      if (this.$firebaseRefs.fields.length <= 1) {
        alert('xxxx')
      }
      // this.fields.splice(this.fields.indexOf(field), 1)
      this.$firebaseRefs.fields.child(field['.key']).remove()
    }
  }
}
</script>

<style>
</style>
