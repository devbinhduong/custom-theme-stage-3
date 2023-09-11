"use strict";(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[548],{52548:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var r=a(49230),i=a(21340),o=a(40097),n=a(58354),s=a(73609),l=a(67313),d=a(99706),c=a(55825);function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}var m=function(t){var e,a;function r(e){var a;return(a=t.call(this,e)||this).validationDictionary=(0,d.M)(e),a.formCreateSelector="form[data-create-account-form]",a.recaptcha=c(".g-recaptcha iframe[src]"),a}a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,u(e,a);var m=r.prototype;return m.registerLoginValidation=function(t){var e=this,a=s.Z;this.loginValidator=(0,o.Z)({submit:'.login-form input[type="submit"]',tap:l.kk}),this.loginValidator.add([{selector:'.login-form input[name="login_email"]',validate:function(t,e){t(a.email(e))},errorMessage:this.context.useValidEmail},{selector:'.login-form input[name="login_pass"]',validate:function(t,e){t(a.password(e))},errorMessage:this.context.enterPass}]),t.on("submit",(function(t){e.loginValidator.performCheck(),e.loginValidator.areAll("valid")||t.preventDefault()}))},m.registerForgotPasswordValidation=function(t){var e=this;this.forgotPasswordValidator=(0,o.Z)({submit:'.forgot-password-form input[type="submit"]',tap:l.kk}),this.forgotPasswordValidator.add([{selector:'.forgot-password-form input[name="email"]',validate:function(t,e){t(s.Z.email(e))},errorMessage:this.context.useValidEmail}]),t.on("submit",(function(t){e.forgotPasswordValidator.performCheck(),e.forgotPasswordValidator.areAll("valid")||t.preventDefault()}))},m.registerNewPasswordValidation=function(){var t=this.validationDictionary,e=t.password,a=t.password_match,r=t.invalid_password,i=".new-password-form",n=(0,o.Z)({submit:c(i+' input[type="submit"]'),tap:l.kk}),s=c(i+' input[name="password"]'),d=c(i+' input[name="password_confirm"]'),u=(0,l.Ek)(e,e,a,r);l.kI.setPasswordValidation(n,s,d,this.passwordRequirements,u)},m.registerCreateAccountValidator=function(t){var e,a=this,r=(0,n.Z)(t,this.context),s=(0,o.Z)({submit:this.formCreateSelector+" input[type='submit']",tap:l.kk}),d=c('[data-field-type="State"]'),u=this.formCreateSelector+" [data-field-type='EmailAddress']",m=c(u),f=this.formCreateSelector+" [data-field-type='Password']",p=c(f),h=this.formCreateSelector+" [data-field-type='ConfirmPassword']",v=c(h);if(s.add(r),d&&(0,i.Z)(d,this.context,(function(t,r){if(t)throw new Error(t);var i=c(r);"undefined"!==s.getStatus(d)&&s.remove(d),e&&s.remove(e),i.is("select")?(e=r,l.kI.setStateCountryValidation(s,r,a.validationDictionary.field_not_blank)):l.kI.cleanUpStateValidation(r)})),m&&(s.remove(u),l.kI.setEmailValidation(s,u,this.validationDictionary.valid_email)),p&&v){var g=this.validationDictionary,w=g.password,b=g.password_match,y=g.invalid_password;s.remove(f),s.remove(h),l.kI.setPasswordValidation(s,f,h,this.passwordRequirements,(0,l.Ek)(w,w,b,y))}t.on("submit",(function(t){s.performCheck(),s.areAll("valid")||t.preventDefault()}))},m.onReady=function(){this.recaptcha.attr("title")||this.recaptcha.attr("title",this.context.recaptchaTitle);var t=(0,l.iR)(this.formCreateSelector),e=(0,l.iR)(".login-form"),a=(0,l.iR)(".forgot-password-form"),r=(0,l.iR)(".new-password-form");this.passwordRequirements=this.context.passwordRequirements,e.length&&this.registerLoginValidation(e),r.length&&this.registerNewPasswordValidation(),a.length&&this.registerForgotPasswordValidation(a),t.length&&this.registerCreateAccountValidator(t)},r}(r.Z)},58354:(t,e,a)=>{a.d(e,{Z:()=>o});var r=a(99706),i=a(55825);function o(t,e){var a=[],o=(0,r.M)(e).field_not_blank;return t.find("[data-validation]").each((function(t,e){var r=i(e).first().data("validation").label+o;a=a.concat(function(t,e){var a,r,o,n=t.data("validation"),s=[],l="#"+t.attr("id");if("datechooser"===n.type){var d=function(t,e){if(e.min_date&&e.max_date){var a="Your chosen date must fall between "+e.min_date+" and "+e.max_date+".",r=t.attr("id"),i=e.min_date.split("-"),o=e.max_date.split("-"),n=new Date(i[0],i[1]-1,i[2]),s=new Date(o[0],o[1]-1,o[2]);return{selector:"#"+r+' select[data-label="year"]',triggeredBy:"#"+r+' select:not([data-label="year"])',validate:function(e,a){var r=Number(t.find('select[data-label="day"]').val()),i=Number(t.find('select[data-label="month"]').val())-1,o=Number(a),l=new Date(o,i,r);e(l>=n&&l<=s)},errorMessage:a}}}(t,n);d&&s.push(d)}else!n.required||"checkboxselect"!==n.type&&"radioselect"!==n.type?t.find("input, select, textarea").each((function(t,a){var r=i(a),o=r.get(0).tagName,d=r.attr("name"),c=l+" "+o+'[name="'+d+'"]';"numberonly"===n.type&&s.push(function(t,e){var a="The value for "+t.label+" must be between "+t.min+" and "+t.max+".",r=Number(t.min),i=Number(t.max);return{selector:e+' input[name="'+t.name+'"]',validate:function(t,e){var a=Number(e);t(a>=r&&a<=i)},errorMessage:a}}(n,l)),n.required&&s.push(function(t,e,a){return{selector:e,validate:function(t,e){t(e.length>0)},errorMessage:a}}(0,c,e))})):s.push((a=e,{selector:"#"+(r=t.attr("id"))+" input:first-of-type",triggeredBy:o="#"+r+" input",validate:function(t){var e=!1;i(o).each((function(t,a){if(a.checked)return e=!0,!1})),t(e)},errorMessage:a}));return s}(i(e),r))})),a}}}]);
//# sourceMappingURL=theme-bundle.chunk.548.js.map