"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/utils/safe-string.js":
/*!*****************************************************!*\
  !*** ./assets/js/theme/common/utils/safe-string.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   safeString: () => (/* binding */ safeString)
/* harmony export */ });
/**
 * This function parses HTML entities in strings
 * @param str: String
 * @returns String
*/
var safeString = function safeString(str) {
  var d = new DOMParser();
  return d.parseFromString(str, 'text/html').body.textContent;
};

/***/ }),

/***/ "./assets/js/theme/halothemes/haloBundleProducts.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloBundleProducts.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./haloCalculateFreeShipping */ "./assets/js/theme/halothemes/haloCalculateFreeShipping.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");



function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  var thisProuctId = parseInt(context.productId),
    $relateTab = $('#halo-related-products'),
    $bundle = $('#halo-bundle-products'),
    $bundleList = $bundle.find('.halo-product-list'),
    $bundleDetail = $bundle.find('.halo-product-detail');
  var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__["default"])('#modal')[0];
  var currency = context.money;
  showBundle();
  $(document).on('click', '.halo-toggle-options', function (event) {
    event.preventDefault();
    var $target = $(event.currentTarget);
    $('.halo-toggle-options').not($target).removeClass('is-focus');
    $('.halo-detail-options').not($target.next('.halo-detail-options')).removeClass('is-open');
    if (!$target.next('.halo-detail-options').hasClass('is-open')) {
      $target.addClass('is-focus');
      $target.next('.halo-detail-options').addClass('is-open');
    } else {
      $target.next('.halo-detail-options').removeClass('is-open');
      $target.removeClass('is-focus');
    }
  });
  $(document).on('click', '.halo-option-close', function (event) {
    event.preventDefault();
    $('.halo-detail-options').removeClass('is-open');
    $('.halo-toggle-options').removeClass('is-focus');
  });
  $(document).on('click', function (event) {
    if ($('.halo-detail-options').hasClass('is-open')) {
      if ($(event.target).closest('.halo-detail-options').length === 0 && $(event.target).closest('.halo-toggle-options').length === 0) {
        $('.halo-detail-options').removeClass('is-open');
        $('.halo-toggle-options').removeClass('is-focus');
      }
    }
  });
  // start change
  $(document).on('change', '.halo-detail-checkbox', function (event) {
    var $target = $(event.currentTarget),
      id = $target.attr('id').replace('fbt_product', ''),
      productImage = $('.halo-product-image[data-product-image-id="' + id + '"]'),
      product = $('.halo-product-item[data-product-id="' + id + '"]');
    if ($target.is(':checked') == false) {
      product.removeClass('isChecked');
      productImage.removeClass('isChecked');
    } else {
      product.addClass('isChecked');
      productImage.addClass('isChecked');
    }
    totalPrice();
  });
  // end change

  $(document).on('click', '#halo-addAll', function (event) {
    event.preventDefault();
    var $form = $('form', $bundle);
    var arrPro = new Array();
    $('.halo-detail-checkbox').each(function (index, val) {
      if ($(val).is(':checked')) {
        arrPro.push(index);
      }
    });
    var check = false;
    if (arrPro.length > 0) {
      check = checkProduct($form, arrPro);
    }
    if (check) {
      if (arrPro.length > 0) {
        var k = arrPro.length;
        $bundle.find('.loadingOverlay').show();
        addToCart($form, 0, arrPro, k);
      }
    } else {
      var errorMessage = 'Please make sure all options have been filled in.';
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        return (0,_global_modal__WEBPACK_IMPORTED_MODULE_4__.showAlertModal)(tmp.textContent || tmp.innerText);
      }
    }
    event.preventDefault();
  });
  function showBundle() {
    var options = {
      template: {
        item: 'halothemes/product/halo-bundle-products-tmp',
        options: 'halothemes/product/halo-bundle-products-options',
        image: 'halothemes/product/halo-bundle-products-image'
      }
    };
    var prodBundleId = [],
      totalBlock = '';
    firstItem();
    //start change    
    if ($bundle.hasClass('halo-bundle-login')) {
      totalBlock = '<div class="halo-product-total">\
                            <a class="button button--primary halo-product-total-button" disabled href="#">Log in for pricing</a>\
                        </div>';
    } else {
      totalBlock = '<div class="halo-product-total">\
                            <div class="total-price">\
                                <span class="text"><span>Total:</span></span>\
                                <span class="price"></span>\
                            </div>\
                            <a class="button button--primary halo-product-total-button" id="halo-addAll" href="#">ADAUGa iN COS</a>\
                        </div>';
    }
    //end change    

    $bundle.find('.bundle-product-right').append(totalBlock);
    $.each(context.productCustomFields, function (index, obj) {
      if (obj.name == '__bundleid') {
        prodBundleId = JSON.parse('[' + obj.value + ']');
      }
    });
    prodBundleId = $.grep(prodBundleId, function (value) {
      return value != thisProuctId;
    });
    if ($bundle.length > 0 && prodBundleId.length == 0) {
      var num = 0,
        list = [];
      $relateTab.find('.card').each(function (index, val) {
        list.push({
          index: index,
          data: ""
        });
        var pId = $(val).data('product-id');
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return '';
            }
            list.forEach(function (element) {
              if (element.index == index) {
                element.data = response;
                console.log(response);
              }
            });
            num++;
            if (num == $relateTab.find('.card').length) {
              showList(list);
            }
          });
        }
      });
    } else if ($bundle.length > 0 && prodBundleId.length > 0) {
      var num = 0,
        list = [],
        listFilter = $.unique(prodBundleId);
      $.each(prodBundleId, function (i, val) {
        list.push({
          i: i,
          data: ""
        });
        var pId = prodBundleId[i];
        if (pId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(pId, options, function (err, response) {
            if (err) {
              return false;
            }
            list.forEach(function (element) {
              if (element.i == i) {
                element.data = response;
              }
            });
            num++;
            if (num == prodBundleId.length) {
              showList(list);
            }
          });
        }
      });
    }
  }
  function firstItem() {
    var firstItem = $bundleList.find('.halo-product-itemFirst'),
      pId = firstItem.data('product-id'),
      form = firstItem.find('form'),
      hasOptions = form.find('[data-fbt-option-change]').length,
      hasDefaultOptions = form.find('[data-default]').length;
    if (hasDefaultOptions && hasOptions) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, form.serialize(), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        updateProductAttributes(form, attributesData);
        if (hasDefaultOptions) {
          updateView(form, attributesData, attributesContent);
        } else {
          updateDefaultAttributesForOOS(attributesData);
        }
      });
    }
  }
  function showList(list) {
    list.forEach(function (element) {
      var response = element.data;
      if (response != undefined && response != null && response != '') {
        $bundleList.append(response.image);
        $bundleDetail.append(response.item);
        if (response.options.trim() != "") {
          var pId = $(response.item).data('product-id'),
            $form = $bundleList.find('.halo-product-item[data-product-id="' + pId + '"] form');
          $form.append(response.options);
          var $productOptionsElement = $('[data-fbt-option-change]', $form);
          var hasOptions = $productOptionsElement.html().trim().length;
          var hasDefaultOptions = $(response.options).find('[data-default]').length;
          if (hasDefaultOptions && hasOptions) {
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(pId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
              if (response != undefined) {
                var attributesData = response.data || {};
                var attributesContent = response.content || {};
                updateProductAttributes($form, attributesData);
                if (hasDefaultOptions) {
                  updateView($form, attributesData, attributesContent);
                } else {
                  updateDefaultAttributesForOOS(attributesData);
                }
              }
            });
          }
          setProductVariant();
        }
      }
    });
    productOptions();
    showSlickSlider($bundleList);
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    $bundle.removeClass('halo-block-disable');
  }
  function showSlickSlider(wrap) {
    if (wrap.length > 0) {
      wrap.slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        mobileFirst: true,
        infinite: false,
        responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true
          }
        }, {
          breakpoint: 320,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true
          }
        }]
      });
    }
  }
  function checkProduct(form, arrPro) {
    var check = true;
    for (var i = 0; i < arrPro.length; i++) {
      var k = arrPro[i],
        $form = $(form[k]);
      if ($form.find('[data-fbt-option-change]').length) {
        check = checkBeforeAdd($form);
        if (check == false) {
          return false;
        }
      }
    }
    return check;
  }
  function checkBeforeAdd($attributes) {
    var check = true,
      att = "";
    $attributes.find('input:text, input:password, input:file, textarea').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('select').each(function (index, element) {
      if (!$(element).prop('required')) {} else {
        if ($(element).val()) {} else {
          $(element).focus();
          check = false;
        }
      }
    });
    $attributes.find('input:radio, input:checkbox').each(function (index, element) {
      if (att != $(element).attr("name")) {
        att = $(element).attr("name");
        if (!$(element).prop('required')) {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {}
          }
        } else {
          if ($(element).attr("type") == "checkbox") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
          if ($(element).attr("type") == "radio") {
            if ($("[name='" + att + "']:checked").val()) {} else {
              check = false;
            }
          }
        }
      }
    });
    return check;
  }
  function addToCart(form, i, arrP, k) {
    if (window.FormData === undefined) {
      return;
    }
    var prod = arrP[i];
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form[prod])), function (err, response) {
      var errorMessage = err || response.data.error;
      if (errorMessage) {
        var tmp = document.createElement('DIV');
        tmp.innerHTML = errorMessage;
        alert(tmp.textContent || tmp.innerText);
        k = k - 1;
      }
      i++;
      if (i >= arrP.length) {
        $bundle.find('.loadingOverlay').hide();
        if (context.themeSettings.haloAddToCartAction === 'sidebar') {
          var options = {
            template: 'common/cart-preview'
          };
          var loadingClass = 'is-loading';
          var $body = $('body');
          var $cartDropdown = $('#halo-cart-sidebar .halo-sidebar-wrapper');
          var $cartLoading = $('<div class="loadingOverlay"></div>');
          $body.toggleClass('openCartSidebar');
          $cartDropdown.addClass(loadingClass).html($cartLoading);
          $cartLoading.show();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getContent(options, function (err, response) {
            $cartDropdown.removeClass(loadingClass).html(response);
            $cartLoading.hide();
            var quantity = $(response).find('[data-cart-quantity]').data('cartQuantity') || 0;
            $body.trigger('cart-quantity-update', quantity);
            (0,_haloCalculateFreeShipping__WEBPACK_IMPORTED_MODULE_5__["default"])(context);
          });
        } else {
          redirectTo(context.urls.cart);
        }
        return;
      }
      addToCart(form, i, arrP, k);
    });
  }
  function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  function redirectTo(url) {
    if (isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }
  function totalPrice() {
    var total = 0,
      symbol,
      symbolChange,
      decimalPlaces,
      decimalSeparator,
      thousandsSeparator,
      symbolLocation,
      curr,
      token1,
      token2,
      length;
    decimalPlaces = currency.decimal_places;
    decimalSeparator = currency.decimal_token;
    thousandsSeparator = currency.thousands_token;
    symbolLocation = currency.currency_location;
    symbol = currency.currency_token;
    $bundleDetail.find('.halo-product-item.isChecked').each(function (index, val) {
      var price = parseFloat($(val).find('[data-price-value]').attr('data-price-value'));
      total = total + price;
    });
    if ($('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).length) {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withTax', $scope).data('value-price');
    } else {
      curr = $('.productView-product .productView-price > .price-section > .price.price--withoutTax', $scope).data('value-price');
    }
    symbolChange = curr.replace(/[0-9]/g, "").replace(".", "").replace(",", "");
    if (symbol != symbolChange) {
      symbol = symbolChange;
      token1 = curr.indexOf('.');
      token2 = curr.indexOf(',');
      length = curr.length - 1;
      if (curr.indexOf(symbol) != -1) {
        symbolLocation = curr.indexOf(symbol);
      }
      if (token1 < token2) {
        thousandsSeparator = '.';
        decimalSeparator = ',';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token2;
        } else {
          decimalPlaces = length - token2 - 1;
        }
      } else {
        thousandsSeparator = ',';
        decimalSeparator = '.';
        if (symbolLocation == 0 || symbolLocation == "left") {
          decimalPlaces = length - token1;
        } else {
          decimalPlaces = length - token1 - 1;
        }
      }
    }
    if (total == 0) {
      $bundle.find('#halo-addAll').attr('disabled', true);
    } else {
      $bundle.find('#halo-addAll').attr('disabled', false);
    }
    total = formatMoney(total, decimalPlaces, decimalSeparator, thousandsSeparator);
    if (symbolLocation == "left" || symbolLocation == 0) {
      total = symbol + total;
    } else {
      total = total + symbol;
    }
    $bundle.find('.halo-product-total .price').html(total);
  }
  function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
      d = d == undefined ? "." : d,
      t = t == undefined ? "," : t,
      s = n < 0 ? "-" : "",
      i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
      j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
  }
  ;
  function productOptions() {
    if (!$bundle.hasClass('halo-bundle-login')) {
      totalPrice();
    }
    var $form = $('form', $bundle),
      $productOptionsElement = $('[data-fbt-option-change]', $form);
    $(document).on('change', $productOptionsElement, function (event) {
      productOptionsChanged(event);
      setProductVariant(event);
    });
  }
  function setProductVariant() {
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-fbt-option-change] [data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          $(value.children[0]).find('[data-option-value]').text(select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector(':checked');
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels[0].innerText;
            if (label) {
              options.push(optionTitle + ":" + label);
              $(value.children[0]).find('[data-option-value]').text(label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels[0].children[0];
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
              $(value.children[0]).find('[data-option-value]').text(_label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
  }
  function productOptionsChanged(event) {
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }
    if ($changedOption.attr('id') === 'fbt_product' + productId) {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.productAttributes.optionChange(productId, $form.serialize(), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      showProductImage(productId, productAttributesData);
      updateProductAttributes($form, productAttributesData);
      updateView($form, productAttributesData, productAttributesContent);
      if (!$bundle.hasClass('halo-bundle-login')) {
        totalPrice();
      }
    });
    return false;
  }
  function updateProductAttributes($scope, data) {
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', $scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
  }
  function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  }
  function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  }
  function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (getAttributeType($attribute) === 'set-select') {
      return enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  }
  function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  }
  function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }
  function showProductImage(productId, data) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(data.image)) {
      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].tools.imageSrcset.getSrcset(data.image.data, {
        '1x': context.themeSettings.productgallery_size
      });
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    } else {
      var _mainImageUrl = $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr('data-srcset');
      $('.halo-product-item[data-product-id="' + productId + '"]').find('img').attr({
        'srcset': _mainImageUrl,
        'data-srcset': $(this).attr('srcset')
      });
    }
  }
  function updateView($scope, data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = getViewModel($scope);
    if (lodash_isNumber__WEBPACK_IMPORTED_MODULE_1___default()(data.stock)) {
      if (data.stock <= parseInt(context.themeSettings.halo_stock_level_limit) && data.stock > 0) {
        viewModel.$stockLeftWrapper.removeClass('u-hiddenVisually');
        viewModel.$stockLeft.text(data.stock);
      } else {
        viewModel.$stockLeftWrapper.addClass('u-hiddenVisually');
      }
    }
    showMessageBox(data.stock_message || data.purchasing_message, $scope);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_0___default()(data.price)) {
      updatePriceView(viewModel, data.price);
    }
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function updateDefaultAttributesForOOS($scope, data) {
    var productId = $('[name="product_id"]', $scope).val(),
      product = $bundleList.find('.halo-product-item[data-product-id="' + productId + '"]'),
      productCheckbox = product.find('.halo-detail-checkbox');
    if (!data.purchasable || !data.instock) {
      product.removeClass('isChecked hasOptions--selected');
      productCheckbox.prop('checked', false).prop('disabled', true);
    } else {
      product.addClass('isChecked');
      productCheckbox.prop('checked', true).prop('disabled', false);
      if ($scope.find('[data-fbt-option-change]').length > 0) {
        var check = checkBeforeAdd($scope);
        if (check == true) {
          product.addClass('hasOptions--selected');
        }
      }
    }
  }
  function getViewModel($scope) {
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
      priceData: {
        $div: $('[data-price-value]', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      $stockLeft: $('[data-stock-left]', $scope),
      $stockLeftWrapper: $('.productView-optionsStock', $scope),
      stock: {
        $container: $('.form-field--stock', $scope),
        $input: $('[data-product-stock]', $scope)
      },
      $sku: $('[data-product-sku]'),
      $upc: $('[data-product-upc]'),
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }
  function showMessageBox(message, $scope) {
    var $messageBox = $('.productAttributes-message', $scope);
    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }
  function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }
  function updatePriceView(viewModel, price) {
    clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.with_tax.value);
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
      viewModel.priceData.$div.attr('data-price-value', price.without_tax.value);
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
  function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData["delete"](key);
        }
      }
    } catch (e) {
      console.error(e);
    }
    return formData;
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloNextProducts.js":
/*!********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloNextProducts.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(context) {
  if ($('.productView-nextProducts').length > 0) {
    var getProduct = function getProduct(arr) {
      return fetch('/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify({
          query: "\n                query MyQuery {\n                    site {\n                        products (entityIds: [" + arr + "]) {\n                          edges {\n                            product: node {\n                              ...ProductFields\n                              }\n                            }\n                        }\n                        currency (currencyCode: " + curCode + ") {\n                            display {\n                                symbol\n                                symbolPlacement\n                                decimalToken\n                                thousandsToken\n                                decimalPlaces\n                            }\n                        }\n                    }\n                }\n                fragment ProductFields on Product {\n                    id\n                    entityId\n                    name\n                    path\n                    defaultImage {\n                        img70px: url(width: 70)\n                        altText\n                    }\n                    prices {\n                        priceRange {\n                            min {\n                                ...MoneyFields\n                            }\n                            max {\n                                ...MoneyFields\n                            }\n                        }\n                        retailPrice {\n                            ...MoneyFields\n                        }\n                        basePrice {\n                            ...MoneyFields\n                        }\n                        price {\n                            ...MoneyFields\n                        }\n                    }\n                }\n                fragment MoneyFields on Money {\n                    value\n                    currencyCode\n                }\n            "
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    };
    var formatMoney = function formatMoney(n, c, d, t) {
      var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
      return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
    var renderProduct = function renderProduct(product, curDisplay) {
      if (product != undefined) {
        $.each(product, function (index, element) {
          var item = element.product,
            symbol = curDisplay.symbol,
            symbolPlacement = curDisplay.symbolPlacement.toLowerCase(),
            decimalToken = curDisplay.decimalToken,
            decimalPlaces = curDisplay.decimalPlaces,
            thousandsToken = curDisplay.thousandsToken;
          var title, price;
          if (context.themeSettings.halo_card_title == 'ellipsis') {
            title = '<a href="' + item.path + '" class="card-ellipsis" style="-webkit-box-orient: vertical;">' + item.name + '</a>';
          } else {
            title = '<a href="' + item.path + '">' + item.name + '</a>';
          }
          if ($('.body').hasClass('is-login') || context.themeSettings.restrict_to_login !== true) {
            if (item.prices.priceRange.min.value < item.prices.priceRange.max.value && context.themeSettings.price_ranges) {
              var priceMin = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.min.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              var priceMax = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.priceRange.max.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                        <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                    </div>\
                                    <div class="price-section price-section--withoutTax">\
                                        <span data-product-price-without-tax="" class="price price--withoutTax">' + priceMin + ' - ' + priceMax + '</span>\
                                    </div>';
            } else {
              var priceDef = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.price.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
              if (item.prices.retailPrice == null) {
                if (item.prices.basePrice.value > item.prices.price.value) {
                  var priceBas = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.basePrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceBas + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              } else {
                if (item.prices.retailPrice.value > item.prices.price.value) {
                  var priceRet = (symbolPlacement == "left" ? symbol : "") + formatMoney(item.prices.retailPrice.value, decimalPlaces, decimalToken, thousandsToken) + (symbolPlacement != "left" ? symbol : "");
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale">' + priceRet + '</span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                } else {
                  price = '<div class="price-section price-section--withoutTax non-sale-price--withoutTax price-none" style="display: none;">\
                                                <span data-product-non-sale-price-without-tax="" class="price price--non-sale"></span>\
                                            </div>\
                                            <div class="price-section price-section--withoutTax">\
                                                <span data-product-price-without-tax="" class="price price--withoutTax">' + priceDef + '</span>\
                                            </div>';
                }
              }
            }
          } else {
            price = '<p translate>Log in for pricing</p>';
          }
          var html_card = '<div class="card" data-product-id="' + item.entityId + '">\
                                        <div class="card-image">\
                                            <a class="card-link" href="' + item.path + '">\
                                                <img src="' + item.defaultImage.img70px + '" alt="' + item.name + '" title="' + item.name + '" />\
                                            </a>\
                                        </div>\
                                        <div class="card-content">\
                                            <h4 class="card-title">' + title + '</h4>\
                                            <div class="card-price" data-test-info-type="price">' + price + '</div>\
                                        </div>\
                                    </div>';
          if (item.entityId == prevId) {
            if (item.path !== undefined) {
              $prodIcons.find('.prev-icon').attr('href', item.path);
              $prodIcons.find('.prev-icon').removeClass('disable');
              $prodWrap.find('#prev-product-modal').append(html_card);
            } else {
              $prodIcons.find('.prev-icon').remove();
              $prodWrap.find('#prev-product-modal').remove();
            }
          }
          if (item.entityId == nextId) {
            if (item.path !== undefined) {
              $prodIcons.find('.next-icon').attr('href', item.path);
              $prodIcons.find('.next-icon').removeClass('disable');
              $prodWrap.find('#next-product-modal').append(html_card);
            } else {
              $prodIcons.find('.next-icon').remove();
              $prodWrap.find('#next-product-modal').remove();
            }
          }
        });
      }
    };
    var token = context.token;
    var curCode = $('.body').data('currency-code');
    var productId = $('.productView-nextProducts').data('product-id'),
      nextId = productId + 1,
      prevId = productId - 1,
      nextLink,
      prevLink,
      list;
    var $prodWrap = $('.productView-nextProducts .next-prev-modal'),
      $prodIcons = $('.productView-nextProducts .next-prev-icons');
    if (prevId != undefined && nextId != undefined) {
      list = [prevId, nextId];
      getProduct(list).then(function (data) {
        renderProduct(data.site.products.edges, data.site.currency.display);
      });
    }
    $prodIcons.on('mouseover', function (event) {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function (event) {
      $prodWrap.removeClass('is-active');
    });
    $('.next-icon', $prodIcons).on('mouseover', function () {
      if (!$(this).hasClass('disable')) {
        $('#prev-product-modal').removeClass('is-show');
        $('#next-product-modal').addClass('is-show');
      } else {
        $('#prev-product-modal').removeClass('is-show');
      }
    });
    $('.prev-icon', $prodIcons).on('mouseover', function () {
      if (!$(this).hasClass('disable')) {
        $('#next-product-modal').removeClass('is-show');
        $('#prev-product-modal').addClass('is-show');
      } else {
        $('#next-product-modal').removeClass('is-show');
      }
    });
    $prodWrap.on('mouseover', function (event) {
      $prodWrap.addClass('is-active');
    }).on('mouseleave', function (event) {
      $prodWrap.removeClass('is-active');
    });
  }
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloStickyAddToCart.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloStickyAddToCart.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($scope, context) {
  if ($('#form-action-addToCart').length) {
    var scroll = $('#form-action-addToCart').offset(),
      h_statc = $('#halo_sticky_addToCart').outerHeight(),
      scrollTop = scroll.top;
    if ($('.productView-details .productView-options [data-product-attribute="swatch"]').length) {
      var color = $('.productView-details .productView-options [data-product-attribute="swatch"] .form-option > span').attr('title');
      $('#halo_sticky_addToCart .option-value').append('<span class="color-name"> -' + ' ' + color + '</div>');
    }
    $(window).scroll(function () {
      var $sticky = $('#halo_sticky_addToCart');
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 20);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
            } else {
              $('#recently_bought_list').css("bottom", 80);
            }
          }
        }
      } else {
        $('#halo_sticky_addToCart').removeClass('show_sticky');
        $('.pop-up-option').removeClass('is-open');
        $('body').removeClass('openPopupOption');
        $('.choose_options_add').removeClass('is-active');
        if ($(window).width() > 550) {
          $('#recently_bought_list').css("bottom", 20);
        } else {
          if ($('#halo_sticky_addToCart').length) {
            $('#recently_bought_list').css("bottom", 20);
          } else {
            $('#recently_bought_list').css("bottom", 80);
          }
        }
      }
    });
    $(document).on('click', '.choose_options_add', function (event) {
      $(this).toggleClass('is-active');
      $('.pop-up-option').toggleClass('is-open');
      $('body').addClass('openPopupOption');
    });
    $(document).on('click', '.pop-up-option .modal-close', function (event) {
      $(".pop-up-option").removeClass('is-open');
      $('body').removeClass('openPopupOption');
      $('.choose_options_add').removeClass('is-active');
    });
    window.onload = function () {
      if ($(window).scrollTop() > scrollTop + 400) {
        if (!$('#halo_sticky_addToCart').hasClass('show_sticky')) {
          $('#halo_sticky_addToCart').addClass('show_sticky');
          if ($(window).width() > 550) {
            $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 40);
          } else {
            if ($('#halo_sticky_addToCart').length) {
              $('#recently_bought_list').css("bottom", $('#halo_sticky_addToCart').outerHeight() + 30);
            } else {
              $('#recently_bought_list').css("bottom", 80);
            }
          }
        }
      }
    };
  }
}

/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var sortablejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.esm.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./halothemes/haloYoutubeVideo */ "./assets/js/theme/halothemes/haloYoutubeVideo.js");
/* harmony import */ var _halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./halothemes/haloNextProducts */ "./assets/js/theme/halothemes/haloNextProducts.js");
/* harmony import */ var _halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./halothemes/haloNotifyMe */ "./assets/js/theme/halothemes/haloNotifyMe.js");
/* harmony import */ var _halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./halothemes/haloStickyAddToCart */ "./assets/js/theme/halothemes/haloStickyAddToCart.js");
/* harmony import */ var _halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./halothemes/haloBundleProducts */ "./assets/js/theme/halothemes/haloBundleProducts.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */














