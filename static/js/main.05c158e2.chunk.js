(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(20),r=n.n(a),s=(n(40),n(28),n(41),n.p+"static/media/tomato-5.641c9480.png"),i=(n(42),n(13)),l=n(1);function j(e){var t=e.onClick,n=e.title,c=e.path;return Object(l.jsx)("button",{className:"Button",onClick:function(e){t&&t(e)},children:""===c?n:Object(l.jsx)(i.b,{to:c,style:{textDecoration:"none",color:"white"},children:n})})}j.defaultProps={onClick:null,title:"Button",path:""};var d=j;var u=function(){return Object(l.jsx)("div",{className:"Header",children:Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(i.b,{to:"/",style:{textDecoration:"none",color:"black"},children:Object(l.jsxs)("div",{className:"logo",children:[Object(l.jsx)("img",{className:"Logo",src:s,alt:""}),Object(l.jsx)("p",{className:"header-title",children:"Tomato Kingdom"})]})}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(d,{title:"Login"}),Object(l.jsx)(d,{title:"Setting",path:"/setting"}),Object(l.jsx)(d,{title:"Missions",path:"/missions"}),Object(l.jsx)(d,{title:"Challenges"})]})]})})},b=n(23),O=(n(48),n(5)),p=function(e){return{type:"SETPERIODCOUNTER",value:e}},h=function(e){return{type:"SETSTATE",value:e}},m=n(14),x=n(15),v=n.p+"static/media/ding.658f4412.mp3",f=n(32);function g(e){var t="0".concat(Math.floor(e/60).toString()).slice(-2),n="0".concat((e%60).toString()).slice(-2);return"".concat(t,":").concat(n)}var N=function(e){var t=Object(O.b)(),n=Object(O.c)((function(e){return e.period})),o=Object(O.c)((function(e){return e.periodCounter})),a=Object(O.c)((function(e){return e.shortBreak})),r=Object(O.c)((function(e){return e.longBreak})),s=Object(O.c)((function(e){return e.longBreakInterval})),i=Object(O.c)((function(e){return e.state})),j=Object(c.useState)(60*n),u=Object(b.a)(j,2),N=u[0],k=u[1],y=Object(c.useState)(!1),C=Object(b.a)(y,2),S=C[0],B=C[1],E=Object(c.useState)(0),T=Object(b.a)(E,2),R=T[0],w=T[1],I=new Audio(v);function L(){return"pomodoro"===i&&o<s-1?(t(h("short")),t(p(o+1)),k(60*a),B(!1),I.play()):"pomodoro"===i&&o>=s-1?(t(h("long")),t(p(o+1)),k(60*r),B(!1),I.play()):"short"===i?(t(h("pomodoro")),k(60*n),B(!1),I.play()):"long"===i&&(t(h("pomodoro")),t(p(0)),k(60*n),B(!1),I.play()),w((function(e){return e+1})),[!0,1e3]}return I.loop=!1,console.log(N,i,S),Object(l.jsxs)("div",{className:"Clock",children:[Object(l.jsx)("div",{className:"Clock-wrapper",children:Object(l.jsx)(f.CountdownCircleTimer,{size:"300",isPlaying:S,duration:N,initialRemainingTime:N,colors:[["#004777",.33],["#F7B801",.33],["#A30000",.33]],onComplete:function(e){return L()},children:function(e){var t=e.remainingTime;return Object(l.jsxs)("div",{className:"timer",children:[Object(l.jsx)("div",{className:"value",children:g(t)}),Object(l.jsx)("div",{className:"text",children:"seconds"})]})}},R)}),Object(l.jsxs)("div",{className:"navigation",children:[Object(l.jsx)(d,{title:Object(l.jsx)(m.a,{icon:x.d}),onClick:function(e){B(!1),k(60*n),w((function(e){return e+1}))}}),Object(l.jsx)(d,{title:N===60*n||!1===S?Object(l.jsx)(m.a,{icon:x.b}):Object(l.jsx)(m.a,{icon:x.c}),onClick:function(e){S?(console.log("stop"),B(!1)):(console.log("play"),B(!0),N===60*n&&I.play())}}),Object(l.jsx)(d,{title:"Next",onClick:function(){return L()}})]})]})};n(52),n(53);var k=function(){for(var e=[],t=Object(O.c)((function(e){return e.longBreakInterval})),n=Object(O.c)((function(e){return e.periodCounter})),c=0;c<t;c++)c<n?e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"red"}})):e.push(Object(l.jsx)("div",{className:"Parallelogram",style:{backgroundColor:"white"}}));return Object(l.jsx)("div",{className:"Stack",children:Object(l.jsx)("div",{className:"Stack-wrapper",children:e.map((function(e){return e}))})})};var y=function(){return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Body-wrapper",children:[Object(l.jsx)(N,{}),Object(l.jsx)(k,{})]})})},C=n(33),S=n.n(C);n(72);var B=function(){return Object(l.jsx)("div",{className:"SoundCloudWidget",children:Object(l.jsx)(S.a,{url:"https://soundcloud.com/le-hoang-phuc-646298054/vtv-o-nha-1m-ep05-imma-heartbreaker",width:"350px",height:"125px"})})},E=n(4);n(73);var T=function(){var e=Object(O.b)(),t=Object(O.c)((function(e){return e.period})),n=0,c=0,o=0,a=0;function r(e){switch(e.target.name){case"pomodoro":n=e.target.value;break;case"short":c=e.target.value;break;case"long":o=e.target.value;break;case"interval":a=e.target.value}}return Object(l.jsx)("div",{className:"Body",children:Object(l.jsxs)("div",{className:"Setting-wrapper",children:[Object(l.jsxs)("div",{className:"Time",children:[Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Pomodoro"}),Object(l.jsx)("input",{className:"Input",defaultValue:"50",type:"number",name:"pomodoro",placeholder:"Pomodoro",onChange:r})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Short break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"10",type:"number",name:"short",placeholder:"Short break",onChange:r})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break"}),Object(l.jsx)("input",{className:"Input",defaultValue:"20",type:"number",name:"long",placeholder:"Long Break",onChange:r})]}),Object(l.jsxs)("div",{className:"Module",children:[Object(l.jsx)("p",{children:"Long break interval"}),Object(l.jsx)("input",{className:"Input",defaultValue:"4",type:"number",name:"interval",placeholder:"Long Break Interval",onChange:r})]})]}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{title:"Submit",onClick:function(t){e({type:"SETPERIOD",value:0===n?50:n}),e(function(e){return{type:"SETSHORTBREAK",value:e}}(0===c?10:c)),e(function(e){return{type:"SETLONGBREAK",value:e}}(0===o?20:o)),e(function(e){return{type:"SETLONGBREAKINTERVAL",value:e}}(0===a?4:a)),console.log("Submit")}})}),Object(l.jsx)("div",{children:t})]})})};n(74),n(75);function R(e){var t=e.onChange,n=e.mission;return Object(l.jsx)("div",{className:"Mission",children:Object(l.jsxs)("div",{className:"Mission-wrapper",children:[Object(l.jsx)("div",{children:n.id}),Object(l.jsx)("div",{className:"Mission-content",style:!1===n.completed?{}:{textDecoration:"line-through"},children:n.text}),Object(l.jsx)("button",{className:"CheckButton",onClick:function(e){t&&t(n.id,!n.completed)},children:!1===n.completed?"":Object(l.jsx)(m.a,{icon:x.a,color:"green"})})]})})}R.defaultProps={onChange:null,mission:""};var w=R,I=(n(76),n.p+"static/media/flag.89b3f41f.png");var L=function(){var e=Object(O.c)((function(e){return e.todos})),t=(Object(O.c)((function(e){return e.period})),Object(O.b)());function n(n,c){t({type:"todos/setDone",payload:n}),console.log(n,c),console.log(e)}return Object(l.jsxs)("div",{className:"Body",children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("img",{src:I,alt:"",style:{width:"25px",height:"25px",padding:"0 10px"}}),"Mission"]}),Object(l.jsx)("div",{className:"Missions-wrapper",children:e.map((function(e){return Object(l.jsx)(w,{mission:e,onChange:n})}))})]})};var A=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(u,{}),Object(l.jsxs)(E.c,{children:[Object(l.jsx)(E.a,{path:"/setting",children:Object(l.jsx)(T,{})}),Object(l.jsx)(E.a,{path:"/missions",children:Object(l.jsx)(L,{})}),Object(l.jsx)(E.a,{default:!0,path:"/",children:Object(l.jsx)(y,{})})]})]})}),Object(l.jsx)("div",{className:"col-3",children:Object(l.jsx)(B,{})})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,78)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),a(e),r(e)}))},P=n(34),D=n(6),K=n(35);function V(e){return e.reduce((function(e,t){return Math.max(t.id,e)}),-1)+1}var F={period:50,shortBreak:10,longBreak:20,longBreakInterval:4,periodCounter:0,state:"pomodoro",todos:[{id:0,text:"Learn React",completed:!0},{id:1,text:"Learn Redux",completed:!1,color:"purple"},{id:2,text:"Build something fun!",completed:!1,color:"blue"}],filters:{status:"Active",colors:["red","blue"]}},G=Object(K.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETPERIOD":return Object(D.a)(Object(D.a)({},e),{},{period:t.value});case"SETSHORTBREAK":return Object(D.a)(Object(D.a)({},e),{},{shortBreak:t.value});case"SETLONGBREAK":return Object(D.a)(Object(D.a)({},e),{},{longBreak:t.value});case"SETLONGBREAKINTERVAL":return Object(D.a)(Object(D.a)({},e),{},{longBreakInterval:t.value});case"SETPERIODCOUNTER":return Object(D.a)(Object(D.a)({},e),{},{periodCounter:t.value});case"SETSTATE":return Object(D.a)(Object(D.a)({},e),{},{state:t.value});case"todos/add":return Object(D.a)(Object(D.a)({},e),{},{todos:[].concat(Object(P.a)(e.todos),[{id:V(e.todos),text:t.payload,completed:!1}])});case"todos/setDone":return Object(D.a)(Object(D.a)({},e),{},{todos:e.todos.map((function(e){return e.id!==t.payload?e:Object(D.a)(Object(D.a)({},e),{},{completed:!e.completed})}))});case"todos/delete":return Object(D.a)(Object(D.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.payload}))});default:return e}}));r.a.render(Object(l.jsx)(O.a,{store:G,children:Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(A,{})})}),document.getElementById("root")),M()}},[[77,1,2]]]);
//# sourceMappingURL=main.05c158e2.chunk.js.map