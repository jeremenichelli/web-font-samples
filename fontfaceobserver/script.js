!function(){"use strict";function t(t){function e(){document.body?t():setTimeout(e,0)}e()}function e(t){this.a=document.createElement("div"),this.a.setAttribute("aria-hidden","true"),this.a.appendChild(document.createTextNode(t)),this.b=document.createElement("span"),this.c=document.createElement("span"),this.h=document.createElement("span"),this.g=document.createElement("span"),this.f=-1,this.b.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.c.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.g.style.cssText="display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;",this.h.style.cssText="display:inline-block;width:200%;height:200%;",this.b.appendChild(this.h),this.c.appendChild(this.g),this.a.appendChild(this.b),this.a.appendChild(this.c)}function n(t,e,n){t.a.style.cssText="min-width:20px;min-height:20px;display:inline-block;position:absolute;width:auto;margin:0;padding:0;top:-999px;left:-999px;white-space:nowrap;font-size:100px;font-family:"+e+";"+n}function i(t){var e=t.a.offsetWidth,n=e+100;return t.g.style.width=n+"px",t.c.scrollLeft=n,t.b.scrollLeft=t.b.scrollWidth+100,t.f!==e?(t.f=e,!0):!1}function o(t,e){t.b.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.f)},!1),t.c.addEventListener("scroll",function(){i(t)&&null!==t.a.parentNode&&e(t.f)},!1),i(t)}function s(t){p.push(t),1===p.length&&v()}function r(){for(;p.length;)p[0](),p.shift()}function a(t){this.a=m,this.b=void 0,this.c=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(n){e.reject(n)}}function c(t){return new a(function(e,n){n(t)})}function h(t){return new a(function(e){e(t)})}function f(t){s(function(){if(t.a!==m)for(;t.c.length;){var e=t.c.shift(),n=e[0],i=e[1],o=e[2],e=e[3];try{0===t.a?o("function"==typeof n?n.call(void 0,t.b):t.b):1===t.a&&("function"==typeof i?o(i.call(void 0,t.b)):e(t.b))}catch(s){e(s)}}})}function l(t){return new a(function(e,n){function i(n){return function(i){s[n]=i,o+=1,o===t.length&&e(s)}}var o=0,s=[];0===t.length&&e(s);for(var r=0;r<t.length;r+=1)t[r].then(i(r),n)})}function u(t){return new a(function(e,n){for(var i=0;i<t.length;i+=1)t[i].then(e,n)})}function d(t,e){var n=e||{};this.family=t,this.style=n.style||"normal",this.variant=n.variant||"normal",this.weight=n.weight||"normal",this.stretch=n.stretch||"stretch",this.featureSettings=n.featureSettings||"normal"}var p=[];if(window.MutationObserver){var w=document.createElement("div");new MutationObserver(r).observe(w,{attributes:!0});var v=function(){w.setAttribute("x",0)}}else v=function(){setTimeout(r)};var m=2;if(a.prototype.resolve=function(t){var e=this;if(e.a===m){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var i=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof i)return void i.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(o){return void(n||e.reject(o))}e.a=0,e.b=t,f(e)}},a.prototype.reject=function(t){if(this.a===m){if(t===this)throw new TypeError("Promise settled with itself.");this.a=1,this.b=t,f(this)}},a.prototype["catch"]=function(t){return this.then(void 0,t)},a.prototype.then=function(t,e){var n=this;return new a(function(i,o){n.c.push([t,e,i,o]),f(n)})},window.Promise){var y=window.Promise;y.prototype.then=window.Promise.prototype.then,y.prototype["catch"]=window.Promise.prototype["catch"],y.all=window.Promise.all,y.race=window.Promise.race,y.resolve=window.Promise.resolve,y.reject=window.Promise.reject}else y=a,y.prototype.then=a.prototype.then,y.prototype["catch"]=a.prototype["catch"],y.all=l,y.race=u,y.resolve=h,y.reject=c;var b=null;d.prototype.a=function(i,s){var r=i||"BESbswy",a=s||3e3,c="font-style:"+this.style+";font-variant:"+this.variant+";font-weight:"+this.weight+";font-stretch:"+this.stretch+";font-feature-settings:"+this.featureSettings+";-moz-font-feature-settings:"+this.featureSettings+";-webkit-font-feature-settings:"+this.featureSettings+";",h=document.createElement("div"),f=new e(r),l=new e(r),u=new e(r),d=-1,p=-1,w=-1,v=-1,m=-1,g=-1,x=this;return new y(function(e,i){function s(){null!==h.parentNode&&h.parentNode.removeChild(h)}function r(){if((-1!==d&&-1!==p||-1!==d&&-1!==w||-1!==p&&-1!==w)&&(d===p||d===w||p===w)){if(null===b){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);b=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}b?d===v&&p===v&&w===v||d===m&&p===m&&w===m||d===g&&p===g&&w===g||(s(),e(x)):(s(),e(x))}}t(function(){function t(){if(Date.now()-e>=a)s(),i(x);else{var n=document.hidden;(!0===n||void 0===n)&&(d=f.a.offsetWidth,p=l.a.offsetWidth,w=u.a.offsetWidth,r()),setTimeout(t,50)}}var e=Date.now();n(f,"sans-serif",c),n(l,"serif",c),n(u,"monospace",c),h.appendChild(f.a),h.appendChild(l.a),h.appendChild(u.a),document.body.appendChild(h),v=f.a.offsetWidth,m=l.a.offsetWidth,g=u.a.offsetWidth,t(),o(f,function(t){d=t,r()}),n(f,x.family+",sans-serif",c),o(l,function(t){p=t,r()}),n(l,x.family+",serif",c),o(u,function(t){w=t,r()}),n(u,x.family+",monospace",c)})})},window.FontFaceObserver=d,window.FontFaceObserver.prototype.check=d.prototype.a}(),function(t,e,n){"use strict";var i=new t.FontFaceObserver("Oswald");i.check().then(function(){e.body.classList.add("font-loaded")})}(window,document);