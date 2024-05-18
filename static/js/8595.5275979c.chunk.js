"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[8595],{4370:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(70885),i=n(47313),o=n(45788),r=n(63830),s=n(10499),l=n(60612),c=n(76747),d=function(e){return e.category.form},u=(0,c.P1)([d],(function(e){return e.record})),m={selectInitLoading:(0,c.P1)([d],(function(e){return Boolean(e.initLoading)})),selectSaveLoading:(0,c.P1)([d],(function(e){return Boolean(e.saveLoading)})),selectRecord:u,selectRaw:d},g=n(30124),f=n(1413),p=n(43270),b=n(89994),v=n(95748),h=n(68160),y=n(6473),x=n(67357),j=n(47575),Z=n(83851),B=n(96111),N=n(85543),w=n(46417),C=y.Ry().shape({name:b.Z.string((0,s.ag)("entities.category.fields.name"),{}),slug:b.Z.string((0,s.ag)("entities.category.fields.slug"),{}),photo:b.Z.images((0,s.ag)("entities.category.fields.photo"),{}),metaKeywords:b.Z.string((0,s.ag)("entities.category.fields.metaKeywords"),{}),metaDescriptions:b.Z.string((0,s.ag)("entities.category.fields.metaDescriptions"),{}),status:b.Z.enumerator((0,s.ag)("entities.category.fields.status"),{options:Z.Z.status}),isFeature:b.Z.boolean((0,s.ag)("entities.category.fields.isFeature"),{}),serial:b.Z.integer((0,s.ag)("entities.category.fields.serial"),{})});var S=function(e){var t=(0,i.useState)((function(){var t=e.record||{};return{name:t.name,number:t.number,slug:t.slug,photo:t.photo||[],metaKeywords:t.metaKeywords,metaDescriptions:t.metaDescriptions,status:t.status,isFeature:t.isFeature,serial:t.serial}})),n=(0,a.Z)(t,1)[0],o=(0,p.cI)({resolver:(0,x.X)(C),mode:"all",defaultValues:n}),r=function(t){var n;e.onSubmit(null===(n=e.record)||void 0===n?void 0:n.id,t)};return(0,w.jsx)(h.Z,{children:(0,w.jsx)(p.RV,(0,f.Z)((0,f.Z)({},o),{},{children:(0,w.jsxs)("form",{onSubmit:o.handleSubmit(r),children:[(0,w.jsxs)("div",{className:"row",children:[(0,w.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,w.jsx)(N.Z,{name:"photo",label:(0,s.ag)("entities.category.fields.photo"),required:!1,storage:B.Z.values.categoryPhoto,max:void 0})}),(0,w.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,w.jsx)(j.Z,{name:"name",label:(0,s.ag)("entities.category.fields.name"),required:!1,autoFocus:!0})}),(0,w.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,w.jsx)(j.Z,{name:"number",label:(0,s.ag)("entities.category.fields.slug"),required:!1})})]}),(0,w.jsxs)("div",{className:"form-buttons",children:[(0,w.jsxs)("button",{className:"btn btn-primary",disabled:e.saveLoading,type:"button",onClick:o.handleSubmit(r),children:[(0,w.jsx)(v.Z,{loading:e.saveLoading,iconClass:"far fa-save"}),"\xa0",(0,s.ag)("common.save")]}),(0,w.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){Object.keys(n).forEach((function(e){o.setValue(e,n[e])}))},children:[(0,w.jsx)("i",{className:"fas fa-undo"}),"\xa0",(0,s.ag)("common.reset")]}),e.onCancel?(0,w.jsxs)("button",{className:"btn btn-light",type:"button",disabled:e.saveLoading,onClick:function(){return e.onCancel()},children:[(0,w.jsx)("i",{className:"fas fa-times"}),"\xa0",(0,s.ag)("common.cancel")]}):null]})]})}))})},L=n(27829),k=n(53852),M=n(61567),E=n(75352);var F=function(e){var t=(0,i.useState)(!1),n=(0,a.Z)(t,2),c=n[0],d=n[1],u=(0,o.I0)(),f=(0,r.$B)(),p=(0,o.v9)(m.selectInitLoading),b=(0,o.v9)(m.selectSaveLoading),v=(0,o.v9)(m.selectRecord),h=Boolean(f.params.id),y=h?(0,s.ag)("entities.category.edit.title"):(0,s.ag)("entities.category.new.title");return(0,i.useEffect)((function(){u(l.Z.doInit(f.params.id)),d(!0)}),[u,f.params.id]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(k.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.category.menu"),"/category"],[y]]}),(0,w.jsxs)(L.Z,{children:[(0,w.jsx)(E.Z,{children:y}),p&&(0,w.jsx)(M.Z,{}),c&&!p&&(0,w.jsx)(S,{saveLoading:b,initLoading:p,record:v,isEditing:h,onSubmit:function(e,t){u(h?l.Z.doUpdate(e,t):l.Z.doCreate(t))},onCancel:function(){return(0,g.s1)().push("/category")}})]})]})}},61567:function(e,t,n){n(47313);var a=n(46417);t.Z=function(){return(0,a.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,a.jsx)("div",{className:"spinner-border text-primary"})})}},47575:function(e,t,n){n(47313);var a=n(43270),i=n(49384),o=n(46417);function r(e){var t=e.label,n=e.description,r=e.name,s=e.hint,l=e.type,c=e.placeholder,d=e.autoFocus,u=e.autoComplete,m=e.required,g=e.externalErrorMessage,f=e.disabled,p=e.endAdornment,b=(0,a.Gc)(),v=b.register,h=b.errors,y=b.formState,x=y.touched,j=y.isSubmitted,Z=i.Z.errorMessage(r,h,x,j,g);return(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("div",{className:p?"input-group":"",children:[Boolean(t)&&(0,o.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:r,children:t}),n,(0,o.jsx)("input",{id:r,name:r,type:l,ref:v,onChange:function(t){e.onChange&&e.onChange(t.target.value)},onBlur:function(t){e.onBlur&&e.onBlur(t)},placeholder:c||void 0,autoFocus:d||void 0,autoComplete:u||void 0,disabled:f,className:"form-control ".concat(Z?"is-invalid":"")}),p&&(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("span",{className:"input-group-text",children:p})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:Z}),Boolean(s)&&(0,o.jsx)("small",{className:"form-text text-muted",children:s})]})}r.defaultProps={type:"text",required:!1},t.Z=r},99811:function(e,t,n){!function(t){var n=/^(b|B)$/,a={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},i={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function o(e){var t,o,r,s,l,c,d,u,m,g,f,p,b,v,h,y=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},x=[],j=0,Z=void 0,B=void 0;if(isNaN(e))throw new TypeError("Invalid number");return o=!0===y.bits,f=!0===y.unix,t=y.base||2,g=void 0!==y.round?y.round:f?1:2,c=void 0!==y.locale?y.locale:"",d=y.localeOptions||{},p=void 0!==y.separator?y.separator:"",b=void 0!==y.spacer?y.spacer:f?"":" ",h=y.symbols||{},v=2===t&&y.standard||"jedec",m=y.output||"string",s=!0===y.fullform,l=y.fullforms instanceof Array?y.fullforms:[],Z=void 0!==y.exponent?y.exponent:-1,r=2<t?1e3:1024,(u=(B=Number(e))<0)&&(B=-B),(-1===Z||isNaN(Z))&&(Z=Math.floor(Math.log(B)/Math.log(r)))<0&&(Z=0),8<Z&&(Z=8),"exponent"===m?Z:(0===B?(x[0]=0,x[1]=f?"":a[v][o?"bits":"bytes"][Z]):(j=B/(2===t?Math.pow(2,10*Z):Math.pow(1e3,Z)),o&&r<=(j*=8)&&Z<8&&(j/=r,Z++),x[0]=Number(j.toFixed(0<Z?g:0)),x[0]===r&&Z<8&&void 0===y.exponent&&(x[0]=1,Z++),x[1]=10===t&&1===Z?o?"kb":"kB":a[v][o?"bits":"bytes"][Z],f&&(x[1]="jedec"===v?x[1].charAt(0):0<Z?x[1].replace(/B$/,""):x[1],n.test(x[1])&&(x[0]=Math.floor(x[0]),x[1]=""))),u&&(x[0]=-x[0]),x[1]=h[x[1]]||x[1],!0===c?x[0]=x[0].toLocaleString():0<c.length?x[0]=x[0].toLocaleString(c,d):0<p.length&&(x[0]=x[0].toString().replace(".",p)),"array"===m?x:(s&&(x[1]=l[Z]?l[Z]:i[v][Z]+(o?"bit":"byte")+(1===x[0]?"":"s")),"object"===m?{value:x[0],symbol:x[1],exponent:Z}:x.join(b)))}o.partial=function(e){return function(t){return o(t,e)}},e.exports=o}("undefined"!=typeof window?window:n.g)},95162:function(e,t,n){var a;n.d(t,{Z:function(){return u}});var i=new Uint8Array(16);function o(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(i)}var r=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"===typeof e&&r.test(e)},l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var u=function(e,t,n){var a=(e=e||{}).random||(e.rng||o)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var i=0;i<16;++i)t[n+i]=a[i];return t}return d(a)}}}]);