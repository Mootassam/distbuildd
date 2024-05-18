"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[1728],{20461:function(n,t,e){var i={selectLoading:(0,e(76747).P1)([function(n){return n.product.destroy}],(function(n){return Boolean(n.loading)}))};t.Z=i},4694:function(n,t,e){var i=e(76747),r=e(86495),a=e(26319),o=e(71945),s=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,t){return new a.Z(n,t).match(o.Z.values.couponsRead)})),c=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,t){return new a.Z(n,t).match(o.Z.values.couponsEdit)})),l=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,t){return new a.Z(n,t).match(o.Z.values.couponsCreate)})),d=(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,t){return new a.Z(n,t).match(o.Z.values.couponsImport)})),u={selectPermissionToRead:s,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,i.P1)([r.Z.selectCurrentTenant,r.Z.selectCurrentUser],(function(n,t){return new a.Z(n,t).match(o.Z.values.couponsDestroy)})),selectPermissionToImport:d};t.Z=u},27829:function(n,t,e){var i,r=e(30168),a=e(38269).ZP.div(i||(i=(0,r.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));t.Z=a},61728:function(n,t,e){e.r(t),e.d(t,{default:function(){return R}});var i=e(47313),r=e(45788),a=e(63830),o=e(10499),s=e(11709),c=e(76747),l=function(n){return n.product.view},d=(0,c.P1)([l],(function(n){return n.record})),u={selectLoading:(0,c.P1)([l],(function(n){return Boolean(n.loading)})),selectRecord:d,selectRaw:l},m=e(61567),p=e(25969),f=e(31287),b=e(37712),g=e(46417);var x=function(n){var t=n.record;return n.loading||!t?(0,g.jsx)(m.Z,{}):(0,g.jsxs)(p.Z,{children:[(0,g.jsx)(b.Z,{label:(0,o.ag)("entities.product.fields.vip"),value:t.vip}),(0,g.jsx)(f.Z,{label:(0,o.ag)("entities.product.fields.title"),value:t.title}),(0,g.jsx)(f.Z,{label:(0,o.ag)("entities.product.fields.price"),value:t.amount}),(0,g.jsx)(f.Z,{label:(0,o.ag)("entities.product.fields.commission"),value:t.commission})]})},v=e(70885),h=e(28303),Z=e(23516),j=e(4694),y=e(41419),C=e(20461),w=e(44587),P=e(10419),N=e(95748);var T=function(n){var t=(0,i.useState)(!1),e=(0,v.Z)(t,2),a=e[0],s=e[1],c=(0,r.I0)(),l=n.match.params.id,d=(0,r.v9)(Z.Z.selectPermissionToRead),u=(0,r.v9)(j.Z.selectPermissionToEdit),m=(0,r.v9)(j.Z.selectPermissionToDestroy),p=(0,r.v9)(C.Z.selectLoading),f=function(){s(!1)};return(0,g.jsxs)(P.Z,{children:[u&&(0,g.jsx)(h.rU,{to:"/product/".concat(l,"/edit"),children:(0,g.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,g.jsx)(N.Z,{iconClass:"fas fa-edit"}),(0,o.ag)("common.edit")]})}),m&&(0,g.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:p,onClick:function(){s(!0)},children:[(0,g.jsx)(N.Z,{loading:p,iconClass:"fas fa-trash-alt"}),(0,o.ag)("common.destroy")]}),d&&(0,g.jsx)(h.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:(0,g.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,g.jsx)(N.Z,{iconClass:"fas fa-history"}),(0,o.ag)("auditLog.menu")]})}),a&&(0,g.jsx)(w.Z,{title:(0,o.ag)("common.areYouSure"),onConfirm:function(){return f(),void c(y.Z.doDestroy(l))},onClose:function(){return f()},okText:(0,o.ag)("common.yes"),cancelText:(0,o.ag)("common.no")})]})},k=e(27829),U=e(53852),I=e(75352);var R=function(){var n=(0,r.I0)(),t=(0,a.$B)(),e=(0,r.v9)(u.selectLoading),c=(0,r.v9)(u.selectRecord);return(0,i.useEffect)((function(){n(s.Z.doFind(t.params.id))}),[n,t.params.id]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(U.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("entities.product.menu"),"/product"],[(0,o.ag)("entities.product.view.title")]]}),(0,g.jsxs)(k.Z,{children:[(0,g.jsx)(I.Z,{children:(0,o.ag)("entities.product.view.title")}),(0,g.jsx)(T,{match:t}),(0,g.jsx)(x,{loading:e,record:c})]})]})}},53852:function(n,t,e){var i,r=e(30168),a=(e(47313),e(28303)),o=e(38269),s=e(46417),c=o.ZP.nav(i||(i=(0,r.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));t.Z=function(n){var t=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(e,i){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:t(e)?(0,s.jsx)(a.rU,{to:e[1],children:e[0]}):e[0]},e[0])}))})})}},95748:function(n,t,e){e(47313);var i=e(46417);t.Z=function(n){return n.loading?(0,i.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,i.jsx)("i",{className:n.iconClass}):null}},61567:function(n,t,e){e(47313);var i=e(46417);t.Z=function(){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)("div",{className:"spinner-border text-primary"})})}},44587:function(n,t,e){var i=e(47313),r=e(1168),a=e(46417);t.Z=function(n){var t=(0,i.useRef)();(0,i.useEffect)((function(){window.$(t.current).modal("show"),window.$(t.current).on("hidden.bs.modal",n.onClose)}),[]);return r.createPortal((0,a.jsx)("div",{ref:t,className:"modal",tabIndex:-1,children:(0,a.jsx)("div",{className:"modal-dialog modal-sm",children:(0,a.jsxs)("div",{className:"modal-content",children:[(0,a.jsxs)("div",{className:"modal-header",children:[(0,a.jsx)("h5",{className:"modal-title",children:n.title}),(0,a.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,a.jsx)("span",{children:"\xd7"})})]}),(0,a.jsxs)("div",{className:"modal-footer",children:[(0,a.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:n.cancelText}),(0,a.jsx)("button",{type:"button",onClick:function(){return window.$(t.current).modal("hide"),n.onConfirm()},className:"btn btn-primary btn-sm",children:n.okText})]})]})})}),document.getElementById("modal-root"))}},75352:function(n,t,e){var i,r=e(30168),a=e(38269).ZP.h1(i||(i=(0,r.Z)(["\n  margin-bottom: 24px;\n"])));t.Z=a},10419:function(n,t,e){var i,r=e(30168),a=e(38269).ZP.div(i||(i=(0,r.Z)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));t.Z=a},25969:function(n,t,e){var i,r=e(30168),a=e(38269).ZP.div(i||(i=(0,r.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])));t.Z=a},31287:function(n,t,e){e(47313);var i=e(46417);t.Z=function(n){if(!n.value&&0!==n.value&&!1!==n.value)return null;var t="".concat(n.prefix?"".concat(n.prefix," "):"").concat(n.value);return(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{className:"col-form-label",children:n.label}),(0,i.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:t})]})}},37712:function(n,t,e){e(47313);var i=e(45788),r=e(28303),a=e(4694),o=e(46417);t.Z=function(n){var t=(0,i.v9)(a.Z.selectPermissionToRead),e=function(){var t=n.value;return t?Array.isArray(t)?t:[t]:[]};return e().length?(0,o.jsxs)("div",{style:{marginBottom:"16px"},children:[(0,o.jsx)("label",{className:"col-form-label",children:n.label}),e().map((function(n){return e=n,t?(0,o.jsx)("div",{children:(0,o.jsx)(r.rU,{className:"btn btn-link",to:"/vip/".concat(e.id),children:e.title})},e.id):(0,o.jsx)("div",{children:e.title},e.id);var e}))]}):null}}}]);