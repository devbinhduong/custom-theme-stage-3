(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[157],{61634:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>f});var o=r(42066),e=r(50469),i=r(54587),a=r(28426),s=r(99706),c=r(77137),l=r(3947),u=r(88128),p=r(94086),d=r(19633),h=r(55825);function g(t,n){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},g(t,n)}var f=function(t){var n,r;function e(n){var r;return(r=t.call(this,n)||this).validationDictionary=(0,s.M)(n),r}r=t,(n=e).prototype=Object.create(r.prototype),n.prototype.constructor=n,g(n,r);var f=e.prototype;return f.onReady=function(){(0,i.Z)(this.context),h("#facetedSearch").length>0?this.initFacetedSearch():(this.onSortBySubmit=this.onSortBySubmit.bind(this),o.PT.on("sortBy-submitted",this.onSortBySubmit)),(0,c.Z)(),(0,u.Z)(),(0,p.Z)(),(0,d.Z)(this.context),this.showItem(),this.loadOptionForProductCard(this.context),this.showProductsPerPage(),this.showMoreProducts(),this.showPaginationInfoToolbar()},f.initFacetedSearch=function(){var t=this,n=this.validationDictionary,r=n.price_min_evaluation,o=n.price_max_evaluation,e=n.price_min_not_entered,i=n.price_max_not_entered,s=n.price_invalid_value,c=h("#product-listing-container"),u=h("#faceted-search-container"),p=h(".halo-product-show-more"),d={template:{productListing:"brand/product-listing",sidebar:"brand/sidebar",paginator:"halothemes/gallery/halo-product-paginator"},config:{shop_by_brand:!0,brand:{products:{limit:this.context.brandProductsPerPage}}},showMore:"brand/show-more"};this.facetedSearch=new a.Z(d,(function(n){c.find(".product-listing-content").html(n.productListing),u.html(n.sidebar),p.html(h(n.paginator).find(".halo-product-show-more").children()),h("body").triggerHandler("compareReset"),h("#product-listing-container .product").length>0&&(0,l.Z)(t.context,"product-listing-container"),t.showItem(),t.showProductsPerPage(),t.showMoreProducts(),t.showPaginationInfoToolbar(),h("html, body").animate({scrollTop:0},100);var r=h("#faceted-search-container #featured-products .products-list");r.length&&r.slick()}),{validationErrorMessages:{onMinPriceError:r,onMaxPriceError:o,minPriceNotEntered:e,maxPriceNotEntered:i,onInvalidPrice:s}})},f.loadOptionForProductCard=function(t){h("#featured-products .card").length>0&&(0,l.Z)(t,"featured-products"),h("#product-listing-container .product").length>0&&(0,l.Z)(t,"product-listing-container")},f.showProductsPerPage=function(){try{var t=new URL(window.location.href).searchParams.get("limit");if(null!=t){var n=document.querySelectorAll("select#limit option");Array.prototype.forEach.call(n,(function(n){n.value==t&&(n.selected=!0)}))}}catch(t){}},f.showItem=function(){var t,n=parseInt(h(".pagination-info .total").text()),r=this.getUrlParameter("limit");t=void 0!==r?r:this.context.brandProductsPerPage;var o=1,e=n,i=1,a=h(".pagination-list .pagination-item--current").next(),s=(i-1)*t,c=n-s,l=parseInt(h(".pagination-item--current > a").text()),u=l-1;i=0===a.length?parseInt(h(".pagination-item--current").find("a").text()):parseInt(a.find("a").text()),n<=t?(h(".pagination-info .start").text(o),h(".pagination-info .end").text(e)):(l<=1?e=t:(o=u*t+1,e=h(".pagination-list .pagination-item--next").length>0?s+c-1:s+c),h(".pagination-info .start").text(o),h(".pagination-info .end").text(e)),this.showPaginationTotalProgress()},f.getUrlParameter=function(t){var n,r,o=decodeURIComponent(window.location.search.substring(1)).split("&");for(r=0;r<o.length;r++)if((n=o[r].split("="))[0]===t)return void 0===n[1]||n[1]},f.showMoreProducts=function(){var t=this,n=this.context,r=this.getUrlParameter("limit"),e={config:{shop_by_brand:!0,brand:{products:{limit:n.brandProductsPerPage}}},template:{productListing:"brand/halo-product-listing",sidebar:"brand/sidebar",paginator:"halothemes/gallery/halo-product-paginator"},showMore:"brand/show-more"},i=h("#product-listing-container .productListing"),a=(h("#faceted-search-container"),h(".pagination-list"));h(".halo-product-show-more"),h("#listing-showmoreBtn > a").on("click",(function(s){s.preventDefault();var c=h(".pagination-item--current").next(),u=c.find("a").attr("href");null==u?h("#listing-showmoreBtn > a").hasClass("disable")||h("#listing-showmoreBtn > a").addClass("disable"):(h("#listing-showmoreBtn > a").addClass("loading"),o.hi.getPage(u.replace("http://","//"),e,(function(o,e){if(o)throw new Error(o);if(""!=e.productListing){if(i.append(e.productListing),a.html(h(e.paginator).find(".pagination-list").children()),h("#listing-showmoreBtn > a").removeClass("loading").blur(),0===(c=h(".pagination-item--current").next()).length)h("#listing-showmoreBtn > a").addClass("disable").text("No more products"),h(".pagination .pagination-info .end").text(h(".toolbar-left .pagination-info .total").text());else{var s,u=r,p=parseInt(h(".pagination-item--current > a").text());s=void 0!==u?u:n.brandProductsPerPage;var d=parseInt(s)*p;h(".pagination .pagination-info .end").text(d)}var g=h(".pagination .pagination-info").html();h(".toolbar-wrapper .toolbar-left .pagination-info").html(g),t.showPaginationTotalProgress(),(0,l.Z)(n,"product-listing-container")}})))}))},f.showPaginationTotalProgress=function(){var t=h(".pagination-info .end").text(),n=h(".pagination-info .total").text(),r=""!=r?Number(t.replace(/[^0-9.-]+/g,"")):0,o=""!=o?Number(n.replace(/[^0-9.-]+/g,"")):0,e=parseInt(r/o*100);e=e>100?100:e,r==o&&(e=100),h(".pagination-total-progress .pagination-total-item").css("width",e+"%")},f.showPaginationInfoToolbar=function(){var t=h(".pagination .pagination-info").html();h(".toolbar-wrapper .toolbar-left .pagination-info").html(t)},e}(e.Z)},88668:(t,n,r)=>{var o=r(1469);t.exports=function(){if(!arguments.length)return[];var t=arguments[0];return o(t)?t:[t]}},47443:(t,n,r)=>{var o=r(42118);t.exports=function(t,n){return!(null==t||!t.length)&&o(t,n,0)>-1}},1196:t=>{t.exports=function(t,n,r){for(var o=-1,e=null==t?0:t.length;++o<e;)if(r(n,t[o]))return!0;return!1}},62488:t=>{t.exports=function(t,n){for(var r=-1,o=n.length,e=t.length;++r<o;)t[e+r]=n[r];return t}},20731:(t,n,r)=>{var o=r(88668),e=r(47443),i=r(1196),a=r(29932),s=r(7518),c=r(74757);t.exports=function(t,n,r,l){var u=-1,p=e,d=!0,h=t.length,g=[],f=n.length;if(!h)return g;r&&(n=a(n,s(r))),l?(p=i,d=!1):n.length>=200&&(p=c,d=!1,n=new o(n));t:for(;++u<h;){var m=t[u],v=null==r?m:r(m);if(m=l||0!==m?m:0,d&&v==v){for(var b=f;b--;)if(n[b]===v)continue t;g.push(m)}else p(n,v,l)||g.push(m)}return g}},21078:(t,n,r)=>{var o=r(62488),e=r(37285);t.exports=function t(n,r,i,a,s){var c=-1,l=n.length;for(i||(i=e),s||(s=[]);++c<l;){var u=n[c];r>0&&i(u)?r>1?t(u,r-1,i,a,s):o(s,u):a||(s[s.length]=u)}return s}},7518:t=>{t.exports=function(t){return function(n){return t(n)}}},45652:(t,n,r)=>{var o=r(88668),e=r(47443),i=r(1196),a=r(74757),s=r(23593),c=r(21814);t.exports=function(t,n,r){var l=-1,u=e,p=t.length,d=!0,h=[],g=h;if(r)d=!1,u=i;else if(p>=200){var f=n?null:s(t);if(f)return c(f);d=!1,u=a,g=new o}else g=n?[]:h;t:for(;++l<p;){var m=t[l],v=n?n(m):m;if(m=r||0!==m?m:0,d&&v==v){for(var b=g.length;b--;)if(g[b]===v)continue t;n&&g.push(v),h.push(m)}else u(g,v,r)||(g!==h&&g.push(v),h.push(m))}return h}},74757:(t,n,r)=>{var o=r(42118);t.exports=function(t,n){return!(null==t||!t.length)&&o(t,n,0)>-1}},23593:t=>{t.exports=function(){}},37285:(t,n,r)=>{var o=r(62705),e=r(35694),i=r(1469),a=o?o.isConcatSpreadable:void 0;t.exports=function(t){return i(t)||e(t)||!!(a&&t&&t[a])}},21814:t=>{t.exports=function(){return[]}},29246:(t,n,r)=>{var o=r(98612),e=r(37005);t.exports=function(t){return e(t)&&o(t)}},93386:(t,n,r)=>{var o=r(21078),e=r(5976),i=r(45652),a=r(29246),s=e((function(t){return i(o(t,1,a,!0))}));t.exports=s},82569:(t,n,r)=>{var o=r(20731),e=r(5976),i=r(29246),a=e((function(t,n){return i(t)?o(t,n):[]}));t.exports=a}}]);
//# sourceMappingURL=theme-bundle.chunk.157.js.map