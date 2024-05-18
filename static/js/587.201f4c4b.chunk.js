"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[587],{80203:function(e,t){t.Z={status:["enable","disable"]}},92928:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(74165),r=n(15861),o=n(15671),i=n(43144),s=n(63922),u=n(81384),c=function(){function e(){(0,o.Z)(this,e)}return(0,i.Z)(e,null,[{key:"update",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:t,data:n},o=u.Z.get(),e.next=4,s.Z.put("/tenant/".concat(o,"/paymentsettings/").concat(t),r);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"destroyAll",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={ids:t},r=u.Z.get(),e.next=4,s.Z.delete("/tenant/".concat(r,"/paymentsettings"),{params:n});case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"create",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={data:t},r=u.Z.get(),e.next=4,s.Z.post("/tenant/".concat(r,"/paymentsettings"),n);case 4:return o=e.sent,e.abrupt("return",o.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"import",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={data:t,importHash:n},o=u.Z.get(),e.next=4,s.Z.post("/tenant/".concat(o,"/paymentsettings/import"),r);case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"find",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t){var n,r;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.Z.get(),e.next=3,s.Z.get("/tenant/".concat(n,"/paymentsettings/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"list",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r,o){var i,c,l;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i={filter:t,orderBy:n,limit:r,offset:o},c=u.Z.get(),e.next=4,s.Z.get("/tenant/".concat(c,"/paymentsettings"),{params:i});case 4:return l=e.sent,e.abrupt("return",l.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},{key:"listAutocomplete",value:function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n){var r,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={query:t,limit:n},o=u.Z.get(),e.next=4,s.Z.get("/tenant/".concat(o,"/paymentsettings/autocomplete"),{params:r});case 4:return i=e.sent,e.abrupt("return",i.data);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}()},86213:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(70885),r=n(47313),o=n(45788),i=n(63830),s=n(10499),u=n(74165),c=n(15861),l=n(92928),d=n(33512),p=n(14122),f=n(30124),m="PAYMENTSETTINGS_FORM",g={INIT_STARTED:"".concat(m,"_INIT_STARTED"),INIT_SUCCESS:"".concat(m,"_INIT_SUCCESS"),INIT_ERROR:"".concat(m,"_INIT_ERROR"),CREATE_STARTED:"".concat(m,"_CREATE_STARTED"),CREATE_SUCCESS:"".concat(m,"_CREATE_SUCCESS"),CREATE_ERROR:"".concat(m,"_CREATE_ERROR"),UPDATE_STARTED:"".concat(m,"_UPDATE_STARTED"),UPDATE_SUCCESS:"".concat(m,"_UPDATE_SUCCESS"),UPDATE_ERROR:"".concat(m,"_UPDATE_ERROR"),doInit:function(e){return function(){var t=(0,c.Z)((0,u.Z)().mark((function t(n){var a;return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,n({type:g.INIT_STARTED}),a={},!Boolean(e)){t.next=8;break}return t.next=7,l.Z.find(e);case 7:a=t.sent;case 8:n({type:g.INIT_SUCCESS,payload:a}),t.next=16;break;case 11:t.prev=11,t.t0=t.catch(0),d.Z.handle(t.t0),n({type:g.INIT_ERROR}),(0,f.s1)().push("/paymentsettings");case 16:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()},doCreate:function(e){return function(){var t=(0,c.Z)((0,u.Z)().mark((function t(n){return(0,u.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n({type:g.CREATE_STARTED}),t.next=4,l.Z.create(e);case 4:n({type:g.CREATE_SUCCESS}),p.Z.success((0,s.ag)("entities.paymentsettings.create.success")),(0,f.s1)().push("/paymentsettings"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),d.Z.handle(t.t0),n({type:g.CREATE_ERROR});case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()},doUpdate:function(e,t){return function(){var n=(0,c.Z)((0,u.Z)().mark((function n(a,r){return(0,u.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,a({type:g.UPDATE_STARTED}),n.next=4,l.Z.update(e,t);case 4:a({type:g.UPDATE_SUCCESS}),p.Z.success((0,s.ag)("entities.paymentsettings.update.success")),(0,f.s1)().push("/paymentsettings"),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),d.Z.handle(n.t0),a({type:g.UPDATE_ERROR});case 13:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e,t){return n.apply(this,arguments)}}()}},v=g,h=n(76747),b=function(e){return e.paymentsettings.form},y=(0,h.P1)([b],(function(e){return e.record})),x={selectInitLoading:(0,h.P1)([b],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,h.P1)([b],(function(e){return Boolean(e.saveLoading)})),selectRecord:y,selectRaw:b},Z=n(1413),E=n(43270),C=n(89994),S=n(95748),j=n(68160),R=n(6473),T=n(67357),N=n(47575),w=n(5544),B=n(80203),_=n(96111),k=n(85543),A=n(21538),I=n(46417),q=R.Ry().shape({name:C.Z.string((0,s.ag)("entities.paymentsettings.fields.name"),{}),information:C.Z.string((0,s.ag)("entities.paymentsettings.fields.information"),{required:!0}),uniqueKeywords:C.Z.string((0,s.ag)("entities.paymentsettings.fields.uniqueKeywords"),{}),photo:C.Z.images((0,s.ag)("entities.paymentsettings.fields.photo"),{}),text:C.Z.string((0,s.ag)("entities.paymentsettings.fields.text"),{}),status:C.Z.enumerator((0,s.ag)("entities.paymentsettings.fields.status"),{options:B.Z.status})});var D=function(e){var t=(0,r.useState)((function(){var t=e.record||{};return{name:t.name,information:t.information,uniqueKeywords:t.uniqueKeywords,photo:t.photo||[],text:t.text,status:t.status}})),n=(0,a.Z)(t,1)[0],o=(0,E.cI)({resolver:(0,T.X)(q),mode:"all",defaultValues:n}),i=function(t){var n;e.onSubmit(null===(n=e.record)||void 0===n?void 0:n.id,t)};return(0,I.jsx)(j.Z,{children:(0,I.jsx)(E.RV,(0,Z.Z)((0,Z.Z)({},o),{},{children:(0,I.jsxs)("form",{onSubmit:o.handleSubmit(i),children:[(0,I.jsxs)("div",{className:"row",children:[(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(N.Z,{name:"name",label:(0,s.ag)("entities.paymentsettings.fields.name"),required:!1,autoFocus:!0})}),(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(A.Z,{name:"information",label:(0,s.ag)("entities.paymentsettings.fields.information"),required:!0})}),(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(N.Z,{name:"uniqueKeywords",label:(0,s.ag)("entities.paymentsettings.fields.uniqueKeywords"),required:!1})}),(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(k.Z,{name:"photo",label:(0,s.ag)("entities.paymentsettings.fields.photo"),required:!1,storage:_.Z.values.paymentsettingsPhoto,max:void 0})}),(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(N.Z,{name:"text",label:(0,s.ag)("entities.paymentsettings.fields.text"),required:!1})}),(0,I.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,I.jsx)(w.Z,{name:"status",label:(0,s.ag)("entities.paymentsettings.fields.status"),options:B.Z.status.map((function(e){return{value:e,label:(0,s.ag)("entities.paymentsettings.enumerators.status.".concat(e))}})),required:!1})})]}),(0,I.jsxs)("div",{className:"form-buttons",children:[(0,I.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:o.handleSubmit(i),children:[(0,I.jsx)(S.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,s.ag)("common.save")]}),(0,I.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(n).forEach((function(e){o.setValue(e,n[e])}))},children:[(0,I.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,s.ag)("common.reset")]}),e.onCancel?(0,I.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,I.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,s.ag)("common.cancel")]}):null]})]})}))})},P=n(27829),U=n(53852),M=n(61567),L=n(75352);var O=function(e){var t=(0,r.useState)(!1),n=(0,a.Z)(t,2),u=n[0],c=n[1],l=(0,o.I0)(),d=(0,i.$B)(),p=(0,o.v9)(x.selectInitLoading),m=(0,o.v9)(x.selectSaveLoading),g=(0,o.v9)(x.selectRecord),h=Boolean(d.params.id),b=h?(0,s.ag)("entities.paymentsettings.edit.title"):(0,s.ag)("entities.paymentsettings.new.title");return(0,r.useEffect)((function(){l(v.doInit(d.params.id)),c(!0)}),[l,d.params.id]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(U.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.paymentsettings.menu"),"/paymentsettings"],[b]]}),(0,I.jsxs)(P.Z,{children:[(0,I.jsx)(L.Z,{children:b}),p&&(0,I.jsx)(M.Z,{}),u&&!p&&(0,I.jsx)(D,{saveLoading:m,initLoading:p,record:g,isEditing:h,onSubmit:function(e,t){l(h?v.doUpdate(e,t):v.doCreate(t))},onCancel:function(){return(0,f.s1)().push("/paymentsettings")}})]})]})}},61567:function(e,t,n){n(47313);var a=n(46417);t.Z=function(){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)("div",{className:"spinner-border text-primary"})})}},47575:function(e,t,n){n(47313);var a=n(43270),r=n(49384),o=n(46417);function i(e){var t=e.label,n=e.description,i=e.name,s=e.hint,u=e.type,c=e.placeholder,l=e.autoFocus,d=e.autoComplete,p=e.required,f=e.externalErrorMessage,m=e.disabled,g=e.endAdornment,v=(0,a.Gc)(),h=v.register,b=v.errors,y=v.formState,x=y.touched,Z=y.isSubmitted,E=r.Z.errorMessage(i,b,x,Z,f);return(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("div",{className:g?"input-group":"",children:[Boolean(t)&&(0,o.jsx)("label",{className:"col-form-label ".concat(p?"required":null),htmlFor:i,children:t}),n,(0,o.jsx)("input",{id:i,name:i,type:u,ref:h,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:c||void 0,autoFocus:l||void 0,autoComplete:d||void 0,disabled:m,className:"form-control ".concat(E?"is-invalid":"")}),g&&(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("span",{className:"input-group-text",children:g})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:E}),Boolean(s)&&(0,o.jsx)("small",{className:"form-text text-muted",children:s})]})}i.defaultProps={type:"text",required:!1},t.Z=i},21538:function(e,t,n){n(47313);var a=n(43270),r=n(49384),o=n(46417);function i(e){var t=e.label,n=e.name,i=e.hint,s=e.type,u=e.placeholder,c=e.autoFocus,l=e.autoComplete,d=e.required,p=e.externalErrorMessage,f=e.disabled,m=(0,a.Gc)(),g=m.register,v=m.errors,h=m.formState,b=h.touched,y=h.isSubmitted,x=r.Z.errorMessage(n,v,b,y,p);return(0,o.jsxs)("div",{className:"form-group",children:[Boolean(t)&&(0,o.jsx)("label",{className:"col-form-label ".concat(d?"required":null),htmlFor:n,children:t}),(0,o.jsx)("input",{id:n,name:n,type:s,ref:g,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:u||void 0,autoFocus:c||void 0,autoComplete:l||void 0,disabled:f,className:"form-control ".concat(x?"is-invalid":"")}),(0,o.jsx)("div",{className:"invalid-feedback",children:x}),Boolean(i)&&(0,o.jsx)("small",{className:"form-text text-muted",children:i})]})}i.defaultProps={type:"number",required:!1},t.Z=i},5544:function(e,t,n){var a=n(1413),r=n(47313),o=n(73622),i=n(10499),s=n(43270),u=n(49384),c=n(46417);function l(e){var t=e.label,n=e.name,l=e.hint,d=e.options,p=e.required,f=e.mode,m=e.placeholder,g=e.isClearable,v=e.externalErrorMessage,h=(0,s.Gc)(),b=h.register,y=h.errors,x=h.formState,Z=x.touched,E=x.isSubmitted,C=h.setValue,S=h.watch,j=u.Z.errorMessage(n,y,Z,E,v),R=S(n);(0,r.useEffect)((function(){b({name:n})}),[b,n]);var T=function(){return R?R.map((function(e){return d.find((function(t){return t.value===e}))})):[]},N=function(){var t=e.options;return null!=R?t.find((function(e){return e.value===R})):null},w=function(t){if(!t)return C(n,[],{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange([]));var a=t.map((function(e){return e?e.value:e})).filter((function(e){return null!=e}));C(n,a,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(a)},B=function(t){if(!t)return C(n,null,{shouldValidate:!0,shouldDirty:!0}),void(e.onChange&&e.onChange(null));C(n,t.value,{shouldValidate:!0,shouldDirty:!0}),e.onChange&&e.onChange(t.value)},_=Boolean(j)?{container:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"hsl(0,0%,20%)"})},control:function(e){return(0,a.Z)((0,a.Z)({},e),{},{borderColor:"red"})}}:{container:function(e){return(0,a.Z)((0,a.Z)({},e),{},{color:"hsl(0,0%,20%)"})}};return(0,c.jsxs)("div",{className:"form-group",children:[Boolean(t)&&(0,c.jsx)("label",{className:"col-form-label ".concat(p?"required":null),children:t}),(0,c.jsx)("br",{}),(0,c.jsx)(o.ZP,{className:"w-100",value:"multiple"===e.mode?T():N(),onChange:function(t){return"multiple"===e.mode?w(t):B(t)},onBlur:function(t){e.onBlur&&e.onBlur(t)},id:n,name:n,options:d,isMulti:"multiple"===f,placeholder:m||"",isClearable:g,styles:_,loadingMessage:function(){return(0,i.ag)("autocomplete.loading")},noOptionsMessage:function(){return(0,i.ag)("autocomplete.noOptions")}}),(0,c.jsx)("div",{className:"invalid-feedback",children:j}),Boolean(l)&&(0,c.jsx)("small",{className:"form-text text-muted",children:l})]})}l.defaultProps={required:!1,isClearable:!0},t.Z=l},99811:function(e,t,n){!function(t){var n=/^(b|B)$/,a={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},r={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function o(e){var t,o,i,s,u,c,l,d,p,f,m,g,v,h,b,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},x=[],Z=0,E=void 0,C=void 0;if(isNaN(e))throw new TypeError("Invalid number");return o=!0===y.bits,m=!0===y.unix,t=y.base||2,f=void 0!==y.round?y.round:m?1:2,c=void 0!==y.locale?y.locale:"",l=y.localeOptions||{},g=void 0!==y.separator?y.separator:"",v=void 0!==y.spacer?y.spacer:m?"":" ",b=y.symbols||{},h=2===t&&y.standard||"jedec",p=y.output||"string",s=!0===y.fullform,u=y.fullforms instanceof Array?y.fullforms:[],E=void 0!==y.exponent?y.exponent:-1,i=2<t?1e3:1024,(d=(C=Number(e))<0)&&(C=-C),(-1===E||isNaN(E))&&(E=Math.floor(Math.log(C)/Math.log(i)))<0&&(E=0),8<E&&(E=8),"exponent"===p?E:(0===C?(x[0]=0,x[1]=m?"":a[h][o?"bits":"bytes"][E]):(Z=C/(2===t?Math.pow(2,10*E):Math.pow(1e3,E)),o&&i<=(Z*=8)&&E<8&&(Z/=i,E++),x[0]=Number(Z.toFixed(0<E?f:0)),x[0]===i&&E<8&&void 0===y.exponent&&(x[0]=1,E++),x[1]=10===t&&1===E?o?"kb":"kB":a[h][o?"bits":"bytes"][E],m&&(x[1]="jedec"===h?x[1].charAt(0):0<E?x[1].replace(/B$/,""):x[1],n.test(x[1])&&(x[0]=Math.floor(x[0]),x[1]=""))),d&&(x[0]=-x[0]),x[1]=b[x[1]]||x[1],!0===c?x[0]=x[0].toLocaleString():0<c.length?x[0]=x[0].toLocaleString(c,l):0<g.length&&(x[0]=x[0].toString().replace(".",g)),"array"===p?x:(s&&(x[1]=u[E]?u[E]:r[h][E]+(o?"bit":"byte")+(1===x[0]?"":"s")),"object"===p?{value:x[0],symbol:x[1],exponent:E}:x.join(v)))}o.partial=function(e){return function(t){return o(t,e)}},e.exports=o}("undefined"!=typeof window?window:n.g)},73622:function(e,t,n){n(47313),n(83235),n(1168);var a=n(85732),r=(n(96312),n(71902),n(87201));n(94297);var o=(0,r.m)(a.S);t.ZP=o},95162:function(e,t,n){var a;n.d(t,{Z:function(){return d}});var r=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(r)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"===typeof e&&i.test(e)},u=[],c=0;c<256;++c)u.push((c+256).toString(16).substr(1));var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(u[e[t+0]]+u[e[t+1]]+u[e[t+2]]+u[e[t+3]]+"-"+u[e[t+4]]+u[e[t+5]]+"-"+u[e[t+6]]+u[e[t+7]]+"-"+u[e[t+8]]+u[e[t+9]]+"-"+u[e[t+10]]+u[e[t+11]]+u[e[t+12]]+u[e[t+13]]+u[e[t+14]]+u[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var d=function(e,t,n){var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return l(a)}}}]);