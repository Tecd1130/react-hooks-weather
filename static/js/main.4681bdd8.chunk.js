(this["webpackJsonpreack-hooks-weather"]=this["webpackJsonpreack-hooks-weather"]||[]).push([[0],{13:function(e,n,t){e.exports=t(20)},20:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(8),i=t.n(c),u=t(3),o=t(1),l=t(2);function m(){var e=Object(o.a)(["\n  &:link, :visited, :hover, :active {\n    color: blue;\n  }\n"]);return m=function(){return e},e}function f(){var e=Object(o.a)(["\n"]);return f=function(){return e},e}function p(){var e=Object(o.a)(["\n  text-align: left;\n"]);return p=function(){return e},e}function d(){var e=Object(o.a)(["\n  height: 25px;\n  width: 150px;\n  margin-bottom: 10px;\n"]);return d=function(){return e},e}function s(){var e=Object(o.a)(["\n  height: 25px;\n  width: 150px;\n  margin-bottom: 10px;\n"]);return s=function(){return e},e}function g(){var e=Object(o.a)(["\n  padding: 10px;\n  width: 200px;\n  text-align: center;\n  float: left;\n"]);return g=function(){return e},e}var v=t(9).areas,h=l.a.div(g()),b=l.a.select(s()),x=l.a.select(d()),j=l.a.ul(p()),E=l.a.li(f()),O=l.a.a(m()),k=function(e){var n=Object(a.useState)(""),t=Object(u.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)(""),l=Object(u.a)(o,2),m=l[0],f=l[1],p=v.find((function(e){return e.name===c})),d=p?p.prefectures:[],s=d.find((function(e){return e.name===m})),g=s?s.cities:[];return r.a.createElement(h,null,r.a.createElement(b,{defaultValue:c,onChange:function(e){i(e.target.value)}},r.a.createElement("option",{value:""},"--\u5730\u57df\u3092\u9078\u629e--"),v.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement(x,{defaultValue:m,onChange:function(e){f(e.target.value)}},r.a.createElement("option",{value:""},"--\u770c\u3092\u9078\u629e--"),d.map((function(e){return r.a.createElement("option",{key:e.name,value:e.name},e.name)}))),r.a.createElement(j,null,g.map((function(n){return r.a.createElement(E,{key:n.code},r.a.createElement(O,{href:"#",onClick:function(){return e.onCityChange(n.code)}},n.name))}))))};function y(){var e=Object(o.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n  color: red;\n"]);return y=function(){return e},e}function w(){var e=Object(o.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n"]);return w=function(){return e},e}function C(){var e=Object(o.a)(["\n  font-size: 1.8em;\n  line-height: 1.9em;\n  color: blue;\n"]);return C=function(){return e},e}function z(){var e=Object(o.a)(["\n  padding: 2px;\n"]);return z=function(){return e},e}function S(){var e=Object(o.a)(["\n  height: 50px;\n  margin: 2px auto;\n"]);return S=function(){return e},e}function T(){var e=Object(o.a)(["\n  line-height: 1.2em;\n  margin: 2px auto;\n"]);return T=function(){return e},e}function J(){var e=Object(o.a)(["\n  line-height: 1.2em;\n  margin-top: 2px;\n"]);return J=function(){return e},e}function L(){var e=Object(o.a)(["\n  font-size: 1.2em;\n  line-height: 1.5em;\n  margin-top: 2px;\n  background-color: royalblue; \n  color: #fff;\n"]);return L=function(){return e},e}function A(){var e=Object(o.a)(["\n  width: 150px;\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 3px;\n  font-size: 1em;\n  border: solid 1px lightsteelblue;\n  text-align: center;\n  float: left;\n"]);return A=function(){return e},e}var U=l.a.div(A()),V=l.a.div(L()),B=l.a.div(J()),F=l.a.div(T()),I=l.a.img(S()),M=l.a.div(z()),N=l.a.span(C()),q=l.a.span(w()),D=l.a.span(y()),G=function(e){return r.a.createElement(U,null,r.a.createElement(V,null,e.dateLabel),r.a.createElement(B,null,e.telop),r.a.createElement(F,null,e.date),r.a.createElement(I,{src:e.imageUrl,alt:e.imageAlt}),r.a.createElement(M,null,r.a.createElement(N,null,e.minTemperature||"-"),r.a.createElement(q,null,"/"),r.a.createElement(D,null,e.maxTemperature||"-")))};function H(){var e=Object(o.a)(["\n  padding: 3px;\n  height: 300px;\n  overflow: auto;\n"]);return H=function(){return e},e}function K(){var e=Object(o.a)(["\n  font-size: 1.2em;\n  line-height: 1.5em;\n  margin-top: 2px;\n  background-color: royalblue; \n  color: #fff;\n"]);return K=function(){return e},e}function P(){var e=Object(o.a)(["\n  width: 400px;\n  margin-top: 10px;\n  margin-right: 10px;\n  padding: 3px;\n  font-size: 1em;\n  border: solid 1px lightsteelblue;\n  text-align: center;\n  float: left;\n"]);return P=function(){return e},e}var Q=l.a.div(P()),R=l.a.div(K()),W=l.a.div(H()),X=function(e){return r.a.createElement(Q,null,r.a.createElement(R,null,e.title),r.a.createElement(W,null,e.text))},Y=function(e){var n=Object(a.useState)([]),t=Object(u.a)(n,2),c=t[0],i=t[1],o=Object(a.useState)(),l=Object(u.a)(o,2),m=l[0],f=l[1];return Object(a.useEffect)((function(){if(e.cityCode){var n=(t=e.cityCode,"".concat("http://weather.livedoor.com","/forecast/webservice/json/v1?city=").concat(t));fetch(n).then((function(e){return e.json()})).then((function(e){var n=function(e){return e.forecasts.map((function(e){return{dateLabel:e.dateLabel,telop:e.telop,date:e.date,minTemperature:e.temperature.min?e.temperature.min.celsius:null,maxTemperature:e.temperature.max?e.temperature.max.celsius:null,imageUrl:e.image.url,imageAlt:e.image.title}}))}(e);i(n);var t=function(e){return{title:e.title,text:e.description.text}}(e);f(t)})).catch((function(e){console.error(e)}))}var t}),[e.cityCode]),r.a.createElement(r.a.Fragment,null,m&&r.a.createElement(X,m),c.map((function(e){return r.a.createElement(G,Object.assign({key:e.date},e))})))};var Z=function(){var e=Object(a.useState)(""),n=Object(u.a)(e,2),t=n[0],c=n[1];return r.a.createElement("div",null,r.a.createElement(k,{onCityChange:function(e){c(e)}}),r.a.createElement(Y,{cityCode:t}))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("app"))},9:function(e){e.exports=JSON.parse('{"areas":[{"name":"\u95a2\u6771","prefectures":[{"name":"\u6771\u4eac\u90fd","cities":[{"code":"130010","name":"\u6771\u4eac"},{"code":"130020","name":"\u5927\u5cf6"},{"code":"130030","name":"\u516b\u4e08\u5cf6"},{"code":"130040","name":"\u7236\u5cf6"}]},{"name":"\u795e\u5948\u5ddd\u770c","cities":[{"code":"140010","name":"\u6a2a\u6d5c"},{"code":"140020","name":"\u5c0f\u7530\u539f"}]}]},{"name":"\u6771\u6d77","prefectures":[{"name":"\u9759\u5ca1\u770c","cities":[{"code":"220010","name":"\u9759\u5ca1"},{"code":"220020","name":"\u7db2\u4ee3"},{"code":"220030","name":"\u4e09\u5cf6"},{"code":"220040","name":"\u6d5c\u677e"}]},{"name":"\u611b\u77e5\u770c","cities":[{"code":"230010","name":"\u540d\u53e4\u5c4b"},{"code":"230020","name":"\u8c4a\u6a4b"}]}]}]}')}},[[13,1,2]]]);
//# sourceMappingURL=main.4681bdd8.chunk.js.map