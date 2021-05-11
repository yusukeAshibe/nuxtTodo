exports.ids = [21];
exports.modules = {

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(312);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("6d498bcb", content, true, context)
};

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_628b9abe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(296);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_628b9abe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_628b9abe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_628b9abe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_628b9abe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container[data-v-628b9abe]{margin:0 auto;min-height:100vh;justify-content:center;align-items:center;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=template&id=628b9abe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div data-v-628b9abe><h1 class=\"title\" data-v-628b9abe>Login Page</h1> <div data-v-628b9abe><button class=\"button--grey\" data-v-628b9abe>\n        Googleでログイン\n      </button></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/login.vue?vue&type=template&id=628b9abe&scoped=true&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "firebase"
var external_firebase_ = __webpack_require__(195);
var external_firebase_default = /*#__PURE__*/__webpack_require__.n(external_firebase_);

// CONCATENATED MODULE: ./services/auth.ts
 // enum altanative

const Provider = {
  Google: 'GOOGLE',
  Twitter: 'TWITTER'
};
class auth_Auth {
  constructor($accessor, $config) {
    this.$accessor = $accessor;

    if (external_firebase_default.a.apps.length == 0) {
      const config = {
        apiKey: $config.apiKey,
        authDomain: $config.authDomain
      };
      external_firebase_default.a.initializeApp(config);
    }
  }

  async login(provider) {
    const response = await (provider => {
      switch (provider) {
        case "GOOGLE":
          return external_firebase_default.a.auth().signInWithPopup(new external_firebase_default.a.auth.GoogleAuthProvider());

        case "TWITTER":
          return external_firebase_default.a.auth().signInWithPopup(new external_firebase_default.a.auth.TwitterAuthProvider());
      }
    })(provider);
    const user = await response.user;
    const token = await (user === null || user === void 0 ? void 0 : user.getIdToken());
    this.$accessor.user.store({
      id: user.uid,
      name: (user === null || user === void 0 ? void 0 : user.displayName) ? user === null || user === void 0 ? void 0 : user.displayName : "",
      pic: (user === null || user === void 0 ? void 0 : user.photoURL) ? user === null || user === void 0 ? void 0 : user.photoURL : "",
      token: token
    });
  }

  async logout() {
    external_firebase_default.a.auth().signOut().then(() => {
      this.$accessor.user.drop();
    });
  }

}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/login.vue?vue&type=script&lang=ts&


/* harmony default export */ var loginvue_type_script_lang_ts_ = (external_vue_default.a.extend({
  data() {
    return {};
  },

  async asyncData() {},

  methods: {
    async authGoogle() {
      const auth = new auth_Auth(this.$accessor, {
        apiKey: "AIzaSyDg5eHzBW1KMBLlBn1Hqd3nVAGqSuwt7n8",
        authDomain: "todo-ca05a.firebaseapp.com"
      });
      await auth.login(Provider.Google);
      this.$router.push("/");
    }

  }
}));
// CONCATENATED MODULE: ./pages/login.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_loginvue_type_script_lang_ts_ = (loginvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/login.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(311)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_loginvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "628b9abe",
  "2cf4fa49"
  
)

/* harmony default export */ var login = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=login.js.map