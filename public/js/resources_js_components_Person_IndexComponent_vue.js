"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Person_IndexComponent_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EditComponent",
  data: function data() {
    return {//
    };
  },
  methods: {//
  },
  mounted: function mounted() {
    this.$store.dispatch('getPerson', this.$route.params.id);
  },
  computed: {
    isDisabled: function isDisabled() {
      return this.person.name && this.person.age && this.person.job;
    },
    person: function person() {
      return this.$store.getters.person;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShowComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShowComponent */ "./resources/js/components/Person/ShowComponent.vue");
/* harmony import */ var _EditComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditComponent */ "./resources/js/components/Person/EditComponent.vue");
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
    return {//
    };
  },
  methods: {//
  },
  mounted: function mounted() {
    this.$store.dispatch('getPeople');
  },
  computed: {
    people: function people() {
      return this.$store.getters.people;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  name: "ShowComponent",
  methods: {//
  },
  mounted: function mounted() {
    this.$store.dispatch('getPerson', this.$route.params.id);
  },
  computed: {
    person: function person() {
      return this.$store.getters.person;
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Person/EditComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/Person/ShowComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexComponent_vue_vue_type_template_id_55b43aec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/IndexComponent.vue?vue&type=template&id=55b43aec&scoped=true&");


/***/ }),

/***/ "./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ShowComponent_vue_vue_type_template_id_6f8299de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/EditComponent.vue?vue&type=template&id=17ef3d24&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
      _vm.person
        ? _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Create Person"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "name" } },
                  [_vm._v("Name")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.person.name,
                      expression: "person.name",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "name", placeholder: "name" },
                  domProps: { value: _vm.person.name },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.person, "name", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "age" } },
                  [_vm._v("Age")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.person.age,
                      expression: "person.age",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "number", id: "age", placeholder: "age" },
                  domProps: { value: _vm.person.age },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.person, "age", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mb-3" }, [
                _c(
                  "label",
                  { staticClass: "form-label", attrs: { for: "job" } },
                  [_vm._v("Job")]
                ),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.person.job,
                      expression: "person.job",
                    },
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", id: "job", placeholder: "job" },
                  domProps: { value: _vm.person.job },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.person, "job", $event.target.value)
                    },
                  },
                }),
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary",
                  attrs: { disabled: !_vm.isDisabled, type: "submit" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.$store.dispatch("updatePerson", {
                        id: _vm.person.id,
                        name: _vm.person.name,
                        age: _vm.person.age,
                        job: _vm.person.job,
                      })
                    },
                  },
                },
                [_vm._v("Update")]
              ),
            ]),
          ])
        : _vm._e(),
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
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "people.show",
                            params: { id: person.id },
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(person.name) +
                            "\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.age))]),
                _vm._v(" "),
                _c("td", [_vm._v(_vm._s(person.job))]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "btn btn-success",
                        attrs: {
                          to: {
                            name: "people.edit",
                            params: { id: person.id },
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Edit\n                    "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "a",
                      {
                        staticClass: "btn btn-danger",
                        attrs: { href: "#" },
                        on: {
                          click: function ($event) {
                            $event.preventDefault()
                            return _vm.$store.dispatch(
                              "deletePerson",
                              person.id
                            )
                          },
                        },
                      },
                      [_vm._v("Delete")]
                    ),
                  ],
                  1
                ),
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Person/ShowComponent.vue?vue&type=template&id=6f8299de&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    _vm.person
      ? _c("ul", { staticClass: "list-group w-25 mt-4 mb-4" }, [
          _c(
            "li",
            {
              staticClass:
                "list-group-item d-flex justify-content-between align-items-start",
            },
            [
              _c("div", { staticClass: "ms-2 me-auto" }, [
                _c("div", { staticClass: "fw-bold" }, [_vm._v("Name")]),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.person.name) +
                    "\n            "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass:
                "list-group-item d-flex justify-content-between align-items-start",
            },
            [
              _c("div", { staticClass: "ms-2 me-auto" }, [
                _c("div", { staticClass: "fw-bold" }, [_vm._v("Age")]),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.person.age) +
                    "\n            "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass:
                "list-group-item d-flex justify-content-between align-items-start",
            },
            [
              _c("div", { staticClass: "ms-2 me-auto" }, [
                _c("div", { staticClass: "fw-bold" }, [_vm._v("Job")]),
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.person.job) +
                    "\n            "
                ),
              ]),
            ]
          ),
          _vm._v(" "),
          _c(
            "li",
            {
              staticClass:
                "list-group-item d-flex justify-content-between align-items-start",
            },
            [
              _c(
                "div",
                { staticClass: "ms-2 me-auto" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "btn btn-success",
                      attrs: {
                        to: {
                          name: "people.edit",
                          params: { id: _vm.person.id },
                        },
                      },
                    },
                    [_vm._v("\n                    Edit\n                ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-danger",
                      on: {
                        click: function ($event) {
                          $event.preventDefault()
                          return _vm.$store.dispatch(
                            "deletePerson",
                            _vm.person.id
                          )
                        },
                      },
                    },
                    [_vm._v("\n                    Delete\n                ")]
                  ),
                ],
                1
              ),
            ]
          ),
        ])
      : _vm._e(),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);