(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-190f4f4a"],{"0fd9":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),i=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function d(t,e){return s.reduce((function(n,a){return n[t+Object(c["D"])(a)]=e(),n}),{})}var u=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=d("align",(function(){return{type:String,default:null,validator:u}})),h=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},m=d("justify",(function(){return{type:String,default:null,validator:h}})),b=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=d("alignContent",(function(){return{type:String,default:null,validator:b}})),v={align:Object.keys(f),justify:Object.keys(m),alignContent:Object.keys(g)},p={align:"align",justify:"justify",alignContent:"align-content"};function x(t,e,n){var a=p[t];if(null!=n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return a+="-".concat(n),a.toLowerCase()}}var y=new Map;e["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u}},f),{},{justify:{type:String,default:null,validator:h}},m),{},{alignContent:{type:String,default:null,validator:b}},g),render:function(t,e){var n=e.props,r=e.data,i=e.children,c="";for(var s in n)c+=String(n[s]);var l=y.get(c);return l||function(){var t,e;for(e in l=[],v)v[e].forEach((function(t){var a=n[t],r=x(e,t,a);r&&l.push(r)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(a["a"])(t,"align-".concat(n.align),n.align),Object(a["a"])(t,"justify-".concat(n.justify),n.justify),Object(a["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),y.set(c,l)}(),t(n.tag,Object(o["a"])(r,{staticClass:"row",class:l}),i)}})},1511:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"item secondary"},[n("v-data-table",{attrs:{headers:t.headers,items:t.desserts,search:t.search},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-spacer"),n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"info",dark:""},on:{click:t.updateMoney}},[t._v(" Cập nhật hoa hồng ")]),n("v-btn",{staticClass:"mb-2 mr-2",attrs:{color:"orange",dark:""},on:{click:t.exportReport}},[t._v(" Xuất file ")]),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mb-2",attrs:{color:"primary",dark:""}},"v-btn",r,!1),a),[t._v(" Thêm mới ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Họ tên"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Số tài khoản"},model:{value:t.editedItem.account,callback:function(e){t.$set(t.editedItem,"account",e)},expression:"editedItem.account"}})],1)],1),n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Người giới thiệu"},model:{value:t.editedItem.refferal,callback:function(e){t.$set(t.editedItem,"refferal",e)},expression:"editedItem.refferal"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v(" Hủy ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v(" Xác nhận ")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialogDelete,callback:function(e){t.dialogDelete=e},expression:"dialogDelete"}},[n("v-card",[n("v-card-title",{staticClass:"headline"},[t._v(" Xác nhận xóa ")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeDelete}},[t._v(" Hủy ")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.deleteItemConfirm}},[t._v(" Xác nhận ")]),n("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-btn",{staticClass:"primary mr-2",attrs:{small:""},on:{click:function(e){return t.$router.push("/user/"+a.account)}}},[t._v(" Chi tiết ")]),n("v-btn",{staticClass:"info mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" Cập nhật ")]),n("v-btn",{staticClass:"error",attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v("Xóa")])]}},{key:"item.brokerage_money",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.brokerageMoney(n))+" ")]}},{key:"item.balance",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.formatPrice(n.balance))+" ")]}},{key:"item.profit",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.formatPrice(n.profit))+" ")]}},{key:"item.commission",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.formatPrice(n.commission))+" ")]}}],null,!0)})],1)])},r=[],i=n("3835"),o=n("b85c"),c=n("5530"),s=(n("d3b7"),n("ddb0"),n("99af"),n("b0c0"),n("ac1f"),n("841c"),n("5319"),n("25f0"),n("b680"),n("2f62")),l={data:function(){return{search:"",dialog:!1,dialogDelete:!1,desserts:[],editedIndex:-1,headers:[{text:"Họ tên",value:"name"},{text:"Số tài khoản",value:"account"},{text:"Người giới thiệu",value:"refferal"},{text:"Số dư",value:"balance"},{text:"Lợi nhuận",value:"profit"},{text:"Commission",value:"commission"},{text:"Hoa hồng",value:"brokerage_money"},{text:"Thao tác",value:"actions",sortable:!1}],editedItem:{name:"",account:"",refferal:""},defaultItem:{name:"",account:"",refferal:""},excel_htmls:""}},computed:Object(c["a"])(Object(c["a"])({},Object(s["b"])(["account","user_page"])),{},{formTitle:function(){return-1===this.editedIndex?"Thêm mới":"Cập nhật"}}),watch:{dialog:function(t){t||this.close()},dialogDelete:function(t){t||this.closeDelete()}},mounted:function(){this.getData()},methods:{brokerageMoney:function(t){return t.brokerage_money?t.agency?this.formatPrice(t.brokerage_money+(t.profit-t.commission)/10+t.commission/4):this.formatPrice(t.brokerage_money):0},updateMoney:function(){var t=this;this.CallAPI("get","update-money",{},(function(e){t.getData(),t.$toast.success("Cập nhật hoa hồng thành công")}))},getData:function(){var t=this;this.CallAPI("get","customer",{},(function(e){t.desserts=e.data,t.excel_htmls='\n            <tr>\n              <td colspan="8" style="text-align: center"><b>THỐNG KÊ HOA HỒNG</b></td>\n            </tr>\n            <tr>\n                <th style="width: 60px">STT</th>\n                <th style="width: 120px">Họ tên</th>\n                <th style="width: 80px">Số tài khoản</th>\n                <th style="width: 120px">Người giới thiệu</th>\n                <th style="width: 80px">Số dư</th>\n                <th style="width: 80px">Lợi nhuận</th>\n                <th style="width: 100px">Commission</th>\n                <th style="width: 100px">Tiền hoa hồng</th>\n            </tr>\n        ';var n,a=Object(o["a"])(e.data.entries());try{for(a.s();!(n=a.n()).done;){var r=Object(i["a"])(n.value,2),c=r[0],s=r[1];t.excel_htmls+='\n                <tr>\n                    <td style="text-align: center">'.concat(c+1,'</td>\n                    <td style="text-align: center">').concat(s.name,'</td>\n                    <td style="text-align: center">').concat(s.account,'</td>\n                    <td style="text-align: center">').concat(s.refferal,'</td>\n                    <td style="text-align: center">').concat(t.formatPrice(s.balance),'</td>\n                    <td style="text-align: center">').concat(t.formatPrice(s.profit),'</td>\n                    <td style="text-align: center">').concat(t.formatPrice(s.commission),'</td>\n                    <td style="text-align: center">').concat(t.brokerageMoney(s),"</td>\n                </tr>\n            "),t.brokerageMoney(s)}}catch(l){a.e(l)}finally{a.f()}}))},searchHandle:function(){var t=this;this.CallAPI("get","search/customers?query="+this.search,{},(function(e){t.desserts=e.data}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialogDelete=!0},deleteItemConfirm:function(){var t=this;this.closeDelete(),this.CallAPI("delete","customer/"+this.desserts[this.editedIndex].account,{},(function(e){t.$toast.success("Xóa thành công"),t.getData()}),(function(t){}))},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},closeDelete:function(){var t=this;this.dialogDelete=!1,this.$nextTick((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}))},save:function(){var t=this;if(this.editedItem.account){var e={name:this.editedItem.name,account:this.editedItem.account,refferal:this.editedItem.refferal,agency:"IB56389360"==this.editedItem.refferal?1:0};this.editedIndex>-1?this.CallAPI("put","customer/"+this.desserts[this.editedIndex].account,e,(function(e){t.$toast.success("Sửa thành công"),t.getData(),t.close()}),(function(e){t.$toast.error("Đã xảy ra lỗi")})):this.CallAPI("post","customer",e,(function(e){t.$toast.success("Thêm thành công"),t.getData(),t.close()}),(function(e){t.$toast.error(e.response.data.message[0])}))}else this.$toast.error("Nhập đủ thông tin")},formatPrice:function(t){return t?String(parseFloat(t).toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",").replace(".00",""):0},exportReport:function(){var t="data:application/vnd.ms-excel;base64,",e='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">\x3c!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--\x3e</head><body><table border>{table}</table></body></html>',n=function(t){return window.btoa(unescape(encodeURIComponent(t)))},a=function(t,e){return t.replace(/{(\w+)}/g,(function(t,n){return e[n]}))},r={worksheet:"Worksheet",table:this.excel_htmls},i=document.createElement("a");i.download="Thống kê hoa hồng ngày "+(new Date).toLocaleDateString("en-GB")+".xls",i.href=t+n(a(e,r)),i.click()}}},d=l,u=n("2877"),f=n("6544"),h=n.n(f),m=n("8336"),b=n("b0af"),g=n("99d9"),v=n("62ad"),p=n("a523"),x=n("8fea"),y=n("169a"),k=n("0fd9"),j=n("2fa4"),C=n("8654"),I=n("71d9"),O=Object(u["a"])(d,a,r,!1,null,null,null);e["default"]=O.exports;h()(O,{VBtn:m["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VCardTitle:g["c"],VCol:v["a"],VContainer:p["a"],VDataTable:x["a"],VDialog:y["a"],VRow:k["a"],VSpacer:j["a"],VTextField:C["a"],VToolbar:I["a"]})},"4b85":function(t,e,n){},"62ad":function(t,e,n){"use strict";var a=n("ade3"),r=n("5530"),i=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["offset"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return s.reduce((function(t,e){return t["order"+Object(c["D"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function h(t,e,n){var a=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");a+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(a+="-".concat(n),a.toLowerCase()):a.toLowerCase()}}var m=new Map;e["a"]=i["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])(Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,r=e.data,i=e.children,c=(e.parent,"");for(var s in n)c+=String(n[s]);var l=m.get(c);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var a=n[t],r=h(e,t,a);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!n.cols},Object(a["a"])(t,"col-".concat(n.cols),n.cols),Object(a["a"])(t,"offset-".concat(n.offset),n.offset),Object(a["a"])(t,"order-".concat(n.order),n.order),Object(a["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(c,l)}(),t(n.tag,Object(o["a"])(r,{class:l}),i)}})},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function r(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,r=n.data,i=n.children;r.staticClass="".concat(t," ").concat(r.staticClass||"").trim();var o=r.attrs;if(o){r.attrs={};var c=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}));c.length&&(r.staticClass+=" ".concat(c.join(" ")))}return a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),e(a.tag,r,i)}})}var i=n("d9f7");e["a"]=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,r=e.data,o=e.children,c=r.attrs;return c&&(r.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var e=c[t];return t.startsWith("data-")?(r.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(r.domProps=r.domProps||{},r.domProps.id=a.id),t(a.tag,Object(i["a"])(r,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),o)}})}}]);