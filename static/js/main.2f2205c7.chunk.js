(this["webpackJsonpreact-playground"]=this["webpackJsonpreact-playground"]||[]).push([[0],{11:function(e,t,r){},12:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r.n(n),i=r(5),o=r.n(i),l=r(3),a=r(0);var s={layout:{display:"grid",gridTemplateAreas:'"appbar appbar"\n                        "sidebar main"',gridTemplateColumns:"300px 1fr"},appbar:{gridArea:"appbar"},sidebar:{gridArea:"sidebar"},main:{gridArea:"main",overflowY:"auto",maxHeight:"calc(100vh - 70px)"}},d=function(e){var t=e.appbar,r=e.sidebar,n=e.main;return Object(a.jsxs)("section",{style:s.layout,children:[Object(a.jsx)("div",{style:s.appbar,children:t}),Object(a.jsx)("nav",{style:s.sidebar,children:r}),Object(a.jsx)("main",{style:s.main,children:n})]})};var j={container:{height:70,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"bold",fontSize:28,padding:8,backgroundColor:"#fafafa",borderBottom:"1px solid #ccc"}},b=function(e){var t=e.title;return Object(a.jsx)("div",{style:j.container,children:t})},u=r(1);var x={container:{display:"flex",flexDirection:"column",paddingLeft:16,height:"calc(100vh - 70px)",borderRight:"1px solid #ccc"},item:{padding:"16px 0",cursor:"pointer"},current:{borderRight:"5px solid dodgerblue",color:"dodgerblue"}},h=function(e){var t=e.examples,r=e.currentExample,n=e.setCurrentExample;return Object(a.jsxs)("section",{style:x.container,children:[Object(a.jsx)("h4",{children:"Przyk\u0142ady"}),Object.entries(t).map((function(e){var t=Object(l.a)(e,2),c=t[0],i=t[1];return Object(a.jsx)("span",{style:r===c?Object(u.a)(Object(u.a)({},x.item),x.current):x.item,onClick:function(){return n(c)},children:i.title},c)}))]})};var O=function(){return Object(a.jsx)("h1",{children:"Witaj, \u015bwiecie!"})};function p(e){return Object(a.jsx)("h1",{children:e.value})}function f(e){return Object(a.jsxs)("div",{style:Object(u.a)(Object(u.a)({},y),{},{backgroundColor:e.color}),children:[Object(a.jsxs)("p",{children:["marka: ",e.brand]}),Object(a.jsxs)("p",{children:["model: ",e.model]})]})}var y={margin:8,width:170,color:"white",border:"1px solid transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:10};function g(e){var t=e.onClick,r=e.children;return Object(a.jsx)("button",{onClick:t,style:m,children:r})}var m={backgroundColor:"dodgerblue",border:"none",height:50,width:200,color:"white",textTransform:"uppercase",fontWeight:"bold"};var v=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)(p,{value:"Przyk\u0142adowy tytu\u0142"}),Object(a.jsx)(f,{brand:"Tesla",model:"X",color:"tomato"}),Object(a.jsx)(f,{brand:"Ford",model:"Focus",color:"dodgerblue"}),Object(a.jsx)(f,{brand:"Fiat",model:"Tipo",color:"purple"}),Object(a.jsx)(g,{onClick:function(){return alert("Wci\u015bni\u0119to przycisk!")},children:"Przycisk"})]})},C=function(){return Object(a.jsx)("div",{style:{width:100,height:100,border:"1px solid transparent",backgroundColor:"red",borderRadius:"50%"}})},k=function(){return Object(a.jsx)("div",{style:{width:100,height:100,border:"1px solid transparent",backgroundColor:"green"}})};var E={container:{display:"flex",flexDirection:"column",alignItems:"center"},counter:{fontWeight:"bold",fontSize:28},button:{height:40,width:200,border:"1px solid transparent",borderRadius:5,margin:8,backgroundColor:"dodgerblue",color:"white"}},w=function(){var e=Object(n.useState)("circle"),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(a.jsxs)("div",{style:E.container,children:[Object(a.jsx)("button",{style:E.button,onClick:function(){c((function(e){return"circle"===e?"square":"circle"}))},children:"Zmie\u0144 figur\u0119"}),"circle"===r?Object(a.jsx)(C,{}):Object(a.jsx)(k,{})]})},T=function(e){var t=e.color,r=e.children;return Object(a.jsx)("div",{style:{width:175,height:175,border:"1px solid transparent",backgroundColor:t,borderRadius:"50%",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:8},children:r})};var z={menu:{display:"flex",listStyleType:"none",flexWrap:"wrap"},menuItem:{padding:10},colors:{display:"flex",flexWrap:"wrap"}},R=function(){return Object(a.jsxs)("section",{children:[Object(a.jsx)("nav",{children:Object(a.jsx)("ul",{style:z.menu,children:["Przycisk 1","Przycisk 2","Przycisk 3","Przycisk 4","Przycisk 5","Przycisk 6","Przycisk 7"].map((function(e){return Object(a.jsx)("li",{style:z.menuItem,children:e},e)}))})}),Object(a.jsx)("section",{style:z.colors,children:[{title:"Czerwony",color:"tomato"},{title:"Niebieski",color:"dodgerblue"},{title:"Pomara\u0144czowy",color:"orange"},{title:"Fioletowy",color:"purple"},{title:"Morski",color:"teal"},{title:"Srebrny",color:"silver"},{title:"Kasztanowy",color:"maroon"}].map((function(e){var t=e.title,r=e.color;return Object(a.jsx)(T,{color:r,children:t},t)}))})]})};var I={container:{display:"flex",flexDirection:"column",alignItems:"center"},counter:{fontWeight:"bold",fontSize:28},button:{height:50,width:50,border:"1px solid transparent",borderRadius:"50%",margin:8}},S=function(){var e=Object(n.useState)(0),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(a.jsxs)("section",{style:I.container,children:[Object(a.jsx)("p",{style:I.counter,children:r}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{style:I.button,onClick:function(){c((function(e){return e-1}))},children:"-"}),Object(a.jsx)("button",{style:I.button,onClick:function(){c((function(e){return e+1}))},children:"+"})]})]})},N={left:0,right:0},P=Object(n.createContext)({state:N,dispatch:function(e){}});function W(e,t){var r=e.left,n=e.right;switch(t.type){case"INCREMENT_LEFT":return Object(u.a)(Object(u.a)({},e),{},{left:r+1});case"INCREMENT_RIGHT":return Object(u.a)(Object(u.a)({},e),{},{right:n+1});case"DECREMENT_LEFT":return Object(u.a)(Object(u.a)({},e),{},{left:r-1});case"DECREMENT_RIGHT":return Object(u.a)(Object(u.a)({},e),{},{right:n-1});case"RESET":return{left:0,right:0};default:return e}}function M(e){var t=e.children,r=Object(n.useReducer)(W,N),c=Object(l.a)(r,2),i=c[0],o=c[1];return Object(a.jsx)(P.Provider,{value:{state:i,dispatch:o},children:t})}function _(){var e=Object(n.useContext)(P).state;return Object(a.jsxs)("div",{style:Object(u.a)(Object(u.a)({},L.counter),{},{padding:"35px 0"}),children:[e.left," : ",e.right]})}function D(e){var t=e.children;return Object(a.jsx)("div",{style:Object(u.a)(Object(u.a)({},L.box),{},{backgroundColor:"dodgerblue"}),children:t})}function F(e){var t=e.children;return Object(a.jsx)("div",{style:Object(u.a)(Object(u.a)({},L.box),{},{backgroundColor:"orange"}),children:t})}function H(e){var t=e.type,r=Object(n.useContext)(P),c=r.state,i=r.dispatch;return Object(a.jsx)("div",{style:Object(u.a)(Object(u.a)({},L.box),{},{backgroundColor:"lightgray"}),children:"left"===t?Object(a.jsxs)("div",{style:L.container,children:[Object(a.jsx)("p",{style:L.counter,children:c.left}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return i({type:"INCREMENT_LEFT"})},children:"+"}),Object(a.jsx)("button",{onClick:function(){return i({type:"DECREMENT_LEFT"})},children:"-"})]})]}):Object(a.jsxs)("div",{style:L.container,children:[Object(a.jsx)("p",{style:L.counter,children:c.right}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{onClick:function(){return i({type:"INCREMENT_RIGHT"})},children:"+"}),Object(a.jsx)("button",{onClick:function(){return i({type:"DECREMENT_RIGHT"})},children:"-"})]})]})})}var L={container:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},counter:{display:"flex",justifyContent:"center",fontWeight:"bold",fontSize:40},box:{display:"flex",justifyContent:"space-evenly",padding:20,backgroundColor:"tomato",minWidth:200,minHeight:200}},A=function(){return Object(a.jsx)(M,{children:Object(a.jsxs)("section",{style:L.container,children:[Object(a.jsx)(_,{}),Object(a.jsxs)("div",{style:L.box,children:[Object(a.jsx)(D,{children:Object(a.jsx)(F,{children:Object(a.jsx)(H,{type:"left"})})}),Object(a.jsx)(D,{children:Object(a.jsx)(F,{children:Object(a.jsx)(H,{type:"right"})})})]})]})})};var G=function(){var e=Object(n.useState)(window.localStorage.getItem("name")||""),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){window.localStorage.setItem("name",r)})),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("form",{children:[Object(a.jsx)("div",{children:"Twoje imi\u0119: "}),Object(a.jsx)("input",{value:r,id:"name",onChange:function(e){return c(e.target.value)}})]}),r?"Cze\u015b\u0107, ".concat(r):"Wpisz swoje imi\u0119"]})},J={jsx:{title:"JSX",body:Object(a.jsx)(O,{})},components:{title:"Komponenty",body:Object(a.jsx)(v,{})},state:{title:"Stan",body:Object(a.jsx)(S,{})},conditional_rendering:{title:"Renderowanie warunkowe",body:Object(a.jsx)(w,{})},lists:{title:"Listy i klucze",body:Object(a.jsx)(R,{})},context:{title:"Kontekst",body:Object(a.jsx)(A,{})},life_cycle:{title:"Efekty uboczne",body:Object(a.jsx)(G,{})}};var K=function(){var e=Object(n.useState)("jsx"),t=Object(l.a)(e,2),r=t[0],c=t[1];return Object(a.jsx)(d,{appbar:Object(a.jsx)(b,{title:J[r].title}),sidebar:Object(a.jsx)(h,{examples:J,currentExample:r,setCurrentExample:c}),main:J[r].body})};r(11);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.2f2205c7.chunk.js.map