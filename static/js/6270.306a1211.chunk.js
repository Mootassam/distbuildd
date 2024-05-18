"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[6270],{39898:function(n,e,t){var r=t(76747),a=t(86495),o=t(26319),i=t(71945),s=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.categoryRead)})),c=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.categoryEdit)})),l=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.categoryCreate)})),u=(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.categoryImport)})),d={selectPermissionToRead:s,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,r.P1)([a.Z.selectCurrentTenant,a.Z.selectCurrentUser],(function(n,e){return new o.Z(n,e).match(i.Z.values.categoryDestroy)})),selectPermissionToImport:u};e.Z=d},4799:function(n,e,t){var r={selectLoading:(0,t(76747).P1)([function(n){return n.category.destroy}],(function(n){return Boolean(n.loading)}))};e.Z=r},6891:function(n,e,t){t.d(e,{Z:function(){return b}});var r=t(70885),a=t(74165),o=t(15861),i=t(15671),s=t(43144),c=t(99811),l=t.n(c),u=t(10499),d=t(63922),m=t(95162),p=t(81384),f=t(31881),g=t.n(f),b=function(){function n(){(0,i.Z)(this,n)}return(0,s.Z)(n,null,[{key:"validate",value:function(n,e){if(e){if(e.image&&!n.type.startsWith("image"))throw new Error((0,u.ag)("fileUploader.image"));if(e.storage.maxSizeInBytes&&n.size>e.storage.maxSizeInBytes)throw new Error((0,u.ag)("fileUploader.size",l()(e.storage.maxSizeInBytes)));var t=h(n.name);if(e.formats&&!e.formats.includes(t))throw new Error((0,u.ag)("fileUploader.formats",e.formats.join(", ")))}}},{key:"upload",value:function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e,t){var r,o,i,s,c,l,u;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:n.prev=0,this.validate(e,t),n.next=7;break;case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",Promise.reject(n.t0));case 7:return r=h(e.name),o=(0,m.Z)(),i="".concat(o,".").concat(r),n.next=12,this.fetchFileCredentials(i,t);case 12:return s=n.sent,c=s.uploadCredentials,l=s.downloadUrl,u=s.privateUrl,n.next=18,this.uploadToServer(e,c);case 18:return n.abrupt("return",{id:o,name:e.name,sizeInBytes:e.size,publicUrl:c&&c.publicUrl?c.publicUrl:null,privateUrl:u,downloadUrl:l,new:!0});case 19:case"end":return n.stop()}}),n,this,[[0,4]])})));return function(e,t){return n.apply(this,arguments)}}()},{key:"fetchFileCredentials",value:function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e,t){var r,o,i;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=p.Z.get(),n.next=3,d.Z.get("/tenant/".concat(r,"/file/credentials"),{params:{filename:e,storageId:t.storage.id}});case 3:return o=n.sent,i=o.data,n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},{key:"uploadToServer",value:function(){var n=(0,o.Z)((0,a.Z)().mark((function n(e,t){var o,i,s,c,l,u,d;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,o=t.url,i=new FormData,s=0,c=Object.entries(t.fields||{});s<c.length;s++)l=(0,r.Z)(c[s],2),u=l[0],d=l[1],i.append(u,d);return i.append("file",e),n.abrupt("return",g().post(o,i,{headers:{"Content-Type":"multipart/form-data"}}));case 8:throw n.prev=8,n.t0=n.catch(0),console.error(n.t0),n.t0;case 12:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}()}]),n}();function h(n){if(!n)return null;var e=/(?:\.([^.]+))?$/.exec(n);return e?e[1]:null}},76270:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r=t(47313),a=t(45788),o=t(63830),i=t(10499),s=t(13822),c=t(76747),l=function(n){return n.category.view},u=(0,c.P1)([l],(function(n){return n.record})),d={selectLoading:(0,c.P1)([l],(function(n){return Boolean(n.loading)})),selectRecord:u,selectRaw:l},m=t(61567),p=t(25969),f=t(31287),g=t(69727),b=t(46417);var h=function(n){var e=n.record;return n.loading||!e?(0,b.jsx)(m.Z,{}):(0,b.jsxs)(p.Z,{children:[(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.name"),value:e.name}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.slug"),value:e.slug}),(0,b.jsx)(g.Z,{label:(0,i.ag)("entities.category.fields.photo"),value:e.photo}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.metaKeywords"),value:e.metaKeywords}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.metaDescriptions"),value:e.metaDescriptions}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.status"),value:e.status&&(0,i.ag)("entities.category.enumerators.status.".concat(e.status))}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.isFeature"),value:e.isFeature?(0,i.ag)("common.yes"):(0,i.ag)("common.no")}),(0,b.jsx)(f.Z,{label:(0,i.ag)("entities.category.fields.serial"),value:e.serial})]})},x=t(70885),v=t(28303),y=t(23516),Z=t(39898),j=t(93152),w=t(4799),C=t(44587),k=t(10419),N=t(95748);var B=function(n){var e=(0,r.useState)(!1),t=(0,x.Z)(e,2),o=t[0],s=t[1],c=(0,a.I0)(),l=n.match.params.id,u=(0,a.v9)(y.Z.selectPermissionToRead),d=(0,a.v9)(Z.Z.selectPermissionToEdit),m=(0,a.v9)(Z.Z.selectPermissionToDestroy),p=(0,a.v9)(w.Z.selectLoading),f=function(){s(!1)};return(0,b.jsxs)(k.Z,{children:[d&&(0,b.jsx)(v.rU,{to:"/category/".concat(l,"/edit"),children:(0,b.jsxs)("button",{className:"btn btn-primary",type:"button",children:[(0,b.jsx)(N.Z,{iconClass:"fas fa-edit"}),(0,i.ag)("common.edit")]})}),m&&(0,b.jsxs)("button",{className:"btn btn-primary",type:"button",disabled:p,onClick:function(){s(!0)},children:[(0,b.jsx)(N.Z,{loading:p,iconClass:"fas fa-trash-alt"}),(0,i.ag)("common.destroy")]}),u&&(0,b.jsx)(v.rU,{to:"/audit-logs?entityId=".concat(encodeURIComponent(l)),children:(0,b.jsxs)("button",{className:"btn btn-light",type:"button",children:[(0,b.jsx)(N.Z,{iconClass:"fas fa-history"}),(0,i.ag)("auditLog.menu")]})}),o&&(0,b.jsx)(C.Z,{title:(0,i.ag)("common.areYouSure"),onConfirm:function(){return f(),void c(j.Z.doDestroy(l))},onClose:function(){return f()},okText:(0,i.ag)("common.yes"),cancelText:(0,i.ag)("common.no")})]})},T=t(27829),P=t(53852),U=t(75352);var I=function(){var n=(0,a.I0)(),e=(0,o.$B)(),t=(0,a.v9)(d.selectLoading),c=(0,a.v9)(d.selectRecord);return(0,r.useEffect)((function(){n(s.Z.doFind(e.params.id))}),[n,e.params.id]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(P.Z,{items:[[(0,i.ag)("dashboard.menu"),"/"],[(0,i.ag)("entities.category.menu"),"/category"],[(0,i.ag)("entities.category.view.title")]]}),(0,b.jsxs)(T.Z,{children:[(0,b.jsx)(U.Z,{children:(0,i.ag)("entities.category.view.title")}),(0,b.jsx)(B,{match:e}),(0,b.jsx)(h,{loading:t,record:c})]})]})}},27829:function(n,e,t){var r,a=t(30168),o=t(38269).ZP.div(r||(r=(0,a.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));e.Z=o},53852:function(n,e,t){var r,a=t(30168),o=(t(47313),t(28303)),i=t(38269),s=t(46417),c=i.ZP.nav(r||(r=(0,a.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));e.Z=function(n){var e=function(n){return n.length>1};return(0,s.jsx)(c,{children:(0,s.jsx)("ol",{className:"breadcrumb",children:n.items.map((function(t,r){return(0,s.jsx)("li",{className:"breadcrumb-item ".concat(n.items.length-1===r?"active":""),children:e(t)?(0,s.jsx)(o.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(n,e,t){t(47313);var r=t(46417);e.Z=function(n){return n.loading?(0,r.jsx)("span",{className:"spinner-border spinner-border-sm"}):n.iconClass?(0,r.jsx)("i",{className:n.iconClass}):null}},61567:function(n,e,t){t(47313);var r=t(46417);e.Z=function(){return(0,r.jsx)("div",{style:{width:"100%",marginTop:"24px",marginBottom:"24px",display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center"},children:(0,r.jsx)("div",{className:"spinner-border text-primary"})})}},44587:function(n,e,t){var r=t(47313),a=t(1168),o=t(46417);e.Z=function(n){var e=(0,r.useRef)();(0,r.useEffect)((function(){window.$(e.current).modal("show"),window.$(e.current).on("hidden.bs.modal",n.onClose)}),[]);return a.createPortal((0,o.jsx)("div",{ref:e,className:"modal",tabIndex:-1,children:(0,o.jsx)("div",{className:"modal-dialog modal-sm",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:n.title}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,o.jsx)("span",{children:"\xd7"})})]}),(0,o.jsxs)("div",{className:"modal-footer",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:n.cancelText}),(0,o.jsx)("button",{type:"button",onClick:function(){return window.$(e.current).modal("hide"),n.onConfirm()},className:"btn btn-primary btn-sm",children:n.okText})]})]})})}),document.getElementById("modal-root"))}},75352:function(n,e,t){var r,a=t(30168),o=t(38269).ZP.h1(r||(r=(0,a.Z)(["\n  margin-bottom: 24px;\n"])));e.Z=o},10419:function(n,e,t){var r,a=t(30168),o=t(38269).ZP.div(r||(r=(0,a.Z)(["\n  margin-bottom: 8px;\n\n  .btn {\n    margin-right: 8px;\n    margin-bottom: 8px;\n  }\n"])));e.Z=o},25969:function(n,e,t){var r,a=t(30168),o=t(38269).ZP.div(r||(r=(0,a.Z)(["\n  .btn.btn-link {\n    padding-left: 0;\n  }\n"])));e.Z=o},89722:function(n,e,t){t.d(e,{Z:function(){return y}});var r,a,o=t(74165),i=t(42982),s=t(15861),c=t(70885),l=t(47313),u=t(6891),d=t(33512),m=t(10499),p=t(30168),f=t(38269),g=f.ZP.div(r||(r=(0,p.Z)(["\n  .img-card:hover .img-buttons {\n    display: block;\n  }\n\n  .img-buttons {\n    display: none;\n    position: relative;\n    bottom: 2.1rem;\n    width: calc(100px);\n    text-align: center;\n    background-color: rgba(0, 0, 0, 0.5);\n  }\n\n  .img-buttons * {\n    color: white;\n  }\n"]))),b=t(46417),h=f.ZP.div(a||(a=(0,p.Z)(["\n  /* The Modal (background) */\n  .modal {\n    display: block;\n    position: fixed; /* Stay in place */\n    z-index: 9999; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0, 0, 0); /* Fallback color */\n    background-color: rgba(\n      0,\n      0,\n      0,\n      0.9\n    ); /* Black w/ opacity */\n  }\n\n  /* Modal Content (Image) */\n  .modal-content {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n  }\n\n  /* Caption of Modal Image (Image Text) - Same Width as the Image */\n  #caption {\n    margin: auto;\n    display: block;\n    width: 80%;\n    max-width: 700px;\n    text-align: center;\n    color: #ccc;\n    padding: 10px 0;\n    height: 150px;\n  }\n\n  /* Add Animation - Zoom in the Modal */\n  .modal-content,\n  #caption {\n    animation-name: zoom;\n    animation-duration: 0.6s;\n  }\n\n  @keyframes zoom {\n    from {\n      transform: scale(0);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n\n  /* The Close Button */\n  .close {\n    position: absolute;\n    top: 15px;\n    right: 35px;\n    color: #f1f1f1;\n    font-size: 40px;\n    font-weight: bold;\n    transition: 0.3s;\n  }\n\n  .close:hover,\n  .close:focus {\n    color: #bbb;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  /* 100% Image Width on Smaller Screens */\n  @media only screen and (max-width: 700px) {\n    .modal-content {\n      width: 100%;\n    }\n  }\n"])));var x=function(n){return(0,b.jsx)(h,{children:(0,b.jsxs)("div",{className:"modal",children:[(0,b.jsx)("span",{className:"close",onClick:n.onClose,children:"\xd7"}),(0,b.jsx)("img",{className:"modal-content",src:n.src,alt:n.alt})]})})},v=t(95748);var y=function(n){var e=(0,l.useState)(!1),t=(0,c.Z)(e,2),r=t[0],a=t[1],p=(0,l.useState)(null),f=(0,c.Z)(p,2),h=f[0],y=f[1],Z=(0,l.useRef)(),j=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]},w=function(){var e=(0,s.Z)((0,o.Z)().mark((function e(t){var r,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r=t.target.files)&&r.length){e.next=4;break}return e.abrupt("return");case 4:return s=r[0],u.Z.validate(s,{storage:n.storage,image:!0}),a(!0),e.next=9,u.Z.upload(s,{storage:n.storage,image:!0});case 9:s=e.sent,Z.current.value="",a(!1),n.onChange([].concat((0,i.Z)(j()),[s])),e.next=21;break;case 15:e.prev=15,e.t0=e.catch(0),Z.current.value="",console.error(e.t0),a(!1),d.Z.showMessage(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(n){return e.apply(this,arguments)}}(),C=n.max,k=n.readonly,N=(0,b.jsxs)("label",{className:"btn btn-outline-secondary px-4 mb-2",style:{cursor:"pointer"},children:[(0,b.jsx)(v.Z,{loading:r,iconClass:"fas fa-plus"}),(0,m.ag)("fileUploader.upload"),(0,b.jsx)("input",{style:{display:"none"},disabled:r||k,accept:"image/*",type:"file",onChange:w,ref:Z})]});return(0,b.jsxs)(g,{children:[k||C&&j().map((function(n){return{uid:n.id||void 0,name:n.name,status:"done",url:n.downloadUrl}})).length>=C?null:N,j()&&j().length?(0,b.jsx)("div",{className:"d-flex flex-row flex-wrap",children:j().map((function(e){return(0,b.jsxs)("div",{className:"mr-2 mb-2 img-card",style:{height:"100px"},children:[(0,b.jsx)("img",{alt:e.name,src:e.downloadUrl,className:"img-thumbnail",style:{width:"100px",height:"100px",objectFit:"cover"}}),(0,b.jsxs)("div",{className:"img-buttons rounded-bottom",children:[(0,b.jsx)("button",{type:"button",className:"btn btn-link",onClick:function(){return function(n){y({src:n.downloadUrl,alt:n.name})}(e)},children:(0,b.jsx)("i",{className:"fas fa-search"})}),!k&&(0,b.jsx)("button",{type:"button",className:"btn btn-link ml-2",onClick:function(){return t=e.id,void n.onChange(j().filter((function(n){return n.id!==t})));var t},children:(0,b.jsx)("i",{className:"fas fa-times"})})]})]},e.id)}))}):null,h&&(0,b.jsx)(x,{src:h.src,alt:h.alt,onClose:function(){y(null)}})]})}},69727:function(n,e,t){t(47313);var r=t(89722),a=t(46417);e.Z=function(n){var e=function(){var e=n.value;return e?Array.isArray(e)?e:[e]:[]};return e().length?(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{className:"col-form-label",children:n.label}),(0,a.jsx)("br",{}),(0,a.jsx)(r.Z,{readonly:!0,value:e()})]}):null}},31287:function(n,e,t){t(47313);var r=t(46417);e.Z=function(n){if(!n.value&&0!==n.value&&!1!==n.value)return null;var e="".concat(n.prefix?"".concat(n.prefix," "):"").concat(n.value);return(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"col-form-label",children:n.label}),(0,r.jsx)("input",{type:"text",readOnly:!0,className:"form-control-plaintext",value:e})]})}},99811:function(n,e,t){!function(e){var t=/^(b|B)$/,r={iec:{bits:["b","Kib","Mib","Gib","Tib","Pib","Eib","Zib","Yib"],bytes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},jedec:{bits:["b","Kb","Mb","Gb","Tb","Pb","Eb","Zb","Yb"],bytes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]}},a={iec:["","kibi","mebi","gibi","tebi","pebi","exbi","zebi","yobi"],jedec:["","kilo","mega","giga","tera","peta","exa","zetta","yotta"]};function o(n){var e,o,i,s,c,l,u,d,m,p,f,g,b,h,x,v=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},y=[],Z=0,j=void 0,w=void 0;if(isNaN(n))throw new TypeError("Invalid number");return o=!0===v.bits,f=!0===v.unix,e=v.base||2,p=void 0!==v.round?v.round:f?1:2,l=void 0!==v.locale?v.locale:"",u=v.localeOptions||{},g=void 0!==v.separator?v.separator:"",b=void 0!==v.spacer?v.spacer:f?"":" ",x=v.symbols||{},h=2===e&&v.standard||"jedec",m=v.output||"string",s=!0===v.fullform,c=v.fullforms instanceof Array?v.fullforms:[],j=void 0!==v.exponent?v.exponent:-1,i=2<e?1e3:1024,(d=(w=Number(n))<0)&&(w=-w),(-1===j||isNaN(j))&&(j=Math.floor(Math.log(w)/Math.log(i)))<0&&(j=0),8<j&&(j=8),"exponent"===m?j:(0===w?(y[0]=0,y[1]=f?"":r[h][o?"bits":"bytes"][j]):(Z=w/(2===e?Math.pow(2,10*j):Math.pow(1e3,j)),o&&i<=(Z*=8)&&j<8&&(Z/=i,j++),y[0]=Number(Z.toFixed(0<j?p:0)),y[0]===i&&j<8&&void 0===v.exponent&&(y[0]=1,j++),y[1]=10===e&&1===j?o?"kb":"kB":r[h][o?"bits":"bytes"][j],f&&(y[1]="jedec"===h?y[1].charAt(0):0<j?y[1].replace(/B$/,""):y[1],t.test(y[1])&&(y[0]=Math.floor(y[0]),y[1]=""))),d&&(y[0]=-y[0]),y[1]=x[y[1]]||y[1],!0===l?y[0]=y[0].toLocaleString():0<l.length?y[0]=y[0].toLocaleString(l,u):0<g.length&&(y[0]=y[0].toString().replace(".",g)),"array"===m?y:(s&&(y[1]=c[j]?c[j]:a[h][j]+(o?"bit":"byte")+(1===y[0]?"":"s")),"object"===m?{value:y[0],symbol:y[1],exponent:j}:y.join(b)))}o.partial=function(n){return function(e){return o(e,n)}},n.exports=o}("undefined"!=typeof window?window:t.g)},95162:function(n,e,t){var r;t.d(e,{Z:function(){return d}});var a=new Uint8Array(16);function o(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(a)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(n){return"string"===typeof n&&i.test(n)},c=[],l=0;l<256;++l)c.push((l+256).toString(16).substr(1));var u=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(c[n[e+0]]+c[n[e+1]]+c[n[e+2]]+c[n[e+3]]+"-"+c[n[e+4]]+c[n[e+5]]+"-"+c[n[e+6]]+c[n[e+7]]+"-"+c[n[e+8]]+c[n[e+9]]+"-"+c[n[e+10]]+c[n[e+11]]+c[n[e+12]]+c[n[e+13]]+c[n[e+14]]+c[n[e+15]]).toLowerCase();if(!s(t))throw TypeError("Stringified UUID is invalid");return t};var d=function(n,e,t){var r=(n=n||{}).random||(n.rng||o)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){t=t||0;for(var a=0;a<16;++a)e[t+a]=r[a];return e}return u(r)}}}]);