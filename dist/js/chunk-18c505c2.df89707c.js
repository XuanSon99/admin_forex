(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18c505c2"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return s.reduce((function(n,a){return n[t+Object(c["D"])(a)]=e(),n}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),m=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},p=d("justify",(function(){return{type:String,default:null,validator:m}})),v=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=d("alignContent",(function(){return{type:String,default:null,validator:v}})),g={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(b)},h={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var a=h[t];if(null!=n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return a+="-".concat(n),a.toLowerCase()}}var x=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:m}},p),{},{alignContent:{type:String,default:null,validator:v}},b),render:function(t,e){var n=e.props,i=e.data,r=e.children,c="";for(var s in n)c+=String(n[s]);var l=x.get(c);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var a=n[t],i=y(e,t,a);i&&l.push(i)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),x.set(c,l)}(),t(n.tag,Object(o["a"])(i,{staticClass:"row",class:l}),r)}})},"2ff2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"item secondary"},[n("v-card-title",[n("v-icon",{staticClass:"mr-2",attrs:{color:"primary",large:""}},[t._v("mdi-account-circle-outline")]),t._v(" "+t._s(t.$route.params.id)+" "+t._s(t.agency?"| Đại lý":"")+" "),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",i,!1),a),[t._v(" Thêm mới ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Số dư",type:"number","prepend-inner-icon":"mdi-wallet"},model:{value:t.editedItem.balance,callback:function(e){t.$set(t.editedItem,"balance",e)},expression:"editedItem.balance"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Lợi nhuận",type:"number","prepend-inner-icon":"mdi-currency-usd"},model:{value:t.editedItem.profit,callback:function(e){t.$set(t.editedItem,"profit",e)},expression:"editedItem.profit"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Hoa hồng",type:"number","prepend-inner-icon":"mdi-hand-coin-outline"},model:{value:t.editedItem.commission,callback:function(e){t.$set(t.editedItem,"commission",e)},expression:"editedItem.commission"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Hủy ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Xác nhận ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Xác nhận xóa ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Hủy ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v(" Xác nhận ")]),n("v-spacer")],1)],1)],1)],1),n("v-data-table",{attrs:{headers:t.headers,items:t.desserts,search:t.search},scopedSlots:t._u([{key:"item.actions",fn:function(e){var a=e.item;return[n("v-btn",{staticClass:"info mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" Cập nhật ")]),n("v-btn",{staticClass:"error",attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v("Xóa")])]}},{key:"item.brokerage_money",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.brokerageMoney(n))+" ")]}},{key:"item.profit_with_fee",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.profitWithFee(n))+" ")]}}],null,!0)})],1)])},i=[],r=(n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("b680"),{data:function(){return{menu:!1,modal:!1,search:"",dialog:!1,dialogDelete:!1,desserts:[],editedIndex:-1,headers:[{text:"ID",value:"id"},{text:"Số dư",value:"balance"},{text:"Lợi nhuận",value:"profit"},{text:"LN sau phí",value:"profit_with_fee"},{text:"Hoa hồng",value:"commission"},{text:"Tiền giới thiệu",value:"brokerage_money"},{text:"Thao tác",value:"actions",sortable:!1}],editedItem:{profit:"",balance:"",commission:""},defaultItem:{profit:"",balance:"",commission:""},agency:0}},computed:{formTitle:function(){return-1===this.editedIndex?"Thêm mới":"Cập nhật"}},watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},mounted:function(){this.getData()},methods:{profitWithFee:function(t){return this.agency?t.profit-.1*t.profit:t.profit-.2*t.profit},brokerageMoney:function(t){return this.agency?t.brokerage_money+(t.profit/5+t.commission)/2:t.brokerage_money},getData:function(){var t=this;this.CallAPI("get","customer/"+this.$route.params.id,{},(function(e){t.desserts=e.data.data,t.agency=e.data.agency}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t=this;this.closeDelete(),this.CallAPI("delete","profit/"+this.desserts[this.editedIndex].id,{},(function(e){t.$toast.success("Xóa thành công"),t.getData()}),(function(t){}))},formatMoney:function(t){return t?String(parseFloat(t).toFixed(0)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):0},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;if(this.editedItem.profit&&this.editedItem.commission){var e={account:this.$route.params.id,profit:this.editedItem.profit,balance:this.editedItem.balance,commission:this.editedItem.commission};this.editedIndex>-1?this.CallAPI("put","profit/"+this.desserts[this.editedIndex].id,e,(function(e){t.$toast.success("Sửa thành công"),t.getData(),t.close()}),(function(e){t.$toast.error("Đã xảy ra lỗi")})):this.CallAPI("post","profit",e,(function(e){t.$toast.success("Thêm thành công"),t.getData(),t.close()}),(function(e){t.$toast.error(e.response.data.message[0])}))}else this.$toast.error("Nhập đủ thông tin")}}}),o=r,c=n("2877"),s=n("6544"),l=n.n(s),d=n("8336"),u=n("b0af"),f=n("99d9"),m=n("62ad"),p=n("a523"),v=n("8fea"),b=n("169a"),g=n("132d"),h=n("0fd9"),y=n("2fa4"),x=n("8654"),I=Object(c["a"])(o,a,i,!1,null,null,null);e["default"]=I.exports;l()(I,{VBtn:d["a"],VCard:u["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:m["a"],VContainer:p["a"],VDataTable:v["a"],VDialog:b["a"],VIcon:g["a"],VRow:h["a"],VSpacer:y["a"],VTextField:x["a"]})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";var a=n("ade3"),i=n("5530"),r=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["offset"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return s.reduce((function(t,e){return t["order"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function m(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var i=e.replace(t,"");a+="-".concat(i)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var p=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,i=e.data,r=e.children,c=(e.parent,"");for(var s in n)c+=String(n[s]);var l=p.get(c);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=n[t],i=m(e,t,a);i&&l.push(i)}));var i=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!i||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(c,l)}(),t(n.tag,Object(o["a"])(i,{class:l}),r)}})},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function i(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,i=n.data,r=n.children;i.staticClass="".concat(t," ").concat(i.staticClass||"").trim();var o=i.attrs;if(o){i.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(i.staticClass+=" ".concat(c.join(" ")))}return a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),e(a.tag,i,r)}})}var r=n("d9f7");e["a"]=i("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,i=e.data,o=e.children,c=i.attrs;return c&&(i.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(i.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(i.domProps=i.domProps||{},i.domProps.id=a.id),t(a.tag,Object(r["a"])(i,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})}}]);