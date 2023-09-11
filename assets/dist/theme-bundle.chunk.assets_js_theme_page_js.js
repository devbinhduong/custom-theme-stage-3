"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_page_js"],{

/***/ "./assets/js/theme/halothemes/haloProductLookbook.js":
/*!***********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloProductLookbook.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(element) {
  var $element = element,
    $popup = $element.find('.halo-lookbook-popup');
  var $options = {
    template: 'halothemes/lookbook/halo-lookbook-tmp'
  };
  $element.find('[data-product-lookbook]').on('click', function (event) {
    $popup.removeClass('is-open').empty();
    var $prodId = $(event.currentTarget).data('product-id'),
      position = $(event.currentTarget).offset(),
      container = $element.offset();
    if ($prodId != undefined) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["default"].api.product.getById($prodId, $options, function (err, response) {
        if (err) {
          return false;
        }
        $popup.html(response);
      });
      if ($(window).width() >= 551) {
        $popup.css({
          'top': position.top - container.top - 200,
          'left': position.left - container.left + 30
        });
      } else {
        $popup.css({
          'top': position.top - container.top + 15,
          'left': 15
        });
      }
      $popup.addClass("is-open");
    }
  });
  $(document).on('click', '.halo-lookbook-close', function (event) {
    event.preventDefault();
    if ($popup.hasClass("is-open")) {
      $popup.removeClass("is-open");
    }
  });
  $(document).on('click', function (event) {
    if ($popup.hasClass("is-open")) {
      if ($(event.target).closest($popup).length === 0 && $(event.target).closest('[data-product-lookbook]').length === 0) {
        $popup.removeClass("is-open");
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/halothemes/haloSidebarToggle.js":
/*!*********************************************************!*\
  !*** ./assets/js/theme/halothemes/haloSidebarToggle.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  $('.page-sidebar-mobile').on('click', function (event) {
    if ($(event.currentTarget).hasClass('is-open')) {
      $(event.currentTarget).removeClass('is-open');
      $('.page-sidebar').removeClass('is-open');
      $('body').removeClass('openSidebar');
    } else {
      $(event.currentTarget).addClass('is-open');
      $('.page-sidebar').addClass('is-open');
      $('body').addClass('openSidebar');
    }
  });
  $('.page-sidebar .page-sidebar-close .close').on('click', function (event) {
    event.preventDefault();
    $('.page-sidebar-mobile').removeClass('is-open');
    $('.page-sidebar').removeClass('is-open');
    $('body').removeClass('openSidebar');
  });
  $(document).on('click', function (event) {
    if ($('.page-sidebar').hasClass('is-open')) {
      if ($(event.target).closest('.page-sidebar').length === 0 && $(event.target).closest('.page-sidebar-mobile').length === 0) {
        $('.page-sidebar-mobile').removeClass('is-open');
        $('.page-sidebar').removeClass('is-open');
        $('body').removeClass('openSidebar');
      }
    }
  });
}

/***/ }),

