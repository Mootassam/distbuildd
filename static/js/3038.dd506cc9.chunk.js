"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3038],{89994:function(n,e,r){var a=r(42982),i=r(6473),t=r(10499),o=r(70816),s=r.n(o),l={generic:function(n){return i.nK().label(n)},string:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return i.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=i.IX().compact().ensure().of(i.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=i.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=i.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,a.Z)(e.options||[])));return e.required&&(r=r.required((0,t.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=i.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=i.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).transform((function(n,e){return n?s()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=i.nK().nullable(!0).label(n).test("is-date",(0,t.ag)("validation.mixed.default"),(function(n){return!n||s()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?s()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=l},23038:function(n,e,r){r.r(e),r.d(e,{default:function(){return y}});var a=r(47313),i=r(10499),t=r(30124),o=r(1413),s=r(70885),l=r(43270),d=r(45788),c=r(926),u=r(86495),m=r(89994),f=r(95748),p=r(47575),g=r(68160),b=r(6473),x=r(67357),h=r(46417),v=b.Ry().shape({oldPassword:m.Z.string((0,i.ag)("user.fields.oldPassword"),{required:!0}),newPassword:m.Z.string((0,i.ag)("user.fields.newPassword"),{required:!0}),newPasswordConfirmation:m.Z.string((0,i.ag)("user.fields.newPasswordConfirmation"),{required:!0}).oneOf([b.iH("newPassword"),null],(0,i.ag)("auth.passwordChange.mustMatch"))});var w=function(n){var e=(0,d.I0)(),r=(0,a.useState)((function(){return{oldPassword:"",newPassword:"",newPasswordConfirmation:""}})),t=(0,s.Z)(r,1)[0],m=(0,l.cI)({resolver:(0,x.X)(v),mode:"all",defaultValues:t}),b=(0,d.v9)(u.Z.selectLoadingPasswordChange),w=function(n){e(c.Z.doChangePassword(n.oldPassword,n.newPassword))};return(0,h.jsx)(g.Z,{children:(0,h.jsx)(l.RV,(0,o.Z)((0,o.Z)({},m),{},{children:(0,h.jsxs)("form",{onSubmit:m.handleSubmit(w),children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(p.Z,{type:"password",name:"oldPassword",label:(0,i.ag)("user.fields.oldPassword"),autoComplete:"old-password",autoFocus:!0})}),(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(p.Z,{type:"password",name:"newPassword",label:(0,i.ag)("user.fields.newPassword"),autoComplete:"new-password"})}),(0,h.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,h.jsx)(p.Z,{type:"password",name:"newPasswordConfirmation",label:(0,i.ag)("user.fields.newPasswordConfirmation"),autoComplete:"new-password"})})]}),(0,h.jsxs)("div",{className:"form-buttons",children:[(0,h.jsxs)("button",{className:"btn btn-primary",disabled:b,type:"button",onClick:m.handleSubmit(w),children:[(0,h.jsx)(f.Z,{loading:b,iconClass:"far fa-save"}),(0,i.ag)("common.save")]}),(0,h.jsxs)("button",{disabled:b,onClick:function(){Object.keys(t).forEach((function(n){m.setValue(n,t[n])}))},className:"btn btn-light",type:"button",children:[(0,h.jsx)("i",{className:"fas fa-undo"}),(0,i.ag)("common.reset")]}),n.onCancel?(0,h.jsxs)("button",{disabled:b,onClick:function(){return n.onCancel()},className:"btn btn-light",type:"button",children:[(0,h.jsx)("i",{className:"fas fa-times"}),(0,i.ag)("common.cancel")]}):null]})]})}))})},Z=r(27829),j=r(53852),q=r(75352);var y=function(n){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(j.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("auth.passwordChange.title")]]}),(0,h.jsxs)(Z.Z,{children:[(0,h.jsx)(q.Z,{children:(0,i.ag)("auth.passwordChange.title")}),(0,h.jsx)(w,{onCancel:function(){return(0,t.s1)().push("/")}})]})]})}},27829:function(n,e,r){var a,i=r(30168),t=r(38269).ZP.div(a||(a=(0,i.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=t},53852:function(n,e,r){var a,i=r(30168),t=(r(47313),r(28303)),o=r(38269),s=r(46417),l=o.ZP.nav(a||(a=(0,i.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(l,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(r,a){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===a?"active":""),children:e(r)?(0,s.jsx)(t.rU,{to:r[1],children:r[0]}):r[0]},r[0])}))})})}},95748:function(n,e,r){r(47313);var a=r(46417);e.Z=function(n){return n.loading?(0,a.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,a.jsx)("i",{className:n.iconClass}):null}},49384:function(n,e,r){r.d(e,{Z:function(){return t}});var a=r(15671),i=r(43144),t=function(){function n(){(0,a.Z)(this,n)}return(0,i.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,a){var i,t=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(t)return t;if(!a&&!r[n])return null;var o=e[n];return(null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.message)||(null===o||void 0===o?void 0:o.message)||o||null}}]),n}()},47575:function(n,e,r){r(47313);var a=r(43270),i=r(49384),t=r(46417);function o(n){var e=n.label,r=n.description,o=n.name,s=n.hint,l=n.type,d=n.placeholder,c=n.autoFocus,u=n.autoComplete,m=n.required,f=n.externalErrorMessage,p=n.disabled,g=n.endAdornment,b=(0,a.Gc)(),x=b.register,h=b.errors,v=b.formState,w=v.touched,Z=v.isSubmitted,j=i.Z.errorMessage(o,h,w,Z,f);return(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsxs)("div",{className:g?"input-group":"",children:[Boolean(e)&&(0,t.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:o,children:e}),r,(0,t.jsx)("input",{id:o,name:o,type:l,ref:x,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:d||void 0,autoFocus:c||void 0,autoComplete:u||void 0,disabled:p,className:"form-control ".concat(j?"is-invalid":"")}),g&&(0,t.jsx)("div",{className:"input-group-append",children:(0,t.jsx)("span",{className:"input-group-text",children:g})})]}),(0,t.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(s)&&(0,t.jsx)("small",{className:"form-text text-muted",children:s})]})}o.defaultProps={type:"text",required:!1},e.Z=o},68160:function(n,e,r){var a,i=r(30168),t=r(38269).ZP.div(a||(a=(0,i.Z)(["\n  padding-top: 0;\n  padding-bottom: 0;\n\n  label.required::before {\n    display: inline-block;\n    margin-right: 4px;\n    content: '*';\n    line-height: 1;\n    font-size: 13px;\n    color: #f5222d;\n  }\n  .app__specification {\n    padding: 14px;\n  }\n  .react-datepicker-wrapper {\n    width: 100%;\n  }\n  i {\n    padding-right: 4px;\n    font-size: 14px;\n  }\n  .adherent-control {\n    z-index: 0;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  .form-buttons {\n    padding-top: 16px;\n\n    .btn {\n      margin-right: 8px;\n      margin-bottom: 8px;\n    }\n  }\n"])));e.Z=t},75352:function(n,e,r){var a,i=r(30168),t=r(38269).ZP.h1(a||(a=(0,i.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=t}}]);