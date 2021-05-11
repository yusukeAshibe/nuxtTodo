exports.ids = [4];
exports.modules = {

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=template&id=06f1297a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{on:{"click":_vm.googleLogin}},[_vm._ssrNode("googleでログイン")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Home.vue?vue&type=template&id=06f1297a&

// EXTERNAL MODULE: ./plugins/firebase.ts
var firebase = __webpack_require__(46);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Home.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var Homevue_type_script_lang_js_ = ({
  name: "home",
  methods: {
    googleLogin: function () {
      firebase["a" /* default */].auth().signInWithRedirect(new firebase["a" /* default */].auth.GoogleAuthProvider());
    }
  }
});
// CONCATENATED MODULE: ./components/Home.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Homevue_type_script_lang_js_ = (Homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Home.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "35dbde06"
  
)

/* harmony default export */ var Home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=home.js.map