/***/ "./assets/js/theme/page.js":
/*!*********************************!*\
  !*** ./assets/js/theme/page.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* harmony import */ var _halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloProductLookbook */ "./assets/js/theme/halothemes/haloProductLookbook.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Page = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Page, _PageManager);
  function Page(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Page.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_halothemes_haloProductLookbook__WEBPACK_IMPORTED_MODULE_3__["default"])($('#halo-lookbook-slider'));
    this.faqsToggle();
    this.lookbookSlider();
  };
  _proto.faqsToggle = function faqsToggle() {
    $('.faq-desc').appendTo('.halo-faqs-sidebar .haloFaqs-header__des');
    $('.page-normal .card .title').on('click', function (event) {
      event.preventDefault();
      var target = $(event.currentTarget);
      $('.page-normal .card .title').not(target).removeClass('collapsed');
      if (target.hasClass('collapsed')) {
        target.removeClass('collapsed');
        target.parents('.card').css('border-bottom-color', '#F7F3E8');
      } else {
        target.addClass('collapsed');
        target.parents('.card').css('border-bottom-color', 'none');
      }
      $('.page-normal .card').each(function (index, element) {
        if ($('.title', element).hasClass('collapsed')) {
          $(element).find('.collapse').slideDown("slow");
        } else {
          $(element).find('.collapse').slideUp("slow");
        }
      });
    });
  };
  _proto.lookbookSlider = function lookbookSlider() {
    if ($('#halo-lookbook-slider').length > 0) {
      var $block = $('#halo-lookbook-slider'),
        wrap = $block.find('.halo-lookbook-slider');
      slickCarousel(wrap);
    }
    function slickCarousel(wrap) {
      if (wrap.length > 0) {
        wrap.slick({
          dots: true,
          arrows: false,
          mobileFirst: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          infinite: true,
          fade: true,
          responsive: [{
            breakpoint: 1025,
            settings: {
              dots: false,
              arrows: true
            }
          }]
        });
      }
    }
  };
  return Page;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wYWdlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUUvQyw2QkFBZSxvQ0FBU0MsT0FBTyxFQUFFO0VBQzdCLElBQUlDLFFBQVEsR0FBR0QsT0FBTztJQUNsQkUsTUFBTSxHQUFHRCxRQUFRLENBQUNFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztFQUVsRCxJQUFNQyxRQUFRLEdBQUc7SUFDYkMsUUFBUSxFQUFFO0VBQ2QsQ0FBQztFQUVESixRQUFRLENBQUNFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDRyxFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUMxREwsTUFBTSxDQUFDTSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBRXJDLElBQUlDLE9BQU8sR0FBR0MsQ0FBQyxDQUFDSixLQUFLLENBQUNLLGFBQWEsQ0FBQyxDQUFDQyxJQUFJLENBQUMsWUFBWSxDQUFDO01BQ25EQyxRQUFRLEdBQUdILENBQUMsQ0FBQ0osS0FBSyxDQUFDSyxhQUFhLENBQUMsQ0FBQ0csTUFBTSxDQUFDLENBQUM7TUFDMUNDLFNBQVMsR0FBR2YsUUFBUSxDQUFDYyxNQUFNLENBQUMsQ0FBQztJQUVqQyxJQUFHTCxPQUFPLElBQUlPLFNBQVMsRUFBQztNQUNwQmxCLHNFQUFTLENBQUNvQixPQUFPLENBQUNDLE9BQU8sQ0FBQ1YsT0FBTyxFQUFFTixRQUFRLEVBQUUsVUFBQ2lCLEdBQUcsRUFBRUMsUUFBUSxFQUFLO1FBQzVELElBQUdELEdBQUcsRUFBQztVQUNILE9BQU8sS0FBSztRQUNoQjtRQUVBbkIsTUFBTSxDQUFDcUIsSUFBSSxDQUFDRCxRQUFRLENBQUM7TUFDekIsQ0FBQyxDQUFDO01BRUYsSUFBSVgsQ0FBQyxDQUFDYSxNQUFNLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsSUFBSSxHQUFHLEVBQUU7UUFDMUJ2QixNQUFNLENB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azovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvUHJvZHVjdExvb2tib29rLmpzIiwid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZS5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL3BhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIHZhciAkZWxlbWVudCA9IGVsZW1lbnQsXG4gICAgICAgICRwb3B1cCA9ICRlbGVtZW50LmZpbmQoJy5oYWxvLWxvb2tib29rLXBvcHVwJyk7XG4gICAgICAgIFxuICAgIGNvbnN0ICRvcHRpb25zID0ge1xuICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvbG9va2Jvb2svaGFsby1sb29rYm9vay10bXAnXG4gICAgfTtcblxuICAgICRlbGVtZW50LmZpbmQoJ1tkYXRhLXByb2R1Y3QtbG9va2Jvb2tdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKS5lbXB0eSgpO1xuXG4gICAgICAgIHZhciAkcHJvZElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0LWlkJyksXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkub2Zmc2V0KCksXG4gICAgICAgICAgICBjb250YWluZXIgPSAkZWxlbWVudC5vZmZzZXQoKTtcblxuICAgICAgICBpZigkcHJvZElkICE9IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKCRwcm9kSWQsICRvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGVycil7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcG9wdXAuaHRtbChyZXNwb25zZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDU1MSkge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wIC0gMjAwLCAnbGVmdCc6IHBvc2l0aW9uLmxlZnQgLSBjb250YWluZXIubGVmdCArIDMwfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRwb3B1cC5jc3Moeyd0b3AnOiBwb3NpdGlvbi50b3AgLSBjb250YWluZXIudG9wICsgMTUsICdsZWZ0JzogMTV9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKFwiaXMtb3BlblwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5oYWxvLWxvb2tib29rLWNsb3NlJywgZXZlbnQgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICgkcG9wdXAuaGFzQ2xhc3MoXCJpcy1vcGVuXCIpKSB7XG4gICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmKCRwb3B1cC5oYXNDbGFzcyhcImlzLW9wZW5cIikpIHtcbiAgICAgICAgICAgIGlmKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgkcG9wdXApLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWxvb2tib29rXScpLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICAkcG9wdXAucmVtb3ZlQ2xhc3MoXCJpcy1vcGVuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuU2lkZWJhcicpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblNpZGViYXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2Utc2lkZWJhciAucGFnZS1zaWRlYmFyLWNsb3NlIC5jbG9zZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKCcucGFnZS1zaWRlYmFyJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBhZ2Utc2lkZWJhcicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXItbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiIsImltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0IGhhbG9TaWRlYmFyVG9nZ2xlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZSc7XG5pbXBvcnQgaGFsb1Byb2R1Y3RMb29rYm9vayBmcm9tICcuL2hhbG90aGVtZXMvaGFsb1Byb2R1Y3RMb29rYm9vayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBoYWxvU2lkZWJhclRvZ2dsZSgpO1xuICAgICAgICBoYWxvUHJvZHVjdExvb2tib29rKCQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuZmFxc1RvZ2dsZSgpO1xuICAgICAgICB0aGlzLmxvb2tib29rU2xpZGVyKCk7XG4gICAgfVxuXG4gICAgZmFxc1RvZ2dsZSgpe1xuICAgICAgICAkKCcuZmFxLWRlc2MnKS5hcHBlbmRUbygnLmhhbG8tZmFxcy1zaWRlYmFyIC5oYWxvRmFxcy1oZWFkZXJfX2RlcycpO1xuXG4gICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCAudGl0bGUnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgJCgnLnBhZ2Utbm9ybWFsIC5jYXJkIC50aXRsZScpLm5vdCh0YXJnZXQpLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcblxuICAgICAgICAgICAgaWYodGFyZ2V0Lmhhc0NsYXNzKCdjb2xsYXBzZWQnKSl7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50cygnLmNhcmQnKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCcjRjdGM0U4Jyk7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZENsYXNzKCdjb2xsYXBzZWQnKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50cygnLmNhcmQnKS5jc3MoJ2JvcmRlci1ib3R0b20tY29sb3InLCdub25lJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5wYWdlLW5vcm1hbCAuY2FyZCcpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoJCgnLnRpdGxlJywgZWxlbWVudCkuaGFzQ2xhc3MoJ2NvbGxhcHNlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZURvd24oXCJzbG93XCIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5maW5kKCcuY29sbGFwc2UnKS5zbGlkZVVwKFwic2xvd1wiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbG9va2Jvb2tTbGlkZXIoKSB7XG4gICAgICAgIGlmKCQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgdmFyICRibG9jayA9ICQoJyNoYWxvLWxvb2tib29rLXNsaWRlcicpLFxuICAgICAgICAgICAgICAgIHdyYXAgPSAkYmxvY2suZmluZCgnLmhhbG8tbG9va2Jvb2stc2xpZGVyJyk7XG5cbiAgICAgICAgICAgIHNsaWNrQ2Fyb3VzZWwod3JhcCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzbGlja0Nhcm91c2VsKHdyYXApe1xuICAgICAgICAgICAgaWYod3JhcC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsidXRpbHMiLCJlbGVtZW50IiwiJGVsZW1lbnQiLCIkcG9wdXAiLCJmaW5kIiwiJG9wdGlvbnMiLCJ0ZW1wbGF0ZSIsIm9uIiwiZXZlbnQiLCJyZW1vdmVDbGFzcyIsImVtcHR5IiwiJHByb2RJZCIsIiQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YSIsInBvc2l0aW9uIiwib2Zmc2V0IiwiY29udGFpbmVyIiwidW5kZWZpbmVkIiwiYXBpIiwicHJvZHVjdCIsImdldEJ5SWQiLCJlcnIiLCJyZXNwb25zZSIsImh0bWwiLCJ3aW5kb3ciLCJ3aWR0aCIsImNzcyIsInRvcCIsImxlZnQiLCJhZGRDbGFzcyIsImRvY3VtZW50IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsInRhcmdldCIsImNsb3Nlc3QiLCJsZW5ndGgiLCJQYWdlTWFuYWdlciIsImhhbG9TaWRlYmFyVG9nZ2xlIiwiaGFsb1Byb2R1Y3RMb29rYm9vayIsIlBhZ2UiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImZhcXNUb2dnbGUiLCJsb29rYm9va1NsaWRlciIsImFwcGVuZFRvIiwibm90IiwicGFyZW50cyIsImVhY2giLCJpbmRleCIsInNsaWRlRG93biIsInNsaWRlVXAiLCIkYmxvY2siLCJ3cmFwIiwic2xpY2tDYXJvdXNlbCIsInNsaWNrIiwiZG90cyIsImFycm93cyIsIm1vYmlsZUZpcnN0Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJpbmZpbml0ZSIsImZhZGUiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=