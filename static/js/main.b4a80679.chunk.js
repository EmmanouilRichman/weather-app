(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),i=n(29),s=n.n(i),o=(n(43),n(44),n(37)),j=(n(45),n(12)),b=n(2);function d(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Welcome to my Weather App"}),Object(c.jsx)("p",{children:"This simple app allows you too enter a city or zipcode and find the 3 day forecast for that area."})]})}var u=n(16),l=n.n(u),h=n(30),O=n(8),x=n(31),f=n.n(x);n(63);function p(e){var t=Object(a.useState)(""),n=Object(O.a)(t,2),r=n[0],i=n[1],s=Object(a.useState)(""),o=Object(O.a)(s,2),j=o[0],b=o[1],d=Object(a.useState)(""),u=Object(O.a)(d,2),x=u[0],p=u[1],v=Object(a.useState)([]),m=Object(O.a)(v,2),y=m[0],w=m[1],S="https://api.weatherapi.com/v1/forecast.json?key=".concat("d7908f4f11ef423aa9854244202511","&q=").concat(e.location.props.location,"&days=3");return Object(a.useEffect)((function(){(function(){var e=Object(h.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(S);case 2:t=e.sent,i(t.data.location.name),b(t.data.location.region),p(t.data.location.country),w(t.data.forecast.forecastday);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[S]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:"header",children:"Three Day forecast for..."}),Object(c.jsxs)("h3",{children:[r,", ",j,", ",x]}),Object(c.jsx)("div",{className:"Row",children:y.map((function(e){return Object(c.jsxs)("div",{className:"Col",children:[Object(c.jsx)("h3",{children:e.date}),Object(c.jsx)("img",{src:e.day.condition.icon,alt:"conditions"}),Object(c.jsxs)("p",{children:[e.day.avgtemp_f,Object(c.jsx)("span",{children:"\u2109"})]}),Object(c.jsx)("p",{children:e.day.condition.text})]})}))})]})}n(64);function v(){var e=Object(a.useState)(""),t=Object(O.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),s=Object(O.a)(i,2),o=s[0],j=s[1];return!1===o?Object(c.jsxs)("div",{className:"formdiv",children:[Object(c.jsx)("h1",{children:"Please Enter Your Desired City/Zip"}),Object(c.jsxs)("form",{onSubmit:function(){j(!0)},children:[Object(c.jsx)("label",{children:"City/Zip: "}),Object(c.jsx)("input",{className:"fields",type:"text",value:n,onChange:function(e){return r(e.target.value)},required:!0}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"button",type:"submit",value:"Submit",children:"Submit"})]})]}):Object(c.jsx)("div",{children:Object(c.jsx)(b.a,{to:{pathname:"/weather",props:{location:n}}})})}var m=n(32),y=n(33);function w(){var e=Object(m.a)(["\n    text-decoration: none;\n    visited:none;\n    active:none;\n    color: white;\n    :hover {\n\t\tcolor: red;\n\t\tcursor: pointer;\n\t}\n    }\n\n"]);return w=function(){return e},e}var S=Object(y.a)(j.b)(w());function g(){return Object(c.jsx)("div",{children:Object(c.jsxs)("ul",{className:"nav",children:[Object(c.jsx)("li",{children:Object(c.jsx)(S,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(S,{to:"/getinfo",children:"Enter Info"})})]})})}var N=function(){return Object(c.jsx)("div",{children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(g,{}),Object(c.jsx)(b.b,{path:"/",exact:!0,children:Object(c.jsx)(d,{})}),Object(c.jsx)(b.b,{path:"/weather",render:function(e){return Object(c.jsx)(p,Object(o.a)({},e))}}),Object(c.jsx)(b.b,{path:"/getinfo",children:Object(c.jsx)(v,{})})]})})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.b4a80679.chunk.js.map