!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function c(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],r=0;r<e.length;r++){var a=e[r],l=t.base?a[0]+t.base:a[0],s=n[l]||0,d="".concat(l," ").concat(s);n[l]=s+1;var u=c(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:g(p,t),references:1}),o.push(d)}return o}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function m(e,t,n){var o=n.css,r=n.media,a=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,b=0;function g(e,t){var n,o,r;if(t.singleton){var a=b++;n=f||(f=s(t)),o=p.bind(null,n,a,!1),r=p.bind(null,n,a,!0)}else n=s(t),o=m.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=c(n[o]);i[r].references--}for(var a=l(e,t),s=0;s<n.length;s++){var d=c(n[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}n=a}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([r]).join("\n")}var i,c,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&r[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){var o=n(0),r=n(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){(t=n(1)(!1)).push([e.i,"/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",""]),e.exports=t},function(e,t,n){var o=n(0),r=n(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});e.exports=i},function(e,t,n){(t=n(1)(!1)).push([e.i,".display-none {\n  display: none;\n}\n\n.box {\n  width: max-content;\n  margin: 5px 0;\n  padding: 5px;\n  border: 1px solid black;\n  cursor: pointer;\n}\n",""]),e.exports=t},function(e,t,n){"use strict";n.r(t);n(2),n(4);const o=document.getElementById("display-area"),r=()=>{o.innerHTML=""},a=(e,t)=>{Object.keys(t).forEach(n=>{e.setAttribute(n,t[n])})},i=(e,t,n,o)=>{const r=document.createElement("div");r.classList.add("form-block");const i=document.createElement("label");i.setAttribute("for",e),i.innerText=n;const c=document.createElement("input");return a(c,{type:t,id:e,name:e}),o&&a(c,o),r.append(i,c),r},c=()=>{document.getElementById("form-container").innerHTML=""},l=e=>{const t=document.getElementById("form-container");c();const n=document.createElement("form");if(n.setAttribute("id","form"),n.append(i("title","text","*Title:")),n.append(i("description","text","Description:")),n.append(i("due-date","date","Due date:")),"toDo"===e){n.append(i("priority","number","Priority:",{min:1,max:3}));const e=document.createElement("div");e.classList.add("form-block");const t=document.createElement("label");t.setAttribute("for","notes"),t.innerText="Notes: ";const o=document.createElement("textarea");a(o,{id:"notes",name:"notes"}),e.append(t,o),n.append(e)}const o=document.createElement("input");a(o,{type:"submit",id:"submit",value:"Submit"}),n.append(o),t.append(n)},s=(e,t)=>{const n=document.createElement("button");return n.innerText=e,n.setAttribute("id",t),n},d=document.getElementById("buttons-container"),u=document.getElementById("display-area"),p=(e,t,n,o,r,a)=>{const i=document.getElementById("submit"),l=document.getElementById("form");i.addEventListener("click",i=>{i.preventDefault();const s=l.elements[0].value,d=l.elements[1].value,u=(()=>{const e=new Date,t=e.getFullYear();let n=e.getMonth()+1,o=e.getDate();return n<10&&(n="0"+n),o<10&&(o="0"+o),`${t}-${n}-${o}`})(),p=l.elements[2].value;if(s){if("project"===t)if("create"===e){(e=>{const t=localStorage.length;localStorage.setItem(t,JSON.stringify(e))})(((e,t,n,o)=>{const r=[];let a=e,i=t;const c=n;let l=o;return{addToDo:e=>{r.push(e)},removeToDo:e=>{r.splice(e,1)},getProjectData:()=>({title:a,description:i,creationDate:c,dueDate:l,toDoItems:r}),setProjectData:(e,t,n)=>{a=e,i=t,l=n}}})(s,d,u,p).getProjectData()),b()}else"edit"===e&&(o.title=s,o.description=d,o.dueDate=p,localStorage.setItem(n,JSON.stringify(o)),b());else if("toDo"===t)if("create"===e){const e=((e,t,n,o,r,a,i=!1)=>{let c=e,l=t;const s=n;let d=o,u=r,p=a,m=i;return{getToDoData:()=>({title:c,description:l,creationDate:s,dueDate:d,priority:u,notes:p,complete:m}),setToDoData:(e,t,n,o,r)=>{c=e,l=t,d=n,u=o,p=r},setCompletion:e=>{m=e}}})(s,d,u,p,l.elements[3].value,l.elements[4].value),t=document.getElementById("add").getAttribute("data-project"),n=JSON.parse(localStorage.getItem(t));n.toDoItems.push(e.getToDoData()),localStorage.setItem(t,JSON.stringify(n)),f(t,n)}else if("edit"===e){const e=l.elements[3].value,t=l.elements[4].value;r.title=s,r.description=d,r.dueDate=p,r.priority=e,r.notes=t,o.toDoItems[a]=r,localStorage.setItem(n,JSON.stringify(o)),f(n,o)}c()}else alert("The title field is mandatory")})},m=(e,t,n,o)=>{const a=document.createElement("div"),i=document.createElement("div");i.classList.add("box");const c=document.createElement("p"),m=document.createElement("p"),b=document.createElement("p");c.innerText="Title: "+n.title,m.innerText="Due date: "+n.dueDate,n.complete?b.innerText="Completed: Yes":b.innerText="Completed: No","1"===n.priority?i.style.backgroundColor="red":"2"===n.priority?i.style.backgroundColor="orange":i.style.backgroundColor="green";const g=s("Delete","delete");g.addEventListener("click",()=>{t.toDoItems.splice(o,1),localStorage.setItem(e,JSON.stringify(t)),f(e,t)});const v=s("Edit","edit");v.addEventListener("click",()=>{l("toDo"),p("edit","toDo",e,t,n,o)});const y=s("Toggle complete","toggle");y.addEventListener("click",()=>{!0===n.complete?n.complete=!1:n.complete=!0,t.toDoItems[o]=n,localStorage.setItem(e,JSON.stringify(t)),f(e,t)}),i.append(c,m,b),i.addEventListener("click",()=>{d.innerHTML="";const o=s("Back","back");o.addEventListener("click",()=>{f(e,t)}),d.append(o),r(),(e=>{const t=document.createElement("div");t.classList.add("box");const n=document.createElement("p"),o=document.createElement("p"),r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");n.innerText="Title: "+e.title,o.innerText="Description: "+e.description,r.innerText="Creation Date: "+e.creationDate,a.innerText="Due date: "+e.dueDate,i.innerText="Priority: "+e.priority,c.innerText="Notes: "+e.notes,t.append(n,o,r,a,i,c),u.append(t)})(n)}),a.append(i,g,v,y),u.append(a)},f=(e,t)=>{r(),d.innerHTML="";const n=s("Back","back");n.addEventListener("click",()=>{b()});const o=s("Add to-do","add");o.setAttribute("data-project",e),o.addEventListener("click",()=>{l("toDo"),p("create","toDo")}),d.append(n,o),t.toDoItems.forEach((n,o)=>{m(e,t,n,o)})},b=()=>{r(),d.innerHTML="";const e=s("Add project","add");e.addEventListener("click",()=>{l("project"),p("create","project")}),d.append(e),Object.keys(localStorage).forEach(e=>{((e,t)=>{const n=document.createElement("div"),o=document.createElement("div");o.classList.add("box");const r=document.createElement("p"),a=document.createElement("p"),i=document.createElement("p"),c=document.createElement("p");r.innerText="Title: "+t.title,a.innerText="Description: "+t.description,i.innerText="Creation date: "+t.creationDate,c.innerText="Due date: "+t.dueDate,o.append(r,a,i,c),o.addEventListener("click",()=>{f(e,t)});const d=s("Delete","delete");d.addEventListener("click",()=>{localStorage.removeItem(e),b()});const m=s("Edit","edit");m.addEventListener("click",()=>{l(t),p("edit","project",e,t)}),n.append(o,d,m),u.append(n)})(e,JSON.parse(localStorage.getItem(e)))})};b()}]);