"use strict";(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[205],{94086:(e,o,s)=>{s.d(o,{Z:()=>t});var a=s(55825);function t(){a(".page-sidebar-mobile").on("click",(function(e){a(e.currentTarget).hasClass("is-open")?(a(e.currentTarget).removeClass("is-open"),a(".page-sidebar").removeClass("is-open"),a("body").removeClass("openSidebar")):(a(e.currentTarget).addClass("is-open"),a(".page-sidebar").addClass("is-open"),a("body").addClass("openSidebar"))})),a(".page-sidebar .page-sidebar-close .close").on("click",(function(e){e.preventDefault(),a(".page-sidebar-mobile").removeClass("is-open"),a(".page-sidebar").removeClass("is-open"),a("body").removeClass("openSidebar")})),a(document).on("click",(function(e){a(".page-sidebar").hasClass("is-open")&&0===a(e.target).closest(".page-sidebar").length&&0===a(e.target).closest(".page-sidebar-mobile").length&&(a(".page-sidebar-mobile").removeClass("is-open"),a(".page-sidebar").removeClass("is-open"),a("body").removeClass("openSidebar"))}))}},63205:(e,o,s)=>{s.r(o),s.d(o,{default:()=>c});var a=s(42066),t=s(49230),l=s(94086),r=s(55825),n=s(55825);function i(e,o){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,o){return e.__proto__=o,e},i(e,o)}var c=function(e){var o,s;function t(o){return e.call(this,o)||this}s=e,(o=t).prototype=Object.create(s.prototype),o.prototype.constructor=o,i(o,s);var c=t.prototype;return c.onReady=function(){var e,o,s,t;(0,l.Z)(),e=n("#halo-lookbook-slider"),s=(o=e).find(".halo-lookbook-popup"),t={template:"halothemes/lookbook/halo-lookbook-tmp"},o.find("[data-product-lookbook]").on("click",(function(e){s.removeClass("is-open").empty();var l=r(e.currentTarget).data("product-id"),n=r(e.currentTarget).offset(),i=o.offset();null!=l&&(a.ZP.api.product.getById(l,t,(function(e,o){if(e)return!1;s.html(o)})),r(window).width()>=551?s.css({top:n.top-i.top-200,left:n.left-i.left+30}):s.css({top:n.top-i.top+15,left:15}),s.addClass("is-open"))})),r(document).on("click",".halo-lookbook-close",(function(e){e.preventDefault(),s.hasClass("is-open")&&s.removeClass("is-open")})),r(document).on("click",(function(e){s.hasClass("is-open")&&0===r(e.target).closest(s).length&&0===r(e.target).closest("[data-product-lookbook]").length&&s.removeClass("is-open")})),this.faqsToggle(),this.lookbookSlider()},c.faqsToggle=function(){n(".faq-desc").appendTo(".halo-faqs-sidebar .haloFaqs-header__des"),n(".page-normal .card .title").on("click",(function(e){e.preventDefault();var o=n(e.currentTarget);n(".page-normal .card .title").not(o).removeClass("collapsed"),o.hasClass("collapsed")?(o.removeClass("collapsed"),o.parents(".card").css("border-bottom-color","#F7F3E8")):(o.addClass("collapsed"),o.parents(".card").css("border-bottom-color","none")),n(".page-normal .card").each((function(e,o){n(".title",o).hasClass("collapsed")?n(o).find(".collapse").slideDown("slow"):n(o).find(".collapse").slideUp("slow")}))}))},c.lookbookSlider=function(){var e;n("#halo-lookbook-slider").length>0&&((e=n("#halo-lookbook-slider").find(".halo-lookbook-slider")).length>0&&e.slick({dots:!0,arrows:!1,mobileFirst:!0,slidesToShow:1,slidesToScroll:1,autoplay:!1,autoplaySpeed:5e3,infinite:!0,fade:!0,responsive:[{breakpoint:1025,settings:{dots:!1,arrows:!0}}]}))},t}(t.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.205.js.map