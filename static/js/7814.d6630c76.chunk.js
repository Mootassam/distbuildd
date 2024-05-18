"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7814],{39898:function(e,n,t){var a=t(76747),s=t(86495),o=t(26319),r=t(71945),i=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(r.Z.values.categoryRead)})),c=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(r.Z.values.categoryEdit)})),l=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(r.Z.values.categoryCreate)})),d=(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(r.Z.values.categoryImport)})),u={selectPermissionToRead:i,selectPermissionToEdit:c,selectPermissionToCreate:l,selectPermissionToDestroy:(0,a.P1)([s.Z.selectCurrentTenant,s.Z.selectCurrentUser],(function(e,n){return new o.Z(e,n).match(r.Z.values.categoryDestroy)})),selectPermissionToImport:d};n.Z=u},4799:function(e,n,t){var a={selectLoading:(0,t(76747).P1)([function(e){return e.category.destroy}],(function(e){return Boolean(e.loading)}))};n.Z=a},24477:function(e,n,t){t.r(n),t.d(n,{default:function(){return O}});var a=t(47313),s=t(10499),o=t(1413),r=t(70885),i=t(17886),c=t(4661),l=t(45788),d=t(43270),u=t(47590),m=t(95748),g=t(69138),f=t(6473),h=t(67357),x=t(13586),b=t(40846),p=t(47575),Z=t(46417),v=f.Ry().shape({name:u.Z.string((0,s.ag)("entities.category.fields.name")),slug:u.Z.string((0,s.ag)("entities.category.fields.slug")),metaKeywords:u.Z.string((0,s.ag)("entities.category.fields.metaKeywords")),metaDescriptions:u.Z.string((0,s.ag)("entities.category.fields.metaDescriptions")),status:u.Z.enumerator((0,s.ag)("entities.category.fields.status")),isFeature:u.Z.boolean((0,s.ag)("entities.category.fields.isFeature"))}),j={name:null,slug:null,metaKeywords:null,metaDescriptions:null,status:null,isFeature:null},y={name:{label:(0,s.ag)("entities.category.fields.name"),render:b.Z.generic()},slug:{label:(0,s.ag)("entities.category.fields.slug"),render:b.Z.generic()},metaKeywords:{label:(0,s.ag)("entities.category.fields.metaKeywords"),render:b.Z.generic()},metaDescriptions:{label:(0,s.ag)("entities.category.fields.metaDescriptions"),render:b.Z.generic()},status:{label:(0,s.ag)("entities.category.fields.status"),render:b.Z.enumerator("entities.category.enumerators.status")},isFeature:{label:(0,s.ag)("entities.category.fields.isFeature"),render:b.Z.boolean()}};var N=function(e){var n=(0,l.v9)(c.Z.selectRawFilter),t=(0,l.I0)(),u=(0,a.useState)(!1),f=(0,r.Z)(u,2),b=f[0],N=f[1],C=(0,a.useState)((function(){return(0,o.Z)((0,o.Z)({},j),n)})),w=(0,r.Z)(C,1)[0],k=(0,d.cI)({resolver:(0,h.X)(v),defaultValues:w,mode:"all"});(0,a.useEffect)((function(){t(i.Z.doFetch(v.cast(w),n))}),[t]);var P=function(e){var n=k.getValues();t(i.Z.doFetch(e,n)),N(!1)};return(0,Z.jsxs)(g.Z,{children:[(0,Z.jsx)(x.Z,{onClick:function(){N(!b)},renders:y,values:n,expanded:b,onRemove:function(e){return k.setValue(e,j[e]),k.handleSubmit(P)()}}),(0,Z.jsx)("div",{className:"container",children:(0,Z.jsx)("div",{className:"collapse ".concat(b?"show":""),children:(0,Z.jsx)(d.RV,(0,o.Z)((0,o.Z)({},k),{},{children:(0,Z.jsxs)("form",{onSubmit:k.handleSubmit(P),children:[(0,Z.jsxs)("div",{className:"row",children:[(0,Z.jsx)("div",{className:"col-lg-6 col-12",children:(0,Z.jsx)(p.Z,{name:"name",label:(0,s.ag)("entities.category.fields.name")})}),(0,Z.jsx)("div",{className:"col-lg-6 col-12",children:(0,Z.jsx)(p.Z,{name:"slug",label:(0,s.ag)("entities.category.fields.slug")})})]}),(0,Z.jsx)("div",{className:"row",children:(0,Z.jsxs)("div",{className:"col-12 filter-buttons",children:[(0,Z.jsxs)("button",{className:"btn btn-primary",type:"submit",disabled:e.loading,children:[(0,Z.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-search"}),(0,s.ag)("common.search")]}),(0,Z.jsxs)("button",{className:"btn btn-light",type:"button",onClick:function(){Object.keys(j).forEach((function(e){k.setValue(e,j[e])})),t(i.Z.doReset()),N(!1)},disabled:e.loading,children:[(0,Z.jsx)(m.Z,{loading:e.loading,iconClass:"fas fa-undo"}),(0,s.ag)("common.reset")]})]})})]})}))})})]})},C=t(28303),w=t(39898),k=t(93152),P=t(4799),T=t(98848),S=t(44587),E=t(61567),R=t(27216),D=t(97249),F=t(97428),U=t(60612);var I=function(e){var n=(0,a.useState)(null),t=(0,r.Z)(n,2),o=t[0],d=t[1],u=(0,l.I0)(),m=(0,l.v9)(c.Z.selectLoading),g=(0,l.v9)(P.Z.selectLoading),f=m||g,h=(0,l.v9)(c.Z.selectRows),x=(0,l.v9)(c.Z.selectPagination),b=(0,l.v9)(c.Z.selectSelectedKeys),p=(0,l.v9)(c.Z.selectHasRows),v=(0,l.v9)(c.Z.selectSorter),j=(0,l.v9)(c.Z.selectIsAllSelected),y=(0,l.v9)(w.Z.selectPermissionToEdit),N=(0,l.v9)(w.Z.selectPermissionToDestroy),I=function(){d(null)};return(0,Z.jsxs)(R.Z,{children:[(0,Z.jsx)("div",{className:"table-responsive",children:(0,Z.jsxs)("table",{className:"table table-striped     mt-2",children:[(0,Z.jsx)("thead",{className:"thead",children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)(T.Z,{className:"th-checkbox",children:p&&(0,Z.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,Z.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox",checked:Boolean(j),onChange:function(){u(i.Z.doToggleAllSelected())}}),(0,Z.jsx)("label",{htmlFor:"table-header-checkbox",className:"adherent-control-label",children:"\xa0"})]})}),(0,Z.jsx)(T.Z,{label:(0,s.ag)("entities.category.fields.photo")}),(0,Z.jsx)(T.Z,{onSort:function(e){var n=v.field===e&&"ascend"===v.order?"descend":"ascend";u(i.Z.doChangeSort({field:e,order:n}))},hasRows:p,sorter:v,name:"name",label:(0,s.ag)("entities.category.fields.name")}),(0,Z.jsx)(T.Z,{label:(0,s.ag)("entities.category.fields.status")}),(0,Z.jsx)(T.Z,{className:"th-actions"})]})}),(0,Z.jsxs)("tbody",{children:[f&&(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:100,children:(0,Z.jsx)(E.Z,{})})}),!f&&!p&&(0,Z.jsx)("tr",{children:(0,Z.jsx)("td",{colSpan:100,children:(0,Z.jsx)("div",{className:"d-flex justify-content-center",children:(0,s.ag)("table.noData")})})}),!f&&h.map((function(e){return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{className:"th-checkbox",scope:"row",children:(0,Z.jsxs)("div",{className:"adherent-control adherent-checkbox",children:[(0,Z.jsx)("input",{type:"checkbox",className:"adherent-control-input",id:"table-header-checkbox-".concat(e.id),checked:b.includes(e.id),onChange:function(){return n=e.id,void u(i.Z.doToggleOneSelected(n));var n}}),(0,Z.jsx)("label",{htmlFor:"table-header-checkbox-".concat(e.id),className:"adherent-control-label",children:"\xa0"})]})}),(0,Z.jsx)("td",{children:(0,Z.jsx)(F.Z,{value:e.photo})}),(0,Z.jsx)("td",{children:e.name}),(0,Z.jsx)("td",{children:(0,Z.jsxs)("select",{className:"form-control",name:"status",onChange:function(n){return function(e,n){var t={status:n.target.value};u(U.Z.doUpdate(e,t))}(e.id,n)},children:["enable"===e.status&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("option",{value:"enable",children:"Enable"}),(0,Z.jsx)("option",{value:"disable",children:"Disable"})]}),"disable"===e.status&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("option",{value:"disable",children:"Disable"}),(0,Z.jsx)("option",{value:"enable",children:"Enable"})]})]})}),(0,Z.jsxs)("td",{className:"td-actions",children:[y&&(0,Z.jsx)(C.rU,{className:"btn btn-link",to:"/category/".concat(e.id,"/edit"),children:(0,s.ag)("common.edit")}),N&&(0,Z.jsx)("button",{className:"btn btn-link",type:"button",onClick:function(){return n=e.id,void d(n);var n},children:(0,s.ag)("common.destroy")})]})]},e.id)}))]})]})}),(0,Z.jsx)(D.Z,{onChange:function(e){u(i.Z.doChangePagination(e))},disabled:f,pagination:x}),o&&(0,Z.jsx)(S.Z,{title:(0,s.ag)("common.areYouSure"),onConfirm:function(){return e=o,I(),void u(k.Z.doDestroy(e));var e},onClose:function(){return I()},okText:(0,s.ag)("common.yes"),cancelText:(0,s.ag)("common.no")})]})},L=t(23516),z=t(10419),K=t(28745);var A=function(e){var n=(0,a.useState)(!1),t=(0,r.Z)(n,2),o=t[0],d=t[1],u=(0,l.I0)(),g=(0,l.v9)(c.Z.selectSelectedKeys),f=(0,l.v9)(c.Z.selectLoading),h=(0,l.v9)(P.Z.selectLoading),x=(0,l.v9)(c.Z.selectExportLoading),b=(0,l.v9)(c.Z.selectHasRows),p=(0,l.v9)(L.Z.selectPermissionToRead),v=(0,l.v9)(w.Z.selectPermissionToDestroy),j=(0,l.v9)(w.Z.selectPermissionToCreate),y=(0,l.v9)(w.Z.selectPermissionToImport),N=function(){d(!0)},T=function(){d(!1)},E=function(){u(i.Z.doExport())};return(0,Z.jsxs)(z.Z,{children:[j&&(0,Z.jsx)(C.rU,{to:"/category/new",children:(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("common.new"),"data-for":"charge-list-toolbar-new-tooltip",children:[(0,Z.jsx)("button",{className:"btn btn-primary",type:"button",children:(0,Z.jsx)(m.Z,{iconClass:"fas fa-plus"})}),(0,Z.jsx)(K.Z,{id:"charge-list-toolbar-new-tooltip"})]})}),y&&(0,Z.jsx)(C.rU,{to:"/category/importer",children:(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("common.import"),"data-for":"charge-list-toolbar-import-tooltip",children:[(0,Z.jsx)("button",{className:"btn btn-primary",type:"button",children:(0,Z.jsx)(m.Z,{iconClass:"fas fa-upload"})}),(0,Z.jsx)(K.Z,{id:"charge-list-toolbar-import-tooltip"})]})}),function(){if(!v)return null;var e=!g.length||f,n=(0,Z.jsx)("button",{disabled:e,className:"btn btn-primary",type:"button",onClick:N,children:(0,Z.jsx)(m.Z,{loading:h,iconClass:"far fa-trash-alt"})});return e?(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("common.mustSelectARow"),"data-tip-disable":!e,"data-for":"category-list-toolbar-destroy-tooltip",children:[n,(0,Z.jsx)(K.Z,{id:"category-list-toolbar-destroy-tooltip"})]}):n}(),p&&(0,Z.jsx)(C.rU,{to:"/audit-logs?entityNames=category",children:(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("auditLog.menu"),"data-for":"charge-list-toolbar-auditLog-tooltip",children:[(0,Z.jsx)("button",{className:"btnCircle btn-light",type:"button",children:(0,Z.jsx)(m.Z,{iconClass:"fas fa-history"})}),(0,Z.jsx)(K.Z,{id:"charge-list-toolbar-auditLog-tooltip"})]})}),function(){var e=!b||f,n=(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("common.export"),"data-for":"charge-list-toolbar-export",children:[(0,Z.jsx)("button",{className:"btnCircle btn-light",disabled:e,onClick:E,type:"button",children:(0,Z.jsx)(m.Z,{loading:x,iconClass:"far fa-file-excel"})}),(0,Z.jsx)(K.Z,{id:"charge-list-toolbar-export"})]});return e?(0,Z.jsxs)("span",{"data-tip":(0,s.ag)("common.noDataToExport"),"data-tip-disable":!e,"data-for":"category-list-toolbar-export-tooltip",children:[n,(0,Z.jsx)(K.Z,{id:"category-list-toolbar-export-tooltip"})]}):n}(),o&&(0,Z.jsx)(S.Z,{title:(0,s.ag)("common.areYouSure"),onConfirm:function(){return T(),void u(k.Z.doDestroyAll(g))},onClose:function(){return T()},okText:(0,s.ag)("common.yes"),cancelText:(0,s.ag)("common.no")})]})},B=t(27829),V=t(53852),G=t(75352),$=t(22102),q=t(63849),H=t(31616);var O=function(e){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(V.Z,{items:[[(0,s.ag)("dashboard.menu"),"/"],[(0,s.ag)("entities.category.menu")]]}),(0,Z.jsxs)(B.Z,{children:[(0,Z.jsx)($.Z,{fluid:!0,children:(0,Z.jsxs)(q.Z,{children:[(0,Z.jsx)(H.Z,{xs:9,children:(0,Z.jsx)(G.Z,{children:(0,s.ag)("entities.category.list.title")})}),(0,Z.jsx)(H.Z,{md:"auto",children:(0,Z.jsx)(A,{})})]})}),(0,Z.jsx)(N,{}),(0,Z.jsx)(I,{})]})]})}},27829:function(e,n,t){var a,s=t(30168),o=t(38269).ZP.div(a||(a=(0,s.Z)(["\n  margin-top: 16px;\n  padding: 24px;\n  background-color: white;\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid #dee2e6 !important;\n  .card-stats .card-body {\n    padding: 15px !important;\n  }\n  .text-center {\n    text-align: center !important;\n  }\n  .card-stats .icon-big.icon-danger, .card-stats .icon-big.icon-default, .card-stats .icon-big.icon-info, .card-stats .icon-big.icon-primary, .card-stats .icon-big.icon-secondary, .card-stats .icon-big.icon-success, .card-stats .icon-big.icon-warning {\n    border-radius: 5px;\n}\n.card-stats .icon-big.icon-danger i, .card-stats .icon-big.icon-default i, .card-stats .icon-big.icon-info i, .card-stats .icon-big.icon-primary i, .card-stats .icon-big.icon-secondary i, .card-stats .icon-big.icon-success i, .card-stats .icon-big.icon-warning i {\n  color: #fff!important;\n}\n  .pb-3,\n  .py-3 {\n    padding-bottom: 1rem !important;\n  }\n  .pt-3,\n  .py-3 {\n    padding-top: 1rem !important;\n  }\n  .d-inline-block {\n    display: inline-block !important;\n  }\n  .pl-3, .px-3 {\n    padding-left: 1rem !important;\n  }\n  .card-stats .icon-big {\n    width: 100%;\n    height: 100%;\n    font-size: 2.2em;\n    min-height: 64px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  \n  }\n  .bubble-shadow-small {\n  position: relative; \n  }\n\n  .card-title {\n    margin: 0;\n    color: #575962;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 1.6;\n  }\n  .card-stats .icon-big.icon-primary {\n    background: #177dff;\n  .mt-3,\n  .my-3 {\n    margin-top: 1rem !important;\n  }\n  "])));n.Z=o},53852:function(e,n,t){var a,s=t(30168),o=(t(47313),t(28303)),r=t(38269),i=t(46417),c=r.ZP.nav(a||(a=(0,s.Z)(["\n  .breadcrumb {\n    font-size: 13px;\n    margin: 0px;\n    padding: 0px;\n    background-color: transparent;\n  }\n\n  .breadcrumb-item:not(.active) a {\n    color: rgba(0, 0, 0, 0.45);\n  }\n"])));n.Z=function(e){var n=function(e){return e.length>1};return(0,i.jsx)(c,{children:(0,i.jsx)("ol",{className:"breadcrumb",children:e.items.map((function(t,a){return(0,i.jsx)("li",{className:"breadcrumb-item ".concat(e.items.length-1===a?"active":""),children:n(t)?(0,i.jsx)(o.rU,{to:t[1],children:t[0]}):t[0]},t[0])}))})})}},95748:function(e,n,t){t(47313);var a=t(46417);n.Z=function(e){return e.loading?(0,a.jsx)("span",{className:"spinner-border spinner-border-sm"}):e.iconClass?(0,a.jsx)("i",{className:e.iconClass}):null}},49384:function(e,n,t){t.d(n,{Z:function(){return o}});var a=t(15671),s=t(43144),o=function(){function e(){(0,a.Z)(this,e)}return(0,s.Z)(e,null,[{key:"errorMessage",value:function(e,n,t,a){var s,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;if(o)return o;if(!a&&!t[e])return null;var r=n[e];return(null===r||void 0===r||null===(s=r[0])||void 0===s?void 0:s.message)||(null===r||void 0===r?void 0:r.message)||r||null}}]),e}()},44587:function(e,n,t){var a=t(47313),s=t(1168),o=t(46417);n.Z=function(e){var n=(0,a.useRef)();(0,a.useEffect)((function(){window.$(n.current).modal("show"),window.$(n.current).on("hidden.bs.modal",e.onClose)}),[]);return s.createPortal((0,o.jsx)("div",{ref:n,className:"modal",tabIndex:-1,children:(0,o.jsx)("div",{className:"modal-dialog modal-sm",children:(0,o.jsxs)("div",{className:"modal-content",children:[(0,o.jsxs)("div",{className:"modal-header",children:[(0,o.jsx)("h5",{className:"modal-title",children:e.title}),(0,o.jsx)("button",{type:"button",className:"close","data-dismiss":"modal",children:(0,o.jsx)("span",{children:"\xd7"})})]}),(0,o.jsxs)("div",{className:"modal-footer",children:[(0,o.jsx)("button",{type:"button",className:"btn btn-light btn-sm","data-dismiss":"modal",children:e.cancelText}),(0,o.jsx)("button",{type:"button",onClick:function(){return window.$(n.current).modal("hide"),e.onConfirm()},className:"btn btn-primary btn-sm",children:e.okText})]})]})})}),document.getElementById("modal-root"))}},75352:function(e,n,t){var a,s=t(30168),o=t(38269).ZP.h1(a||(a=(0,s.Z)(["\n  margin-bottom: 24px;\n"])));n.Z=o},97428:function(e,n,t){t(47313);var a=t(31807),s=t(46417);n.Z=function(e){var n=function(){var n=e.value;return n?Array.isArray(n)?n:[n]:[]};if(!n().length||!n()[0].downloadUrl)return(0,s.jsx)(a.Z,{shape:"square",size:"large"});var t=n()[0].downloadUrl;return(0,s.jsx)(a.Z,{shape:"square",size:"large",src:t})}},31616:function(e,n,t){var a=t(70885),s=t(1413),o=t(45987),r=t(46123),i=t.n(r),c=t(47313),l=t(68524),d=t(46417),u=["as","bsPrefix","className"],m=["className"];var g=c.forwardRef((function(e,n){var t=function(e){var n=e.as,t=e.bsPrefix,a=e.className,r=(0,o.Z)(e,u);t=(0,l.vE)(t,"col");var c=(0,l.pi)(),d=(0,l.zG)(),m=[],g=[];return c.forEach((function(e){var n,a,s,o=r[e];delete r[e],"object"===typeof o&&null!=o?(n=o.span,a=o.offset,s=o.order):n=o;var i=e!==d?"-".concat(e):"";n&&m.push(!0===n?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(n)),null!=s&&g.push("order".concat(i,"-").concat(s)),null!=a&&g.push("offset".concat(i,"-").concat(a))})),[(0,s.Z)((0,s.Z)({},r),{},{className:i().apply(void 0,[a].concat(m,g))}),{as:n,bsPrefix:t,spans:m}]}(e),r=(0,a.Z)(t,2),c=r[0],g=c.className,f=(0,o.Z)(c,m),h=r[1],x=h.as,b=void 0===x?"div":x,p=h.bsPrefix,Z=h.spans;return(0,d.jsx)(b,(0,s.Z)((0,s.Z)({},f),{},{ref:n,className:i()(g,!Z.length&&p)}))}));g.displayName="Col",n.Z=g},22102:function(e,n,t){var a=t(1413),s=t(45987),o=t(46123),r=t.n(o),i=t(47313),c=t(68524),l=t(46417),d=["bsPrefix","fluid","as","className"],u=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.fluid,i=void 0!==o&&o,u=e.as,m=void 0===u?"div":u,g=e.className,f=(0,s.Z)(e,d),h=(0,c.vE)(t,"container"),x="string"===typeof i?"-".concat(i):"-fluid";return(0,l.jsx)(m,(0,a.Z)((0,a.Z)({ref:n},f),{},{className:r()(g,i?"".concat(h).concat(x):h)}))}));u.displayName="Container",n.Z=u},63849:function(e,n,t){var a=t(1413),s=t(45987),o=t(46123),r=t.n(o),i=t(47313),c=t(68524),l=t(46417),d=["bsPrefix","className","as"],u=i.forwardRef((function(e,n){var t=e.bsPrefix,o=e.className,i=e.as,u=void 0===i?"div":i,m=(0,s.Z)(e,d),g=(0,c.vE)(t,"row"),f=(0,c.pi)(),h=(0,c.zG)(),x="".concat(g,"-cols"),b=[];return f.forEach((function(e){var n,t=m[e];delete m[e],n=null!=t&&"object"===typeof t?t.cols:t;var a=e!==h?"-".concat(e):"";null!=n&&b.push("".concat(x).concat(a,"-").concat(n))})),(0,l.jsx)(u,(0,a.Z)((0,a.Z)({ref:n},m),{},{className:r().apply(void 0,[o,g].concat(b))}))}));u.displayName="Row",n.Z=u},68524:function(e,n,t){t.d(n,{pi:function(){return i},vE:function(){return r},zG:function(){return c}});var a=t(47313),s=(t(46417),["xxl","xl","lg","md","sm","xs"]),o=a.createContext({prefixes:{},breakpoints:s,minBreakpoint:"xs"});o.Consumer,o.Provider;function r(e,n){var t=(0,a.useContext)(o).prefixes;return e||t[n]||n}function i(){return(0,a.useContext)(o).breakpoints}function c(){return(0,a.useContext)(o).minBreakpoint}}}]);