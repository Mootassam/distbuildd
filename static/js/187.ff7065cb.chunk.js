"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[187],{89994:function(n,e,r){var i=r(42982),t=r(6473),a=r(10499),l=r(70816),o=r.n(l),u={generic:function(n){return t.nK().label(n)},string:function(n,e){e=e||{};var r=t.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},boolean:function(n,e){return t.Xg().default(!1).label(n)},relationToOne:function(n,e){e=e||{};var r=t.nK().nullable(!0).label(n).transform((function(n,e){return e?e.id:null}));return e.required&&(r=r.required()),r},stringArray:function(n,e){e=e||{};var r=t.IX().compact().ensure().of(t.Z_().transform((function(n,e){return""===e?null:n})).trim()).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},relationToMany:function(n,e){e=e||{};var r=t.IX().nullable(!0).label(n).transform((function(n,e){return e&&e.length?e.map((function(n){return n.id})):[]}));return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},integer:function(n,e){e=e||{};var r=t.Rx().transform((function(n,e){return""===e?null:n})).integer().nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},images:function(n,e){e=e||{};var r=t.IX().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},files:function(n,e){e=e||{};var r=t.IX().compact().ensure().nullable(!0).label(n);return(e.required||e.min)&&(r=r.required()),e.min||0===e.min?r=r.min(e.min):e.required&&(r=r.min(1)),e.max&&(r=r.max(e.max)),r},enumerator:function(n,e){e=e||{};var r=t.Z_().transform((function(n,e){return""===e?null:n})).label(n).nullable(!0).oneOf([null].concat((0,i.Z)(e.options||[])));return e.required&&(r=r.required((0,a.ag)("validation.string.selected"))),r},email:function(n,e){e=e||{};var r=t.Z_().transform((function(n,e){return""===e?null:n})).nullable(!0).trim().label(n).email();return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),e.matches&&(r=r.matches(e.matches)),r},decimal:function(n,e){e=e||{};var r=t.Rx().transform((function(n,e){return""===e?null:n})).nullable(!0).label(n);return e.required&&(r=r.required()),(e.min||0===e.min)&&(r=r.min(e.min)),e.max&&(r=r.max(e.max)),r},datetime:function(n,e){e=e||{};var r=t.nK().nullable(!0).label(n).transform((function(n,e){return n?o()(e,"YYYY-MM-DD HH:mm").toISOString():null}));return e.required&&(r=r.required()),r},date:function(n,e){e=e||{};var r=t.nK().nullable(!0).label(n).test("is-date",(0,a.ag)("validation.mixed.default"),(function(n){return!n||o()(n,"YYYY-MM-DD").isValid()})).transform((function(n){return n?o()(n).format("YYYY-MM-DD"):null}));return e.required&&(r=r.required()),r}};e.Z=u},90187:function(n,e,r){r.r(e);var i=r(1413),t=r(74165),a=r(15861),l=r(70885),o=r(47313),u=r(43270),s=r(45788),m=r(28303),c=r(10499),d=r(926),f=r(86495),h=r(89994),x=r(32377),p=r(94827),b=r(37078),g=r(11581),v=r(95748),Z=r(47575),q=r(6473),j=r(67357),w=r(46417),y=q.Ry().shape({email:h.Z.string((0,c.ag)("user.fields.email"),{required:!0,max:255})});e.default=function(){var n=(0,s.I0)(),e=(0,s.v9)(f.Z.selectLoadingPasswordResetEmail),r=(0,s.v9)(f.Z.selectBackgroundImageUrl),h=(0,s.v9)(f.Z.selectLogoUrl),q=(0,o.useState)((function(){return{email:""}})),k=(0,l.Z)(q,1)[0],N=(0,u.cI)({resolver:(0,j.X)(y),mode:"onSubmit",defaultValues:k}),Y=function(){var e=(0,a.Z)((0,t.Z)().mark((function e(r){var i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.email,e.next=3,n(d.Z.doSendPasswordResetEmail(i));case 3:Object.keys(k).forEach((function(n){N.setValue(n,k[n])}));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,w.jsx)(p.Z,{style:{backgroundImage:"url(".concat(r||"/images/forgotPassword.jpg",")")},children:(0,w.jsxs)(x.Z,{children:[(0,w.jsx)(b.Z,{children:h?(0,w.jsx)("img",{src:h,width:"240px",alt:(0,c.ag)("app.title")}):(0,w.jsx)("h1",{children:(0,c.ag)("app.title")})}),(0,w.jsx)(u.RV,(0,i.Z)((0,i.Z)({},N),{},{children:(0,w.jsxs)("form",{onSubmit:N.handleSubmit(Y),children:[(0,w.jsx)(Z.Z,{name:"email",label:(0,c.ag)("user.fields.email"),autoComplete:"email",disabled:e,autoFocus:!0}),(0,w.jsxs)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e,children:[(0,w.jsx)(v.Z,{loading:e}),(0,c.ag)("auth.passwordResetEmail.message")]}),(0,w.jsx)(g.Z,{children:(0,w.jsx)(m.rU,{className:"btn btn-sm btn-link",to:"/auth/signin",children:(0,c.ag)("common.cancel")})})]})}))]})})}},32377:function(n,e,r){var i,t=r(30168),a=r(38269).ZP.div(i||(i=(0,t.Z)(["\n  width: 500px;\n  height: 100%;\n  min-height: 100%;\n  overflow-y: auto;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 56px 40px;\n  position: relative;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: white;\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    color: white;\n  }\n\n  h4 {\n    font-size: 1.25em;\n  }\n\n  a,\n  a:hover {\n    color: white;\n  }\n\n  .btn-link,\n  .btn-link:hover {\n    color: white;\n  }\n\n  .invalid-feedback {\n    display: block;\n  }\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])));e.Z=a},37078:function(n,e,r){var i,t=r(30168),a=r(38269).ZP.div(i||(i=(0,t.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 48px;\n  justify-content: center;\n  align-items: center;\n  flex-shrink: 0;\n  color: white;\n\n  h1 {\n    margin-bottom: 0;\n  }\n"])));e.Z=a},11581:function(n,e,r){var i,t=r(30168),a=r(38269).ZP.div(i||(i=(0,t.Z)(["\n  margin-top: 24px;\n  text-align: center;\n"])));e.Z=a},94827:function(n,e,r){var i,t=r(30168),a=r(38269).ZP.div(i||(i=(0,t.Z)(["\n  width: 100%;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  position: relative;\n  background-size: cover;\n\n  &:before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    display: flex;\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    z-index: 1;\n    top: 0;\n  }\n"])));e.Z=a},95748:function(n,e,r){r(47313);var i=r(46417);e.Z=function(n){return n.loading?(0,i.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,i.jsx)("i",{className:n.iconClass}):null}},49384:function(n,e,r){r.d(e,{Z:function(){return a}});var i=r(15671),t=r(43144),a=function(){function n(){(0,i.Z)(this,n)}return(0,t.Z)(n,null,[{key:"errorMessage",value:function(n,e,r,i){var t,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(a)return a;if(!i&&!r[n])return null;var l=e[n];return(null===l||void 0===l||null===(t=l[0])||void 0===t?void 0:t.message)||(null===l||void 0===l?void 0:l.message)||l||null}}]),n}()},47575:function(n,e,r){r(47313);var i=r(43270),t=r(49384),a=r(46417);function l(n){var e=n.label,r=n.description,l=n.name,o=n.hint,u=n.type,s=n.placeholder,m=n.autoFocus,c=n.autoComplete,d=n.required,f=n.externalErrorMessage,h=n.disabled,x=n.endAdornment,p=(0,i.Gc)(),b=p.register,g=p.errors,v=p.formState,Z=v.touched,q=v.isSubmitted,j=t.Z.errorMessage(l,g,Z,q,f);return(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsxs)("div",{className:x?"input-group":"",children:[Boolean(e)&&(0,a.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:l,children:e}),r,(0,a.jsx)("input",{id:l,name:l,type:u,ref:b,onChange:function(e){n.onChange&&n.onChange(e.target.value)},onBlur:function(e){n.onBlur&&n.onBlur(e)},placeholder:s||void 0,autoFocus:m||void 0,autoComplete:c||void 0,disabled:h,className:"form-control ".concat(j?"is-invalid":"")}),x&&(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("span",{className:"input-group-text",children:x})})]}),(0,a.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(o)&&(0,a.jsx)("small",{className:"form-text text-muted",children:o})]})}l.defaultProps={type:"text",required:!1},e.Z=l}}]);