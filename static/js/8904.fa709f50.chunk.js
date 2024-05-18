"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8904],{98904:function(n,t,a){a.r(t);var i=a(70885),e=a(47313),r=a(22102),o=a(63849),s=a(31616),c=a(10499),d=a(27829),l=a(53852),p=a(75352),m=a(52500),u=(a(68175),a(79489)),g=(a(85463),a(95748)),f=a(45788),b=a(60100),x=a(6936),h=a(56870),Z=a(61567),y=a(46417);t.default=function(){var n=e.useState(m.EditorState.createEmpty()),t=(0,i.Z)(n,2),a=t[0],v=t[1],j=(0,f.v9)(h.Z.selectRows),C=(0,f.v9)(h.Z.selectLoading),w=(0,e.useState)(""),N=(0,i.Z)(w,2),k=N[0],E=N[1],S=(0,f.I0)();return e.useEffect((function(){S(x.Z.doFetch())}),[a]),(0,e.useEffect)((function(){var n;j&&null!==(n=j[0])&&void 0!==n&&n.faqs&&E(j[0].faqs)}),[j]),(0,e.useEffect)((function(){var n=m.ContentState.createFromText(k),t=m.EditorState.createWithContent(n);v(t)}),[k]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(l.Z,{items:[[(0,c.ag)("dashboard.menu"),"/"],[(0,c.ag)("company.menu"),"/company"],[(0,c.ag)("company.faqs")]]}),(0,y.jsxs)(d.Z,{children:[C&&(0,y.jsx)(Z.Z,{}),!C&&j&&(0,y.jsxs)(r.Z,{fluid:!0,children:[(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(s.Z,{xs:9,children:(0,y.jsx)(p.Z,{children:(0,c.ag)("company.faqs")})}),(0,y.jsx)(s.Z,{md:"auto",children:(0,y.jsxs)("button",{className:"btn  btn-primary ",disabled:!1,type:"button",style:{width:250},onClick:function(){return function(){var n={faqs:a.getCurrentContent().getPlainText()};S(b.Z.doCreate(n))}()},children:[(0,y.jsx)(g.Z,{loading:!1,iconClass:"far fa-save"})," \xa0",(0,c.ag)("common.save")]})})]}),(0,y.jsx)(u.Editor,{editorState:a,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(n){v(n)}})]})]})]})}},27829:function(n,t,a){var i,e=a(30168),r=a(38269).ZP.div(i||(i=(0,e.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));t.Z=r},53852:function(n,t,a){var i,e=a(30168),r=(a(47313),a(28303)),o=a(38269),s=a(46417),c=o.ZP.nav(i||(i=(0,e.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));t.Z=function(n){var t=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(a,i){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===i?"active":""),children:t(a)?(0,s.jsx)(r.rU,{to:a[1],children:a[0]}):a[0]},a[0])}))})})}},95748:function(n,t,a){a(47313);var i=a(46417);t.Z=function(n){return n.loading?(0,i.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,i.jsx)("i",{className:n.iconClass}):null}},61567:function(n,t,a){a(47313);var i=a(46417);t.Z=function(){return(0,i.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,i.jsx)("div",{className:"spinner-border text-primary"})})}},75352:function(n,t,a){var i,e=a(30168),r=a(38269).ZP.h1(i||(i=(0,e.Z)(["\n  margin-bottom: 24px;\n"])));t.Z=r}}]);