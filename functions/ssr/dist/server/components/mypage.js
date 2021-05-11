exports.ids = [7];
exports.modules = {

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mypage.vue?vue&type=template&id=e6204ad8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"mypage"}},[_vm._ssrNode("<span>"+_vm._ssrEscape("こんにちは, "+_vm._s(_vm.user.displayName)+"さん")+"</span> <button>ログアウト</button>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Mypage.vue?vue&type=template&id=e6204ad8&

// EXTERNAL MODULE: ./plugins/firebase.ts
var firebase = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Mypage.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Mypagevue_type_script_lang_js_ = ({
  name: "mypage",
  props: ["user"],
  methods: {
    logout: function () {
      firebase["a" /* default */].auth().signOut();
    }
  }
});
// CONCATENATED MODULE: ./components/Mypage.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Mypagevue_type_script_lang_js_ = (Mypagevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Mypage.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Mypagevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "3d2c9ed9"
  
)

/* harmony default export */ var Mypage = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mypage.js.map