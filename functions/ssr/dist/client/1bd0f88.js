(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{623:function(t,e,o){"use strict";o.r(e);o(20),o(102);var r=o(1),n=o(300),d=o.n(n),c=(o(303),r.default.extend({data:function(){return{id:0,text:"",done:0,memo:"",registerDate:0,finishDate:0}},computed:{},created:function(){var t=this;this.id=Number(this.$route.params.id);var e=this.$accessor.todo.todos.find((function(e){return e.id==t.id}));e&&(this.id=e.id,this.text=e.text,this.done=e.done,this.memo=e.memo,this.registerDate=e.registerDate,this.finishDate=e.finishDate)},methods:{update:function(){var t={id:this.id,text:this.text,done:this.done,memo:this.memo,registerDate:this.registerDate,finishDate:Date.now(),userId:this.$accessor.user.id};this.$accessor.todo.updateTodo(t),alert("編集が完了しました"),this.$router.push("/todo")},ViewRegisterDate:function(t){return console.log("mesoddo"),d()(t).locale("ja").format("YYYY/MM/DD(dd) HH:mm:ss")},ViewUpdateDate:function(t){return d()(t).locale("ja").format("YYYY/MM/DD(dd) HH:mm:ss")}}})),l=o(25),m=o(89),h=o.n(m),v=o(463),f=o(217),D=o(502),x=o(526),_=o(602),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("div",[t._v("タスク詳細ページ。 id:"+t._s(t.id))]),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-text-field",{attrs:{placeholder:"タスク",outlined:"",counter:100},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("v-textarea",{attrs:{label:"メモ",outlined:"",counter:1e3},model:{value:t.memo,callback:function(e){t.memo=e},expression:"memo"}}),t._v(" "),o("v-btn",{attrs:{depressed:"",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.update()}}},[t._v("保存")])],1),t._v(" "),o("v-col",{attrs:{cols:"12"}},[o("div",[t._v("登録日時："+t._s(t.ViewRegisterDate(this.registerDate)))]),t._v(" "),o("div",[t._v("更新日時："+t._s(t.ViewUpdateDate(this.finishDate)))])])],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VApp:v.a,VBtn:f.a,VCol:D.a,VTextField:x.a,VTextarea:_.a})}}]);