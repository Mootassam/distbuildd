"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6865],{47921:function(e,n,r){var t=r(76747),a=function(e){return e.user.form},o=(0,t.P1)([a],(function(e){return e.user})),s={selectInitLoading:(0,t.P1)([a],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,t.P1)([a],(function(e){return Boolean(e.saveLoading)})),selectUser:o,selectRaw:a};n.Z=s},47575:function(e,n,r){r(47313);var t=r(43270),a=r(49384),o=r(46417);function s(e){var n=e.label,r=e.description,s=e.name,i=e.hint,u=e.type,l=e.placeholder,c=e.autoFocus,d=e.autoComplete,f=e.required,m=e.externalErrorMessage,p=e.disabled,h=e.endAdornment,g=(0,t.Gc)(),v=g.register,x=g.errors,j=g.formState,b=j.touched,Z=j.isSubmitted,C=a.Z.errorMessage(s,x,b,Z,m);return(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("div",{className:h?"input-group":"",children:[Boolean(n)&&(0,o.jsx)("label",{className:"col-form-label ".concat(f?"required":null),htmlFor:s,children:n}),r,(0,o.jsx)("input",{id:s,name:s,type:u,ref:v,onChange:function(n){e.onChange&&e.onChange(n.target.value)},onBlur:function(n){e.onBlur&&e.onBlur(n)},placeholder:l||void 0,autoFocus:c||void 0,autoComplete:d||void 0,disabled:p,className:"form-control ".concat(C?"is-invalid":"")}),h&&(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("span",{className:"input-group-text",children:h})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:C}),Boolean(i)&&(0,o.jsx)("small",{className:"form-text text-muted",children:i})]})}s.defaultProps={type:"text",required:!1},n.Z=s},36691:function(e,n,r){r.r(n);var t=r(47313),a=r(45788),o=r(10499),s=r(30124),i=r(541),u=r(47921),l=r(27829),c=r(53852),d=r(75352),f=r(99433),m=r(46417);n.default=function(e){var n=(0,a.I0)(),r=(0,a.v9)(u.Z.selectSaveLoading);return(0,t.useEffect)((function(){n(i.Z.doInit())}),[n]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.Z,{items:[[(0,o.ag)("dashboard.menu"),"/"],[(0,o.ag)("user.menu"),"/user"],[(0,o.ag)("user.new.title")]]}),(0,m.jsxs)(l.Z,{children:[(0,m.jsx)(d.Z,{children:(0,o.ag)("user.new.title")}),(0,m.jsx)(f.Z,{saveLoading:r,onSubmit:function(e,r){n(i.Z.doAdd(r))},onCancel:function(){return(0,s.s1)().push("/user")}})]})]})}}}]);