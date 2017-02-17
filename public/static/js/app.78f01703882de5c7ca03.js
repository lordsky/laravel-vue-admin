webpackJsonp([2,0],[function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(88),r=s(n),i=a(31),o=s(i),l=a(51),c=s(l),d=a(145),u=s(d),f=a(167),v=s(f),m=a(144),p=s(m),_=a(69),h=s(_),b=a(70),g=s(b),C=a(71),x=s(C);a(135),window.toastr=a(143),o.default.use(v.default),o.default.use(p.default,{locale:"zh",dictionary:{zh:{messages:h.default}}}),c.default.defaults.baseURL="/api",c.default.defaults.headers.common.csrf_token=window.Laravel_csrfToken,c.default.interceptors.request.use(function(t){return t.timeout=15e3,t},function(t){return r.default.reject(t)}),c.default.interceptors.response.use(function(t){return t},function(t){var e=t.response.status;console.log("status",e),console.log("error",t);var a="";return a=403===e?"禁止访问":404===e?"请求资源错误":"服务器异常，请稍后重试",window.toastr.error(a),r.default.reject(t)}),o.default.prototype.$http=c.default;var y=new v.default({routes:g.default,mode:"hash",scrollBehavior:function(t,e,a){return a||{x:0,y:0}}});y.beforeEach(function(t,e,a){console.log("store.user",x.default.state.user);var s=Boolean(x.default.state.user.id);return s||"/login"===t.path?void a():(window.console.log("Not authenticated"),a({path:"/login",query:{redirect:t.fullPath}}))}),new o.default({el:"#app",template:"<App/>",router:y,store:x.default,components:{App:u.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.USER_SIGNOUT=e.USER_SIGNIN=void 0;var n,r,i=a(89),o=s(i),l=a(87),c=s(l),d=a(18),u=s(d),f=a(85),v=s(f),m=a(31),p=s(m),_=e.USER_SIGNIN="USER_SIGNIN",h=e.USER_SIGNOUT="USER_SIGNOUT";e.default={state:JSON.parse(sessionStorage.getItem("user"))||{},mutations:(n={},(0,o.default)(n,_,function(t,e){sessionStorage.setItem("user",(0,v.default)(e)),console.log("user",e),(0,u.default)(t,e)}),(0,o.default)(n,h,function(t){sessionStorage.removeItem("user"),(0,c.default)(t).forEach(function(e){return p.default.delete(t,e)})}),n),actions:(r={},(0,o.default)(r,_,function(t,e){var a=t.commit;a(_,e)}),(0,o.default)(r,h,function(t){var e=t.commit;e(h)}),r)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(91),r=s(n);e.default={after:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+"必须在"+s+"之后"},alpha_dash:function(t){return" "+t+"能够包含字母数字字符，包括破折号、下划线"},alpha_num:function(t){return t+" 只能包含字母数字字符."},alpha_spaces:function(t){return" "+t+" 只能包含字母字符，包括空格."},alpha:function(t){return" "+t+" 只能包含字母字符."},before:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 必须在"+s+" 之前."},between:function(t,e){var a=(0,r.default)(e,2),s=a[0],n=a[1];return" "+t+" 必须在"+s+" "+n+"之间."},confirmed:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 不能和"+s+"匹配."},date_between:function(t,e){var a=(0,r.default)(e,2),s=a[0],n=a[1];return" "+t+"必须在"+s+"和"+n+"之间."},date_format:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+"必须在在"+s+"格式中."},decimal:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["*"],a=(0,r.default)(e,1),s=a[0];return" "+t+" 必须是数字的而且能够包含"+("*"===s?"":s)+" 小数点."},digits:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 必须是数字，且精确到 "+s+"数"},dimensions:function(t,e){var a=(0,r.default)(e,2),s=a[0],n=a[1];return" "+t+"必须是 "+s+" 像素到 "+n+" 像素."},email:function(t){return" "+t+" 必须是有效的邮箱."},ext:function(t){return" "+t+" 必须是有效的文件."},image:function(t){return" "+t+" 必须是图片."},in:function(t){return" "+t+" 必须是一个有效值."},ip:function(t){return" "+t+" 必须是一个有效的地址."},max:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 不能大于"+s+"字符."},mimes:function(t){return" "+t+" 必须是有效的文件类型."},min:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 必须至少有 "+s+" 字符."},not_in:function(t){return" "+t+"必须是一个有效值."},numeric:function(t){return" "+t+" 只能包含数字字符."},regex:function(t){return" "+t+" 格式无效."},required:function(t){return t+" 是必须的."},size:function(t,e){var a=(0,r.default)(e,1),s=a[0];return" "+t+" 必须小于 "+s+" KB."},url:function(t){return" "+t+"不是有效的url."}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(150),r=s(n),i=a(148),o=s(i),l=a(147),c=s(l),d=a(149),u=s(d),f=a(155),v=s(f),m=a(154),p=s(m),_=a(153),h=s(_),b=a(152),g=s(b),C=a(151),x=s(C),y=[{path:"/",component:r.default},{path:"/login",auth:!1,component:r.default},{path:"/admin",component:o.default,children:[{path:"",component:u.default,name:"控制台",description:"控制台"},{path:"order",component:v.default,name:"订单"},{path:"order/:id",component:p.default,name:"订单详情"},{path:"category",component:g.default,name:"分类"},{path:"category/create",component:x.default,name:"创建新分类"},{path:"generator",component:h.default,name:"表单生成器"}]},{path:"*",component:c.default}];e.default=y},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(31),r=s(n),i=a(50),o=s(i),l=a(37),c=s(l);r.default.use(o.default),e.default=new o.default.Store({strict:!1,modules:{user:c.default}})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{callingAPI:!1,caller:this.$http}},methods:{callAPI:function(t,e,a){return this.callingAPI=!0,e=e||this.serverURI,this.caller({url:e,method:t,data:a})},logout:function(){this.$store.dispatch("SET_USER",null),this.$store.dispatch("SET_TOKEN",null),window.localStorage&&(window.localStorage.setItem("user",null),window.localStorage.setItem("token",null)),this.$router.push("/login")}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{menus:[{icon:"fa-file-o",text:"首页",class:"",href:"/admin"},{icon:"fa-dashboard",text:"服务管理",class:"",childMenus:[{href:"/admin",text:"首页"},{href:"/admin/order",text:"订单列表"}]},{icon:"fa-cubes",text:"订单管理",class:"",childMenus:[{href:"/admin/order",text:"产品信息"},{href:"/admin/order",text:"新建"}]},{icon:"fa-list",text:"商品分类管理",class:"",href:"/admin/category"},{icon:"fa-file-o",text:"日志管理",class:"",href:"/admin/log"}]}},mounted:function(){this.expandAllMenu()},watch:{$route:function(){this.checkMenuActived(this.$route.path)}},methods:{toggleMenu1:function(t){window.$("li.pageLink").removeClass("active"),t.toElement.parentElement.className="pageLink active"},expandAllMenu:function(){this.menus.forEach(function(t){t.childMenus})},toggleMenu:function(t){return t.href?(this.$router.push(t.href),this.menus.forEach(function(t){t.class=""}),void(t.class="active")):void(t.class=""===t.class?"active":"")},checkMenuActived:function(t){this.menus.forEach(function(e){e.childMenus&&e.href!==t&&(e.class="")})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NotFound"}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(146),r=s(n);e.default={name:"Dash",components:{Sidebar:r.default},data:function(){return{section:"Dash",me:"",error:"",api:{servers:{url:"",result:[]}}}},computed:{store:function(){return this.$parent.$store},state:function(){return this.store.state},callAPI:function(){return this.$parent.callAPI},demo:function(){return{displayName:"",avatar:"",email:"",randomCard:""}},year:function(){var t=new Date;return t.getFullYear()}},methods:{},mounted:function(){}}},function(t,e){"use strict";t.exports={data:function(){return{generateRandomNumbers:function(t,e,a){for(var s=[],n=0;n<t;n++)s.push(Math.floor(Math.random()*(e-a+1))+e);return s}}},computed:{coPilotNumbers:function(){return this.generateRandomNumbers(12,1e6,1e4)},personalNumbers:function(){return this.generateRandomNumbers(12,1e6,1e4)},isMobile:function(){return window.innerWidth<=800&&window.innerHeight<=600}},mounted:function(){}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(90),r=s(n),i=a(50),o=a(37);t.exports={name:"Login",data:function(t){return{section:"Login",loading:"",username:"admin",password:"123qwe",response:""}},methods:(0,r.default)({},(0,i.mapActions)([o.USER_SIGNIN]),{checkCreds:function(){var t=this,e=this;this.toggleLoading(),this.resetResponse(),this.$http.post("login",{email:this.username,password:this.password}).then(function(a){if(a.data){var s=a.data;if(s.error)if(s.error.name)switch(s.error.name){case"InvalidCredentialsError":e.response="Username/Password incorrect. Please try again.";break;default:e.response=s.error.name}else e.response=s.error;else console.log("data",s,s.data),s.data&&(t.USER_SIGNIN(s.data),t.$router.replace({path:"/admin"}))}else e.response="Did not receive a response. Please try again in a few minutes";e.toggleLoading()}).catch(function(t){console.log("Error",t),e.response="Server appears to be offline",e.toggleLoading()})},toggleLoading:function(){this.loading=""===this.loading?"loading":""},resetResponse:function(){this.response=""}})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{id:"",order:null}},mounted:function(){},methods:{return_to_index:function(){this.$router.push("/admin/order")}}}},function(t,e){"use strict";t.exports={name:"Tables",data:function(){return{categories:{},showAdd:!1,name:"",status:"",desc:""}},methods:{loadData:function(){var t=this;this.$http.get("goods/category").then(function(e){var a=e.data.data;console.log("result",a),t.categories=a})},add:function(){var t=this;this.$validator.validateAll().then(function(e){if(e){var a={name:t.name,status:t.status,desc:t.desc};t.$http.post("goods/category",a).then(function(t){var e=t.data;console.log("result",e)})}}).catch(function(t){window.toastr.error("请完整填写表单")})},edit:function(t){},remove:function(t){var e=this;this.$http.delete("goods/category/"+t.id).then(function(t){var a=t.data;console.log("result",a),e.loadData()})}},mounted:function(){this.loadData()}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(18),r=s(n);e.default={name:"create",data:function(){var t={name:"",display:"",type:"",validations:"",html_type:"",is_search:!0,is_inform:!0};return{field:t,fields:[t]}},mounted:function(){},methods:{addField:function(){this.fields.push(this.field)},addFieldTimestamp:function(){var t=(0,r.default)({},this.field,{type:"timestamp"});this.fields.push(t)},removeField:function(t){console.log("field",t),this.fields.length<=1&&alert("xxxx"),this.fields.splice(this.fields.indexOf(t),1)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{id:"",order:null}},mounted:function(){var t=this,e=this.$route.params.id;console.log("id",e),this.id=e,this.$http.get("business/orders/"+e).then(function(e){console.log("response",e),t.order=e.data.data,console.log("response.data",e.data.data),console.log("this.order.amount",t.order.amount)})},methods:{return_to_index:function(){this.$router.push("/admin/order")}}}},function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}var n=a(16),r=s(n);a(49),a(134),t.exports={name:"Tables",data:function(){return{table:null}},methods:{search:function(){this.table.draw()}},mounted:function(){this.$nextTick(function(){var t=this,e=(0,r.default)("#project-table").DataTable({serverSide:!0,ordering:!0,stateSave:!0,processing:!0,language:{url:"./static/datatable_zh_CN.json"},ajax:function(e,a,s){console.log("datatables data",e),(0,r.default)("#limit").val(e.length),(0,r.default)("#page").val(e.start/e.length+1);var n=(0,r.default)("#search").serialize();console.log("param",n),t.$http.get("business/orders?"+n).then(function(t){var e=t.data,s={};s.data=e.data,s.recordsTotal=e.total,s.recordsFiltered=e.total,a(s)})},columns:[{data:"id",name:"id"},{data:"serial",name:"serial"},{data:"amount",name:"amount"},{data:"user_id",name:"user_id"},{data:"created_at",name:"created_at"},{data:"id"}],columnDefs:[{targets:-1,data:"id",render:function(t,e,a){return"<button data-toggle='tooltip' title='点击查看详情' class='btn btn-info'>查看</button>"}}]});this.table=e,(0,r.default)("#project-table").on("click","button",function(){var a=e.row((0,r.default)(this).parents("tr")).data();t.$router.push("/admin/order/"+a.id)})})}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,a){var s,n;s=a(72);var r=a(162);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;s=a(73);var r=a(158);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(138),s=a(74);var r=a(160);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(139),s=a(75);var r=a(161);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(140),s=a(76);var r=a(164);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(136),s=a(77);var r=a(156);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;s=a(78);var r=a(163);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;s=a(79);var r=a(159);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(141),s=a(80);var r=a(165);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;s=a(81);var r=a(166);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e,a){var s,n;a(137),s=a(82);var r=a(157);n=s=s||{},"object"!=typeof s.default&&"function"!=typeof s.default||(n=s=s.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,t.exports=s},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-table"},[a("div",{staticClass:"row vertical-10p"},[a("div",{staticClass:"container"},[a("img",{staticClass:"center-block logo",attrs:{src:"/static/img/logo.png"}}),t._v(" "),a("div",{staticClass:"text-center col-md-4 col-sm-offset-4"},[t.response?a("div",{staticClass:"text-red"},[a("p",[t._v(t._s(t.response))])]):t._e(),t._v(" "),a("form",{staticClass:"ui form loginForm",on:{submit:function(e){e.preventDefault(),t.checkCreds(e)}}},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{name:"username",placeholder:"Username",type:"text"},domProps:{value:t._s(t.username)},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"input-group"},[t._m(1),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{name:"password",placeholder:"Password",type:"password"},domProps:{value:t._s(t.password)},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),a("button",{class:"btn btn-primary btn-lg "+t.loading,attrs:{type:"submit"}},[t._v("Submit")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"fa fa-envelope"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"input-group-addon"},[a("i",{staticClass:"fa fa-lock"})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"row center-block"},[a("h2"),t._v(" "),a("router-view"),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"box"},[t._m(0),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"dataTables_wrapper form-inline dt-bootstrap",attrs:{id:"example1_wrapper"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("form",{staticClass:"form-inline",attrs:{role:"form",id:"search"}},[t._m(1),t._v(" "),t._m(2),t._v(" "),a("button",{staticClass:"btn btn-primary but-large",attrs:{type:"button"},on:{click:t.search}},[t._v("查找")]),t._v(" "),a("input",{attrs:{type:"hidden",name:"limit",value:"",id:"limit"}}),t._v(" "),a("input",{attrs:{type:"hidden",name:"page",value:"1",id:"page"}})]),t._v(" "),a("hr"),t._v(" "),t._m(3)])])])])])])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[t._v("订单列表")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"exampleInputEmail2"}},[t._v("订单号")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail2",placeholder:"订单号",name:"serial"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[a("label",{staticClass:"sr-only",attrs:{for:"exampleInputPassword2"}},[t._v("Password")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputPassword2",placeholder:"姓名",name:"name"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"table table-condensed table-bordered table-striped",attrs:{id:"project-table"}},[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("订单号")]),t._v(" "),a("th",[t._v("金额")]),t._v(" "),a("th",[t._v("用户id")]),t._v(" "),a("th",[t._v("下单时间")]),t._v(" "),a("th",[t._v("操作")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"sidebar"}},[a("ul",{staticClass:"nav sidebar-menu"},t._l(t.menus,function(e){return a("li",{class:{treeview:!e.href},on:{click:function(a){t.toggleMenu(e)}}},[a("a",{attrs:{to:e.href,href:"void(0)"}},[a("i",{staticClass:"fa",class:e.icon}),a("span",[t._v(t._s(e.text))]),a("i",{directives:[{name:"show",rawName:"v-show",value:!e.href,expression:"!menu.href"}],staticClass:"fa fa-angle-left pull-right"})]),t._v(" "),a("transition",{attrs:{name:"slide"}},[a("ul",{staticClass:"treeview-menu menu-open",on:{click:function(t){t.stopPropagation()}}},t._l(e.childMenus,function(e){return a("router-link",{key:e.text,attrs:{to:e.href,tag:"li"}},[a("a",[a("i",{staticClass:"fa fa-reorder"}),a("span",[t._v(t._s(e.text))])])])}))])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"row center-block"},[a("h2"),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"box"},[t._m(0),t._v(" "),a("div",{staticClass:"box-body"},[a("table",{staticClass:"table table-condensed table-bordered table-striped",attrs:{id:"project-table"}},[t._m(1),t._v(" "),a("tbody",t._l(t.categories,function(e){return a("tr",[a("td",[t._v(t._s(e.id))]),t._v(" "),a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.sequence))]),t._v(" "),a("td",[t._v(t._s(e.status))]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-info",on:{click:function(a){t.edit(e)}}},[t._v("编辑")]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.remove(e)}}},[t._v("删除")])])])}))])])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"myModal",tabindex:"-1",role:"dialog"}},[a("form",{on:{submit:function(e){e.preventDefault(),t.add(e)}}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[t._v("分类名")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"validate",rawName:"v-validate",value:"required|min:2",expression:"'required|min:2'"}],staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:""},domProps:{value:t._s(t.name)},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("name"),expression:"errors.has('name')"}],staticClass:"help text-danger"},[t._v(t._s(t.errors.first("name")))])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("说明")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"form-control",attrs:{type:"text",name:"desc"},domProps:{value:t._s(t.desc)},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("状态")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.status,expression:"status"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",name:"status"},domProps:{value:t._s(t.status)},on:{input:function(e){e.target.composing||(t.status=e.target.value)}}})])]),t._v(" "),t._m(3)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[t._v("分类列表")]),t._v(" "),a("button",{staticClass:"btn btn-primary pull-right",attrs:{"data-toggle":"modal","data-target":"#myModal"}},[t._v("添加")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("分类名")]),t._v(" "),a("th",[t._v("优先级")]),t._v(" "),a("th",[t._v("是否启用")]),t._v(" "),a("th",[t._v("操作")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])]),t._v(" "),a("h4",{staticClass:"modal-title"},[t._v("新建分类")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[t._v("关闭")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("保存")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container container-table"},[a("div",{staticClass:"row vertical-10p"},[a("div",{staticClass:"container"},[a("img",{staticClass:"center-block logo",attrs:{src:"/static/img/logo.png"}}),t._v(" "),a("div",{staticClass:"text-center col-sm-6 col-sm-offset-3"},[a("h1",[t._v("You are lost.")]),t._v(" "),a("h4",[t._v("This page doesn't exist.")]),t._v(" "),a("router-link",{attrs:{to:"/"}},[t._v("Take me home.")])],1)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("header",{staticClass:"main-header"},[t._m(0),t._v(" "),a("nav",{staticClass:"navbar navbar-static-top",attrs:{role:"navigation"}},[t._m(1),t._v(" "),a("div",{staticClass:"navbar-custom-menu"},[a("ul",{staticClass:"nav navbar-nav"},[a("li",{staticClass:"dropdown user user-menu"},[a("a",{staticClass:"dropdown-toggle",attrs:{href:"javascript:;","data-toggle":"dropdown"}},[a("span",{staticClass:"hidden-xs"},[t._v(t._s(this.$store.state.user.username))])])])])])])]),t._v(" "),a("aside",{staticClass:"main-sidebar"},[a("section",{staticClass:"sidebar"},[a("sidebar")],1)]),t._v(" "),a("div",{staticClass:"content-wrapper"},[a("section",{staticClass:"content-header"},[a("h1",[t._v("\n         "+t._s(t.$route.name.toUpperCase())+"\n         "),a("small",[t._v(t._s(t.$route.meta.description))])]),t._v(" "),a("ol",{staticClass:"breadcrumb"},[t._m(2),t._v(" "),a("li",{staticClass:"active"},[t._v(t._s(t.$route.name.toUpperCase()))])])]),t._v(" "),a("router-view")],1),t._v(" "),a("footer",{staticClass:"main-footer"},[a("strong",[t._v("Copyright © "+t._s(t.year)+" "),a("a",{attrs:{href:"javascript:;"}},[t._v("CoPilot")]),t._v(".")]),t._v(" All rights reserved.\n   ")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"logo",attrs:{href:"/"}},[a("span",{staticClass:"logo-mini"},[a("img",{staticClass:"img-responsive center-block",attrs:{src:"/static/img/logo_sm.png",alt:"Logo"}})]),t._v(" "),a("div",{staticClass:"container logo-lg"},[a("div",{staticClass:"pull-left image"},[a("img",{staticClass:"img-responsive",attrs:{src:"/static/img/logo_sm.png",alt:"Logo"}})]),t._v(" "),a("div",{staticClass:"pull-left info"},[t._v("CoPilot")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"sidebar-toggle",attrs:{href:"javascript:;","data-toggle":"offcanvas",role:"button"}},[a("span",{staticClass:"sr-only"},[t._v("Toggle navigation")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{attrs:{href:"javascript:;"}},[a("i",{staticClass:"fa fa-home"}),t._v("Home")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("router-view"),t._v(" "),a("div",{attrs:{id:"app"}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("a",{staticClass:"btn btn-primary",on:{click:t.return_to_index}},[t._v("返回")]),t._v(" "),t.order?a("div",{staticClass:"row center-block"},[a("h2"),t._v(" "),t._m(0)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"})]),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"detail"})])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"alert alert-success alert-dismissible"},[a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-hidden":"true"}},[t._v("×")]),t._v(" "),a("h4",[a("i",{staticClass:"icon fa fa-check"}),t._v(" CoPilot is open source!")]),t._v("\n      Click on icon to check out it out on github. "),a("a",{attrs:{href:"https://github.com/misterGF/CoPilot",target:"_blank"}},[a("i",{staticClass:"fa fa-github fa-2x"})])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-aqua"},[a("i",{staticClass:"ion ion-ios-gear-outline"})]),t._v(" "),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("CPU Traffic")]),t._v(" "),a("span",{staticClass:"info-box-number"},[t._v("90"),a("small",[t._v("%")])])])])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-red"},[a("i",{staticClass:"fa fa-google-plus"})]),t._v(" "),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Likes")]),t._v(" "),a("span",{staticClass:"info-box-number"},[t._v("41,410")])])])]),t._v(" "),a("div",{staticClass:"clearfix visible-sm-block"}),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-green"},[a("i",{staticClass:"ion ion-ios-cart-outline"})]),t._v(" "),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("Sales")]),t._v(" "),a("span",{staticClass:"info-box-number"},[t._v("760")])])])]),t._v(" "),a("div",{staticClass:"col-md-3 col-sm-6 col-xs-12"},[a("div",{staticClass:"info-box"},[a("span",{staticClass:"info-box-icon bg-yellow"},[a("i",{staticClass:"ion ion-ios-people-outline"})]),t._v(" "),a("div",{staticClass:"info-box-content"},[a("span",{staticClass:"info-box-text"},[t._v("New Members")]),t._v(" "),a("span",{staticClass:"info-box-number"},[t._v("2,000")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("section",{staticClass:"content"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-body"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("table",{staticClass:"table table-condensed table-bordered table-striped"},[t._m(0),t._v(" "),a("tbody",t._l(t.fields,function(e){return a("tr",[a("td",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.name,expression:"field.name",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"display"},domProps:{value:t._s(e.name)},on:{input:function(t){t.target.composing||(e.name=t.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.display,expression:"field.display",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"display"},domProps:{value:t._s(e.display)},on:{input:function(t){t.target.composing||(e.display=t.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model.trim",value:e.html_type,expression:"field.html_type",modifiers:{trim:!0}}],staticClass:"form-control drdHtmlType",staticStyle:{width:"100%"},on:{change:function(t){e.html_type=Array.prototype.filter.call(t.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[a("option",{attrs:{value:"text"}},[t._v("Text")]),t._v(" "),a("option",{attrs:{value:"email"}},[t._v("Email")]),t._v(" "),a("option",{attrs:{value:"number"}},[t._v("Number")]),t._v(" "),a("option",{attrs:{value:"date"}},[t._v("Date")]),t._v(" "),a("option",{attrs:{value:"file"}},[t._v("File")]),t._v(" "),a("option",{attrs:{value:"password"}},[t._v("Password")]),t._v(" "),a("option",{attrs:{value:"select"}},[t._v("Select")]),t._v(" "),a("option",{attrs:{value:"radio"}},[t._v("Radio")]),t._v(" "),a("option",{attrs:{value:"checkbox"}},[t._v("Checkbox")]),t._v(" "),a("option",{attrs:{value:"textarea"}},[t._v("TextArea")])]),t._v(" "),a("input",{staticClass:"form-control htmlValue txtHtmlValue",staticStyle:{display:"none"},attrs:{type:"text",placeholder:""}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.validations,expression:"field.validations",modifiers:{trim:!0
}}],staticClass:"form-control",attrs:{type:"text",name:"display"},domProps:{value:t._s(e.validations)},on:{input:function(t){t.target.composing||(e.validations=t.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.type,expression:"field.type",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",name:"display"},domProps:{value:t._s(e.type)},on:{input:function(t){t.target.composing||(e.type=t.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),a("td",[a("div",{staticClass:"checkbox",staticStyle:{"text-align":"center"}},[a("label",{staticStyle:{"padding-left":"0px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_search,expression:"field.is_search"}],staticClass:"flat-red chkPrimary",staticStyle:{"margin-left":"0px!important"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.is_search)?t._i(e.is_search,null)>-1:e.is_search},on:{click:function(a){var s=e.is_search,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);r?o<0&&(e.is_search=s.concat(i)):o>-1&&(e.is_search=s.slice(0,o).concat(s.slice(o+1)))}else e.is_search=r}}})])])]),t._v(" "),a("td",[a("div",{staticClass:"checkbox",staticStyle:{"text-align":"center"}},[a("label",{staticStyle:{"padding-left":"0px"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.is_inform,expression:"field.is_inform"}],staticClass:"flat-red chkPrimary",staticStyle:{"margin-left":"0px!important"},attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.is_inform)?t._i(e.is_inform,null)>-1:e.is_inform},on:{click:function(a){var s=e.is_inform,n=a.target,r=!!n.checked;if(Array.isArray(s)){var i=null,o=t._i(s,i);r?o<0&&(e.is_inform=s.concat(i)):o>-1&&(e.is_inform=s.slice(0,o).concat(s.slice(o+1)))}else e.is_inform=r}}})])])]),t._v(" "),a("td",[a("button",{staticClass:"btn btn-info",on:{click:t.addField}},[t._v("add")]),t._v(" "),a("button",{staticClass:"btn btn-danger",on:{click:function(a){t.removeField(e)}}},[a("i",{staticClass:"remove fa fa-trash-o"})])])])}))]),t._v(" "),a("div",{staticClass:"form-inline col-md-12",staticStyle:{"padding-top":"10px"}},[a("div",{staticClass:"form-group chk-align",staticStyle:{"border-color":"transparent"}},[a("button",{staticClass:"btn btn-success btn-flat btn-green",attrs:{type:"button"},on:{click:t.addField}},[t._v(" Add Field\r\n                  ")])]),t._v(" "),a("div",{staticClass:"form-group chk-align",staticStyle:{"border-color":"transparent"}},[a("button",{staticClass:"btn btn-success btn-flat btn-green",attrs:{type:"button",id:"btnTimeStamps"},on:{click:t.addFieldTimestamp}},[t._v(" Add\r\n                      Timestamps\r\n                  ")])])]),t._v(" "),t._m(1)])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",{staticClass:"no-border"},[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Display")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Validations")]),t._v(" "),a("th",[t._v("DB Type")]),t._v(" "),a("th",{staticStyle:{width:"87px"}},[t._v("Searchable")]),t._v(" "),a("th",{staticStyle:{width:"65px"}},[t._v("In Form")]),t._v(" "),a("th")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-inline col-md-12",staticStyle:{padding:"15px 15px","text-align":"right"}},[a("div",{staticClass:"form-group",staticStyle:{"border-color":"transparent","padding-left":"10px"}},[a("button",{staticClass:"btn btn-flat btn-primary btn-blue",attrs:{type:"submit",id:"btnGenerate"}},[t._v("Generate\r\n                    ")])]),t._v(" "),a("div",{staticClass:"form-group",staticStyle:{"border-color":"transparent","padding-left":"10px"}},[a("button",{staticClass:"btn btn-default btn-flat",attrs:{type:"button",id:"btnReset","data-toggle":"modal","data-target":"#confirm-delete"}},[t._v(" Reset\r\n                    ")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("a",{staticClass:"btn btn-primary",on:{click:t.return_to_index}},[t._v("返回")]),t._v(" "),t.order?a("div",{staticClass:"row center-block"},[a("h2"),t._v(" "),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"box"},[a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[t._v(t._s(t.id))])]),t._v(" "),a("div",{staticClass:"box-body"},[a("div",{staticClass:"detail"},[t._v("\n            金额: "+t._s(t.order.amount)+"\n            订单号: "+t._s(t.order.serial)+"\n          ")])])]),t._v(" "),a("div",{staticClass:"box"},[t._m(0),t._v(" "),a("div",{staticClass:"box-body"},[t.order.order_delivery?a("div",{staticClass:"order"},[t._v("\n            shipping_name: "+t._s(t.order.order_delivery.shipping_name)+"\n            详细地址: "+t._s(t.order.order_delivery.province)+" "+t._s(t.order.order_delivery.city)+" "+t._s(t.order.order_delivery.district)+" "+t._s(t.order.order_delivery.town)+" "+t._s(t.order.order_delivery.address)+"\n            "),a("hr"),t._v("\n            物流状态:"+t._s(t.order.order_delivery.status_mapping)+"\n          ")]):t._e()])])])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box-header"},[a("h3",{staticClass:"box-title"},[t._v("收货地址")])])}]}}]);
//# sourceMappingURL=app.78f01703882de5c7ca03.js.map