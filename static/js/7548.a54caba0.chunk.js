"use strict";(self.webpackChunkapp_frontend=self.webpackChunkapp_frontend||[]).push([[7548],{27548:function(a,r,e){e.r(r);var n=e(70885),s=e(47313),o=e(10499),c=e(63922),d=e(14122),t=e(46417);r.default=function(){var a=(0,s.useState)(""),r=(0,n.Z)(a,2),e=r[0],i=r[1];return(0,t.jsxs)("div",{className:"check__number",children:[(0,t.jsxs)("div",{className:"form--group",children:[(0,t.jsx)("label",{htmlFor:"",children:(0,o.ag)("dashboard.labelphone")}),(0,t.jsx)("input",{type:"search",name:"",id:"",className:"form-control full",value:e,onChange:function(a){var r=a.target.value;/^(\|-)?\d*$/g.test(r)?i(r):d.Z.error((0,o.ag)("dashboard.validation"))}})]}),(0,t.jsxs)("div",{className:"group__check",children:[(0,t.jsx)("div",{className:"btn btn-primary ",onClick:function(){e&&"0"!==e?c.Z.post("/number/check",{number:e}).then((function(a){d.Z.error((0,o.ag)("dashboard.notFound"))})).catch((function(a){d.Z.error(a.response.data)})):d.Z.error((0,o.ag)("dashboard.numberValidation"))},children:(0,o.ag)("dashboard.check")}),(0,t.jsx)("div",{className:"btn btn-primary ",onClick:function(){e&&"0"!==e?c.Z.post("/number/add",{number:e}).then((function(a){d.Z.success((0,o.ag)("dashboard.Success")),d.Z.success((0,o.ag)("dashboard.validation"))})).catch((function(a){d.Z.error(a.response.data)})):d.Z.error((0,o.ag)("dashboard.numberValidation"))},children:(0,o.ag)("dashboard.add")})]})]})}}}]);