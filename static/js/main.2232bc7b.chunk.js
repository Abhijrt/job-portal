(this["webpackJsonpjob-portal"]=this["webpackJsonpjob-portal"]||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(13),i=c.n(a),r=c(11),j=c(17),d=c(12),l=c(8),b="ADD_CANDIDATES",o="ADD_TO_SHORTLIST",u="ADD_TO_REJECTLIST",O="ADD_SEARCH_RESULT",h={candidatesLists:[],rejectLists:[],selectedLists:[],results:[],showSearchResults:!1};var x=Object(r.b)({candidate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(l.a)(Object(l.a)({},e),{},{candidatesLists:t.candidates});case u:return Object(l.a)(Object(l.a)({},e),{},{rejectLists:[t.candidate].concat(Object(d.a)(e.rejectLists)),showSearchResults:!1});case o:return Object(l.a)(Object(l.a)({},e),{},{selectedLists:[t.candidate].concat(Object(d.a)(e.selectedLists)),showSearchResults:!1});case O:var c=e.candidatesLists.filter((function(e){return e.name===t.searchText}));return Object(l.a)(Object(l.a)({},e),{},{results:[].concat(Object(d.a)(c),Object(d.a)(e.results)),showSearchResults:!0});default:return e}}}),m=c(16),v=c.n(m);var f=c(4),p=(c(30),c(7)),g=c(2),L=c(6);function S(e){return{type:u,candidate:e}}function N(e){return{type:o,candidate:e}}c(31);var R=c(1);var C=function(e){var t=e.candidate,c=t.Image,n=t.name,s=(t.id,e.singleCandidate),a=void 0!==s&&s,i=Object(f.c)();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)("img",{src:c,alt:"name"}),Object(R.jsx)("div",{className:"name-container",children:Object(R.jsx)("span",{children:n})})]}),a&&Object(R.jsxs)("div",{className:"btn-container",children:[Object(R.jsx)("button",{className:"btn",onClick:function(){return i(N(e.candidate)),Object(R.jsx)(g.a,{to:"/"})},children:"Select"}),Object(R.jsx)("button",{className:"btn",onClick:function(){return i(S(e.candidate)),Object(R.jsx)(g.a,{to:"/"})},children:"Reject"})]})]})};var T=function(e){var t=Object(n.useState)([]),c=Object(L.a)(t,2),s=c[0],a=c[1],i=Object(f.c)();Object(n.useEffect)((function(){r()}),[]);var r=function(){fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json").then((function(e){return e.json()})).then((function(e){a(e),i({type:b,candidates:e})}))};return Object(R.jsx)("div",{className:"card-component",children:s.map((function(e){return Object(R.jsx)("div",{style:{margin:"20px"},children:Object(R.jsx)(p.b,{to:"/candidate/".concat(e.id),children:Object(R.jsx)(C,{candidate:e})})})}))})};c(33);var w=Object(f.b)((function(e){return{results:e.candidate.results,showSearchResults:e.candidate.showSearchResults}}))((function(e){var t=Object(n.useState)(""),c=Object(L.a)(t,2),s=c[0],a=c[1],i=e.showSearchResults,r=e.results,j=Object(f.c)();return Object(R.jsxs)("nav",{children:[Object(R.jsx)("label",{className:"logo",children:Object(R.jsx)(p.b,{className:"link",to:"/",children:"Job Portal"})}),Object(R.jsx)("input",{onChange:function(e){a(e.target.value)}}),Object(R.jsx)("button",{id:"search-btn",onClick:function(){j(function(e){return{type:O,searchText:e}}(s))},children:"Search"}),i&&Object(R.jsx)("div",{className:"search-results",children:Object(R.jsxs)("div",{className:"search-result",children:[Object(R.jsx)("img",{src:r[0].Image,alt:"search-pic"}),Object(R.jsx)("div",{className:"movie-info",children:Object(R.jsx)("span",{children:r[0].name})}),Object(R.jsxs)("div",{children:[Object(R.jsx)("button",{className:"btn",onClick:function(){j(N(r[0]))},children:"Select"}),Object(R.jsx)("button",{className:"btn",onClick:function(){j(S(r[0]))},children:"Reject"})]})]})}),Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)(p.b,{className:"link",to:"/shortlisted",children:"Selection"})}),Object(R.jsx)("li",{children:Object(R.jsx)(p.b,{className:"link",to:"/rejected",children:"Rejection"})})]})]})}));var k=Object(f.b)((function(e){return{selectedLists:e.candidate.selectedLists}}))((function(e){var t=e.selectedLists;return Object(R.jsx)("div",{className:"card-component",children:0===t.length?Object(R.jsx)("div",{children:" There are no Selected Candidate List Available !"}):Object(R.jsx)(R.Fragment,{children:t.map((function(e){return Object(R.jsx)("div",{style:{margin:"20px"},children:Object(R.jsx)(C,{candidate:e})})}))})})}));var D=Object(f.b)((function(e){return{rejectLists:e.candidate.rejectLists}}))((function(e){var t=e.rejectLists;return Object(R.jsx)("div",{className:"card-component",children:0===t.length?Object(R.jsx)("div",{children:" There are no Selected Candidate List Available !"}):Object(R.jsx)(R.Fragment,{children:t.map((function(e){return Object(R.jsx)("div",{style:{margin:"20px"},children:Object(R.jsx)(C,{candidate:e})})}))})})}));var y=Object(f.b)((function(e){return{candidatesLists:e.candidate.candidatesLists}}))((function(e){var t=Object(n.useState)({}),c=Object(L.a)(t,2),s=c[0],a=c[1],i=Object(g.h)(),r=e.candidatesLists;return Object(n.useEffect)((function(){var e=r.filter((function(e){return e.id==i.id})),t={Image:e[0].Image,name:e[0].name,id:e[0].id};a(t)}),[]),Object(R.jsx)("div",{className:"single-candidate",children:Object(R.jsx)(C,{candidate:s,singleCandidate:!0})})}));c(34);var A=function(){return Object(R.jsx)(p.a,{children:Object(R.jsxs)("div",{className:"app",children:[Object(R.jsx)(w,{}),Object(R.jsxs)(g.d,{children:[Object(R.jsx)(g.b,{path:"/",exact:!0,element:Object(R.jsx)(T,{})}),Object(R.jsx)(g.b,{path:"/shortlisted",exact:!0,element:Object(R.jsx)(k,{})}),Object(R.jsx)(g.b,{path:"/rejected",exact:!0,element:Object(R.jsx)(D,{})}),Object(R.jsx)(g.b,{path:"/candidate/:id",exact:!0,element:Object(R.jsx)(y,{})})]})]})})},E=Object(r.c)(x,Object(r.a)(j.a,v.a));i.a.render(Object(R.jsx)(f.a,{store:E,children:Object(R.jsx)(s.a.StrictMode,{children:Object(R.jsx)(A,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.2232bc7b.chunk.js.map