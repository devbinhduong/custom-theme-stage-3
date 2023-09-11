"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_category_js"],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./halothemes/haloSideAllCategory */ "./assets/js/theme/halothemes/haloSideAllCategory.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./halothemes/haloProductDisplayMode */ "./assets/js/theme/halothemes/haloProductDisplayMode.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloStickyToolbar */ "./assets/js/theme/halothemes/haloStickyToolbar.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this2 = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this2.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
    this.getSubCategoriesPage();
    this.groupProducts();
    this.showMoreDigitalProducts();
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this4 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.find('.product-listing-content').html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(_this4.context, 'product-listing-container');
      }
      _this4.showProductsPerPage();
      _this4.showMoreProducts();
      _this4.showPaginationInfoToolbar();
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
  _proto.showMoreProducts = function showMoreProducts() {
    var _this5 = this;
    var context = this.context;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: context.categoryProductsPerPage
          }
        }
      },
      template: {
        productListing: 'category/halo-product-listing',
        sidebar: 'category/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'category/show-more'
    };
    var $productListingContainer = $('#product-listing-container .productListing');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $paginatorContainer = $('.pagination-list');
    var $showMoreContainer = $('.halo-product-show-more');
    $('#listing-showmoreBtn > a').on('click', function (event) {
      event.preventDefault();
      var nextPage = $('.pagination-item--current').next(),
        link = nextPage.find("a").attr("href");
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
              $('.pagination .pagination-info .end').html($(content.paginator).find('.pagination-info .total').text());
            } else {
              if (Number($(content.paginator).find('.pagination-info .end').text()) < Number($(content.paginator).find('.pagination-info .total').text())) {
                $('.pagination .pagination-info .end').html($(content.paginator).find('.pagination-info .end').text());
              }
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this5.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
          }
        });
      }
    });
    this.showPaginationTotalProgress();
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
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
    }
    if ($('#featured-products').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
  }

  /* Get Sub-Categories Page For Digital Category */;
  _proto.getSubCategoriesPage = function getSubCategoriesPage() {
    var buttons = document.querySelectorAll(".haloSubCategories__name");
    var productListingContainer = document.querySelector("#product-listing-container .productListing");
    if (!buttons || !productListingContainer) return;
    buttons.forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        var loader = document.createElement("div");
        loader.className = "loader";
        productListingContainer.innerHTML = "";
        productListingContainer.appendChild(loader);
        var url = button.getAttribute("href");
        fetch(url).then(function (response) {
          return response.text();
        }).then(function (content) {
          var tempElement = document.createElement("div");
          tempElement.innerHTML = content;
          var newContent = tempElement.querySelector("#product-listing-container .productListing").innerHTML;
          productListingContainer.innerHTML = newContent;
          loader.remove();
        })["catch"](function (error) {
          console.error("Error fetching content:", error);
        });
      });
    });
  }

  /* Show 3 product in line */;
  _proto.groupProducts = function groupProducts() {
    var ul = document.querySelector('.page-digital-content .productListing');
    var products = ul.querySelectorAll('.page-digital-content .product');
    if (window.innerWidth < 1024) {
      // const divs = Array.from(ul.querySelectorAll('div'));
      // divs.forEach(div => div.remove());

      for (var i = 0; i < products.length; i += 3) {
        var productGroup = document.createElement('ul');
        var productGroupWrapper = document.createElement('div');
        var prodgressBar = document.createElement('div');
        productGroupWrapper.className = 'product-group-wrapper';
        productGroup.className = 'product-group';
        productGroup.setAttribute("id", "product-group-" + i);
        productGroup.setAttribute("data-dots-bar", true);
        prodgressBar.className = 'progress-wrapper';
        prodgressBar.innerHTML = "<div class=\"progress\" role=\"progressbar\" aria-label=\"Progress Bar\" aria-valuemin=\"0\" aria-valuemax=\"100\" data-bars>\n                                            <div class=\"bar-thumb\"></div>\n                                        </div>";
        for (var j = i; j < i + 3 && j < products.length; j++) {
          productGroup.appendChild(products[j]);
        }
        productGroupWrapper.appendChild(productGroup);
        productGroupWrapper.appendChild(prodgressBar);
        ul.appendChild(productGroupWrapper);
      }
    } else {
      var productGroups = ul.querySelectorAll('.product-group');
      productGroups.forEach(function (group) {
        group.querySelectorAll('.product').forEach(function (product) {
          return ul.appendChild(product);
        });
        group.remove();
      });
    }
  }

  /* View more product */;
  _proto.showMoreDigitalProducts = function showMoreDigitalProducts() {
    var products = document.querySelectorAll('.page-digital-content .product');
    var viewMoreButton = document.getElementById('digital-view-more-button');
    var productsPerPage = 6;
    var currentPage = 1;
    if (!viewMoreButton) return;
    function showProducts(startIndex, endIndex) {
      for (var i = startIndex; i < endIndex; i++) {
        if (products[i]) {
          products[i].style.display = 'inline-block';
          if (window.innerWidth < 1024) {
            products[i].closest(".product-group-wrapper").classList.remove("process-hidden");
          }
        }
      }
    }
    function hideAllProducts() {
      products.forEach(function (product) {
        product.style.display = 'none';
        if (window.innerWidth < 1024) {
          product.closest(".product-group-wrapper").classList.add("process-hidden");
        }
      });
    }
    function updateView() {
      var startIndex = (currentPage - 1) * productsPerPage;
      var endIndex = startIndex + productsPerPage;
      hideAllProducts();
      showProducts(0, endIndex);
      if (endIndex >= products.length) {
        viewMoreButton.textContent = 'No More Product';
        viewMoreButton.disabled = true;
        viewMoreButton.style.pointerEvents = 'none';
        viewMoreButton.style.backgroundColor = '#ccc';
        viewMoreButton.style.borderColor = '#ccc';
      } else {
        viewMoreButton.textContent = 'VEZI TOATE';
        viewMoreButton.disabled = false;
      }
    }
    viewMoreButton.addEventListener('click', function (e) {
      e.preventDefault();
      currentPage++;
      updateView();
    });
    updateView();
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRlZ29yeV9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNwQjtBQUNXO0FBQ1M7QUFDSjtBQUNtQztBQUNwQjtBQUNRO0FBQ0Y7QUFDVjtBQUNBO0FBQUEsSUFFMUNZLFFBQVEsMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixRQUFBLEVBQUFDLFlBQUE7RUFDekIsU0FBQUQsU0FBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdaLG1HQUEyQixDQUFDUyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxRQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsY0FBYyxFQUFFO0lBQ3hERixRQUFRLENBQUNHLElBQUksQ0FBQztNQUNWQyxJQUFJLEVBQUVILFFBQVE7TUFDZCxXQUFXLEVBQUVDO0lBQ2pCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQUwsTUFBQSxDQUVEUSwrQkFBK0IsR0FBL0IsU0FBQUEsZ0NBQUEsRUFBa0M7SUFBQSxJQUFBQyxNQUFBO0lBQzlCLElBQUksQ0FBQ0MsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNDLE1BQU0sRUFBRTtJQUV2QyxJQUFJRCxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQ0UsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDRixDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQ0csS0FBSyxDQUFDLENBQUM7SUFDM0M7SUFFQUgsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUNJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7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Q0FBQztJQUNOO0lBRUEsU0FBU0MsVUFBVUEsQ0FBQSxFQUFHO01BQ2xCLElBQU1SLFVBQVUsR0FBRyxDQUFDRixXQUFXLEdBQUcsQ0FBQyxJQUFJbEcsZUFBZTtNQUN0RCxJQUFNcUcsUUFBUSxHQUFHRCxVQUFVLEdBQUdwRyxlQUFlO01BRTdDMEcsZUFBZSxDQUFDLENBQUM7TUFDakJQLFlBQVksQ0FBQyxDQUFDLEVBQUVFLFFBQVEsQ0FBQztNQUV6QixJQUFJQSxRQUFRLElBQUkvRixRQUFRLENBQUM1QyxNQUFNLEVBQUU7UUFDN0JzSSxjQUFjLENBQUNhLFdBQVcsR0FBRyxpQkFBaUI7UUFDOUNiLGNBQWMsQ0FBQ2MsUUFBUSxHQUFHLElBQUk7UUFDOUJkLGNBQWMsQ0FBQ00sS0FBSyxDQUFDUyxhQUFhLEdBQUcsTUFBTTtRQUMzQ2YsY0FBYyxDQUFDTSxLQUFLLENBQUNVLGVBQWUsR0FBRyxNQUFNO1FBQzdDaEIsY0FBYyxDQUFDTSxLQUFLLENBQUNXLFdBQVcsR0FBRyxNQUFNO01BQzdDLENBQUMsTUFBTTtRQUNIakIsY0FBYyxDQUFDYSxXQUFXLEdBQUcsWUFBWTtRQUN6Q2IsY0FBYyxDQUFDYyxRQUFRLEdBQUcsS0FBSztNQUNuQztJQUNKO0lBRUFkLGNBQWMsQ0FBQzFCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFDckcsQ0FBQyxFQUFLO01BQzVDQSxDQUFDLENBQUN5RSxjQUFjLENBQUMsQ0FBQztNQUNsQndELFdBQVcsRUFBRTtNQUNiVSxVQUFVLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUM7SUFFRkEsVUFBVSxDQUFDLENBQUM7RUFDaEIsQ0FBQztFQUFBLE9BQUFwSyxRQUFBO0FBQUEsRUFuWWlDVixnREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBoYWxvU2lkZUFsbENhdGVnb3J5IGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZUFsbENhdGVnb3J5JztcbmltcG9ydCBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QnO1xuaW1wb3J0IGhhbG9wcm9kdWN0RGlzcGxheU1vZGUgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9Qcm9kdWN0RGlzcGxheU1vZGUnO1xuaW1wb3J0IGhhbG9TaWRlYmFyVG9nZ2xlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZSc7XG5pbXBvcnQgaGFsb1N0aWNreVRvb2xiYXIgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lUb29sYmFyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeSA9IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBzZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkZWxlbWVudCwgcm9sZVR5cGUsIGFyaWFMaXZlU3RhdHVzKSB7XG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xuICAgICAgICAgICAgcm9sZTogcm9sZVR5cGUsXG4gICAgICAgICAgICAnYXJpYS1saXZlJzogYXJpYUxpdmVTdGF0dXMsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XG4gICAgICAgIGlmICghJCgnW2RhdGEtc2hvcC1ieS1wcmljZV0nKS5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uLmlzLWFjdGl2ZScpLmZvY3VzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLm5hdkxpc3QtYWN0aW9uJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKCdzcGFuLnByaWNlLWZpbHRlci1tZXNzYWdlJyksICdzdGF0dXMnLCAnYXNzZXJ0aXZlJykpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcblxuICAgICAgICAkKCdbZGF0YS1idXR0b24tdHlwZT1cImFkZC1jYXJ0XCJdJykub24oJ2NsaWNrJywgKGUpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJChlLmN1cnJlbnRUYXJnZXQpLm5leHQoKSwgJ3N0YXR1cycsICdwb2xpdGUnKSk7XG5cbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XG5cbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcblxuICAgICAgICB0aGlzLmFyaWFOb3RpZnlOb1Byb2R1Y3RzKCk7XG4gICAgICAgIGhhbG9TaWRlQWxsQ2F0ZWdvcnkoKTtcbiAgICAgICAgaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSgpO1xuICAgICAgICBoYWxvU2lkZWJhclRvZ2dsZSgpO1xuICAgICAgICBoYWxvU3RpY2t5VG9vbGJhcih0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLnNob3dQcm9kdWN0c1BlclBhZ2UoKTtcbiAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhcigpO1xuXG4gICAgICAgIHRoaXMuZ2V0U3ViQ2F0ZWdvcmllc1BhZ2UoKTtcbiAgICAgICAgdGhpcy5ncm91cFByb2R1Y3RzKCk7XG4gICAgICAgIHRoaXMuc2hvd01vcmVEaWdpdGFsUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBhcmlhTm90aWZ5Tm9Qcm9kdWN0cygpIHtcbiAgICAgICAgY29uc3QgJG5vUHJvZHVjdHNNZXNzYWdlID0gJCgnW2RhdGEtbm8tcHJvZHVjdHMtbm90aWZpY2F0aW9uXScpO1xuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICAgICAgJG5vUHJvZHVjdHNNZXNzYWdlLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNob3dNb3JlQ29udGFpbmVyID0gJCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcucHJvZHVjdC1saXN0aW5nLWNvbnRlbnQnKS5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICR0b3BQcm9kdWN0ID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lciAjZmVhdHVyZWQtcHJvZHVjdHMgLnByb2R1Y3RzLWxpc3QnKTtcblxuICAgICAgICAgICAgaWYgKCR0b3BQcm9kdWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0b3BQcm9kdWN0LnNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2R1Y3RzUGVyUGFnZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgICAgIHZhciBjID0gdXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJsaW1pdFwiKTtcbiAgICAgICAgICAgIGlmKGMgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdmFyIGxpbWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0I2xpbWl0IG9wdGlvbicpO1xuICAgICAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGltaXQsIGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudC52YWx1ZSA9PSBjKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge31cbiAgICB9XG5cbiAgICBzaG93TW9yZVByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jb250ZXh0O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9oYWxvLXByb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIHBhZ2luYXRvcjogJ2hhbG90aGVtZXMvZ2FsbGVyeS9oYWxvLXByb2R1Y3QtcGFnaW5hdG9yJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2NhdGVnb3J5L3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkcGFnaW5hdG9yQ29udGFpbmVyID0gJCgnLnBhZ2luYXRpb24tbGlzdCcpO1xuICAgICAgICBjb25zdCAkc2hvd01vcmVDb250YWluZXIgPSAkKCcuaGFsby1wcm9kdWN0LXNob3ctbW9yZScpO1xuXG4gICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCcpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgYXBpLmdldFBhZ2UobGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LnByb2R1Y3RMaXN0aW5nICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuYXBwZW5kKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uLWxpc3QnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCcpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSkgPCBOdW1iZXIoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvLmh0bWwocGFnaW5hdGlvbkluZm8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdChjb250ZXh0LCAncHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCk7XG4gICAgfVxuXG4gICAgc2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzKCkge1xuICAgICAgICAgICAgY29uc3QgdHh0X2VuZCA9ICQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSxcbiAgICAgICAgICAgICAgICB0eHRfdG90YWwgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSxcbiAgICAgICAgICAgICAgICBudW1fZW5kID0gKG51bV9lbmQgIT0gJycgPyBOdW1iZXIodHh0X2VuZC5yZXBsYWNlKC9bXjAtOS4tXSsvZywnJykpIDogMCksXG4gICAgICAgICAgICAgICAgbnVtX3RvdGFsID0gKG51bV90b3RhbCAhPSAnJyA/IE51bWJlcih0eHRfdG90YWwucmVwbGFjZSgvW14wLTkuLV0rL2csJycpKSA6IDApO1xuXG4gICAgICAgICAgICB2YXIgcGVyY2VudCA9IHBhcnNlSW50KG51bV9lbmQvbnVtX3RvdGFsICogMTAwKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcGVyY2VudCA9IChwZXJjZW50ID4gMTAwID8gMTAwIDogcGVyY2VudCk7XG5cbiAgICAgICAgICAgIGlmKG51bV9lbmQgPT0gbnVtX3RvdGFsKXtcbiAgICAgICAgICAgICAgICBwZXJjZW50ID0gMTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi10b3RhbC1wcm9ncmVzcyAucGFnaW5hdGlvbi10b3RhbC1pdGVtJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpXG4gICAgICAgIH1cblxuICAgIHNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKSB7XG4gICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuXG4gICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcbiAgICB9XG5cbiAgICBsb2FkT3B0aW9uRm9yUHJvZHVjdENhcmQoY29udGV4dCkge1xuICAgICAgICBpZigkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCQoJyNmZWF0dXJlZC1wcm9kdWN0cycpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ2ZlYXR1cmVkLXByb2R1Y3RzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBHZXQgU3ViLUNhdGVnb3JpZXMgUGFnZSBGb3IgRGlnaXRhbCBDYXRlZ29yeSAqL1xuICAgIGdldFN1YkNhdGVnb3JpZXNQYWdlKCkge1xuICAgICAgICB2YXIgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGFsb1N1YkNhdGVnb3JpZXNfX25hbWVcIik7XG4gICAgICAgIHZhciBwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmdcIik7XG4gICAgICAgIFxuICAgICAgICBpZighYnV0dG9ucyB8fCAhcHJvZHVjdExpc3RpbmdDb250YWluZXIpIHJldHVybjtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBsb2FkZXIuY2xhc3NOYW1lID0gXCJsb2FkZXJcIjtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvYWRlcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgdXJsID0gYnV0dG9uLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgZmV0Y2godXJsKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSB0ZW1wRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3RMaXN0aW5nXCIpLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3RpbmdDb250YWluZXIuaW5uZXJIVE1MID0gbmV3Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBjb250ZW50OlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qIFNob3cgMyBwcm9kdWN0IGluIGxpbmUgKi9cbiAgICBncm91cFByb2R1Y3RzKCkge1xuICAgICAgICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWRpZ2l0YWwtY29udGVudCAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHMgPSB1bC5xdWVyeVNlbGVjdG9yQWxsKCcucGFnZS1kaWdpdGFsLWNvbnRlbnQgLnByb2R1Y3QnKTtcbiAgICAgICAgXG4gICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGRpdnMgPSBBcnJheS5mcm9tKHVsLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpKTtcbiAgICAgICAgICAgIC8vIGRpdnMuZm9yRWFjaChkaXYgPT4gZGl2LnJlbW92ZSgpKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkgKz0gMykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RHcm91cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdEdyb3VwV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2RncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdEdyb3VwV3JhcHBlci5jbGFzc05hbWUgPSAncHJvZHVjdC1ncm91cC13cmFwcGVyJztcbiAgICAgICAgICAgICAgICBwcm9kdWN0R3JvdXAuY2xhc3NOYW1lID0gJ3Byb2R1Y3QtZ3JvdXAnO1xuICAgICAgICAgICAgICAgIHByb2R1Y3RHcm91cC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2R1Y3QtZ3JvdXAtXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBwcm9kdWN0R3JvdXAuc2V0QXR0cmlidXRlKFwiZGF0YS1kb3RzLWJhclwiLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgIHByb2RncmVzc0Jhci5jbGFzc05hbWUgPSAncHJvZ3Jlc3Mtd3JhcHBlcic7XG4gICAgICAgICAgICAgICAgcHJvZGdyZXNzQmFyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLWxhYmVsPVwiUHJvZ3Jlc3MgQmFyXCIgYXJpYS12YWx1ZW1pbj1cIjBcIiBhcmlhLXZhbHVlbWF4PVwiMTAwXCIgZGF0YS1iYXJzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmFyLXRodW1iXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gaTsgaiA8IGkgKyAzICYmIGogPCBwcm9kdWN0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0R3JvdXAuYXBwZW5kQ2hpbGQocHJvZHVjdHNbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9kdWN0R3JvdXBXcmFwcGVyLmFwcGVuZENoaWxkKHByb2R1Y3RHcm91cCk7XG4gICAgICAgICAgICAgICAgcHJvZHVjdEdyb3VwV3JhcHBlci5hcHBlbmRDaGlsZChwcm9kZ3Jlc3NCYXIpO1xuXG4gICAgICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQocHJvZHVjdEdyb3VwV3JhcHBlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RHcm91cHMgPSB1bC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1ncm91cCcpO1xuICAgICAgICAgICAgcHJvZHVjdEdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgICAgICAgICBncm91cC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdCcpLmZvckVhY2gocHJvZHVjdCA9PiB1bC5hcHBlbmRDaGlsZChwcm9kdWN0KSk7XG4gICAgICAgICAgICAgICAgZ3JvdXAucmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qIFZpZXcgbW9yZSBwcm9kdWN0ICovXG4gICAgc2hvd01vcmVEaWdpdGFsUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtZGlnaXRhbC1jb250ZW50IC5wcm9kdWN0Jyk7XG4gICAgICAgIGNvbnN0IHZpZXdNb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZ2l0YWwtdmlldy1tb3JlLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSA2O1xuICAgICAgICBsZXQgY3VycmVudFBhZ2UgPSAxO1xuXG4gICAgICAgIGlmICghdmlld01vcmVCdXR0b24pIHJldHVybjtcblxuICAgICAgICBmdW5jdGlvbiBzaG93UHJvZHVjdHMoc3RhcnRJbmRleCwgZW5kSW5kZXgpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBzdGFydEluZGV4OyBpIDwgZW5kSW5kZXg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9kdWN0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c1tpXS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzW2ldLmNsb3Nlc3QoXCIucHJvZHVjdC1ncm91cC13cmFwcGVyXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJwcm9jZXNzLWhpZGRlblwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGlkZUFsbFByb2R1Y3RzKCkge1xuICAgICAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCAxMDI0KXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5jbG9zZXN0KFwiLnByb2R1Y3QtZ3JvdXAtd3JhcHBlclwiKS5jbGFzc0xpc3QuYWRkKFwicHJvY2Vzcy1oaWRkZW5cIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gKGN1cnJlbnRQYWdlIC0gMSkgKiBwcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgICAgICBjb25zdCBlbmRJbmRleCA9IHN0YXJ0SW5kZXggKyBwcm9kdWN0c1BlclBhZ2U7XG5cbiAgICAgICAgICAgIGhpZGVBbGxQcm9kdWN0cygpO1xuICAgICAgICAgICAgc2hvd1Byb2R1Y3RzKDAsIGVuZEluZGV4KTtcblxuICAgICAgICAgICAgaWYgKGVuZEluZGV4ID49IHByb2R1Y3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZpZXdNb3JlQnV0dG9uLnRleHRDb250ZW50ID0gJ05vIE1vcmUgUHJvZHVjdCc7XG4gICAgICAgICAgICAgICAgdmlld01vcmVCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHZpZXdNb3JlQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgdmlld01vcmVCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2MnO1xuICAgICAgICAgICAgICAgIHZpZXdNb3JlQnV0dG9uLnN0eWxlLmJvcmRlckNvbG9yID0gJyNjY2MnO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9yZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdWRVpJIFRPQVRFJztcbiAgICAgICAgICAgICAgICB2aWV3TW9yZUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmlld01vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3VycmVudFBhZ2UrKztcbiAgICAgICAgICAgIHVwZGF0ZVZpZXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdXBkYXRlVmlldygpO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJob29rcyIsImFwaSIsIkNhdGFsb2dQYWdlIiwidXRpbHMiLCJjb21wYXJlUHJvZHVjdHMiLCJGYWNldGVkU2VhcmNoIiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiaGFsb1NpZGVBbGxDYXRlZ29yeSIsImhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0IiwiaGFsb3Byb2R1Y3REaXNwbGF5TW9kZSIsImhhbG9TaWRlYmFyVG9nZ2xlIiwiaGFsb1N0aWNreVRvb2xiYXIiLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsIl9pbmhlcml0c0xvb3NlIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiX3Byb3RvIiwicHJvdG90eXBlIiwic2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMiLCIkZWxlbWVudCIsInJvbGVUeXBlIiwiYXJpYUxpdmVTdGF0dXMiLCJhdHRyIiwicm9sZSIsIm1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUiLCJfdGhpczIiLCIkIiwibGVuZ3RoIiwiaGFzQ2xhc3MiLCJmb2N1cyIsIm9uIiwib25SZWFkeSIsIl90aGlzMyIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiZSIsImN1cnJlbnRUYXJnZXQiLCJuZXh0IiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJzZXRMaXZlUmVnaW9uc0F0dHJpYnV0ZXMiLCJhcmlhTm90aWZ5Tm9Qcm9kdWN0cyIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsInNob3dQcm9kdWN0c1BlclBhZ2UiLCJzaG93TW9yZVByb2R1Y3RzIiwic2hvd1BhZ2luYXRpb25JbmZvVG9vbGJhciIsImdldFN1YkNhdGVnb3JpZXNQYWdlIiwiZ3JvdXBQcm9kdWN0cyIsInNob3dNb3JlRGlnaXRhbFByb2R1Y3RzIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiX3RoaXM0IiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiY2F0ZWdvcnlQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsInByb2R1Y3RzIiwibGltaXQiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsInBhZ2luYXRvciIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJmaW5kIiwiaHRtbCIsImNoaWxkcmVuIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJHRvcFByb2R1Y3QiLCJzbGljayIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYyIsInNlYXJjaFBhcmFtcyIsImdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiX3RoaXM1IiwiJHBhZ2luYXRvckNvbnRhaW5lciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsImxpbmsiLCJ1bmRlZmluZWQiLCJhZGRDbGFzcyIsImdldFBhZ2UiLCJyZXBsYWNlIiwiZXJyIiwiRXJyb3IiLCJhcHBlbmQiLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJ0ZXh0IiwiTnVtYmVyIiwicGFnaW5hdGlvbkluZm8iLCJ0b29sYmFyUGFnaW5hdGlvbkluZm8iLCJzaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MiLCJ0eHRfZW5kIiwidHh0X3RvdGFsIiwibnVtX2VuZCIsIm51bV90b3RhbCIsInBlcmNlbnQiLCJwYXJzZUludCIsImNzcyIsImJ1dHRvbnMiLCJwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiZ2V0QXR0cmlidXRlIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZW1wRWxlbWVudCIsIm5ld0NvbnRlbnQiLCJyZW1vdmUiLCJlcnJvciIsImNvbnNvbGUiLCJ1bCIsImlubmVyV2lkdGgiLCJpIiwicHJvZHVjdEdyb3VwIiwicHJvZHVjdEdyb3VwV3JhcHBlciIsInByb2RncmVzc0JhciIsInNldEF0dHJpYnV0ZSIsImoiLCJwcm9kdWN0R3JvdXBzIiwiZ3JvdXAiLCJwcm9kdWN0Iiwidmlld01vcmVCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRQYWdlIiwic2hvd1Byb2R1Y3RzIiwic3RhcnRJbmRleCIsImVuZEluZGV4Iiwic3R5bGUiLCJkaXNwbGF5IiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsImhpZGVBbGxQcm9kdWN0cyIsImFkZCIsInVwZGF0ZVZpZXciLCJ0ZXh0Q29udGVudCIsImRpc2FibGVkIiwicG9pbnRlckV2ZW50cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=