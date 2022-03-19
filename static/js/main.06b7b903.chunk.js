(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{58:function(e,t,a){e.exports=a(68)},63:function(e,t,a){},64:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),r=a.n(c),l=(a(63),a(20)),o=a(31),u=a(25),d=a(15),s=(a(64),a(110)),m=a(100),f=a(101);function v(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(d.a)(l,2),u=o[0],v=o[1],b=function(){""!==c.trim()?(e.addItem(c),r("")):v("Title is required")};return i.a.createElement("div",null,i.a.createElement(s.a,{variant:"outlined",error:!!u,value:c,onChange:function(e){r(e.currentTarget.value)},onKeyPress:function(e){v(null),13===e.charCode&&b()},label:"Title",helperText:u}),i.a.createElement(m.a,{color:"primary",onClick:b},i.a.createElement(f.a,null)))}var b=function(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(""),o=Object(d.a)(l,2),u=o[0],m=o[1];return c?i.a.createElement(s.a,{variant:"outlined",value:u,onChange:function(e){m(e.currentTarget.value),console.log(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.onChange(u)}}):i.a.createElement("span",{onDoubleClick:function(){r(!0),m(e.title)}},e.title)},E=a(112),h=a(103),j=a(102),O=function(e){return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement(b,{title:e.title,onChange:function(t){e.changeTodolistTitle(e.id,t)}}),i.a.createElement(m.a,{onClick:function(){e.removeTodolist(e.id)}},i.a.createElement(j.a,null))),i.a.createElement(v,{addItem:function(t){e.addTask(t,e.id)}}),i.a.createElement("div",null,e.tasks.map((function(t){return i.a.createElement("div",{key:t.id,className:t.isDone?"is-done":""},i.a.createElement(E.a,{color:"primary",onChange:function(a){var n=a.currentTarget.checked;e.changeTaskStatus(t.id,n,e.id)},checked:t.isDone}),i.a.createElement(b,{title:t.title,onChange:function(a){e.changeTaskTitle(t.id,a,e.id)}}),i.a.createElement(m.a,{onClick:function(){e.removeTask(t.id,e.id)}},i.a.createElement(j.a,null)))}))),i.a.createElement("div",null,i.a.createElement(h.a,{variant:"all"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("all",e.id)},color:"default"},"All"),i.a.createElement(h.a,{variant:"active"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("active",e.id)},color:"primary"},"Active"),i.a.createElement(h.a,{variant:"completed"===e.filter?"outlined":"text",onClick:function(){return e.changeFilter("completed",e.id)},color:"secondary"},"Completed")))},g=a(111),k=a(104),p=a(105),T=a(107),C=a(108),y=a(109),D=a(69),S=a(106);var w=function(){var e,t=Object(g.a)(),a=Object(g.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:a,title:"What to bye",filter:"all"}]),r=Object(d.a)(c,2),s=r[0],f=r[1],b=Object(n.useState)((e={},Object(u.a)(e,t,[{id:Object(g.a)(),title:"HTML&CSS",isDone:!0},{id:Object(g.a)(),title:"JS",isDone:!0}]),Object(u.a)(e,a,[{id:Object(g.a)(),title:"Milk",isDone:!0},{id:Object(g.a)(),title:"React Book",isDone:!0}]),e)),E=Object(d.a)(b,2),j=E[0],w=E[1];function x(e,t){var a=s.find((function(e){return e.id===t}));a&&(a.filter=e,f(Object(o.a)(s)))}function F(e,t){var a=j[t];j[t]=a.filter((function(t){return t.id!=e})),w(Object(l.a)({},j))}function B(e,t){var a={id:Object(g.a)(),title:e,isDone:!1},n=j[t];j[t]=[a].concat(Object(o.a)(n)),w(Object(l.a)({},j))}function I(e,t,a){var n=j[a].find((function(t){return t.id===e}));n&&(n.isDone=t,w(Object(l.a)({},j)))}function W(e,t,a){var n=j[a].find((function(t){return t.id===e}));n&&(n.title=t,w(Object(l.a)({},j)))}function A(e){f(s.filter((function(t){return t.id!=e}))),delete j[e],w(Object(l.a)({},j))}function J(e,t){var a=s.find((function(t){return t.id===e}));a&&(a.title=t,f(Object(o.a)(s)))}return i.a.createElement("div",{className:"App"},i.a.createElement(k.a,{position:"static"},i.a.createElement(p.a,null,i.a.createElement(m.a,{edge:"start",color:"inherit","aria-label":"menu"},i.a.createElement(S.a,null)),i.a.createElement(T.a,{variant:"h6"},"News"),i.a.createElement(h.a,{color:"inherit"},"Login"))),i.a.createElement(C.a,{fixed:!0},i.a.createElement(y.a,{container:!0,style:{padding:"20px"}},i.a.createElement(v,{addItem:function(e){var t=Object(g.a)();f([{id:t,title:e,filter:"all"}].concat(Object(o.a)(s))),w(Object(l.a)(Object(l.a)({},j),{},Object(u.a)({},t,[])))}})),i.a.createElement(y.a,{container:!0,spacing:3},s.map((function(e){var t=j[e.id],a=t;return"active"===e.filter&&(a=t.filter((function(e){return!1===e.isDone}))),"completed"===e.filter&&(a=t.filter((function(e){return!0===e.isDone}))),i.a.createElement(y.a,{item:!0},i.a.createElement(D.a,{style:{padding:"10px"}},i.a.createElement(O,{key:e.id,id:e.id,title:e.title,tasks:a,removeTask:F,changeFilter:x,addTask:B,changeTaskStatus:I,filter:e.filter,removeTodolist:A,changeTodolistTitle:J,changeTaskTitle:W})))})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.06b7b903.chunk.js.map