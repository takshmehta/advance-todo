(this["webpackJsonptheme-switcher"]=this["webpackJsonptheme-switcher"]||[]).push([[0],{18:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},26:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(14),c=n.n(r),l=(n(23),n(11)),i=n.n(l),u=n(17),s=n(15),d=n(10),m=n(38),f=(n(25),n(26),n(31)),p=n(32),h=n(16),E=function(e){var t=e.todos,n=e.markComplete;return o.a.createElement(f.a,{className:"mt-5 mb-2 items"},t.map((function(e){return o.a.createElement(p.a,{key:"todo.id"},e.todoString,o.a.createElement("span",{className:"float-left",onClick:function(){return n(e.id)}},o.a.createElement(h.a,null)))})))},v=n(33),b=n(34),g=n(35),w=n(36),O=n(40),S=n(37),j=n(39),k=function(e){var t=e.addTodos,n=Object(a.useState)(""),r=Object(d.a)(n,2),c=r[0],l=r[1];return o.a.createElement(v.a,{onSubmit:function(e){if(e.preventDefault(),""===c)return alert("Please, would you care entering a todo in input box below ! ");var n={todoString:c,id:Object(j.a)()};t(n),l("")}},o.a.createElement(b.a,null,o.a.createElement(g.a,null,o.a.createElement(w.a,{type:"text",name:"todo",id:"todo",placeholder:"Enter a todo",value:c,onChange:function(e){return l(e.target.value)}}),o.a.createElement(O.a,{addonType:"prepend"},o.a.createElement(S.a,{color:"info"},"Add todo")))))},y=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){var e=localStorage.getItem("todos");e&&r(JSON.parse(e))}),[]);var c=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r([].concat(Object(u.a)(n),[t]));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return o.a.createElement(m.a,{fluid:!0},o.a.createElement("h1",null,"Todo with localstorage"),o.a.createElement(E,{todos:n,markComplete:function(e){r(n.filter((function(t){return t.id!==e})))}}),o.a.createElement(k,{addTodos:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b337693d.chunk.js.map