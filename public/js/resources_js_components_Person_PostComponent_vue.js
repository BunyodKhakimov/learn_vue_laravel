(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Person_PostComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CreateComponent",
  data: function data() {
    return {
      name: null,
      age: null,
      job: null
    };
  },
  methods: {
    createPerson: function createPerson() {
      var _this = this;

      console.log('request');
      axios.post('/api/people', {
        name: this.name,
        age: this.age,
        job: this.job
      }).then(function (res) {
        _this.name = null;
        _this.age = null;
        _this.job = null;
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'people.index'
        });
      });
    }
  },
  mounted: function mounted() {},
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditComponent",
  data: function data() {
    return {
      name: null,
      age: null,
      job: null
    };
  },
  methods: {
    update: function update() {
      var _this = this;

      axios.patch("/api/people/".concat(this.$route.params.id), {
        name: this.name,
        age: this.age,
        job: this.job
      }).then(function (res) {
        _router__WEBPACK_IMPORTED_MODULE_0__["default"].push({
          name: 'people.show',
          params: {
            id: _this.$route.params.id
          }
        });
      });
    },
    getPerson: function getPerson() {
      var _this2 = this;

      axios.get("/api/people/".concat(this.$route.params.id)).then(function (res) {
        _this2.name = res.data.name;
        _this2.age = res.data.age;
        _this2.job = res.data.job;
      });
    }
  },
  mounted: function mounted() {
    this.getPerson();
  },
  computed: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent */ "./resources/js/components/Person/ShowComponent.vue");
/* harmony import */ var _EditComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditComponent */ "./resources/js/components/Person/EditComponent.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router */ "./resources/js/router.js");
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
//
//
//
//
//



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "IndexComponent",
  components: {
    EditComponent: _EditComponent__WEBPACK_IMPORTED_MODULE_1__["default"],
    ShowComponent: _ShowComponent__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      people: null
    };
  },
  methods: {
    getPerson: function getPerson() {
      var _this = this;

      axios.get('/api/people').then(function (res) {
        _this.people = res.data;
      });
    },
    isEditPerson: function isEditPerson(id) {
      return id === this.editPersonId;
    },
    edit: function edit(id) {
      _router__WEBPACK_IMPORTED_MODULE_2__["default"].push({
        name: 'people.edit',
        params: {
          id: id
        }
      });
    },
    "delete": function _delete(id) {
      var _this2 = this;

      console.log(id);
      axios["delete"]("/api/people/".concat(id)).then(function (res) {
        console.log(res.data);

        _this2.$parent.getPerson();
      });
    }
  },
  mounted: function mounted() {
    this.getPerson();
  },
  computed: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateComponent */ "./resources/js/components/Person/CreateComponent.vue");
