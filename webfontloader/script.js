!function(){function t(t,e,i){return t.call.apply(t.bind,arguments)}function e(t,e,i){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,n),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function i(n,o,s){return i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:e,i.apply(null,arguments)}function n(t,e){this.C=t,this.q=e||t,this.D=this.q.document}function o(t,e,i){t=t.D.getElementsByTagName(e)[0],t||(t=document.documentElement),t&&t.lastChild&&t.insertBefore(i,t.lastChild)}function s(t,e,i){e=e||[],i=i||[];for(var n=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var s=!1,a=0;a<n.length;a+=1)if(e[o]===n[a]){s=!0;break}s||n.push(e[o])}for(e=[],o=0;o<n.length;o+=1){for(s=!1,a=0;a<i.length;a+=1)if(n[o]===i[a]){s=!0;break}s||e.push(n[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function a(t,e){for(var i=t.className.split(/\s+/),n=0,o=i.length;o>n;n++)if(i[n]==e)return!0;return!1}function r(t){if("string"==typeof t.ca)return t.ca;var e=t.q.location.protocol;return"about:"==e&&(e=t.C.location.protocol),"https:"==e?"https:":"http:"}function h(t,e){var i=t.createElement("link",{rel:"stylesheet",href:e,media:"all"}),n=!1;i.onload=function(){n||(n=!0)},i.onerror=function(){n||(n=!0)},o(t,"head",i)}function l(t,e,i,n){var o=t.D.getElementsByTagName("head")[0];if(o){var s=t.createElement("script",{src:e}),a=!1;return s.onload=s.onreadystatechange=function(){a||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(a=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&o.removeChild(s))},o.appendChild(s),setTimeout(function(){a||(a=!0,i&&i(Error("Script load timeout")))},n||5e3),s}return null}function f(t){this.ba=t||"-"}function u(t,e){this.U=t,this.M=4,this.G="n";var i=(e||"n4").match(/^([nio])([1-9])$/i);i&&(this.G=i[1],this.M=parseInt(i[2],10))}function c(t){return t.G+t.M}function p(t){var e=4,i="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(i=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),i+e}function d(t,e){this.a=t,this.j=t.q.document.documentElement,this.I=e,this.f="wf",this.e=new f("-"),this.Y=!1!==e.events,this.v=!1!==e.classes}function g(t){t.v&&s(t.j,[t.e.d(t.f,"loading")]),v(t,"loading")}function m(t){if(t.v){var e=a(t.j,t.e.d(t.f,"active")),i=[],n=[t.e.d(t.f,"loading")];e||i.push(t.e.d(t.f,"inactive")),s(t.j,i,n)}v(t,"inactive")}function v(t,e,i){t.Y&&t.I[e]&&(i?t.I[e](i.getName(),c(i)):t.I[e]())}function y(){this.u={}}function w(t,e,i){var n,o=[];for(n in e)if(e.hasOwnProperty(n)){var s=t.u[n];s&&o.push(s(e[n],i))}return o}function b(t,e){this.a=t,this.A=e,this.g=this.a.createElement("span",{"aria-hidden":"true"},this.A)}function x(t){o(t.a,"body",t.g)}function k(t){var e;e=[];for(var i=t.U.split(/,\s*/),n=0;n<i.length;n++){var o=i[n].replace(/['"]/g,"");e.push(-1==o.indexOf(" ")?o:"'"+o+"'")}return e=e.join(","),i="normal","o"===t.G?i="oblique":"i"===t.G&&(i="italic"),"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+e+";"+("font-style:"+i+";font-weight:"+(t.M+"00")+";")}function N(t,e,i,n,o,s,a){this.N=t,this.aa=e,this.a=i,this.h=n,this.A=a||"BESbswy",this.p={},this.L=o||3e3,this.S=s||null,this.w=this.o=this.m=null,this.m=new b(this.a,this.A),this.o=new b(this.a,this.A),this.w=new b(this.a,this.A),t=new u("serif",c(this.h)),t=k(t),this.m.g.style.cssText=t,t=new u("sans-serif",c(this.h)),t=k(t),this.o.g.style.cssText=t,t=new u("monospace",c(this.h)),t=k(t),this.w.g.style.cssText=t,x(this.m),x(this.o),x(this.w),this.p.serif=this.m.g.offsetWidth,this.p["sans-serif"]=this.o.g.offsetWidth,this.p.monospace=this.w.g.offsetWidth}function _(){if(null===K){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);K=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return K}function j(t,e,i){for(var n in G)if(G.hasOwnProperty(n)&&e===t.p[G[n]]&&i===t.p[G[n]])return!0;return!1}function T(t){var e,i=t.m.g.offsetWidth,n=t.o.g.offsetWidth;(e=i===t.p.serif&&n===t.p["sans-serif"])||(e=_()&&j(t,i,n)),e?$()-t.da>=t.L?_()&&j(t,i,n)&&(null===t.S||t.S.hasOwnProperty(t.h.getName()))?S(t,t.N):S(t,t.aa):C(t):S(t,t.N)}function C(t){setTimeout(i(function(){T(this)},t),50)}function S(t,e){t.m.remove(),t.o.remove(),t.w.remove(),e(t.h)}function A(t,e,i){this.a=t,this.s=e,this.J=0,this.W=this.R=!1,this.L=i}function E(t){0==--t.J&&t.R&&(t.W?(t=t.s,t.v&&s(t.j,[t.e.d(t.f,"active")],[t.e.d(t.f,"loading"),t.e.d(t.f,"inactive")]),v(t,"active")):m(t.s))}function W(t){this.C=t,this.t=new y,this.T=0,this.O=this.P=!0}function I(t,e,n,o,a){var r=0==--t.T;(t.O||t.P)&&setTimeout(function(){var t=a||null,h=o||null||{};if(0===n.length&&r)m(e.s);else{e.J+=n.length,r&&(e.R=r);for(var l=0;l<n.length;l++){var f=n[l],u=h[f.getName()],p=e.s,d=f;p.v&&s(p.j,[p.e.d(p.f,d.getName(),c(d).toString(),"loading")]),v(p,"fontloading",d),p=null,p=new N(i(e.Z,e),i(e.$,e),e.a,f,e.L,t,u),p.start()}}},0)}function B(t,e,i){var n=[],o=i.timeout;g(e);var n=w(t.t,i,t.a),s=new A(t.a,e,o);for(t.T=n.length,e=0,i=n.length;i>e;e++)n[e].load(function(e,i,n){I(t,s,e,i,n)})}function F(t,e,i){this.H=t?t:e+M,this.k=[],this.K=[],this.X=i||""}function O(t){this.k=t,this.V=[],this.F={}}function q(t,e){this.a=t,this.c=e}function L(t,e){this.a=t,this.c=e,this.Q=[]}function D(t,e){this.a=t,this.c=e}function P(t,e){this.a=t,this.c=e}function H(t,e){this.a=t,this.c=e}var $=Date.now||function(){return+new Date};n.prototype.createElement=function(t,e,i){if(t=this.D.createElement(t),e)for(var n in e)e.hasOwnProperty(n)&&("style"==n?t.style.cssText=e[n]:t.setAttribute(n,e[n]));return i&&t.appendChild(this.D.createTextNode(i)),t},f.prototype.d=function(t){for(var e=[],i=0;i<arguments.length;i++)e.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.ba)},u.prototype.getName=function(){return this.U},b.prototype.remove=function(){var t=this.g;t.parentNode&&t.parentNode.removeChild(t)};var G={ga:"serif",fa:"sans-serif",ea:"monospace"},K=null;N.prototype.start=function(){this.da=$();var t=new u(this.h.getName()+",serif",c(this.h)),t=k(t);this.m.g.style.cssText=t,t=new u(this.h.getName()+",sans-serif",c(this.h)),t=k(t),this.o.g.style.cssText=t,T(this)},A.prototype.Z=function(t){var e=this.s;e.v&&s(e.j,[e.e.d(e.f,t.getName(),c(t).toString(),"active")],[e.e.d(e.f,t.getName(),c(t).toString(),"loading"),e.e.d(e.f,t.getName(),c(t).toString(),"inactive")]),v(e,"fontactive",t),this.W=!0,E(this)},A.prototype.$=function(t){var e=this.s;if(e.v){var i=a(e.j,e.e.d(e.f,t.getName(),c(t).toString(),"active")),n=[],o=[e.e.d(e.f,t.getName(),c(t).toString(),"loading")];i||n.push(e.e.d(e.f,t.getName(),c(t).toString(),"inactive")),s(e.j,n,o)}v(e,"fontinactive",t),E(this)},W.prototype.load=function(t){this.a=new n(this.C,t.context||this.C),this.P=!1!==t.events,this.O=!1!==t.classes,B(this,new d(this.a,t),t)};var M="//fonts.googleapis.com/css";F.prototype.d=function(){if(0==this.k.length)throw Error("No fonts to load!");if(-1!=this.H.indexOf("kit="))return this.H;for(var t=this.k.length,e=[],i=0;t>i;i++)e.push(this.k[i].replace(/ /g,"+"));return t=this.H+"?family="+e.join("%7C"),0<this.K.length&&(t+="&subset="+this.K.join(",")),0<this.X.length&&(t+="&text="+encodeURIComponent(this.X)),t};var R={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},U={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},J={i:"i",italic:"i",n:"n",normal:"n"},Q=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;O.prototype.parse=function(){for(var t=this.k.length,e=0;t>e;e++){var i=this.k[e].split(":"),n=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var s,a=i[1];if(s=[],a)for(var a=a.split(","),r=a.length,h=0;r>h;h++){var l;if(l=a[h],l.match(/^[\w-]+$/))if(l=Q.exec(l.toLowerCase()),null==l)l="";else{var f;if(f=l[1],null==f||""==f)f="4";else{var c=U[f];f=c?c:isNaN(f)?"4":f.substr(0,1)}l=l[2],l=[null==l||""==l?"n":J[l],f].join("")}else l="";l&&s.push(l)}0<s.length&&(o=s),3==i.length&&(i=i[2],s=[],i=i?i.split(","):s,0<i.length&&(i=R[i[0]])&&(this.F[n]=i))}for(this.F[n]||(i=R[n])&&(this.F[n]=i),i=0;i<o.length;i+=1)this.V.push(new u(n,o[i]))}};var V={Arimo:!0,Cousine:!0,Tinos:!0};q.prototype.load=function(t){for(var e=this.a,i=new F(this.c.api,r(e),this.c.text),n=this.c.families,o=n.length,s=0;o>s;s++){var a=n[s].split(":");3==a.length&&i.K.push(a.pop());var l="";2==a.length&&""!=a[1]&&(l=":"),i.k.push(a.join(l))}n=new O(n),n.parse(),h(e,i.d()),t(n.V,n.F,V)},L.prototype.B=function(t){var e=this.a;return r(this.a)+(this.c.api||"//f.fontdeck.com/s/css/js/")+(e.q.location.hostname||e.C.location.hostname)+"/"+t+".js"},L.prototype.load=function(t){var e=this.c.id,i=this.a.q,n=this;e?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[e]=function(e,i){for(var o=0,s=i.fonts.length;s>o;++o){var a=i.fonts[o];n.Q.push(new u(a.name,p("font-weight:"+a.weight+";font-style:"+a.style)))}t(n.Q)},l(this.a,this.B(e),function(e){e&&t([])})):t([])},D.prototype.B=function(t){return(this.c.api||"https://use.typekit.net")+"/"+t+".js"},D.prototype.load=function(t){var e=this.c.id,i=this.a.q;e?l(this.a,this.B(e),function(e){if(e)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){e=i.Typekit.config.fn;for(var n=[],o=0;o<e.length;o+=2)for(var s=e[o],a=e[o+1],r=0;r<a.length;r++)n.push(new u(s,a[r]));try{i.Typekit.load({events:!1,classes:!1})}catch(h){}t(n)}},2e3):t([])},P.prototype.B=function(t,e){var i=r(this.a),n=(this.c.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return i+"//"+n+"/"+t+".js"+(e?"?v="+e:"")},P.prototype.load=function(t){var e=this.c.projectId,i=this.c.version;if(e){var n=this.a.q;l(this.a,this.B(e,i),function(i){if(i)t([]);else if(n["__mti_fntLst"+e]){i=n["__mti_fntLst"+e]();var o=[];if(i)for(var s=0;s<i.length;s++)o.push(new u(i[s].fontfamily));t(o)}else t([])}).id="__MonotypeAPIScript__"+e}else t([])},H.prototype.load=function(t){var e,i,n=this.c.urls||[],o=this.c.families||[],s=this.c.testStrings||{};for(e=0,i=n.length;i>e;e++)h(this.a,n[e]);for(n=[],e=0,i=o.length;i>e;e++){var a=o[e].split(":");if(a[1])for(var r=a[1].split(","),l=0;l<r.length;l+=1)n.push(new u(a[0],r[l]));else n.push(new u(a[0]))}t(n,s)};var X=new W(window);X.t.u.custom=function(t,e){return new H(e,t)},X.t.u.fontdeck=function(t,e){return new L(e,t)},X.t.u.monotype=function(t,e){return new P(e,t)},X.t.u.typekit=function(t,e){return new D(e,t)},X.t.u.google=function(t,e){return new q(e,t)};var Y={load:i(X.load,X)};"function"==typeof define&&define.amd?define(function(){return Y}):"undefined"!=typeof module&&module.exports?module.exports=Y:(window.WebFont=Y,window.WebFontConfig&&X.load(window.WebFontConfig))}(),function(t,e){"use strict";WebFont.load({google:{families:["Oswald"]},classes:!1,active:function(){e.body.classList.add("font-loaded")}})}(window,document);