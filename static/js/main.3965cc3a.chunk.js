(this["webpackJsonpmy-app2"]=this["webpackJsonpmy-app2"]||[]).push([[0],{9:function(e,t,s){"use strict";s.r(t);var n=s(4),c=s(5),i=s(1),a=s(8),r=s(7),l=s(0),d=s(2),j=s.n(d),b=s(6),o=s.n(b);s(15),s(16);var h=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={trackTimes:["11:00","14:00","17:00"],basketballTimes:["12:00","16:00"],fitnessTimes:["13:00","18:00"],computerScore:0,results:["n_nothing","nothing"],currentPage:"game",movesIsDisabled:["Rock","Paper","Scissors","false"],username:"",password:"",nameinput:"",passinput:""},c.gamePage=c.gamePage.bind(Object(i.a)(c)),c.loginPage=c.loginPage.bind(Object(i.a)(c)),c.login=c.login.bind(Object(i.a)(c)),c.storeLogin=c.storeLogin.bind(Object(i.a)(c)),c.resetGame=c.resetGame.bind(Object(i.a)(c)),c.registerPage=c.registerPage.bind(Object(i.a)(c)),c.handleChange=c.handleChange.bind(Object(i.a)(c)),c.handleSubmit=c.handleSubmit.bind(Object(i.a)(c)),c}return Object(c.a)(s,[{key:"render",value:function(){return Object(l.jsx)("div",{class:"d-flex justify-content-center",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"d-flex justify-content-center mt-4",children:Object(l.jsx)("h2",{class:"text-primary",children:"CIT Health & Fitness!"})}),Object(l.jsx)("div",{class:"d-flex justify-content-center mt-2",children:Object(l.jsx)("h4",{class:"text-primary",children:"Home Page"})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"d-flex justify-content-center mt-4",children:this.timetable(this.state)}),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{class:"d-flex justify-content-center mt-4",children:"You played "+this.state.results[0].split("_")[1]+". Computer played "+this.state.results[1]+"."}),Object(l.jsx)("div",{class:"d-flex justify-content-center mt-2",children:"Computer score: "+this.state.computerScore}),Object(l.jsx)("div",{class:"d-flex justify-content-center mt-2",children:"Player score: "+this.state.playerScore}),this.checkWinner()]})]}),Object(l.jsxs)("div",{class:"d-flex justify-content-center mt-4",children:[Object(l.jsx)("button",{class:"btn btn-outline-dark",onClick:this.registerPage,children:"Register"}),Object(l.jsx)("button",{class:"btn btn-outline-dark",onClick:this.loginPage,children:"Login"}),Object(l.jsx)("button",{class:"btn btn-primary",onClick:this.resetGame,children:"Reset Game"})]})]})})}}]),s}(j.a.Component);o.a.render(Object(l.jsx)(j.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.3965cc3a.chunk.js.map