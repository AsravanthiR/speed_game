(this.webpackJsonpspeed_game=this.webpackJsonpspeed_game||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(3),s=c.n(n),a=(c(12),c(4)),o=c(5),i=c(7),l=c(6),d=c(0),u=function(e){return Object(d.jsx)("div",{style:{backgroundColor:e.color,pointerEvents:e.disabled?"auto":"none"},className:"circle ".concat(e.active?"active":""),onClick:e.click})},j=[{id:1,color:"#E94F37"},{id:2,color:"#1C89BF"},{id:3,color:"#297373"},{id:4,color:"#A40E4C"}],m=function(e){return Object(d.jsx)("div",{className:"overLay",children:Object(d.jsxs)("div",{className:"gameOverBox",children:[Object(d.jsx)("h1",{children:"Game Over "}),Object(d.jsxs)("p",{children:["Score was : ",e.score," "]}),Object(d.jsx)("button",{onClick:e.close,children:"X(CLOSE)"})]})})},b=c.p+"static/media/gameOver.0c05c6b4.mp3",h=new Audio(b),p=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},O=function(e){Object(i.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={score:0,current:0,gameOver:!1,pace:1500,rounds:0,gameStart:!1},e.timer=void 0,e.clickHandler=function(t){console.log("You clicked: ",t),e.state.current===t?e.setState({score:e.state.score+10,rounds:0}):e.stopHandler()},e.nextCircle=function(){if(e.state.rounds>=5)e.stopHandler();else{var t;do{t=p(1,4)}while(t===e.state.current);e.setState({current:t,pace:.95*e.state.pace,rounds:e.state.rounds+1}),e.timer=setTimeout(e.nextCircle,e.state.pace),console.log("active circle is ",e.state.current),console.log("Round number: ",e.state.rounds)}},e.startHandler=function(){e.nextCircle(),e.setState({gameStart:!0})},e.stopHandler=function(){h.play(),clearTimeout(e.timer),e.setState({gameOver:!0,current:0,gameStart:!1})},e.closeHandler=function(){e.setState({gameOver:!1,score:0,pace:1500,rounds:0})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{children:[this.state.gameOver&&Object(d.jsx)(m,{score:this.state.score,close:this.closeHandler}),Object(d.jsx)("h1",{children:"Speed Game"}),Object(d.jsxs)("p",{children:["Your Score: ",this.state.score]}),Object(d.jsx)("div",{className:"circles",children:j.map((function(t){return Object(d.jsx)(u,{color:t.color,id:t.id,click:function(){return e.clickHandler(t.id)},active:e.state.current===t.id,disabled:e.state.gameStart},t.id)}))}),Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{disabled:this.state.gameStart,onClick:this.startHandler,children:"Start Game"}),Object(d.jsx)("button",{onClick:this.stopHandler,children:" Stop Game "})]})]})}}]),c}(r.Component),v=O;s.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.a7a7cff5.chunk.js.map