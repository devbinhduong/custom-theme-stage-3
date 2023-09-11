"use strict";
(self["webpackChunkbigcommerce_hera"] = self["webpackChunkbigcommerce_hera"] || []).push([["assets_js_theme_blog_js"],{

/***/ "./assets/js/theme/blog.js":
/*!*********************************!*\
  !*** ./assets/js/theme/blog.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog)
/* harmony export */ });
/* harmony import */ var fancybox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fancybox */ "./node_modules/@fancyapps/ui/src/Fancybox/Fancybox.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./halothemes/haloAddOptionForProduct */ "./assets/js/theme/halothemes/haloAddOptionForProduct.js");
/* harmony import */ var _halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./halothemes/haloSidebarToggle */ "./assets/js/theme/halothemes/haloSidebarToggle.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Blog = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Blog, _PageManager);
  function Blog(context) {
    return _PageManager.call(this, context) || this;
  }
  var _proto = Blog.prototype;
  _proto.onReady = function onReady() {
    (0,_halothemes_haloSidebarToggle__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.loadOptionForProductCard(this.context);
    /* Animate Scroll*/
    this.animationScroll();
    this.getBlogPostByTag(".blog-tab-content__post--recenzii");
    this.getBlogPostByTag(".blog-tab-content__post--recomandari");
    this.getBlogPostByTag(".blog-tab-content__post--incurajare");
    this.getBlogPostByTag(".blog-tab-content__post--interviuri");
    this.viewMoreBlogCategory();
    this.getTimeBlog();
    this.similarArticle();
    this.customSpecialProduct(this.context);
    this.homeProductsListID();
  };
  _proto.loadOptionForProductCard = function loadOptionForProductCard(context) {
    if ($('#featured-products .card').length > 0) {
      (0,_halothemes_haloAddOptionForProduct__WEBPACK_IMPORTED_MODULE_3__["default"])(context, 'featured-products');
    }
  }

  /* Animation Scroll */;
  _proto.animationScroll = function animationScroll() {
    var itemLink = $('.tab-title__link');
    if (!itemLink) return;
    var _loop = function _loop() {
      var item = _step.value;
      var tabTile = item.closest('.tab-title__item');
      item.addEventListener('click', function (e) {
        e.preventDefault();
        /* Active Tab */
        var tabTileActive = document.querySelector('.tab-title__item.active');
        if (tabTileActive) tabTileActive.classList.remove('active');
        tabTile.classList.add('active');
        /* Scroll */
        var itemHref = item.getAttribute('href');
        $('html, body').animate({
          scrollTop: $(itemHref).offset().top - 200
        }, 1000);
      });
    };
    for (var _iterator = _createForOfIteratorHelperLoose(itemLink), _step; !(_step = _iterator()).done;) {
      _loop();
    }
  }

  /* Get Post By Tag Name*/;
  _proto.getBlogPostByTag = function getBlogPostByTag(elementClass) {
    var blogList = document.querySelector(elementClass),
      blogSection = blogList == null ? void 0 : blogList.closest(".blog-tab__content"),
      blogUrl = blogSection == null ? void 0 : blogSection.querySelector(".blog-tab-content__link").getAttribute("href");
    if (!blogList) return;
    fetch(blogUrl).then(function (response) {
      return response.text();
    }).then(function (content) {
      var template = document.createElement('div');
      template.innerHTML = content;
      var newContent = template.querySelector(".blog-catagory-content").innerHTML;
      blogList.innerHTML = newContent;
    })

    /* Show 9 blog post on desktop */.then(function () {
      if (window.innerWidth > 768) {
        var blogPost = blogSection.querySelectorAll(".blog-tab-content__post .blog");
        for (var i = 0; i < blogPost.length; i++) {
          if (i > 8) {
            blogPost[i].remove();
          }
        }
      }
    })

    /* Show 3 blog post on mobile */.then(function () {
      if (window.innerWidth < 768) {
        var blogPost = blogSection.querySelectorAll(".blog-tab-content__post .blog");
        for (var i = 0; i < blogPost.length; i++) {
          if (i > 2) {
            blogPost[i].remove();
          }
        }
      }
    }).then(function () {
      $(elementClass).slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        draggable: true,
        dots: true,
        /* Responsive */
        responsive: [{
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            dots: true,
            slidesToScroll: 1
          }
        }]
      });
    }).then(function () {
      var dot = blogSection.querySelectorAll(".slick-dots li");
      dot[0].click();
    })

    /* Scroll To Top After Click Above */.then(function () {
      window.scrollTo(0, 0);
    })

    /* Get Reading Time */.then(function () {
      var haloDescription = document.querySelectorAll('.blog-post.halo-description');
      for (var _iterator2 = _createForOfIteratorHelperLoose(haloDescription), _step2; !(_step2 = _iterator2()).done;) {
        var description = _step2.value;
        var descriptionText = description.textContent.trim();
        var extractedText = descriptionText.match(/(\d+\smin\sde\scitit)/i);
        if (extractedText) {
          extractedText = extractedText[0];
          var blogPostBody = description.closest('.blog-post-body');
          var customBlogReading = blogPostBody.querySelector('.custom-blog-reading');
          customBlogReading.textContent = extractedText;
          description.textContent = description.textContent.replace(extractedText, '').trim();
        }
      }
    })

    /* Get Matching Tags for Custom Post Detail Layout */.then(function () {
      var postDetailCustom = document.querySelector(".custom-post-detail-layout");
      if (postDetailCustom) {
        var showMatchingTags = function showMatchingTags() {
          /* Get All Tags of this post */
          var tags = document.querySelectorAll('.custom-post-tags .link');
          tags.forEach(function (tag) {
            /* Get Tag Name */
            var tagName = tag.innerText.trim();

            /* Find Div the samee with tag name */
            var correspondingDiv = document.getElementById('blog-' + tagName.toLowerCase());
            if (correspondingDiv) {
              correspondingDiv.style.display = 'block';
            }
          });
        };
        showMatchingTags();
      }
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  };
  _proto.viewMoreBlogCategory = function viewMoreBlogCategory() {
    var viewMoreButton = document.querySelector(".post-category-viewMore");
    var blogList = document.querySelector(".blog-catagory-content");
    if (!viewMoreButton) return;
    viewMoreButton.addEventListener("click", function (e) {
      e.preventDefault();
      var nextPage = $('.pagination-item--current').next(),
        link = nextPage.find("a").attr("href");
      fetch(link).then(function (response) {
        return response.text();
      }).then(function (content) {
        var template = document.createElement('div');
        template.innerHTML = content;
        var newContent = $(".blog-catagory-content .blog", $(template));
        var newPagination = $(".pagination-list", $(template));
        if (link) {
          $(newContent).appendTo(blogList);
        }
        $('.pagination-list').html(newPagination);
      })

      /* Remove View More Button */.then(function () {
        var nextPagination = document.querySelector(".pagination-item--next");
        if (!nextPagination) {
          viewMoreButton.style.display = "none";
        }
      })["catch"](function (error) {
        console.error('Error:', error);
      });
    });
  };
  _proto.getTimeBlog = function getTimeBlog() {
    var haloDescription = document.querySelectorAll('.blog-post.halo-description');
    var _loop2 = function _loop2() {
        descriptionText = haloDescription[i].innerHTML.trim();
        extractedText = descriptionText.match(/(\d+\smin\sde\scitit)/i);
        if (extractedText) {
          extractedText = extractedText[0];
          blogPostBody = haloDescription[i].closest('.blog');
          customBlogReading = blogPostBody.querySelector('.custom-blog-reading');
          customBlogReading.innerHTML = extractedText;

          /* Reading Time in blog detail page */
          var blogDetail = document.querySelector(".blog-post-detail .post-detail__top");
          if (blogDetail) {
            var convertTextToMinute = function convertTextToMinute(text) {
              var regex = /(\d+)\s*min\s+de\s+citit/;
              var match = text.match(regex);
              if (match && match[1]) {
                var minutes = parseInt(match[1]);
                return minutes + " minute";
              } else {
                return text;
              }
            };
            blogDetailReading = blogDetail.querySelector('.custom-blog-reading');
            var newReadingTime = convertTextToMinute(extractedText);
            if (i == 0) {
              blogDetailReading.innerHTML = convertTextToMinute(extractedText);
            }
          }
          haloDescription[i].innerHTML = haloDescription[i].innerHTML.replace(extractedText, '').trim();
        }
      },
      descriptionText,
      extractedText,
      blogPostBody,
      customBlogReading,
      blogDetailReading;
    for (var i = 0; i < haloDescription.length; i++) {
      _loop2();
    }
  };
  _proto.similarArticle = function similarArticle() {
    var _document$querySelect;
    var similarTagLink = (_document$querySelect = document.querySelector(".blog-post-tags .tags .tag .link")) == null ? void 0 : _document$querySelect.getAttribute("href");
    if (!similarTagLink) return;
    fetch(similarTagLink).then(function (response) {
      return response.text();
    }).then(function (content) {
      var template = document.createElement('div');
      template.innerHTML = content;
      var newContent = template.querySelector("#blog-listing-container .blog-tab__content .blog-catagory-content").innerHTML;
      newContent = newContent.split("<nav")[0];
      document.querySelector(".similar-blog__list").innerHTML = newContent;
    }).then(function () {
      var blogPost = document.querySelectorAll(".similar__wrapper .blog");
      for (var i = 0; i < blogPost.length; i++) {
        if (i > 2) {
          blogPost[i].remove();
        }
      }
    }).then(function () {
      var haloDescription = document.querySelectorAll('.similar__wrapper .blog-post.halo-description');
      for (var _iterator3 = _createForOfIteratorHelperLoose(haloDescription), _step3; !(_step3 = _iterator3()).done;) {
        var description = _step3.value;
        var descriptionText = description.textContent.trim();
        var extractedText = descriptionText.match(/(\d+\smin\sde\scitit)/i);
        if (extractedText) {
          extractedText = extractedText[0];
          var blogPostBody = description.closest('.similar__wrapper .blog-post-body');
          var customBlogReading = blogPostBody.querySelector('.similar__wrapper .custom-blog-reading');
          customBlogReading.textContent = extractedText;
          description.textContent = description.textContent.replace(extractedText, '').trim();
        }
      }
    }).then(function () {
      $(document).ready(function () {
        $('.similar-blog__list').slick({
          infinite: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          draggable: true,
          dots: true,
          /* Responsive */
          responsive: [{
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true
            }
          }, {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              variableWidth: true,
              dots: true,
              slidesToScroll: 1
            }
          }]
        });
      });
    });
  }

  /* Special Product Blog Detail */;
  _proto.customSpecialProduct = function customSpecialProduct($context) {
    var context = $context;
    var productId = $('[data-special-product-blog-id]').data('special-product-blog-id'),
      setFlag = false;
    var options = {
      template: 'halothemes/product/halo-special-product-blog-tmp'
    };
    $(window).on('scroll load', function () {
      var scroll = $(window).scrollTop(),
        header_height = $('.header').height();
      if (scroll > header_height) {
        setFlag = true;
      }
      if (setFlag) {
        if (!$('.halo-spacial-product .productView').length) {
          var viewingProduct = function viewingProduct(wrapper) {
            if (wrapper.length > 0) {
              var viewerText = context.themeSettings.product_viewingProduct_text,
                numbersViewer_text = context.themeSettings.product_viewingProduct_viewer,
                numbersViewerList = JSON.parse("[" + numbersViewer_text + "]");
              setInterval(function () {
                var numbersViewerItem = Math.floor(Math.random() * numbersViewerList.length);
                wrapper.html('<svg class="icon" aria-hidden="true"><use xlink:href="#icon-eye"/></svg>' + numbersViewerList[numbersViewerItem] + " " + viewerText);
                wrapper.removeClass('u-hiddenVisually');
              }, 10000);
            }
          };
          var initThumbnailsHeight = function initThumbnailsHeight($scope) {
            var el = $($scope);
            var $carousel_nav = el.find('.productView-nav'),
              $carousel_for = el.find('.productView-for');
            if ($carousel_for.find('.slick-arrow').length > 0) {
              $carousel_for.parent().addClass('arrows-visible');
            } else {
              $carousel_for.parent().addClass('arrows-disable');
            }
          };
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, options, function (err, response) {
            setFlag = false;
            var scope = '.halo-spacial-product';
            if (!$(scope).find('.productView').length) {
              $(scope).html(response);
              viewingProduct($(scope).find('.productView-ViewingProduct'));
              $(scope).find('[data-slick]').slick();
              $(scope).find('.productView-for').get(0).slick.setPosition();
              initThumbnailsHeight(scope);
              $(scope).on('click', '.dropdown-menu-button', function (event) {
                var $target = $(event.currentTarget);
                if ($target.hasClass('is-open')) {
                  $target.removeClass('is-open').attr('aria-expanded', false);
                  $target.siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                } else {
                  $target.addClass('is-open').attr('aria-expanded', true);
                  $target.siblings('.dropdown-menu').addClass('is-open').attr('aria-hidden', false);
                }
                event.stopPropagation();
              });
              $(document).on('click', function (event) {
                if ($(scope).find('.dropdown-menu-button').hasClass('is-open')) {
                  if ($(event.target).closest('.dropdown-menu-button').length === 0 && $(event.target).closest('.dropdown-menu').length === 0) {
                    $(scope).find('.dropdown-menu-button').removeClass('is-open').attr('aria-expanded', false);
                    $(scope).find('.dropdown-menu-button').siblings('.dropdown-menu').removeClass('is-open').attr('aria-hidden', true);
                  }
                }
              });
              var productDetails = new ProductDetails($(scope), context);
              productDetails.setProductVariant();
              return productDetails;
            }
          });
        }
        setFlag = false;
      }
    });
  };
  _proto.homeProductsListID = function homeProductsListID() {
    var $options;
    $(document).ready(function () {
      var tScroll = $(this).scrollTop();
      console.log("start");
      homeListId(tScroll);
    });
    $(window).on('scroll', function (e) {
      var $target = $(e.currentTarget);
      var tScroll = $target.scrollTop();
      homeListId(tScroll);
    });
    function homeListId(tScroll) {
      if ($('.productsByListId[data-list-id]').length > 0) {
        $('.productsByListId[data-list-id]').each(function (index, element) {
          var thisOffetTop = $(element).offset().top - screen.height * 1.5;
          if (tScroll > thisOffetTop && !$(element).hasClass('is-loaded')) {
            $(element).addClass('is-loaded');
            var $prodWrapId = $(element).attr('id'),
              $wrap,
              $listId = $(element).data('list-id');
            var homeProColumn = $(element).parents('.product-block').data('columns');
            var dots = $(element).parents('.product-block').data('dots');
            var limit = $(element).parents('.product-block').data('limit');
            if ($(element).find('.productCarousel1').length > 0) {
              $wrap = $(element).find('.productCarousel1');
              $options = {
                template: 'halothemes/product/halo-special-product-blog-tmp'
              };
            }
            if (!$('#product-by-list-' + $prodWrapId + ' .productCarousel1 .productCarousel-slide').length) {
              if ($listId.length > 1) {
                loadListID($listId, $options, $wrap, homeProColumn, dots, limit);
              } else {
                loadListID($($listId), $options, $wrap, homeProColumn, dots, limit);
              }
            }
          }
        });
      }
    }
    function loadListID(id, options, wrap, homeProColumn, dots, limit) {
      if (id.length <= 1) {
        var arr = id;
      } else {
        var arr = id.split(',');
      }
      if (id.length > homeProColumn) {
        var list = arr.slice(0, parseInt(limit));
      } else {
        var list = arr;
      }
      var num = 0;
      for (var i = 0; i <= list.length; i++) {
        var $prodId = list[i];
        if ($prodId != undefined) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById($prodId, options, function (err, response) {
            var hasProd = $(response).find('.card').data('product-id');
            console.log("response", response);
            if (true) {
              if (wrap.hasClass('slick-slider')) {
                wrap.slick('unslick');
                wrap.append(response);
              } else {
                wrap.append(response);
              }
            }
            num++;
            if (num == list.length) {
              wrap.parents('.productsByListId[data-list-id]').find('.halo_productLoading').remove();
              wrap.parents('.productsByListId[data-list-id]').addClass('show');
              if ($(window).width() <= 767) {
                $('#list-product-blog-detail-block-mb').append($('#list-product-blog-detail-block'));
                var mbWrap = $('#list-product-blog-detail-block-mb .productCarousel1');
                slickCarouselListId(mbWrap, 1, dots);
              }
              return;
            }
          });
        }
      }
    }
    function slickCarouselListId($wrap, homeProColumn, dots) {
      $wrap.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        draggable: true,
        dots: true,
        /* Responsive */
        responsive: [{
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        }, {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            variableWidth: true,
            dots: false,
            slidesToScroll: 1
          }
        }]
      });
    }
  };
  return Blog;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);


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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9ibG9nX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQjtBQUM2QjtBQUNOO0FBQ2tDO0FBQ1o7QUFBQSxJQUcxQ0ksSUFBSSwwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLElBQUEsRUFBQUMsWUFBQTtFQUNyQixTQUFBRCxLQUFZRyxPQUFPLEVBQUU7SUFBQSxPQUNqQkYsWUFBQSxDQUFBRyxJQUFBLE9BQU1ELE9BQU8sQ0FBQztFQUNsQjtFQUFDLElBQUFFLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FFSkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNIUix5RUFBaUIsQ0FBQyxDQUFDO0lBRW5CLElBQUksQ0FBQ1Msd0JBQXdCLENBQUMsSUFBSSxDQUFDTCxPQUFPLENBQUM7SUFDM0M7SUFDQSxJQUFJLENBQUNNLGVBQWUsQ0FBQyxDQUFDO0lBRXRCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUMsbUNBQW1DLENBQUM7SUFDMUQsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQyxzQ0FBc0MsQ0FBQztJQUM3RCxJQUFJLENBQUNBLGdCQUFnQixDQUFDLHFDQUFxQyxDQUFDO0lBQzVELElBQUksQ0FBQ0EsZ0JBQWdCLENBQUMscUNBQXFDLENBQUM7SUFFNUQsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQyxDQUFDO0lBRTNCLElBQUksQ0FBQ0MsV0FBVyxDQUFDLENBQUM7SUFFbEIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUVyQixJQUFJLENBQUNDLG9CQUFvQixDQUFDLElBQUksQ0FBQ1gsT0FBTyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ1ksa0JBQWtCLENBQUMsQ0FBQztFQUM3QixDQUFDO0VBQUFWLE1BQUEsQ0FFREcsd0JBQXdCLEdBQXhCLFNBQUFBLHlCQUF5QkwsT0FBTyxFQUFDO0lBQzdCLElBQUdhLENBQUMsQ0FBQywwQkFB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QUFLLENBQUNNLE1BQU0sQ0FBQyxDQUFDbEosT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDUCxNQUFNLEtBQUssQ0FBQyxJQUFNRCxDQUFDLENBQUNvSixLQUFLLENBQUNNLE1BQU0sQ0FBQyxDQUFDbEosT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUNQLE1BQU0sS0FBSyxDQUFFLEVBQUM7UUFDMUhELENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDcUksV0FBVyxDQUFDLFNBQVMsQ0FBQztRQUNoRHJJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQ3FJLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDekNySSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNxSSxXQUFXLENBQUMsYUFBYSxDQUFDO01BQ3hDO0lBQ0o7RUFDSixDQUFDLENBQUM7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL2JpZ2NvbW1lcmNlLWhlcmEvLi9hc3NldHMvanMvdGhlbWUvYmxvZy5qcyIsIndlYnBhY2s6Ly9iaWdjb21tZXJjZS1oZXJhLy4vYXNzZXRzL2pzL3RoZW1lL2hhbG90aGVtZXMvaGFsb1NpZGViYXJUb2dnbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdmYW5jeWJveCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBoYWxvQWRkT3B0aW9uRm9yUHJvZHVjdCBmcm9tICcuL2hhbG90aGVtZXMvaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QnO1xuaW1wb3J0IGhhbG9TaWRlYmFyVG9nZ2xlIGZyb20gJy4vaGFsb3RoZW1lcy9oYWxvU2lkZWJhclRvZ2dsZSc7XG5pbXBvcnQgeyBjb25mb3JtcyB9IGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsb2cgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcbiAgICB9XG5cblx0b25SZWFkeSgpIHtcbiAgICAgICAgaGFsb1NpZGViYXJUb2dnbGUoKTtcblxuICAgICAgICB0aGlzLmxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICAvKiBBbmltYXRlIFNjcm9sbCovXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uU2Nyb2xsKCk7XG5cbiAgICAgICAgdGhpcy5nZXRCbG9nUG9zdEJ5VGFnKFwiLmJsb2ctdGFiLWNvbnRlbnRfX3Bvc3QtLXJlY2VuemlpXCIpO1xuICAgICAgICB0aGlzLmdldEJsb2dQb3N0QnlUYWcoXCIuYmxvZy10YWItY29udGVudF9fcG9zdC0tcmVjb21hbmRhcmlcIik7XG4gICAgICAgIHRoaXMuZ2V0QmxvZ1Bvc3RCeVRhZyhcIi5ibG9nLXRhYi1jb250ZW50X19wb3N0LS1pbmN1cmFqYXJlXCIpO1xuICAgICAgICB0aGlzLmdldEJsb2dQb3N0QnlUYWcoXCIuYmxvZy10YWItY29udGVudF9fcG9zdC0taW50ZXJ2aXVyaVwiKTtcblxuICAgICAgICB0aGlzLnZpZXdNb3JlQmxvZ0NhdGVnb3J5KCk7XG5cbiAgICAgICAgdGhpcy5nZXRUaW1lQmxvZygpO1xuXG4gICAgICAgIHRoaXMuc2ltaWxhckFydGljbGUoKTtcblxuICAgICAgICB0aGlzLmN1c3RvbVNwZWNpYWxQcm9kdWN0KHRoaXMuY29udGV4dCk7XG4gICAgICAgIHRoaXMuaG9tZVByb2R1Y3RzTGlzdElEKCk7XG4gICAgfVxuXG4gICAgbG9hZE9wdGlvbkZvclByb2R1Y3RDYXJkKGNvbnRleHQpe1xuICAgICAgICBpZigkKCcjZmVhdHVyZWQtcHJvZHVjdHMgLmNhcmQnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGhhbG9BZGRPcHRpb25Gb3JQcm9kdWN0KGNvbnRleHQsICdmZWF0dXJlZC1wcm9kdWN0cycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogQW5pbWF0aW9uIFNjcm9sbCAqL1xuICAgIGFuaW1hdGlvblNjcm9sbCgpe1xuICAgICAgICBsZXQgaXRlbUxpbmsgPSAkKCcudGFiLXRpdGxlX19saW5rJyk7XG4gICAgICAgIGlmICghaXRlbUxpbmspIHJldHVybjtcbiAgICAgICAgZm9yKGxldCBpdGVtIG9mIGl0ZW1MaW5rKXtcbiAgICAgICAgICAgIGxldCB0YWJUaWxlID0gaXRlbS5jbG9zZXN0KCcudGFiLXRpdGxlX19pdGVtJyk7XG5cbiAgICAgICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAvKiBBY3RpdmUgVGFiICovXG4gICAgICAgICAgICAgICAgbGV0IHRhYlRpbGVBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFiLXRpdGxlX19pdGVtLmFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGlmKHRhYlRpbGVBY3RpdmUpIHRhYlRpbGVBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICB0YWJUaWxlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8qIFNjcm9sbCAqL1xuICAgICAgICAgICAgICAgIGxldCBpdGVtSHJlZiA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICgkKGl0ZW1IcmVmKS5vZmZzZXQoKS50b3AgLSAyMDApXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyogR2V0IFBvc3QgQnkgVGFnIE5hbWUqL1xuICAgIGdldEJsb2dQb3N0QnlUYWcoZWxlbWVudENsYXNzKXtcbiAgICAgICAgbGV0IGJsb2dMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbGVtZW50Q2xhc3MpLFxuICAgICAgICAgICAgYmxvZ1NlY3Rpb24gPSBibG9nTGlzdD8uY2xvc2VzdChcIi5ibG9nLXRhYl9fY29udGVudFwiKSxcbiAgICAgICAgICAgIGJsb2dVcmwgPSBibG9nU2VjdGlvbj8ucXVlcnlTZWxlY3RvcihcIi5ibG9nLXRhYi1jb250ZW50X19saW5rXCIpLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cbiAgICAgICAgaWYgKCFibG9nTGlzdCkgcmV0dXJuO1xuXG4gICAgICAgIGZldGNoKGJsb2dVcmwpXG4gICAgICAgICAgICAudGhlbiAocmVzcG9uc2UgPT4gcmVzcG9uc2UudGV4dCgpKVxuICAgICAgICAgICAgLnRoZW4gKChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gY29udGVudDtcblxuICAgICAgICAgICAgICAgIHZhciBuZXdDb250ZW50ID0gdGVtcGxhdGUucXVlcnlTZWxlY3RvcihcIi5ibG9nLWNhdGFnb3J5LWNvbnRlbnRcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIGJsb2dMaXN0LmlubmVySFRNTCA9IG5ld0NvbnRlbnQ7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvKiBTaG93IDkgYmxvZyBwb3N0IG9uIGRlc2t0b3AgKi9cbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9nUG9zdCA9IGJsb2dTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYmxvZy10YWItY29udGVudF9fcG9zdCAuYmxvZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJsb2dQb3N0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGkgPiA4KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9nUG9zdFtpXS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8qIFNob3cgMyBibG9nIHBvc3Qgb24gbW9iaWxlICovXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCA3Njgpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvZ1Bvc3QgPSBibG9nU2VjdGlvbi5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctdGFiLWNvbnRlbnRfX3Bvc3QgLmJsb2dcIik7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBibG9nUG9zdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpID4gMil7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvZ1Bvc3RbaV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50Q2xhc3MpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlICxcbiAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLyogUmVzcG9uc2l2ZSAqL1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZG90ID0gYmxvZ1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbChcIi5zbGljay1kb3RzIGxpXCIpO1xuICAgICAgICAgICAgICAgIGRvdFswXS5jbGljaygpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLyogU2Nyb2xsIFRvIFRvcCBBZnRlciBDbGljayBBYm92ZSAqL1xuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8qIEdldCBSZWFkaW5nIFRpbWUgKi9cbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgaGFsb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctcG9zdC5oYWxvLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBkZXNjcmlwdGlvbiBvZiBoYWxvRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvblRleHQgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudC50cmltKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3RlZFRleHQgPSBkZXNjcmlwdGlvblRleHQubWF0Y2goLyhcXGQrXFxzbWluXFxzZGVcXHNjaXRpdCkvaSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYWN0ZWRUZXh0ID0gZXh0cmFjdGVkVGV4dFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJsb2dQb3N0Qm9keSA9IGRlc2NyaXB0aW9uLmNsb3Nlc3QoJy5ibG9nLXBvc3QtYm9keScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1c3RvbUJsb2dSZWFkaW5nID0gYmxvZ1Bvc3RCb2R5LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tYmxvZy1yZWFkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUJsb2dSZWFkaW5nLnRleHRDb250ZW50ID0gZXh0cmFjdGVkVGV4dDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb24udGV4dENvbnRlbnQucmVwbGFjZShleHRyYWN0ZWRUZXh0LCAnJykudHJpbSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLyogR2V0IE1hdGNoaW5nIFRhZ3MgZm9yIEN1c3RvbSBQb3N0IERldGFpbCBMYXlvdXQgKi9cbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zdERldGFpbEN1c3RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLXBvc3QtZGV0YWlsLWxheW91dFwiKTtcblxuICAgICAgICAgICAgICAgIGlmKHBvc3REZXRhaWxDdXN0b20pIHtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd01hdGNoaW5nVGFncygpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIEdldCBBbGwgVGFncyBvZiB0aGlzIHBvc3QgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXBvc3QtdGFncyAubGluaycpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3MuZm9yRWFjaCh0YWcgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qIEdldCBUYWcgTmFtZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSB0YWcuaW5uZXJUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogRmluZCBEaXYgdGhlIHNhbWVlIHdpdGggdGFnIG5hbWUgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3JyZXNwb25kaW5nRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jsb2ctJyArIHRhZ05hbWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29ycmVzcG9uZGluZ0Rpdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kaW5nRGl2LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzaG93TWF0Y2hpbmdUYWdzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgdmlld01vcmVCbG9nQ2F0ZWdvcnkoKXtcbiAgICAgICAgbGV0IHZpZXdNb3JlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3N0LWNhdGVnb3J5LXZpZXdNb3JlXCIpO1xuICAgICAgICBsZXQgYmxvZ0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctY2F0YWdvcnktY29udGVudFwiKTtcbiAgICAgICAgXG4gICAgICAgIGlmKCF2aWV3TW9yZUJ1dHRvbikgcmV0dXJuO1xuIFxuICAgICAgICB2aWV3TW9yZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJCgnLnBhZ2luYXRpb24taXRlbS0tY3VycmVudCcpLm5leHQoKSxcbiAgICAgICAgICAgICAgICBsaW5rID0gbmV4dFBhZ2UuZmluZChcImFcIikuYXR0cihcImhyZWZcIik7XG5cbiAgICAgICAgICAgIGZldGNoKGxpbmspXG4gICAgICAgICAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgICAgICAudGhlbiAoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gY29udGVudDtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3Q29udGVudCA9ICQoXCIuYmxvZy1jYXRhZ29yeS1jb250ZW50IC5ibG9nXCIsICQodGVtcGxhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld1BhZ2luYXRpb24gPSAkKFwiLnBhZ2luYXRpb24tbGlzdFwiLCAkKHRlbXBsYXRlKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZihsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCBuZXdDb250ZW50ICkuYXBwZW5kVG8oYmxvZ0xpc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uLWxpc3QnKS5odG1sKG5ld1BhZ2luYXRpb24pO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvKiBSZW1vdmUgVmlldyBNb3JlIEJ1dHRvbiAqL1xuICAgICAgICAgICAgICAgIC50aGVuICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0UGFnaW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvbi1pdGVtLS1uZXh0XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKCFuZXh0UGFnaW5hdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmlld01vcmVCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldFRpbWVCbG9nKCkge1xuICAgICAgICB2YXIgaGFsb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctcG9zdC5oYWxvLWRlc2NyaXB0aW9uJyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYWxvRGVzY3JpcHRpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uVGV4dCA9IGhhbG9EZXNjcmlwdGlvbltpXS5pbm5lckhUTUwudHJpbSgpO1xuXG4gICAgICAgICAgICB2YXIgZXh0cmFjdGVkVGV4dCA9IGRlc2NyaXB0aW9uVGV4dC5tYXRjaCgvKFxcZCtcXHNtaW5cXHNkZVxcc2NpdGl0KS9pKTtcblxuICAgICAgICAgICAgaWYgKGV4dHJhY3RlZFRleHQpIHtcbiAgICAgICAgICAgICAgICBleHRyYWN0ZWRUZXh0ID0gZXh0cmFjdGVkVGV4dFswXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgYmxvZ1Bvc3RCb2R5ID0gaGFsb0Rlc2NyaXB0aW9uW2ldLmNsb3Nlc3QoJy5ibG9nJyk7XG4gICAgICAgICAgICAgICAgdmFyIGN1c3RvbUJsb2dSZWFkaW5nID0gYmxvZ1Bvc3RCb2R5LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tYmxvZy1yZWFkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICBjdXN0b21CbG9nUmVhZGluZy5pbm5lckhUTUwgPSBleHRyYWN0ZWRUZXh0O1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8qIFJlYWRpbmcgVGltZSBpbiBibG9nIGRldGFpbCBwYWdlICovXG4gICAgICAgICAgICAgICAgbGV0IGJsb2dEZXRhaWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctcG9zdC1kZXRhaWwgLnBvc3QtZGV0YWlsX190b3BcIik7XG5cbiAgICAgICAgICAgICAgICBpZihibG9nRGV0YWlsKXtcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gY29udmVydFRleHRUb01pbnV0ZSh0ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IC8oXFxkKylcXHMqbWluXFxzK2RlXFxzK2NpdGl0LztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gdGV4dC5tYXRjaChyZWdleCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWludXRlcyA9IHBhcnNlSW50KG1hdGNoWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2YXIgYmxvZ0RldGFpbFJlYWRpbmcgPSBibG9nRGV0YWlsLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tYmxvZy1yZWFkaW5nJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1JlYWRpbmdUaW1lID0gY29udmVydFRleHRUb01pbnV0ZShleHRyYWN0ZWRUZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICBpZihpID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2dEZXRhaWxSZWFkaW5nLmlubmVySFRNTCA9IGNvbnZlcnRUZXh0VG9NaW51dGUoZXh0cmFjdGVkVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBoYWxvRGVzY3JpcHRpb25baV0uaW5uZXJIVE1MID0gaGFsb0Rlc2NyaXB0aW9uW2ldLmlubmVySFRNTC5yZXBsYWNlKGV4dHJhY3RlZFRleHQsICcnKS50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaW1pbGFyQXJ0aWNsZSgpIHtcbiAgICAgICAgbGV0IHNpbWlsYXJUYWdMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLXBvc3QtdGFncyAudGFncyAudGFnIC5saW5rXCIpPy5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpO1xuXG4gICAgICAgIGlmKCFzaW1pbGFyVGFnTGluaykgcmV0dXJuO1xuXG4gICAgICAgIGZldGNoKHNpbWlsYXJUYWdMaW5rKVxuICAgICAgICAgICAgLnRoZW4gKHJlc3BvbnNlID0+IHJlc3BvbnNlLnRleHQoKSlcbiAgICAgICAgICAgIC50aGVuICgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0NvbnRlbnQgPSB0ZW1wbGF0ZS5xdWVyeVNlbGVjdG9yKFwiI2Jsb2ctbGlzdGluZy1jb250YWluZXIgLmJsb2ctdGFiX19jb250ZW50IC5ibG9nLWNhdGFnb3J5LWNvbnRlbnRcIikuaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LnNwbGl0KFwiPG5hdlwiKVswXTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpbWlsYXItYmxvZ19fbGlzdFwiKS5pbm5lckhUTUwgPSBuZXdDb250ZW50O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYmxvZ1Bvc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpbWlsYXJfX3dyYXBwZXIgLmJsb2dcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJsb2dQb3N0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoaSA+IDIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgYmxvZ1Bvc3RbaV0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciBoYWxvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2ltaWxhcl9fd3JhcHBlciAuYmxvZy1wb3N0LmhhbG8tZGVzY3JpcHRpb24nKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGRlc2NyaXB0aW9uIG9mIGhhbG9EZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uVGV4dCA9IGRlc2NyaXB0aW9uLnRleHRDb250ZW50LnRyaW0oKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZXh0cmFjdGVkVGV4dCA9IGRlc2NyaXB0aW9uVGV4dC5tYXRjaCgvKFxcZCtcXHNtaW5cXHNkZVxcc2NpdGl0KS9pKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhY3RlZFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RlZFRleHQgPSBleHRyYWN0ZWRUZXh0WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmxvZ1Bvc3RCb2R5ID0gZGVzY3JpcHRpb24uY2xvc2VzdCgnLnNpbWlsYXJfX3dyYXBwZXIgLmJsb2ctcG9zdC1ib2R5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3VzdG9tQmxvZ1JlYWRpbmcgPSBibG9nUG9zdEJvZHkucXVlcnlTZWxlY3RvcignLnNpbWlsYXJfX3dyYXBwZXIgLmN1c3RvbS1ibG9nLXJlYWRpbmcnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQmxvZ1JlYWRpbmcudGV4dENvbnRlbnQgPSBleHRyYWN0ZWRUZXh0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbi50ZXh0Q29udGVudC5yZXBsYWNlKGV4dHJhY3RlZFRleHQsICcnKS50cmltKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJy5zaW1pbGFyLWJsb2dfX2xpc3QnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UgLFxuICAgICAgICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLyogUmVzcG9uc2l2ZSAqL1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKiBTcGVjaWFsIFByb2R1Y3QgQmxvZyBEZXRhaWwgKi9cbiAgICBjdXN0b21TcGVjaWFsUHJvZHVjdCgkY29udGV4dCl7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSAkY29udGV4dDtcbiAgICAgICAgICAgIHZhciBwcm9kdWN0SWQgPSAkKCdbZGF0YS1zcGVjaWFsLXByb2R1Y3QtYmxvZy1pZF0nKS5kYXRhKCdzcGVjaWFsLXByb2R1Y3QtYmxvZy1pZCcpLFxuICAgICAgICAgICAgICAgIHNldEZsYWcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPXtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2hhbG90aGVtZXMvcHJvZHVjdC9oYWxvLXNwZWNpYWwtcHJvZHVjdC1ibG9nLXRtcCdcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwgbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCksXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcl9oZWlnaHQgPSAkKCcuaGVhZGVyJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsID4gaGVhZGVyX2hlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRGbGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZihzZXRGbGFnKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoISQoJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCAucHJvZHVjdFZpZXcnKS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3BlID0gJy5oYWxvLXNwYWNpYWwtcHJvZHVjdCc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3JykubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkuaHRtbChyZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld2luZ1Byb2R1Y3QoJChzY29wZSkuZmluZCgnLnByb2R1Y3RWaWV3LVZpZXdpbmdQcm9kdWN0JykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpLmZpbmQoJy5wcm9kdWN0Vmlldy1mb3InKS5nZXQoMCkuc2xpY2suc2V0UG9zaXRpb24oKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0VGh1bWJuYWlsc0hlaWdodChzY29wZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSkub24oJ2NsaWNrJywgJy5kcm9wZG93bi1tZW51LWJ1dHRvbicsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJHRhcmdldC5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtb3BlbicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLW9wZW4nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc2libGluZ3MoJy5kcm9wZG93bi1tZW51JylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoc2NvcGUpLmZpbmQoJy5kcm9wZG93bi1tZW51LWJ1dHRvbicpLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcuZHJvcGRvd24tbWVudS1idXR0b24nKS5sZW5ndGggPT09IDApICYmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLmRyb3Bkb3duLW1lbnUnKS5sZW5ndGggPT09IDApKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChzY29wZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5maW5kKCcuZHJvcGRvd24tbWVudS1idXR0b24nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmluZCgnLmRyb3Bkb3duLW1lbnUtYnV0dG9uJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdpcy1vcGVuJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoc2NvcGUpLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdERldGFpbHMuc2V0UHJvZHVjdFZhcmlhbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvZHVjdERldGFpbHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHZpZXdpbmdQcm9kdWN0KHdyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3cmFwcGVyLmxlbmd0aCA+IDApeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZpZXdlclRleHQgPSBjb250ZXh0LnRoZW1lU2V0dGluZ3MucHJvZHVjdF92aWV3aW5nUHJvZHVjdF90ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlcl90ZXh0ID0gY29udGV4dC50aGVtZVNldHRpbmdzLnByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyc1ZpZXdlckxpc3QgPSAgSlNPTi5wYXJzZShcIltcIiArIG51bWJlcnNWaWV3ZXJfdGV4dCArIFwiXVwiKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXJzVmlld2VySXRlbSA9IChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqbnVtYmVyc1ZpZXdlckxpc3QubGVuZ3RoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXIuaHRtbCgnPHN2ZyBjbGFzcz1cImljb25cIiBhcmlhLWhpZGRlbj1cInRydWVcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi1leWVcIi8+PC9zdmc+JyArIG51bWJlcnNWaWV3ZXJMaXN0W251bWJlcnNWaWV3ZXJJdGVtXSArIFwiIFwiICsgdmlld2VyVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDAwKTsgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBpbml0VGh1bWJuYWlsc0hlaWdodCgkc2NvcGUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9ICQoJHNjb3BlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkY2Fyb3VzZWxfbmF2ID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LW5hdicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yID0gZWwuZmluZCgnLnByb2R1Y3RWaWV3LWZvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRjYXJvdXNlbF9mb3IuZmluZCgnLnNsaWNrLWFycm93JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2Fyb3VzZWxfZm9yLnBhcmVudCgpLmFkZENsYXNzKCdhcnJvd3MtdmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjYXJvdXNlbF9mb3IucGFyZW50KCkuYWRkQ2xhc3MoJ2Fycm93cy1kaXNhYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhvbWVQcm9kdWN0c0xpc3RJRCgpIHtcbiAgICAgICAgdmFyICRvcHRpb25zO1xuXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHRTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGFydFwiKTtcbiAgICAgICAgICAgIGhvbWVMaXN0SWQodFNjcm9sbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0U2Nyb2xsID0gJHRhcmdldC5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaG9tZUxpc3RJZCh0U2Nyb2xsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gaG9tZUxpc3RJZCh0U2Nyb2xsKSB7XG4gICAgICAgICAgICBpZiAoJCgnLnByb2R1Y3RzQnlMaXN0SWRbZGF0YS1saXN0LWlkXScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHNCeUxpc3RJZFtkYXRhLWxpc3QtaWRdJykuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRoaXNPZmZldFRvcCA9ICQoZWxlbWVudCkub2Zmc2V0KCkudG9wIC0gKHNjcmVlbi5oZWlnaHQpICogMS41O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0U2Nyb2xsID4gdGhpc09mZmV0VG9wICYmICEkKGVsZW1lbnQpLmhhc0NsYXNzKCdpcy1sb2FkZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChlbGVtZW50KS5hZGRDbGFzcygnaXMtbG9hZGVkJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciAkcHJvZFdyYXBJZCA9ICQoZWxlbWVudCkuYXR0cignaWQnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkd3JhcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbGlzdElkID0gJChlbGVtZW50KS5kYXRhKCdsaXN0LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaG9tZVByb0NvbHVtbiA9ICQoZWxlbWVudCkucGFyZW50cygnLnByb2R1Y3QtYmxvY2snKS5kYXRhKCdjb2x1bW5zJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZG90cyA9ICQoZWxlbWVudCkucGFyZW50cygnLnByb2R1Y3QtYmxvY2snKS5kYXRhKCdkb3RzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGltaXQgPSAkKGVsZW1lbnQpLnBhcmVudHMoJy5wcm9kdWN0LWJsb2NrJykuZGF0YSgnbGltaXQnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuZmluZCgnLnByb2R1Y3RDYXJvdXNlbDEnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHdyYXAgPSAkKGVsZW1lbnQpLmZpbmQoJy5wcm9kdWN0Q2Fyb3VzZWwxJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnaGFsb3RoZW1lcy9wcm9kdWN0L2hhbG8tc3BlY2lhbC1wcm9kdWN0LWJsb2ctdG1wJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghJCgnI3Byb2R1Y3QtYnktbGlzdC0nICsgJHByb2RXcmFwSWQgKyAnIC5wcm9kdWN0Q2Fyb3VzZWwxIC5wcm9kdWN0Q2Fyb3VzZWwtc2xpZGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGxpc3RJZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRMaXN0SUQoJGxpc3RJZCwgJG9wdGlvbnMsICR3cmFwLCBob21lUHJvQ29sdW1uLCBkb3RzLCBsaW1pdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZExpc3RJRCgkKCRsaXN0SWQpLCAkb3B0aW9ucywgJHdyYXAsIGhvbWVQcm9Db2x1bW4sIGRvdHMsIGxpbWl0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbG9hZExpc3RJRChpZCwgb3B0aW9ucywgd3JhcCwgaG9tZVByb0NvbHVtbiwgZG90cywgbGltaXQpIHtcbiAgICAgICAgICAgIGlmIChpZC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBpZDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGlkLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpZC5sZW5ndGggPiBob21lUHJvQ29sdW1uKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBhcnIuc2xpY2UoMCwgcGFyc2VJbnQobGltaXQpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpc3QgPSBhcnI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyICRwcm9kSWQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRwcm9kSWQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQoJHByb2RJZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoYXNQcm9kID0gJChyZXNwb25zZSkuZmluZCgnLmNhcmQnKS5kYXRhKCdwcm9kdWN0LWlkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlc3BvbnNlXCIsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdyYXAuaGFzQ2xhc3MoJ3NsaWNrLXNsaWRlcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcC5hcHBlbmQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXAuYXBwZW5kKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID09IGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcC5wYXJlbnRzKCcucHJvZHVjdHNCeUxpc3RJZFtkYXRhLWxpc3QtaWRdJykuZmluZCgnLmhhbG9fcHJvZHVjdExvYWRpbmcnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwLnBhcmVudHMoJy5wcm9kdWN0c0J5TGlzdElkW2RhdGEtbGlzdC1pZF0nKS5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDw9IDc2Nykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdC1wcm9kdWN0LWJsb2ctZGV0YWlsLWJsb2NrLW1iJykuYXBwZW5kKCQoJyNsaXN0LXByb2R1Y3QtYmxvZy1kZXRhaWwtYmxvY2snKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1iV3JhcCA9ICQoJyNsaXN0LXByb2R1Y3QtYmxvZy1kZXRhaWwtYmxvY2stbWIgLnByb2R1Y3RDYXJvdXNlbDEnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2tDYXJvdXNlbExpc3RJZChtYldyYXAsIDEsIGRvdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNsaWNrQ2Fyb3VzZWxMaXN0SWQoJHdyYXAsIGhvbWVQcm9Db2x1bW4sIGRvdHMpIHtcbiAgICAgICAgICAgICR3cmFwLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UgLFxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgIFxuICAgICAgICAgICAgICAgIC8qIFJlc3BvbnNpdmUgKi9cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDkwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcbiAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgaWYoJChldmVudC5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygnaXMtb3BlbicpKXtcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdvcGVuU2lkZWJhcicpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygnb3BlblNpZGViYXInKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2Utc2lkZWJhciAucGFnZS1zaWRlYmFyLWNsb3NlIC5jbG9zZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgICAgICQoJy5wYWdlLXNpZGViYXInKS5yZW1vdmVDbGFzcygnaXMtb3BlbicpO1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgfSk7XG5cbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgIGlmICgkKCcucGFnZS1zaWRlYmFyJykuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgaWYgKCgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdCgnLnBhZ2Utc2lkZWJhcicpLmxlbmd0aCA9PT0gMCkgJiYgKCQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KCcucGFnZS1zaWRlYmFyLW1vYmlsZScpLmxlbmd0aCA9PT0gMCkpe1xuICAgICAgICAgICAgICAgICQoJy5wYWdlLXNpZGViYXItbW9iaWxlJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCcucGFnZS1zaWRlYmFyJykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAgICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ29wZW5TaWRlYmFyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJ1dGlscyIsIlBhZ2VNYW5hZ2VyIiwiaGFsb0FkZE9wdGlvbkZvclByb2R1Y3QiLCJoYWxvU2lkZWJhclRvZ2dsZSIsIkJsb2ciLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJjYWxsIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImxvYWRPcHRpb25Gb3JQcm9kdWN0Q2FyZCIsImFuaW1hdGlvblNjcm9sbCIsImdldEJsb2dQb3N0QnlUYWciLCJ2aWV3TW9yZUJsb2dDYXRlZ29yeSIsImdldFRpbWVCbG9nIiwic2ltaWxhckFydGljbGUiLCJjdXN0b21TcGVjaWFsUHJvZHVjdCIsImhvbWVQcm9kdWN0c0xpc3RJRCIsIiQiLCJsZW5ndGgiLCJpdGVtTGluayIsIl9sb29wIiwiaXRlbSIsIl9zdGVwIiwidmFsdWUiLCJ0YWJUaWxlIiwiY2xvc2VzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YWJUaWxlQWN0aXZlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiaXRlbUhyZWYiLCJnZXRBdHRyaWJ1dGUiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSIsImRvbmUiLCJlbGVtZW50Q2xhc3MiLCJibG9nTGlzdCIsImJsb2dTZWN0aW9uIiwiYmxvZ1VybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImNvbnRlbnQiLCJ0ZW1wbGF0ZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJuZXdDb250ZW50Iiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJsb2dQb3N0IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJzbGljayIsImluZmluaXRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkcmFnZ2FibGUiLCJkb3RzIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsInZhcmlhYmxlV2lkdGgiLCJkb3QiLCJjbGljayIsInNjcm9sbFRvIiwiaGFsb0Rlc2NyaXB0aW9uIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25UZXh0IiwidGV4dENvbnRlbnQiLCJ0cmltIiwiZXh0cmFjdGVkVGV4dCIsIm1hdGNoIiwiYmxvZ1Bvc3RCb2R5IiwiY3VzdG9tQmxvZ1JlYWRpbmciLCJyZXBsYWNlIiwicG9zdERldGFpbEN1c3RvbSIsInNob3dNYXRjaGluZ1RhZ3MiLCJ0YWdzIiwiZm9yRWFjaCIsInRhZyIsInRhZ05hbWUiLCJpbm5lclRleHQiLCJjb3JyZXNwb25kaW5nRGl2IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b0xvd2VyQ2FzZSIsInN0eWxlIiwiZGlzcGxheSIsImVycm9yIiwiY29uc29sZSIsInZpZXdNb3JlQnV0dG9uIiwibmV4dFBhZ2UiLCJuZXh0IiwibGluayIsImZpbmQiLCJhdHRyIiwibmV3UGFnaW5hdGlvbiIsImFwcGVuZFRvIiwiaHRtbCIsIm5leHRQYWdpbmF0aW9uIiwiX2xvb3AyIiwiYmxvZ0RldGFpbCIsImNvbnZlcnRUZXh0VG9NaW51dGUiLCJyZWdleCIsIm1pbnV0ZXMiLCJwYXJzZUludCIsImJsb2dEZXRhaWxSZWFkaW5nIiwibmV3UmVhZGluZ1RpbWUiLCJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCJzaW1pbGFyVGFnTGluayIsInNwbGl0IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsInJlYWR5IiwiJGNvbnRleHQiLCJwcm9kdWN0SWQiLCJkYXRhIiwic2V0RmxhZyIsIm9wdGlvbnMiLCJvbiIsInNjcm9sbCIsImhlYWRlcl9oZWlnaHQiLCJoZWlnaHQiLCJ2aWV3aW5nUHJvZHVjdCIsIndyYXBwZXIiLCJ2aWV3ZXJUZXh0IiwidGhlbWVTZXR0aW5ncyIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3RfdGV4dCIsIm51bWJlcnNWaWV3ZXJfdGV4dCIsInByb2R1Y3Rfdmlld2luZ1Byb2R1Y3Rfdmlld2VyIiwibnVtYmVyc1ZpZXdlckxpc3QiLCJKU09OIiwicGFyc2UiLCJzZXRJbnRlcnZhbCIsIm51bWJlcnNWaWV3ZXJJdGVtIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmVtb3ZlQ2xhc3MiLCJpbml0VGh1bWJuYWlsc0hlaWdodCIsIiRzY29wZSIsImVsIiwiJGNhcm91c2VsX25hdiIsIiRjYXJvdXNlbF9mb3IiLCJwYXJlbnQiLCJhZGRDbGFzcyIsImFwaSIsInByb2R1Y3QiLCJnZXRCeUlkIiwiZXJyIiwic2NvcGUiLCJnZXQiLCJzZXRQb3NpdGlvbiIsImV2ZW50IiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJoYXNDbGFzcyIsInNpYmxpbmdzIiwic3RvcFByb3BhZ2F0aW9uIiwidGFyZ2V0IiwicHJvZHVjdERldGFpbHMiLCJQcm9kdWN0RGV0YWlscyIsInNldFByb2R1Y3RWYXJpYW50IiwiJG9wdGlvbnMiLCJ0U2Nyb2xsIiwibG9nIiwiaG9tZUxpc3RJZCIsImVhY2giLCJpbmRleCIsImVsZW1lbnQiLCJ0aGlzT2ZmZXRUb3AiLCJzY3JlZW4iLCIkcHJvZFdyYXBJZCIsIiR3cmFwIiwiJGxpc3RJZCIsImhvbWVQcm9Db2x1bW4iLCJwYXJlbnRzIiwibGltaXQiLCJsb2FkTGlzdElEIiwiaWQiLCJ3cmFwIiwiYXJyIiwibGlzdCIsInNsaWNlIiwibnVtIiwiJHByb2RJZCIsInVuZGVmaW5lZCIsImhhc1Byb2QiLCJhcHBlbmQiLCJ3aWR0aCIsIm1iV3JhcCIsInNsaWNrQ2Fyb3VzZWxMaXN0SWQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==