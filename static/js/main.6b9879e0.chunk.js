(window.webpackJsonpexample=window.webpackJsonpexample||[]).push([[0],{237:function(e,a,t){e.exports=t(428)},242:function(e,a,t){},428:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(15),l=t.n(o),c=(t(242),t(196)),i=t(477),m=t(471),s=t(465),u=t(472),p=t(473),b=t(199),f=t(19),d=t(36),g=t(185),h=t.n(g),y=t(197),O=t(482),E=t(468),v=t(470),j=Object(s.a)((function(e){return{menuButton:{marginRight:e.spacing(2)}}}));var w=Object(d.f)((function(e){var a=Object(n.useState)(null),t=Object(f.a)(a,2),o=t[0],l=t[1],c=j(),i=function(a){return function(){a&&e.history.push(a),l(null)}};return r.a.createElement(E.a,{edge:"start",className:c.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(h.a,{onClick:function(e){l(e.currentTarget)}}),r.a.createElement(y.a,{anchorEl:o,keepMounted:!0,open:Boolean(o),onClose:i()},r.a.createElement(O.a,{onClick:i("/")},"Projection"),r.a.createElement(O.a,{onClick:i("/safe-group-size")},"Safe Group Size"),r.a.createElement(O.a,null,r.a.createElement(v.a,{target:"_blank",href:"https://www.sleepphones.com/Coronavirus-predictions-mortality-rate"},"Dr. Wei-Shin Lai"))))})),D=Object(s.a)((function(e){return{title:{flexGrow:1}}}));var k=function(e){var a=D();return r.a.createElement(m.a,{maxWidth:!1,disableGutters:!0},r.a.createElement(u.a,{position:"static",elevation:0},r.a.createElement(p.a,null,r.a.createElement(w,null),r.a.createElement(b.a,{variant:"h6",className:a.title},"Coronavirus Epidemiology Model"))),e.children)},N=t(11),P=t(429),x=t(475),H=t(478),C=t(480),F=t(481),I=t(476),T=t(474),z=t(479),S=Object(s.a)((function(e){return{label:{fontWeight:500,padding:e.spacing(2,0,1),textAlign:"left","&:first-child":{padding:e.spacing(0,0,1)}},field:{background:"#fff"}}}));var A=function(e){var a=S(),t=e.label,o=e.value,l=e.changeHandler;return r.a.createElement(n.Fragment,null,r.a.createElement(b.a,{variant:"body1",className:a.label},t),r.a.createElement(z.a,{type:"number",defaultValue:o,onChange:l,InputLabelProps:{shrink:!0},className:a.field,variant:"outlined",fullWidth:!0}))},M=t(53),W=t(23);var q=function(e){var a=e.data,t=Object(M.a)();return r.a.createElement(W.e,null,r.a.createElement(W.d,{data:a},r.a.createElement(W.a,{strokeDasharray:"3 3"}),r.a.createElement(W.g,{dataKey:"name"}),r.a.createElement(W.h,null),r.a.createElement(W.f,{labelFormatter:function(e){return"Day ".concat(e)}}),r.a.createElement(W.b,null),r.a.createElement(W.c,{type:"monotone",dataKey:"numberOfCases",name:"Number of Cases",stroke:t.palette.primary.main,activeDot:{r:8}}),r.a.createElement(W.c,{type:"monotone",dataKey:"numberOfDeaths",name:"Number of Deaths",stroke:t.palette.text.secondary}),r.a.createElement(W.c,{type:"monotone",dataKey:"numberHospitalized",name:"Number Hospitalized",stroke:t.palette.tertiary.main}),r.a.createElement(W.c,{type:"monotone",dataKey:"numberInHospitalAtTheTime",name:"Number in hospital at the time",stroke:t.palette.quaternary.main})))},G=t(4),B=t(94);function K(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var R=Object(s.a)((function(e){var a;return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},chart:(a={},Object(N.a)(a,e.breakpoints.up("sm"),{height:e.spacing(60),width:e.spacing(120),margin:e.spacing(2,4,0,0)}),Object(N.a)(a,e.breakpoints.down("sm"),{height:e.spacing(35),width:e.spacing(35)}),a),radio:{color:e.palette.quinary.main},control:{background:e.palette.senary.main,margin:e.spacing(2)}}}));var L=function(e){var a=R(),t=Object(n.useState)({range:84,numberOfDaysPerDoubling:7,numberOfDaysFromInfectionToDeath:20,mortalityRate:.015,numberOfDaysFromInfectionToHospitalization:12,hopistalizationRate:.2,numberOfDaysFromInjectionToOutOfHospital:40}),o=Object(f.a)(t,2),l=o[0],c=o[1],i=new B.Model(l),s=Array.from(new Array(l.range),(function(e,a){return a+1})).filter((function(e){return 1===e||e%7===0})).map((function(e){var a=i.ofDay(e);return{name:e,numberOfCases:a.numberOfCases.toFixed(0),numberOfDeaths:a.numberOfDeaths.toFixed(0),numberHospitalized:a.numberHospitalized.toFixed(0),numberInHospitalAtTheTime:a.numberInHospitalAtTheTime.toFixed(0)}})),u=function(e){return function(a){c(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?K(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},l,Object(N.a)({},e,Number(a.target.value))))}};return r.a.createElement(m.a,{maxWidth:!1,disableGutters:!0},r.a.createElement(x.a,{container:!0,spacing:0},r.a.createElement(x.a,{item:!0,sm:3},r.a.createElement(P.a,{elevation:0,className:Object(G.a)(a.paper,a.control),square:!0},r.a.createElement(A,{label:"Number of days per doubling",value:l.numberOfDaysPerDoubling,changeHandler:u("numberOfDaysPerDoubling")}),r.a.createElement(A,{label:"Number of days from infection to death",value:l.numberOfDaysFromInfectionToDeath,changeHandler:u("numberOfDaysFromInfectionToDeath")}),r.a.createElement(A,{label:"Mortality rate",value:l.mortalityRate,changeHandler:u("mortalityRate")}),r.a.createElement(A,{label:"Number of days from infection to hospitalization",value:l.numberOfDaysFromInfectionToHospitalization,changeHandler:u("numberOfDaysFromInfectionToHospitalization")}),r.a.createElement(A,{label:"Number of days from infection to out of hospital (average death or recovery)",value:l.numberOfDaysFromInjectionToOutOfHospital,changeHandler:u("numberOfDaysFromInjectionToOutOfHospital")}))),r.a.createElement(x.a,{item:!0,sm:9},r.a.createElement(P.a,{elevation:0,className:Object(G.a)(a.paper,a.chart)},r.a.createElement(H.a,null,r.a.createElement(T.a,null,r.a.createElement(F.a,{value:l.range,onChange:u("range"),row:!0},r.a.createElement(I.a,{value:7,control:r.a.createElement(C.a,{color:"default",classes:{checked:a.radio}}),label:"1w",labelPlacement:"end"}),r.a.createElement(I.a,{value:28,control:r.a.createElement(C.a,{color:"default",classes:{checked:a.radio}}),label:"1m",labelPlacement:"end"}),r.a.createElement(I.a,{value:84,control:r.a.createElement(C.a,{color:"default",classes:{checked:a.radio}}),label:"3m",labelPlacement:"end"}),r.a.createElement(I.a,{value:168,control:r.a.createElement(C.a,{color:"default",classes:{checked:a.radio}}),label:"6m",labelPlacement:"end"})))),r.a.createElement(q,{data:s})))))};function J(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var V=Object(s.a)((function(e){var a;return{paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},item:{width:"100%"},dashboard:{margin:e.spacing(2)},figure:(a={},Object(N.a)(a,e.breakpoints.down("sm"),{fontSize:"".concat(e.spacing(12),"px"),lineHeight:"".concat(e.spacing(14),"px")}),Object(N.a)(a,e.breakpoints.up("sm"),{fontSize:"".concat(e.spacing(36),"px"),lineHeight:"".concat(e.spacing(42),"px")}),a),subtitle:{color:e.palette.quinary.main},control:{background:e.palette.senary.main,margin:e.spacing(2)}}}));var $=function(e){var a=V(),t=Object(n.useState)({populationInMetropolitanArea:3e5,estimatedNumberOfCases:35}),o=Object(f.a)(t,2),l=o[0],c=o[1],i=function(e){return function(a){c(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?J(t,!0).forEach((function(a){Object(N.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},l,Object(N.a)({},e,Number(a.target.value))))}};return r.a.createElement(m.a,{maxWidth:!1,disableGutters:!0},r.a.createElement(x.a,{container:!0,spacing:0},r.a.createElement(x.a,{item:!0,sm:3,className:a.item},r.a.createElement(P.a,{elevation:0,className:Object(G.a)(a.paper,a.control),square:!0},r.a.createElement(A,{label:"Population in Metropolitan Area",value:l.populationInMetropolitanArea,changeHandler:i("populationInMetropolitanArea")}),r.a.createElement(A,{label:"Estimated Number of Cases",value:l.estimatedNumberOfCases,changeHandler:i("estimatedNumberOfCases")}))),r.a.createElement(x.a,{item:!0,sm:9,className:a.item},r.a.createElement(P.a,{elevation:0,className:a.paper},r.a.createElement(H.a,{className:a.dashboard},r.a.createElement(b.a,{variant:"body1"},"The Largest Safe Group Size"),r.a.createElement(b.a,{className:a.figure,color:"primary"},B.SafeGroupSize.calculate(l).toFixed(0)),r.a.createElement(b.a,{variant:"body1",className:a.subtitle},"* 95% chance you will not encounter someone with coronavirus."))))))},_=t(122),Q=Object(c.a)({palette:{primary:{main:"#597B80"},secondary:{main:"#364A4D"},tertiary:{main:"#808080"},quaternary:{main:"#CCCCC0"},quinary:{main:"#F85353"},senary:{main:"#ECEFF1"},text:{secondary:"#333333"}}});var U=function(){return r.a.createElement(i.a,{theme:Q},r.a.createElement(_.a,{basename:"coronavirus-epidemiology-model-chart"},r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/safe-group-size"},r.a.createElement(k,null,r.a.createElement($,null))),r.a.createElement(d.a,{path:"/"},r.a.createElement(k,null,r.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[237,1,2]]]);
//# sourceMappingURL=main.6b9879e0.chunk.js.map