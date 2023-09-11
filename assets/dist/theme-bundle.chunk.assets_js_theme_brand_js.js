"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
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











var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = (0,_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__.createTranslationDictionary)(context);
    return _this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
    (0,_halothemes_haloSideAllCategory__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_halothemes_haloProductDisplayMode__WEBPACK_IMPORTED_MODULE_7__["default"])();
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_8__["default"])();
    (0,_halothemes_haloStickyToolbar__WEBPACK_IMPORTED_MODULE_9__["default"])(this.context);
    this.showItem();
    this.loadOptionForProductCard(this.context);
    this.showProductsPerPage();
    this.showMoreProducts();
    this.showPaginationInfoToolbar();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $showMoreContainer = $('.halo-product-show-more');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.find('.product-listing-content').html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $showMoreContainer.html($(content.paginator).find('.halo-product-show-more').children());
      $('body').triggerHandler('compareReset');
      if ($('#product-listing-container .product').length > 0) {
        (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(_this2.context, 'product-listing-container');
      }
      _this2.showItem();
      _this2.showProductsPerPage();
      _this2.showMoreProducts();
      _this2.showPaginationInfoToolbar();
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
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'featured-products');
    }
    if ($('#product-listing-container .product').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
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
      productPerPage = this.context.brandProductsPerPage;
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
          end = currentPage * productPerPage - 1;
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
    var _this3 = this;
    var context = this.context;
    var getUrlParameter = this.getUrlParameter('limit');
    var requestOptions = {
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: context.brandProductsPerPage
          }
        }
      },
      template: {
        productListing: 'brand/halo-product-listing',
        sidebar: 'brand/sidebar',
        paginator: 'halothemes/gallery/halo-product-paginator'
      },
      showMore: 'brand/show-more'
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
              $('.pagination .pagination-info .end').text($('.toolbar-left .pagination-info .total').text());
            } else {
              var limit = getUrlParameter,
                productPerPage,
                pageCurrent = parseInt($(".pagination-item--current > a").text());
              if (limit !== undefined) {
                productPerPage = limit;
              } else {
                productPerPage = context.brandProductsPerPage;
              }
              var total = parseInt(productPerPage) * pageCurrent;
              $('.pagination .pagination-info .end').text(total);
            }
            var paginationInfo = $('.pagination .pagination-info').html(),
              toolbarPaginationInfo = $('.toolbar-wrapper .toolbar-left .pagination-info');
            toolbarPaginationInfo.html(paginationInfo);
            _this3.showPaginationTotalProgress();
            (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_6__["default"])(context, 'product-listing-container');
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
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNwQjtBQUNXO0FBQ1M7QUFDSjtBQUNtQztBQUNwQjtBQUNRO0FBQ0Y7QUFDVjtBQUNBO0FBQUEsSUFFMUNZLEtBQUssMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixLQUFBLEVBQUFDLFlBQUE7RUFDdEIsU0FBQUQsTUFBWUcsT0FBTyxFQUFFO0lBQUEsSUFBQUMsS0FBQTtJQUNqQkEsS0FBQSxHQUFBSCxZQUFBLENBQUFJLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQ2RDLEtBQUEsQ0FBS0Usb0JBQW9CLEdBQUdaLG1HQUEyQixDQUFDUyxPQUFPLENBQUM7SUFBQyxPQUFBQyxLQUFBO0VBQ3JFO0VBQUMsSUFBQUcsTUFBQSxHQUFBUCxLQUFBLENBQUFRLFNBQUE7RUFBQUQsTUFBQSxDQUVERSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ05qQixvRUFBZSxDQUFDLElBQUksQ0FBQ1csT0FBTyxDQUFDO0lBRTdCLElBQUlPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRDFCLDZEQUFLLENBQUMyQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7SUFDckQ7SUFFQWxCLDJFQUFtQixDQUFDLENBQUM7SUFDckJFLDhFQUFzQixDQUFDLENBQUM7SUFDeEJDLHlFQUFpQixDQUFDLENBQUM7SUFDbkJDLHlFQUFpQixDQUFDLElBQUksQ0FBQ0ksT0FBTyxDQUFDO0lBRS9CLElBQUksQ0FBQ2EsUUFBUSxD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Q2pCO0lBRUFySCxDQUFDLENBQUMsbURBQW1ELENBQUMsQ0FBQ3NILEdBQUcsQ0FBQyxPQUFPLEVBQUVELE9BQU8sR0FBRyxHQUFHLENBQUM7RUFDdEYsQ0FBQztFQUFBeEgsTUFBQSxDQUVEYSx5QkFBeUIsR0FBekIsU0FBQUEsMEJBQUEsRUFBNEI7SUFDeEIsSUFBSW9HLGNBQWMsR0FBRzlHLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDMEMsSUFBSSxDQUFDLENBQUM7TUFDekRxRSxxQkFBcUIsR0FBRy9HLENBQUMsQ0FBQyxpREFBaUQsQ0FBQztJQUVoRitHLHFCQUFxQixDQUFDckUsSUFBSSxDQUFDb0UsY0FBYyxDQUFDO0VBQzlDLENBQUM7RUFBQSxPQUFBeEgsS0FBQTtBQUFBLEVBeFM4QlYsZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2JyYW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzLCBhcGkgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuaW1wb3J0IEZhY2V0ZWRTZWFyY2ggZnJvbSAnLi9jb21tb24vZmFjZXRlZC1zZWFyY2gnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscyc7XG5pbXBvcnQgaGFsb1NpZGVBbGxDYXRlZ29yeSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGVBbGxDYXRlZ29yeSc7XG5pbXBvcnQgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QgZnJvbSAnLi9oYWxvdGhlbWVzL2hhbG9BZGRPcHRpb25Gb3JQcm9kdWN0JztcbmltcG9ydCBoYWxvcHJvZHVjdERpc3BsYXlNb2RlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvUHJvZHVjdERpc3BsYXlNb2RlJztcbmltcG9ydCBoYWxvU2lkZWJhclRvZ2dsZSBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUnO1xuaW1wb3J0IGhhbG9TdGlja3lUb29sYmFyIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU3RpY2t5VG9vbGJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBoYWxvU2lkZUFsbENhdGVnb3J5KCk7XG4gICAgICAgIGhhbG9wcm9kdWN0RGlzcGxheU1vZGUoKTtcbiAgICAgICAgaGFsb1NpZGViYXJUb2dnbGUoKTtcbiAgICAgICAgaGFsb1N0aWNreVRvb2xiYXIodGhpcy5jb250ZXh0KTtcblxuICAgICAgICB0aGlzLnNob3dJdGVtKCk7XG4gICAgICAgIHRoaXMubG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICB0aGlzLnNob3dNb3JlUHJvZHVjdHMoKTtcbiAgICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbkluZm9Ub29sYmFyKCk7XG4gICAgfVxuXG4gICAgaW5pdEZhY2V0ZWRTZWFyY2goKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHByaWNlX21pbl9ldmFsdWF0aW9uOiBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9tYXhfZXZhbHVhdGlvbjogb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9tYXhfbm90X2VudGVyZWQ6IG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX2ludmFsaWRfdmFsdWU6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCcucHJvZHVjdC1saXN0aW5nLWNvbnRlbnQnKS5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHNob3dNb3JlQ29udGFpbmVyLmh0bWwoJChjb250ZW50LnBhZ2luYXRvcikuZmluZCgnLmhhbG8tcHJvZHVjdC1zaG93LW1vcmUnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCh0aGlzLmNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2hvd0l0ZW0oKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzUGVyUGFnZSgpO1xuICAgICAgICAgICAgdGhpcy5zaG93TW9yZVByb2R1Y3RzKCk7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKTtcblxuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcbiAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICR0b3BQcm9kdWN0ID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lciAjZmVhdHVyZWQtcHJvZHVjdHMgLnByb2R1Y3RzLWxpc3QnKTtcblxuICAgICAgICAgICAgaWYgKCR0b3BQcm9kdWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0b3BQcm9kdWN0LnNsaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XG4gICAgICAgICAgICAgICAgb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBtaW5QcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xuICAgICAgICBpZigkKCcjZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdmZWF0dXJlZC1wcm9kdWN0cycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnByb2R1Y3QnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHNQZXJQYWdlKCl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgICB2YXIgYyA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwibGltaXRcIik7XG4gICAgICAgICAgICBpZihjICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCNsaW1pdCBvcHRpb24nKTtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGxpbWl0LCBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQudmFsdWUgPT0gYyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoKGUpIHt9XG4gICAgfVxuXG4gICAgc2hvd0l0ZW0oKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KCQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSxcbiAgICAgICAgICAgIGxpbWl0ID0gdGhpcy5nZXRVcmxQYXJhbWV0ZXIoJ2xpbWl0JyksXG4gICAgICAgICAgICBwcm9kdWN0UGVyUGFnZTtcblxuICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBsaW1pdDtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc3RhcnQgPSAxLFxuICAgICAgICAgICAgZW5kID0gdG90YWwsXG4gICAgICAgICAgICBjaGVja0xhc3RQYWdlID0gZmFsc2UsXG4gICAgICAgICAgICBsYXN0UGFnZSA9IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIGNoZWNrTGluayA9ICQoXCIucGFnaW5hdGlvbi1saXN0IC5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpO1xuICAgICAgICB2YXIgcGFnZU5vdExhc3QgPSBsYXN0UGFnZSAtIDE7XG4gICAgICAgIHZhciB0b3RhbE5vdExhc3QgPSBwYWdlTm90TGFzdCAqIHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICB2YXIgcHJvZHVjdHNMYXN0UGFnZSA9IHRvdGFsIC0gdG90YWxOb3RMYXN0O1xuICAgICAgICB2YXIgY3VycmVudFBhZ2UgPSBwYXJzZUludCgkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50ID4gYScpLnRleHQoKSk7XG4gICAgICAgIHZhciBwcmV2UGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcblxuICAgICAgICBpZiAoY2hlY2tMaW5rLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgbGFzdFBhZ2UgPSBwYXJzZUludCgkKFwiLnBhZ2luYXRpb24taXRlbS0tY3VycmVudFwiKS5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXN0UGFnZSA9IHBhcnNlSW50KGNoZWNrTGluay5maW5kKFwiYVwiKS50ZXh0KCkpO1xuICAgICAgICAgICAgY2hlY2tMYXN0UGFnZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodG90YWwgPD0gcHJvZHVjdFBlclBhZ2UpIHtcbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gMSkge1xuICAgICAgICAgICAgICAgIGVuZCA9IHByb2R1Y3RQZXJQYWdlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGFydCA9IChwcmV2UGFnZSAqIHByb2R1Y3RQZXJQYWdlKSArIDE7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrTGFzdFBhZ2UgPSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCQoJy5wYWdpbmF0aW9uLWxpc3QgLnBhZ2luYXRpb24taXRlbS0tbmV4dCcpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5kID0gdG90YWxOb3RMYXN0ICsgcHJvZHVjdHNMYXN0UGFnZSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IHRvdGFsTm90TGFzdCArIHByb2R1Y3RzTGFzdFBhZ2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBjdXJyZW50UGFnZSAqIHByb2R1Y3RQZXJQYWdlIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWluZm8gLnN0YXJ0JykudGV4dChzdGFydCk7XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KGVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uVG90YWxQcm9ncmVzcygpO1xuICAgIH1cblxuICAgIGdldFVybFBhcmFtZXRlcihzUGFyYW0pIHtcbiAgICAgICAgdmFyIHNQYWdlVVJMID0gZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3Vic3RyaW5nKDEpKSxcbiAgICAgICAgICAgIHNVUkxWYXJpYWJsZXMgPSBzUGFnZVVSTC5zcGxpdCgnJicpLFxuICAgICAgICAgICAgc1BhcmFtZXRlck5hbWUsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBzVVJMVmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzUGFyYW1ldGVyTmFtZSA9IHNVUkxWYXJpYWJsZXNbaV0uc3BsaXQoJz0nKTtcblxuICAgICAgICAgICAgaWYgKHNQYXJhbWV0ZXJOYW1lWzBdID09PSBzUGFyYW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc1BhcmFtZXRlck5hbWVbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBzUGFyYW1ldGVyTmFtZVsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dNb3JlUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIGNvbnN0IGdldFVybFBhcmFtZXRlciA9IHRoaXMuZ2V0VXJsUGFyYW1ldGVyKCdsaW1pdCcpO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBjb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL2hhbG8tcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICAgICAgcGFnaW5hdG9yOiAnaGFsb3RoZW1lcy9nYWxsZXJ5L2hhbG8tcHJvZHVjdC1wYWdpbmF0b3InLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lciAucHJvZHVjdExpc3RpbmcnKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRwYWdpbmF0b3JDb250YWluZXIgPSAkKCcucGFnaW5hdGlvbi1saXN0Jyk7XG4gICAgICAgIGNvbnN0ICRzaG93TW9yZUNvbnRhaW5lciA9ICQoJy5oYWxvLXByb2R1Y3Qtc2hvdy1tb3JlJyk7XG5cbiAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgbmV4dFBhZ2UgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50JykubmV4dCgpLFxuICAgICAgICAgICAgICAgIGxpbmsgPSBuZXh0UGFnZS5maW5kKFwiYVwiKS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgICAgaWYgKGxpbmsgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICAgICAgYXBpLmdldFBhZ2UobGluay5yZXBsYWNlKFwiaHR0cDovL1wiLCBcIi8vXCIpLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LnByb2R1Y3RMaXN0aW5nICE9ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuYXBwZW5kKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJHBhZ2luYXRvckNvbnRhaW5lci5odG1sKCQoY29udGVudC5wYWdpbmF0b3IpLmZpbmQoJy5wYWdpbmF0aW9uLWxpc3QnKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2xpc3Rpbmctc2hvd21vcmVCdG4gPiBhJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKS5ibHVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQYWdlID0gJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCcpLm5leHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5leHRQYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuID4gYScpLmFkZENsYXNzKCdkaXNhYmxlJykudGV4dCgnTm8gbW9yZSBwcm9kdWN0cycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoJCgnLnRvb2xiYXItbGVmdCAucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsaW1pdCA9IGdldFVybFBhcmFtZXRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VDdXJyZW50ID0gcGFyc2VJbnQoJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnQgPiBhXCIpLnRleHQoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobGltaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UGVyUGFnZSA9IGxpbWl0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdFBlclBhZ2UgPSBjb250ZXh0LmJyYW5kUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b3RhbCA9IHBhcnNlSW50KHByb2R1Y3RQZXJQYWdlKSpwYWdlQ3VycmVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQodG90YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFnaW5hdGlvbkluZm8gPSAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvJykuaHRtbCgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhclBhZ2luYXRpb25JbmZvID0gJCgnLnRvb2xiYXItd3JhcHBlciAudG9vbGJhci1sZWZ0IC5wYWdpbmF0aW9uLWluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QoY29udGV4dCwgJ3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaG93UGFnaW5hdGlvblRvdGFsUHJvZ3Jlc3MoKSB7XG4gICAgICAgIGNvbnN0IHR4dF9lbmQgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCksXG4gICAgICAgICAgICB0eHRfdG90YWwgPSAkKCcucGFnaW5hdGlvbi1pbmZvIC50b3RhbCcpLnRleHQoKSxcbiAgICAgICAgICAgIG51bV9lbmQgPSAobnVtX2VuZCAhPSAnJyA/IE51bWJlcih0eHRfZW5kLnJlcGxhY2UoL1teMC05Li1dKy9nLCcnKSkgOiAwKSxcbiAgICAgICAgICAgIG51bV90b3RhbCA9IChudW1fdG90YWwgIT0gJycgPyBOdW1iZXIodHh0X3RvdGFsLnJlcGxhY2UoL1teMC05Li1dKy9nLCcnKSkgOiAwKTtcblxuICAgICAgICB2YXIgcGVyY2VudCA9IHBhcnNlSW50KG51bV9lbmQvbnVtX3RvdGFsICogMTAwKTtcbiAgICAgICAgXG4gICAgICAgIHBlcmNlbnQgPSAocGVyY2VudCA+IDEwMCA/IDEwMCA6IHBlcmNlbnQpO1xuXG4gICAgICAgIGlmKG51bV9lbmQgPT0gbnVtX3RvdGFsKXtcbiAgICAgICAgICAgIHBlcmNlbnQgPSAxMDA7XG4gICAgICAgIH1cblxuICAgICAgICAkKCcucGFnaW5hdGlvbi10b3RhbC1wcm9ncmVzcyAucGFnaW5hdGlvbi10b3RhbC1pdGVtJykuY3NzKCd3aWR0aCcsIHBlcmNlbnQgKyAnJScpO1xuICAgIH1cblxuICAgIHNob3dQYWdpbmF0aW9uSW5mb1Rvb2xiYXIoKSB7XG4gICAgICAgIHZhciBwYWdpbmF0aW9uSW5mbyA9ICQoJy5wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLWluZm8nKS5odG1sKCksXG4gICAgICAgICAgICB0b29sYmFyUGFnaW5hdGlvbkluZm8gPSAkKCcudG9vbGJhci13cmFwcGVyIC50b29sYmFyLWxlZnQgLnBhZ2luYXRpb24taW5mbycpO1xuXG4gICAgICAgIHRvb2xiYXJQYWdpbmF0aW9uSW5mby5odG1sKHBhZ2luYXRpb25JbmZvKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiaG9va3MiLCJhcGkiLCJDYXRhbG9nUGFnZSIsInV0aWxzIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImhhbG9TaWRlQWxsQ2F0ZWdvcnkiLCJoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCIsImhhbG9wcm9kdWN0RGlzcGxheU1vZGUiLCJoYWxvU2lkZWJhclRvZ2dsZSIsImhhbG9TdGlja3lUb29sYmFyIiwiQnJhbmQiLCJfQ2F0YWxvZ1BhZ2UiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCIkIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJvbiIsInNob3dJdGVtIiwibG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkIiwic2hvd1Byb2R1Y3RzUGVyUGFnZSIsInNob3dNb3JlUHJvZHVjdHMiLCJzaG93UGFnaW5hdGlvbkluZm9Ub29sYmFyIiwiX3RoaXMyIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpIiwib25NaW5QcmljZUVycm9yIiwicHJpY2VfbWluX2V2YWx1YXRpb24iLCJvbk1heFByaWNlRXJyb3IiLCJwcmljZV9tYXhfZXZhbHVhdGlvbiIsIm1pblByaWNlTm90RW50ZXJlZCIsInByaWNlX21pbl9ub3RfZW50ZXJlZCIsIm1heFByaWNlTm90RW50ZXJlZCIsInByaWNlX21heF9ub3RfZW50ZXJlZCIsIm9uSW52YWxpZFByaWNlIiwicHJpY2VfaW52YWxpZF92YWx1ZSIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJHNob3dNb3JlQ29udGFpbmVyIiwicHJvZHVjdHNQZXJQYWdlIiwiYnJhbmRQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwicGFnaW5hdG9yIiwiY29uZmlnIiwic2hvcF9ieV9icmFuZCIsImJyYW5kIiwicHJvZHVjdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJmaW5kIiwiaHRtbCIsImNoaWxkcmVuIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwiJHRvcFByb2R1Y3QiLCJzbGljayIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiYyIsInNlYXJjaFBhcmFtcyIsImdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsIkFycmF5IiwiZm9yRWFjaCIsImVsZW1lbnQiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiZSIsInRvdGFsIiwicGFyc2VJbnQiLCJ0ZXh0IiwiZ2V0VXJsUGFyYW1ldGVyIiwicHJvZHVjdFBlclBhZ2UiLCJ1bmRlZmluZWQiLCJzdGFydCIsImVuZCIsImNoZWNrTGFzdFBhZ2UiLCJsYXN0UGFnZSIsImNoZWNrTGluayIsIm5leHQiLCJwYWdlTm90TGFzdCIsInRvdGFsTm90TGFzdCIsInByb2R1Y3RzTGFzdFBhZ2UiLCJjdXJyZW50UGFnZSIsInByZXZQYWdlIiwic2hvd1BhZ2luYXRpb25Ub3RhbFByb2dyZXNzIiwic1BhcmFtIiwic1BhZ2VVUkwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzZWFyY2giLCJzdWJzdHJpbmciLCJzVVJMVmFyaWFibGVzIiwic3BsaXQiLCJzUGFyYW1ldGVyTmFtZSIsImkiLCJfdGhpczMiLCIkcGFnaW5hdG9yQ29udGFpbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5leHRQYWdlIiwibGluayIsImF0dHIiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwiZ2V0UGFnZSIsInJlcGxhY2UiLCJlcnIiLCJFcnJvciIsImFwcGVuZCIsInJlbW92ZUNsYXNzIiwiYmx1ciIsInBhZ2VDdXJyZW50IiwicGFnaW5hdGlvbkluZm8iLCJ0b29sYmFyUGFnaW5hdGlvbkluZm8iLCJ0eHRfZW5kIiwidHh0X3RvdGFsIiwibnVtX2VuZCIsIk51bWJlciIsIm51bV90b3RhbCIsInBlcmNlbnQiLCJjc3MiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==