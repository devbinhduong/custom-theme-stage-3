(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_global_co-4ccea3"],{

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");











var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
  priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this6.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacets, id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_5__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      var re = /page=[0-9]+/i;
      var updatedLinkUrl = linkUrl.replace(re, 'page=1');
      window.history.replaceState({}, document.title, updatedLinkUrl);
    }
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length > 1) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('submit', '[data-product-compare]', function (event) {
    var $this = $(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      event.preventDefault();
    }
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloProductDisplayMode.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductDisplayMode.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  var $productListing = $('#product-listing-container .productListing'),
    $grid = $('#grid-view'),
    $list = $('#list-view'),
    $gridMobile = $('#grid-view-mobile'),
    $listMobile = $('#list-view-mobile');
  $list.on('click', function (event) {
    if (!$list.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $grid.on('click', function (event) {
    if (!$grid.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 300);
    }
  });
  $listMobile.on('click', function (event) {
    if (!$listMobile.hasClass('current-view')) {
      setTimeout(function () {
        $list.addClass('current-view');
        $listMobile.addClass('current-view');
        $grid.removeClass('current-view');
        $gridMobile.removeClass('current-view');
        $productListing.removeClass('productGrid').addClass('productList');
      }, 300);
    }
  });
  $gridMobile.on('click', function (event) {
    if (!$gridMobile.hasClass('current-view')) {
      setTimeout(function () {
        $grid.addClass('current-view');
        $gridMobile.addClass('current-view');
        $list.removeClass('current-view');
        $listMobile.removeClass('current-view');
        $productListing.removeClass('productList').addClass('productGrid');
      }, 100);
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloSideAllCategory.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSideAllCategory.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  if ($('.all-categories-list').length > 0) {
    $(document).on('click', '.all-categories-list .icon-dropdown', function (event) {
      var $target = $(event.currentTarget).parent();
      $target.siblings().removeClass('is-clicked current-cate');
      $target.toggleClass('is-clicked');
      $target.siblings().find("> .dropdown-category-list").slideUp("slow");
      $target.find("> .dropdown-category-list").slideToggle("slow");
    });
    $('.all-categories-list li').each(function (index, element) {
      if ($(element).hasClass('current-cate')) {
        $(element).find("> .dropdown-category-list").slideToggle("slow");
      }
    });
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyToolbar.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyToolbar.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  var $body = $('body');
  function toolbar_sticky() {
    var toolbar_position,
      toolbar_height,
      toolbar = $('.page-listing .halo-toolbar');
    toolbar_height = toolbar.height();
    toolbar_position = toolbar.offset().top + toolbar.outerHeight(true);
    if (toolbar.length) {
      toolbar_scroll(toolbar_position, toolbar_height, toolbar);
    }
  }
  function toolbar_scroll(toolbar_position, toolbar_height, toolbar) {
    var didScroll,
      lastScrollTop = 0,
      delta = 5;
    $(window).on('scroll load', function () {
      var scroll = $(window).scrollTop();
      if (Math.abs(lastScrollTop - scroll) <= delta) {
        return;
      }
      if (scroll > lastScrollTop && scroll > toolbar_position) {
        toolbar.removeClass('sticky-down').addClass('sticky-up');
        if (scroll > toolbar_position) {
          $body.addClass('has-stickyToolbar');
        } else {
          $body.removeClass('has-stickyToolbar');
        }
      } else {
        if (scroll + $(window).height() < $(document).height()) {
          toolbar.removeClass('sticky-up').addClass('sticky-down');
          if (scroll > toolbar_position) {
            $body.addClass('has-stickyToolbar');
          } else {
            $body.removeClass('has-stickyToolbar');
          }
        }
      }
      lastScrollTop = scroll;
    });
  }
  if ($(window).width() < 1025) {
    if (context.themeSettings.haloStickyToolbar) {
      toolbar_sticky();
    }
  } else {
    $body.removeClass('has-stickyToolbar');
  }
}

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby00Y2NlYTMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNPO0FBQzFCO0FBQUEsSUFFREcsV0FBVywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLFdBQUEsRUFBQUMsWUFBQTtFQUM1QixTQUFBRCxZQUFZRyxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFILFlBQUEsQ0FBQUksSUFBQSxPQUFNRixPQUFPLENBQUM7SUFFZEcsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsWUFBTTtNQUMxQyxJQUFJQyxRQUFRLENBQUNDLGFBQWEsQ0FBQ0MsRUFBRSxLQUFLLE1BQU0sRUFBRTtRQUN0Q0osTUFBTSxDQUFDSyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBVSxDQUFDO01BQzNEO0lBQ0osQ0FBQyxDQUFDO0lBQUMsT0FBQVIsS0FBQTtFQUNQO0VBQUMsSUFBQVMsTUFBQSxHQUFBYixXQUFBLENBQUFjLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxvQkFBb0IsR0FBcEIsU0FBQUEscUJBQUEsRUFBdUI7SUFDbkIsSUFBTUMsZUFBZSxHQUFHQyxDQUFDLENBQUMsZ0NBQWdDLENBQUM7SUFFM0QsSUFBSVgsTUFBTSxDQUFDSyxZQUFZLENBQUNPLE9BQU8sQ0FBQyxjQUFjLENBQUMsRUFBRTtNQUM3Q0YsZUFBZSxDQUFDRyxLQUFLLENBQUMsQ0FBQztNQUN2QmIsTUFBTSxDQUFDSyxZQUFZLENBQUNTLFVBQVUsQ0FBQyxjQUFjLENBQUM7SUFDbEQ7RUFDSixDQUFDO0VBQUFQLE1BQUEsQ0FFRFEsY0FBYyxHQUFkLFNBQUFBLGVBQWVDLEtBQUssRUFBRUMsYUFBYSxFQUFFO0lBQ2pDLElBQU1DLEdBQUcsR0FBR3pCLHNDQUFTLENBQUNPLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNqRCxJQUFNQyxXQUFXLEdBQUdYLENBQUMsQ0FBQ00sYUFBYSxDQUFDLENBQUNNLFNBQVMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFFM0ROLEdBQUcsQ0FBQ08sS0FBSyxDQUFDSCxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMxQyxPQUFPSixHQUFHLENBQUNPLEtBQUssQ0FBQ0MsSUFBSTtJQUVyQlYsS0FBSyxDQUFDVyxjQUFjLENBQUMsQ0FBQztJQUN0QjNCLE1BQU0sQ0FBQ29CLFFBQVEsR0FBRzNCLHVDQUFVLENBQUM7TUFBRW9DLFFBQVEsRUFBRVgsR0FBRyxDQUFDVyxRQUFRO01BQUVDLE1BQU0sRUFBRXRDLCtEQUFRLENBQUN1QyxnQkFBZ0IsQ0FBQ2IsR0FBRyxDQUFDTyxLQUFLO0lBQUUsQ0FBQyxDQUFDO0VBQzFHLENBQUM7RUFBQSxPQUFBL0IsV0FBQTtBQUFBLEVBN0JvQ0gscURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pJO0FBRWxDO0FBQ21CO0FBQ0U7QUFDSTtBQUNDO0FBQ3hCO0FBR3hCLElBQU1nRCxjQUFjLEdBQUc7RUFDbkJDLHVCQUF1QixFQUFFLDRFQUE0RTtFQUNyR0MsZUFBZSxFQUFFLHlCQUF5QjtFQUMxQ0Msa0JBQWtCLEVBQUUseUNBQXlDO0VBQzdEQyxpQkFBaUIsRUFBRSx3QkFBd0I7RUFDM0NDLG9CQUFvQixFQUFFLHlCQUF5QjtFQUMvQ0MsdUJBQXVCLEVBQUUsdUNBQXVDO0VBQ2hFQywwQkFBMEIsRUFBRSxrQ0FBa0M7RUFDOURDLHNCQUFzQixFQUFFLG1CQUFtQjtFQUMzQ0MsMEJBQTBCLEVBQUUsb0NBQW9DO0VBQ2hFQywwQkFBMEIsRUFBRSxvQ0FBb0M7RUFDaEVDLHNCQUFzQixFQUFFLCtDQUErQztFQUN2RUMsd0JBQXdCLEVBQUUsd0NBQXdDO0VBQ2xFQyxLQUFLLEVBQUVqQix5REFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztFQUNoQ2tCLFNBQVMsRUFBRTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBRkEsSUFHTUMsYUFBYTtFQUNmO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSxTQUFBQSxjQUFZQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsT0FBTyxFQUFFO0lBQUEsSUFBQTNELEtBQUE7SUFDM0M7SUFDQSxJQUFJLENBQUN5RCxjQUFjLEdBQUdBLGNBQWM7SUFDcEMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdDLG9EQUFBLENBQVMsQ0FBQyxDQUFDLEVBQUVuQixjQUFjLEVBQUVrQixPQUFPLENBQUM7SUFDcEQsSUFBSSxDQUFDRSxlQUFlLEdBQUcsRUFBRTtJQUN6QixJQUFJLENBQUNDLG1CQUFtQixHQUFHLEVBQUU7O0lBRTdCO0lBQ0F4Qix3REFBa0IsQ0FBQyxDQUFDOztJQUVwQjtJQUNBLElBQUksQ0FBQ3lCLGtCQUFrQixDQUFDLENBQUM7O0lBRXpCO0lBQ0FsRCxDQUFDLENBQUMsSUFBSSxDQUFDOEMsT0FBTyxDQUFDYixvQkFBb0IsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO01BQzFEbEUsS0FBSSxDQUFDbUUsa0JBQWtCLENBQUN0RCxDQUFDLENBQUNxRCxPQUFPLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUM7O0lBRUY7SUFDQXJELENBQUMsQ0FBQyxJQUFJLENBQUM4QyxPQUFPLENBQUNqQix1QkFBdUIsQ0FBQyxDQUFDc0IsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQ3JFLElBQU1DLGdCQUFnQixHQUFHeEQsQ0FBQyxDQUFDdUQsZUFBZSxDQUFDO01BQzNDLElBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUVoRSxJQUFJRCxXQUFXLENBQUNFLFdBQVcsRUFBRTtRQUN6QnhFLEtBQUksQ0FBQzZELGVBQWUsQ0FBQ1ksSUFBSSxDQUFDSCxXQUFXLENBQUNJLFFBQVEsQ0FBQztNQUNuRDtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBO0lBQ0FDLFVBQVUsQ0FBQyxZQUFNO01BQ2IsSUFBSTlELENBQUMsQ0FBQ2IsS0FBSSxDQUFDMkQsT0FBTyxDQUFDZCxpQkFBaUIsQ0FBQyxDQUFDK0IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO1FBQ2pENUUsS0FBSSxDQUFDNkUsaUJBQWlCLENBQUMsQ0FBQztNQUM1QjtJQUNKLENBQUMsQ0FBQzs7SUFFRjtJQUNBLElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUksQ0FBQ0EsYUFBYSxDQUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xELElBQUksQ0FBQ0UsaUJBQWlCLEdBQUcsSUFBSSxDQUFDQSxpQkFBaUIsQ0FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQztJQUMxRCxJQUFJLENBQUNHLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNJLFlBQVksR0FBRyxJQUFJLENBQUNBLFlBQVksQ0FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQztJQUNoRCxJQUFJLENBQUNLLGFBQWEsR0FBRyxJQUFJLENBQUNBLGFBQWEsQ0FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsRCxJQUFJLENBQUM5RCxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUM4RCxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3BELElBQUksQ0FBQ00sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQztJQUV4RCxJQUFJLENBQUNPLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCOztFQUVBO0VBQUEsSUFBQTdFLE1BQUEsR0FBQStDLGFBQUEsQ0FBQTlDLFNBQUE7RUFBQUQsTUFBQSxDQUNBOEUsV0FBVyxHQUFYLFNBQUFBLFlBQVlDLE9BQU8sRUFBRTtJQUNqQixJQUFJQSxPQUFPLEVBQUU7TUFDVCxJQUFJLENBQUM5QixRQUFRLENBQUM4QixPQUFPLENBQUM7SUFDMUI7O0lBRUE7SUFDQWxELHdEQUFrQixDQUFDLENBQUM7O0lBRXBCO0lBQ0EsSUFBSSxDQUFDeUIsa0JBQWtCLENBQUMsQ0FBQzs7SUFFekI7SUFDQSxJQUFJLENBQUMwQixzQkFBc0IsQ0FBQyxDQUFDO0lBQzdCLElBQUksQ0FBQ0MsMEJBQTBCLENBQUMsQ0FBQzs7SUFFakM7SUFDQSxJQUFJLENBQUNKLFVBQVUsQ0FBQyxDQUFDO0VBQ3JCLENBQUM7RUFBQTdFLE1BQUEsQ0FFRGtGLFVBQVUsR0FBVixTQUFBQSxXQUFBLEVBQWE7SUFBQSxJQUFBQyxNQUFBO0lBQ1QvRSxDQUFDLENBQUMsSUFBSSxDQUFDOEMsT0FBTyxDQUFDaEIsZUFBZSxDQUFDLENBQUNrRCxJQUFJLENBQUMsQ0FBQztJQUV0Q3pELDJEQUFHLENBQUMwRCxPQUFPLENBQUNwRyx3REFBUSxDQUFDcUcsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUN0QyxjQUFjLEVBQUUsVUFBQ3VDLEdBQUcsRUFBRVIsT0FBTyxFQUFLO01BQ2xFM0UsQ0FBQyxDQUFDK0UsTUFBSSxDQUFDakMsT0FBTyxDQUFDaEIsZUFBZSxDQUFDLENBQUNzRCxJQUFJLENBQUMsQ0FBQztNQUV0QyxJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCOztNQUVBO01BQ0FKLE1BQUksQ0FBQ0wsV0FBVyxDQUFDQyxPQUFPLENBQUM7SUFDN0IsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBL0UsTUFBQSxDQUVEMEYsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFpQkMsUUFBUSxFQUFFO0lBQ3ZCLElBQU05RixFQUFFLEdBQUc4RixRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBRTlCO0lBQ0EsSUFBSSxDQUFDdkMsbUJBQW1CLEdBQUd3QyxxREFBQSxDQUFVLElBQUksQ0FBQ3hDLG1CQUFtQixFQUFFeEQsRUFBRSxDQUFDO0VBQ3RFLENBQUM7RUFBQUcsTUFBQSxDQUVEMEQsa0JBQWtCLEdBQWxCLFNBQUFBLG1CQUFtQmlDLFFBQVEsRUFBRTtJQUN6QixJQUFNOUYsRUFBRSxHQUFHOEYsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzlCLElBQU1FLGNBQWMsR0FBR0gsUUFBUSxDQUFDN0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBRXRELElBQUlnQyxjQUFjLEVBQUU7TUFDaEIsSUFBSSxDQUFDekMsbUJBQW1CLEdBQUcwQyxtREFBQSxDQUFRLElBQUksQ0FBQzFDLG1CQUFtQixFQUFFLENBQUN4RCxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDLE1BQU07TUFDSCxJQUFJLENBQUN3RCxtQkFBbUIsR0FBR3dDLHFEQUFBLENBQVUsSUFBSSxDQUFDeEMsbUJBQW1CLEVBQUV4RCxFQUFFLENBQUM7SUFDdEU7RUFDSixDQUFDO0VBQUFHLE1BQUEsQ0FFRGdHLGdCQUFnQixHQUFoQixTQUFBQSxpQkFBaUJMLFFBQVEsRUFBRTtJQUN2QixJQUFNOUYsRUFBRSxHQUFHOEYsUUFBUSxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDOztJQUU5QjtJQUNBLElBQUlLLHNEQUFBLENBQVcsSUFBSSxDQUFDNUMsbUJBQW1CLEVBQUV4RCxFQUFFLENBQUMsRUFBRTtNQUMxQyxJQUFJLENBQUNxRyxtQkFBbUIsQ0FBQ1AsUUFBUSxDQUFDO01BRWxDLE9BQU8sSUFBSTtJQUNmO0lBRUEsSUFBSSxDQUFDakMsa0JBQWtCLENBQUNpQyxRQUFRLENBQUM7SUFFakMsT0FBTyxLQUFLO0VBQ2hCLENBQUM7RUFBQTNGLE1BQUEsQ0FFRGtHLG1CQUFtQixHQUFuQixTQUFBQSxvQkFBb0JQLFFBQVEsRUFBRTtJQUFBLElBQUFRLE1BQUE7SUFDMUIsSUFBTUMsS0FBSyxHQUFHVCxRQUFRLENBQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3BDLElBQU11QyxRQUFRLEdBQUdwSCx3REFBUSxDQUFDcUcsTUFBTSxDQUFDLENBQUM7SUFFbEMsSUFBSSxJQUFJLENBQUN0QyxjQUFjLENBQUNzRCxRQUFRLEVBQUU7TUFDOUIzRSwyREFBRyxDQUFDMEQsT0FBTyxDQUFDZ0IsUUFBUSxFQUFFO1FBQ2xCRSxRQUFRLEVBQUUsSUFBSSxDQUFDdkQsY0FBYyxDQUFDc0QsUUFBUTtRQUN0Q0UsTUFBTSxFQUFFO1VBQ0pDLFFBQVEsRUFBRUw7UUFDZDtNQUNKLENBQUMsRUFBRSxVQUFDYixHQUFHLEVBQUVtQixRQUFRLEVBQUs7UUFDbEIsSUFBSW5CLEdBQUcsRUFBRTtVQUNMLE1BQU0sSUFBSUUsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFDeEI7UUFFQVksTUFBSSxDQUFDakQsT0FBTyxDQUFDTCxLQUFLLENBQUM4RCxJQUFJLENBQUMsQ0FBQztRQUN6QlIsTUFBSSxDQUFDakQsT0FBTyxDQUFDSixTQUFTLEdBQUcsSUFBSTtRQUM3QnFELE1BQUksQ0FBQ2pELE9BQU8sQ0FBQ0wsS0FBSyxDQUFDK0QsYUFBYSxDQUFDRixRQUFRLENBQUM7TUFDOUMsQ0FBQyxDQUFDO0lBQ047SUFFQSxJQUFJLENBQUNoRCxrQkFBa0IsQ0FBQ2lDLFFBQVEsQ0FBQztJQUVqQyxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBM0YsTUFBQSxDQUVENEUsZ0JBQWdCLEdBQWhCLFNBQUFBLGlCQUFpQm5FLEtBQUssRUFBRTtJQUNwQixJQUFNb0csTUFBTSxHQUFHekcsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUNqQyxJQUFNYyxLQUFLLEdBQUdkLENBQUMsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLENBQUMsQ0FBQ29HLEdBQUcsQ0FBQyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0lBRXhERixNQUFNLENBQUN0RCxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFd0QsT0FBTyxFQUFLO01BQzVCLElBQU1DLElBQUksR0FBRzdHLENBQUMsQ0FBQzRHLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxDQUFDRixXQUFXLENBQUMsQ0FBQztNQUM1QyxJQUFJRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ2hHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQzVCZCxDQUFDLENBQUM0RyxPQUFPLENBQUMsQ0FBQzVCLElBQUksQ0FBQyxDQUFDO01BQ3JCLENBQUMsTUFBTTtRQUNIaEYsQ0FBQyxDQUFDNEcsT0FBTyxDQUFDLENBQUN4QixJQUFJLENBQUMsQ0FBQztNQUNyQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXhGLE1BQUEsQ0FFRG1ILFdBQVcsR0FBWCxTQUFBQSxZQUFZdkQsZ0JBQWdCLEVBQUU7SUFDMUIsSUFBTUMsV0FBVyxHQUFHRCxnQkFBZ0IsQ0FBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBRWhFRCxXQUFXLENBQUM4QyxJQUFJLENBQUMsQ0FBQztFQUN0QixDQUFDO0VBQUEzRyxNQUFBLENBRURvSCxhQUFhLEdBQWIsU0FBQUEsY0FBY3hELGdCQUFnQixFQUFFO0lBQzVCLElBQU1DLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUVoRUQsV0FBVyxDQUFDd0QsS0FBSyxDQUFDLENBQUM7RUFDdkIsQ0FBQztFQUFBckgsTUFBQSxDQUVEb0UsaUJBQWlCLEdBQWpCLFNBQUFBLGtCQUFBLEVBQW9CO0lBQUEsSUFBQWtELE1BQUE7SUFDaEIsSUFBTUMsaUJBQWlCLEdBQUduSCxDQUFDLENBQUMsSUFBSSxDQUFDOEMsT0FBTyxDQUFDakIsdUJBQXVCLENBQUM7SUFFakVzRixpQkFBaUIsQ0FBQ2hFLElBQUksQ0FBQyxVQUFDQyxLQUFLLEVBQUVHLGVBQWUsRUFBSztNQUMvQyxJQUFNQyxnQkFBZ0IsR0FBR3hELENBQUMsQ0FBQ3VELGVBQWUsQ0FBQztNQUUzQzJELE1BQUksQ0FBQ0YsYUFBYSxDQUFDeEQsZ0JBQWdCLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBNUQsTUFBQSxDQUVEd0gsZUFBZSxHQUFmLFNBQUFBLGdCQUFBLEVBQWtCO0lBQUEsSUFBQUMsTUFBQTtJQUNkLElBQU1GLGlCQUFpQixHQUFHbkgsQ0FBQyxDQUFDLElBQUksQ0FBQzhDLE9BQU8sQ0FBQ2pCLHVCQUF1QixDQUFDO0lBRWpFc0YsaUJBQWlCLENBQUNoRSxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFRyxlQUFlLEVBQUs7TUFDL0MsSUFBTUMsZ0JBQWdCLEdBQUd4RCxDQUFDLENBQUN1RCxlQUFlLENBQUM7TUFFM0M4RCxNQUFJLENBQUNOLFdBQVcsQ0FBQ3ZELGdCQUFnQixDQUFDO0lBQ3RDLENBQUMsQ0FBQztFQUNOOztFQUVBO0VBQUE7RUFBQTVELE1BQUEsQ0FDQXNELGtCQUFrQixHQUFsQixTQUFBQSxtQkFBQSxFQUFxQjtJQUNqQixJQUFJbEQsQ0FBQyxDQUFDLElBQUksQ0FBQzhDLE9BQU8sQ0FBQ1Ysc0JBQXNCLENBQUMsQ0FBQ2tGLE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDckQ7SUFDSjtJQUVBLElBQU1DLFNBQVMsR0FBRzVGLGlEQUFHLENBQUMsQ0FBQztJQUN2QixJQUFNNkYsU0FBUyxHQUFHO01BQ2RDLGFBQWEsRUFBRSxJQUFJLENBQUMzRSxPQUFPLENBQUNaLHVCQUF1QjtNQUNuRHdGLGdCQUFnQixFQUFFLElBQUksQ0FBQzVFLE9BQU8sQ0FBQ1gsMEJBQTBCO01BQ3pEd0YsWUFBWSxFQUFFLElBQUksQ0FBQzdFLE9BQU8sQ0FBQ1Ysc0JBQXNCO01BQ2pEd0YsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDOUUsT0FBTyxDQUFDVCwwQkFBMEI7TUFDekR3RixnQkFBZ0IsRUFBRSxJQUFJLENBQUMvRSxPQUFPLENBQUNSO0lBQ25DLENBQUM7SUFFRFoseURBQVUsQ0FBQ29HLHdCQUF3QixDQUFDUCxTQUFTLEVBQUVDLFNBQVMsRUFBRSxJQUFJLENBQUMxRSxPQUFPLENBQUNpRix1QkFBdUIsQ0FBQztJQUUvRixJQUFJLENBQUNDLG1CQUFtQixHQUFHVCxTQUFTO0VBQ3hDLENBQUM7RUFBQTNILE1BQUEsQ0FFRGlGLDBCQUEwQixHQUExQixTQUFBQSwyQkFBQSxFQUE2QjtJQUFBLElBQUFvRCxNQUFBO0lBQ3pCLElBQU1DLFNBQVMsR0FBR2xJLENBQUMsQ0FBQyxJQUFJLENBQUM4QyxPQUFPLENBQUNiLG9CQUFvQixDQUFDOztJQUV0RDtJQUNBaUcsU0FBUyxDQUFDL0UsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsT0FBTyxFQUFLO01BQy9CLElBQU1rQyxRQUFRLEdBQUd2RixDQUFDLENBQUNxRCxPQUFPLENBQUM7TUFDM0IsSUFBTTVELEVBQUUsR0FBRzhGLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUM5QixJQUFNMkMsY0FBYyxHQUFHdEMsc0RBQUEsQ0FBV29DLE1BQUksQ0FBQ2hGLG1CQUFtQixFQUFFeEQsRUFBRSxDQUFDO01BRS9ELElBQUkwSSxjQUFjLEVBQUU7UUFDaEJGLE1BQUksQ0FBQzNFLGtCQUFrQixDQUFDaUMsUUFBUSxDQUFDO01BQ3JDLENBQUMsTUFBTTtRQUNIMEMsTUFBSSxDQUFDM0MsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQztNQUNuQztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTNGLE1BQUEsQ0FFRGdGLHNCQUFzQixHQUF0QixTQUFBQSx1QkFBQSxFQUF5QjtJQUFBLElBQUF3RCxNQUFBO0lBQ3JCLElBQU1qQixpQkFBaUIsR0FBR25ILENBQUMsQ0FBQyxJQUFJLENBQUM4QyxPQUFPLENBQUNqQix1QkFBdUIsQ0FBQztJQUVqRXNGLGlCQUFpQixDQUFDaEUsSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUcsZUFBZSxFQUFLO01BQy9DLElBQU1DLGdCQUFnQixHQUFHeEQsQ0FBQyxDQUFDdUQsZUFBZSxDQUFDO01BQzNDLElBQU1FLFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUNoRSxJQUFNakUsRUFBRSxHQUFHZ0UsV0FBVyxDQUFDSSxRQUFRO01BQy9CLElBQU1zRSxjQUFjLEdBQUd0QyxzREFBQSxDQUFXdUMsTUFBSSxDQUFDcEYsZUFBZSxFQUFFdkQsRUFBRSxDQUFDO01BRTNELElBQUkwSSxjQUFjLEVBQUU7UUFDaEJDLE1BQUksQ0FBQ3BCLGFBQWEsQ0FBQ3hELGdCQUFnQixDQUFDO01BQ3hDLENBQUMsTUFBTTtRQUNINEUsTUFBSSxDQUFDckIsV0FBVyxDQUFDdkQsZ0JBQWdCLENBQUM7TUFDdEM7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE1RCxNQUFBLENBRUQ2RSxVQUFVLEdBQVYsU0FBQUEsV0FBQSxFQUFhO0lBQ1Q7SUFDQSxJQUFJLENBQUM0RCxZQUFZLENBQUMsQ0FBQzs7SUFFbkI7SUFDQXJJLENBQUMsQ0FBQ1gsTUFBTSxDQUFDLENBQUNpSixFQUFFLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQ3JFLGFBQWEsQ0FBQztJQUMvQ2pFLENBQUMsQ0FBQ1gsTUFBTSxDQUFDLENBQUNpSixFQUFFLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQ0MsVUFBVSxDQUFDO0lBQ3pDdkksQ0FBQyxDQUFDVCxRQUFRLENBQUMsQ0FBQytJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDeEYsT0FBTyxDQUFDUCxzQkFBc0IsRUFBRSxJQUFJLENBQUM0QixhQUFhLENBQUM7SUFDaEZuRSxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUFDK0ksRUFBRSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQ3hGLE9BQU8sQ0FBQ2pCLHVCQUF1QixFQUFFLElBQUksQ0FBQ3VDLGlCQUFpQixDQUFDO0lBQ2xHcEUsQ0FBQyxDQUFDVCxRQUFRLENBQUMsQ0FBQytJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDeEYsT0FBTyxDQUFDTix3QkFBd0IsRUFBRSxJQUFJLENBQUNnQyxnQkFBZ0IsQ0FBQztJQUNyRnhFLENBQUMsQ0FBQyxJQUFJLENBQUM4QyxPQUFPLENBQUNmLGtCQUFrQixDQUFDLENBQUN1RyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ2pFLFlBQVksQ0FBQzs7SUFFakU7SUFDQS9DLDZEQUFLLENBQUNnSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDaEUsWUFBWSxDQUFDO0lBQzFEaEQsNkRBQUssQ0FBQ2dILEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxJQUFJLENBQUMvRCxhQUFhLENBQUM7SUFDN0RqRCw2REFBSyxDQUFDZ0gsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ2xJLGNBQWMsQ0FBQztFQUNyRCxDQUFDO0VBQUFSLE1BQUEsQ0FFRHlJLFlBQVksR0FBWixTQUFBQSxhQUFBLEVBQWU7SUFDWDtJQUNBckksQ0FBQyxDQUFDWCxNQUFNLENBQUMsQ0FBQ21KLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDdkUsYUFBYSxDQUFDO0lBQ2hEakUsQ0FBQyxDQUFDWCxNQUFNLENBQUMsQ0FBQ21KLEdBQUcsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDRCxVQUFVLENBQUM7SUFDMUN2SSxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUFDaUosR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMxRixPQUFPLENBQUNQLHNCQUFzQixFQUFFLElBQUksQ0FBQzRCLGFBQWEsQ0FBQztJQUNqRm5FLENBQUMsQ0FBQ1QsUUFBUSxDQUFDLENBQUNpSixHQUFHLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDMUYsT0FBTyxDQUFDakIsdUJBQXVCLEVBQUUsSUFBSSxDQUFDdUMsaUJBQWlCLENBQUM7SUFDbkdwRSxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUFDaUosR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMxRixPQUFPLENBQUNOLHdCQUF3QixFQUFFLElBQUksQ0FBQ2dDLGdCQUFnQixDQUFDO0lBQ3RGeEUsQ0FBQyxDQUFDLElBQUksQ0FBQzhDLE9BQU8sQ0FBQ2Ysa0JBQWtCLENBQUMsQ0FBQ3lHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDbkUsWUFBWSxDQUFDOztJQUVsRTtJQUNBL0MsNkRBQUssQ0FBQ2tILEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUNsRSxZQUFZLENBQUM7SUFDM0RoRCw2REFBSyxDQUFDa0gsR0FBRyxDQUFDLCtCQUErQixFQUFFLElBQUksQ0FBQ2pFLGFBQWEsQ0FBQztJQUM5RGpELDZEQUFLLENBQUNrSCxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDcEksY0FBYyxDQUFDO0VBQ3RELENBQUM7RUFBQVIsTUFBQSxDQUVEeUUsWUFBWSxHQUFaLFNBQUFBLGFBQWFoRSxLQUFLLEVBQUU7SUFDaEIsSUFBTW9JLEtBQUssR0FBR3pJLENBQUMsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLENBQUM7SUFDcEMsSUFBTUMsR0FBRyxHQUFHa0ksS0FBSyxDQUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU5Qm5GLEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUM7SUFDdEJYLEtBQUssQ0FBQ3FJLGVBQWUsQ0FBQyxDQUFDOztJQUV2QjtJQUNBN0osd0RBQVEsQ0FBQzhKLE9BQU8sQ0FBQ3BJLEdBQUcsQ0FBQztFQUN6QixDQUFDO0VBQUFYLE1BQUEsQ0FFRHVFLGFBQWEsR0FBYixTQUFBQSxjQUFjOUQsS0FBSyxFQUFFO0lBQ2pCLElBQU11SSxPQUFPLEdBQUc1SSxDQUFDLENBQUNLLEtBQUssQ0FBQ0MsYUFBYSxDQUFDO0lBQ3RDLElBQU1pRixRQUFRLEdBQUd2RixDQUFDLENBQUM0SSxPQUFPLENBQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7O0lBRXhDO0lBQ0FuRixLQUFLLENBQUNXLGNBQWMsQ0FBQyxDQUFDOztJQUV0QjtJQUNBLElBQUksQ0FBQzRFLGdCQUFnQixDQUFDTCxRQUFRLENBQUM7RUFDbkMsQ0FBQztFQUFBM0YsTUFBQSxDQUVEMEUsWUFBWSxHQUFaLFNBQUFBLGFBQWFqRSxLQUFLLEVBQUVDLGFBQWEsRUFBRTtJQUMvQixJQUFNbUksS0FBSyxHQUFHekksQ0FBQyxDQUFDTSxhQUFhLENBQUM7SUFDOUIsSUFBTUMsR0FBRyxHQUFHa0ksS0FBSyxDQUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUU5Qm5GLEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUM7SUFFdEJ5SCxLQUFLLENBQUNJLFdBQVcsQ0FBQyxhQUFhLENBQUM7O0lBRWhDO0lBQ0FoSyx3REFBUSxDQUFDOEosT0FBTyxDQUFDcEksR0FBRyxDQUFDO0lBRXJCLElBQUksSUFBSSxDQUFDdUMsT0FBTyxDQUFDSixTQUFTLEVBQUU7TUFDeEIsSUFBSSxDQUFDSSxPQUFPLENBQUNMLEtBQUssQ0FBQ3dFLEtBQUssQ0FBQyxDQUFDO0lBQzlCO0VBQ0osQ0FBQztFQUFBckgsTUFBQSxDQUVEUSxjQUFjLEdBQWQsU0FBQUEsZUFBZUMsS0FBSyxFQUFFQyxhQUFhLEVBQUU7SUFDakMsSUFBTUMsR0FBRyxHQUFHekIsc0NBQVMsQ0FBQ08sTUFBTSxDQUFDb0IsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQ2pELElBQU1DLFdBQVcsR0FBR1gsQ0FBQyxDQUFDTSxhQUFhLENBQUMsQ0FBQ00sU0FBUyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUUzRE4sR0FBRyxDQUFDTyxLQUFLLENBQUNILFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHQSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzFDLE9BQU9KLEdBQUcsQ0FBQ08sS0FBSyxDQUFDQyxJQUFJOztJQUVyQjtJQUNBLElBQU0rSCxjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsY0FBYyxFQUFFdkksR0FBRyxDQUFDTyxLQUFLLENBQUM7SUFFeENULEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUM7SUFFdEJuQyx3REFBUSxDQUFDOEosT0FBTyxDQUFDN0osdUNBQVUsQ0FBQztNQUFFb0MsUUFBUSxFQUFFWCxHQUFHLENBQUNXLFFBQVE7TUFBRUMsTUFBTSxFQUFFdEMsd0RBQVEsQ0FBQ3VDLGdCQUFnQixDQUFDMEgsY0FBYztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9HLENBQUM7RUFBQWxKLE1BQUEsQ0FFRDJFLGFBQWEsR0FBYixTQUFBQSxjQUFjbEUsS0FBSyxFQUFFQyxhQUFhLEVBQUU7SUFDaENELEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSSxDQUFDLElBQUksQ0FBQ2dILG1CQUFtQixDQUFDaUIsTUFBTSxDQUFDdEgsNkNBQUcsQ0FBQ3VILFNBQVMsQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7TUFDdkQ7SUFDSjtJQUVBLElBQU01SSxHQUFHLEdBQUd6QixzQ0FBUyxDQUFDTyxNQUFNLENBQUNvQixRQUFRLENBQUNDLElBQUksRUFBRSxJQUFJLENBQUM7SUFDakQsSUFBSUMsV0FBVyxHQUFHeUksU0FBUyxDQUFDcEosQ0FBQyxDQUFDTSxhQUFhLENBQUMsQ0FBQ00sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQ3BFRixXQUFXLEdBQUc5Qix3REFBUSxDQUFDd0ssZ0JBQWdCLENBQUMxSSxXQUFXLENBQUM7SUFFcEQsS0FBSyxJQUFNMkksR0FBRyxJQUFJM0ksV0FBVyxFQUFFO01BQzNCLElBQUlBLFdBQVcsQ0FBQzRJLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7UUFDakMvSSxHQUFHLENBQUNPLEtBQUssQ0FBQ3dJLEdBQUcsQ0FBQyxHQUFHM0ksV0FBVyxDQUFDMkksR0FBRyxDQUFDO01BQ3JDO0lBQ0o7O0lBRUE7SUFDQSxJQUFNUixjQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCQyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0YsY0FBYyxFQUFFdkksR0FBRyxDQUFDTyxLQUFLLENBQUM7SUFFeENqQyx3REFBUSxDQUFDOEosT0FBTyxDQUFDN0osdUNBQVUsQ0FBQztNQUFFb0MsUUFBUSxFQUFFWCxHQUFHLENBQUNXLFFBQVE7TUFBRUMsTUFBTSxFQUFFdEMsd0RBQVEsQ0FBQ3VDLGdCQUFnQixDQUFDMEgsY0FBYztJQUFFLENBQUMsQ0FBQyxDQUFDO0VBQy9HLENBQUM7RUFBQWxKLE1BQUEsQ0FFRHFFLGFBQWEsR0FBYixTQUFBQSxjQUFBLEVBQWdCO0lBQ1osSUFBSSxDQUFDYSxVQUFVLENBQUMsQ0FBQztFQUNyQixDQUFDO0VBQUFsRixNQUFBLENBRUR3RSxpQkFBaUIsR0FBakIsU0FBQUEsa0JBQWtCL0QsS0FBSyxFQUFFO0lBQ3JCLElBQU1tRCxnQkFBZ0IsR0FBR3hELENBQUMsQ0FBQ0ssS0FBSyxDQUFDQyxhQUFhLENBQUM7SUFDL0MsSUFBTW1ELFdBQVcsR0FBR0QsZ0JBQWdCLENBQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztJQUNoRSxJQUFNakUsRUFBRSxHQUFHZ0UsV0FBVyxDQUFDSSxRQUFRO0lBRS9CLElBQUlKLFdBQVcsQ0FBQ0UsV0FBVyxFQUFFO01BQ3pCLElBQUksQ0FBQ1gsZUFBZSxHQUFHMkMsbURBQUEsQ0FBUSxJQUFJLENBQUMzQyxlQUFlLEVBQUUsQ0FBQ3ZELEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUMsTUFBTTtNQUNILElBQUksQ0FBQ3VELGVBQWUsR0FBR3lDLHFEQUFBLENBQVUsSUFBSSxDQUFDekMsZUFBZSxFQUFFdkQsRUFBRSxDQUFDO0lBQzlEO0VBQ0osQ0FBQztFQUFBRyxNQUFBLENBRUQySSxVQUFVLEdBQVYsU0FBQUEsV0FBQSxFQUFhO0lBQ1QsSUFBTWlCLFVBQVUsR0FBR25LLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ0MsSUFBSTtJQUN2QyxJQUFNK0ksWUFBWSxHQUFHLElBQUlDLGVBQWUsQ0FBQ0YsVUFBVSxDQUFDO0lBQ3BEO0lBQ0EsSUFBSSxDQUFDQyxZQUFZLENBQUNFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtNQUMzQixJQUFNQyxPQUFPLEdBQUc1SixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ3dGLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDbEQsSUFBTXFFLEVBQUUsR0FBRyxjQUFjO01BQ3pCLElBQU1DLGNBQWMsR0FBR0YsT0FBTyxDQUFDRyxPQUFPLENBQUNGLEVBQUUsRUFBRSxRQUFRLENBQUM7TUFDcER4SyxNQUFNLENBQUMySyxPQUFPLENBQUNDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRTFLLFFBQVEsQ0FBQzJLLEtBQUssRUFBRUosY0FBYyxDQUFDO0lBQ25FO0lBQ0E5SixDQUFDLENBQUNYLE1BQU0sQ0FBQyxDQUFDOEssT0FBTyxDQUFDLGFBQWEsQ0FBQztFQUNwQyxDQUFDO0VBQUEsT0FBQXhILGFBQUE7QUFBQTtBQUdMLGlFQUFlQSxhQUFhOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BiTjtBQUV0QixJQUFNOUQsUUFBUSxHQUFHO0VBQ2JxRyxNQUFNLEVBQUUsU0FBQUEsT0FBQTtJQUFBLFlBQVM3RixNQUFNLENBQUNvQixRQUFRLENBQUNTLFFBQVEsR0FBRzdCLE1BQU0sQ0FBQ29CLFFBQVEsQ0FBQ1UsTUFBTTtFQUFBLENBQUU7RUFFcEV3SCxPQUFPLEVBQUUsU0FBQUEsUUFBQ3BJLEdBQUcsRUFBSztJQUNkbEIsTUFBTSxDQUFDMkssT0FBTyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU3SyxRQUFRLENBQUMySyxLQUFLLEVBQUUzSixHQUFHLENBQUM7SUFDakRQLENBQUMsQ0FBQ1gsTUFBTSxDQUFDLENBQUM4SyxPQUFPLENBQUMsYUFBYSxDQUFDO0VBQ3BDLENBQUM7RUFFREUsYUFBYSxFQUFFLFNBQUFBLGNBQUM5SixHQUFHLEVBQUU2RixNQUFNLEVBQUs7SUFDNUIsSUFBTWtFLE1BQU0sR0FBR3hMLHNDQUFTLENBQUN5QixHQUFHLEVBQUUsSUFBSSxDQUFDO0lBQ25DLElBQUlnSyxLQUFLOztJQUVUO0lBQ0FELE1BQU0sQ0FBQ25KLE1BQU0sR0FBRyxJQUFJO0lBRXBCLEtBQUtvSixLQUFLLElBQUluRSxNQUFNLEVBQUU7TUFDbEIsSUFBSUEsTUFBTSxDQUFDbUQsY0FBYyxDQUFDZ0IsS0FBSyxDQUFDLEVBQUU7UUFDOUJELE1BQU0sQ0FBQ3hKLEtBQUssQ0FBQ3lKLEtBQUssQ0FBQyxHQUFHbkUsTUFBTSxDQUFDbUUsS0FBSyxDQUFDO01BQ3ZDO0lBQ0o7SUFFQSxPQUFPekwsdUNBQVUsQ0FBQ3dMLE1BQU0sQ0FBQztFQUM3QixDQUFDO0VBRURsSixnQkFBZ0IsRUFBRSxTQUFBQSxpQkFBQ29KLFNBQVMsRUFBSztJQUM3QixJQUFJQyxHQUFHLEdBQUcsRUFBRTtJQUNaLElBQUluQixHQUFHO0lBQ1AsS0FBS0EsR0FBRyxJQUFJa0IsU0FBUyxFQUFFO01BQ25CLElBQUlBLFNBQVMsQ0FBQ2pCLGNBQWMsQ0FBQ0QsR0FBRyxDQUFDLEVBQUU7UUFDL0IsSUFBSW9CLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSCxTQUFTLENBQUNsQixHQUFHLENBQUMsQ0FBQyxFQUFFO1VBQy9CLElBQUlzQixHQUFHO1VBRVAsS0FBS0EsR0FBRyxJQUFJSixTQUFTLENBQUNsQixHQUFHLENBQUMsRUFBRTtZQUN4QixJQUFJa0IsU0FBUyxDQUFDbEIsR0FBRyxDQUFDLENBQUNDLGNBQWMsQ0FBQ3FCLEdBQUcsQ0FBQyxFQUFFO2NBQ3BDSCxHQUFHLFVBQVFuQixHQUFHLFNBQUlrQixTQUFTLENBQUNsQixHQUFHLENBQUMsQ0FBQ3NCLEdBQUcsQ0FBRztZQUMzQztVQUNKO1FBQ0osQ0FBQyxNQUFNO1VBQ0hILEdBQUcsVUFBUW5CLEdBQUcsU0FBSWtCLFNBQVMsQ0FBQ2xCLEdBQUcsQ0FBRztRQUN0QztNQUNKO0lBQ0o7SUFFQSxPQUFPbUIsR0FBRyxDQUFDSSxTQUFTLENBQUMsQ0FBQyxDQUFDO0VBQzNCLENBQUM7RUFFRHhCLGdCQUFnQixFQUFFLFNBQUFBLGlCQUFDbUIsU0FBUyxFQUFLO0lBQzdCLElBQU1wRSxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLEtBQUssSUFBSTBFLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR04sU0FBUyxDQUFDbEQsTUFBTSxFQUFFd0QsQ0FBQyxFQUFFLEVBQUU7TUFDdkMsSUFBTUMsSUFBSSxHQUFHUCxTQUFTLENBQUNNLENBQUMsQ0FBQyxDQUFDakssS0FBSyxDQUFDLEdBQUcsQ0FBQztNQUVwQyxJQUFJa0ssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJM0UsTUFBTSxFQUFFO1FBQ25CLElBQUlzRSxLQUFLLENBQUNDLE9BQU8sQ0FBQ3ZFLE1BQU0sQ0FBQzJFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDaEMzRSxNQUFNLENBQUMyRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ25ILElBQUksQ0FBQ21ILElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLE1BQU07VUFDSDNFLE1BQU0sQ0FBQzJFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMzRSxNQUFNLENBQUMyRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hEO01BQ0osQ0FBQyxNQUFNO1FBQ0gzRSxNQUFNLENBQUMyRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0EsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUM3QjtJQUNKO0lBRUEsT0FBTzNFLE1BQU07RUFDakI7QUFDSixDQUFDO0FBRUQsaUVBQWV2SCxRQUFROzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JFa0I7QUFFekMsU0FBU29NLGdCQUFnQkEsQ0FBQ0MsT0FBTyxFQUFFQyxJQUFJLEVBQUU7RUFDckMsSUFBTS9ILEtBQUssR0FBRzhILE9BQU8sQ0FBQ3BFLE9BQU8sQ0FBQ3FFLElBQUksQ0FBQztFQUVuQyxJQUFJL0gsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1o4SCxPQUFPLENBQUNFLE1BQU0sQ0FBQ2hJLEtBQUssRUFBRSxDQUFDLENBQUM7RUFDNUI7QUFDSjtBQUVBLFNBQVNpSSxnQkFBZ0JBLENBQUNILE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDRCxPQUFPLENBQUN0SCxJQUFJLENBQUN1SCxJQUFJLENBQUM7QUFDdEI7QUFFQSxTQUFTRyxnQkFBZ0JBLENBQUNKLE9BQU8sRUFBRXpDLEtBQUssRUFBRThDLElBQUksRUFBRTtFQUM1QyxJQUFJTCxPQUFPLENBQUM1RCxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3BCLElBQUksQ0FBQ21CLEtBQUssQ0FBQzFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRTtNQUN0QjBFLEtBQUssQ0FBQytDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDMUI7SUFDQS9DLEtBQUssQ0FBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUsrRixJQUFJLENBQUNFLE9BQU8sU0FBSVAsT0FBTyxDQUFDUSxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7SUFDMURqRCxLQUFLLENBQUNrRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPLENBQUM1RCxNQUFNLENBQUM7RUFDckQsQ0FBQyxNQUFNO0lBQ0htQixLQUFLLENBQUNvRCxXQUFXLENBQUMsTUFBTSxDQUFDO0VBQzdCO0FBQ0o7QUFFQSw2QkFBZSxvQ0FBQUMsSUFBQSxFQUFzQztFQUFBLElBQTFCQyxnQkFBZ0IsR0FBQUQsSUFBQSxDQUFoQkMsZ0JBQWdCO0lBQUVSLElBQUksR0FBQU8sSUFBQSxDQUFKUCxJQUFJO0VBQzdDLElBQUlTLGNBQWMsR0FBRyxFQUFFO0VBRXZCLElBQU1DLFlBQVksR0FBR2pNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztFQUU3Q0EsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDc0ksRUFBRSxDQUFDLGNBQWMsRUFBRSxZQUFNO0lBQy9CLElBQU00RCxRQUFRLEdBQUdsTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMyTCxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFFckVLLGNBQWMsR0FBR0UsUUFBUSxDQUFDNUUsTUFBTSxHQUFHNEUsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQy9JLEtBQUssRUFBRXdELE9BQU87TUFBQSxPQUFLQSxPQUFPLENBQUN3RixLQUFLO0lBQUEsRUFBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUU7SUFDN0ZmLGdCQUFnQixDQUFDVSxjQUFjLEVBQUVDLFlBQVksRUFBRVYsSUFBSSxDQUFDO0VBQ3hELENBQUMsQ0FBQztFQUVGdkwsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDc00sY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV4Q3RNLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3NJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsVUFBQWpJLEtBQUssRUFBSTtJQUNoRCxJQUFNa00sT0FBTyxHQUFHbE0sS0FBSyxDQUFDQyxhQUFhLENBQUM4TCxLQUFLO0lBQ3pDLElBQU1JLG1CQUFtQixHQUFHeE0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0lBRXBELElBQUlLLEtBQUssQ0FBQ0MsYUFBYSxDQUFDbU0sT0FBTyxFQUFFO01BQzdCcEIsZ0JBQWdCLENBQUNXLGNBQWMsRUFBRU8sT0FBTyxDQUFDO0lBQzdDLENBQUMsTUFBTTtNQUNIdEIsZ0JBQWdCLENBQUNlLGNBQWMsRUFBRU8sT0FBTyxDQUFDO0lBQzdDO0lBRUFqQixnQkFBZ0IsQ0FBQ1UsY0FBYyxFQUFFUSxtQkFBbUIsRUFBRWpCLElBQUksQ0FBQztFQUMvRCxDQUFDLENBQUM7RUFFRnZMLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3NJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsVUFBQWpJLEtBQUssRUFBSTtJQUN0RCxJQUFNcU0sS0FBSyxHQUFHMU0sQ0FBQyxDQUFDSyxLQUFLLENBQUNDLGFBQWEsQ0FBQztJQUNwQyxJQUFNcU0saUJBQWlCLEdBQUdELEtBQUssQ0FBQ2YsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRTFFLElBQUlnQixpQkFBaUIsQ0FBQ3JGLE1BQU0sSUFBSSxDQUFDLEVBQUU7TUFDL0IwRCxzREFBYyxDQUFDZSxnQkFBZ0IsQ0FBQztNQUNoQzFMLEtBQUssQ0FBQ1csY0FBYyxDQUFDLENBQUM7SUFDMUI7RUFDSixDQUFDLENBQUM7RUFFRmhCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3NJLEVBQUUsQ0FBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBTTtJQUMvQyxJQUFNc0Usb0JBQW9CLEdBQUc1TSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMyTCxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFFakYsSUFBSWlCLG9CQUFvQixDQUFDdEYsTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNsQzBELHNEQUFjLENBQUNlLGdCQUFnQixDQUFDO01BQ2hDLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBLDZCQUFlLHNDQUFXO0VBQ3RCLElBQU1jLGVBQWUsR0FBRzdNLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQztJQUNuRThNLEtBQUssR0FBRzlNLENBQUMsQ0FBQyxZQUFZLENBQUM7SUFDdkIrTSxLQUFLLEdBQUcvTSxDQUFDLENBQUMsWUFBWSxDQUFDO0lBQ3ZCZ04sV0FBVyxHQUFHaE4sQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0lBQ3BDaU4sV0FBVyxHQUFHak4sQ0FBQyxDQUFDLG1CQUFtQixDQUFDO0VBRXhDK00sS0FBSyxDQUFDekUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBakksS0FBSyxFQUFJO0lBQ3ZCLElBQUksQ0FBQzBNLEtBQUssQ0FBQ0csUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ2pDcEosVUFBVSxDQUFDLFlBQVU7UUFDakJpSixLQUFLLENBQUN2QixRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlCeUIsV0FBVyxDQUFDekIsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUNwQ3NCLEtBQUssQ0FBQ2pCLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakNtQixXQUFXLENBQUNuQixXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3ZDZ0IsZUFBZSxDQUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDO01BQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNMLENBQUMsQ0FBQztFQUVEc0IsS0FBSyxDQUFDeEUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBakksS0FBSyxFQUFJO0lBQ3ZCLElBQUksQ0FBQ3lNLEtBQUssQ0FBQ0ksUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ2pDcEosVUFBVSxDQUFDLFlBQVU7UUFDakJnSixLQUFLLENBQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlCd0IsV0FBVyxDQUFDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUNwQ3VCLEtBQUssQ0FBQ2xCLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakNvQixXQUFXLENBQUNwQixXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3ZDZ0IsZUFBZSxDQUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDO01BQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKLENBQUMsQ0FBQztFQUVGeUIsV0FBVyxDQUFDM0UsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBakksS0FBSyxFQUFJO0lBQzdCLElBQUksQ0FBQzRNLFdBQVcsQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ3ZDcEosVUFBVSxDQUFDLFlBQVU7UUFDakJpSixLQUFLLENBQUN2QixRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlCeUIsV0FBVyxDQUFDekIsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUNwQ3NCLEtBQUssQ0FBQ2pCLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakNtQixXQUFXLENBQUNuQixXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3ZDZ0IsZUFBZSxDQUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDO01BQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKLENBQUMsQ0FBQztFQUVGd0IsV0FBVyxDQUFDMUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFBakksS0FBSyxFQUFJO0lBQzdCLElBQUksQ0FBQzJNLFdBQVcsQ0FBQ0UsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQ3ZDcEosVUFBVSxDQUFDLFlBQVU7UUFDakJnSixLQUFLLENBQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDO1FBQzlCd0IsV0FBVyxDQUFDeEIsUUFBUSxDQUFDLGNBQWMsQ0FBQztRQUNwQ3VCLEtBQUssQ0FBQ2xCLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakNvQixXQUFXLENBQUNwQixXQUFXLENBQUMsY0FBYyxDQUFDO1FBQ3ZDZ0IsZUFBZSxDQUFDaEIsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDO01BQ3RFLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWDtFQUNKLENBQUMsQ0FBQztBQUNOOzs7Ozs7Ozs7Ozs7Ozs7O0FDdERBLDZCQUFlLHNDQUFXO0VBQ3RCLElBQUl4TCxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ3NILE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDdEN0SCxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUFDK0ksRUFBRSxDQUFDLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxVQUFBakksS0FBSyxFQUFJO01BQ3BFLElBQUk4TSxPQUFPLEdBQUduTixDQUFDLENBQUNLLEtBQUssQ0FBQ0MsYUFBYSxDQUFDLENBQUM4TSxNQUFNLENBQUMsQ0FBQztNQUU3Q0QsT0FBTyxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUFDeEIsV0FBVyxDQUFDLHlCQUF5QixDQUFDO01BQ3pEc0IsT0FBTyxDQUFDdEUsV0FBVyxDQUFDLFlBQVksQ0FBQztNQUNqQ3NFLE9BQU8sQ0FBQ0UsUUFBUSxDQUFDLENBQUMsQ0FBQzFCLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDMkIsT0FBTyxDQUFDLE1BQU0sQ0FBQztNQUNwRUgsT0FBTyxDQUFDeEIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM0QixXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2pFLENBQUMsQ0FBQztJQUVGdk4sQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNtRCxJQUFJLENBQUMsVUFBQ0MsS0FBSyxFQUFFd0QsT0FBTyxFQUFLO01BQ2xELElBQUk1RyxDQUFDLENBQUM0RyxPQUFPLENBQUMsQ0FBQ3NHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtRQUNyQ2xOLENBQUMsQ0FBQzRHLE9BQU8sQ0FBQyxDQUFDK0UsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM0QixXQUFXLENBQUMsTUFBTSxDQUFDO01BQ3BFO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQSw2QkFBZSxvQ0FBU3JPLE9BQU8sRUFBRTtFQUM3QixJQUFNc08sS0FBSyxHQUFHeE4sQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUV2QixTQUFTeU4sY0FBY0EsQ0FBQSxFQUFHO0lBQ3RCLElBQUlDLGdCQUFnQjtNQUFFQyxjQUFjO01BQ2hDQyxPQUFPLEdBQUc1TixDQUFDLENBQUMsNkJBQTZCLENBQUM7SUFFOUMyTixjQUFjLEdBQUdDLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDLENBQUM7SUFDakNILGdCQUFnQixHQUFHRSxPQUFPLENBQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUNDLEdBQUcsR0FBR0gsT0FBTyxDQUFDSSxXQUFXLENBQUMsSUFBSSxDQUFDO0lBRW5FLElBQUlKLE9BQU8sQ0FBQ3RHLE1BQU0sRUFBRTtNQUNoQjJHLGNBQWMsQ0FBQ1AsZ0JBQWdCLEVBQUVDLGNBQWMsRUFBRUMsT0FBTyxDQUFDO0lBQzdEO0VBQ0o7RUFFQSxTQUFTSyxjQUFjQSxDQUFDUCxnQkFBZ0IsRUFBRUMsY0FBYyxFQUFFQyxPQUFPLEVBQUU7SUFDL0QsSUFBSU0sU0FBUztNQUNUQyxhQUFhLEdBQUcsQ0FBQztNQUNqQkMsS0FBSyxHQUFHLENBQUM7SUFFYnBPLENBQUMsQ0FBQ1gsTUFBTSxDQUFDLENBQUNpSixFQUFFLENBQUMsYUFBYSxFQUFFLFlBQVc7TUFDbkMsSUFBSStGLE1BQU0sR0FBR3JPLENBQUMsQ0FBQ1gsTUFBTSxDQUFDLENBQUNpUCxTQUFTLENBQUMsQ0FBQztNQUVsQyxJQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0wsYUFBYSxHQUFHRSxNQUFNLENBQUMsSUFBSUQsS0FBSyxFQUFDO1FBQ3pDO01BQ0o7TUFFQSxJQUFJQyxNQUFNLEdBQUdGLGFBQWEsSUFBSUUsTUFBTSxHQUFHWCxnQkFBZ0IsRUFBQztRQUNwREUsT0FBTyxDQUFDL0IsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDTCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBRXhELElBQUk2QyxNQUFNLEdBQUdYLGdCQUFnQixFQUFFO1VBQzNCRixLQUFLLENBQUNoQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7UUFDdkMsQ0FBQyxNQUFNO1VBQ0hnQyxLQUFLLENBQUMzQixXQUFXLENBQUMsbUJBQW1CLENBQUM7UUFDMUM7TUFDSixDQUFDLE1BQU07UUFDSCxJQUFHd0MsTUFBTSxHQUFHck8sQ0FBQyxDQUFDWCxNQUFNLENBQUMsQ0FBQ3dPLE1BQU0sQ0FBQyxDQUFDLEdBQUc3TixDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUFDc08sTUFBTSxDQUFDLENBQUMsRUFBRTtVQUNuREQsT0FBTyxDQUFDL0IsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDTCxRQUFRLENBQUMsYUFBYSxDQUFDO1VBRXhELElBQUk2QyxNQUFNLEdBQUdYLGdCQUFnQixFQUFFO1lBQzNCRixLQUFLLENBQUNoQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7VUFDdkMsQ0FBQyxNQUFNO1lBQ0hnQyxLQUFLLENBQUMzQixXQUFXLENBQUMsbUJBQW1CLENBQUM7VUFDMUM7UUFDSjtNQUNKO01BRUFzQyxhQUFhLEdBQUdFLE1BQU07SUFDMUIsQ0FBQyxDQUFDO0VBQ047RUFFQSxJQUFJck8sQ0FBQyxDQUFDWCxNQUFNLENBQUMsQ0FBQ29QLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxFQUFFO0lBQzFCLElBQUd2UCxPQUFPLENBQUN3UCxhQUFhLENBQUNDLGlCQUFpQixFQUFDO01BQ3ZDbEIsY0FBYyxDQUFDLENBQUM7SUFDcEI7RUFDSixDQUFDLE1BQUs7SUFDRkQsS0FBSyxDQUFDM0IsV0FBVyxDQUFDLG1CQUFtQixDQUFDO0VBQzFDO0FBQ0o7Ozs7Ozs7Ozs7QUMxREEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdXJsLXV0aWxzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvaWdub3JlZHxEOlxcQmlnY29tbWVyY2VcXEN1c3RvbWVyXFxDb3JuZWwgTWl1XFwxMTA5MjAyM1xcU3RlcGhhbnVzIEV2ZW50IERldGFpbCBQYXJ0IDMtMS4wLjBcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCA9PT0gJ3NvcnQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXJyYW5nZUZvY3VzT25Tb3J0QnkoKSB7XG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5U3RhdHVzJykpIHtcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci5mb2N1cygpO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0QnlTdGF0dXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgIHByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWluX3ByaWNlXScsXG4gICAgc2hvd01vcmVUb2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tY29udGVudCAudG9nZ2xlTGluaycsXG4gICAgZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zOiAnI2ZhY2V0ZWRTZWFyY2gtZmlsdGVySXRlbXMgLmZvcm0taW5wdXQnLFxuICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgIG1vZGFsT3BlbjogZmFsc2UsXG59O1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgLy8gUHJpdmF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBfLmV4dGVuZCh7fSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IFtdO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBbXTtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Ub2dnbGVDbGljayA9IHRoaXMub25Ub2dnbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlID0gdGhpcy5vbkFjY29yZGlvblRvZ2dsZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uQ2xlYXJGYWNldCA9IHRoaXMub25DbGVhckZhY2V0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25GYWNldENsaWNrID0gdGhpcy5vbkZhY2V0Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblJhbmdlU3VibWl0ID0gdGhpcy5vblJhbmdlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyA9IHRoaXMuZmlsdGVyRmFjZXRJdGVtcy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmVmcmVzaFZpZXcoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhjb250ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gUmVzdG9yZSB2aWV3IHN0YXRlXG4gICAgICAgIHRoaXMucmVzdG9yZUNvbGxhcHNlZEZhY2V0cygpO1xuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zKCk7XG5cbiAgICAgICAgLy8gQmluZCBldmVudHNcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlVmlldygpIHtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5zaG93KCk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2UodXJsVXRpbHMuZ2V0VXJsKCksIHRoaXMucmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFJlZnJlc2ggdmlldyB3aXRoIG5ldyBjb250ZW50XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hWaWV3KGNvbnRlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAoXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IF8uaW5jbHVkZXModGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGN1cnJlbnRVcmwpO1xuICAgICAgICAvLyBJZiBzZWFyY2hQYXJhbXMgZG9lcyBub3QgY29udGFpbiBhIHBhZ2UgdmFsdWUgdGhlbiBtb2RpZnkgdXJsIHF1ZXJ5IHN0cmluZyB0byBoYXZlIHBhZ2U9MVxuICAgICAgICBpZiAoIXNlYXJjaFBhcmFtcy5oYXMoJ3BhZ2UnKSkge1xuICAgICAgICAgICAgY29uc3QgbGlua1VybCA9ICQoJy5wYWdpbmF0aW9uLWxpbmsnKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBjb25zdCByZSA9IC9wYWdlPVswLTldKy9pO1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UocmUsICdwYWdlPTEnKTtcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIHVwZGF0ZWRMaW5rVXJsKTtcbiAgICAgICAgfVxuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2V0ZWRTZWFyY2g7XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICBidWlsZFF1ZXJ5U3RyaW5nOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGxldCBvdXQgPSAnJztcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgZm9yIChrZXkgaW4gcXVlcnlEYXRhKSB7XG4gICAgICAgICAgICBpZiAocXVlcnlEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShxdWVyeURhdGFba2V5XSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5keDtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKG5keCBpbiBxdWVyeURhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YVtrZXldLmhhc093blByb3BlcnR5KG5keCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XVtuZHhdfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvdXQgKz0gYCYke2tleX09JHtxdWVyeURhdGFba2V5XX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvdXQuc3Vic3RyaW5nKDEpO1xuICAgIH0sXG5cbiAgICBwYXJzZVF1ZXJ5UGFyYW1zOiAocXVlcnlEYXRhKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlEYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gcXVlcnlEYXRhW2ldLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgICAgIGlmICh0ZW1wWzBdIGluIHBhcmFtcykge1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtc1t0ZW1wWzBdXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dLnB1c2godGVtcFsxXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gW3BhcmFtc1t0ZW1wWzBdXSwgdGVtcFsxXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbdGVtcFswXV0gPSB0ZW1wWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iLCJpbXBvcnQgeyBzaG93QWxlcnRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuXG5mdW5jdGlvbiBkZWNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb25zdCBpbmRleCA9IGNvdW50ZXIuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgIGNvdW50ZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvdW50ZXIucHVzaChpdGVtKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ291bnRlck5hdihjb3VudGVyLCAkbGluaywgdXJscykge1xuICAgIGlmIChjb3VudGVyLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG5vQ29tcGFyZU1lc3NhZ2UsIHVybHMgfSkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwobm9Db21wYXJlTWVzc2FnZSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyksXG4gICAgICAgICRncmlkID0gJCgnI2dyaWQtdmlldycpLFxuICAgICAgICAkbGlzdCA9ICQoJyNsaXN0LXZpZXcnKSxcbiAgICAgICAgJGdyaWRNb2JpbGUgPSAkKCcjZ3JpZC12aWV3LW1vYmlsZScpLFxuICAgICAgICAkbGlzdE1vYmlsZSA9ICQoJyNsaXN0LXZpZXctbW9iaWxlJyk7XG5cbiAgICAkbGlzdC5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICghJGxpc3QuaGFzQ2xhc3MoJ2N1cnJlbnQtdmlldycpKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IFxuICAgICAgICAgICAgICAgICRsaXN0LmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdE1vYmlsZS5hZGRDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWQucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLnJlbW92ZUNsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmcucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RHcmlkJykuYWRkQ2xhc3MoJ3Byb2R1Y3RMaXN0Jyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9XG4gICB9KTtcblxuICAgICRncmlkLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkZ3JpZC5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGdyaWQuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdExpc3QnKS5hZGRDbGFzcygncHJvZHVjdEdyaWQnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRsaXN0TW9iaWxlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkbGlzdE1vYmlsZS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGxpc3QuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRsaXN0TW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkZ3JpZC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGdyaWRNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdEdyaWQnKS5hZGRDbGFzcygncHJvZHVjdExpc3QnKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICRncmlkTW9iaWxlLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCEkZ3JpZE1vYmlsZS5oYXNDbGFzcygnY3VycmVudC12aWV3JykpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgXG4gICAgICAgICAgICAgICAgJGdyaWQuYWRkQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRncmlkTW9iaWxlLmFkZENsYXNzKCdjdXJyZW50LXZpZXcnKTtcbiAgICAgICAgICAgICAgICAkbGlzdC5yZW1vdmVDbGFzcygnY3VycmVudC12aWV3Jyk7XG4gICAgICAgICAgICAgICAgJGxpc3RNb2JpbGUucmVtb3ZlQ2xhc3MoJ2N1cnJlbnQtdmlldycpO1xuICAgICAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZy5yZW1vdmVDbGFzcygncHJvZHVjdExpc3QnKS5hZGRDbGFzcygncHJvZHVjdEdyaWQnKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuYWxsLWNhdGVnb3JpZXMtbGlzdCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5hbGwtY2F0ZWdvcmllcy1saXN0IC5pY29uLWRyb3Bkb3duJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnBhcmVudCgpO1xuXG4gICAgICAgICAgICAkdGFyZ2V0LnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2lzLWNsaWNrZWQgY3VycmVudC1jYXRlJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnRvZ2dsZUNsYXNzKCdpcy1jbGlja2VkJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnNpYmxpbmdzKCkuZmluZChcIj4gLmRyb3Bkb3duLWNhdGVnb3J5LWxpc3RcIikuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICAkdGFyZ2V0LmZpbmQoXCI+IC5kcm9wZG93bi1jYXRlZ29yeS1saXN0XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmFsbC1jYXRlZ29yaWVzLWxpc3QgbGknKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaGFzQ2xhc3MoJ2N1cnJlbnQtY2F0ZScpKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKFwiPiAuZHJvcGRvd24tY2F0ZWdvcnktbGlzdFwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgIGZ1bmN0aW9uIHRvb2xiYXJfc3RpY2t5KCkge1xuICAgICAgICB2YXIgdG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsXG4gICAgICAgICAgICB0b29sYmFyID0gJCgnLnBhZ2UtbGlzdGluZyAuaGFsby10b29sYmFyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgdG9vbGJhcl9oZWlnaHQgPSB0b29sYmFyLmhlaWdodCgpO1xuICAgICAgICB0b29sYmFyX3Bvc2l0aW9uID0gdG9vbGJhci5vZmZzZXQoKS50b3AgKyB0b29sYmFyLm91dGVySGVpZ2h0KHRydWUpO1xuXG4gICAgICAgIGlmICh0b29sYmFyLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9vbGJhcl9zY3JvbGwodG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsIHRvb2xiYXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9vbGJhcl9zY3JvbGwodG9vbGJhcl9wb3NpdGlvbiwgdG9vbGJhcl9oZWlnaHQsIHRvb2xiYXIpIHtcbiAgICAgICAgdmFyIGRpZFNjcm9sbCxcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSAwLFxuICAgICAgICAgICAgZGVsdGEgPSA1O1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsIGxvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmKE1hdGguYWJzKGxhc3RTY3JvbGxUb3AgLSBzY3JvbGwpIDw9IGRlbHRhKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGwgPiBsYXN0U2Nyb2xsVG9wICYmIHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pe1xuICAgICAgICAgICAgICAgIHRvb2xiYXIucmVtb3ZlQ2xhc3MoJ3N0aWNreS1kb3duJykuYWRkQ2xhc3MoJ3N0aWNreS11cCcpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGwgPiB0b29sYmFyX3Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYoc2Nyb2xsICsgJCh3aW5kb3cpLmhlaWdodCgpIDwgJChkb2N1bWVudCkuaGVpZ2h0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9vbGJhci5yZW1vdmVDbGFzcygnc3RpY2t5LXVwJykuYWRkQ2xhc3MoJ3N0aWNreS1kb3duJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbCA+IHRvb2xiYXJfcG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LmFkZENsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ2hhcy1zdGlja3lUb29sYmFyJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzY3JvbGw7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcbiAgICAgICAgaWYoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9TdGlja3lUb29sYmFyKXtcbiAgICAgICAgICAgIHRvb2xiYXJfc3RpY2t5KCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2V7XG4gICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdoYXMtc3RpY2t5VG9vbGJhcicpO1xuICAgIH1cbn1cbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJQYWdlTWFuYWdlciIsInVybFV0aWxzIiwiVXJsIiwiQ2F0YWxvZ1BhZ2UiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiX3Byb3RvIiwicHJvdG90eXBlIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCIkc29ydEJ5U2VsZWN0b3IiLCIkIiwiZ2V0SXRlbSIsImZvY3VzIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJkZWZhdWx0IiwiaG9va3MiLCJhcGkiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwiZXhwYW5kRmFjZXRJdGVtcyIsIiRuYXZMaXN0IiwiYXR0ciIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiX2luY2x1ZGVzIiwiZ2V0TW9yZUZhY2V0UmVzdWx0cyIsIl90aGlzMyIsImZhY2V0IiwiZmFjZXRVcmwiLCJzaG93TW9yZSIsInRlbXBsYXRlIiwicGFyYW1zIiwibGlzdF9hbGwiLCJyZXNwb25zZSIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidmFsIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwidGV4dCIsImluZGV4T2YiLCJleHBhbmRGYWNldCIsImNvbGxhcHNlRmFjZXQiLCJjbG9zZSIsIl90aGlzNCIsIiRhY2NvcmRpb25Ub2dnbGVzIiwiZXhwYW5kQWxsRmFjZXRzIiwiX3RoaXM1IiwibGVuZ3RoIiwidmFsaWRhdG9yIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJmb3JtU2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIl90aGlzNiIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiX3RoaXM3IiwidW5iaW5kRXZlbnRzIiwib24iLCJvblBvcFN0YXRlIiwib2ZmIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJnb1RvVXJsIiwiJHRvZ2dsZSIsInRvZ2dsZUNsYXNzIiwidXJsUXVlcnlQYXJhbXMiLCJPYmplY3QiLCJhc3NpZ24iLCJhcmVBbGwiLCJjb25zdGFudHMiLCJWQUxJRCIsImRlY29kZVVSSSIsInBhcnNlUXVlcnlQYXJhbXMiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsImN1cnJlbnRVcmwiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJoYXMiLCJsaW5rVXJsIiwicmUiLCJ1cGRhdGVkTGlua1VybCIsInJlcGxhY2UiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJ0cmlnZ2VyIiwicHVzaFN0YXRlIiwicmVwbGFjZVBhcmFtcyIsInBhcnNlZCIsInBhcmFtIiwicXVlcnlEYXRhIiwib3V0IiwiQXJyYXkiLCJpc0FycmF5IiwibmR4Iiwic3Vic3RyaW5nIiwiaSIsInRlbXAiLCJzaG93QWxlcnRNb2RhbCIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJ1cGRhdGVDb3VudGVyTmF2IiwidXJscyIsImFkZENsYXNzIiwiY29tcGFyZSIsImpvaW4iLCJmaW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiX3JlZiIsIm5vQ29tcGFyZU1lc3NhZ2UiLCJjb21wYXJlQ291bnRlciIsIiRjb21wYXJlTGluayIsIiRjaGVja2VkIiwibWFwIiwidmFsdWUiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCIkY2xpY2tlZENvbXBhcmVMaW5rIiwiY2hlY2tlZCIsIiR0aGlzIiwicHJvZHVjdHNUb0NvbXBhcmUiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCIsIiRwcm9kdWN0TGlzdGluZyIsIiRncmlkIiwiJGxpc3QiLCIkZ3JpZE1vYmlsZSIsIiRsaXN0TW9iaWxlIiwiaGFzQ2xhc3MiLCIkdGFyZ2V0IiwicGFyZW50Iiwic2libGluZ3MiLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCIkYm9keSIsInRvb2xiYXJfc3RpY2t5IiwidG9vbGJhcl9wb3NpdGlvbiIsInRvb2xiYXJfaGVpZ2h0IiwidG9vbGJhciIsImhlaWdodCIsIm9mZnNldCIsInRvcCIsIm91dGVySGVpZ2h0IiwidG9vbGJhcl9zY3JvbGwiLCJkaWRTY3JvbGwiLCJsYXN0U2Nyb2xsVG9wIiwiZGVsdGEiLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJNYXRoIiwiYWJzIiwid2lkdGgiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb1N0aWNreVRvb2xiYXIiXSwic291cmNlUm9vdCI6IiJ9