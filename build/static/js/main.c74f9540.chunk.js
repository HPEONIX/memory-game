(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){},15:function(e,c,t){},17:function(e,c,t){"use strict";t.r(c);var n=t(1),o=t.n(n),a=t(8),r=t.n(a),s=(t(13),t(4)),i=t(7),d=t(2),l=(t(14),t(15),t(0));var u=function(e){var c=e.card,t=e.handleChoice,n=e.flipped,o=e.disabled;return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:n?"flipped":"",children:[Object(l.jsx)("img",{className:"front",src:c.src,alt:c.src}),Object(l.jsx)("img",{className:"back",onClick:function(){o||t(c)},src:"/img/cover.png",alt:"./img/cover.png"})]})})},m=[{src:"./img/helmet-1.png",matched:!1},{src:"./img/potion-1.png",matched:!1},{src:"./img/ring-1.png",matched:!1},{src:"./img/scroll-1.png",matched:!1},{src:"./img/shield-1.png",matched:!1},{src:"./img/sword-1.png",matched:!1}];var j=function(){var e=Object(n.useState)(2),c=Object(d.a)(e,2),t=c[0],o=c[1],a=Object(n.useState)(2),r=Object(d.a)(a,2),j=r[0],b=r[1],f=Object(n.useState)([]),h=Object(d.a)(f,2),g=h[0],p=h[1],O=Object(n.useState)(0),v=Object(d.a)(O,2),x=v[0],y=v[1],N=Object(n.useState)([]),S=Object(d.a)(N,2),k=S[0],C=S[1],w=Object(n.useState)(!1),E=Object(d.a)(w,2),M=E[0],G=E[1],J=function(){if(t<2)return console.log("NO"),void alert("value  shouldbe greater than 1");b(t),console.log("no of choises needed ".concat(j," of type ").concat(typeof j));for(var e=[],c=0;c<t;c++)e=[].concat(Object(i.a)(e),m);e=e.sort((function(){return Math.random()-.5})).map((function(e,c){return Object(s.a)(Object(s.a)({},e),{},{id:c})})),p(e),C([]),y(0)},T=function(e){if(console.log("no of choises needed ".concat(j," of type ").concat(typeof j)),k.includes(e))console.log("card already selected");else if(k.length!==j){console.log("card added");var c=[].concat(Object(i.a)(k),[e]);C(c)}else console.log("max selection reached")};Object(n.useEffect)((function(){if(console.log("card compared"),k.length===j){G(!0);var e=k.map((function(e){return e.src}));e.every((function(c){return c===e[0]}))?(console.log("matching cards"),p((function(c){return c.map((function(c){return e.includes(c.src)?Object(s.a)(Object(s.a)({},c),{},{matched:!0}):c}))}))):console.log("cards dont match"),setTimeout((function(){return A()}),1e3)}}),[k,j]);var A=function(){console.log("choice reset"),y((function(e){return e+1})),C([]),G(!1)};return Object(n.useEffect)((function(){J()}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Memory Game"}),Object(l.jsx)("p",{children:Object(l.jsx)("input",{type:"number",className:"next-choices",name:"next-choices",id:"next-choices",onChange:function(e){o(Number(e.target.value))}})}),Object(l.jsx)("button",{onClick:function(){return J()},children:"New Game"}),Object(l.jsx)("div",{className:"card-grid",children:g.map((function(e){return Object(l.jsx)(u,{card:e,handleChoice:T,flipped:k.includes(e)||e.matched,disabled:M},e.id)}))}),Object(l.jsxs)("p",{children:["Turns: ",x]})]})};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c74f9540.chunk.js.map