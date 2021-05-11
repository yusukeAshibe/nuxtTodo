exports.ids = [9];
exports.modules = {

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VDivider_VDivider_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
// Styles
 // Mixins


/* harmony default export */ __webpack_exports__["a"] = (_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].extend({
  name: 'v-divider',
  props: {
    inset: Boolean,
    vertical: Boolean
  },

  render(h) {
    // WAI-ARIA attributes
    let orientation;

    if (!this.$attrs.role || this.$attrs.role === 'separator') {
      orientation = this.vertical ? 'vertical' : 'horizontal';
    }

    return h('hr', {
      class: {
        'v-divider': true,
        'v-divider--inset': this.inset,
        'v-divider--vertical': this.vertical,
        ...this.themeClasses
      },
      attrs: {
        role: 'separator',
        'aria-orientation': orientation,
        ...this.$attrs
      },
      on: this.$listeners
    });
  }

}));

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(232);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(5).default("7132a15d", content, true)

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav.vue?vue&type=template&id=30b4c5db&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-navigation-drawer',{attrs:{"absolute":"","temporary":""},model:{value:(_vm.$store.state.drawer),callback:function ($$v) {_vm.$set(_vm.$store.state, "drawer", $$v)},expression:"$store.state.drawer"}},[_c('v-list',[_c('v-list-item',[_c('v-list-item-avatar',[(_vm.photoURL)?_c('img',{attrs:{"src":_vm.photoURL}}):_vm._e()]),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(_vm.userName))])],1)],1),_vm._v(" "),_c('v-divider'),_vm._v(" "),_vm._l((_vm.items),function(item,index){return _c('v-list-item',{key:index,attrs:{"to":item.link}},[_c('v-list-item-icon',[_c('v-icon',[_vm._v(_vm._s(item.icon))])],1),_vm._v(" "),_c('v-list-item-content',[_c('v-list-item-title',[_vm._v(_vm._s(item.title))])],1)],1)})],2)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/SideNav.vue?vue&type=template&id=30b4c5db&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(28);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SideNavvue_type_script_lang_js_ = ({
  data() {
    return {
      items: [{
        title: 'ホーム',
        icon: 'mdi-home',
        link: {
          name: 'home'
        }
      }, {
        title: '連絡先一覧',
        icon: 'mdi-menu',
        link: {
          name: 'addresses'
        }
      }]
    };
  },

  computed: { ...Object(external_vuex_["mapGetters"])(['userName', 'photoURL'])
  }
});
// CONCATENATED MODULE: ./components/SideNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SideNavvue_type_script_lang_js_ = (SideNavvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(21);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VDivider/VDivider.js
var VDivider = __webpack_require__(225);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VIcon/VIcon.js
var VIcon = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VList.js
var VList = __webpack_require__(53);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItem.js
var VListItem = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemAvatar.js + 2 modules
var VListItemAvatar = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/index.js + 2 modules
var components_VList = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VList/VListItemIcon.js
var VListItemIcon = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VNavigationDrawer/VNavigationDrawer.js + 4 modules
var VNavigationDrawer = __webpack_require__(205);

// CONCATENATED MODULE: ./components/SideNav.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SideNavvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2002961e"
  
)

/* harmony default export */ var SideNav = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */










installComponents_default()(component, {VDivider: VDivider["a" /* default */],VIcon: VIcon["a" /* default */],VList: VList["a" /* default */],VListItem: VListItem["a" /* default */],VListItemAvatar: VListItemAvatar["a" /* default */],VListItemContent: components_VList["a" /* VListItemContent */],VListItemIcon: VListItemIcon["a" /* default */],VListItemTitle: components_VList["b" /* VListItemTitle */],VNavigationDrawer: VNavigationDrawer["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=side-nav.js.map