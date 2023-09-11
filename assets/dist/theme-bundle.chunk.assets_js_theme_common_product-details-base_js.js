"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_common_product-details-base_js"],{

/***/ "./assets/js/theme/common/aria/constants.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/aria/constants.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ariaKeyCodes: () => (/* binding */ ariaKeyCodes)
/* harmony export */ });
var ariaKeyCodes = {
  RETURN: 13,
  SPACE: 32,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

/***/ }),

/***/ "./assets/js/theme/common/aria/index.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/aria/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initRadioOptions: () => (/* reexport safe */ _radioOptions__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _radioOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radioOptions */ "./assets/js/theme/common/aria/radioOptions.js");


/***/ }),

/***/ "./assets/js/theme/common/aria/radioOptions.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/aria/radioOptions.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./assets/js/theme/common/aria/constants.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var setCheckedRadioItem = function setCheckedRadioItem(itemCollection, itemIdx) {
  itemCollection.each(function (idx, item) {
    var $item = $(item);
    if (idx !== itemIdx) {
      $item.attr('aria-checked', false).prop('checked', false);
      return;
    }
    $item.attr('aria-checked', true).prop('checked', true).focus();
    $item.trigger('change');
  });
};
var calculateTargetItemPosition = function calculateTargetItemPosition(lastItemIdx, currentIdx) {
  switch (true) {
    case currentIdx > lastItemIdx:
      return 0;
    case currentIdx < 0:
      return lastItemIdx;
    default:
      return currentIdx;
  }
};
var handleItemKeyDown = function handleItemKeyDown(itemCollection) {
  return function (e) {
    var keyCode = e.keyCode;
    var itemIdx = itemCollection.index(e.currentTarget);
    var lastCollectionItemIdx = itemCollection.length - 1;
    if (Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes).includes(keyCode)) {
      e.preventDefault();
      e.stopPropagation();
    }
    switch (keyCode) {
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.LEFT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.UP:
        {
          var prevItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx - 1);
          itemCollection.get(prevItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx - 1);
          break;
        }
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.RIGHT:
      case _constants__WEBPACK_IMPORTED_MODULE_0__.ariaKeyCodes.DOWN:
        {
          var nextItemIdx = calculateTargetItemPosition(lastCollectionItemIdx, itemIdx + 1);
          itemCollection.get(nextItemIdx).focus();
          setCheckedRadioItem(itemCollection, itemIdx + 1);
          break;
        }
      default:
        break;
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($container, itemSelector) {
  var $itemCollection = $container.find(itemSelector);
  $container.on('keydown', itemSelector, handleItemKeyDown($itemCollection));
});

/***/ }),

