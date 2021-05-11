exports.ids = [10];
exports.modules = {

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
// Mixins

 // Utilities



/* harmony default export */ __webpack_exports__["a"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__[/* factory */ "a"])('expansionPanels', 'v-expansion-panel', 'v-expansion-panels'), Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_1__[/* provide */ "b"])('expansionPanel', true)
/* @vue/component */
).extend({
  name: 'v-expansion-panel',
  props: {
    disabled: Boolean,
    readonly: Boolean
  },

  data() {
    return {
      content: null,
      header: null,
      nextIsActive: false
    };
  },

  computed: {
    classes() {
      return {
        'v-expansion-panel--active': this.isActive,
        'v-expansion-panel--next-active': this.nextIsActive,
        'v-expansion-panel--disabled': this.isDisabled,
        ...this.groupClasses
      };
    },

    isDisabled() {
      return this.expansionPanels.disabled || this.disabled;
    },

    isReadonly() {
      return this.expansionPanels.readonly || this.readonly;
    }

  },
  methods: {
    registerContent(vm) {
      this.content = vm;
    },

    unregisterContent() {
      this.content = null;
    },

    registerHeader(vm) {
      this.header = vm;
      vm.$on('click', this.onClick);
    },

    unregisterHeader() {
      this.header = null;
    },

    onClick(e) {
      if (e.detail) this.header.$el.blur();
      this.$emit('click', e);
      this.isReadonly || this.isDisabled || this.toggle();
    },

    toggle() {
      /* istanbul ignore else */
      if (this.content) this.content.isBooted = true;
      this.$nextTick(() => this.$emit('change'));
    }

  },

  render(h) {
    return h('div', {
      staticClass: 'v-expansion-panel',
      class: this.classes,
      attrs: {
        'aria-expanded': String(this.isActive)
      }
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_2__[/* getSlot */ "r"])(this));
  }

}));

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _mixins_bootable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
 // Mixins



 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_mixins_bootable__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-content', 'v-expansion-panel'));
/* @vue/component */

/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-content',
  computed: {
    isActive() {
      return this.expansionPanel.isActive;
    }

  },

  created() {
    this.expansionPanel.registerContent(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterContent();
  },

  render(h) {
    return h(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VExpandTransition */ "a"], this.showLazyContent(() => [h('div', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-content',
      directives: [{
        name: 'show',
        value: this.isActive
      }]
    }), [h('div', {
      class: 'v-expansion-panel-content__wrap'
    }, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__[/* getSlot */ "r"])(this))])]));
  }

}));

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony import */ var _mixins_colorable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _mixins_registrable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
/* harmony import */ var _directives_ripple__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1);
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
// Components

 // Mixins


 // Directives

 // Utilities



const baseMixins = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(_mixins_colorable__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_mixins_registrable__WEBPACK_IMPORTED_MODULE_3__[/* inject */ "a"])('expansionPanel', 'v-expansion-panel-header', 'v-expansion-panel'));
/* harmony default export */ __webpack_exports__["a"] = (baseMixins.extend().extend({
  name: 'v-expansion-panel-header',
  directives: {
    ripple: _directives_ripple__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  },
  props: {
    disableIconRotate: Boolean,
    expandIcon: {
      type: String,
      default: '$expand'
    },
    hideActions: Boolean,
    ripple: {
      type: [Boolean, Object],
      default: false
    }
  },
  data: () => ({
    hasMousedown: false
  }),
  computed: {
    classes() {
      return {
        'v-expansion-panel-header--active': this.isActive,
        'v-expansion-panel-header--mousedown': this.hasMousedown
      };
    },

    isActive() {
      return this.expansionPanel.isActive;
    },

    isDisabled() {
      return this.expansionPanel.isDisabled;
    },

    isReadonly() {
      return this.expansionPanel.isReadonly;
    }

  },

  created() {
    this.expansionPanel.registerHeader(this);
  },

  beforeDestroy() {
    this.expansionPanel.unregisterHeader();
  },

  methods: {
    onClick(e) {
      this.$emit('click', e);
    },

    genIcon() {
      const icon = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "r"])(this, 'actions') || [this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], this.expandIcon)];
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_0__[/* VFadeTransition */ "c"], [this.$createElement('div', {
        staticClass: 'v-expansion-panel-header__icon',
        class: {
          'v-expansion-panel-header__icon--disable-rotate': this.disableIconRotate
        },
        directives: [{
          name: 'show',
          value: !this.isDisabled
        }]
      }, icon)]);
    }

  },

  render(h) {
    return h('button', this.setBackgroundColor(this.color, {
      staticClass: 'v-expansion-panel-header',
      class: this.classes,
      attrs: {
        tabindex: this.isDisabled ? -1 : null,
        type: 'button',
        'aria-expanded': this.isActive
      },
      directives: [{
        name: 'ripple',
        value: this.ripple
      }],
      on: { ...this.$listeners,
        click: this.onClick,
        mousedown: () => this.hasMousedown = true,
        mouseup: () => this.hasMousedown = false
      }
    }), [Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getSlot */ "r"])(this, 'default', {
      open: this.isActive
    }, true), this.hideActions || this.genIcon()]);
  }

}));

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/singleExplanation.vue?vue&type=template&id=62924cee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-expansion-panel',[_c('v-expansion-panel-header',[_vm._v(_vm._s(_vm.referKey))]),_vm._v(" "),_c('v-expansion-panel-content',{staticClass:"text-center"},[_vm._v("\n    "+_vm._s(_vm.referValue)+"\n  ")])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/singleExplanation.vue?vue&type=template&id=62924cee&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/singleExplanation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
/* harmony default export */ var singleExplanationvue_type_script_lang_js_ = ({
  props: ["referKey", "referValue"]
});
// CONCATENATED MODULE: ./components/singleExplanation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_singleExplanationvue_type_script_lang_js_ = (singleExplanationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(21);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanel.js
var VExpansionPanel = __webpack_require__(263);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelContent.js
var VExpansionPanelContent = __webpack_require__(264);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VExpansionPanel/VExpansionPanelHeader.js
var VExpansionPanelHeader = __webpack_require__(265);

// CONCATENATED MODULE: ./components/singleExplanation.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_singleExplanationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a63e00ba"
  
)

/* harmony default export */ var singleExplanation = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */




installComponents_default()(component, {VExpansionPanel: VExpansionPanel["a" /* default */],VExpansionPanelContent: VExpansionPanelContent["a" /* default */],VExpansionPanelHeader: VExpansionPanelHeader["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=single-explanation.js.map