var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_8__["default"])("#modal-review-form")[0];
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on("close.fndtn.reveal", function () {
      if (_this2.url.indexOf("#write_review") !== -1 && typeof window.history.replaceState === "function") {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_halothemes_haloNextProducts__WEBPACK_IMPORTED_MODULE_10__["default"])(this.context);
    (0,_halothemes_haloNotifyMe__WEBPACK_IMPORTED_MODULE_11__["default"])($(".halo-productView"), this.context);
    (0,_halothemes_haloYoutubeVideo__WEBPACK_IMPORTED_MODULE_9__["default"])($(".halo-productView .productView-image-wrapper"));
    (0,_halothemes_haloBundleProducts__WEBPACK_IMPORTED_MODULE_13__["default"])($(".halo-productView"), this.context);
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($(".productView"), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_6__["default"])();
    this.bulkPricingHandler();
    this.productReviewHandler();
    this.viewingProduct($(".productView-ViewingProduct"));
    this.soldProduct($(".productView-soldProduct"));
    this.countDownProduct($(".productView-countDown"));
    this.productViewShareLink();
    this.compareColors();
    this.toggleTabs();
    this.productCustomTab();
    this.productShippingTab();
    this.showmoreDescription();
    this.checkProduct();
    this.copyDigitalLink();
    this.digitalDownloadSidebar();
    this.productDigitalDownload();
    (0,_halothemes_haloStickyAddToCart__WEBPACK_IMPORTED_MODULE_12__["default"])($(".halo-productView"), this.context);
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__.classifyForm)(".writeReview-form");
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_3__["default"]($reviewForm);
    $("body").on("click", '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on("submit", function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll("valid");
      }
      return false;
    });
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find("[data-input]").each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr("name") + "-msg";
      $input.siblings("span").attr("id", msgSpanId);
      $input.attr("aria-describedby", msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf("#write_review") !== -1) {
      this.$reviewLink.trigger("click");
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf("#bulk_pricing") !== -1) {
      this.$bulkPricingLink.trigger("click");
    }
  };
  _proto.soldProduct = function soldProduct($wrapper) {
    if ($wrapper.length > 0) {
      var numbersProduct_text = this.context.themeSettings.product_soldProduct_products,
        numbersHours_text = this.context.themeSettings.product_soldProduct_hours,
        soldProductText = this.context.themeSettings.product_soldProduct_text,
        soldProductText2 = this.context.themeSettings.product_soldProduct_hours_text;
      var numbersProductList = JSON.parse("[" + numbersProduct_text + "]"),
        numbersProductItem = Math.floor(Math.random() * numbersProductList.length),
        numbersHoursList = JSON.parse("[" + numbersHours_text + "]"),
        numbersHoursItem = Math.floor(Math.random() * numbersHoursList.length);
      $wrapper.html('<svg class="icon"><use xlink:href="#icon-fire"/></svg><span class="text">' + numbersProductList[numbersProductItem] + " " + soldProductText + " " + numbersHoursList[numbersHoursItem] + " " + soldProductText2 + "</span>");
      $wrapper.show();
    }
  };
  _proto.countDownProduct = function countDownProduct($wrapper) {
    if ($wrapper.length > 0) {
      var countDown = $wrapper.data("countdown"),
        countDownDate = new Date(countDown).getTime(),
        seft = $wrapper;
      var countdownfunction = setInterval(function () {
        var now = new Date().getTime(),
          distance = countDownDate - now;
        if (distance < 0) {
          clearInterval(countdownfunction);
          seft.remove();
        } else {
          var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)),
            minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)),
            seconds = Math.floor(distance % (1000 * 60) / 1000),
            strCountDown = '<svg class="icon"><use xlink:href="#icon-bell"/></svg><span class="text"><span>Limited-time offers:</span></span> <span class="num">' + days + 'd :</span> <span class="num">' + hours + 'h :</span> <span class="num">' + minutes + 'm :</span> <span class="num">' + seconds + "s</span>";
          seft.html(strCountDown);
        }
      }, 1000);
    }
  };
  _proto.productViewShareLink = function productViewShareLink() {
    var $shareLinkBtn = $(".shareLinkSocial__button");
    var $shareLinkPopup = $(".shareLinkSocial__popup");
    var $shareLinkClose = $(".shareLinkSocial__close");
    var $shareLinkCopy = $("#shareLinkSocial__copy");
    $shareLinkBtn.on("click", function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass("is-open")) {
        $shareLinkPopup.slideUp(400);
        $shareLinkPopup.removeClass("is-open");
      } else {
        $shareLinkPopup.slideDown(400);
        $shareLinkPopup.addClass("is-open");
      }
    });
    $shareLinkClose.on("click", function (e) {
      e.preventDefault();
      if ($shareLinkPopup.hasClass("is-open")) {
        $shareLinkPopup.slideUp(400);
        $shareLinkPopup.removeClass("is-open");
      }
    });
    $shareLinkCopy.on("click", function (e) {
      e.preventDefault();
      var $target = $(e.target);
      $target.select();
      document.execCommand("copy");
    });
  };
  _proto.viewingProduct = function viewingProduct($wrapper) {
    if ($wrapper.length > 0) {
      var viewerText = this.context.themeSettings.product_viewingProduct_text,
        numbersViewer_text = this.context.themeSettings.product_viewingProduct_viewer,
        numbersViewerList = JSON.parse("[" + numbersViewer_text + "]"),
        timeViewer = parseInt(this.context.themeSettings.product_viewingProduct_change) * 1000;
      setInterval(function () {
        var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
        $wrapper.html('<svg class="icon"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
      }, timeViewer);
    }
  };
  _proto.compareColors = function compareColors() {
    var $swatchWrapper = $(".halo-compareColors-swatch"),
      $imageWrapper = $(".halo-compareColors-image"),
      $textWrapper = $(".halo-compareColors-text");
    $(".form-option", $swatchWrapper).on("click", function (event) {
      var $this = $(event.currentTarget);
      $this.toggleClass("show-color");
      var title = $this.find(".form-option-variant").attr("title"),
        id = $this.data("product-swatch-value"),
        $color,
        $color2,
        $color3,
        $img,
        $pattern;
      if ($this.hasClass("show-color")) {
        if ($this.find(".form-option-variant--color").length) {
          $color = $this.find(".form-option-variant--color").attr("style");
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color" style="' + $color + ';"></span><span class="title">' + title + "</span></div>");
        } else if ($this.find(".form-option-variant--color2").length) {
          $color = $this.find(".form-option-variant--color2 span:nth-child(1)").attr("style");
          $color2 = $this.find(".form-option-variant--color2 span:nth-child(2)").attr("style");
          $(".halo-compareColors-image").append('<div class="item item-color item-' + id + '"><span class="color color2"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span></span><span class="title">' + title + "</span></div>");
        } else if ($this.find(".form-option-variant--color3").length) {
          $color = $this.find(".form-option-variant--color3 span:nth-child(1)").attr("style");
          $color2 = $this.find(".form-option-variant--color3 span:nth-child(2)").attr("style");
          $color3 = $this.find(".form-option-variant--color3 span:nth-child(3)").attr("style");
          $imageWrapper.append('<div class="item item-color item-' + id + '"><span class="color color3"><span style="' + $color + ';"></span><span style="' + $color2 + ';"></span><span style="' + $color3 + ';"></span></span><span class="title">' + title + "</span></div>");
        } else if ($this.find(".form-option-variant--pattern").length) {
          $img = $this.find(".form-option-variant--pattern").attr("style");
          $pattern = $this.find(".form-option-variant--pattern").attr("data-pattern");
          $imageWrapper.append('<div class="item item-partern item-' + id + '"><span class="image"><img src=' + $pattern + " alt=" + title + " title=" + title + '></span><span class="title">' + title + "</span></div>");
        }
      } else {
        $(".item-" + id + "", $imageWrapper).remove();
      }
      if ($imageWrapper.children().length > 0) {
        $textWrapper.hide();
      } else {
        $textWrapper.show();
      }
      if ($(window).width() >= 1025) {
        var el = document.getElementById("color-swatch-image");
        new sortablejs__WEBPACK_IMPORTED_MODULE_1__["default"](el, {
          animation: 150
        });
      }
    });
  };
  _proto.toggleTabs = function toggleTabs() {
    $(".productView-tab [data-collapsible]").on("click", function (event) {
      var $target = $(event.currentTarget);
      if ($target.hasClass("is-open")) {
        $target.parent(".toggle-title").siblings(".toggle-content").slideDown("slow");
      } else {
        $target.parent(".toggle-title").siblings(".toggle-content").slideUp("slow");
      }
    });
  };
  _proto.productCustomTab = function productCustomTab() {
    if (this.context.themeSettings.show_product_details_tabs == true) {
      if (this.context.themeSettings.show_custom_tab == true) {
        if (this.context.themeSettings.show_custom_tab_type == "all") {
          var url = this.context.themeSettings.show_custom_tab_link;
          var option = {
            template: "halothemes/page/halo-page-template"
          };
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, option, function (err, response) {
            $(response).appendTo("#tab-custom-mobile");
            if ($(".productView-tab #tab-custom-mobile").text().trim() == "") {
              $(".productView-tab #tab-custom").hide();
            }
          });
          $("#tab-description").find("[data-custom-tab]").remove();
        } else if (this.context.themeSettings.show_custom_tab_type == "custom") {
          $("#tab-description").find("[data-custom-tab]").appendTo("#tab-custom-mobile");
        }
      }
    } else {
      $(".productView-description").find("[data-custom-tab]").remove();
    }
  };
  _proto.productShippingTab = function productShippingTab() {
    if (this.context.themeSettings.show_product_details_tabs == true) {
      if (this.context.themeSettings.show_shipping_tab == true) {
        if (this.context.themeSettings.show_shipping_tab_type == "all") {
          var url = this.context.themeSettings.show_shipping_tab_link;
          var option = {
            template: "halothemes/page/halo-page-template"
          };
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.getPage(url, option, function (err, response) {
            $(response).appendTo("#tab-shipping-mobile");
            if ($(".productView-tab #tab-shipping-mobile").text().trim() == "") {
              $(".productView-tab #tab-shipping").hide();
            }
          });
          $("#tab-description").find("[data-shipping-tab]").remove();
        } else if (this.context.themeSettings.show_shipping_tab_type == "custom") {
          $("#tab-description").find("[data-shipping-tab]").appendTo("#tab-shipping-mobile");
        }
      }
    } else {
      $(".productView-description").find("[data-shipping-tab]").remove();
    }
  };
  _proto.showmoreDescription = function showmoreDescription() {
    var showMorebtn = $("#tab-descriptionShowmore"),
      descMobile = $("#tab-description-mobile"),
      textShowMore = showMorebtn.find(".button").data("show-more-text"),
      textShowLess = showMorebtn.find(".button").data("show-less-text");
    showMorebtn.find(".button").on("click", function (event) {
      event.preventDefault();
      if (showMorebtn.hasClass("less")) {
        showMorebtn.removeClass("less").addClass("show");
        showMorebtn.find(".button").text(textShowMore);
        descMobile.css("max-height", "300px");
      } else {
        showMorebtn.removeClass("show").addClass("less");
        descMobile.css("max-height", "unset");
        showMorebtn.find(".button").text(textShowLess);
      }
    });
  };
  _proto.checkProduct = function checkProduct() {
    var relatedProducts = $("#halo-related-products"),
      similarProducts = $("#halo-similar-products");
    if ($(".halo-productView-digital")) return;
    if (!relatedProducts.find(".slick-track").html().length) {
      relatedProducts.hide();
    }
    if (!similarProducts.find(".slick-track").html().length) {
      similarProducts.hide();
    }
  }

  /* Button Copy Digital Link */;
  _proto.copyDigitalLink = function copyDigitalLink() {
    var copyButton = document.querySelector(".copy__button"),
      copyLink = document.querySelector(".coppy__link-url");
    if (!copyButton || !copyLink) return;
    copyButton.addEventListener("click", function (e) {
      e.preventDefault();
      var tempInput = document.createElement("input");
      tempInput.value = copyLink.textContent;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      copyButton.innerHTML = '<span class="icon icon--check"><svg><use xlink:href="#icon-check"></use></svg></span> <span style="color: #28a210">Copiat</span>';
    });
  }

  /* Digital Download Sidebar */;
  _proto.digitalDownloadSidebar = function digitalDownloadSidebar() {
    var emailButton = document.querySelector(".digital-product-button--email");
    var downloadButton = document.querySelector(".digital-product-button--download");
    var overlay = document.querySelector("#digital-overlay");
    var sidebar = document.querySelector("#digital-sidebar");
    var emailContent = document.querySelector("#email-content");
    var downloadContent = document.querySelector("#download-content");
    var sidebarClose = document.querySelector("#digital-sidebar-close");
    if (!emailButton || !downloadButton) return;
    emailButton.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
      sidebar.classList.add("active");
      emailContent.style.display = "block";
      downloadContent.style.display = "none";
    });
    downloadButton.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "block";
      sidebar.classList.add("active");
      emailContent.style.display = "none";
      downloadContent.style.display = "block";
    });
    overlay.addEventListener("click", function () {
      overlay.style.display = "none";
      sidebar.classList.remove("active");
    });
    sidebarClose.addEventListener("click", function (e) {
      e.preventDefault();
      overlay.style.display = "none";
      sidebar.classList.remove("active");
    });
  }

  /* Product digital Download function */;
  _proto.productDigitalDownload = function productDigitalDownload() {
    var downloadButton = document.getElementById("digital-download-card");
    var formInput = document.querySelector("#download-content .form-input");
    var formField = document.querySelector("#download-content .form-field");
    var formActions = document.querySelector("#download-content .form-actions");
    var overlay = document.querySelector("#digital-overlay");
    var sidebar = document.querySelector("#digital-sidebar");
    var imageSidebar = document.querySelector("#download-content .digital-image__link");
    var imageLink = imageSidebar.getAttribute("href");
    var downloadClicked = false;
    if (!downloadButton || !imageLink) return;
    imageSidebar.addEventListener("click", function (e) {
      e.preventDefault();
    });
    downloadButton.addEventListener("click", function () {
      var email = formInput.value.trim();
      if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
      formField.innerHTML = "\n                <div class=\"digital-download__success\">\n                    <h4>Thank You!</h4>\n                    <p>If your download doesn\u2019t open automatically, please <a href=\"" + imageLink + "\" target=\"_blank\">click here</a>.</p>\n                </div>\n            ";
      formActions.innerHTML = '<a href="#" id="digital-download-card" class="button button--tertiary back-to-digital-card">Back to Ecards</a>';
      var backButton = document.querySelector("#digital-download-card.back-to-digital-card");
      backButton.addEventListener("click", function (e) {
        e.preventDefault();
        overlay.style.display = "none";
        sidebar.classList.remove("active");
      });
      if (!downloadClicked) {
        window.open("" + imageLink, "_blank");
        downloadClicked = true;
        return;
      }
    });
    function isValidEmail(email) {
      var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailRegex.test(email);
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils/safe-string */ "./assets/js/theme/common/utils/safe-string.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");





var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]'),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__.announceInputErrorMessage
    });
    this.$reviewsContent = $('#product-reviews');
    this.$reviewsContent2 = $('#tab-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $(document).on('click', '.review-link a', function (event) {
      event.preventDefault();
      $('.is-open[data-collapsible]', $('.tab-content')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      $('[href="#tab-reviews-mobile"]', $('.productView-tab:not(.productView-tab-2)')).trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      if ($(window).width() < 1025) {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent2.offset().top - $('.header').height()
        }, 700);
      } else {
        $('html, body').animate({
          scrollTop: _this.$reviewsContent.offset().top - $('.header').height()
        }, 700);
      }
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewRating)
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewSubject)
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: (0,_common_utils_safe_string__WEBPACK_IMPORTED_MODULE_3__.safeString)(this.context.reviewComment)
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQVVBLENBQUlDLEdBQUcsRUFBSztFQUMvQixJQUFNQyxDQUFDLEdBQUcsSUFBSUMsU0FBUyxDQUFDLENBQUM7RUFDekIsT0FBT0QsQ0FBQyxDQUFDRSxlQUFlLENBQUNILEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQ0ksSUFBSSxDQUFDQyxXQUFXO0FBQy9ELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1I4QztBQUU2QjtBQUNSO0FBRXBFLDZCQUFlLG9DQUFTTSxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUNyQyxJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0YsT0FBTyxDQUFDRyxTQUFTLENBQUM7SUFDNUNDLFVBQVUsR0FBR0MsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ3hDQyxPQUFPLEdBQUdELENBQUMsQ0FBQyx1QkFBdUIsQ0FBQztJQUNwQ0UsV0FBVyxHQUFHRCxPQUFPLENBQUNFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNoREMsYUFBYSxHQUFHSCxPQUFPLENBQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztFQUV4RCxJQUFNRSxLQUFLLEdBQUdmLHlEQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBRXZDLElBQUlnQixRQUFRLEdBQUdYLE9BQU8sQ0FBQ1ksS0FBSztFQUU1QkMsVUFBVSxDQUFDLENBQUM7RUFFWlIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsQ0FBQ0MsRUFBRSxDQUFDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxVQUFBQyxLQUFLLEVBQUk7SUFDckRBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFFdEIsSUFBSUMsT0FBTyxHQUFHYixDQUFDLENBQUNXLEtBQUssQ0FB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T0FBTyxDQUFDO0lBQ3RCLElBQU15ZCxhQUFhLEdBQUdELEdBQUcsQ0FBQ2hlLElBQUksQ0FBQzhkLFNBQVMsQ0FBQyxZQUFZWCxZQUFZO0lBRWpFLElBQUljLGFBQWEsRUFBRTtNQUNmO0lBQ0o7SUFFQUQsR0FBRyxDQUFDaGUsSUFBSSxDQUFDOGQsU0FBUyxFQUFFLElBQUlYLFlBQVksQ0FBQ2EsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy9zYWZlLXN0cmluZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb0J1bmRsZVByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU3RpY2t5QWRkVG9DYXJ0LmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvdmlkZW8tZ2FsbGVyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gcGFyc2VzIEhUTUwgZW50aXRpZXMgaW4gc3RyaW5nc1xuICogQHBhcmFtIHN0cjogU3RyaW5nXG4gKiBAcmV0dXJucyBTdHJpbmdcbiovXG5leHBvcnQgY29uc3Qgc2FmZVN0cmluZyA9IChzdHIpID0+IHtcbiAgICBjb25zdCBkID0gbmV3IERPTVBhcnNlcigpO1xuICAgIHJldHVybiBkLnBhcnNlRnJvbVN0cmluZyhzdHIsICd0ZXh0L2h0bWwnKS5ib2R5LnRleHRDb250ZW50O1xufTtcbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSwgeyBzaG93QWxlcnRNb2RhbCwgTW9kYWxFdmVudHMgfSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcgZnJvbSAnLi9oYWxvQ2FsY3VsYXRlRnJlZVNoaXBwaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oJHNjb3BlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGhpc1Byb3VjdElkID0gcGFyc2VJbnQoY29udGV4dC5wcm9kdWN0SWQpLFxuICAgICAgICAkcmVsYXRlVGFiID0gJCgnI2hhbG8tcmVsYXRlZC1wcm9kdWN0cycpLFxuICAgICAgICAkYnVuZGxlID0gJCgnI2hhbG8tYnVuZGxlLXByb2R1Y3RzJyksXG4gICAgICAgICRidW5kbGVMaXN0ID0gJGJ1bmRsZS5maW5kKCcuaGFsby1wcm9kdWN0LWxpc3QnKSxcbiAgICAgICAgJGJ1bmRsZURldGFpbCA9ICRidW5kbGUuZmluZCgnLmhhbG8tcHJvZHVjdC1kZXRhaWwnKTtcblxuICAgIGNvbnN0IG1vZGFsID0gbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXTtcblxuICAgIHZhciBjdXJyZW5jeSA9IGNvbnRleHQubW9uZXk7XG5cbiAgICBzaG93QnVuZGxlKCk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgICQoJy5oYWxvLXRvZ2dsZS1vcHRpb25zJykubm90KCR0YXJnZXQpLnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLm5vdCgkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAgICAgaWYgKCEkdGFyZ2V0Lm5leHQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgICR0YXJnZXQubmV4dCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5hZGRDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRhcmdldC5uZXh0KCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1mb2N1cycpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmhhbG8tb3B0aW9uLWNsb3NlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKCQoJy5oYWxvLWRldGFpbC1vcHRpb25zJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tZGV0YWlsLW9wdGlvbnMnKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAkKCcuaGFsby1kZXRhaWwtb3B0aW9ucycpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAgICAgJCgnLmhhbG8tdG9nZ2xlLW9wdGlvbnMnKS5yZW1vdmVDbGFzcygnaXMtZm9jdXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIHN0YXJ0IGNoYW5nZVxuICAgICQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmhhbG8tZGV0YWlsLWNoZWNrYm94JywgZXZlbnQgPT4ge1xuICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICBpZCA9ICR0YXJnZXQuYXR0cignaWQnKS5yZXBsYWNlKCdmYnRfcHJvZHVjdCcsJycpLFxuICAgICAgICAgICAgcHJvZHVjdEltYWdlID0gJCgnLmhhbG8tcHJvZHVjdC1pbWFnZVtkYXRhLXByb2R1Y3QtaW1hZ2UtaWQ9XCInICsgaWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBpZCArICdcIl0nKTtcblxuICAgICAgICBpZigkdGFyZ2V0LmlzKCc6Y2hlY2tlZCcpID09IGZhbHNlKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RJbWFnZS5yZW1vdmVDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RJbWFnZS5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgfSk7XG4gICAgLy8gZW5kIGNoYW5nZVxuXG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnI2hhbG8tYWRkQWxsJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybScsICRidW5kbGUpO1xuICAgICAgICB2YXIgYXJyUHJvID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgJCgnLmhhbG8tZGV0YWlsLWNoZWNrYm94JykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodmFsKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgIGFyclByby5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNoZWNrID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjaGVjayA9IGNoZWNrUHJvZHVjdCgkZm9ybSwgYXJyUHJvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGVjaykge1xuICAgICAgICAgICAgaWYgKGFyclByby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGsgPSBhcnJQcm8ubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgJGJ1bmRsZS5maW5kKCcubG9hZGluZ092ZXJsYXknKS5zaG93KCk7XG5cbiAgICAgICAgICAgICAgICBhZGRUb0NhcnQoJGZvcm0sIDAsIGFyclBybywgayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAnUGxlYXNlIG1ha2Ugc3VyZSBhbGwgb3B0aW9ucyBoYXZlIGJlZW4gZmlsbGVkIGluLic7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dBbGVydE1vZGFsKHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaG93QnVuZGxlKCkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW06ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtdG1wJyxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogJ2hhbG90aGVtZXMvcHJvZHVjdC9oYWxvLWJ1bmRsZS1wcm9kdWN0cy1vcHRpb25zJyxcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICdoYWxvdGhlbWVzL3Byb2R1Y3QvaGFsby1idW5kbGUtcHJvZHVjdHMtaW1hZ2UnLFxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgdmFyIHByb2RCdW5kbGVJZCA9IFtdLFxuICAgICAgICAgICAgdG90YWxCbG9jayA9ICcnO1xuXG4gICAgICAgIGZpcnN0SXRlbSgpO1xuICAgICAgICAvL3N0YXJ0IGNoYW5nZSAgICBcbiAgICAgICAgaWYoJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbEJsb2NrID0gJzxkaXYgY2xhc3M9XCJoYWxvLXByb2R1Y3QtdG90YWxcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBoYWxvLXByb2R1Y3QtdG90YWwtYnV0dG9uXCIgZGlzYWJsZWQgaHJlZj1cIiNcIj5Mb2cgaW4gZm9yIHByaWNpbmc8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsQmxvY2sgPSAnPGRpdiBjbGFzcz1cImhhbG8tcHJvZHVjdC10b3RhbFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLXByaWNlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+PHNwYW4+VG90YWw6PC9zcGFuPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnkgaGFsby1wcm9kdWN0LXRvdGFsLWJ1dHRvblwiIGlkPVwiaGFsby1hZGRBbGxcIiBocmVmPVwiI1wiPkFEQVVHYSBpTiBDT1M8L2E+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgIH1cbiAgICAgICAgLy9lbmQgY2hhbmdlICAgIFxuXG4gICAgICAgICRidW5kbGUuZmluZCgnLmJ1bmRsZS1wcm9kdWN0LXJpZ2h0JykuYXBwZW5kKHRvdGFsQmxvY2spO1xuXG4gICAgICAgICQuZWFjaChjb250ZXh0LnByb2R1Y3RDdXN0b21GaWVsZHMsIGZ1bmN0aW9uKGluZGV4LCBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSAnX19idW5kbGVpZCcpIHtcbiAgICAgICAgICAgICAgICBwcm9kQnVuZGxlSWQgPSBKU09OLnBhcnNlKCdbJytvYmoudmFsdWUrJ10nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcHJvZEJ1bmRsZUlkID0gJC5ncmVwKHByb2RCdW5kbGVJZCwgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT0gdGhpc1Byb3VjdElkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJGJ1bmRsZS5sZW5ndGggPiAwICYmIHByb2RCdW5kbGVJZC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdmFyIG51bSA9IDAsXG4gICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuXG4gICAgICAgICAgICAkcmVsYXRlVGFiLmZpbmQoJy5jYXJkJykuZWFjaCgoaW5kZXgsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogXCJcIlxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9ICQodmFsKS5kYXRhKCdwcm9kdWN0LWlkJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAocElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHBJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnQuaW5kZXggPT0gaW5kZXgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09ICRyZWxhdGVUYWIuZmluZCgnLmNhcmQnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgkYnVuZGxlLmxlbmd0aCA+IDAgJiYgcHJvZEJ1bmRsZUlkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW0gPSAwLFxuICAgICAgICAgICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgICAgICAgICBsaXN0RmlsdGVyID0gJC51bmlxdWUocHJvZEJ1bmRsZUlkKTtcblxuICAgICAgICAgICAgJC5lYWNoKHByb2RCdW5kbGVJZCwgZnVuY3Rpb24oaSwgdmFsKXtcbiAgICAgICAgICAgICAgICBsaXN0LnB1c2goe2k6aSwgZGF0YTogXCJcIn0pO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBJZCA9IHByb2RCdW5kbGVJZFtpXTtcblxuICAgICAgICAgICAgICAgIGlmIChwSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocElkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50LmkgPT0gaSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBudW0rKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobnVtID09IHByb2RCdW5kbGVJZC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dMaXN0KGxpc3QpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZpcnN0SXRlbSgpe1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSAkYnVuZGxlTGlzdC5maW5kKCcuaGFsby1wcm9kdWN0LWl0ZW1GaXJzdCcpLFxuICAgICAgICAgICAgcElkID0gZmlyc3RJdGVtLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIGZvcm0gPSBmaXJzdEl0ZW0uZmluZCgnZm9ybScpLFxuICAgICAgICAgICAgaGFzT3B0aW9ucyA9IGZvcm0uZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoLFxuICAgICAgICAgICAgaGFzRGVmYXVsdE9wdGlvbnMgPSBmb3JtLmZpbmQoJ1tkYXRhLWRlZmF1bHRdJykubGVuZ3RoO1xuXG4gICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucyAmJiBoYXNPcHRpb25zKSB7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKHBJZCwgZm9ybS5zZXJpYWxpemUoKSwgJ3Byb2R1Y3RzL2J1bGstZGlzY291bnQtcmF0ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXNEYXRhID0gcmVzcG9uc2UuZGF0YSB8fCB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmlldyhmb3JtLCBhdHRyaWJ1dGVzRGF0YSwgYXR0cmlidXRlc0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dMaXN0KGxpc3Qpe1xuICAgICAgICBsaXN0LmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHZhciByZXNwb25zZSA9IGVsZW1lbnQuZGF0YTtcblxuICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmIHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UgIT0gJycpe1xuICAgICAgICAgICAgICAgICRidW5kbGVMaXN0LmFwcGVuZChyZXNwb25zZS5pbWFnZSk7XG4gICAgICAgICAgICAgICAgJGJ1bmRsZURldGFpbC5hcHBlbmQocmVzcG9uc2UuaXRlbSk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub3B0aW9ucy50cmltKCkgIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcElkID0gJChyZXNwb25zZS5pdGVtKS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICAgICAgICAgICRmb3JtID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwSWQgKyAnXCJdIGZvcm0nKTtcblxuICAgICAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQocmVzcG9uc2Uub3B0aW9ucyk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScsICRmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFzT3B0aW9ucyA9ICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQuaHRtbCgpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJChyZXNwb25zZS5vcHRpb25zKS5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwSWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzcG9uc2UgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzQ29udGVudCA9IHJlc3BvbnNlLmNvbnRlbnQgfHwge307XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzRGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZpZXcoJGZvcm0sIGF0dHJpYnV0ZXNEYXRhLCBhdHRyaWJ1dGVzQ29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZWZhdWx0QXR0cmlidXRlc0Zvck9PUyhhdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldFByb2R1Y3RWYXJpYW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwcm9kdWN0T3B0aW9ucygpO1xuICAgICAgICBzaG93U2xpY2tTbGlkZXIoJGJ1bmRsZUxpc3QpO1xuXG4gICAgICAgIGlmKCEkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgIHRvdGFsUHJpY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgICRidW5kbGUucmVtb3ZlQ2xhc3MoJ2hhbG8tYmxvY2stZGlzYWJsZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dTbGlja1NsaWRlcih3cmFwKXtcbiAgICAgICAgaWYod3JhcC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIHdyYXAuc2xpY2soe1xuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTQwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAzMjAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tQcm9kdWN0KGZvcm0sIGFyclBybykge1xuICAgICAgICB2YXIgY2hlY2sgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyUHJvLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgayA9IGFyclByb1tpXSxcbiAgICAgICAgICAgICAgICAkZm9ybSA9ICQoZm9ybVtrXSk7XG5cbiAgICAgICAgICAgIGlmICgkZm9ybS5maW5kKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBjaGVjayA9IGNoZWNrQmVmb3JlQWRkKCRmb3JtKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hlY2s7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2hlY2tCZWZvcmVBZGQoJGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrID0gdHJ1ZSxcbiAgICAgICAgICAgIGF0dCA9IFwiXCI7XG5cbiAgICAgICAgJGF0dHJpYnV0ZXMuZmluZCgnaW5wdXQ6dGV4dCwgaW5wdXQ6cGFzc3dvcmQsIGlucHV0OmZpbGUsIHRleHRhcmVhJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghJChlbGVtZW50KS5wcm9wKCdyZXF1aXJlZCcpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS52YWwoKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRhdHRyaWJ1dGVzLmZpbmQoJ3NlbGVjdCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge30gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmZvY3VzKCk7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkYXR0cmlidXRlcy5maW5kKCdpbnB1dDpyYWRpbywgaW5wdXQ6Y2hlY2tib3gnKS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dCAhPSAkKGVsZW1lbnQpLmF0dHIoXCJuYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgYXR0ID0gJChlbGVtZW50KS5hdHRyKFwibmFtZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoISQoZWxlbWVudCkucHJvcCgncmVxdWlyZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJChlbGVtZW50KS5hdHRyKFwidHlwZVwiKSA9PSBcImNoZWNrYm94XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkKFwiW25hbWU9J1wiICsgYXR0ICsgXCInXTpjaGVja2VkXCIpLnZhbCgpKSB7fSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVjayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKGVsZW1lbnQpLmF0dHIoXCJ0eXBlXCIpID09IFwicmFkaW9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoXCJbbmFtZT0nXCIgKyBhdHQgKyBcIiddOmNoZWNrZWRcIikudmFsKCkpIHt9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBjaGVjaztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRUb0NhcnQoZm9ybSwgaSwgYXJyUCwgaykge1xuICAgICAgICBpZiAod2luZG93LkZvcm1EYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9kID0gYXJyUFtpXTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoZm9ybVtwcm9kXSkpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0bXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHRtcC50ZXh0Q29udGVudCB8fCB0bXAuaW5uZXJUZXh0KTtcbiAgICAgICAgICAgICAgICBrID0gayAtIDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGkrKztcblxuICAgICAgICAgICAgaWYgKGkgPj0gYXJyUC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkYnVuZGxlLmZpbmQoJy5sb2FkaW5nT3ZlcmxheScpLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIGlmIChjb250ZXh0LnRoZW1lU2V0dGluZ3MuaGFsb0FkZFRvQ2FydEFjdGlvbiA9PT0gJ3NpZGViYXInKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY29tbW9uL2NhcnQtcHJldmlldydcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkaW5nQ2xhc3MgPSAnaXMtbG9hZGluZyc7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydERyb3Bkb3duID0gJCgnI2hhbG8tY2FydC1zaWRlYmFyIC5oYWxvLXNpZGViYXItd3JhcHBlcicpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkY2FydExvYWRpbmcgPSAkKCc8ZGl2IGNsYXNzPVwibG9hZGluZ092ZXJsYXlcIj48L2Rpdj4nKTtcblxuICAgICAgICAgICAgICAgICAgICAkYm9keS50b2dnbGVDbGFzcygnb3BlbkNhcnRTaWRlYmFyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGNhcnREcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5odG1sKCRjYXJ0TG9hZGluZyk7XG4gICAgICAgICAgICAgICAgICAgICRjYXJ0TG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNob3coKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDb250ZW50KG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2FydERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGxvYWRpbmdDbGFzcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkY2FydExvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICQocmVzcG9uc2UpLmZpbmQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJykuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmcoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0VG8oY29udGV4dC51cmxzLmNhcnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkVG9DYXJ0KGZvcm0sIGksIGFyclAsIGspO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc1J1bm5pbmdJbklmcmFtZSgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuc2VsZiAhPT0gd2luZG93LnRvcDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAoaXNSdW5uaW5nSW5JZnJhbWUoKSAmJiAhd2luZG93LmlmcmFtZVNkaykge1xuICAgICAgICAgICAgd2luZG93LnRvcC5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHVybDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRvdGFsUHJpY2UoKSB7XG4gICAgICAgIHZhciB0b3RhbCA9IDAsXG4gICAgICAgICAgICBzeW1ib2wsXG4gICAgICAgICAgICBzeW1ib2xDaGFuZ2UsXG4gICAgICAgICAgICBkZWNpbWFsUGxhY2VzLFxuICAgICAgICAgICAgZGVjaW1hbFNlcGFyYXRvcixcbiAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvcixcbiAgICAgICAgICAgIHN5bWJvbExvY2F0aW9uLFxuICAgICAgICAgICAgY3VycixcbiAgICAgICAgICAgIHRva2VuMSxcbiAgICAgICAgICAgIHRva2VuMixcbiAgICAgICAgICAgIGxlbmd0aDtcblxuICAgICAgICBkZWNpbWFsUGxhY2VzID0gY3VycmVuY3kuZGVjaW1hbF9wbGFjZXM7XG4gICAgICAgIGRlY2ltYWxTZXBhcmF0b3IgPSBjdXJyZW5jeS5kZWNpbWFsX3Rva2VuO1xuICAgICAgICB0aG91c2FuZHNTZXBhcmF0b3IgPSBjdXJyZW5jeS50aG91c2FuZHNfdG9rZW47XG4gICAgICAgIHN5bWJvbExvY2F0aW9uID0gY3VycmVuY3kuY3VycmVuY3lfbG9jYXRpb247XG4gICAgICAgIHN5bWJvbCA9IGN1cnJlbmN5LmN1cnJlbmN5X3Rva2VuO1xuXG4gICAgICAgICRidW5kbGVEZXRhaWwuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtLmlzQ2hlY2tlZCcpLmVhY2goKGluZGV4LCB2YWwpID0+IHtcbiAgICAgICAgICAgIHZhciBwcmljZSA9IHBhcnNlRmxvYXQoJCh2YWwpLmZpbmQoJ1tkYXRhLXByaWNlLXZhbHVlXScpLmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnKSk7XG5cbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwcmljZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1wcm9kdWN0IC5wcm9kdWN0Vmlldy1wcmljZSA+IC5wcmljZS1zZWN0aW9uID4gLnByaWNlLnByaWNlLS13aXRoVGF4JywgJHNjb3BlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnIgPSAkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aFRheCcsICRzY29wZSkuZGF0YSgndmFsdWUtcHJpY2UnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1cnIgPSAkKCcucHJvZHVjdFZpZXctcHJvZHVjdCAucHJvZHVjdFZpZXctcHJpY2UgPiAucHJpY2Utc2VjdGlvbiA+IC5wcmljZS5wcmljZS0td2l0aG91dFRheCcsICRzY29wZSkuZGF0YSgndmFsdWUtcHJpY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN5bWJvbENoYW5nZSA9IGN1cnIucmVwbGFjZSgvWzAtOV0vZywgXCJcIikucmVwbGFjZShcIi5cIiwgXCJcIikucmVwbGFjZShcIixcIiwgXCJcIik7XG5cbiAgICAgICAgaWYoc3ltYm9sICE9IHN5bWJvbENoYW5nZSl7XG4gICAgICAgICAgICBzeW1ib2wgPSBzeW1ib2xDaGFuZ2U7XG4gICAgICAgICAgICB0b2tlbjEgPSAoY3Vyci5pbmRleE9mKCcuJykpO1xuICAgICAgICAgICAgdG9rZW4yID0gKGN1cnIuaW5kZXhPZignLCcpKTtcbiAgICAgICAgICAgIGxlbmd0aCA9IGN1cnIubGVuZ3RoIC0gMTtcblxuICAgICAgICAgICAgaWYgKGN1cnIuaW5kZXhPZihzeW1ib2wpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgc3ltYm9sTG9jYXRpb24gPSBjdXJyLmluZGV4T2Yoc3ltYm9sKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuMSA8IHRva2VuMikge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcuJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJywnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJvbExvY2F0aW9uID09IDAgfHwgc3ltYm9sTG9jYXRpb24gPT0gXCJsZWZ0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFsUGxhY2VzID0gbGVuZ3RoIC0gdG9rZW4yIC0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRob3VzYW5kc1NlcGFyYXRvciA9ICcsJztcbiAgICAgICAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yID0gJy4nO1xuICAgICAgICAgICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSAwIHx8IHN5bWJvbExvY2F0aW9uID09IFwibGVmdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlY2ltYWxQbGFjZXMgPSBsZW5ndGggLSB0b2tlbjE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGxlbmd0aCAtIHRva2VuMSAtIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYodG90YWwgPT0gMCl7XG4gICAgICAgICAgICAkYnVuZGxlLmZpbmQoJyNoYWxvLWFkZEFsbCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICRidW5kbGUuZmluZCgnI2hhbG8tYWRkQWxsJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0b3RhbCA9IGZvcm1hdE1vbmV5KHRvdGFsLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsU2VwYXJhdG9yLCB0aG91c2FuZHNTZXBhcmF0b3IpO1xuXG4gICAgICAgIGlmIChzeW1ib2xMb2NhdGlvbiA9PSBcImxlZnRcIiB8fCBzeW1ib2xMb2NhdGlvbiA9PSAwKXtcbiAgICAgICAgICAgIHRvdGFsID0gc3ltYm9sICsgdG90YWw7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBzeW1ib2w7XG4gICAgICAgIH1cblxuICAgICAgICAkYnVuZGxlLmZpbmQoJy5oYWxvLXByb2R1Y3QtdG90YWwgLnByaWNlJykuaHRtbCh0b3RhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9ybWF0TW9uZXkobiwgYywgZCwgdCkge1xuICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgIGQgPSBkID09IHVuZGVmaW5lZCA/IFwiLlwiIDogZCxcbiAgICAgICAgICAgIHQgPSB0ID09IHVuZGVmaW5lZCA/IFwiLFwiIDogdCxcbiAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgIGkgPSBTdHJpbmcocGFyc2VJbnQobiA9IE1hdGguYWJzKE51bWJlcihuKSB8fCAwKS50b0ZpeGVkKGMpKSksXG4gICAgICAgICAgICBqID0gKGogPSBpLmxlbmd0aCkgPiAzID8gaiAlIDMgOiAwO1xuXG4gICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHByb2R1Y3RPcHRpb25zKCkge1xuICAgICAgICBpZighJGJ1bmRsZS5oYXNDbGFzcygnaGFsby1idW5kbGUtbG9naW4nKSl7XG4gICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkZm9ybSA9ICQoJ2Zvcm0nLCAkYnVuZGxlKSxcbiAgICAgICAgICAgICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQgPSAkKCdbZGF0YS1mYnQtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICRwcm9kdWN0T3B0aW9uc0VsZW1lbnQsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCk7XG4gICAgICAgICAgICBzZXRQcm9kdWN0VmFyaWFudChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlXScpLCAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvblRpdGxlID0gb3B0aW9uTGFiZWwuc3BsaXQoJzonKVswXS50cmltKCk7XG4gICAgICAgICAgICBjb25zdCByZXF1aXJlZCA9IG9wdGlvbkxhYmVsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICBjb25zdCB0eXBlID0gdmFsdWUuZ2V0QXR0cmlidXRlKCdkYXRhLXByb2R1Y3QtYXR0cmlidXRlJyk7XG5cbiAgICAgICAgICAgIGlmICgodHlwZSA9PT0gJ2lucHV0LWZpbGUnIHx8IHR5cGUgPT09ICdpbnB1dC10ZXh0JyB8fCB0eXBlID09PSAnaW5wdXQtbnVtYmVyJykgJiYgdmFsdWUucXVlcnlTZWxlY3RvcignaW5wdXQnKS52YWx1ZSA9PT0gJycgJiYgcmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3RleHRhcmVhJyAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCd0ZXh0YXJlYScpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhdGlzZmllZCA9IEFycmF5LmZyb20odmFsdWUucXVlcnlTZWxlY3RvckFsbCgnc2VsZWN0JykpLmV2ZXJ5KChzZWxlY3QpID0+IHNlbGVjdC5zZWxlY3RlZEluZGV4ICE9PSAwKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1NhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkubWFwKCh4KSA9PiB4LnZhbHVlKS5qb2luKCctJyk7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtkYXRlU3RyaW5nfWApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAnc2V0LXNlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3QgPSB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0LnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7c2VsZWN0Lm9wdGlvbnNbc2VsZWN0ZWRJbmRleF0uaW5uZXJUZXh0fWApO1xuICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdzd2F0Y2gnIHx8IHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcgfHwgdHlwZSA9PT0gJ3Byb2R1Y3QtbGlzdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkID0gdmFsdWUucXVlcnlTZWxlY3RvcignOmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzWzBdLmlubmVyVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtsYWJlbH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHZhbHVlLmNoaWxkcmVuWzBdKS5maW5kKCdbZGF0YS1vcHRpb24tdmFsdWVdJykudGV4dChsYWJlbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHNbMF0uY2hpbGRyZW5bMF07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWwudGl0bGV9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh2YWx1ZS5jaGlsZHJlblswXSkuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpLnRleHQobGFiZWwudGl0bGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvZHVjdE9wdGlvbnNDaGFuZ2VkKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChldmVudC50YXJnZXQpO1xuICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJCgnW25hbWU9XCJwcm9kdWN0X2lkXCJdJywgJGZvcm0pLnZhbCgpO1xuXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRjaGFuZ2VkT3B0aW9uLmF0dHIoJ2lkJykgPT09ICdmYnRfcHJvZHVjdCcgKyBwcm9kdWN0SWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShwcm9kdWN0SWQsICRmb3JtLnNlcmlhbGl6ZSgpLCAncHJvZHVjdHMvYnVsay1kaXNjb3VudC1yYXRlcycsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0RhdGEgPSByZXNwb25zZS5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50ID0gcmVzcG9uc2UuY29udGVudCB8fCB7fTtcbiAgICAgICAgICAgIHNob3dQcm9kdWN0SW1hZ2UocHJvZHVjdElkLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJGZvcm0sIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgICAgICB1cGRhdGVWaWV3KCRmb3JtLCBwcm9kdWN0QXR0cmlidXRlc0RhdGEsIHByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCk7XG5cbiAgICAgICAgICAgIGlmKCEkYnVuZGxlLmhhc0NsYXNzKCdoYWxvLWJ1bmRsZS1sb2dpbicpKXtcbiAgICAgICAgICAgICAgICB0b3RhbFByaWNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIGNvbnN0IGJlaGF2aW9yID0gZGF0YS5vdXRfb2Zfc3RvY2tfYmVoYXZpb3I7XG4gICAgICAgIGNvbnN0IGluU3RvY2tJZHMgPSBkYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXM7XG4gICAgICAgIGNvbnN0IG91dE9mU3RvY2tNZXNzYWdlID0gYCAoJHtkYXRhLm91dF9vZl9zdG9ja19tZXNzYWdlfSlgO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciAhPT0gJ2hpZGVfb3B0aW9uJyAmJiBiZWhhdmlvciAhPT0gJ2xhYmVsX29wdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScsICRzY29wZSkuZWFjaCgoaSwgYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYXR0cmlidXRlID0gJChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgY29uc3QgYXR0cklkID0gcGFyc2VJbnQoJGF0dHJpYnV0ZS5kYXRhKCdwcm9kdWN0QXR0cmlidXRlVmFsdWUnKSwgMTApO1xuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZW5hYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpc2FibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5oaWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmFkZENsYXNzKCd1bmF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJHNlbGVjdCA9ICRhdHRyaWJ1dGUucGFyZW50KCk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbihmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2VsZWN0LnZhbCgpID09PSAkYXR0cmlidXRlLmF0dHIoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0WzBdLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSArIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucmVtb3ZlQ2xhc3MoJ3VuYXZhaWxhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24odHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5odG1sKCRhdHRyaWJ1dGUuaHRtbCgpLnJlcGxhY2Uob3V0T2ZTdG9ja01lc3NhZ2UsICcnKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBdHRyaWJ1dGVUeXBlKCRhdHRyaWJ1dGUpIHtcbiAgICAgICAgY29uc3QgJHBhcmVudCA9ICRhdHRyaWJ1dGUuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyk7XG5cbiAgICAgICAgcmV0dXJuICRwYXJlbnQgPyAkcGFyZW50LmRhdGEoJ3Byb2R1Y3RBdHRyaWJ1dGUnKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2hvd1Byb2R1Y3RJbWFnZShwcm9kdWN0SWQsIGRhdGEpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChkYXRhLmltYWdlKSkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGRhdGEuaW1hZ2UuZGF0YSwgeyAnMXgnOiBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdGdhbGxlcnlfc2l6ZSB9LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtYWluSW1hZ2VVcmwgPSAkKCcuaGFsby1wcm9kdWN0LWl0ZW1bZGF0YS1wcm9kdWN0LWlkPVwiJyArIHByb2R1Y3RJZCArICdcIl0nKS5maW5kKCdpbWcnKS5hdHRyKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICAgICAgJCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJykuZmluZCgnaW1nJykuYXR0cih7XG4gICAgICAgICAgICAgICAgJ3NyY3NldCc6IG1haW5JbWFnZVVybCxcbiAgICAgICAgICAgICAgICAnZGF0YS1zcmNzZXQnOiAkKHRoaXMpLmF0dHIoJ3NyY3NldCcpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVWaWV3KCRzY29wZSwgZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gZ2V0Vmlld01vZGVsKCRzY29wZSk7XG5cbiAgICAgICAgaWYgKF8uaXNOdW1iZXIoZGF0YS5zdG9jaykpIHtcbiAgICAgICAgICAgIGlmKChkYXRhLnN0b2NrIDw9IHBhcnNlSW50KGNvbnRleHQudGhlbWVTZXR0aW5ncy5oYWxvX3N0b2NrX2xldmVsX2xpbWl0KSkgJiYgKGRhdGEuc3RvY2sgPiAwKSkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0V3JhcHBlci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kc3RvY2tMZWZ0LnRleHQoZGF0YS5zdG9jayk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRzdG9ja0xlZnRXcmFwcGVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzaG93TWVzc2FnZUJveChkYXRhLnN0b2NrX21lc3NhZ2UgfHwgZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UsICRzY29wZSk7XG5cbiAgICAgICAgaWYgKF8uaXNPYmplY3QoZGF0YS5wcmljZSkpIHtcbiAgICAgICAgICAgIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIGRhdGEucHJpY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRzY29wZSkudmFsKCksXG4gICAgICAgICAgICBwcm9kdWN0ID0gJGJ1bmRsZUxpc3QuZmluZCgnLmhhbG8tcHJvZHVjdC1pdGVtW2RhdGEtcHJvZHVjdC1pZD1cIicgKyBwcm9kdWN0SWQgKyAnXCJdJyksXG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3ggPSBwcm9kdWN0LmZpbmQoJy5oYWxvLWRldGFpbC1jaGVja2JveCcpO1xuXG4gICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICBwcm9kdWN0LnJlbW92ZUNsYXNzKCdpc0NoZWNrZWQgaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9kdWN0LmFkZENsYXNzKCdpc0NoZWNrZWQnKTtcbiAgICAgICAgICAgIHByb2R1Y3RDaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSkucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgICAgIGlmICgkc2NvcGUuZmluZCgnW2RhdGEtZmJ0LW9wdGlvbi1jaGFuZ2VdJykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgdmFyIGNoZWNrID0gY2hlY2tCZWZvcmVBZGQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgIGlmIChjaGVjayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuYWRkQ2xhc3MoJ2hhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MoJHNjb3BlLCBkYXRhKSB7XG4gICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbbmFtZT1cInByb2R1Y3RfaWRcIl0nLCAkc2NvcGUpLnZhbCgpLFxuICAgICAgICAgICAgcHJvZHVjdCA9ICRidW5kbGVMaXN0LmZpbmQoJy5oYWxvLXByb2R1Y3QtaXRlbVtkYXRhLXByb2R1Y3QtaWQ9XCInICsgcHJvZHVjdElkICsgJ1wiXScpLFxuICAgICAgICAgICAgcHJvZHVjdENoZWNrYm94ID0gcHJvZHVjdC5maW5kKCcuaGFsby1kZXRhaWwtY2hlY2tib3gnKTtcblxuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgcHJvZHVjdC5yZW1vdmVDbGFzcygnaXNDaGVja2VkIGhhc09wdGlvbnMtLXNlbGVjdGVkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaXNDaGVja2VkJyk7XG4gICAgICAgICAgICBwcm9kdWN0Q2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICBpZiAoJHNjb3BlLmZpbmQoJ1tkYXRhLWZidC1vcHRpb24tY2hhbmdlXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2sgPSBjaGVja0JlZm9yZUFkZCgkc2NvcGUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5hZGRDbGFzcygnaGFzT3B0aW9ucy0tc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRWaWV3TW9kZWwoJHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICAkcHJpY2VXaXRob3V0VGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICBycnBXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ycnAtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXJycC1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRoVGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5vblNhbGVXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucHJpY2Utc2VjdGlvbi0tc2F2aW5nJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1wcmljZS1zYXZlZF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlTm93TGFiZWw6IHtcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLW5vdy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlRGF0YToge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJ1tkYXRhLXByaWNlLXZhbHVlXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdDogJCgnW2RhdGEtc3RvY2stbGVmdF0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgJHN0b2NrTGVmdFdyYXBwZXI6ICQoJy5wcm9kdWN0Vmlldy1vcHRpb25zU3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2snLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRza3U6ICQoJ1tkYXRhLXByb2R1Y3Qtc2t1XScpLFxuICAgICAgICAgICAgJHVwYzogJCgnW2RhdGEtcHJvZHVjdC11cGNdJyksXG4gICAgICAgICAgICBxdWFudGl0eToge1xuICAgICAgICAgICAgICAgICR0ZXh0OiAkKCcuaW5jcmVtZW50VG90YWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW25hbWU9cXR5XFxcXFtcXFxcXV0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRidWxrUHJpY2luZzogJCgnLnByb2R1Y3RWaWV3LWluZm8tYnVsa1ByaWNpbmcnLCAkc2NvcGUpLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UsICRzY29wZSkge1xuICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5wcm9kdWN0QXR0cmlidXRlcy1tZXNzYWdlJywgJHNjb3BlKTtcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZVByaWNlVmlldyh2aWV3TW9kZWwsIHByaWNlKSB7XG4gICAgICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VEYXRhLiRkaXYuYXR0cignZGF0YS1wcmljZS12YWx1ZScsIHByaWNlLndpdGhfdGF4LnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS53aXRob3V0X3RheCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlRGF0YS4kZGl2LmF0dHIoJ2RhdGEtcHJpY2UtdmFsdWUnLCBwcmljZS53aXRob3V0X3RheC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2UucnJwX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJHNwYW4uaHRtbChwcmljZS5zYXZlZC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmb3JtRGF0YTtcbiAgICB9XG59XG4iLCJpbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihjb250ZXh0KSB7XG4gICAgaWYgKCQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY29udGV4dC50b2tlbjtcbiAgICAgICAgY29uc3QgY3VyQ29kZSA9ICQoJy5ib2R5JykuZGF0YSgnY3VycmVuY3ktY29kZScpO1xuICAgICAgICB2YXIgcHJvZHVjdElkID0gJCgnLnByb2R1Y3RWaWV3LW5leHRQcm9kdWN0cycpLmRhdGEoJ3Byb2R1Y3QtaWQnKSxcbiAgICAgICAgICAgIG5leHRJZCA9IHByb2R1Y3RJZCArIDEsXG4gICAgICAgICAgICBwcmV2SWQgPSBwcm9kdWN0SWQgLSAxLFxuICAgICAgICAgICAgbmV4dExpbmssIHByZXZMaW5rLCBsaXN0O1xuXG4gICAgICAgIGNvbnN0ICRwcm9kV3JhcCA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1tb2RhbCcpLFxuICAgICAgICAgICAgJHByb2RJY29ucyA9ICQoJy5wcm9kdWN0Vmlldy1uZXh0UHJvZHVjdHMgLm5leHQtcHJldi1pY29ucycpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldFByb2R1Y3QoYXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKCcvZ3JhcGhxbCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15UXVlcnkge1xuICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzIChlbnRpdHlJZHM6IFtgK2FycitgXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Qcm9kdWN0RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3kgKGN1cnJlbmN5Q29kZTogYCtjdXJDb2RlK2ApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbFBsYWNlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhvdXNhbmRzVG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBQcm9kdWN0RmllbGRzIG9uIFByb2R1Y3Qge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZzcwcHg6IHVybCh3aWR0aDogNzApXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcHJpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFnbWVudCBNb25leUZpZWxkcyBvbiBNb25leSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9KSxcbiAgICAgICAgfSkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5kYXRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHByZXZJZCAhPSB1bmRlZmluZWQgJiYgbmV4dElkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbGlzdCA9IFtwcmV2SWQsIG5leHRJZF07XG5cbiAgICAgICAgICAgIGdldFByb2R1Y3QobGlzdCkudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9kdWN0KGRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcywgZGF0YS5zaXRlLmN1cnJlbmN5LmRpc3BsYXkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBmb3JtYXRNb25leShuLCBjLCBkLCB0KSB7XG4gICAgICAgICAgICB2YXIgYyA9IGlzTmFOKGMgPSBNYXRoLmFicyhjKSkgPyAyIDogYyxcbiAgICAgICAgICAgICAgICBkID0gZCA9PSB1bmRlZmluZWQgPyBcIi5cIiA6IGQsXG4gICAgICAgICAgICAgICAgdCA9IHQgPT0gdW5kZWZpbmVkID8gXCIsXCIgOiB0LFxuICAgICAgICAgICAgICAgIHMgPSBuIDwgMCA/IFwiLVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBpID0gU3RyaW5nKHBhcnNlSW50KG4gPSBNYXRoLmFicyhOdW1iZXIobikgfHwgMCkudG9GaXhlZChjKSkpLFxuICAgICAgICAgICAgICAgIGogPSAoaiA9IGkubGVuZ3RoKSA+IDMgPyBqICUgMyA6IDA7XG5cbiAgICAgICAgICAgIHJldHVybiBzICsgKGogPyBpLnN1YnN0cigwLCBqKSArIHQgOiBcIlwiKSArIGkuc3Vic3RyKGopLnJlcGxhY2UoLyhcXGR7M30pKD89XFxkKS9nLCBcIiQxXCIgKyB0KSArIChjID8gZCArIE1hdGguYWJzKG4gLSBpKS50b0ZpeGVkKGMpLnNsaWNlKDIpIDogXCJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXJQcm9kdWN0KHByb2R1Y3QsIGN1ckRpc3BsYXkpIHtcbiAgICAgICAgICAgIGlmIChwcm9kdWN0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICQuZWFjaChwcm9kdWN0LCAoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGVsZW1lbnQucHJvZHVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbCA9IGN1ckRpc3BsYXkuc3ltYm9sLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sUGxhY2VtZW50ID0gY3VyRGlzcGxheS5zeW1ib2xQbGFjZW1lbnQudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxUb2tlbiA9IGN1ckRpc3BsYXkuZGVjaW1hbFRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbFBsYWNlcyA9IGN1ckRpc3BsYXkuZGVjaW1hbFBsYWNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRob3VzYW5kc1Rva2VuID0gY3VyRGlzcGxheS50aG91c2FuZHNUb2tlbjtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpdGxlLCBwcmljZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGV4dC50aGVtZVNldHRpbmdzLmhhbG9fY2FyZF90aXRsZSA9PSAnZWxsaXBzaXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSA9ICc8YSBocmVmPVwiJytpdGVtLnBhdGgrJ1wiIGNsYXNzPVwiY2FyZC1lbGxpcHNpc1wiIHN0eWxlPVwiLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcIj4nK2l0ZW0ubmFtZSsnPC9hPic7ICAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgPSAnPGEgaHJlZj1cIicraXRlbS5wYXRoKydcIj4nK2l0ZW0ubmFtZSsnPC9hPic7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCgnLmJvZHknKS5oYXNDbGFzcygnaXMtbG9naW4nKSB8fCBjb250ZXh0LnRoZW1lU2V0dGluZ3MucmVzdHJpY3RfdG9fbG9naW4gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSA8IGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlICYmIGNvbnRleHQudGhlbWVTZXR0aW5ncy5wcmljZV9yYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZU1pbiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZVJhbmdlLm1pbi52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlTWF4ID0gKHN5bWJvbFBsYWNlbWVudCA9PSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpICsgKGZvcm1hdE1vbmV5KGl0ZW0ucHJpY2VzLnByaWNlUmFuZ2UubWF4LnZhbHVlLCBkZWNpbWFsUGxhY2VzLCBkZWNpbWFsVG9rZW4sIHRob3VzYW5kc1Rva2VuKSkgKyAoc3ltYm9sUGxhY2VtZW50ICE9IFwibGVmdFwiID8gc3ltYm9sIDogXCJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPjwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlTWluKycgLSAnK3ByaWNlTWF4Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZURlZiA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5wcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLnJldGFpbFByaWNlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucHJpY2VzLmJhc2VQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUJhcyA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5iYXNlUHJpY2UudmFsdWUsIGRlY2ltYWxQbGFjZXMsIGRlY2ltYWxUb2tlbiwgdGhvdXNhbmRzVG9rZW4pKSArIChzeW1ib2xQbGFjZW1lbnQgIT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheCBub24tc2FsZS1wcmljZS0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS1ub24tc2FsZVwiPicrcHJpY2VCYXMrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLXdpdGhvdXRUYXhcIj4nK3ByaWNlRGVmKyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+JztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXggcHJpY2Utbm9uZVwiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj48L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSA+IGl0ZW0ucHJpY2VzLnByaWNlLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVJldCA9IChzeW1ib2xQbGFjZW1lbnQgPT0gXCJsZWZ0XCIgPyBzeW1ib2wgOiBcIlwiKSArIChmb3JtYXRNb25leShpdGVtLnByaWNlcy5yZXRhaWxQcmljZS52YWx1ZSwgZGVjaW1hbFBsYWNlcywgZGVjaW1hbFRva2VuLCB0aG91c2FuZHNUb2tlbikpICsgKHN5bWJvbFBsYWNlbWVudCAhPSBcImxlZnRcIiA/IHN5bWJvbCA6IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlID0gJzxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXggbm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj4nK3ByaWNlUmV0Kyc8L3NwYW4+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0td2l0aG91dFRheFwiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXg9XCJcIiBjbGFzcz1cInByaWNlIHByaWNlLS13aXRob3V0VGF4XCI+JytwcmljZURlZisnPC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSA9ICc8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS13aXRob3V0VGF4IG5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4IHByaWNlLW5vbmVcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRob3V0LXRheD1cIlwiIGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+PC9zcGFuPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXdpdGhvdXRUYXhcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LXByaWNlLXdpdGhvdXQtdGF4PVwiXCIgY2xhc3M9XCJwcmljZSBwcmljZS0td2l0aG91dFRheFwiPicrcHJpY2VEZWYrJzwvc3Bhbj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2UgPSAnPHAgdHJhbnNsYXRlPkxvZyBpbiBmb3IgcHJpY2luZzwvcD4nO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaHRtbF9jYXJkID0gJzxkaXYgY2xhc3M9XCJjYXJkXCIgZGF0YS1wcm9kdWN0LWlkPVwiJytpdGVtLmVudGl0eUlkKydcIj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWxpbmtcIiBocmVmPVwiJytpdGVtLnBhdGgrJ1wiPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIicraXRlbS5kZWZhdWx0SW1hZ2UuaW1nNzBweCsnXCIgYWx0PVwiJytpdGVtLm5hbWUrJ1wiIHRpdGxlPVwiJytpdGVtLm5hbWUrJ1wiIC8+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiY2FyZC10aXRsZVwiPicrdGl0bGUrJzwvaDQ+XFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcHJpY2VcIiBkYXRhLXRlc3QtaW5mby10eXBlPVwicHJpY2VcIj4nK3ByaWNlKyc8L2Rpdj5cXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4nO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IHByZXZJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGF0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykuYXR0cignaHJlZicsIGl0ZW0ucGF0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RJY29ucy5maW5kKCcucHJldi1pY29uJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFwcGVuZChodG1sX2NhcmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5wcmV2LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmVudGl0eUlkID09IG5leHRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYoaXRlbS5wYXRoICE9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLmF0dHIoJ2hyZWYnLCBpdGVtLnBhdGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kSWNvbnMuZmluZCgnLm5leHQtaWNvbicpLnJlbW92ZUNsYXNzKCdkaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2RXcmFwLmZpbmQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hcHBlbmQoaHRtbF9jYXJkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZEljb25zLmZpbmQoJy5uZXh0LWljb24nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZFdyYXAuZmluZCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZEljb25zLm9uKCdtb3VzZW92ZXInLCBldmVudCA9PiB7XG4gICAgICAgICAgICAkcHJvZFdyYXAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KVxuICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAkcHJvZFdyYXAucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcubmV4dC1pY29uJywgJHByb2RJY29ucykub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2Rpc2FibGUnKSkge1xuICAgICAgICAgICAgICAgICQoJyNwcmV2LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5hZGRDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcmV2LWljb24nLCAkcHJvZEljb25zKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnZGlzYWJsZScpKSB7XG4gICAgICAgICAgICAgICAgJCgnI25leHQtcHJvZHVjdC1tb2RhbCcpLnJlbW92ZUNsYXNzKCdpcy1zaG93Jyk7XG4gICAgICAgICAgICAgICAgJCgnI3ByZXYtcHJvZHVjdC1tb2RhbCcpLmFkZENsYXNzKCdpcy1zaG93Jyk7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJyNuZXh0LXByb2R1Y3QtbW9kYWwnKS5yZW1vdmVDbGFzcygnaXMtc2hvdycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkcHJvZFdyYXAub24oJ21vdXNlb3ZlcicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICRwcm9kV3JhcC5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbignbW91c2VsZWF2ZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICRwcm9kV3JhcC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgc3dhbCBmcm9tICdzd2VldGFsZXJ0Mic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigkc2NvcGUsIGNvbnRleHQpe1xuICAgIGlmICgkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBzY3JvbGwgPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0Jykub2Zmc2V0KCksXG4gICAgICAgICAgICBoX3N0YXRjID0gJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCksXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBzY3JvbGwudG9wO1xuXG4gICAgICAgIGlmICgkKCcucHJvZHVjdFZpZXctZGV0YWlscyAucHJvZHVjdFZpZXctb3B0aW9ucyBbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZT1cInN3YXRjaFwiXScpLmxlbmd0aCkgeyAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbG9yID0gJCgnLnByb2R1Y3RWaWV3LWRldGFpbHMgLnByb2R1Y3RWaWV3LW9wdGlvbnMgW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGU9XCJzd2F0Y2hcIl0gLmZvcm0tb3B0aW9uID4gc3BhbicpLmF0dHIoJ3RpdGxlJyk7XG4gICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0IC5vcHRpb24tdmFsdWUnKS5hcHBlbmQoJzxzcGFuIGNsYXNzPVwiY29sb3ItbmFtZVwiPiAtJyArICcgJyArIGNvbG9yICsgJzwvZGl2PicpO1xuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgY29uc3QgJHN0aWNreSA9ICQoJyNoYWxvX3N0aWNreV9hZGRUb0NhcnQnKTtcblxuICAgICAgICAgICAgaWYoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gc2Nyb2xsVG9wICsgNDAwKXtcblxuICAgICAgICAgICAgICAgIGlmKCEkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAyMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCA4MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2V7XG5cbiAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykucmVtb3ZlQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG4gICAgICAgICAgICAgICAgJCgnLnBvcC11cC1vcHRpb24nKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygnb3BlblBvcHVwT3B0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcuY2hvb3NlX29wdGlvbnNfYWRkJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCAyMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgMjApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI3JlY2VudGx5X2JvdWdodF9saXN0JykuY3NzKFwiYm90dG9tXCIsIDgwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLmNob29zZV9vcHRpb25zX2FkZCcsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJCgnLnBvcC11cC1vcHRpb24nKS50b2dnbGVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLmFkZENsYXNzKCdvcGVuUG9wdXBPcHRpb24nKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywnLnBvcC11cC1vcHRpb24gLm1vZGFsLWNsb3NlJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgJChcIi5wb3AtdXAtb3B0aW9uXCIpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5Qb3B1cE9wdGlvbicpO1xuICAgICAgICAgICAgJCgnLmNob29zZV9vcHRpb25zX2FkZCcpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiBzY3JvbGxUb3AgKyA0MDApe1xuICAgICAgICAgICAgICAgIGlmKCEkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuaGFzQ2xhc3MoJ3Nob3dfc3RpY2t5Jykpe1xuICAgICAgICAgICAgICAgICAgICAkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykuYWRkQ2xhc3MoJ3Nob3dfc3RpY2t5Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNTUwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyA0MCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZigkKCcjaGFsb19zdGlja3lfYWRkVG9DYXJ0JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjcmVjZW50bHlfYm91Z2h0X2xpc3QnKS5jc3MoXCJib3R0b21cIiwgJCgnI2hhbG9fc3RpY2t5X2FkZFRvQ2FydCcpLm91dGVySGVpZ2h0KCkgKyAzMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNyZWNlbnRseV9ib3VnaHRfbGlzdCcpLmNzcyhcImJvdHRvbVwiLCA4MCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKlxuIEltcG9ydCBhbGwgcHJvZHVjdCBzcGVjaWZpYyBqc1xuICovXG5pbXBvcnQgdXRpbHMgZnJvbSBcIkBiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzXCI7XG5pbXBvcnQgU29ydGFibGUgZnJvbSBcInNvcnRhYmxlanNcIjtcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tIFwiLi9wYWdlLW1hbmFnZXJcIjtcbmltcG9ydCBSZXZpZXcgZnJvbSBcIi4vcHJvZHVjdC9yZXZpZXdzXCI7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gXCIuL2NvbW1vbi9jb2xsYXBzaWJsZVwiO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gXCIuL2NvbW1vbi9wcm9kdWN0LWRldGFpbHNcIjtcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSBcIi4vcHJvZHVjdC92aWRlby1nYWxsZXJ5XCI7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0gfSBmcm9tIFwiLi9jb21tb24vdXRpbHMvZm9ybS11dGlsc1wiO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tIFwiLi9nbG9iYWwvbW9kYWxcIjtcbmltcG9ydCBoYWxvWW91dHViZUNhcm91c2VsIGZyb20gXCIuL2hhbG90aGVtZXMvaGFsb1lvdXR1YmVWaWRlb1wiO1xuaW1wb3J0IGhhbG9OZXh0UHJvZHVjdHMgZnJvbSBcIi4vaGFsb3RoZW1lcy9oYWxvTmV4dFByb2R1Y3RzXCI7XG5pbXBvcnQgaGFsb05vdGlmeU1lIGZyb20gXCIuL2hhbG90aGVtZXMvaGFsb05vdGlmeU1lXCI7XG5pbXBvcnQgaGFsb1N0aWNreUFkZFRvQ2FydCBmcm9tIFwiLi9oYWxvdGhlbWVzL2hhbG9TdGlja3lBZGRUb0NhcnRcIjtcbmltcG9ydCBoYWxvQnVuZGxlUHJvZHVjdHMgZnJvbSBcIi4vaGFsb3RoZW1lcy9oYWxvQnVuZGxlUHJvZHVjdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoXCIjbW9kYWwtcmV2aWV3LWZvcm1cIilbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbihcImNsb3NlLmZuZHRuLnJldmVhbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy51cmwuaW5kZXhPZihcIiN3cml0ZV9yZXZpZXdcIikgIT09IC0xICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdmFsaWRhdG9yO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG4gICAgICAgIGhhbG9OZXh0UHJvZHVjdHModGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb05vdGlmeU1lKCQoXCIuaGFsby1wcm9kdWN0Vmlld1wiKSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgaGFsb1lvdXR1YmVDYXJvdXNlbCgkKFwiLmhhbG8tcHJvZHVjdFZpZXcgLnByb2R1Y3RWaWV3LWltYWdlLXdyYXBwZXJcIikpO1xuICAgICAgICBoYWxvQnVuZGxlUHJvZHVjdHMoJChcIi5oYWxvLXByb2R1Y3RWaWV3XCIpLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoXG4gICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3XCIpLFxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LFxuICAgICAgICAgICAgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0UmV2aWV3SGFuZGxlcigpO1xuICAgICAgICB0aGlzLnZpZXdpbmdQcm9kdWN0KCQoXCIucHJvZHVjdFZpZXctVmlld2luZ1Byb2R1Y3RcIikpO1xuICAgICAgICB0aGlzLnNvbGRQcm9kdWN0KCQoXCIucHJvZHVjdFZpZXctc29sZFByb2R1Y3RcIikpO1xuICAgICAgICB0aGlzLmNvdW50RG93blByb2R1Y3QoJChcIi5wcm9kdWN0Vmlldy1jb3VudERvd25cIikpO1xuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3U2hhcmVMaW5rKCk7XG4gICAgICAgIHRoaXMuY29tcGFyZUNvbG9ycygpO1xuICAgICAgICB0aGlzLnRvZ2dsZVRhYnMoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0Q3VzdG9tVGFiKCk7XG4gICAgICAgIHRoaXMucHJvZHVjdFNoaXBwaW5nVGFiKCk7XG4gICAgICAgIHRoaXMuc2hvd21vcmVEZXNjcmlwdGlvbigpO1xuICAgICAgICB0aGlzLmNoZWNrUHJvZHVjdCgpO1xuICAgICAgICB0aGlzLmNvcHlEaWdpdGFsTGluaygpO1xuICAgICAgICB0aGlzLmRpZ2l0YWxEb3dubG9hZFNpZGViYXIoKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGlnaXRhbERvd25sb2FkKCk7XG5cbiAgICAgICAgaGFsb1N0aWNreUFkZFRvQ2FydCgkKFwiLmhhbG8tcHJvZHVjdFZpZXdcIiksIHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oXCIud3JpdGVSZXZpZXctZm9ybVwiKTtcblxuICAgICAgICBpZiAoJHJldmlld0Zvcm0ubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgcmV2aWV3ID0gbmV3IFJldmlldygkcmV2aWV3Rm9ybSk7XG5cbiAgICAgICAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgICAgICB0aGlzLmFyaWFEZXNjcmliZVJldmlld0lucHV0cygkcmV2aWV3Rm9ybSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRvci5hcmVBbGwoXCJ2YWxpZFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZChcIltkYXRhLWlucHV0XVwiKS5lYWNoKChfLCBpbnB1dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgICAgICAgICBjb25zdCBtc2dTcGFuSWQgPSBgJHskaW5wdXQuYXR0cihcIm5hbWVcIil9LW1zZ2A7XG5cbiAgICAgICAgICAgICRpbnB1dC5zaWJsaW5ncyhcInNwYW5cIikuYXR0cihcImlkXCIsIG1zZ1NwYW5JZCk7XG4gICAgICAgICAgICAkaW5wdXQuYXR0cihcImFyaWEtZGVzY3JpYmVkYnlcIiwgbXNnU3BhbklkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJvZHVjdFJldmlld0hhbmRsZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKFwiI3dyaXRlX3Jldmlld1wiKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnVsa1ByaWNpbmdIYW5kbGVyKCkge1xuICAgICAgICBpZiAodGhpcy51cmwuaW5kZXhPZihcIiNidWxrX3ByaWNpbmdcIikgIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsudHJpZ2dlcihcImNsaWNrXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc29sZFByb2R1Y3QoJHdyYXBwZXIpIHtcbiAgICAgICAgaWYgKCR3cmFwcGVyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdF90ZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyxcbiAgICAgICAgICAgICAgICBudW1iZXJzSG91cnNfdGV4dCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfc29sZFByb2R1Y3RfaG91cnMsXG4gICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF9zb2xkUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dDIgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQ7XG5cbiAgICAgICAgICAgIHZhciBudW1iZXJzUHJvZHVjdExpc3QgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICAgICAgICBcIltcIiArIG51bWJlcnNQcm9kdWN0X3RleHQgKyBcIl1cIlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RJdGVtID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNQcm9kdWN0TGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIG51bWJlcnNIb3Vyc0xpc3QgPSBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc0hvdXJzX3RleHQgKyBcIl1cIiksXG4gICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzSXRlbSA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiBudW1iZXJzSG91cnNMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICR3cmFwcGVyLmh0bWwoXG4gICAgICAgICAgICAgICAgJzxzdmcgY2xhc3M9XCJpY29uXCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZmlyZVwiLz48L3N2Zz48c3BhbiBjbGFzcz1cInRleHRcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1Byb2R1Y3RMaXN0W251bWJlcnNQcm9kdWN0SXRlbV0gK1xuICAgICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICAgIHNvbGRQcm9kdWN0VGV4dCArXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyc0hvdXJzTGlzdFtudW1iZXJzSG91cnNJdGVtXSArXG4gICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgc29sZFByb2R1Y3RUZXh0MiArXG4gICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJHdyYXBwZXIuc2hvdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY291bnREb3duUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZiAoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIGNvdW50RG93biA9ICR3cmFwcGVyLmRhdGEoXCJjb3VudGRvd25cIiksXG4gICAgICAgICAgICAgICAgY291bnREb3duRGF0ZSA9IG5ldyBEYXRlKGNvdW50RG93bikuZ2V0VGltZSgpLFxuICAgICAgICAgICAgICAgIHNlZnQgPSAkd3JhcHBlcjtcblxuICAgICAgICAgICAgdmFyIGNvdW50ZG93bmZ1bmN0aW9uID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGNvdW50ZG93bmZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgc2VmdC5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF5cyA9IE1hdGguZmxvb3IoZGlzdGFuY2UgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnMgPSBNYXRoLmZsb29yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoMTAwMCAqIDYwICogNjApXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGguZmxvb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRpc3RhbmNlICUgKDEwMDAgKiA2MCAqIDYwKSkgLyAoMTAwMCAqIDYwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RyQ291bnREb3duID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1iZWxsXCIvPjwvc3ZnPjxzcGFuIGNsYXNzPVwidGV4dFwiPjxzcGFuPkxpbWl0ZWQtdGltZSBvZmZlcnM6PC9zcGFuPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJudW1cIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXlzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaCA6PC9zcGFuPiA8c3BhbiBjbGFzcz1cIm51bVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtIDo8L3NwYW4+IDxzcGFuIGNsYXNzPVwibnVtXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kcyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzPC9zcGFuPlwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlZnQuaHRtbChzdHJDb3VudERvd24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvZHVjdFZpZXdTaGFyZUxpbmsoKSB7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtCdG4gPSAkKFwiLnNoYXJlTGlua1NvY2lhbF9fYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCAkc2hhcmVMaW5rUG9wdXAgPSAkKFwiLnNoYXJlTGlua1NvY2lhbF9fcG9wdXBcIik7XG4gICAgICAgIGNvbnN0ICRzaGFyZUxpbmtDbG9zZSA9ICQoXCIuc2hhcmVMaW5rU29jaWFsX19jbG9zZVwiKTtcbiAgICAgICAgY29uc3QgJHNoYXJlTGlua0NvcHkgPSAkKFwiI3NoYXJlTGlua1NvY2lhbF9fY29weVwiKTtcblxuICAgICAgICAkc2hhcmVMaW5rQnRuLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCRzaGFyZUxpbmtQb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuc2xpZGVVcCg0MDApO1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5yZW1vdmVDbGFzcyhcImlzLW9wZW5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZURvd24oNDAwKTtcbiAgICAgICAgICAgICAgICAkc2hhcmVMaW5rUG9wdXAuYWRkQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkc2hhcmVMaW5rQ2xvc2Uub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoJHNoYXJlTGlua1BvcHVwLmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgICAgICRzaGFyZUxpbmtQb3B1cC5zbGlkZVVwKDQwMCk7XG4gICAgICAgICAgICAgICAgJHNoYXJlTGlua1BvcHVwLnJlbW92ZUNsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHNoYXJlTGlua0NvcHkub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS50YXJnZXQpO1xuXG4gICAgICAgICAgICAkdGFyZ2V0LnNlbGVjdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2aWV3aW5nUHJvZHVjdCgkd3JhcHBlcikge1xuICAgICAgICBpZiAoJHdyYXBwZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5wcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQsXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlcl90ZXh0ID1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF92aWV3ZXIsXG4gICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSBKU09OLnBhcnNlKFwiW1wiICsgbnVtYmVyc1ZpZXdlcl90ZXh0ICsgXCJdXCIpLFxuICAgICAgICAgICAgICAgIHRpbWVWaWV3ZXIgPVxuICAgICAgICAgICAgICAgICAgICBwYXJzZUludChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfY2hhbmdlXG4gICAgICAgICAgICAgICAgICAgICkgKiAxMDAwO1xuXG4gICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlcnNWaWV3ZXJJdGVtID0gTWF0aC5mbG9vcihcbiAgICAgICAgICAgICAgICAgICAgTWF0aC5yYW5kb20oKSAqIG51bWJlcnNWaWV3ZXJMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAkd3JhcHBlci5odG1sKFxuICAgICAgICAgICAgICAgICAgICAnPHN2ZyBjbGFzcz1cImljb25cIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leWVcIi8+PC9zdmc+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJzVmlld2VyTGlzdFtudW1iZXJzVmlld2VySXRlbV0gK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld2VyVGV4dFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LCB0aW1lVmlld2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhcmVDb2xvcnMoKSB7XG4gICAgICAgIGNvbnN0ICRzd2F0Y2hXcmFwcGVyID0gJChcIi5oYWxvLWNvbXBhcmVDb2xvcnMtc3dhdGNoXCIpLFxuICAgICAgICAgICAgJGltYWdlV3JhcHBlciA9ICQoXCIuaGFsby1jb21wYXJlQ29sb3JzLWltYWdlXCIpLFxuICAgICAgICAgICAgJHRleHRXcmFwcGVyID0gJChcIi5oYWxvLWNvbXBhcmVDb2xvcnMtdGV4dFwiKTtcblxuICAgICAgICAkKFwiLmZvcm0tb3B0aW9uXCIsICRzd2F0Y2hXcmFwcGVyKS5vbihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJHRoaXMudG9nZ2xlQ2xhc3MoXCJzaG93LWNvbG9yXCIpO1xuXG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAkdGhpcy5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnRcIikuYXR0cihcInRpdGxlXCIpLFxuICAgICAgICAgICAgICAgIGlkID0gJHRoaXMuZGF0YShcInByb2R1Y3Qtc3dhdGNoLXZhbHVlXCIpLFxuICAgICAgICAgICAgICAgICRjb2xvcixcbiAgICAgICAgICAgICAgICAkY29sb3IyLFxuICAgICAgICAgICAgICAgICRjb2xvcjMsXG4gICAgICAgICAgICAgICAgJGltZyxcbiAgICAgICAgICAgICAgICAkcGF0dGVybjtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKFwic2hvdy1jb2xvclwiKSkge1xuICAgICAgICAgICAgICAgIGlmICgkdGhpcy5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3JcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwic3R5bGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCI+PHNwYW4gY2xhc3M9XCJjb2xvclwiIHN0eWxlPVwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnO1wiPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PlwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhpcy5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMlwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yID0gJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMiBzcGFuOm50aC1jaGlsZCgxKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiA9ICR0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjIgc3BhbjpudGgtY2hpbGQoMilcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwic3R5bGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgJChcIi5oYWxvLWNvbXBhcmVDb2xvcnMtaW1hZ2VcIikuYXBwZW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJpdGVtIGl0ZW0tY29sb3IgaXRlbS0nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1wiPjxzcGFuIGNsYXNzPVwiY29sb3IgY29sb3IyXCI+PHNwYW4gc3R5bGU9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3IgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc7XCI+PC9zcGFuPjxzcGFuIHN0eWxlPVwiJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNvbG9yMiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJztcIj48L3NwYW4+PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCI8L3NwYW4+PC9kaXY+XCJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCR0aGlzLmZpbmQoXCIuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IgPSAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZm9ybS1vcHRpb24tdmFyaWFudC0tY29sb3IzIHNwYW46bnRoLWNoaWxkKDEpXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcInN0eWxlXCIpO1xuICAgICAgICAgICAgICAgICAgICAkY29sb3IyID0gJHRoaXNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yMyBzcGFuOm50aC1jaGlsZCgyKVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJGNvbG9yMyA9ICR0aGlzXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIi5mb3JtLW9wdGlvbi12YXJpYW50LS1jb2xvcjMgc3BhbjpudGgtY2hpbGQoMylcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwic3R5bGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1jb2xvciBpdGVtLScgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnXCI+PHNwYW4gY2xhc3M9XCJjb2xvciBjb2xvcjNcIj48c3BhbiBzdHlsZT1cIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvciArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJztcIj48L3NwYW4+PHNwYW4gc3R5bGU9XCInICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY29sb3IyICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnO1wiPjwvc3Bhbj48c3BhbiBzdHlsZT1cIicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjb2xvcjMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc7XCI+PC9zcGFuPjwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiPC9zcGFuPjwvZGl2PlwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgkdGhpcy5maW5kKFwiLmZvcm0tb3B0aW9uLXZhcmlhbnQtLXBhdHRlcm5cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbWcgPSAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJHBhdHRlcm4gPSAkdGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkYXRhLXBhdHRlcm5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgJGltYWdlV3JhcHBlci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIml0ZW0gaXRlbS1wYXJ0ZXJuIGl0ZW0tJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdcIj48c3BhbiBjbGFzcz1cImltYWdlXCI+PGltZyBzcmM9JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBhdHRlcm4gK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGFsdD1cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHRpdGxlPVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJz48L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZVwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjwvc3Bhbj48L2Rpdj5cIlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChcIi5pdGVtLVwiICsgaWQgKyBcIlwiLCAkaW1hZ2VXcmFwcGVyKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRpbWFnZVdyYXBwZXIuY2hpbGRyZW4oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgJHRleHRXcmFwcGVyLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHRleHRXcmFwcGVyLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDEwMjUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yLXN3YXRjaC1pbWFnZVwiKTtcblxuICAgICAgICAgICAgICAgIG5ldyBTb3J0YWJsZShlbCwge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDE1MCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdG9nZ2xlVGFicygpIHtcbiAgICAgICAgJChcIi5wcm9kdWN0Vmlldy10YWIgW2RhdGEtY29sbGFwc2libGVdXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKFwiaXMtb3BlblwiKSkge1xuICAgICAgICAgICAgICAgICR0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgLnBhcmVudChcIi50b2dnbGUtdGl0bGVcIilcbiAgICAgICAgICAgICAgICAgICAgLnNpYmxpbmdzKFwiLnRvZ2dsZS1jb250ZW50XCIpXG4gICAgICAgICAgICAgICAgICAgIC5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgIC5wYXJlbnQoXCIudG9nZ2xlLXRpdGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncyhcIi50b2dnbGUtY29udGVudFwiKVxuICAgICAgICAgICAgICAgICAgICAuc2xpZGVVcChcInNsb3dcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2R1Y3RDdXN0b21UYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3Byb2R1Y3RfZGV0YWlsc190YWJzID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X2N1c3RvbV90YWIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X2N1c3RvbV90YWJfdHlwZSA9PSBcImFsbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfY3VzdG9tX3RhYl9saW5rO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBcImhhbG90aGVtZXMvcGFnZS9oYWxvLXBhZ2UtdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIG9wdGlvbiwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQocmVzcG9uc2UpLmFwcGVuZFRvKFwiI3RhYi1jdXN0b20tbW9iaWxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy10YWIgI3RhYi1jdXN0b20tbW9iaWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LXRhYiAjdGFiLWN1c3RvbVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFiLWRlc2NyaXB0aW9uXCIpLmZpbmQoXCJbZGF0YS1jdXN0b20tdGFiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X2N1c3RvbV90YWJfdHlwZSA9PSBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFiLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIltkYXRhLWN1c3RvbS10YWJdXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kVG8oXCIjdGFiLWN1c3RvbS1tb2JpbGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJChcIi5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvblwiKS5maW5kKFwiW2RhdGEtY3VzdG9tLXRhYl1cIikucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9kdWN0U2hpcHBpbmdUYWIoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3Byb2R1Y3RfZGV0YWlsc190YWJzID09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3NoaXBwaW5nX3RhYiA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQudGhlbWVTZXR0aW5ncy5zaG93X3NoaXBwaW5nX3RhYl90eXBlID09IFwiYWxsXCJcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC50aGVtZVNldHRpbmdzLnNob3dfc2hpcHBpbmdfdGFiX2xpbms7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IFwiaGFsb3RoZW1lcy9wYWdlL2hhbG8tcGFnZS10ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKHVybCwgb3B0aW9uLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChyZXNwb25zZSkuYXBwZW5kVG8oXCIjdGFiLXNoaXBwaW5nLW1vYmlsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctdGFiICN0YWItc2hpcHBpbmctbW9iaWxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRyaW0oKSA9PSBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnByb2R1Y3RWaWV3LXRhYiAjdGFiLXNoaXBwaW5nXCIpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJChcIiN0YWItZGVzY3JpcHRpb25cIikuZmluZChcIltkYXRhLXNoaXBwaW5nLXRhYl1cIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LnRoZW1lU2V0dGluZ3Muc2hvd19zaGlwcGluZ190YWJfdHlwZSA9PVxuICAgICAgICAgICAgICAgICAgICBcImN1c3RvbVwiXG4gICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjdGFiLWRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmluZChcIltkYXRhLXNoaXBwaW5nLXRhYl1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhcIiN0YWItc2hpcHBpbmctbW9iaWxlXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoXCIucHJvZHVjdFZpZXctZGVzY3JpcHRpb25cIikuZmluZChcIltkYXRhLXNoaXBwaW5nLXRhYl1cIikucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93bW9yZURlc2NyaXB0aW9uKCkge1xuICAgICAgICBjb25zdCBzaG93TW9yZWJ0biA9ICQoXCIjdGFiLWRlc2NyaXB0aW9uU2hvd21vcmVcIiksXG4gICAgICAgICAgICBkZXNjTW9iaWxlID0gJChcIiN0YWItZGVzY3JpcHRpb24tbW9iaWxlXCIpLFxuICAgICAgICAgICAgdGV4dFNob3dNb3JlID0gc2hvd01vcmVidG4uZmluZChcIi5idXR0b25cIikuZGF0YShcInNob3ctbW9yZS10ZXh0XCIpLFxuICAgICAgICAgICAgdGV4dFNob3dMZXNzID0gc2hvd01vcmVidG4uZmluZChcIi5idXR0b25cIikuZGF0YShcInNob3ctbGVzcy10ZXh0XCIpO1xuXG4gICAgICAgIHNob3dNb3JlYnRuLmZpbmQoXCIuYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoc2hvd01vcmVidG4uaGFzQ2xhc3MoXCJsZXNzXCIpKSB7XG4gICAgICAgICAgICAgICAgc2hvd01vcmVidG4ucmVtb3ZlQ2xhc3MoXCJsZXNzXCIpLmFkZENsYXNzKFwic2hvd1wiKTtcbiAgICAgICAgICAgICAgICBzaG93TW9yZWJ0bi5maW5kKFwiLmJ1dHRvblwiKS50ZXh0KHRleHRTaG93TW9yZSk7XG4gICAgICAgICAgICAgICAgZGVzY01vYmlsZS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwiMzAwcHhcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNob3dNb3JlYnRuLnJlbW92ZUNsYXNzKFwic2hvd1wiKS5hZGRDbGFzcyhcImxlc3NcIik7XG4gICAgICAgICAgICAgICAgZGVzY01vYmlsZS5jc3MoXCJtYXgtaGVpZ2h0XCIsIFwidW5zZXRcIik7XG4gICAgICAgICAgICAgICAgc2hvd01vcmVidG4uZmluZChcIi5idXR0b25cIikudGV4dCh0ZXh0U2hvd0xlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja1Byb2R1Y3QoKSB7XG4gICAgICAgIGNvbnN0IHJlbGF0ZWRQcm9kdWN0cyA9ICQoXCIjaGFsby1yZWxhdGVkLXByb2R1Y3RzXCIpLFxuICAgICAgICAgICAgc2ltaWxhclByb2R1Y3RzID0gJChcIiNoYWxvLXNpbWlsYXItcHJvZHVjdHNcIik7XG5cbiAgICAgICAgaWYgKCQoXCIuaGFsby1wcm9kdWN0Vmlldy1kaWdpdGFsXCIpKSByZXR1cm47XG5cbiAgICAgICAgaWYgKCFyZWxhdGVkUHJvZHVjdHMuZmluZChcIi5zbGljay10cmFja1wiKS5odG1sKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZWxhdGVkUHJvZHVjdHMuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFzaW1pbGFyUHJvZHVjdHMuZmluZChcIi5zbGljay10cmFja1wiKS5odG1sKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzaW1pbGFyUHJvZHVjdHMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogQnV0dG9uIENvcHkgRGlnaXRhbCBMaW5rICovXG4gICAgY29weURpZ2l0YWxMaW5rKCkge1xuICAgICAgICBjb25zdCBjb3B5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3B5X19idXR0b25cIiksXG4gICAgICAgICAgICBjb3B5TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29wcHlfX2xpbmstdXJsXCIpO1xuXG4gICAgICAgIGlmICghY29weUJ1dHRvbiB8fCAhY29weUxpbmspIHJldHVybjtcblxuICAgICAgICBjb3B5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdGVtcElucHV0LnZhbHVlID0gY29weUxpbmsudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBJbnB1dCk7XG4gICAgICAgICAgICB0ZW1wSW5wdXQuc2VsZWN0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRlbXBJbnB1dCk7XG5cbiAgICAgICAgICAgIGNvcHlCdXR0b24uaW5uZXJIVE1MID1cbiAgICAgICAgICAgICAgICAnPHNwYW4gY2xhc3M9XCJpY29uIGljb24tLWNoZWNrXCI+PHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1jaGVja1wiPjwvdXNlPjwvc3ZnPjwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjogIzI4YTIxMFwiPkNvcGlhdDwvc3Bhbj4nO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBEaWdpdGFsIERvd25sb2FkIFNpZGViYXIgKi9cbiAgICBkaWdpdGFsRG93bmxvYWRTaWRlYmFyKCkge1xuICAgICAgICBjb25zdCBlbWFpbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlnaXRhbC1wcm9kdWN0LWJ1dHRvbi0tZW1haWxcIik7XG4gICAgICAgIGNvbnN0IGRvd25sb2FkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaWdpdGFsLXByb2R1Y3QtYnV0dG9uLS1kb3dubG9hZFwiKTtcbiAgICAgICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlnaXRhbC1vdmVybGF5XCIpO1xuICAgICAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaWdpdGFsLXNpZGViYXJcIik7XG4gICAgICAgIGNvbnN0IGVtYWlsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZW1haWwtY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgZG93bmxvYWRDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZC1jb250ZW50XCIpO1xuICAgICAgICBjb25zdCBzaWRlYmFyQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpZ2l0YWwtc2lkZWJhci1jbG9zZVwiKTtcblxuICAgICAgICBpZiAoIWVtYWlsQnV0dG9uIHx8ICFkb3dubG9hZEJ1dHRvbikgcmV0dXJuO1xuXG4gICAgICAgIGVtYWlsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgZW1haWxDb250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICBkb3dubG9hZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGVtYWlsQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBkb3dubG9hZENvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgb3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNpZGViYXJDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKiBQcm9kdWN0IGRpZ2l0YWwgRG93bmxvYWQgZnVuY3Rpb24gKi9cbiAgICBwcm9kdWN0RGlnaXRhbERvd25sb2FkKCkge1xuICAgICAgICBsZXQgZG93bmxvYWRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpZ2l0YWwtZG93bmxvYWQtY2FyZFwiKTtcbiAgICAgICAgY29uc3QgZm9ybUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZC1jb250ZW50IC5mb3JtLWlucHV0XCIpO1xuICAgICAgICBjb25zdCBmb3JtRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rvd25sb2FkLWNvbnRlbnQgLmZvcm0tZmllbGRcIik7XG4gICAgICAgIGNvbnN0IGZvcm1BY3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkb3dubG9hZC1jb250ZW50IC5mb3JtLWFjdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RpZ2l0YWwtb3ZlcmxheVwiKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlnaXRhbC1zaWRlYmFyXCIpOyBcbiAgICAgICAgbGV0IGltYWdlU2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZG93bmxvYWQtY29udGVudCAuZGlnaXRhbC1pbWFnZV9fbGlua1wiKTtcbiAgICAgICAgbGV0IGltYWdlTGluayA9IGltYWdlU2lkZWJhci5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuICAgICAgICBsZXQgZG93bmxvYWRDbGlja2VkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKCFkb3dubG9hZEJ1dHRvbiB8fCAhaW1hZ2VMaW5rKSByZXR1cm47XG5cbiAgICAgICAgaW1hZ2VTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb3dubG9hZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSBmb3JtSW5wdXQudmFsdWUudHJpbSgpO1xuICAgIFxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkRW1haWwoZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBmb3JtRmllbGQuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaWdpdGFsLWRvd25sb2FkX19zdWNjZXNzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoND5UaGFuayBZb3UhPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPHA+SWYgeW91ciBkb3dubG9hZCBkb2VzbuKAmXQgb3BlbiBhdXRvbWF0aWNhbGx5LCBwbGVhc2UgPGEgaHJlZj1cIiR7aW1hZ2VMaW5rfVwiIHRhcmdldD1cIl9ibGFua1wiPmNsaWNrIGhlcmU8L2E+LjwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgICAgICBmb3JtQWN0aW9ucy5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIiNcIiBpZD1cImRpZ2l0YWwtZG93bmxvYWQtY2FyZFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tdGVydGlhcnkgYmFjay10by1kaWdpdGFsLWNhcmRcIj5CYWNrIHRvIEVjYXJkczwvYT4nO1xuXG4gICAgICAgICAgICBsZXQgYmFja0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlnaXRhbC1kb3dubG9hZC1jYXJkLmJhY2stdG8tZGlnaXRhbC1jYXJkXCIpO1xuXG4gICAgICAgICAgICBiYWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBvdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFkb3dubG9hZENsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihgJHtpbWFnZUxpbmt9YCwgXCJfYmxhbmtcIik7XG4gICAgICAgICAgICAgICAgZG93bmxvYWRDbGlja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBpc1ZhbGlkRW1haWwoZW1haWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsUmVnZXggPSAvXlthLXpBLVowLTkuXy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsNH0kLztcbiAgICAgICAgICAgIHJldHVybiBlbWFpbFJlZ2V4LnRlc3QoZW1haWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcbmltcG9ydCB7IHNhZmVTdHJpbmcgfSBmcm9tICcuLi9jb21tb24vdXRpbHMvc2FmZS1zdHJpbmcnO1xuaW1wb3J0IHsgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9IGZyb20gJy4uL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kcmV2aWV3c0NvbnRlbnQyID0gJCgnI3RhYi1yZXZpZXdzJyk7XG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlID0gJCgnW2RhdGEtY29sbGFwc2libGVdJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMuaW5pdExpbmtCaW5kKCk7XG4gICAgICAgIHRoaXMuaW5qZWN0UGFnaW5hdGlvbkxpbmsoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZVJldmlld3MoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPbiBpbml0aWFsIHBhZ2UgbG9hZCwgdGhlIHVzZXIgY2xpY2tzIG9uIFwiKDEyIFJldmlld3MpXCIgbGlua1xuICAgICAqIFRoZSBicm93c2VyIGp1bXBzIHRvIHRoZSByZXZpZXcgcGFnZSBhbmQgc2hvdWxkIGV4cGFuZCB0aGUgcmV2aWV3cyBzZWN0aW9uXG4gICAgICovXG4gICAgaW5pdExpbmtCaW5kKCkge1xuICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5yZXZpZXctbGluayBhJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJCgnLmlzLW9wZW5bZGF0YS1jb2xsYXBzaWJsZV0nLCAkKCcudGFiLWNvbnRlbnQnKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG5cbiAgICAgICAgICAgICQoJ1tocmVmPVwiI3RhYi1yZXZpZXdzLW1vYmlsZVwiXScsICQoJy5wcm9kdWN0Vmlldy10YWI6bm90KC5wcm9kdWN0Vmlldy10YWItMiknKSkudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG5cbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEwMjUpIHtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQyLm9mZnNldCgpLnRvcCAtICQoJy5oZWFkZXInKS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICB9LCA3MDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGhpcy4kcmV2aWV3c0NvbnRlbnQub2Zmc2V0KCkudG9wIC0gJCgnLmhlYWRlcicpLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIH0sIDcwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBzYWZlU3RyaW5nKHRoaXMuY29udGV4dC5yZXZpZXdSYXRpbmcpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHNhZmVTdHJpbmcodGhpcy5jb250ZXh0LnJldmlld1N1YmplY3QpLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogc2FmZVN0cmluZyh0aGlzLmNvbnRleHQucmV2aWV3Q29tbWVudCksXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJzYWZlU3RyaW5nIiwic3RyIiwiZCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsImJvZHkiLCJ0ZXh0Q29udGVudCIsInV0aWxzIiwibW9kYWxGYWN0b3J5Iiwic2hvd0FsZXJ0TW9kYWwiLCJNb2RhbEV2ZW50cyIsImhhbG9DYWxjdWxhdGVGcmVlU2hpcHBpbmciLCIkc2NvcGUiLCJjb250ZXh0IiwidGhpc1Byb3VjdElkIiwicGFyc2VJbnQiLCJwcm9kdWN0SWQiLCIkcmVsYXRlVGFiIiwiJCIsIiRidW5kbGUiLCIkYnVuZGxlTGlzdCIsImZpbmQiLCIkYnVuZGxlRGV0YWlsIiwibW9kYWwiLCJjdXJyZW5jeSIsIm1vbmV5Iiwic2hvd0J1bmRsZSIsImRvY3VtZW50Iiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJub3QiLCJyZW1vdmVDbGFzcyIsIm5leHQiLCJoYXNDbGFzcyIsImFkZENsYXNzIiwidGFyZ2V0IiwiY2xvc2VzdCIsImxlbmd0aCIsImlkIiwiYXR0ciIsInJlcGxhY2UiLCJwcm9kdWN0SW1hZ2UiLCJwcm9kdWN0IiwiaXMiLCJ0b3RhbFByaWNlIiwiJGZvcm0iLCJhcnJQcm8iLCJBcnJheSIsImVhY2giLCJpbmRleCIsInZhbCIsInB1c2giLCJjaGVjayIsImNoZWNrUHJvZHVjdCIsImsiLCJzaG93IiwiYWRkVG9DYXJ0IiwiZXJyb3JNZXNzYWdlIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImlubmVyVGV4dCIsIm9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIml0ZW0iLCJpbWFnZSIsInByb2RCdW5kbGVJZCIsInRvdGFsQmxvY2siLCJmaXJzdEl0ZW0iLCJhcHBlbmQiLCJwcm9kdWN0Q3VzdG9tRmllbGRzIiwib2JqIiwibmFtZSIsIkpTT04iLCJwYXJzZSIsInZhbHVlIiwiZ3JlcCIsIm51bSIsImxpc3QiLCJkYXRhIiwicElkIiwidW5kZWZpbmVkIiwiYXBpIiwiZ2V0QnlJZCIsImVyciIsInJlc3BvbnNlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJjb25zb2xlIiwibG9nIiwic2hvd0xpc3QiLCJsaXN0RmlsdGVyIiwidW5pcXVlIiwiaSIsImZvcm0iLCJoYXNPcHRpb25zIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJ0cmltIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImh0bWwiLCJzZXRQcm9kdWN0VmFyaWFudCIsInByb2R1Y3RPcHRpb25zIiwic2hvd1NsaWNrU2xpZGVyIiwid3JhcCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwibW9iaWxlRmlyc3QiLCJpbmZpbml0ZSIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjaGVja0JlZm9yZUFkZCIsIiRhdHRyaWJ1dGVzIiwiYXR0IiwicHJvcCIsImZvY3VzIiwiYXJyUCIsIndpbmRvdyIsIkZvcm1EYXRhIiwicHJvZCIsImNhcnQiLCJpdGVtQWRkIiwiZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtIiwiZXJyb3IiLCJhbGVydCIsImhpZGUiLCJ0aGVtZVNldHRpbmdzIiwiaGFsb0FkZFRvQ2FydEFjdGlvbiIsImxvYWRpbmdDbGFzcyIsIiRib2R5IiwiJGNhcnREcm9wZG93biIsIiRjYXJ0TG9hZGluZyIsInRvZ2dsZUNsYXNzIiwiZ2V0Q29udGVudCIsInF1YW50aXR5IiwidHJpZ2dlciIsInJlZGlyZWN0VG8iLCJ1cmxzIiwiaXNSdW5uaW5nSW5JZnJhbWUiLCJzZWxmIiwidG9wIiwiZSIsInVybCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwidG90YWwiLCJzeW1ib2wiLCJzeW1ib2xDaGFuZ2UiLCJkZWNpbWFsUGxhY2VzIiwiZGVjaW1hbFNlcGFyYXRvciIsInRob3VzYW5kc1NlcGFyYXRvciIsInN5bWJvbExvY2F0aW9uIiwiY3VyciIsInRva2VuMSIsInRva2VuMiIsImRlY2ltYWxfcGxhY2VzIiwiZGVjaW1hbF90b2tlbiIsInRob3VzYW5kc190b2tlbiIsImN1cnJlbmN5X2xvY2F0aW9uIiwiY3VycmVuY3lfdG9rZW4iLCJwcmljZSIsInBhcnNlRmxvYXQiLCJpbmRleE9mIiwiZm9ybWF0TW9uZXkiLCJuIiwiYyIsInQiLCJpc05hTiIsIk1hdGgiLCJhYnMiLCJzIiwiU3RyaW5nIiwiTnVtYmVyIiwidG9GaXhlZCIsImoiLCJzdWJzdHIiLCJzbGljZSIsInByb2R1Y3RPcHRpb25zQ2hhbmdlZCIsInVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMiLCJvcHRpb25MYWJlbCIsImNoaWxkcmVuIiwib3B0aW9uVGl0bGUiLCJzcGxpdCIsInJlcXVpcmVkIiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiaXNTYXRpc2ZpZWQiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImV2ZXJ5Iiwic2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImRhdGVTdHJpbmciLCJtYXAiLCJ4Iiwiam9pbiIsInRleHQiLCJjaGVja2VkIiwibGFiZWwiLCJsYWJlbHMiLCJ0aXRsZSIsIiRjaGFuZ2VkT3B0aW9uIiwicGFyZW50cyIsInByb2R1Y3RBdHRyaWJ1dGVzRGF0YSIsInByb2R1Y3RBdHRyaWJ1dGVzQ29udGVudCIsInNob3dQcm9kdWN0SW1hZ2UiLCJiZWhhdmlvciIsIm91dF9vZl9zdG9ja19iZWhhdmlvciIsImluU3RvY2tJZHMiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwib3V0T2ZTdG9ja01lc3NhZ2UiLCJvdXRfb2Zfc3RvY2tfbWVzc2FnZSIsImF0dHJpYnV0ZSIsIiRhdHRyaWJ1dGUiLCJhdHRySWQiLCJlbmFibGVBdHRyaWJ1dGUiLCJkaXNhYmxlQXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlVHlwZSIsImRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUiLCIkc2VsZWN0IiwicGFyZW50IiwidG9nZ2xlT3B0aW9uIiwiZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHBhcmVudCIsIl9pc1BsYWluT2JqZWN0IiwibWFpbkltYWdlVXJsIiwidG9vbHMiLCJpbWFnZVNyY3NldCIsImdldFNyY3NldCIsInByb2R1Y3RnYWxsZXJ5X3NpemUiLCJ2aWV3TW9kZWwiLCJnZXRWaWV3TW9kZWwiLCJfaXNOdW1iZXIiLCJzdG9jayIsImhhbG9fc3RvY2tfbGV2ZWxfbGltaXQiLCIkc3RvY2tMZWZ0V3JhcHBlciIsIiRzdG9ja0xlZnQiLCJzaG93TWVzc2FnZUJveCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJfaXNPYmplY3QiLCJ1cGRhdGVQcmljZVZpZXciLCJwcm9kdWN0Q2hlY2tib3giLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwicHJpY2VMYWJlbCIsInByaWNlRGF0YSIsIiR3ZWlnaHQiLCIkaW5jcmVtZW50cyIsIiRhZGRUb0NhcnQiLCIkd2lzaGxpc3RWYXJpYXRpb24iLCIkY29udGFpbmVyIiwiJGlucHV0IiwiJHNrdSIsIiR1cGMiLCIkdGV4dCIsIiRidWxrUHJpY2luZyIsIm1lc3NhZ2UiLCIkbWVzc2FnZUJveCIsImNsZWFyUHJpY2luZ05vdEZvdW5kIiwid2l0aF90YXgiLCJmb3JtYXR0ZWQiLCJ3aXRob3V0X3RheCIsInJycF93aXRoX3RheCIsInJycF93aXRob3V0X3RheCIsInNhdmVkIiwibm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgiLCJub25fc2FsZV9wcmljZV93aXRob3V0X3RheCIsImZvcm1EYXRhIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsIl9zdGVwIiwiZG9uZSIsIl9zdGVwJHZhbHVlIiwia2V5IiwiRmlsZSIsInNpemUiLCJnZXRQcm9kdWN0IiwiYXJyIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidG9rZW4iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImN1ckNvZGUiLCJ0aGVuIiwicmVzIiwianNvbiIsInJlbmRlclByb2R1Y3QiLCJjdXJEaXNwbGF5Iiwic3ltYm9sUGxhY2VtZW50IiwiZGVjaW1hbFRva2VuIiwidGhvdXNhbmRzVG9rZW4iLCJoYWxvX2NhcmRfdGl0bGUiLCJwYXRoIiwicmVzdHJpY3RfdG9fbG9naW4iLCJwcmljZXMiLCJwcmljZVJhbmdlIiwibWluIiwibWF4IiwicHJpY2VfcmFuZ2VzIiwicHJpY2VNaW4iLCJwcmljZU1heCIsInByaWNlRGVmIiwicmV0YWlsUHJpY2UiLCJiYXNlUHJpY2UiLCJwcmljZUJhcyIsInByaWNlUmV0IiwiaHRtbF9jYXJkIiwiZW50aXR5SWQiLCJkZWZhdWx0SW1hZ2UiLCJpbWc3MHB4IiwicHJldklkIiwiJHByb2RJY29ucyIsIiRwcm9kV3JhcCIsInJlbW92ZSIsIm5leHRJZCIsIm5leHRMaW5rIiwicHJldkxpbmsiLCJzaXRlIiwicHJvZHVjdHMiLCJlZGdlcyIsImRpc3BsYXkiLCJzd2FsIiwic2Nyb2xsIiwib2Zmc2V0IiwiaF9zdGF0YyIsIm91dGVySGVpZ2h0Iiwic2Nyb2xsVG9wIiwiY29sb3IiLCIkc3RpY2t5Iiwid2lkdGgiLCJjc3MiLCJvbmxvYWQiLCJTb3J0YWJsZSIsIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJoYWxvWW91dHViZUNhcm91c2VsIiwiaGFsb05leHRQcm9kdWN0cyIsImhhbG9Ob3RpZnlNZSIsImhhbG9TdGlja3lBZGRUb0NhcnQiLCJoYWxvQnVuZGxlUHJvZHVjdHMiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiX2luaGVyaXRzTG9vc2UiLCJfdGhpcyIsImNhbGwiLCJocmVmIiwiJHJldmlld0xpbmsiLCIkYnVsa1ByaWNpbmdMaW5rIiwicmV2aWV3TW9kYWwiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInBhdGhuYW1lIiwidmFsaWRhdG9yIiwicHJvZHVjdERldGFpbHMiLCJCQ0RhdGEiLCJwcm9kdWN0X2F0dHJpYnV0ZXMiLCJidWxrUHJpY2luZ0hhbmRsZXIiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsInZpZXdpbmdQcm9kdWN0Iiwic29sZFByb2R1Y3QiLCJjb3VudERvd25Qcm9kdWN0IiwicHJvZHVjdFZpZXdTaGFyZUxpbmsiLCJjb21wYXJlQ29sb3JzIiwidG9nZ2xlVGFicyIsInByb2R1Y3RDdXN0b21UYWIiLCJwcm9kdWN0U2hpcHBpbmdUYWIiLCJzaG93bW9yZURlc2NyaXB0aW9uIiwiY29weURpZ2l0YWxMaW5rIiwiZGlnaXRhbERvd25sb2FkU2lkZWJhciIsInByb2R1Y3REaWdpdGFsRG93bmxvYWQiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIl8iLCJpbnB1dCIsIm1zZ1NwYW5JZCIsInNpYmxpbmdzIiwiJHdyYXBwZXIiLCJudW1iZXJzUHJvZHVjdF90ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9wcm9kdWN0cyIsIm51bWJlcnNIb3Vyc190ZXh0IiwicHJvZHVjdF9zb2xkUHJvZHVjdF9ob3VycyIsInNvbGRQcm9kdWN0VGV4dCIsInByb2R1Y3Rfc29sZFByb2R1Y3RfdGV4dCIsInNvbGRQcm9kdWN0VGV4dDIiLCJwcm9kdWN0X3NvbGRQcm9kdWN0X2hvdXJzX3RleHQiLCJudW1iZXJzUHJvZHVjdExpc3QiLCJudW1iZXJzUHJvZHVjdEl0ZW0iLCJmbG9vciIsInJhbmRvbSIsIm51bWJlcnNIb3Vyc0xpc3QiLCJudW1iZXJzSG91cnNJdGVtIiwiY291bnREb3duIiwiY291bnREb3duRGF0ZSIsIkRhdGUiLCJnZXRUaW1lIiwic2VmdCIsImNvdW50ZG93bmZ1bmN0aW9uIiwic2V0SW50ZXJ2YWwiLCJub3ciLCJkaXN0YW5jZSIsImNsZWFySW50ZXJ2YWwiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsInN0ckNvdW50RG93biIsIiRzaGFyZUxpbmtCdG4iLCIkc2hhcmVMaW5rUG9wdXAiLCIkc2hhcmVMaW5rQ2xvc2UiLCIkc2hhcmVMaW5rQ29weSIsInNsaWRlVXAiLCJzbGlkZURvd24iLCJleGVjQ29tbWFuZCIsInZpZXdlclRleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3RleHQiLCJudW1iZXJzVmlld2VyX3RleHQiLCJwcm9kdWN0X3ZpZXdpbmdQcm9kdWN0X3ZpZXdlciIsIm51bWJlcnNWaWV3ZXJMaXN0IiwidGltZVZpZXdlciIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfY2hhbmdlIiwibnVtYmVyc1ZpZXdlckl0ZW0iLCIkc3dhdGNoV3JhcHBlciIsIiRpbWFnZVdyYXBwZXIiLCIkdGV4dFdyYXBwZXIiLCIkdGhpcyIsIiRjb2xvciIsIiRjb2xvcjIiLCIkY29sb3IzIiwiJGltZyIsIiRwYXR0ZXJuIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsImFuaW1hdGlvbiIsInNob3dfcHJvZHVjdF9kZXRhaWxzX3RhYnMiLCJzaG93X2N1c3RvbV90YWIiLCJzaG93X2N1c3RvbV90YWJfdHlwZSIsInNob3dfY3VzdG9tX3RhYl9saW5rIiwib3B0aW9uIiwiZ2V0UGFnZSIsImFwcGVuZFRvIiwic2hvd19zaGlwcGluZ190YWIiLCJzaG93X3NoaXBwaW5nX3RhYl90eXBlIiwic2hvd19zaGlwcGluZ190YWJfbGluayIsInNob3dNb3JlYnRuIiwiZGVzY01vYmlsZSIsInRleHRTaG93TW9yZSIsInRleHRTaG93TGVzcyIsInJlbGF0ZWRQcm9kdWN0cyIsInNpbWlsYXJQcm9kdWN0cyIsImNvcHlCdXR0b24iLCJjb3B5TGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wSW5wdXQiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwiZW1haWxCdXR0b24iLCJkb3dubG9hZEJ1dHRvbiIsIm92ZXJsYXkiLCJzaWRlYmFyIiwiZW1haWxDb250ZW50IiwiZG93bmxvYWRDb250ZW50Iiwic2lkZWJhckNsb3NlIiwic3R5bGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JtSW5wdXQiLCJmb3JtRmllbGQiLCJmb3JtQWN0aW9ucyIsImltYWdlU2lkZWJhciIsImltYWdlTGluayIsImRvd25sb2FkQ2xpY2tlZCIsImVtYWlsIiwiaXNWYWxpZEVtYWlsIiwiYmFja0J1dHRvbiIsIm9wZW4iLCJlbWFpbFJlZ2V4IiwidGVzdCIsImRlZmF1bHQiLCJub2QiLCJDb2xsYXBzaWJsZUV2ZW50cyIsImZvcm1zIiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsIl9kZWZhdWx0Iiwic3VibWl0IiwidGFwIiwiJHJldmlld3NDb250ZW50IiwiJHJldmlld3NDb250ZW50MiIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiJGNvbnRlbnQiLCJjbGljayIsImFuaW1hdGUiLCJoZWlnaHQiLCJoYXNoIiwiJG5leHRMaW5rIiwiJHByZXZMaW5rIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJyZXN1bHQiLCJyZXZpZXdFbWFpbCIsIlZpZGVvR2FsbGVyeSIsIiRlbGVtZW50IiwiJHBsYXllciIsIiR2aWRlb3MiLCJjdXJyZW50VmlkZW8iLCJiaW5kRXZlbnRzIiwic2VsZWN0TmV3VmlkZW8iLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==