/* harmony import */ var _IndexComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent */ "./resources/js/components/Person/IndexComponent.vue");
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "PostComponent",
  components: {
    CreateComponent: _CreateComponent__WEBPACK_IMPORTED_MODULE_0__["default"],
    IndexComponent: _IndexComponent__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {//
    };
  },
  methods: {//
  },
  mounted: function mounted() {//
  },
  computed: {//
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/bunik/Desktop/vue/learn_vue_laravel/resources/js/components/Person/ShowComponent.vue: Invalid shorthand property initializer. (18:19)\n\n\u001b[0m \u001b[90m 16 |\u001b[39m     data() {\u001b[0m\n\u001b[0m \u001b[90m 17 |\u001b[39m         \u001b[36mreturn\u001b[39m {\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 |\u001b[39m             person \u001b[33m=\u001b[39m \u001b[36mnull\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 19 |\u001b[39m         }\u001b[0m\n\u001b[0m \u001b[90m 20 |\u001b[39m     }\u001b[33m,\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 21 |\u001b[39m\u001b[0m\n    at instantiate (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:72:32)\n    at constructor (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:358:12)\n    at Parser.raise (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:3341:19)\n    at Parser.checkExpressionErrors (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:4085:12)\n    at Parser.parseMaybeAssign (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:12361:12)\n    at Parser.parseExpressionBase (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:12259:23)\n    at /home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:12253:39\n    at Parser.allowInAnd (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:14348:16)\n    at Parser.parseExpression (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:12253:17)\n    at Parser.parseReturnStatement (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:15060:28)\n    at Parser.parseStatementContent (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:14699:21)\n    at Parser.parseStatement (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:14645:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:15288:25)\n    at Parser.parseBlockBody (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:15279:10)\n    at Parser.parseBlock (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:15263:10)\n    at Parser.parseFunctionBody (/home/bunik/Desktop/vue/learn_vue_laravel/node_modules/@babel/parser/lib/index.js:13953:24)");

/***/ }),

/***/ "./resources/js/components/Person/CreateComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Person/CreateComponent.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=template&id=11564932&scoped=true& */ "./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true&");
/* harmony import */ var _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11564932",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Person/CreateComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Person/EditComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& */ "./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&");
/* harmony import */ var _EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "17ef3d24",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Person/EditComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Person/IndexComponent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Person/IndexComponent.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true& */ "./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true&");
/* harmony import */ var _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "55b43aec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Person/IndexComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Person/PostComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Person/PostComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostComponent.vue?vue&type=template&id=79db1364&scoped=true& */ "./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true&");
/* harmony import */ var _PostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "79db1364",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Person/PostComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Person/ShowComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& */ "./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&");
/* harmony import */ var _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShowComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "6f8299de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Person/ShowComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateComponent_vue_vue_type_template_id_11564932_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateComponent.vue?vue&type=template&id=11564932&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditComponent_vue_vue_type_template_id_17ef3d24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PostComponent_vue_vue_type_template_id_79db1364_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PostComponent.vue?vue&type=template&id=79db1364&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/CreateComponent.vue?vue&type=template&id=11564932&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row w-50 mt-4" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Create Person")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "name" } }, [
              _vm._v("Name"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "name", placeholder: "name" },
              domProps: { value: _vm.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "age" } }, [
              _vm._v("Age"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.age,
                  expression: "age",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "age", placeholder: "age" },
              domProps: { value: _vm.age },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.age = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "job" } }, [
              _vm._v("Job"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.job,
                  expression: "job",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "job", placeholder: "job" },
              domProps: { value: _vm.job },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.job = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.createPerson()
                },
              },
            },
            [_vm._v("Create")]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row w-50 mt-4" }, [
    _c("div", { staticClass: "col-md-8" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [_vm._v("Create Person")]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "name" } }, [
              _vm._v("Name"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.name,
                  expression: "name",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "name", placeholder: "name" },
              domProps: { value: _vm.name },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.name = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "age" } }, [
              _vm._v("Age"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.age,
                  expression: "age",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "number", id: "age", placeholder: "age" },
              domProps: { value: _vm.age },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.age = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "mb-3" }, [
            _c("label", { staticClass: "form-label", attrs: { for: "job" } }, [
              _vm._v("Job"),
            ]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.job,
                  expression: "job",
                },
              ],
              staticClass: "form-control",
              attrs: { type: "text", id: "job", placeholder: "job" },
              domProps: { value: _vm.job },
              on: {
                input: function ($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.job = $event.target.value
                },
              },
            }),
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "submit" },
              on: {
                click: function ($event) {
                  $event.preventDefault()
                  return _vm.update()
                },
              },
            },
            [_vm._v("Update")]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-75 mt-4" }, [
    _c("table", { staticClass: "table" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        [
          _vm._l(_vm.people, function (person) {
            return [
              _c("tr", [
                _c("th", [_vm._v(_vm._s(person.id))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.name))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.age))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.job))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-success",
                      attrs: { href: "#" },
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.edit(person.id)
                        },
                      },
                    },
                    [_vm._v("Edit")]
                  ),
                  _vm._v(" "),
                  _vm._v(' ">Delete'),
                ]),
              ]),
            ]
          }),
        ],
        2
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Age")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Job")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/PostComponent.vue?vue&type=template&id=79db1364&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("IndexComponent", { ref: "index" })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [_vm._v("Name: " + _vm._s(this.person.name))]),
    _vm._v(" "),
    _c("div", [_vm._v("Age: " + _vm._s(this.person.age))]),
    _vm._v(" "),
    _c("div", [_vm._v("Job: " + _vm._s(this.person.job))]),
    _vm._v("dfd\n"),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);