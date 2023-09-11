"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_search_js"],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















var leftArrowKey = 37;
var rightArrowKey = 39;
var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$productListingContainer.removeClass('u-hidden');
    this.$facetedSearchContainer.removeClass('u-hidden');
    this.$contentResultsContainer.addClass('u-hidden');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action').addClass('navBar-action-color--active');
    $('[data-product-results-toggle]').parent('.navBar-item').addClass('navBar-item--active');
    $('[data-product-results-toggle]').parent('.navBar-item').siblings().removeClass('navBar-item--active');
    this.activateTab($('[data-product-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }
    this.$contentResultsContainer.removeClass('u-hidden');
    this.$productListingContainer.addClass('u-hidden');
    this.$facetedSearchContainer.addClass('u-hidden');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action').addClass('navBar-action-color--active');
    $('[data-content-results-toggle]').parent('.navBar-item').addClass('navBar-item--active');
    $('[data-content-results-toggle]').parent('.navBar-item').siblings().removeClass('navBar-item--active');
    this.activateTab($('[data-content-results-toggle]'));
    if (!navigate) {
      return;
    }
    var searchData = $('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.activateTab = function activateTab($tabToActivate) {
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    $tabsCollection.each(function (idx, tab) {
      var $tab = $(tab);
      if ($tab.is($tabToActivate)) {
        $tab.removeAttr('tabindex');
        $tab.attr('aria-selected', true);
        return;
      }
      $tab.attr('tabindex', '-1');
      $tab.attr('aria-selected', false);
    });
  };
  _proto.onTabChangeWithArrows = function onTabChangeWithArrows(event) {
    var eventKey = event.which;
    var isLeftOrRightArrowKeydown = eventKey === leftArrowKey || eventKey === rightArrowKey;
    if (!isLeftOrRightArrowKeydown) return;
    var $tabsCollection = $('[data-search-page-tabs]').find('[role="tab"]');
    var isActiveElementNotTab = $tabsCollection.index($(document.activeElement)) === -1;
    if (isActiveElementNotTab) return;
    var $activeTab = $("#" + document.activeElement.id);
    var activeTabIdx = $tabsCollection.index($activeTab);
    var lastTabIdx = $tabsCollection.length - 1;
    var nextTabIdx;
    switch (eventKey) {
      case leftArrowKey:
        nextTabIdx = activeTabIdx === 0 ? lastTabIdx : activeTabIdx - 1;
        break;
      case rightArrowKey:
        nextTabIdx = activeTabIdx === lastTabIdx ? 0 : activeTabIdx + 1;
        break;
      default:
        break;
    }
    $($tabsCollection.get(nextTabIdx)).focus().trigger('click');
  };
  _proto.onReady = function onReady() {
    var _this2 = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    this.arrangeFocusOnSortBy();
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.showContent();
    });
    $('[data-search-page-tabs]').on('keyup', this.onTabChangeWithArrows);
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
    var $searchResultsMessage = $("<p\n            class=\"aria-description--hidden\"\n            tabindex=\"-1\"\n            role=\"status\"\n            aria-live=\"polite\"\n            >" + this.context.searchResultsCount + "</p>").prependTo('body');
    setTimeout(function () {
      return $searchResultsMessage.focus();
    }, 100);
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_10__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_12__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_13__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_14__["default"])(this.context);
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
    this.showItem();
  };
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;
    // eslint-disable-next-line object-curly-newline
    var _this$context = this.context,
      onMinPriceError = _this$context.onMinPriceError,
      onMaxPriceError = _this$context.onMaxPriceError,
      minPriceNotEntered = _this$context.minPriceNotEntered,
      maxPriceNotEntered = _this$context.maxPriceNotEntered,
      onInvalidPrice = _this$context.onInvalidPrice;
    var $productListingContainer = $('#product-listing-container');
    var $contentListingContainer = $('#search-results-content');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var $contentCount = $('#search-results-content-count');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6__.parse(window.location.href, true);
      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);
        _this5.showContent(false);
      } else {
        $productListingContainer.find('.product-listing-content').html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);
        $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
        _this5.showProducts(false);
        _this5.showProductsPerPage();
        _this5.showMoreProducts();
        _this5.showPaginationInfoToolbar();
        _this5.showItem();
        if ($('#product-listing-container .product').length > 0) {
          (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(_this5.context, 'product-listing-container');
        }
      }
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
      var $topProduct = $('#faceted-search-container #featured-products .products-list');
      if ($topProduct.length) {
        $topProduct.slick();
      }
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
    }
  };
  _proto.showProductsPerPage = function showProductsPerPage() {
    try {
      var url = new URL(window.location.href);
      var c = url.searchParams.get("limit");
      if (c != null) {
        var limit = document.querySelectorAll('select#limit option');
        Array.prototype.forEach.call(limit, function (element) {
          if (element.value == c) {
            element.selected = true;
          }
        });
      }
    } catch (e) {}
  };
  _proto.showItem = function showItem() {
    var total = parseInt($('.pagination-info .total').text()),
      limit = this.getUrlParameter('limit'),
      productPerPage;
    if (limit !== undefined) {
      productPerPage = limit;
    } else {
      productPerPage = this.context.searchProductsPerPage;
    }
    var start = 1,
      end = total,
      checkLastPage = false,
      lastPage = 1;
    var checkLink = $(".pagination-list .pagination-item--current").next();
    var pageNotLast = lastPage - 1;
    var totalNotLast = pageNotLast * productPerPage;
    var productsLastPage = total - totalNotLast;
    var currentPage = parseInt($('.pagination-item--current > a').text());
    var prevPage = currentPage - 1;
    if (checkLink.length === 0) {
      lastPage = parseInt($(".pagination-item--current").find("a").text());
      checkLastPage = true;
    } else {
      lastPage = parseInt(checkLink.find("a").text());
      checkLastPage = false;
    }
    if (total <= productPerPage) {
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    } else {
      if (currentPage <= 1) {
        end = productPerPage;
      } else {
        start = prevPage * productPerPage + 1;
        if (checkLastPage = true) {
          if ($('.pagination-list .pagination-item--next').length > 0) {
            end = totalNotLast + productsLastPage - 1;
          } else {
            end = totalNotLast + productsLastPage;
          }
        } else {
          end = currentPage * productPerPage;
        }
      }
      $('.pagination-info .start').text(start);
      $('.pagination-info .end').text(end);
    }
    this.showPaginationTotalProgress();
  };
  _proto.getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;
    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };
  _proto.showMoreProducts = function showMoreProducts() {
    var _this6 = this;
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
    var requestOptions = {
      config: {
        product_results: {
          shop_by_price: true,
          products: {
            limit: context.searchProductsPerPage
          }
        }
      },
      template: {
        productListing: 'search/halo-product-listing',
        sidebar: 'search/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'search/show-more'
    };
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination-list');
    var $showMoreContainer = $('.halo-product-show-more');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $('.pagination-item--current').next(),
        link = nextPage.find('a').attr('href');
      if (link == undefined) {
        if (!$('#listing-showmoreBtn > a').hasClass('disable')) {
          $('#listing-showmoreBtn > a').addClass('disable');
        }
      } else {
        $('#listing-showmoreBtn > a').addClass('loading');
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.api.getPage(link.replace("http://", "//"), requestOptions, function (err, content) {
          if (err) {
            throw new Error(err);
          }
          if (content.productListing != '') {
            $productListingContainer.append(content.productListing);
            $paginatorContainer.html($(content.paginator).find('.pagination-list').children());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            nextPage = $('.pagination-item--current').next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn > a').addClass('disable').text('No more products');
              $('.pagination .pagination-info .end').text($('.toolbar-left .pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                productPerPage,
                pageCurrent = parseInt($('.pagination-item--current > a').text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.searchProductsPerPage;
              }
              var total = parseInt(productPerPage) * pageCurrent;
              $('.pagination .pagination-info .end').text(total);
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this6.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_11__["default"])(context, 'product-listing-container');
          }
        });
      }
    });
  };
  _proto.showPaginationTotalProgress = function showPaginationTotalProgress() {
    var txt_end = $('.pagination-info .end').text(),
      txt_total = $('.pagination-info .total').text(),
      num_end = num_end != '' ? Number(txt_end.replace(/[^0-9.-]+/g, '')) : 0,
      num_total = num_total != '' ? Number(txt_total.replace(/[^0-9.-]+/g, '')) : 0;
    var percent = parseInt(num_end / num_total * 100);
    percent = percent > 100 ? 100 : percent;
    if (num_end == num_total) {
      percent = 100;
    }
    $('.pagination-total-progress .pagination-total-item').css('width', percent + '%');
  };
  _proto.showPaginationInfoToolbar = function showPaginationInfoToolbar() {
    var paginationInfo = $('.pagination .pagination-info').html(),
      toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
    toolbarPaginationInfo.html(paginationInfo);
  };
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form,
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_3__.announceInputErrorMessage
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9zZWFyY2hfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDcEI7QUFDVztBQUNLO0FBQ2tCO0FBQ2Q7QUFDUjtBQUMxQjtBQUNnQztBQUN0QztBQUNlO0FBQ29DO0FBQ1E7QUFDRjtBQUNWO0FBQ0E7QUFFL0QsSUFBTWdCLFlBQVksR0FBRyxFQUFFO0FBQ3ZCLElBQU1DLGFBQWEsR0FBRyxFQUFFO0FBQUMsSUFFSkMsTUFBTSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLE1BQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELE9BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxNQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN2QkUsMkJBQTJCLEdBQTNCLFNBQUFBLDRCQUE0QkMsSUFBSSxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUM5QixJQUFNQyxRQUFRLEdBQUc7TUFDYkMsSUFBSSxFQUFFSCxJQUFJLENBQUNJLElBQUk7TUFDZkMsRUFBRSxFQUFFTCxJQUFJLENBQUNNLFFBQVEsQ0FBQ0QsRUFBRTtNQUNwQkUsS0FBSyxFQUFFO1FBQ0hDLFFBQVEsRUFBRVIsSUFBSSxDQUFDUTtNQUNuQjtJQUNKLENBQUM7SUFFRCxJQUFJUixJQUFJLENBQUNPLEtBQUssRUFBRTtNQUNaTCxRQUFRLENBQUNLLEtBQUssQ0FBQ0UsTUFBTSxHQUFHVCxJQUFJLENBQUNPLEtBQUssS0FBSyxNQUFNO01BQzdDTCxRQUFRLENBQUNRLFFBQVEsR0FBRyxJQUFJO0lBQzVCO0lBRUEsSUFBSVYsSUFBSSxDQUFDVSxRQUFRLEVBQUU7TUFDZlIsUUFBUSxDQUFDUSxRQUFRLEdBQUcsRUFBRTtNQUN0QlYsSUFBSSxDQUFDVSxRQUFRLENBQUNDLE9BQU8sQ0FBQyxVQUFDQyxTQUFTLEVBQUs7UUFDakNWLFFBQVEsQ0FBQ1EsUUFBUSxDQUFDRyxJQUFJLENBQUNaLEtBQUksQ0FBQ0YsMkJBQTJCLENBQUNhLFNBQVMsQ0FBQyxDQUFDO01BQ3ZFLENBQUMsQ0FBQztJQUNOO0lBRUEsT0FBT1YsUUFBUTtFQUNuQixDQUFDO0VBQUFMLE1BQUEsQ0FFRGlCLFlBQVksR0FBWixTQUFBQSxhQUFhQyxRQUFRLEVBQVM7SUFBQSxJQUFqQkEsUUFBUTtNQUFSQSxRQUFRLEdBQUcsSUFBSTtJQUFBO0lBQ3hCLElBQUksQ0FBQ0Msd0JBQXdCLENBQUNDLFdBQVcsQ0FBQyxVQUFVLENBQUM7SUFDckQsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQ0QsV0FBVyxDQUFDLFVBQVUsQ0FBQztJQUNwRCxJQUFJLENBQUNFLHdCQUF3QixDQUFDQyxRQUFRLENBQUMsVUFBVSxDQUFDO0lBRWxEQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0osV0FBVyxDQUFDLDZCQUE2QixDQUFDLENBQUNHLFFBQVEsQ0FBQyxlQUFlLENBQUM7SUFDdkdDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDSixXQUFXLENBQUMsZUFBZSxDQUFDLENBQUNHLFFBQVEsQ0FBQyw2QkFBNkIsQ0FBQztJQUN2R0MsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQ0YsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQ3pGQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDTixXQUFXLENBQUMscUJBQXFCLENBQUM7SUFFdkcsSUFBSSxDQUFDTyxXQUFXLENBQUNILENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBRXBELElBQUksQ0FBQ04sUUFBUSxFQUFFO01BQ1g7SUFDSjtJQUVBLElBQU1VLFVBQVUsR0FBR0osQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUNqQixJQUFJLENBQUMsQ0FBQztJQUNqRSxJQUFNc0IsR0FBRyxHQUFJRCxVQUFVLENBQUNFLEtBQUssR0FBRyxDQUFDLEdBQUlGLFVBQVUsQ0FBQ0MsR0FBRyxHQUFHN0MsK0RBQVEsQ0FBQytDLGFBQWEsQ0FBQ0gsVUFBVSxDQUFDQyxHQUFHLEVBQUU7TUFDekZHLElBQUksRUFBRTtJQUNWLENBQUMsQ0FBQztJQUVGaEQsK0RBQVEsQ0FBQ2lELE9BQU8sQ0FBQ0osR0FBRyxDQUFDO0VBQ3pCLENBQUM7RUFBQTdCLE1BQUEsQ0FFRGtDLFdBQVcsR0FBWCxTQUFBQSxZQUFZaEIsUUFBUSxFQUFTO0lBQUEsSUFBakJBLFFBQVE7TUFBUkEsUUFBUSxHQUFHLElBQUk7SUFBQTtJQUN2QixJQUFJLENBQUNJLHdCQUF3QixDQUFDRixXQUFXLENBQUMsVUFBVSxDQUFDO0lBQ3JELElBQUksQ0FBQ0Qsd0JBQXdCLENBQUNJLFFBQVEsQ0FBQyxVQUFVLENBQUM7SUFDbEQsSUFBSSxDQUFDRix1QkFBdUIsQ0FBQ0UsUUFBUSxDQUFDLFVBQVUsQ0FBQztJQUVqREMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNKLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDRyxRQUFRLENBQUMsZUFBZSxDQUFDO0lBQ3ZHQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ0osV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDRyxRQUFRLENBQUMsNkJBQTZCLENBQUM7SUFDdkdDLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUNGLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztJQUN6RkMsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQ0MsUUFBUSxDQUFDLENBQUMsQ0FBQ04sV0FBVyxDQUFDLHFCQUFxQixDQUFDO0lBRXZHLElBQUksQ0FBQ08sV0FBVyxDQUFDSCxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUVwRCxJQUFJLENBQUNOLFFBQVEsRUFBRTtNQUNYO0lBQ0o7SUFFQSxJQUFNVSxVQUFVLEdBQUdKLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDakIsSUFBSSxDQUFDLENBQUM7SUFDakUsSUFBTXNCLEdBQUcsR0FBSUQsVUFBVSxDQUFDRSxLQUFLLEdBQUcsQ0FBQyxHQUFJRixVQUFVLENBQUNDLEdBQUcsR0FBRzdDLCtEQUFRLENBQUMrQyxhQUFhLENBQUNILFVBQVUsQ0FBQ0MsR0FBRyxFQUFFO01BQ3pGRyxJQUFJLEVBQUU7SUFDVixDQUFDLENBQUM7SUFFRmhELCtEQUFRLENBQUNpRCxPQUFPLENBQUNKLEdBQUcsQ0FBQztFQUN6QixDQUFDO0VBQUE3QixNQUFBLENBRUQyQixXQUFXLEdBQVgsU0FBQUEsWUFBWVEsY0FBYyxFQUFFO0lBQ3hCLElBQU1DLGVBQWUsR0FBR1osQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNhLElBQUksQ0FBQyxjQUFjLENBQUM7SUFFekVELGVBQWUsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFLO01BQy9CLElBQU1DLElBQUksR0FBR2pCLENBQUMsQ0FBQ2dCLEdBQUcsQ0FBQztNQUVuQixJQUFJQyxJQUFJLENBQUNDLEVBQUUsQ0FBQ1AsY0FBYyxDQUFDLEVBQUU7UUFDekJNLElBQUksQ0FBQ0UsVUFBVSxDQUFDLFVBQVUsQ0FBQztRQUMzQkYsSUFBSSxDQUFDRyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQztRQUNoQztNQUNKO01BRUFILElBQUksQ0FBQ0csSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7TUFDM0JILElBQUksQ0FBQ0csSUFBSSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7SUFDckMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBNUMsTUFBQSxDQUVENkMscUJBQXFCLEdBQXJCLFNBQUFBLHNCQUFzQkMsS0FBSyxFQUFFO0lBQ3pCLElBQU1DLFFBQVEsR0FBR0QsS0FBSyxDQUFDRSxLQUFLO0lBQzVCLElBQU1DLHlCQUF5QixHQUFHRixRQUFRLEtBQUt0RCxZQUFZLElBQ3BEc0QsUUFBUSxLQUFLckQsYUFBYTtJQUNqQyxJQUFJLENBQUN1RCx5QkFBeUIsRUFBRTtJQUVoQyxJQUFNYixlQUFlLEdBQUdaLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDYSxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRXpFLElBQU1hLHFCQUFxQixHQUFHZCxlQUFlLENBQUNlLEtBQUssQ0FBQzNCLENBQUMsQ0FBQzRCLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckYsSUFBSUgscUJBQXFCLEVBQUU7SUFFM0IsSUFBTUksVUFBVSxHQUFHOUIsQ0FBQyxPQUFLNEIsUUFBUSxDQUFDQyxhQUFhLENBQUM3QyxFQUFJLENBQUM7SUFDckQsSUFBTStDLFlBQVksR0FBR25CLGVBQWUsQ0FBQ2UsS0FBSyxDQUFDRyxVQUFVLENBQUM7SUFDdEQsSUFBTUUsVUFBVSxHQUFHcEIsZUFBZSxDQUFDcUIsTUFBTSxHQUFHLENBQUM7SUFFN0MsSUFBSUMsVUFBVTtJQUNkLFFBQVFYLFFBQVE7TUFDaEIsS0FBS3RELFlBQVk7UUFDYmlFLFVBQVUsR0FBR0gsWUFBWSxLQUFLLENBQUMsR0FBR0MsVUFBVSxHQUFHRCxZQUFZLEdBQUcsQ0FBQztRQUMvRDtNQUNKLEtBQUs3RCxhQUFhO1FBQ2RnRSxVQUFVLEdBQUdILFlBQVksS0FBS0MsVUFBVSxHQUFHLENBQUMsR0FBR0QsWUFBWSxHQUFHLENBQUM7UUFDL0Q7TUFDSjtRQUFTO0lBQ1Q7SUFFQS9CLENBQUMsQ0FBQ1ksZUFBZSxDQUFDdUIsR0FBRyxDQUFDRCxVQUFVLENBQUMsQ0FBQyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsT0FBTyxDQUFDO0VBQy9ELENBQUM7RUFBQTdELE1BQUEsQ0FFRDhELE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFBQSxJQUFBQyxNQUFBO0lBQ05oRixvRUFBZSxDQUFDLElBQUksQ0FBQ2lGLE9BQU8sQ0FBQztJQUM3QixJQUFJLENBQUNDLG9CQUFvQixDQUFDLENBQUM7SUFFM0IsSUFBTUMsV0FBVyxHQUFHMUMsQ0FBQyxDQUFDLDZCQUE2QixDQUFDO0lBQ3BELElBQU0yQyxzQkFBc0IsR0FBR0QsV0FBVyxDQUFDN0IsSUFBSSxDQUFDLDZCQUE2QixDQUFDO0lBQzlFLElBQU1SLEdBQUcsR0FBRzVDLHNDQUFTLENBQUNvRixNQUFNLENBQUNDLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFLElBQUksQ0FBQztJQUNqRCxJQUFNQyxRQUFRLEdBQUcsRUFBRTtJQUNuQixJQUFJLENBQUNyRCx3QkFBd0IsR0FBR0ssQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQy9ELElBQUksQ0FBQ0gsdUJBQXVCLEdBQUdHLENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM3RCxJQUFJLENBQUNGLHdCQUF3QixHQUFHRSxDQUFDLENBQUMseUJBQXlCLENBQUM7O0lBRTVEO0lBQ0EsSUFBSUEsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUNpQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ2dCLGlCQUFpQixDQUFDLENBQUM7SUFDNUIsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERsRyw2REFBSyxDQUFDbUcsRUFBRSxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQ0YsY0FBYyxDQUFDO0lBQ3JEOztJQUVBO0lBQ0F4RiwrREFBa0IsQ0FBQyxDQUFDO0lBRXBCc0MsQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNvRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUE5QixLQUFLLEVBQUk7TUFDcERBLEtBQUssQ0FBQytCLGNBQWMsQ0FBQyxDQUFDO01BQ3RCZCxNQUFJLENBQUM5QyxZQUFZLENBQUMsQ0FBQztJQUN2QixDQUFDLENBQUM7SUFFRk8sQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNvRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUE5QixLQUFLLEVBQUk7TUFDcERBLEtBQUssQ0FBQytCLGNBQWMsQ0FBQyxDQUFDO01BQ3RCZCxNQUFJLENBQUM3QixXQUFXLENBQUMsQ0FBQztJQUN0QixDQUFDLENBQUM7SUFFRlYsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNvRCxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQy9CLHFCQUFxQixDQUFDO0lBRXBFLElBQUksSUFBSSxDQUFDMUIsd0JBQXdCLENBQUNrQixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUNvQixNQUFNLEtBQUssQ0FBQyxJQUFJNUIsR0FBRyxDQUFDaUQsS0FBSyxDQUFDQyxPQUFPLEtBQUssU0FBUyxFQUFFO01BQ2xHLElBQUksQ0FBQzdDLFdBQVcsQ0FBQyxLQUFLLENBQUM7SUFDM0IsQ0FBQyxNQUFNO01BQ0gsSUFBSSxDQUFDakIsWUFBWSxDQUFDLEtBQUssQ0FBQztJQUM1QjtJQUVBLElBQU0rRCxTQUFTLEdBQUcsSUFBSSxDQUFDQyxjQUFjLENBQUNmLFdBQVcsQ0FBQyxDQUM3Q2dCLGNBQWMsQ0FBQ2hCLFdBQVcsQ0FBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTFELElBQUksQ0FBQzJCLE9BQU8sQ0FBQ21CLFlBQVksQ0FBQ3JFLE9BQU8sQ0FBQyxVQUFDWCxJQUFJLEVBQUs7TUFDeENxRSxRQUFRLENBQUN4RCxJQUFJLENBQUMrQyxNQUFJLENBQUM3RCwyQkFBMkIsQ0FBQ0MsSUFBSSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDaUYsZ0JBQWdCLEdBQUdaLFFBQVE7SUFDaEMsSUFBSSxDQUFDYSxrQkFBa0IsQ0FBQ2xCLHNCQUFzQixDQUFDO0lBRS9DRCxXQUFXLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQTlCLEtBQUssRUFBSTtNQUM5QixJQUFNd0MsbUJBQW1CLEdBQUduQixzQkFBc0IsQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLENBQUNDLFlBQVksQ0FBQyxDQUFDO01BRTFFLElBQUksQ0FBQ1IsU0FBUyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3BCLE9BQU8zQyxLQUFLLENBQUMrQixjQUFjLENBQUMsQ0FBQztNQUNqQztNQUVBWCxXQUFXLENBQUM3QixJQUFJLENBQUMsNEJBQTRCLENBQUMsQ0FBQ3FELE1BQU0sQ0FBQyxDQUFDO01BRXZELFNBQUFDLFNBQUEsR0FBQUMsK0JBQUEsQ0FBeUJOLG1CQUFtQixHQUFBTyxLQUFBLElBQUFBLEtBQUEsR0FBQUYsU0FBQSxJQUFBRyxJQUFBLEdBQUU7UUFBQSxJQUFuQ0MsVUFBVSxHQUFBRixLQUFBLENBQUFHLEtBQUE7UUFDakIsSUFBTUMsS0FBSyxHQUFHekUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtVQUN2QjBFLElBQUksRUFBRSxRQUFRO1VBQ2RDLElBQUksRUFBRSxZQUFZO1VBQ2xCSCxLQUFLLEVBQUVEO1FBQ1gsQ0FBQyxDQUFDO1FBRUY3QixXQUFXLENBQUNrQyxNQUFNLENBQUNILEtBQUssQ0FBQztNQUM3QjtJQUNKLENBQUMsQ0FBQztJQUVGLElBQU1JLHFCQUFxQixHQUFHN0UsQ0FBQyxtS0FLeEIsSUFBSSxDQUFDd0MsT0FBTyxDQUFDc0Msa0JBQWtCLFNBQU0sQ0FBQyxDQUN4Q0MsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUV0QkMsVUFBVSxDQUFDO01BQUEsT0FBTUgscUJBQXFCLENBQUN6QyxLQUFLLENBQUMsQ0FBQztJQUFBLEdBQUUsR0FBRyxDQUFDO0lBRXBEeEUsNEVBQW1CLENBQUMsQ0FBQztJQUNyQkUsK0VBQXNCLENBQUMsQ0FBQztJQUN4QkMsMEVBQWlCLENBQUMsQ0FBQztJQUNuQkMsMEVBQWlCLENBQUMsSUFBSSxDQUFDd0UsT0FBTyxDQUFDO0lBQy9CLElBQUksQ0FBQ3lDLHdCQUF3QixDQUFDLElBQUksQ0FBQ3pDLE9BQU8sQ0FBQztJQUMzQyxJQUFJLENBQUMwQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsQ0FBQztJQUN2QixJQUFJLENBQUNDLHlCQUF5QixDQUFDLENBQUM7SUFDaEMsSUFBSSxDQUFDQyxRQUFRLENBQUMsQ0FBQztFQUNuQixDQUFDO0VBQUE3RyxNQUFBLENBRUQ4RyxhQUFhLEdBQWIsU0FBQUEsY0FBYzNHLElBQUksRUFBRTRHLEVBQUUsRUFBRTtJQUFBLElBQUFDLE1BQUE7SUFDcEJ4RixDQUFDLENBQUN5RixJQUFJLENBQUM7TUFDSHBGLEdBQUcsRUFBRSwwQkFBMEI7TUFDL0J0QixJQUFJLEVBQUU7UUFDRjJHLGtCQUFrQixFQUFFL0csSUFBSSxDQUFDSyxFQUFFO1FBQzNCMkcsTUFBTSxFQUFFO01BQ1osQ0FBQztNQUNEQyxPQUFPLEVBQUU7UUFDTCxjQUFjLEVBQUUvQyxNQUFNLENBQUNnRCxNQUFNLElBQUloRCxNQUFNLENBQUNnRCxNQUFNLENBQUNDLFVBQVUsR0FBR2pELE1BQU0sQ0FBQ2dELE1BQU0sQ0FBQ0MsVUFBVSxHQUFHO01BQzNGO0lBQ0osQ0FBQyxDQUFDLENBQUN4QixJQUFJLENBQUMsVUFBQXZGLElBQUksRUFBSTtNQUNaLElBQU1nSCxnQkFBZ0IsR0FBRyxFQUFFO01BRTNCaEgsSUFBSSxDQUFDTyxPQUFPLENBQUMsVUFBQzBHLFFBQVEsRUFBSztRQUN2QkQsZ0JBQWdCLENBQUN2RyxJQUFJLENBQUNnRyxNQUFJLENBQUM5RywyQkFBMkIsQ0FBQ3NILFFBQVEsQ0FBQyxDQUFDO01BQ3JFLENBQUMsQ0FBQztNQUVGVCxFQUFFLENBQUNRLGdCQUFnQixDQUFDO0lBQ3hCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXZILE1BQUEsQ0FFRHFGLGtCQUFrQixHQUFsQixTQUFBQSxtQkFBbUJvQyxVQUFVLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQzNCLElBQU1DLFdBQVcsR0FBRztNQUNoQkMsSUFBSSxFQUFFO1FBQ0ZySCxJQUFJLEVBQUUsU0FBQUEsS0FBQ0osSUFBSSxFQUFFNEcsRUFBRSxFQUFLO1VBQ2hCO1VBQ0EsSUFBSTVHLElBQUksQ0FBQ0ssRUFBRSxLQUFLLEdBQUcsRUFBRTtZQUNqQnVHLEVBQUUsQ0FBQ1csTUFBSSxDQUFDdEMsZ0JBQWdCLENBQUM7VUFDN0IsQ0FBQyxNQUFNO1lBQ0g7WUFDQXNDLE1BQUksQ0FBQ1osYUFBYSxDQUFDM0csSUFBSSxFQUFFNEcsRUFBRSxDQUFDO1VBQ2hDO1FBQ0osQ0FBQztRQUNEYyxNQUFNLEVBQUU7VUFDSkMsS0FBSyxFQUFFO1FBQ1g7TUFDSixDQUFDO01BQ0RDLFFBQVEsRUFBRTtRQUNOQyxXQUFXLEVBQUU7TUFDakIsQ0FBQztNQUNEQyxPQUFPLEVBQUUsQ0FDTCxVQUFVO0lBRWxCLENBQUM7SUFFRFIsVUFBVSxDQUFDbEMsTUFBTSxDQUFDb0MsV0FBVyxDQUFDO0VBQ2xDLENBQUM7RUFBQTNILE1BQUEsQ0FFRHlFLGlCQUFpQixHQUFqQixTQUFBQSxrQkFBQSxFQUFvQjtJQUFBLElBQUF5RCxNQUFBO0lBQ2hCO0lBQ0EsSUFBQUMsYUFBQSxHQUFxRyxJQUFJLENBQUNuRSxPQUFPO01BQXpHb0UsZUFBZSxHQUFBRCxhQUFBLENBQWZDLGVBQWU7TUFBRUMsZUFBZSxHQUFBRixhQUFBLENBQWZFLGVBQWU7TUFBRUMsa0JBQWtCLEdBQUFILGFBQUEsQ0FBbEJHLGtCQUFrQjtNQUFFQyxrQkFBa0IsR0FBQUosYUFBQSxDQUFsQkksa0JBQWtCO01BQUVDLGNBQWMsR0FBQUwsYUFBQSxDQUFkSyxjQUFjO0lBQ2hHLElBQU1ySCx3QkFBd0IsR0FBR0ssQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ2hFLElBQU1pSCx3QkFBd0IsR0FBR2pILENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztJQUM3RCxJQUFNSCx1QkFBdUIsR0FBR0csQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzlELElBQU1rSCxjQUFjLEdBQUdsSCxDQUFDLENBQUMseUJBQXlCLENBQUM7SUFDbkQsSUFBTW1ILFlBQVksR0FBR25ILENBQUMsQ0FBQywrQkFBK0IsQ0FBQztJQUN2RCxJQUFNb0gsYUFBYSxHQUFHcEgsQ0FBQyxDQUFDLCtCQUErQixDQUFDO0lBQ3hELElBQU1xSCxrQkFBa0IsR0FBR3JILENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztJQUN2RCxJQUFNc0gsZUFBZSxHQUFHLElBQUksQ0FBQzlFLE9BQU8sQ0FBQytFLHFCQUFxQjtJQUMxRCxJQUFNQyxjQUFjLEdBQUc7TUFDbkJDLFFBQVEsRUFBRTtRQUNOQyxjQUFjLEVBQUUsd0JBQXdCO1FBQ3hDQyxjQUFjLEVBQUUsd0JBQXdCO1FBQ3hDQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCQyxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCQyxZQUFZLEVBQUUsc0JBQXNCO1FBQ3BDQyxZQUFZLEVBQUUsc0JBQXNCO1FBQ3BDQyxTQUFTLEVBQUU7TUFDZixDQUFDO01BQ0RDLE1BQU0sRUFBRTtRQUNKQyxlQUFlLEVBQUU7VUFDYkMsS0FBSyxFQUFFYjtRQUNYO01BQ0osQ0FBQztNQUNEYyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSWhMLDhEQUFhLENBQUNtSyxjQUFjLEVBQUUsVUFBQ2MsT0FBTyxFQUFLO01BQ2hFcEIsY0FBYyxDQUFDcUIsSUFBSSxDQUFDRCxPQUFPLENBQUNULE9BQU8sQ0FBQztNQUVwQyxJQUFNeEgsR0FBRyxHQUFHNUMsc0NBQVMsQ0FBQ29GLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEVBQUUsSUFBSSxDQUFDO01BQ2pELElBQUkxQyxHQUFHLENBQUNpRCxLQUFLLENBQUNDLE9BQU8sS0FBSyxTQUFTLEVBQUU7UUFDakMwRCx3QkFBd0IsQ0FBQ3NCLElBQUksQ0FBQ0QsT0FBTyxDQUFDWCxjQUFjLENBQUM7UUFDckRQLGFBQWEsQ0FBQ21CLElBQUksQ0FBQ0QsT0FBTyxDQUFDUCxZQUFZLENBQUM7UUFDeENyQixNQUFJLENBQUNoRyxXQUFXLENBQUMsS0FBSyxDQUFDO01BQzNCLENBQUMsTUFBTTtRQUNIZix3QkFBd0IsQ0FBQ2tCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDMEgsSUFBSSxDQUFDRCxPQUFPLENBQUNaLGNBQWMsQ0FBQztRQUN0RjdILHVCQUF1QixDQUFDMEksSUFBSSxDQUFDRCxPQUFPLENBQUNWLE9BQU8sQ0FBQztRQUM3Q1QsWUFBWSxDQUFDb0IsSUFBSSxDQUFDRCxPQUFPLENBQUNSLFlBQVksQ0FBQztRQUN2Q1Qsa0JBQWtCLENBQUNrQixJQUFJLENBQUN2SSxDQUFDLENBQUNzSSxPQUFPLENBQUNOLFNBQVMsQ0FBQyxDQUFDbkgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUN4QixRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXhGcUgsTUFBSSxDQUFDakgsWUFBWSxDQUFDLEtBQUssQ0FBQztRQUN4QmlILE1BQUksQ0FBQ3hCLG1CQUFtQixDQUFDLENBQUM7UUFDMUJ3QixNQUFJLENBQUN2QixnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3ZCdUIsTUFBSSxDQUFDdEIseUJBQXlCLENBQUMsQ0FBQztRQUNoQ3NCLE1BQUksQ0FBQ3JCLFFBQVEsQ0FBQyxDQUFDO1FBRWYsSUFBR3JGLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDaUMsTUFBTSxHQUFHLENBQUMsRUFBQztVQUNuRHBFLGdGQUF1QixDQUFDNkksTUFBSSxDQUFDbEUsT0FBTyxFQUFFLDJCQUEyQixDQUFDO1FBQ3RFO01BQ0o7TUFFQXhDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3dJLGNBQWMsQ0FBQyxjQUFjLENBQUM7TUFFeEN4SSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN5SSxPQUFPLENBQUM7UUFDcEJDLFNBQVMsRUFBRTtNQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7TUFFUCxJQUFNQyxXQUFXLEdBQUczSSxDQUFDLENBQUMsNkRBQTZELENBQUM7TUFFcEYsSUFBSTJJLFdBQVcsQ0FBQzFHLE1BQU0sRUFBRTtRQUNwQjBHLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7TUFDdkI7SUFDSixDQUFDLEVBQUU7TUFDQ0MsdUJBQXVCLEVBQUU7UUFDckJqQyxlQUFlLEVBQWZBLGVBQWU7UUFDZkMsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZDLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkMsY0FBYyxFQUFkQTtNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBeEksTUFBQSxDQUVEeUcsd0JBQXdCLEdBQXhCLFNBQUFBLHlCQUF5QnpDLE9BQU8sRUFBQztJQUM3QixJQUFHeEMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNpQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO01BQ3hDcEUsZ0ZBQXVCLENBQUMyRSxPQUFPLEVBQUUsbUJBQW1CLENBQUM7SUFDekQ7SUFFQSxJQUFHeEMsQ0FBQyxDQUFDLHFDQUFxQyxDQUFDLENBQUNpQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO01BQ25EcEUsZ0ZBQXVCLENBQUMyRSxPQUFPLEVBQUUsMkJBQTJCLENBQUM7SUFDakU7RUFDSixDQUFDO0VBQUFoRSxNQUFBLENBRUQwRyxtQkFBbUIsR0FBbkIsU0FBQUEsb0JBQUEsRUFBcUI7SUFDakIsSUFBSTtNQUNBLElBQUk3RSxHQUFHLEdBQUcsSUFBSXlJLEdBQUcsQ0FBQ2pHLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLENBQUM7TUFDdkMsSUFBSWdHLENBQUMsR0FBRzFJLEdBQUcsQ0FBQzJJLFlBQVksQ0FBQzdHLEdBQUcsQ0FBQyxPQUFPLENBQUM7TUFDckMsSUFBRzRHLENBQUMsSUFBSSxJQUFJLEVBQUM7UUFDVCxJQUFJWixLQUFLLEdBQUd2RyxRQUFRLENBQUNxSCxnQkFBZ0IsQ0FBQyxxQkFBcUIsQ0FBQztRQUM1REMsS0FBSyxDQUFDekssU0FBUyxDQUFDYSxPQUFPLENBQUM2SixJQUFJLENBQUNoQixLQUFLLEVBQUUsVUFBU2lCLE9BQU8sRUFBRTtVQUNsRCxJQUFHQSxPQUFPLENBQUM1RSxLQUFLLElBQUl1RSxDQUFDLEVBQUM7WUFDbEJLLE9BQU8sQ0FBQ2pLLFFBQVEsR0FBRyxJQUFJO1VBQzNCO1FBQ0osQ0FBQyxDQUFDO01BQ047SUFDSixDQUFDLENBQUMsT0FBTWtLLENBQUMsRUFBRSxDQUFDO0VBQ2hCLENBQUM7RUFBQTdLLE1BQUEsQ0FFRDZHLFFBQVEsR0FBUixTQUFBQSxTQUFBLEVBQVc7SUFDUCxJQUFJaUUsS0FBSyxHQUFHQyxRQUFRLENBQUN2SixDQUFDLENBQUMseUJBQXlCLENBQUMsQ0FBQ2xCLElBQUksQ0FBQyxDQUFDLENBQUM7TUFDckRxSixLQUFLLEdBQUcsSUFBSSxDQUFDcUIsZUFBZSxDQUFDLE9BQU8sQ0FBQztNQUNyQ0MsY0FBYztJQUVsQixJQUFJdEIsS0FBSyxLQUFLdUIsU0FBUyxFQUFFO01BQ3JCRCxjQUFjLEdBQUd0QixLQUFLO0lBQzFCLENBQUMsTUFBSztNQUNGc0IsY0FBYyxHQUFHLElBQUksQ0FBQ2pILE9BQU8sQ0FBQytFLHFCQUFxQjtJQUN2RDtJQUVBLElBQUlvQyxLQUFLLEdBQUcsQ0FBQztNQUNUQyxHQUFHLEdBQUdOLEtBQUs7TUFDWE8sYUFBYSxHQUFHLEtBQUs7TUFDckJDLFFBQVEsR0FBRyxDQUFDO0lBRWhCLElBQUlDLFNBQVMsR0FBRy9KLENBQUMsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDZ0ssSUFBSSxDQUFDLENBQUM7SUFDdEUsSUFBSUMsV0FBVyxHQUFHSCxRQUFRLEdBQUcsQ0FBQztJQUM5QixJQUFJSSxZQUFZLEdBQUdELFdBQVcsR0FBR1IsY0FBYztJQUMvQyxJQUFJVSxnQkFBZ0IsR0FBR2IsS0FBSyxHQUFHWSxZQUFZO0lBQzNDLElBQUlFLFdBQVcsR0FBR2IsUUFBUSxDQUFDdkosQ0FBQyxDQUFDLCtCQUErQixDQUFDLENBQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLElBQUl1TCxRQUFRLEdBQUdELFdBQVcsR0FBRyxDQUFDO0lBRTlCLElBQUlMLFNBQVMsQ0FBQzlILE1BQU0sS0FBSyxDQUFDLEVBQUU7TUFDeEI2SCxRQUFRLEdBQUdQLFFBQVEsQ0FBQ3ZKLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDYSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDO01BQ3BFK0ssYUFBYSxHQUFHLElBQUk7SUFDeEIsQ0FBQyxNQUFNO01BQ0hDLFFBQVEsR0FBR1AsUUFBUSxDQUFDUSxTQUFTLENBQUNsSixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMvQixJQUFJLENBQUMsQ0FBQyxDQUFDO01BQy9DK0ssYUFBYSxHQUFHLEtBQUs7SUFDekI7SUFFQSxJQUFJUCxLQUFLLElBQUlHLGNBQWMsRUFBRTtNQUN6QnpKLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDbEIsSUFBSSxDQUFDNkssS0FBSyxDQUFDO01BQ3hDM0osQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUNsQixJQUFJLENBQUM4SyxHQUFHLENBQUM7SUFDeEMsQ0FBQyxNQUFNO01BQ0gsSUFBSVEsV0FBVyxJQUFJLENBQUMsRUFBRTtRQUNsQlIsR0FBRyxHQUFHSCxjQUFjO01BQ3hCLENBQUMsTUFBTTtRQUNIRSxLQUFLLEdBQUlVLFFBQVEsR0FBR1osY0FBYyxHQUFJLENBQUM7UUFFdkMsSUFBSUksYUFBYSxHQUFHLElBQUksRUFBRTtVQUN0QixJQUFHN0osQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUNpQyxNQUFNLEdBQUcsQ0FBQyxFQUFDO1lBQ3ZEMkgsR0FBRyxHQUFHTSxZQUFZLEdBQUdDLGdCQUFnQixHQUFHLENBQUM7VUFDN0MsQ0FBQyxNQUFLO1lBQ0ZQLEdBQUcsR0FBR00sWUFBWSxHQUFHQyxnQkFBZ0I7VUFDekM7UUFDSixDQUFDLE1BQU07VUFDSFAsR0FBRyxHQUFHUSxXQUFXLEdBQUdYLGNBQWM7UUFDdEM7TUFDSjtNQUVBekosQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNsQixJQUFJLENBQUM2SyxLQUFLLENBQUM7TUFDeEMzSixDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2xCLElBQUksQ0FBQzhLLEdBQUcsQ0FBQztJQUN4QztJQUVBLElBQUksQ0FBQ1UsMkJBQTJCLENBQUMsQ0FBQztFQUN0QyxDQUFDO0VBQUE5TCxNQUFBLENBRURnTCxlQUFlLEdBQWYsU0FBQUEsZ0JBQWdCZSxNQUFNLEVBQUU7SUFDcEIsSUFBSUMsUUFBUSxHQUFHQyxrQkFBa0IsQ0FBQzVILE1BQU0sQ0FBQ0MsUUFBUSxDQUFDNEgsTUFBTSxDQUFDQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDbEVDLGFBQWEsR0FBR0osUUFBUSxDQUFDSyxLQUFLLENBQUMsR0FBRyxDQUFDO01BQ25DQyxjQUFjO01BQ2RDLENBQUM7SUFFTCxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdILGFBQWEsQ0FBQzNJLE1BQU0sRUFBRThJLENBQUMsRUFBRSxFQUFFO01BQ3ZDRCxjQUFjLEdBQUdGLGFBQWEsQ0FBQ0csQ0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQyxHQUFHLENBQUM7TUFFNUMsSUFBSUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLUCxNQUFNLEVBQUU7UUFDOUIsT0FBT08sY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLcEIsU0FBUyxHQUFHLElBQUksR0FBR29CLGNBQWMsQ0FBQyxDQUFDLENBQUM7TUFDckU7SUFDSjtFQUNKLENBQUM7RUFBQXRNLE1BQUEsQ0FFRDJHLGdCQUFnQixHQUFoQixTQUFBQSxpQkFBQSxFQUFtQjtJQUFBLElBQUE2RixNQUFBO0lBQ2YsSUFBTXhJLE9BQU8sR0FBRyxJQUFJLENBQUNBLE9BQU87SUFDNUIsSUFBTWdILGVBQWUsR0FBRyxJQUFJLENBQUNBLGVBQWUsQ0FBQyxPQUFPLENBQUM7SUFDckQsSUFBTWhDLGNBQWMsR0FBRztNQUNuQlMsTUFBTSxFQUFFO1FBQ0pDLGVBQWUsRUFBRTtVQUNiK0MsYUFBYSxFQUFFLElBQUk7VUFDbkJDLFFBQVEsRUFBRTtZQUNOL0MsS0FBSyxFQUFFM0YsT0FBTyxDQUFDK0U7VUFDbkI7UUFDSjtNQUNKLENBQUM7TUFDREUsUUFBUSxFQUFFO1FBQ05DLGNBQWMsRUFBRSw2QkFBNkI7UUFDN0NFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJJLFNBQVMsRUFBRTtNQUNmLENBQUM7TUFDREksUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVELElBQU16SSx3QkFBd0IsR0FBR0ssQ0FBQyxDQUFDLDRDQUE0QyxDQUFDO0lBQ2hGLElBQU1ILHVCQUF1QixHQUFHRyxDQUFDLENBQUMsMkJBQTJCLENBQUM7SUFDOUQsSUFBTW1MLG1CQUFtQixHQUFHbkwsQ0FBQyxDQUFDLGtCQUFrQixDQUFDO0lBQ2pELElBQU1xSCxrQkFBa0IsR0FBR3JILENBQUMsQ0FBQyx5QkFBeUIsQ0FBQztJQUV2REEsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNvRCxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUM5QixLQUFLLEVBQUs7TUFDakRBLEtBQUssQ0FBQytCLGNBQWMsQ0FBQyxDQUFDO01BRXRCLElBQUkrSCxRQUFRLEdBQUdwTCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2dLLElBQUksQ0FBQyxDQUFDO1FBQ2hEcUIsSUFBSSxHQUFHRCxRQUFRLENBQUN2SyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNPLElBQUksQ0FBQyxNQUFNLENBQUM7TUFFMUMsSUFBSWlLLElBQUksSUFBSTNCLFNBQVMsRUFBRTtRQUNuQixJQUFJLENBQUMxSixDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3NMLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtVQUNwRHRMLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQ3JEO01BQ0osQ0FBQyxNQUFNO1FBQ0hDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDRCxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRWpEN0MsMkRBQUcsQ0FBQ3FPLE9BQU8sQ0FBQ0YsSUFBSSxDQUFDRyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxFQUFFaEUsY0FBYyxFQUFFLFVBQUNpRSxHQUFHLEVBQUVuRCxPQUFPLEVBQUs7VUFDekUsSUFBSW1ELEdBQUcsRUFBRTtZQUNMLE1BQU0sSUFBSUMsS0FBSyxDQUFDRCxHQUFHLENBQUM7VUFDeEI7VUFFQSxJQUFJbkQsT0FBTyxDQUFDWixjQUFjLElBQUksRUFBRSxFQUFFO1lBQzlCL0gsd0JBQXdCLENBQUNpRixNQUFNLENBQUMwRCxPQUFPLENBQUNaLGNBQWMsQ0FBQztZQUN2RHlELG1CQUFtQixDQUFDNUMsSUFBSSxDQUFDdkksQ0FBQyxDQUFDc0ksT0FBTyxDQUFDTixTQUFTLENBQUMsQ0FBQ25ILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDeEIsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVsRlcsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNKLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQytMLElBQUksQ0FBQyxDQUFDO1lBRTNEUCxRQUFRLEdBQUdwTCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2dLLElBQUksQ0FBQyxDQUFDO1lBRWhELElBQUlvQixRQUFRLENBQUNuSixNQUFNLEtBQUssQ0FBQyxFQUFFO2NBQ3ZCakMsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNELFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztjQUMxRWtCLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDbEIsSUFBSSxDQUFDa0IsQ0FBQyxDQUFDLHVDQUF1QyxDQUFDLENBQUNsQixJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLENBQUMsTUFBTTtjQUNILElBQUlxSixLQUFLLEdBQUdxQixlQUFlO2dCQUN2QkMsY0FBYztnQkFDZG1DLFdBQVcsR0FBR3JDLFFBQVEsQ0FBQ3ZKLENBQUMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQztjQUVyRSxJQUFJcUosS0FBSyxLQUFLdUIsU0FBUyxFQUFFO2dCQUNyQkQsY0FBYyxHQUFHdEIsS0FBSztjQUMxQixDQUFDLE1BQUs7Z0JBQ0ZzQixjQUFjLEdBQUdqSCxPQUFPLENBQUMrRSxxQkFBcUI7Y0FDbEQ7Y0FFQSxJQUFJK0IsS0FBSyxHQUFHQyxRQUFRLENBQUNFLGNBQWMsQ0FBQyxHQUFDbUMsV0FBVztjQUVoRDVMLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDbEIsSUFBSSxDQUFDd0ssS0FBSyxDQUFDO1lBQ3REO1lBRUEsSUFBSXVDLGNBQWMsR0FBRzdMLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDdUksSUFBSSxDQUFDLENBQUM7Y0FDN0R1RCxxQkFBcUIsR0FBRzlMLENBQUMsQ0FBQyxpREFBaUQsQ0FBQztZQUM1RThMLHFCQUFxQixDQUFDdkQsSUFBSSxDQUFDc0QsY0FBYyxDQUFDO1lBRTFDYixNQUFJLENBQUNWLDJCQUEyQixDQUFDLENBQUM7WUFFbEN6TSxnRkFBdUIsQ0FBQzJFLE9BQU8sRUFBRSwyQkFBMkIsQ0FBQztVQUNqRTtRQUNKLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBaEUsTUFBQSxDQUVEOEwsMkJBQTJCLEdBQTNCLFNBQUFBLDRCQUFBLEVBQThCO0lBQzFCLElBQU15QixPQUFPLEdBQUcvTCxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ2xCLElBQUksQ0FBQyxDQUFDO01BQzdDa04sU0FBUyxHQUFHaE0sQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUNsQixJQUFJLENBQUMsQ0FBQztNQUMvQ21OLE9BQU8sR0FBSUEsT0FBTyxJQUFJLEVBQUUsR0FBR0MsTUFBTSxDQUFDSCxPQUFPLENBQUNQLE9BQU8sQ0FBQyxZQUFZLEVBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFFO01BQ3hFVyxTQUFTLEdBQUlBLFNBQVMsSUFBSSxFQUFFLEdBQUdELE1BQU0sQ0FBQ0YsU0FBUyxDQUFDUixPQUFPLENBQUMsWUFBWSxFQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBRTtJQUVsRixJQUFJWSxPQUFPLEdBQUc3QyxRQUFRLENBQUMwQyxPQUFPLEdBQUNFLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFFL0NDLE9BQU8sR0FBSUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUdBLE9BQVE7SUFFekMsSUFBR0gsT0FBTyxJQUFJRSxTQUFTLEVBQUM7TUFDcEJDLE9BQU8sR0FBRyxHQUFHO0lBQ2pCO0lBRUFwTSxDQUFDLENBQUMsbURBQW1ELENBQUMsQ0FBQ3FNLEdBQUcsQ0FBQyxPQUFPLEVBQUVELE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDdEYsQ0FBQztFQUFBNU4sTUFBQSxDQUVENEcseUJBQXlCLEdBQXpCLFNBQUFBLDBCQUFBLEVBQTRCO0lBQ3hCLElBQUl5RyxjQUFjLEdBQUc3TCxDQUFDLENBQUMsOEJBQThCLENBQUMsQ0FBQ3VJLElBQUksQ0FBQyxDQUFDO01BQ3pEdUQscUJBQXFCLEdBQUc5TCxDQUFDLENBQUMsaURBQWlELENBQUM7SUFFaEY4TCxxQkFBcUIsQ0FBQ3ZELElBQUksQ0FBQ3NELGNBQWMsQ0FBQztFQUM5QyxDQUFDO0VBQUFyTixNQUFBLENBRURpRixjQUFjLEdBQWQsU0FBQUEsZUFBZTZJLEtBQUssRUFBRTtJQUNsQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUM5SSxTQUFTLEdBQUc3Rix1REFBRyxDQUFDO01BQ2pCNE8sTUFBTSxFQUFFRCxLQUFLO01BQ2JFLEdBQUcsRUFBRWxQLCtFQUF5QkE7SUFDbEMsQ0FBQyxDQUFDO0lBRUYsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUFBa0IsTUFBQSxDQUVEa0YsY0FBYyxHQUFkLFNBQUFBLGVBQWUrSSxRQUFRLEVBQUU7SUFDckIsSUFBSSxJQUFJLENBQUNqSixTQUFTLEVBQUU7TUFDaEIsSUFBSSxDQUFDQSxTQUFTLENBQUNrSixHQUFHLENBQUM7UUFDZkMsUUFBUSxFQUFFRixRQUFRO1FBQ2xCRyxRQUFRLEVBQUUsVUFBVTtRQUNwQkMsWUFBWSxFQUFFSixRQUFRLENBQUMxTixJQUFJLENBQUMsY0FBYztNQUM5QyxDQUFDLENBQUM7SUFDTjtJQUVBLE9BQU8sSUFBSTtFQUNmLENBQUM7RUFBQVAsTUFBQSxDQUVEeUYsS0FBSyxHQUFMLFNBQUFBLE1BQUEsRUFBUTtJQUNKLElBQUksSUFBSSxDQUFDVCxTQUFTLEVBQUU7TUFDaEIsSUFBSSxDQUFDQSxTQUFTLENBQUNzSixZQUFZLENBQUMsQ0FBQztNQUM3QixPQUFPLElBQUksQ0FBQ3RKLFNBQVMsQ0FBQ3VKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDekM7SUFFQSxPQUFPLEtBQUs7RUFDaEIsQ0FBQztFQUFBLE9BQUE1TyxNQUFBO0FBQUEsRUF6akIrQmhCLGdEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0ICdqc3RyZWUnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IGhhbG9TaWRlQWxsQ2F0ZWdvcnkgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlQWxsQ2F0ZWdvcnknO1xuaW1wb3J0IGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCc7XG5pbXBvcnQgaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3REaXNwbGF5TW9kZSc7XG5pbXBvcnQgaGFsb1NpZGViYXJUb2dnbGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TaWRlYmFyVG9nZ2xlJztcbmltcG9ydCBoYWxvU3RpY2t5VG9vbGJhciBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1N0aWNreVRvb2xiYXInO1xuXG5jb25zdCBsZWZ0QXJyb3dLZXkgPSAzNztcbmNvbnN0IHJpZ2h0QXJyb3dLZXkgPSAzOTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnBhcmVudCgnLm5hdkJhci1pdGVtJykuYWRkQ2xhc3MoJ25hdkJhci1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5wYXJlbnQoJy5uYXZCYXItaXRlbScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ25hdkJhci1pdGVtLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQobmF2aWdhdGUgPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlbicpO1xuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW4nKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKS5hZGRDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uJykuYWRkQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnBhcmVudCgnLm5hdkJhci1pdGVtJykuYWRkQ2xhc3MoJ25hdkJhci1pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5wYXJlbnQoJy5uYXZCYXItaXRlbScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ25hdkJhci1pdGVtLS1hY3RpdmUnKTtcblxuICAgICAgICB0aGlzLmFjdGl2YXRlVGFiKCQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykpO1xuXG4gICAgICAgIGlmICghbmF2aWdhdGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNlYXJjaERhdGEgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCBzcGFuJykuZGF0YSgpO1xuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XG4gICAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICB9KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgYWN0aXZhdGVUYWIoJHRhYlRvQWN0aXZhdGUpIHtcbiAgICAgICAgY29uc3QgJHRhYnNDb2xsZWN0aW9uID0gJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5maW5kKCdbcm9sZT1cInRhYlwiXScpO1xuXG4gICAgICAgICR0YWJzQ29sbGVjdGlvbi5lYWNoKChpZHgsIHRhYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhYiA9ICQodGFiKTtcblxuICAgICAgICAgICAgaWYgKCR0YWIuaXMoJHRhYlRvQWN0aXZhdGUpKSB7XG4gICAgICAgICAgICAgICAgJHRhYi5yZW1vdmVBdHRyKCd0YWJpbmRleCcpO1xuICAgICAgICAgICAgICAgICR0YWIuYXR0cignYXJpYS1zZWxlY3RlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHRhYi5hdHRyKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgICAgICAgJHRhYi5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblRhYkNoYW5nZVdpdGhBcnJvd3MoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgZXZlbnRLZXkgPSBldmVudC53aGljaDtcbiAgICAgICAgY29uc3QgaXNMZWZ0T3JSaWdodEFycm93S2V5ZG93biA9IGV2ZW50S2V5ID09PSBsZWZ0QXJyb3dLZXlcbiAgICAgICAgICAgIHx8IGV2ZW50S2V5ID09PSByaWdodEFycm93S2V5O1xuICAgICAgICBpZiAoIWlzTGVmdE9yUmlnaHRBcnJvd0tleWRvd24pIHJldHVybjtcblxuICAgICAgICBjb25zdCAkdGFic0NvbGxlY3Rpb24gPSAkKCdbZGF0YS1zZWFyY2gtcGFnZS10YWJzXScpLmZpbmQoJ1tyb2xlPVwidGFiXCJdJyk7XG5cbiAgICAgICAgY29uc3QgaXNBY3RpdmVFbGVtZW50Tm90VGFiID0gJHRhYnNDb2xsZWN0aW9uLmluZGV4KCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpID09PSAtMTtcbiAgICAgICAgaWYgKGlzQWN0aXZlRWxlbWVudE5vdFRhYikgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKGAjJHtkb2N1bWVudC5hY3RpdmVFbGVtZW50LmlkfWApO1xuICAgICAgICBjb25zdCBhY3RpdmVUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24uaW5kZXgoJGFjdGl2ZVRhYik7XG4gICAgICAgIGNvbnN0IGxhc3RUYWJJZHggPSAkdGFic0NvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgICAgICBsZXQgbmV4dFRhYklkeDtcbiAgICAgICAgc3dpdGNoIChldmVudEtleSkge1xuICAgICAgICBjYXNlIGxlZnRBcnJvd0tleTpcbiAgICAgICAgICAgIG5leHRUYWJJZHggPSBhY3RpdmVUYWJJZHggPT09IDAgPyBsYXN0VGFiSWR4IDogYWN0aXZlVGFiSWR4IC0gMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIHJpZ2h0QXJyb3dLZXk6XG4gICAgICAgICAgICBuZXh0VGFiSWR4ID0gYWN0aXZlVGFiSWR4ID09PSBsYXN0VGFiSWR4ID8gMCA6IGFjdGl2ZVRhYklkeCArIDE7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDogYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICAkKCR0YWJzQ29sbGVjdGlvbi5nZXQobmV4dFRhYklkeCkpLmZvY3VzKCkudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5hcnJhbmdlRm9jdXNPblNvcnRCeSgpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnW2RhdGEtc2VhcmNoLXBhZ2UtdGFic10nKS5vbigna2V5dXAnLCB0aGlzLm9uVGFiQ2hhbmdlV2l0aEFycm93cyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSB0aGlzLmluaXRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtKVxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xuXG4gICAgICAgIHRoaXMuY29udGV4dC5jYXRlZ29yeVRyZWUuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xuICAgICAgICB0aGlzLmNyZWF0ZUNhdGVnb3J5VHJlZSgkY2F0ZWdvcnlUcmVlQ29udGFpbmVyKTtcblxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRDYXRlZ29yeUlkcyA9ICRjYXRlZ29yeVRyZWVDb250YWluZXIuanN0cmVlKCkuZ2V0X3NlbGVjdGVkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHNlYXJjaEZvcm0uZmluZCgnaW5wdXRbbmFtZT1cImNhdGVnb3J5XFxbXFxdXCJdJykucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQgPSAkKCc8aW5wdXQ+Jywge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2F0ZWdvcnlJZCxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICRzZWFyY2hGb3JtLmFwcGVuZChpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hSZXN1bHRzTWVzc2FnZSA9ICQoYDxwXG4gICAgICAgICAgICBjbGFzcz1cImFyaWEtZGVzY3JpcHRpb24tLWhpZGRlblwiXG4gICAgICAgICAgICB0YWJpbmRleD1cIi0xXCJcbiAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgYXJpYS1saXZlPVwicG9saXRlXCJcbiAgICAgICAgICAgID4ke3RoaXMuY29udGV4dC5zZWFyY2hSZXN1bHRzQ291bnR9PC9wPmApXG4gICAgICAgICAgICAucHJlcGVuZFRvKCdib2R5Jyk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAkc2VhcmNoUmVzdWx0c01lc3NhZ2UuZm9jdXMoKSwgMTAwKTtcblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIGhhbG9wcm9kdWN0RGlzcGxheU1vZGUoKTtcbiAgICAgICAgaGFsb1NpZGViYXJUb2dnbGUoKTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5sb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQodGhpcy5jb250ZXh0KTtcbiAgICAgICAgdGhpcy5zaG93UHJvZHVjdHNQZXJQYWdlKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVQcm9kdWN0cygpO1xuICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcbiAgICAgICAgdGhpcy5zaG93SXRlbSgpO1xuICAgIH1cblxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9yZW1vdGUvdjEvY2F0ZWdvcnktdHJlZScsXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXRlZ29yeUlkOiBub2RlLmlkLFxuICAgICAgICAgICAgICAgIHByZWZpeDogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KS5kb25lKGRhdGEgPT4ge1xuICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVkUmVzdWx0cyA9IFtdO1xuXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGRhdGFOb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkUmVzdWx0cy5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKGRhdGFOb2RlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IoZm9ybWF0dGVkUmVzdWx0cyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHRyZWVPcHRpb25zID0ge1xuICAgICAgICAgICAgY29yZToge1xuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBSb290IG5vZGVcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuaWQgPT09ICcjJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIExhenkgbG9hZGVkIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGVja2JveDoge1xuICAgICAgICAgICAgICAgIHRocmVlX3N0YXRlOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ2NoZWNrYm94JyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH07XG5cbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgb2JqZWN0LWN1cmx5LW5ld2xpbmVcbiAgICAgICAgY29uc3QgeyBvbk1pblByaWNlRXJyb3IsIG9uTWF4UHJpY2VFcnJvciwgbWluUHJpY2VOb3RFbnRlcmVkLCBtYXhQcmljZU5vdEVudGVyZWQsIG9uSW52YWxpZFByaWNlIH0gPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XG4gICAgICAgIGNvbnN0ICRzZWFyY2hDb3VudCA9ICQoJyNzZWFyY2gtcmVzdWx0cy1wcm9kdWN0LWNvdW50Jyk7XG4gICAgICAgIGNvbnN0ICRjb250ZW50Q291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtY29udGVudC1jb3VudCcpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBjb250ZW50TGlzdGluZzogJ3NlYXJjaC9jb250ZW50LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdzZWFyY2gvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcbiAgICAgICAgICAgICAgICBwcm9kdWN0Q291bnQ6ICdzZWFyY2gvcHJvZHVjdC1jb3VudCcsXG4gICAgICAgICAgICAgICAgY29udGVudENvdW50OiAnc2VhcmNoL2NvbnRlbnQtY291bnQnLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRzZWFyY2hIZWFkaW5nLmh0bWwoY29udGVudC5oZWFkaW5nKTtcblxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh1cmwucXVlcnkuc2VjdGlvbiA9PT0gJ2NvbnRlbnQnKSB7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5jb250ZW50TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJy5wcm9kdWN0LWxpc3RpbmctY29udGVudCcpLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgICAgICRzZWFyY2hDb3VudC5odG1sKGNvbnRlbnQucHJvZHVjdENvdW50KTtcbiAgICAgICAgICAgICAgICAkc2hvd01vcmVDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG5cbiAgICAgICAgICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgY29uc3QgJHRvcFByb2R1Y3QgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyICNmZWF0dXJlZC1wcm9kdWN0cyAucHJvZHVjdHMtbGlzdCcpO1xuXG4gICAgICAgICAgICBpZiAoJHRvcFByb2R1Y3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHRvcFByb2R1Y3Quc2xpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCl7XG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cyAuY2FyZCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQcm9kdWN0c1BlclBhZ2UoKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93SXRlbSgpIHtcbiAgICAgICAgdmFyIHRvdGFsID0gcGFyc2VJbnQoJCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpLFxuICAgICAgICAgICAgbGltaXQgPSB0aGlzLmdldFVybFBhcmFtZXRlcignbGltaXQnKSxcbiAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlO1xuXG4gICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IHRoaXMuY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxuICAgICAgICAgICAgZW5kID0gdG90YWwsXG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2UsXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTGluayA9ICQoXCIucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XG4gICAgICAgIHZhciB0b3RhbE5vdExhc3QgPSBwYWdlTm90TGFzdCAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICB2YXIgcHJvZHVjdHNMYXN0UGFnZSA9IHRvdGFsIC0gdG90YWxOb3RMYXN0O1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcblxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KGNoZWNrTGluay5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodG90YWwgPD0gcHJvZHVjdFBlclBhZ2UpIHtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdFBhZ2UgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24taW5mbyAuc3RhcnQnKS50ZXh0KHN0YXJ0KTtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoZW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgZ2V0VXJsUGFyYW1ldGVyKHNQYXJhbSkge1xuICAgICAgICB2YXIgc1BhZ2VVUkwgPSBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSkpLFxuICAgICAgICAgICAgc1VSTFZhcmlhYmxlcyA9IHNQYWdlVVJMLnNwbGl0KCcmJyksXG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHNVUkxWYXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHNQYXJhbWV0ZXJOYW1lID0gc1VSTFZhcmlhYmxlc1tpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAoc1BhcmFtZXRlck5hbWVbMF0gPT09IHNQYXJhbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzUGFyYW1ldGVyTmFtZVsxXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHNQYXJhbWV0ZXJOYW1lWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd01vcmVQcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY29udGV4dDtcbiAgICAgICAgY29uc3QgZ2V0VXJsUGFyYW1ldGVyID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0Jyk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdF9yZXN1bHRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogY29udGV4dC5zZWFyY2hQcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnc2VhcmNoL2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ3NlYXJjaC9zaG93LW1vcmUnLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyIC5wcm9kdWN0TGlzdGluZycpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHBhZ2luYXRvckNvbnRhaW5lciA9ICQoJy5wYWdpbmF0aW9uLWxpc3QnKTtcbiAgICAgICAgY29uc3QgJHNob3dNb3JlQ29udGFpbmVyID0gJCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKTtcblxuICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZhciBuZXh0UGFnZSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnKS5uZXh0KCksXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoJ2EnKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgICAgIGlmIChsaW5rID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICghJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnZGlzYWJsZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykuYWRkQ2xhc3MoJ2xvYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgIGFwaS5nZXRQYWdlKGxpbmsucmVwbGFjZShcImh0dHA6Ly9cIiwgXCIvL1wiKSwgcmVxdWVzdE9wdGlvbnMsIChlcnIsIGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5wcm9kdWN0TGlzdGluZyAhPSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFwcGVuZChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0b3JDb250YWluZXIuaHRtbCgkKGNvbnRlbnQucGFnaW5hdG9yKS5maW5kKCcucGFnaW5hdGlvbi1saXN0JykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJykuYmx1cigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQnKS5uZXh0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgcHJvZHVjdHMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoJy50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSBnZXRVcmxQYXJhbWV0ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlQ3VycmVudCA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhJykudGV4dCgpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW1pdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlID0gbGltaXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KHByb2R1Y3RQZXJQYWdlKSpwYWdlQ3VycmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnaW5hdGlvbkluZm8gPSAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvJykuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvID0gJCgnLnRvb2xiYXItd3JhcHBlciAudG9vbGJhci1sZWZ0IC5wYWdpbmF0aW9uLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IHR4dF9lbmQgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCksXG4gICAgICAgICAgICB0eHRfdG90YWwgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSxcbiAgICAgICAgICAgIG51bV9lbmQgPSAobnVtX2VuZCAhPSAnJyA/IE51bWJlcih0eHRfZW5kLnJlcGxhY2UoL1teMC05Li1dKy9nLCcnKSkgOiAwKSxcbiAgICAgICAgICAgIG51bV90b3RhbCA9IChudW1fdG90YWwgIT0gJycgPyBOdW1iZXIodHh0X3RvdGFsLnJlcGxhY2UoL1teMC05Li1dKy9nLCcnKSkgOiAwKTtcblxuICAgICAgICB2YXIgcGVyY2VudCA9IHBhcnNlSW50KG51bV9lbmQvbnVtX3RvdGFsICogMTAwKTtcbiAgICAgICAgXG4gICAgICAgIHBlcmNlbnQgPSAocGVyY2VudCA+IDEwMCA/IDEwMCA6IHBlcmNlbnQpO1xuXG4gICAgICAgIGlmKG51bV9lbmQgPT0gbnVtX3RvdGFsKXtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcucGFnaW5hdGlvbi10b3RhbC1wcm9ncmVzcyAucGFnaW5hdGlvbi10b3RhbC1pdGVtJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuICAgIH1cblxuICAgIHNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKSB7XG4gICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuXG4gICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcbiAgICB9XG5cbiAgICBpbml0VmFsaWRhdGlvbigkZm9ybSkge1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJGZvcm0sXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCRlbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJGVsZW1lbnQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAkZWxlbWVudC5kYXRhKCdlcnJvck1lc3NhZ2UnKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgY2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsImFwaSIsIkNhdGFsb2dQYWdlIiwidXRpbHMiLCJGYWNldGVkU2VhcmNoIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNvbXBhcmVQcm9kdWN0cyIsInVybFV0aWxzIiwiVXJsIiwiY29sbGFwc2libGVGYWN0b3J5Iiwibm9kIiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TaWRlYmFyVG9nZ2xlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJsZWZ0QXJyb3dLZXkiLCJyaWdodEFycm93S2V5IiwiU2VhcmNoIiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJfdGhpcyIsIm5vZGVEYXRhIiwidGV4dCIsImRhdGEiLCJpZCIsIm1ldGFkYXRhIiwic3RhdGUiLCJzZWxlY3RlZCIsIm9wZW5lZCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkTm9kZSIsInB1c2giLCJzaG93UHJvZHVjdHMiLCJuYXZpZ2F0ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJwYXJlbnQiLCJzaWJsaW5ncyIsImFjdGl2YXRlVGFiIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwicmVwbGFjZVBhcmFtcyIsInBhZ2UiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCIkdGFiVG9BY3RpdmF0ZSIsIiR0YWJzQ29sbGVjdGlvbiIsImZpbmQiLCJlYWNoIiwiaWR4IiwidGFiIiwiJHRhYiIsImlzIiwicmVtb3ZlQXR0ciIsImF0dHIiLCJvblRhYkNoYW5nZVdpdGhBcnJvd3MiLCJldmVudCIsImV2ZW50S2V5Iiwid2hpY2giLCJpc0xlZnRPclJpZ2h0QXJyb3dLZXlkb3duIiwiaXNBY3RpdmVFbGVtZW50Tm90VGFiIiwiaW5kZXgiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCIkYWN0aXZlVGFiIiwiYWN0aXZlVGFiSWR4IiwibGFzdFRhYklkeCIsImxlbmd0aCIsIm5leHRUYWJJZHgiLCJnZXQiLCJmb2N1cyIsInRyaWdnZXIiLCJvblJlYWR5IiwiX3RoaXMyIiwiY29udGV4dCIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwicGFyc2UiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ0cmVlRGF0YSIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsImNhdGVnb3J5SWQiLCJ2YWx1ZSIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJhcHBlbmQiLCIkc2VhcmNoUmVzdWx0c01lc3NhZ2UiLCJzZWFyY2hSZXN1bHRzQ291bnQiLCJwcmVwZW5kVG8iLCJzZXRUaW1lb3V0IiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dNb3JlUHJvZHVjdHMiLCJzaG93UGFnaW5hdGlvbkluZm9Ub29sYmFyIiwic2hvd0l0ZW0iLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJfdGhpczMiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwiX3RoaXM0IiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIl90aGlzNSIsIl90aGlzJGNvbnRleHQiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsIiRjb250ZW50TGlzdGluZ0NvbnRhaW5lciIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwiJGNvbnRlbnRDb3VudCIsIiRzaG93TW9yZUNvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb250ZW50Q291bnQiLCJwYWdpbmF0b3IiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJHRvcFByb2R1Y3QiLCJzbGljayIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiVVJMIiwiYyIsInNlYXJjaFBhcmFtcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJBcnJheSIsImNhbGwiLCJlbGVtZW50IiwiZSIsInRvdGFsIiwicGFyc2VJbnQiLCJnZXRVcmxQYXJhbWV0ZXIiLCJwcm9kdWN0UGVyUGFnZSIsInVuZGVmaW5lZCIsInN0YXJ0IiwiZW5kIiwiY2hlY2tMYXN0UGFnZSIsImxhc3RQYWdlIiwiY2hlY2tMaW5rIiwibmV4dCIsInBhZ2VOb3RMYXN0IiwidG90YWxOb3RMYXN0IiwicHJvZHVjdHNMYXN0UGFnZSIsImN1cnJlbnRQYWdlIiwicHJldlBhZ2UiLCJzaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MiLCJzUGFyYW0iLCJzUGFnZVVSTCIsImRlY29kZVVSSUNvbXBvbmVudCIsInNlYXJjaCIsInN1YnN0cmluZyIsInNVUkxWYXJpYWJsZXMiLCJzcGxpdCIsInNQYXJhbWV0ZXJOYW1lIiwiaSIsIl90aGlzNiIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsIiRwYWdpbmF0b3JDb250YWluZXIiLCJuZXh0UGFnZSIsImxpbmsiLCJoYXNDbGFzcyIsImdldFBhZ2UiLCJyZXBsYWNlIiwiZXJyIiwiRXJyb3IiLCJibHVyIiwicGFnZUN1cnJlbnQiLCJwYWdpbmF0aW9uSW5mbyIsInRvb2xiYXJQYWdpbmF0aW9uSW5mbyIsInR4dF9lbmQiLCJ0eHRfdG90YWwiLCJudW1fZW5kIiwiTnVtYmVyIiwibnVtX3RvdGFsIiwicGVyY2VudCIsImNzcyIsIiRmb3JtIiwic3VibWl0IiwidGFwIiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=