/***/ "./assets/js/theme/common/product-details-base.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/common/product-details-base.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetailsBase),
/* harmony export */   optionChangeDecorator: () => (/* binding */ optionChangeDecorator)
/* harmony export */ });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _aria__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aria */ "./assets/js/theme/common/aria/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var optionsTypesMap = {
  INPUT_FILE: 'input-file',
  INPUT_TEXT: 'input-text',
  INPUT_NUMBER: 'input-number',
  INPUT_CHECKBOX: 'input-checkbox',
  TEXTAREA: 'textarea',
  DATE: 'date',
  SET_SELECT: 'set-select',
  SET_RECTANGLE: 'set-rectangle',
  SET_RADIO: 'set-radio',
  SWATCH: 'swatch',
  PRODUCT_LIST: 'product-list'
};
function optionChangeDecorator(areDefaultOtionsSet) {
  var _this = this;
  return function (err, response) {
    var attributesData = response.data || {};
    var attributesContent = response.content || {};
    _this.updateProductAttributes(attributesData);
    if (areDefaultOtionsSet) {
      _this.updateView(attributesData, attributesContent);
    } else {
      _this.updateDefaultAttributesForOOS(attributesData);
    }
  };
}
var ProductDetailsBase = /*#__PURE__*/function () {
  function ProductDetailsBase($scope, context) {
    var _this2 = this;
    this.$scope = $scope;
    this.context = context;
    this.initRadioAttributes();
    _wishlist__WEBPACK_IMPORTED_MODULE_2__["default"].load(this.context);
    this.getTabRequests();
    $('[data-product-attribute]').each(function (__, value) {
      var type = value.getAttribute('data-product-attribute');
      _this2._makeProductVariantAccessible(value, type);
    });
  }
  var _proto = ProductDetailsBase.prototype;
  _proto._makeProductVariantAccessible = function _makeProductVariantAccessible(variantDomNode, variantType) {
    switch (variantType) {
      case optionsTypesMap.SET_RADIO:
      case optionsTypesMap.SWATCH:
        {
          (0,_aria__WEBPACK_IMPORTED_MODULE_3__.initRadioOptions)($(variantDomNode), '[type=radio]');
          break;
        }
      default:
        break;
    }
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this3 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this3.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this4 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this4.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this4.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $addToCart2: $('#halo_sticky_addToCart #form-action-addToCart2', $scope),
      $buyItNow: $('#form-action-buyItNow', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      if (data.stock <= parseInt(this.context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    var addToCartWrapper = $('#add-to-cart-wrapper');
    if (addToCartWrapper.is(':hidden') && data.purchasable) {
      addToCartWrapper.show();
    }
    var formWishlist = $('.form-wishlist');
    if (formWishlist.is(':hidden') && data.purchasable) {
      formWishlist.show();
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      var updatedPrice = price.price_range ? price.price_range.min.with_tax.formatted + " - " + price.price_range.max.with_tax.formatted : price.with_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(updatedPrice);
    }
    if (price.without_tax) {
      var _updatedPrice = price.price_range ? price.price_range.min.without_tax.formatted + " - " + price.price_range.max.without_tax.formatted : price.without_tax.formatted;
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(_updatedPrice);
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message');
    // start change
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
      $('.productView-notifyMe', $scope).show();
      $('.productView-options').addClass('notify-is-open');
    } else {
      $messageBox.hide();
      $('.productView-notifyMe', $scope).hide();
      $('.productView-options').removeClass('notify-is-open');
    }
    // end change
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$addToCart2.prop('disabled', true);
      viewModel.$buyItNow.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$addToCart2.prop('disabled', false);
      viewModel.$buyItNow.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide(0);
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  return ProductDetailsBase;
}(); // start change

if ($("#notifyMe_policy")) {
  $("#notifyMe_policy").click(function () {
    if ($(this).is(":checked")) {
      $(".productView-notifyMe").addClass("is-checked");
    } else {
      $(".productView-notifyMe").removeClass("is-checked");
    }
  });
}
// end change

/***/ }),

/***/ "./assets/js/theme/common/utils/pagination-utils.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/common/utils/pagination-utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   wishlistPaginatorHelper: () => (/* binding */ wishlistPaginatorHelper)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var changeWishlistPaginationLinks = function changeWishlistPaginationLinks(wishlistUrl) {
  for (var _len = arguments.length, paginationItems = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    paginationItems[_key - 1] = arguments[_key];
  }
  return $.each(paginationItems, function (_, $item) {
    var paginationLink = $item.children('.pagination-link');
    if ($item.length && !paginationLink.attr('href').includes('page=')) {
      var pageNumber = paginationLink.attr('href');
      paginationLink.attr('href', wishlistUrl + "page=" + pageNumber);
    }
  });
};

/**
 * helps to withdraw differences in structures around the stencil resource pagination
 */
var wishlistPaginatorHelper = function wishlistPaginatorHelper() {
  var $paginationList = $('.pagination-list');
  if (!$paginationList.length) return;
  var $nextItem = $('.pagination-item--next', $paginationList);
  var $prevItem = $('.pagination-item--previous', $paginationList);
  var currentHref = $('[data-pagination-current-page-link]').attr('href');
  var partialPaginationUrl = currentHref.split('page=').shift();
  changeWishlistPaginationLinks(partialPaginationUrl, $prevItem, $nextItem);
};

/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WishList)
/* harmony export */ });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils/pagination-utils */ "./assets/js/theme/common/utils/pagination-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: 'You must enter a wishlist name.'
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($('[data-pagination-wishlist]').length) {
      (0,_common_utils_pagination_utils__WEBPACK_IMPORTED_MODULE_4__.wishlistPaginatorHelper)();
    }
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21tb25fcHJvZHVjdC1kZXRhaWxzLWJhc2VfanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLElBQU1BLFlBQVksR0FBRztFQUN4QkMsTUFBTSxFQUFFLEVBQUU7RUFDVkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFLEVBQUU7RUFDUkMsRUFBRSxFQUFFLEVBQUU7RUFDTkMsS0FBSyxFQUFFLEVBQUU7RUFDVEMsSUFBSSxFQUFFO0FBQ1YsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1AwQztBQUUzQyxJQUFNQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFJQyxjQUFjLEVBQUVDLE9BQU8sRUFBSztFQUNyREQsY0FBYyxDQUFDRSxJQUFJLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxJQUFJLEVBQUs7SUFDL0IsSUFBTUMsS0FBSyxHQUFHQyxDQUFDLENBQUNGLElBQUksQ0FBQztJQUNyQixJQUFJRCxHQUFHLEtBQUtGLE9BQU8sRUFBRTtNQUNqQkksS0FBSyxDQUFDRSxJQUFJLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQztNQUN4RDtJQUNKO0lBRUFILEtBQUssQ0FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUM7SUFDOURKLEtBQUssQ0FBQ0ssT0FBTyxDQUFDLFFBQVEsQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQsSUFBTUMsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBSUMsV0FBVyxFQUFFQyxVQUFVLEVBQUs7RUFDN0QsUUFBUSxJQUFJO0lBQ1osS0FBS0EsVUFBVSxHQUFHRCxXQUFXO01BQUUsT0FBTyxDQUFDO0lBQ3ZDLEtBQUtD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dUIsQ0FBQyxDQUFDO0lBQzdCO0lBRUEsSUFBSXFDLGdCQUFnQixDQUFDbk4sTUFBTSxFQUFFO01BQ3pCLElBQUksQ0FBQ3FNLDZCQUE2QixDQUFDYyxnQkFBZ0IsQ0FBQztJQUN4RDtJQUVBLElBQUksQ0FBQ25CLHFCQUFxQixDQUFDLENBQUM7RUFDaEMsQ0FBQztFQUFBLE9BQUFQLFFBQUE7QUFBQSxFQW5FaUNGLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vYXJpYS9yYWRpb09wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vYmlnY29tbWVyY2UtaGVyYS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBhcmlhS2V5Q29kZXMgPSB7XG4gICAgUkVUVVJOOiAxMyxcbiAgICBTUEFDRTogMzIsXG4gICAgTEVGVDogMzcsXG4gICAgVVA6IDM4LFxuICAgIFJJR0hUOiAzOSxcbiAgICBET1dOOiA0MCxcbn07XG4iLCJpbXBvcnQgeyBhcmlhS2V5Q29kZXMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IHNldENoZWNrZWRSYWRpb0l0ZW0gPSAoaXRlbUNvbGxlY3Rpb24sIGl0ZW1JZHgpID0+IHtcbiAgICBpdGVtQ29sbGVjdGlvbi5lYWNoKChpZHgsIGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICBpZiAoaWR4ICE9PSBpdGVtSWR4KSB7XG4gICAgICAgICAgICAkaXRlbS5hdHRyKCdhcmlhLWNoZWNrZWQnLCBmYWxzZSkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRpdGVtLmF0dHIoJ2FyaWEtY2hlY2tlZCcsIHRydWUpLnByb3AoJ2NoZWNrZWQnLCB0cnVlKS5mb2N1cygpO1xuICAgICAgICAkaXRlbS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICB9KTtcbn07XG5cbmNvbnN0IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbiA9IChsYXN0SXRlbUlkeCwgY3VycmVudElkeCkgPT4ge1xuICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgY3VycmVudElkeCA+IGxhc3RJdGVtSWR4OiByZXR1cm4gMDtcbiAgICBjYXNlIGN1cnJlbnRJZHggPCAwOiByZXR1cm4gbGFzdEl0ZW1JZHg7XG4gICAgZGVmYXVsdDogcmV0dXJuIGN1cnJlbnRJZHg7XG4gICAgfVxufTtcblxuY29uc3QgaGFuZGxlSXRlbUtleURvd24gPSBpdGVtQ29sbGVjdGlvbiA9PiBlID0+IHtcbiAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XG4gICAgY29uc3QgaXRlbUlkeCA9IGl0ZW1Db2xsZWN0aW9uLmluZGV4KGUuY3VycmVudFRhcmdldCk7XG4gICAgY29uc3QgbGFzdENvbGxlY3Rpb25JdGVtSWR4ID0gaXRlbUNvbGxlY3Rpb24ubGVuZ3RoIC0gMTtcblxuICAgIGlmIChPYmplY3QudmFsdWVzKGFyaWFLZXlDb2RlcykuaW5jbHVkZXMoa2V5Q29kZSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgIGNhc2UgYXJpYUtleUNvZGVzLkxFRlQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuVVA6IHtcbiAgICAgICAgY29uc3QgcHJldkl0ZW1JZHggPSBjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24obGFzdENvbGxlY3Rpb25JdGVtSWR4LCBpdGVtSWR4IC0gMSk7XG4gICAgICAgIGl0ZW1Db2xsZWN0aW9uLmdldChwcmV2SXRlbUlkeCkuZm9jdXMoKTtcbiAgICAgICAgc2V0Q2hlY2tlZFJhZGlvSXRlbShpdGVtQ29sbGVjdGlvbiwgaXRlbUlkeCAtIDEpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuUklHSFQ6XG4gICAgY2FzZSBhcmlhS2V5Q29kZXMuRE9XTjoge1xuICAgICAgICBjb25zdCBuZXh0SXRlbUlkeCA9IGNhbGN1bGF0ZVRhcmdldEl0ZW1Qb3NpdGlvbihsYXN0Q29sbGVjdGlvbkl0ZW1JZHgsIGl0ZW1JZHggKyAxKTtcbiAgICAgICAgaXRlbUNvbGxlY3Rpb24uZ2V0KG5leHRJdGVtSWR4KS5mb2N1cygpO1xuICAgICAgICBzZXRDaGVja2VkUmFkaW9JdGVtKGl0ZW1Db2xsZWN0aW9uLCBpdGVtSWR4ICsgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0ICgkY29udGFpbmVyLCBpdGVtU2VsZWN0b3IpID0+IHtcbiAgICBjb25zdCAkaXRlbUNvbGxlY3Rpb24gPSAkY29udGFpbmVyLmZpbmQoaXRlbVNlbGVjdG9yKTtcblxuICAgICRjb250YWluZXIub24oJ2tleWRvd24nLCBpdGVtU2VsZWN0b3IsIGhhbmRsZUl0ZW1LZXlEb3duKCRpdGVtQ29sbGVjdGlvbikpO1xufTtcbiIsImltcG9ydCBXaXNobGlzdCBmcm9tICcuLi93aXNobGlzdCc7XG5pbXBvcnQgeyBpbml0UmFkaW9PcHRpb25zIH0gZnJvbSAnLi9hcmlhJztcbmltcG9ydCB7IGlzT2JqZWN0LCBpc051bWJlciB9IGZyb20gJ2xvZGFzaCc7XG5cbmNvbnN0IG9wdGlvbnNUeXBlc01hcCA9IHtcbiAgICBJTlBVVF9GSUxFOiAnaW5wdXQtZmlsZScsXG4gICAgSU5QVVRfVEVYVDogJ2lucHV0LXRleHQnLFxuICAgIElOUFVUX05VTUJFUjogJ2lucHV0LW51bWJlcicsXG4gICAgSU5QVVRfQ0hFQ0tCT1g6ICdpbnB1dC1jaGVja2JveCcsXG4gICAgVEVYVEFSRUE6ICd0ZXh0YXJlYScsXG4gICAgREFURTogJ2RhdGUnLFxuICAgIFNFVF9TRUxFQ1Q6ICdzZXQtc2VsZWN0JyxcbiAgICBTRVRfUkVDVEFOR0xFOiAnc2V0LXJlY3RhbmdsZScsXG4gICAgU0VUX1JBRElPOiAnc2V0LXJhZGlvJyxcbiAgICBTV0FUQ0g6ICdzd2F0Y2gnLFxuICAgIFBST0RVQ1RfTElTVDogJ3Byb2R1Y3QtbGlzdCcsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW9uQ2hhbmdlRGVjb3JhdG9yKGFyZURlZmF1bHRPdGlvbnNTZXQpIHtcbiAgICByZXR1cm4gKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIGlmIChhcmVEZWZhdWx0T3Rpb25zU2V0KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbHNCYXNlIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGUsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW5pdFJhZGlvQXR0cmlidXRlcygpO1xuICAgICAgICBXaXNobGlzdC5sb2FkKHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuZ2V0VGFiUmVxdWVzdHMoKTtcblxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKS5lYWNoKChfXywgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSh2YWx1ZSwgdHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9tYWtlUHJvZHVjdFZhcmlhbnRBY2Nlc3NpYmxlKHZhcmlhbnREb21Ob2RlLCB2YXJpYW50VHlwZSkge1xuICAgICAgICBzd2l0Y2ggKHZhcmlhbnRUeXBlKSB7XG4gICAgICAgIGNhc2Ugb3B0aW9uc1R5cGVzTWFwLlNFVF9SQURJTzpcbiAgICAgICAgY2FzZSBvcHRpb25zVHlwZXNNYXAuU1dBVENIOiB7XG4gICAgICAgICAgICBpbml0UmFkaW9PcHRpb25zKCQodmFyaWFudERvbU5vZGUpLCAnW3R5cGU9cmFkaW9dJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6IGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3cgcmFkaW8gYnV0dG9ucyB0byBnZXQgZGVzZWxlY3RlZFxuICAgICAqL1xuICAgIGluaXRSYWRpb0F0dHJpYnV0ZXMoKSB7XG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXSBpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCB0aGlzLiRzY29wZSkuZWFjaCgoaSwgcmFkaW8pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRyYWRpbyA9ICQocmFkaW8pO1xuXG4gICAgICAgICAgICAvLyBPbmx5IGJpbmQgdG8gY2xpY2sgb25jZVxuICAgICAgICAgICAgaWYgKCRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJykgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICRyYWRpby5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkcmFkaW8uZGF0YSgnc3RhdGUnKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8uZGF0YSgnc3RhdGUnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0UmFkaW9BdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyYWRpby5hdHRyKCdkYXRhLXN0YXRlJywgJHJhZGlvLnByb3AoJ2NoZWNrZWQnKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgb3IgbWFyayBhcyB1bmF2YWlsYWJsZSBvdXQgb2Ygc3RvY2sgYXR0cmlidXRlcyBpZiBlbmFibGVkXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhdHRyaWJ1dGUgPSAkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICBjb25zdCBhdHRySWQgPSBwYXJzZUludCgkYXR0cmlidXRlLmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGVWYWx1ZScpLCAxMCk7XG5cblxuICAgICAgICAgICAgaWYgKGluU3RvY2tJZHMuaW5kZXhPZihhdHRySWQpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgZnJhZ21lbnQgaWRlbnRpZmllciBpbiBVUkwgcmVxdWVzdGluZyBhIHNwZWNpZmljIHRhYlxuICAgICAqL1xuICAgIGdldFRhYlJlcXVlc3RzKCkge1xuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3RhYi0nKSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgJGFjdGl2ZVRhYiA9ICQoJy50YWJzJykuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApO1xuICAgICAgICAgICAgY29uc3QgJHRhYkNvbnRlbnQgPSAkKGAke3dpbmRvdy5sb2NhdGlvbi5oYXNofWApO1xuXG4gICAgICAgICAgICBpZiAoJGFjdGl2ZVRhYi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJGFjdGl2ZVRhYi5maW5kKCcudGFiJylcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxuICAgICAgICAgICAgICAgICAgICAuaGFzKGBbaHJlZj0nJHt3aW5kb3cubG9jYXRpb24uaGFzaH0nXWApXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkdGFiQ29udGVudC5hZGRDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKClcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkYWRkVG9DYXJ0MjogJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCAjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0MicsICRzY29wZSksXG4gICAgICAgICAgICAkYnV5SXROb3c6ICQoJyNmb3JtLWFjdGlvbi1idXlJdE5vdycsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0OiAkKCdbZGF0YS1zdG9jay1sZWZ0XScsICRzY29wZSksXG4gICAgICAgICAgICAkc3RvY2tMZWZ0V3JhcHBlcjogJCgnLnByb2R1Y3RWaWV3LW9wdGlvbnNTdG9jaycsICRzY29wZSksICBcbiAgICAgICAgICAgICR3aXNobGlzdFZhcmlhdGlvbjogJCgnW2RhdGEtd2lzaGxpc3QtYWRkXSBbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScsICRzY29wZSksXG4gICAgICAgICAgICBzdG9jazoge1xuICAgICAgICAgICAgICAgICRjb250YWluZXI6ICQoJy5mb3JtLWZpZWxkLS1zdG9jaycsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbZGF0YS1wcm9kdWN0LXN0b2NrXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHF1YW50aXR5OiB7XG4gICAgICAgICAgICAgICAgJHRleHQ6ICQoJy5pbmNyZW1lbnRUb3RhbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJGlucHV0OiAkKCdbbmFtZT1xdHlcXFxcW1xcXFxdXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGJ1bGtQcmljaW5nOiAkKCcucHJvZHVjdFZpZXctaW5mby1idWxrUHJpY2luZycsICRzY29wZSksXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcbiAgICAgKiBAcGFyYW0gdmlld01vZGVsXG4gICAgICovXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XG4gICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmIChpc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICBpZigoZGF0YS5zdG9jayA8PSBwYXJzZUludCh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3N0b2NrX2xldmVsX2xpbWl0KSkgJiYgKGRhdGEuc3RvY2sgPiAwKSkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRzdG9ja0xlZnRXcmFwcGVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNob3dNZXNzYWdlQm94KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEucHJpY2UpKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiBpc051bWJlcihkYXRhLnN0b2NrKSkge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHN0b2NrIGNvbnRhaW5lciBpcyBoaWRkZW4sIHNob3dcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGlucHV0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0V3JhcHBlciA9ICQoJyNhZGQtdG8tY2FydC13cmFwcGVyJyk7XG5cbiAgICAgICAgaWYgKGFkZFRvQ2FydFdyYXBwZXIuaXMoJzpoaWRkZW4nKSAmJiBkYXRhLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgICBhZGRUb0NhcnRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZvcm1XaXNobGlzdCA9ICQoJy5mb3JtLXdpc2hsaXN0Jyk7XG5cbiAgICAgICAgaWYgKGZvcm1XaXNobGlzdC5pcygnOmhpZGRlbicpICYmIGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIGZvcm1XaXNobGlzdC5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcblxuICAgICAgICBpZiAocHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRQcmljZSA9IHByaWNlLnByaWNlX3JhbmdlID9cbiAgICAgICAgICAgICAgICBgJHtwcmljZS5wcmljZV9yYW5nZS5taW4ud2l0aG91dF90YXguZm9ybWF0dGVkfSAtICR7cHJpY2UucHJpY2VfcmFuZ2UubWF4LndpdGhvdXRfdGF4LmZvcm1hdHRlZH1gXG4gICAgICAgICAgICAgICAgOiBwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQ7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5odG1sKHVwZGF0ZWRQcmljZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvdyBhbiBtZXNzYWdlIGJveCBpZiBhIG1lc3NhZ2UgaXMgcGFzc2VkXG4gICAgICogSGlkZSB0aGUgYm94IGlmIHRoZSBtZXNzYWdlIGlzIGVtcHR5XG4gICAgICogQHBhcmFtICB7U3RyaW5nfSBtZXNzYWdlXG4gICAgICovXG4gICAgc2hvd01lc3NhZ2VCb3gobWVzc2FnZSwgJHNjb3BlKSB7XG4gICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLnByb2R1Y3RBdHRyaWJ1dGVzLW1lc3NhZ2UnKTtcbiAgICAgICAgLy8gc3RhcnQgY2hhbmdlXG4gICAgICAgIGlmIChtZXNzYWdlKSB7XG4gICAgICAgICAgICAkKCcuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KG1lc3NhZ2UpO1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guc2hvdygpO1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LW5vdGlmeU1lJywgJHNjb3BlKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctb3B0aW9ucycpLmFkZENsYXNzKCdub3RpZnktaXMtb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LW5vdGlmeU1lJywgJHNjb3BlKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdub3RpZnktaXMtb3BlbicpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVuZCBjaGFuZ2VcblxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0Mi5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRidXlJdE5vdy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRpbmNyZW1lbnRzLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGFkZFRvQ2FydC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYWRkVG9DYXJ0Mi5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnV5SXROb3cucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmhpZGUoMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSB7XG4gICAgICAgIGNvbnN0ICRwYXJlbnQgPSAkYXR0cmlidXRlLmNsb3Nlc3QoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpO1xuXG4gICAgICAgIHJldHVybiAkcGFyZW50ID8gJHBhcmVudC5kYXRhKCdwcm9kdWN0QXR0cmlidXRlJykgOiBudWxsO1xuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHN0YXJ0IGNoYW5nZVxuaWYgKCQoXCIjbm90aWZ5TWVfcG9saWN5XCIpKSB7XG4gICAgJChcIiNub3RpZnlNZV9wb2xpY3lcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLmlzKFwiOmNoZWNrZWRcIikpIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctbm90aWZ5TWVcIikuYWRkQ2xhc3MoXCJpcy1jaGVja2VkXCIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LW5vdGlmeU1lXCIpLnJlbW92ZUNsYXNzKFwiaXMtY2hlY2tlZFwiKVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBlbmQgY2hhbmdlXG5cbiIsImNvbnN0IGNoYW5nZVdpc2hsaXN0UGFnaW5hdGlvbkxpbmtzID0gKHdpc2hsaXN0VXJsLCAuLi5wYWdpbmF0aW9uSXRlbXMpID0+ICQuZWFjaChwYWdpbmF0aW9uSXRlbXMsIChfLCAkaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBhZ2luYXRpb25MaW5rID0gJGl0ZW0uY2hpbGRyZW4oJy5wYWdpbmF0aW9uLWxpbmsnKTtcblxuICAgIGlmICgkaXRlbS5sZW5ndGggJiYgIXBhZ2luYXRpb25MaW5rLmF0dHIoJ2hyZWYnKS5pbmNsdWRlcygncGFnZT0nKSkge1xuICAgICAgICBjb25zdCBwYWdlTnVtYmVyID0gcGFnaW5hdGlvbkxpbmsuYXR0cignaHJlZicpO1xuICAgICAgICBwYWdpbmF0aW9uTGluay5hdHRyKCdocmVmJywgYCR7d2lzaGxpc3RVcmx9cGFnZT0ke3BhZ2VOdW1iZXJ9YCk7XG4gICAgfVxufSk7XG5cbi8qKlxuICogaGVscHMgdG8gd2l0aGRyYXcgZGlmZmVyZW5jZXMgaW4gc3RydWN0dXJlcyBhcm91bmQgdGhlIHN0ZW5jaWwgcmVzb3VyY2UgcGFnaW5hdGlvblxuICovXG5leHBvcnQgY29uc3Qgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgJHBhZ2luYXRpb25MaXN0ID0gJCgnLnBhZ2luYXRpb24tbGlzdCcpO1xuXG4gICAgaWYgKCEkcGFnaW5hdGlvbkxpc3QubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCAkbmV4dEl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0JywgJHBhZ2luYXRpb25MaXN0KTtcbiAgICBjb25zdCAkcHJldkl0ZW0gPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cycsICRwYWdpbmF0aW9uTGlzdCk7XG4gICAgY29uc3QgY3VycmVudEhyZWYgPSAkKCdbZGF0YS1wYWdpbmF0aW9uLWN1cnJlbnQtcGFnZS1saW5rXScpLmF0dHIoJ2hyZWYnKTtcbiAgICBjb25zdCBwYXJ0aWFsUGFnaW5hdGlvblVybCA9IGN1cnJlbnRIcmVmLnNwbGl0KCdwYWdlPScpLnNoaWZ0KCk7XG5cbiAgICBjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyhwYXJ0aWFsUGFnaW5hdGlvblVybCwgJHByZXZJdGVtLCAkbmV4dEl0ZW0pO1xufTtcbiIsImltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHdpc2hsaXN0UGFnaW5hdG9ySGVscGVyIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvcGFnaW5hdGlvbi11dGlscyc7XG5pbXBvcnQgeyBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpc2hMaXN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdhY2NvdW50L2FkZC13aXNobGlzdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGNvbmZpcm0gYm94IGJlZm9yZSBkZWxldGluZyBhbGwgd2lzaCBsaXN0c1xuICAgICAqL1xuICAgIHdpc2hsaXN0RGVsZXRlQ29uZmlybSgpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS13aXNobGlzdC1kZWxldGVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybWVkID0gd2luZG93LmNvbmZpcm0odGhpcy5jb250ZXh0Lndpc2hsaXN0RGVsZXRlKTtcblxuICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaGxpc3RGb3JtKSB7XG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnLndpc2hsaXN0LWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy53aXNobGlzdC1mb3JtIGlucHV0W25hbWU9XCJ3aXNobGlzdG5hbWVcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoID4gMDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB3aXNobGlzdCBuYW1lLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkYWRkV2lzaGxpc3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRhZGRXaXNoTGlzdEZvcm0gPSAkKCcud2lzaGxpc3QtZm9ybScpO1xuXG4gICAgICAgIGlmICgkKCdbZGF0YS1wYWdpbmF0aW9uLXdpc2hsaXN0XScpLmxlbmd0aCkge1xuICAgICAgICAgICAgd2lzaGxpc3RQYWdpbmF0b3JIZWxwZXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWRkV2lzaExpc3RGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbigkYWRkV2lzaExpc3RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMud2lzaGxpc3REZWxldGVDb25maXJtKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImFyaWFLZXlDb2RlcyIsIlJFVFVSTiIsIlNQQUNFIiwiTEVGVCIsIlVQIiwiUklHSFQiLCJET1dOIiwic2V0Q2hlY2tlZFJhZGlvSXRlbSIsIml0ZW1Db2xsZWN0aW9uIiwiaXRlbUlkeCIsImVhY2giLCJpZHgiLCJpdGVtIiwiJGl0ZW0iLCIkIiwiYXR0ciIsInByb3AiLCJmb2N1cyIsInRyaWdnZXIiLCJjYWxjdWxhdGVUYXJnZXRJdGVtUG9zaXRpb24iLCJsYXN0SXRlbUlkeCIsImN1cnJlbnRJZHgiLCJoYW5kbGVJdGVtS2V5RG93biIsImUiLCJrZXlDb2RlIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwibGFzdENvbGxlY3Rpb25JdGVtSWR4IiwibGVuZ3RoIiwiT2JqZWN0IiwidmFsdWVzIiwiaW5jbHVkZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZJdGVtSWR4IiwiZ2V0IiwibmV4dEl0ZW1JZHgiLCIkY29udGFpbmVyIiwiaXRlbVNlbGVjdG9yIiwiJGl0ZW1Db2xsZWN0aW9uIiwiZmluZCIsIm9uIiwiV2lzaGxpc3QiLCJpbml0UmFkaW9PcHRpb25zIiwib3B0aW9uc1R5cGVzTWFwIiwiSU5QVVRfRklMRSIsIklOUFVUX1RFWFQiLCJJTlBVVF9OVU1CRVIiLCJJTlBVVF9DSEVDS0JPWCIsIlRFWFRBUkVBIiwiREFURSIsIlNFVF9TRUxFQ1QiLCJTRVRfUkVDVEFOR0xFIiwiU0VUX1JBRElPIiwiU1dBVENIIiwiUFJPRFVDVF9MSVNUIiwib3B0aW9uQ2hhbmdlRGVjb3JhdG9yIiwiYXJlRGVmYXVsdE90aW9uc1NldCIsIl90aGlzIiwiZXJyIiwicmVzcG9uc2UiLCJhdHRyaWJ1dGVzRGF0YSIsImRhdGEiLCJhdHRyaWJ1dGVzQ29udGVudCIsImNvbnRlbnQiLCJ1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyIsInVwZGF0ZVZpZXciLCJ1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyIsIlByb2R1Y3REZXRhaWxzQmFzZSIsIiRzY29wZSIsImNvbnRleHQiLCJfdGhpczIiLCJpbml0UmFkaW9BdHRyaWJ1dGVzIiwibG9hZCIsImdldFRhYlJlcXVlc3RzIiwiX18iLCJ2YWx1ZSIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJfbWFrZVByb2R1Y3RWYXJpYW50QWNjZXNzaWJsZSIsIl9wcm90byIsInByb3RvdHlwZSIsInZhcmlhbnREb21Ob2RlIiwidmFyaWFudFR5cGUiLCJfdGhpczMiLCJpIiwicmFkaW8iLCIkcmFkaW8iLCJ1bmRlZmluZWQiLCJfdGhpczQiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJwYXJzZUludCIsImluZGV4T2YiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiJGFjdGl2ZVRhYiIsImhhcyIsIiR0YWJDb250ZW50IiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInNpYmxpbmdzIiwiZ2V0Vmlld01vZGVsIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCIkd2VpZ2h0IiwiJGluY3JlbWVudHMiLCIkYWRkVG9DYXJ0IiwiJGFkZFRvQ2FydDIiLCIkYnV5SXROb3ciLCIkc3RvY2tMZWZ0IiwiJHN0b2NrTGVmdFdyYXBwZXIiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCJzdG9jayIsIiRpbnB1dCIsInNrdSIsIiRsYWJlbCIsIiR2YWx1ZSIsInVwYyIsInF1YW50aXR5IiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInZpZXdNb2RlbCIsImhpZGUiLCJfaXNOdW1iZXIiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb19zdG9ja19sZXZlbF9saW1pdCIsInRleHQiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJfaXNPYmplY3QiLCJwcmljZSIsInVwZGF0ZVByaWNlVmlldyIsIndlaWdodCIsImh0bWwiLCJmb3JtYXR0ZWQiLCJ2YXJpYW50SWQiLCJ2YWwiLCJzaG93IiwiYnVsa19kaXNjb3VudF9yYXRlcyIsImFkZFRvQ2FydFdyYXBwZXIiLCJpcyIsInB1cmNoYXNhYmxlIiwiZm9ybVdpc2hsaXN0Iiwid2l0aF90YXgiLCJ1cGRhdGVkUHJpY2UiLCJwcmljZV9yYW5nZSIsIm1pbiIsIm1heCIsIndpdGhvdXRfdGF4IiwicnJwX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwic2F2ZWQiLCJub25fc2FsZV9wcmljZV93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4IiwibWVzc2FnZSIsIiRtZXNzYWdlQm94IiwiaW5zdG9jayIsImdldEF0dHJpYnV0ZVR5cGUiLCJlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsImNsb3Nlc3QiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwic2VsZWN0ZWRJbmRleCIsInJlcGxhY2UiLCJkZWZhdWx0IiwiY2xpY2siLCJjaGFuZ2VXaXNobGlzdFBhZ2luYXRpb25MaW5rcyIsIndpc2hsaXN0VXJsIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhZ2luYXRpb25JdGVtcyIsIkFycmF5IiwiX2tleSIsIl8iLCJwYWdpbmF0aW9uTGluayIsImNoaWxkcmVuIiwicGFnZU51bWJlciIsIndpc2hsaXN0UGFnaW5hdG9ySGVscGVyIiwiJHBhZ2luYXRpb25MaXN0IiwiJG5leHRJdGVtIiwiJHByZXZJdGVtIiwiY3VycmVudEhyZWYiLCJwYXJ0aWFsUGFnaW5hdGlvblVybCIsInNwbGl0Iiwic2hpZnQiLCJub2QiLCJQYWdlTWFuYWdlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJXaXNoTGlzdCIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiY2FsbCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJldmVudCIsImNvbmZpcm1lZCIsImNvbmZpcm0iLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwic3VibWl0IiwidGFwIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwib25SZWFkeSIsIiRhZGRXaXNoTGlzdEZvcm0iXSwic291cmNlUm9vdCI6IiJ9