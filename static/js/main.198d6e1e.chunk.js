(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{74:function(t,e,n){},75:function(t,e,n){},98:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(9),o=n.n(c);n(74),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(75);var r,s,l=n(17),d=n(139),u=n(129),j=n(130),b=n(5),O=i.a.memo((function(t){console.log("AddItemForm is called");var e=Object(a.useState)(""),n=Object(l.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)(null),r=Object(l.a)(o,2),s=r[0],O=r[1],f=function(){""!==i.trim()?(t.addItem(i),c("")):O("Title is required")};return Object(b.jsxs)("div",{children:[Object(b.jsx)(d.a,{variant:"outlined",error:!!s,value:i,onChange:function(t){c(t.currentTarget.value)},onKeyPress:function(t){null!==s&&O(null),13===t.charCode&&f()},label:"Title",helperText:s}),Object(b.jsx)(u.a,{color:"primary",onClick:f,children:Object(b.jsx)(j.a,{})})]})})),f=i.a.memo((function(t){console.log("EditableSpan is called");var e=Object(a.useState)(!1),n=Object(l.a)(e,2),i=n[0],c=n[1],o=Object(a.useState)(""),r=Object(l.a)(o,2),s=r[0],u=r[1];return i?Object(b.jsx)(d.a,{value:s,onChange:function(t){u(t.currentTarget.value),console.log(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.onChange(s)}}):Object(b.jsx)("span",{onDoubleClick:function(){c(!0),u(t.title)},children:t.title})})),T=n(132),h=n(131),k=n(140),v=n(10),m=n(60),p=n.n(m).a.create(Object(v.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"88133967-bfe7-4c18-8b37-a3c163827473"}}));!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(r||(r={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(s||(s={}));var g=function(){return p.get("todo-lists")},I=function(t){return p.post("todo-lists",{title:t})},x=function(t){return p.delete("todo-lists/".concat(t))},C=function(t,e){return p.put("todo-lists/".concat(t),{title:e})},S=function(t){return p.get("todo-lists/".concat(t,"/tasks"))},E=function(t,e){return p.post("todo-lists/".concat(t,"/tasks"),{title:e})},D=function(t,e){return p.delete("todo-lists/".concat(t,"/tasks/").concat(e))},A=function(t,e,n){return p.put("todo-lists/".concat(t,"/tasks/").concat(e),n)},L=i.a.memo((function(t){var e=Object(a.useCallback)((function(e){var n=e.currentTarget.checked;t.changeTaskStatus(t.task.id,n?r.Completed:r.New,t.todolistId)}),[t.changeTaskStatus,t.task.id,t.todolistId]),n=Object(a.useCallback)((function(e){t.changeTaskTitle(t.task.id,e,t.todolistId)}),[t.changeTaskTitle,t.task.id,t.todolistId]),i=Object(a.useCallback)((function(){t.removeTask(t.task.id,t.todolistId)}),[t.removeTask,t.task.id,t.todolistId]);return Object(b.jsxs)("div",{className:t.task.status===r.Completed?"is-done":"",children:[Object(b.jsx)(k.a,{color:"primary",onChange:e,checked:t.task.status===r.Completed}),Object(b.jsx)(f,{title:t.task.title,onChange:n}),Object(b.jsx)(u.a,{onClick:i,children:Object(b.jsx)(h.a,{})})]},t.task.id)})),y=n(22),w=n(16),F={},K=function(t,e,n){return function(a,i){var c=i().tasks[n].find((function(e){return e.id===t}));if(c){var o=Object(v.a)({deadline:c.deadline,priority:c.priority,description:c.description,startDate:c.startDate,title:c.title,status:c.status},e);A(n,t,o).then((function(i){var c=function(t,e,n){return{type:"UPDATE-TASK",taskId:t,model:e,todolistId:n}}(t,e,n);a(c)}))}else console.log("task not found in the state")}},N=i.a.memo((function(t){var e=Object(y.b)();Object(a.useEffect)((function(){var n;e((n=t.id,function(t){S(n).then((function(e){t(function(t,e){return{type:"SET-TASKS",tasks:t,todolistId:e}}(e.data.items,n))}))}))}),[]);var n=Object(a.useCallback)((function(e){t.addTask(e,t.id)}),[t.addTask,t.id]),i=Object(a.useCallback)((function(){t.removeTodolist(t.id)}),[t.removeTodolist,t.id]),c=Object(a.useCallback)((function(e){t.changeTodolistTitle(t.id,e)}),[t.changeTodolistTitle,t.id]),o=Object(a.useCallback)((function(){return t.changeFilter("all",t.id)}),[t.changeFilter,t.id]),s=Object(a.useCallback)((function(){return t.changeFilter("active",t.id)}),[t.changeFilter,t.id]),l=Object(a.useCallback)((function(){return t.changeFilter("completed",t.id)}),[t.changeFilter,t.id]),d=t.tasks;return"active"===t.filter&&(d=t.tasks.filter((function(t){return t.status===r.New}))),"completed"===t.filter&&(d=t.tasks.filter((function(t){return t.status===r.Completed}))),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)(f,{title:t.title,onChange:c}),Object(b.jsx)(u.a,{onClick:i,children:Object(b.jsx)(h.a,{})})]}),Object(b.jsx)(O,{addItem:n}),Object(b.jsx)("div",{children:d.map((function(e){return Object(b.jsx)(L,{todolistId:t.id,task:e,changeTaskStatus:t.changeTaskStatus,changeTaskTitle:t.changeTaskTitle,removeTask:t.removeTask},e.id)}))}),Object(b.jsxs)("div",{style:{paddingTop:"10px"},children:[Object(b.jsx)(T.a,{variant:"all"===t.filter?"outlined":"text",onClick:o,color:"default",children:"All"}),Object(b.jsx)(T.a,{variant:"active"===t.filter?"outlined":"text",onClick:s,color:"primary",children:"Active"}),Object(b.jsx)(T.a,{variant:"completed"===t.filter?"outlined":"text",onClick:l,color:"secondary",children:"Completed"})]})]})})),R=n(133),H=n(134),M=n(136),P=n(137),G=n(138),U=n(99),V=n(135),B=[];var J=function(){var t=Object(y.c)((function(t){return t.todolists})),e=Object(y.c)((function(t){return t.tasks})),n=Object(y.b)();Object(a.useEffect)((function(){n((function(t){g().then((function(e){t({type:"SET-TODOLISTS",todolists:e.data})}))}))}),[]);var i=Object(a.useCallback)((function(t,e){n(function(t,e){return function(n){E(e,t).then((function(t){var e={type:"ADD-TASK",task:t.data.data.item};n(e)}))}}(t,e))}),[n]),c=Object(a.useCallback)((function(t,e){n(function(t,e){return function(n){D(t,e).then((function(a){var i=function(t,e){return{type:"REMOVE-TASK",taskId:t,todolistId:e}}(e,t);n(i)}))}}(e,t))}),[n]),o=Object(a.useCallback)((function(t,e,a){n(K(t,{status:e},a))}),[n]),r=Object(a.useCallback)((function(t,e,a){n(K(t,{title:e},a))}),[n]),s=Object(a.useCallback)((function(t){var e;n((e=t,function(t){x(e).then((function(n){t(function(t){return{type:"REMOVE-TODOLIST",id:t}}(e))}))}))}),[n]),l=Object(a.useCallback)((function(t){n(function(t){return function(e){I(t).then((function(t){e({type:"ADD-TODOLIST",todolist:t.data.data.item})}))}}(t))}),[n]),d=Object(a.useCallback)((function(t,e){n(function(t,e){return function(n){C(t,e).then((function(a){n(function(t,e){return{type:"CHANGE-TODOLIST-TITLE",id:t,title:e}}(t,e))}))}}(t,e))}),[n]),j=Object(a.useCallback)((function(t,e){var a=function(t,e){return{type:"CHANGE-TODOLIST-FILTER",id:t,filter:e}}(e,t);n(a)}),[n]);return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(R.a,{position:"static",children:Object(b.jsxs)(H.a,{children:[Object(b.jsx)(u.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(V.a,{})}),Object(b.jsx)(M.a,{variant:"h6",children:"Todolists"}),Object(b.jsx)(T.a,{color:"inherit",children:"Login"})]})}),Object(b.jsxs)(P.a,{fixed:!0,children:[Object(b.jsx)(G.a,{container:!0,style:{padding:"20px"},children:Object(b.jsx)(O,{addItem:l})}),Object(b.jsx)(G.a,{container:!0,spacing:3,children:t.map((function(t){return Object(b.jsx)(G.a,{item:!0,children:Object(b.jsx)(U.a,{style:{padding:"10px"},children:Object(b.jsx)(N,{id:t.id,title:t.title,tasks:e[t.id],removeTask:c,changeFilter:j,addTask:i,changeTaskStatus:o,filter:t.filter,removeTodolist:s,changeTodolistTitle:d,changeTaskTitle:r},t.id)})},t.id)}))})]})]})},W=n(39),q=n(61),Y=Object(W.b)({tasks:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TASK":var n=Object(v.a)({},t),a=t[e.todolistId],i=a.filter((function(t){return t.id!==e.taskId}));return n[e.todolistId]=i,n;case"ADD-TASK":var c=Object(v.a)({},t),o=e.task,r=c[o.todoListId],s=[o].concat(Object(w.a)(r));return c[o.todoListId]=s,c;case"UPDATE-TASK":var l=t[e.todolistId];return t[e.todolistId]=l.map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),e.model):t})),Object(v.a)({},t);case"CHANGE-TASK-TITLE":var d=t[e.todolistId];return t[e.todolistId]=d.map((function(t){return t.id===e.taskId?Object(v.a)(Object(v.a)({},t),{},{title:e.title}):t})),Object(v.a)({},t);case"ADD-TODOLIST":var u=Object(v.a)({},t);return u[e.todolist.id]=[],u;case"REMOVE-TODOLIST":var j=Object(v.a)({},t);return delete j[e.id],j;case"SET-TODOLISTS":var b=Object(v.a)({},t);return e.todolists.forEach((function(t){b[t.id]=[]})),b;case"SET-TASKS":var O=Object(v.a)({},t);return O[e.todolistId]=e.tasks,O;default:return t}},todolists:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"REMOVE-TODOLIST":return t.filter((function(t){return t.id!==e.id}));case"ADD-TODOLIST":var n=Object(v.a)(Object(v.a)({},e.todolist),{},{filter:"all"});return[n].concat(Object(w.a)(t));case"CHANGE-TODOLIST-TITLE":var a=t.find((function(t){return t.id===e.id}));return a&&(a.title=e.title),Object(w.a)(t);case"CHANGE-TODOLIST-FILTER":var i=t.find((function(t){return t.id===e.id}));return i&&(i.filter=e.filter),Object(w.a)(t);case"SET-TODOLISTS":return e.todolists.map((function(t){return Object(v.a)(Object(v.a)({},t),{},{filter:"all"})}));default:return t}}}),$=Object(W.c)(Y,Object(W.a)(q.a));window.store=$,o.a.render(Object(b.jsx)(y.a,{store:$,children:Object(b.jsx)(J,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[98,1,2]]]);
//# sourceMappingURL=main.198d6e1e.chunk.js.map