"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[3994],{86023:function(e,a,t){t.r(a),t.d(a,{default:function(){return w}});var r=t(47313),n=t(10499),o=t(30124),s=t(1413),i=t(70885),l=t(43270),c=t(45788),u=t(926),d=t(86495),m=t(89994),f=t(95748),b=t(85543),p=t(47575),h=t(68160),g=t(6473),v=t(96111),x=t(67357),N=t(46417),j=g.Ry().shape({firstName:m.Z.string((0,n.ag)("user.fields.firstName"),{max:80}),lastName:m.Z.string((0,n.ag)("user.fields.lastName"),{max:175}),phoneNumber:m.Z.string((0,n.ag)("user.fields.phoneNumber"),{matches:/^[0-9]/,max:24}),avatars:m.Z.images((0,n.ag)("user.fields.avatars"),{max:1})});var y=function(e){var a=(0,c.I0)(),t=(0,c.v9)(d.Z.selectLoadingUpdateProfile),o=(0,c.v9)(d.Z.selectCurrentUser),m=(0,r.useState)((function(){var e=o||{};return{firstName:e.firstName,lastName:e.lastName,phoneNumber:e.phoneNumber,avatars:e.avatars||[]}})),g=(0,i.Z)(m,1)[0],y=(0,l.cI)({resolver:(0,x.X)(j),mode:"all",defaultValues:g}),Z=function(e){a(u.Z.doUpdateProfile(e))};return(0,N.jsx)(h.Z,{children:(0,N.jsx)(l.RV,(0,s.Z)((0,s.Z)({},y),{},{children:(0,N.jsxs)("form",{onSubmit:y.handleSubmit(Z),children:[(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsxs)("div",{className:"form-group",children:[(0,N.jsx)("label",{className:"col-form-label",htmlFor:"email",children:(0,n.ag)("user.fields.email")}),(0,N.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",id:"email",name:"email",value:o.email})]})}),(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(p.Z,{name:"firstName",label:(0,n.ag)("user.fields.firstName"),autoComplete:"firstName",autoFocus:!0})}),(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(p.Z,{name:"lastName",label:(0,n.ag)("user.fields.lastName"),autoComplete:"lastName"})}),(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(p.Z,{name:"phoneNumber",label:(0,n.ag)("user.fields.phoneNumber"),autoComplete:"phoneNumber"})}),(0,N.jsx)("div",{className:"col-lg-7 col-md-8 col-12",children:(0,N.jsx)(b.Z,{name:"avatars",label:(0,n.ag)("user.fields.avatars"),storage:v.Z.values.userAvatarsProfiles,max:1})})]}),(0,N.jsxs)("div",{className:"form-buttons",children:[(0,N.jsxs)("button",{className:"btn btn-primary",disabled:t,type:"button",onClick:y.handleSubmit(Z),children:[(0,N.jsx)(f.Z,{loading:t,iconClass:"far fa-save"}),(0,n.ag)("common.save")]}),(0,N.jsxs)("button",{disabled:t,onClick:function(){Object.keys(g).forEach((function(e){y.setValue(e,g[e])}))},className:"btn btn-light",type:"button",children:[(0,N.jsx)("i",{className:"fas fa-undo"}),(0,n.ag)("common.reset")]}),e.onCancel?(0,N.jsxs)("button",{disabled:t,onClick:function(){return e.onCancel()},className:"btn btn-light",type:"button",children:[(0,N.jsx)("i",{className:"fas fa-times"}),(0,n.ag)("common.cancel")]}):null]})]})}))})},Z=t(27829),B=t(53852),C=t(75352);var w=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(B.Z,{items:[[(0,n.ag)("dashboard.menu"),"/"],[(0,n.ag)("auth.profile.title")]]}),(0,N.jsxs)(Z.Z,{children:[(0,N.jsx)(C.Z,{children:(0,n.ag)("auth.profile.title")}),(0,N.jsx)(y,{onCancel:function(){return(0,o.s1)().push("/")}})]})]})}},47575:function(e,a,t){t(47313);var r=t(43270),n=t(49384),o=t(46417);function s(e){var a=e.label,t=e.description,s=e.name,i=e.hint,l=e.type,c=e.placeholder,u=e.autoFocus,d=e.autoComplete,m=e.required,f=e.externalErrorMessage,b=e.disabled,p=e.endAdornment,h=(0,r.Gc)(),g=h.register,v=h.errors,x=h.formState,N=x.touched,j=x.isSubmitted,y=n.Z.errorMessage(s,v,N,j,f);return(0,o.jsxs)("div",{className:"form-group",children:[(0,o.jsxs)("div",{className:p?"input-group":"",children:[Boolean(a)&&(0,o.jsx)("label",{className:"col-form-label ".concat(m?"required":null),htmlFor:s,children:a}),t,(0,o.jsx)("input",{id:s,name:s,type:l,ref:g,onChange:function(a){e.onChange&&e.onChange(a.target.value)},onBlur:function(a){e.onBlur&&e.onBlur(a)},placeholder:c||void 0,autoFocus:u||void 0,autoComplete:d||void 0,disabled:b,className:"form-control ".concat(y?"is-invalid":"")}),p&&(0,o.jsx)("div",{className:"input-group-append",children:(0,o.jsx)("span",{className:"input-group-text",children:p})})]}),(0,o.jsx)("div",{className:"invalid-feedback",children:y}),Boolean(i)&&(0,o.jsx)("small",{className:"form-text text-muted",children:i})]})}s.defaultProps={type:"text",required:!1},a.Z=s},99811:function(e,a,t){!function(a){var t=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},n={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function o(e){var a,o,s,i,l,c,u,d,m,f,b,p,h,g,v,x=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},N=[],j=0,y=void 0,Z=void 0;if(isNaN(e))throw new TypeError("Invalid number");return o=!0===x.bits,b=!0===x.unix,a=x.base||2,f=void 0!==x.round?x.round:b?1:2,c=void 0!==x.locale?x.locale:"",u=x.localeOptions||{},p=void 0!==x.separator?x.separator:"",h=void 0!==x.spacer?x.spacer:b?"":" ",v=x.symbols||{},g=2===a&&x.standard||"jedec",m=x.output||"string",i=!0===x.fullform,l=x.fullforms instanceof Array?x.fullforms:[],y=void 0!==x.exponent?x.exponent:-1,s=2<a?1e3:1024,(d=(Z=Number(e))<0)&&(Z=-Z),(-1===y||isNaN(y))&&(y=Math.floor(Math.log(Z)/Math.log(s)))<0&&(y=0),8<y&&(y=8),"exponent"===m?y:(0===Z?(N[0]=0,N[1]=b?"":r[g][o?"bits":"bytes"][y]):(j=Z/(2===a?Math.pow(2,10*y):Math.pow(1e3,y)),o&&s<=(j*=8)&&y<8&&(j/=s,y++),N[0]=Number(j.toFixed(0<y?f:0)),N[0]===s&&y<8&&void 0===x.exponent&&(N[0]=1,y++),N[1]=10===a&&1===y?o?"kb":"kB":r[g][o?"bits":"bytes"][y],b&&(N[1]="jedec"===g?N[1].charAt(0):0<y?N[1].replace(/B$/,""):N[1],t.test(N[1])&&(N[0]=Math.floor(N[0]),N[1]=""))),d&&(N[0]=-N[0]),N[1]=v[N[1]]||N[1],!0===c?N[0]=N[0].toLocaleString():0<c.length?N[0]=N[0].toLocaleString(c,u):0<p.length&&(N[0]=N[0].toString().replace(".",p)),"array"===m?N:(i&&(N[1]=l[y]?l[y]:n[g][y]+(o?"bit":"byte")+(1===N[0]?"":"s")),"object"===m?{value:N[0],symbol:N[1],exponent:y}:N.join(h)))}o.partial=function(e){return function(a){return o(a,e)}},e.exports=o}("undefined"!=typeof window?window:t.g)},95162:function(e,a,t){var r;t.d(a,{Z:function(){return d}});var n=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(n)}var s=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&s.test(e)},l=[],c=0;c<256;++c)l.push((c+256).toString(16).substr(1));var u=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(l[e[a+0]]+l[e[a+1]]+l[e[a+2]]+l[e[a+3]]+"-"+l[e[a+4]]+l[e[a+5]]+"-"+l[e[a+6]]+l[e[a+7]]+"-"+l[e[a+8]]+l[e[a+9]]+"-"+l[e[a+10]]+l[e[a+11]]+l[e[a+12]]+l[e[a+13]]+l[e[a+14]]+l[e[a+15]]).toLowerCase();if(!i(t))throw TypeError("Stringified UUID is invalid");return t};var d=function(e,a,t){var r=(e=e||{}).random||(e.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,a){t=t||0;for(var n=0;n<16;++n)a[t+n]=r[n];return a}return u(r)}}}]);