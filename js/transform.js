var k,l=this;function m(a){return void 0!==a}function p(){}
function q(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function aa(a){var b=q(a);return"array"==b||"object"==b&&"number"==typeof a.length}function r(a){return"string"==typeof a}function t(a){return"function"==q(a)}function ba(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ca="closure_uid_"+(1E9*Math.random()>>>0),da=0;function ea(a,b,c){return a.call.apply(a.bind,arguments)}
function fa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function u(a,b,c){u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa;return u.apply(null,arguments)}var ga=Date.now||function(){return+new Date};
function v(a,b){function c(){}c.prototype=b.prototype;a.Va=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Bb=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}};function w(a){if(Error.captureStackTrace)Error.captureStackTrace(this,w);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}v(w,Error);w.prototype.name="CustomError";var ha=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ia(a){if(!ja.test(a))return a;-1!=a.indexOf("\x26")&&(a=a.replace(ka,"\x26amp;"));-1!=a.indexOf("\x3c")&&(a=a.replace(la,"\x26lt;"));-1!=a.indexOf("\x3e")&&(a=a.replace(ma,"\x26gt;"));-1!=a.indexOf('"')&&(a=a.replace(na,"\x26quot;"));-1!=a.indexOf("'")&&(a=a.replace(oa,"\x26#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(pa,"\x26#0;"));return a}
var ka=/&/g,la=/</g,ma=/>/g,na=/"/g,oa=/'/g,pa=/\x00/g,ja=/[\x00&<>"']/;function qa(a,b){return a<b?-1:a>b?1:0}function ra(a){var b=Number(a);return 0==b&&/^[\s\xa0]*$/.test(a)?NaN:b};var sa=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},x=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ta=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,
b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var n=g[h];b.call(c,n,h,a)&&(e[f++]=n)}return e},ua=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function va(a,b,c){a:{for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a)){b=f;break a}b=-1}return 0>b?null:r(a)?a.charAt(b):a[b]}function wa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}function xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var y;a:{var ya=l.navigator;if(ya){var za=ya.userAgent;if(za){y=za;break a}}y=""}function z(a){return-1!=y.indexOf(a)};function Aa(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Ba(a,b){for(var c in a)if(b.call(void 0,a[c],c,a))return!0;return!1}function Ca(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Da(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var Ea="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Fa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ea.length;f++)c=Ea[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var Ga=z("Opera")||z("OPR"),B=z("Trident")||z("MSIE"),Ha=z("Edge"),C=z("Gecko")&&!(-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge"))&&!(z("Trident")||z("MSIE"))&&!z("Edge"),Ia=-1!=y.toLowerCase().indexOf("webkit")&&!z("Edge");function Ja(){var a=y;if(C)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ha)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ia)return/WebKit\/(\S+)/.exec(a)}function Ka(){var a=l.document;return a?a.documentMode:void 0}
var La=function(){if(Ga&&l.opera){var a;var b=l.opera.version;try{a=b()}catch(c){a=b}return a}a="";(b=Ja())&&(a=b?b[1]:"");return B&&(b=Ka(),b>parseFloat(a))?String(b):a}(),Ma={};
function D(a){var b;if(!(b=Ma[a])){b=0;for(var c=ha(String(La)).split("."),d=ha(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",n=RegExp("(\\d*)(\\D*)","g"),H=RegExp("(\\d*)(\\D*)","g");do{var M=n.exec(g)||["","",""],A=H.exec(h)||["","",""];if(0==M[0].length&&0==A[0].length)break;b=qa(0==M[1].length?0:parseInt(M[1],10),0==A[1].length?0:parseInt(A[1],10))||qa(0==M[2].length,0==A[2].length)||qa(M[2],A[2])}while(0==b)}b=Ma[a]=0<=b}return b}
var Na=l.document,Oa=Na&&B?Ka()||("CSS1Compat"==Na.compatMode?parseInt(La,10):5):void 0;var Pa=!B||9<=Oa;!C&&!B||B&&9<=Oa||C&&D("1.9.1");B&&D("9");var Qa=B||Ga||Ia;function E(a){return isFinite(a)&&!isNaN(a)};function F(a){var b=document;return r(a)?b.getElementById(a):a}function Ra(a){var b=document;a=a||b;a=a.querySelectorAll&&a.querySelector?a.querySelectorAll("LABEL"):a.getElementsByTagName("LABEL");return a}function Sa(a,b){Aa(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:Ta.hasOwnProperty(d)?a.setAttribute(Ta[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}
var Ta={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function G(a,b,c){var d=arguments,e=document,f=d[0],g=d[1];if(!Pa&&g&&(g.name||g.type)){f=["\x3c",f];g.name&&f.push(' name\x3d"',ia(g.name),'"');if(g.type){f.push(' type\x3d"',ia(g.type),'"');var h={};Fa(h,g);delete h.type;g=h}f.push("\x3e");f=f.join("")}f=e.createElement(f);g&&(r(g)?f.className=g:"array"==q(g)?f.className=g.join(" "):Sa(f,g));2<d.length&&Ua(e,f,d,2);return f}
function Ua(a,b,c,d){function e(c){c&&b.appendChild(r(c)?a.createTextNode(c):c)}for(;d<c.length;d++){var f=c[d];!aa(f)||ba(f)&&0<f.nodeType?e(f):x(Va(f)?xa(f):f,e)}}function Wa(a,b){a.appendChild(b)}function Xa(a,b){Ua(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments,1)}function Ya(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}
function Za(a){var b;if(Qa&&!(B&&D("9")&&!D("10")&&l.SVGElement&&a instanceof l.SVGElement)&&(b=a.parentElement))return b;b=a.parentNode;return ba(b)&&1==b.nodeType?b:null}
function I(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild((9==a.nodeType?a:a.ownerDocument||a.document).createTextNode(String(b)))}}
function Va(a){if(a&&"number"==typeof a.length){if(ba(a))return"function"==typeof a.item||"string"==typeof a.item;if(t(a))return"function"==typeof a.item}return!1};function $a(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}function ab(a,b){var c;a.classList?c=a.classList.contains(b):(c=$a(a),c=0<=sa(c,b));return c}function bb(a,b){a.classList?a.classList.add(b):ab(a,b)||(a.className+=0<a.className.length?" "+b:b)}function cb(a,b){a.classList?a.classList.remove(b):ab(a,b)&&(a.className=ta($a(a),function(a){return a!=b}).join(" "))};function db(){0!=eb&&(this[ca]||(this[ca]=++da));this.Na=this.Na;this.fb=this.fb}var eb=0;db.prototype.Na=!1;var fb=!B||9<=Oa,gb=B&&!D("9");!Ia||D("528");C&&D("1.9b")||B&&D("8")||Ga&&D("9.5")||Ia&&D("528");C&&!D("8")||B&&D("9");function J(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.M=!1;this.Ra=!0}J.prototype.stopPropagation=function(){this.M=!0};J.prototype.preventDefault=function(){this.defaultPrevented=!0;this.Ra=!1};function hb(a){hb[" "](a);return a}hb[" "]=p;function K(a,b){J.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ba=this.state=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;if(e){if(C){var f;a:{try{hb(e.nodeName);f=!0;break a}catch(g){}f=
!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;null===d?(this.offsetX=Ia||void 0!==a.offsetX?a.offsetX:a.layerX,this.offsetY=Ia||void 0!==a.offsetY?a.offsetY:a.layerY,this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||
0,this.screenY=d.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ba=a;a.defaultPrevented&&this.preventDefault()}}v(K,J);K.prototype.stopPropagation=function(){K.Va.stopPropagation.call(this);this.ba.stopPropagation?this.ba.stopPropagation():this.ba.cancelBubble=!0};
K.prototype.preventDefault=function(){K.Va.preventDefault.call(this);var a=this.ba;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,gb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ib="closure_listenable_"+(1E6*Math.random()|0),jb=0;function kb(a,b,c,d,e){this.listener=a;this.ra=null;this.src=b;this.type=c;this.aa=!!d;this.ma=e;this.key=++jb;this.X=this.ka=!1}function lb(a){a.X=!0;a.listener=null;a.ra=null;a.src=null;a.ma=null};function L(a){this.src=a;this.g={};this.ha=0}L.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.ha++);var g=mb(a,b,d,e);-1<g?(b=a[g],c||(b.ka=!1)):(b=new kb(b,this.src,f,!!d,e),b.ka=c,a.push(b));return b};L.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.g))return!1;var e=this.g[a];b=mb(e,b,c,d);return-1<b?(lb(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.g[a],this.ha--),!0):!1};
function nb(a,b){var c=b.type;if(!(c in a.g))return!1;var d=a.g[c],e=sa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(lb(b),0==a.g[c].length&&(delete a.g[c],a.ha--));return f}L.prototype.Ca=function(a,b,c,d){a=this.g[a.toString()];var e=-1;a&&(e=mb(a,b,c,d));return-1<e?a[e]:null};L.prototype.hasListener=function(a,b){var c=m(a),d=c?a.toString():"",e=m(b);return Ba(this.g,function(a){for(var g=0;g<a.length;++g)if(!(c&&a[g].type!=d||e&&a[g].aa!=b))return!0;return!1})};
function mb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.X&&f.listener==b&&f.aa==!!c&&f.ma==d)return e}return-1};var ob="closure_lm_"+(1E6*Math.random()|0),pb={},qb=0;
function N(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)N(a,b[f],c,d,e);else if(c=rb(c),a&&a[ib])a.s.add(String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=sb(a);g||(a[ob]=g=new L(a));c=g.add(b,c,!1,d,e);if(!c.ra){d=tb();c.ra=d;d.src=a;d.listener=c;if(a.addEventListener)a.addEventListener(b.toString(),d,f);else if(a.attachEvent)a.attachEvent(ub(b.toString()),d);else throw Error("addEventListener and attachEvent are unavailable.");qb++}}}
function tb(){var a=vb,b=fb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function wb(a,b,c,d,e){if("array"==q(b))for(var f=0;f<b.length;f++)wb(a,b[f],c,d,e);else c=rb(c),a&&a[ib]?a.s.remove(String(b),c,d,e):a&&(a=sb(a))&&(b=a.Ca(b,c,!!d,e))&&xb(b)}
function xb(a){if("number"==typeof a||!a||a.X)return!1;var b=a.src;if(b&&b[ib])return nb(b.s,a);var c=a.type,d=a.ra;b.removeEventListener?b.removeEventListener(c,d,a.aa):b.detachEvent&&b.detachEvent(ub(c),d);qb--;(c=sb(b))?(nb(c,a),0==c.ha&&(c.src=null,b[ob]=null)):lb(a);return!0}
function yb(a,b){if(!a)return 0;if(a&&a[ib]){var c;if(a.s){var d=a.s,e=b&&b.toString(),f=0;for(c in d.g)if(!e||c==e){for(var g=d.g[c],h=0;h<g.length;h++)++f,lb(g[h]);delete d.g[c];d.ha--}c=f}else c=0;return c}c=sb(a);if(!c)return 0;e=0;f=b&&b.toString();for(d in c.g)if(!f||d==f)for(g=c.g[d].concat(),h=0;h<g.length;++h)xb(g[h])&&++e;return e}function ub(a){return a in pb?pb[a]:pb[a]="on"+a}
function zb(a,b,c,d){var e=!0;if(a=sb(a))if(b=a.g[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.aa==c&&!f.X&&(f=Ab(f,d),e=e&&!1!==f)}return e}function Ab(a,b){var c=a.listener,d=a.ma||a.src;a.ka&&xb(a);return c.call(d,b)}
function vb(a,b){if(a.X)return!0;if(!fb){var c;if(!(c=b))a:{c=["window","event"];for(var d=l,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new K(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(n){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,g=e.length-1;!c.M&&0<=g;g--){c.currentTarget=e[g];var h=zb(e[g],f,!0,c),d=d&&h}for(g=0;!c.M&&g<e.length;g++)c.currentTarget=
e[g],h=zb(e[g],f,!1,c),d=d&&h}return d}return Ab(a,new K(b,this))}function sb(a){a=a[ob];return a instanceof L?a:null}var Bb="__closure_events_fn_"+(1E9*Math.random()>>>0);function rb(a){if(t(a))return a;a[Bb]||(a[Bb]=function(b){return a.handleEvent(b)});return a[Bb]};function Cb(){db.call(this);this.s=new L(this);this.Wa=this;this.Qa=null}v(Cb,db);Cb.prototype[ib]=!0;k=Cb.prototype;k.addEventListener=function(a,b,c,d){N(this,a,b,c,d)};k.removeEventListener=function(a,b,c,d){wb(this,a,b,c,d)};
k.dispatchEvent=function(a){var b,c=this.Qa;if(c)for(b=[];c;c=c.Qa)b.push(c);var c=this.Wa,d=a.type||a;if(r(a))a=new J(a,c);else if(a instanceof J)a.target=a.target||c;else{var e=a;a=new J(d,c);Fa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.M&&0<=g;g--)f=a.currentTarget=b[g],e=Db(f,d,!0,a)&&e;a.M||(f=a.currentTarget=c,e=Db(f,d,!0,a)&&e,a.M||(e=Db(f,d,!1,a)&&e));if(b)for(g=0;!a.M&&g<b.length;g++)f=a.currentTarget=b[g],e=Db(f,d,!1,a)&&e;return e};function Eb(a,b,c){a.s.add(String(Fb),b,!0,!1,c)}
function Db(a,b,c,d){b=a.s.g[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.X&&g.aa==c){var h=g.listener,n=g.ma||g.src;g.ka&&nb(a.s,g);e=!1!==h.call(n,d)&&e}}return e&&0!=d.Ra}k.Ca=function(a,b,c,d){return this.s.Ca(String(a),b,c,d)};k.hasListener=function(a,b){return this.s.hasListener(m(a)?String(a):void 0,b)};function Gb(a){if(a.l&&"function"==typeof a.l)return a.l();if(r(a))return a.split("");if(aa(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Ca(a)}
function Hb(a,b,c){if(a.forEach&&"function"==typeof a.forEach)a.forEach(b,c);else if(aa(a)||r(a))x(a,b,c);else{var d;if(a.B&&"function"==typeof a.B)d=a.B();else if(a.l&&"function"==typeof a.l)d=void 0;else if(aa(a)||r(a)){d=[];for(var e=a.length,f=0;f<e;f++)d.push(f)}else d=Da(a);for(var e=Gb(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)}};function Ib(a,b){this.u={};this.h=[];this.f=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)}k=Ib.prototype;k.l=function(){Jb(this);for(var a=[],b=0;b<this.h.length;b++)a.push(this.u[this.h[b]]);return a};k.B=function(){Jb(this);return this.h.concat()};k.I=function(a){return Kb(this.u,a)};k.clear=function(){this.u={};this.f=this.h.length=0};
k.remove=function(a){return Kb(this.u,a)?(delete this.u[a],this.f--,this.h.length>2*this.f&&Jb(this),!0):!1};function Jb(a){if(a.f!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];Kb(a.u,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.f!=a.h.length){for(var e={},c=b=0;b<a.h.length;)d=a.h[b],Kb(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}k.get=function(a,b){return Kb(this.u,a)?this.u[a]:b};k.set=function(a,b){Kb(this.u,a)||(this.f++,this.h.push(a));this.u[a]=b};
k.addAll=function(a){var b;a instanceof Ib?(b=a.B(),a=a.l()):(b=Da(a),a=Ca(a));for(var c=0;c<b.length;c++)this.set(b[c],a[c])};k.forEach=function(a,b){for(var c=this.B(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};k.clone=function(){return new Ib(this)};function Kb(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Lb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Mb(a,b){if(a)for(var c=a.split("\x26"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d"),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};function O(a,b){this.A=this.P=this.F="";this.W=null;this.J=this.v="";this.m=this.cb=!1;var c;if(a instanceof O)this.m=m(b)?b:a.m,Nb(this,a.F),c=a.P,P(this),this.P=c,c=a.A,P(this),this.A=c,Ob(this,a.W),c=a.v,P(this),this.v=c,Pb(this,a.w.clone()),c=a.J,P(this),this.J=c;else if(a&&(c=String(a).match(Lb))){this.m=!!b;Nb(this,c[1]||"",!0);var d=c[2]||"";P(this);this.P=Qb(d);d=c[3]||"";P(this);this.A=Qb(d,!0);Ob(this,c[4]);d=c[5]||"";P(this);this.v=Qb(d,!0);Pb(this,c[6]||"",!0);c=c[7]||"";P(this);this.J=
Qb(c)}else this.m=!!b,this.w=new Q(null,0,this.m)}O.prototype.toString=function(){var a=[],b=this.F;b&&a.push(Rb(b,Sb,!0),":");var c=this.A;if(c||"file"==b)a.push("//"),(b=this.P)&&a.push(Rb(b,Sb,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.W,null!=c&&a.push(":",String(c));if(c=this.v)this.A&&"/"!=c.charAt(0)&&a.push("/"),a.push(Rb(c,"/"==c.charAt(0)?Tb:Ub,!0));(c=this.w.toString())&&a.push("?",c);(c=this.J)&&a.push("#",Rb(c,Vb));return a.join("")};
O.prototype.resolve=function(a){var b=this.clone(),c=!!a.F;c?Nb(b,a.F):c=!!a.P;if(c){var d=a.P;P(b);b.P=d}else c=!!a.A;c?(d=a.A,P(b),b.A=d):c=null!=a.W;d=a.v;if(c)Ob(b,a.W);else if(c=!!a.v){if("/"!=d.charAt(0))if(this.A&&!this.v)d="/"+d;else{var e=b.v.lastIndexOf("/");-1!=e&&(d=b.v.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var h=e[g++];"."==h?d&&g==e.length&&f.push(""):".."==
h?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(h),d=!0)}d=f.join("/")}else d=e}c?(P(b),b.v=d):c=""!==a.w.toString();c?Pb(b,Qb(a.w.toString())):c=!!a.J;c&&(a=a.J,P(b),b.J=a);return b};O.prototype.clone=function(){return new O(this)};function Nb(a,b,c){P(a);a.F=c?Qb(b,!0):b;a.F&&(a.F=a.F.replace(/:$/,""))}function Ob(a,b){P(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.W=b}else a.W=null}
function Pb(a,b,c){P(a);b instanceof Q?(a.w=b,a.w.Ea(a.m)):(c||(b=Rb(b,Wb)),a.w=new Q(b,0,a.m))}function Xb(a,b,c){P(a);"array"==q(c)||(c=[String(c)]);Yb(a.w,b,c)}function P(a){if(a.cb)throw Error("Tried to modify a read-only Uri");}O.prototype.Ea=function(a){this.m=a;this.w&&this.w.Ea(a);return this};function Qb(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}
function Rb(a,b,c){return r(a)?(a=encodeURI(a).replace(b,Zb),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Zb(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Sb=/[#\/\?@]/g,Ub=/[\#\?:]/g,Tb=/[\#\?]/g,Wb=/[\#\?@]/g,Vb=/#/g;function Q(a,b,c){this.f=this.a=null;this.j=a||null;this.m=!!c}function R(a){a.a||(a.a=new Ib,a.f=0,a.j&&Mb(a.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}k=Q.prototype;
k.add=function(a,b){R(this);this.j=null;a=$b(this,a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.f++;return this};k.remove=function(a){R(this);a=$b(this,a);return this.a.I(a)?(this.j=null,this.f-=this.a.get(a).length,this.a.remove(a)):!1};k.clear=function(){this.a=this.j=null;this.f=0};k.I=function(a){R(this);a=$b(this,a);return this.a.I(a)};k.B=function(){R(this);for(var a=this.a.l(),b=this.a.B(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};
k.l=function(a){R(this);var b=[];if(r(a))this.I(a)&&(b=wa(b,this.a.get($b(this,a))));else{a=this.a.l();for(var c=0;c<a.length;c++)b=wa(b,a[c])}return b};k.set=function(a,b){R(this);this.j=null;a=$b(this,a);this.I(a)&&(this.f-=this.a.get(a).length);this.a.set(a,[b]);this.f++;return this};k.get=function(a,b){var c=a?this.l(a):[];return 0<c.length?String(c[0]):b};function Yb(a,b,c){a.remove(b);0<c.length&&(a.j=null,a.a.set($b(a,b),xa(c)),a.f+=c.length)}
k.toString=function(){if(this.j)return this.j;if(!this.a)return"";for(var a=[],b=this.a.B(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.l(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="\x3d"+encodeURIComponent(String(d[f])));a.push(g)}return this.j=a.join("\x26")};k.clone=function(){var a=new Q;a.j=this.j;this.a&&(a.a=this.a.clone(),a.f=this.f);return a};function $b(a,b){var c=String(b);a.m&&(c=c.toLowerCase());return c}
k.Ea=function(a){a&&!this.m&&(R(this),this.j=null,this.a.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),Yb(this,d,a))},this));this.m=a};k.extend=function(a){for(var b=0;b<arguments.length;b++)Hb(arguments[b],function(a,b){this.add(b,a)},this)};function ac(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function bc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function cc(a,b,c){this.eb=c;this.$a=a;this.gb=b;this.qa=0;this.na=null}cc.prototype.get=function(){var a;0<this.qa?(this.qa--,a=this.na,this.na=a.next,a.next=null):a=this.$a();return a};cc.prototype.put=function(a){this.gb(a);this.qa<this.eb&&(this.qa++,a.next=this.na,this.na=a)};function dc(){this.va=this.$=null}var fc=new cc(function(){return new ec},function(a){a.reset()},100);dc.prototype.add=function(a,b){var c=fc.get();c.set(a,b);this.va?this.va.next=c:this.$=c;this.va=c};dc.prototype.remove=function(){var a=null;this.$&&(a=this.$,this.$=this.$.next,this.$||(this.va=null),a.next=null);return a};function ec(){this.next=this.scope=this.Aa=null}ec.prototype.set=function(a,b){this.Aa=a;this.scope=b;this.next=null};
ec.prototype.reset=function(){this.next=this.scope=this.Aa=null};function gc(a){l.setTimeout(function(){throw a;},0)}var hc;
function ic(){var a=l.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!z("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=u(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!z("Trident")&&!z("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(m(c.next)){c=c.next;var a=c.Ia;c.Ia=null;a()}};return function(a){d.next={Ia:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){l.setTimeout(a,0)}};function jc(a,b){kc||lc();mc||(kc(),mc=!0);nc.add(a,b)}var kc;function lc(){if(l.Promise&&l.Promise.resolve){var a=l.Promise.resolve(void 0);kc=function(){a.then(oc)}}else kc=function(){var a=oc;!t(l.setImmediate)||l.Window&&l.Window.prototype&&l.Window.prototype.setImmediate==l.setImmediate?(hc||(hc=ic()),hc(a)):l.setImmediate(a)}}var mc=!1,nc=new dc;function oc(){for(var a=null;a=nc.remove();){try{a.Aa.call(a.scope)}catch(b){gc(b)}fc.put(a)}mc=!1};function S(a,b){this.o=T;this.C=void 0;this.R=this.D=this.i=null;this.la=this.za=!1;if(a!=p)try{var c=this;a.call(b,function(a){pc(c,qc,a)},function(a){pc(c,U,a)})}catch(d){pc(this,U,d)}}var T=0,qc=2,U=3;function rc(){this.next=this.context=this.U=this.fa=this.H=null;this.ja=!1}rc.prototype.reset=function(){this.context=this.U=this.fa=this.H=null;this.ja=!1};var sc=new cc(function(){return new rc},function(a){a.reset()},100);function tc(a,b,c){var d=sc.get();d.fa=a;d.U=b;d.context=c;return d}
S.prototype.then=function(a,b,c){return uc(this,t(a)?a:null,t(b)?b:null,c)};ac(S);S.prototype.cancel=function(a){this.o==T&&jc(function(){var b=new vc(a);wc(this,b)},this)};function wc(a,b){if(a.o==T)if(a.i){var c=a.i;if(c.D){for(var d=0,e=null,f=null,g=c.D;g&&(g.ja||(d++,g.H==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.o==T&&1==d?wc(c,b):(f?(d=f,d.next==c.R&&(c.R=d),d.next=d.next.next):xc(c),yc(c,e,U,b)))}a.i=null}else pc(a,U,b)}
function zc(a,b){a.D||a.o!=qc&&a.o!=U||Ac(a);a.R?a.R.next=b:a.D=b;a.R=b}function uc(a,b,c,d){var e=tc(null,null,null);e.H=new S(function(a,g){e.fa=b?function(c){try{var e=b.call(d,c);a(e)}catch(H){g(H)}}:a;e.U=c?function(b){try{var e=c.call(d,b);!m(e)&&b instanceof vc?g(b):a(e)}catch(H){g(H)}}:g});e.H.i=a;zc(a,e);return e.H}S.prototype.xb=function(a){this.o=T;pc(this,qc,a)};S.prototype.yb=function(a){this.o=T;pc(this,U,a)};
function pc(a,b,c){if(a.o==T){a==c&&(b=U,c=new TypeError("Promise cannot resolve to itself"));a.o=1;var d;a:{var e=c,f=a.xb,g=a.yb;if(e instanceof S)zc(e,tc(f||p,g||null,a)),d=!0;else if(bc(e))e.then(f,g,a),d=!0;else{if(ba(e))try{var h=e.then;if(t(h)){Bc(e,h,f,g,a);d=!0;break a}}catch(n){g.call(a,n);d=!0;break a}d=!1}}d||(a.C=c,a.o=b,a.i=null,Ac(a),b!=U||c instanceof vc||Cc(a,c))}}
function Bc(a,b,c,d,e){function f(a){h||(h=!0,d.call(e,a))}function g(a){h||(h=!0,c.call(e,a))}var h=!1;try{b.call(a,g,f)}catch(n){f(n)}}function Ac(a){a.za||(a.za=!0,jc(a.bb,a))}function xc(a){var b=null;a.D&&(b=a.D,a.D=b.next,b.next=null);a.D||(a.R=null);return b}S.prototype.bb=function(){for(var a=null;a=xc(this);)yc(this,a,this.o,this.C);this.za=!1};
function yc(a,b,c,d){if(c==U&&b.U&&!b.ja)for(;a&&a.la;a=a.i)a.la=!1;if(b.H)b.H.i=null,Dc(b,c,d);else try{b.ja?b.fa.call(b.context):Dc(b,c,d)}catch(e){Ec.call(null,e)}sc.put(b)}function Dc(a,b,c){b==qc?a.fa.call(a.context,c):a.U&&a.U.call(a.context,c)}function Cc(a,b){a.la=!0;jc(function(){a.la&&Ec.call(null,b)})}var Ec=gc;function vc(a){w.call(this,a)}v(vc,w);vc.prototype.name="cancel";/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function V(a,b){this.sa=[];this.Pa=a;this.La=b||null;this.da=this.T=!1;this.C=void 0;this.Fa=this.Xa=this.wa=!1;this.ua=0;this.i=null;this.xa=0}V.prototype.cancel=function(a){if(this.T)this.C instanceof V&&this.C.cancel();else{if(this.i){var b=this.i;delete this.i;a?b.cancel(a):(b.xa--,0>=b.xa&&b.cancel())}this.Pa?this.Pa.call(this.La,this):this.Fa=!0;this.T||(a=new Fc,Gc(this),Hc(this,!1,a))}};V.prototype.Ka=function(a,b){this.wa=!1;Hc(this,a,b)};function Hc(a,b,c){a.T=!0;a.C=c;a.da=!b;Ic(a)}
function Gc(a){if(a.T){if(!a.Fa)throw new Jc;a.Fa=!1}}function Kc(a,b,c,d){a.sa.push([b,c,d]);a.T&&Ic(a)}V.prototype.then=function(a,b,c){var d,e,f=new S(function(a,b){d=a;e=b});Kc(this,d,function(a){a instanceof Fc?f.cancel():e(a)});return f.then(a,b,c)};ac(V);function Lc(a){return ua(a.sa,function(a){return t(a[1])})}
function Ic(a){if(a.ua&&a.T&&Lc(a)){var b=a.ua,c=Mc[b];c&&(l.clearTimeout(c.K),delete Mc[b]);a.ua=0}a.i&&(a.i.xa--,delete a.i);for(var b=a.C,d=c=!1;a.sa.length&&!a.wa;){var e=a.sa.shift(),f=e[0],g=e[1],e=e[2];if(f=a.da?g:f)try{var h=f.call(e||a.La,b);m(h)&&(a.da=a.da&&(h==b||h instanceof Error),a.C=b=h);if(bc(b)||"function"===typeof l.Promise&&b instanceof l.Promise)d=!0,a.wa=!0}catch(n){b=n,a.da=!0,Lc(a)||(c=!0)}}a.C=b;d&&(h=u(a.Ka,a,!0),d=u(a.Ka,a,!1),b instanceof V?(Kc(b,h,d),b.Xa=!0):b.then(h,
d));c&&(b=new Nc(b),Mc[b.K]=b,a.ua=b.K)}function Jc(){w.call(this)}v(Jc,w);Jc.prototype.message="Deferred has already fired";Jc.prototype.name="AlreadyCalledError";function Fc(){w.call(this)}v(Fc,w);Fc.prototype.message="Deferred was canceled";Fc.prototype.name="CanceledError";function Nc(a){this.K=l.setTimeout(u(this.wb,this),0);this.ab=a}Nc.prototype.wb=function(){delete Mc[this.K];throw this.ab;};var Mc={};function Oc(a,b){var c=b||{},d=c.document||document,e=document.createElement("SCRIPT"),f={Ta:e,ta:void 0},g=new V(Pc,f),h=null,n=null!=c.timeout?c.timeout:5E3;0<n&&(h=window.setTimeout(function(){Qc(e,!0);var b=new Rc(Sc,"Timeout reached for loading script "+a);Gc(g);Hc(g,!1,b)},n),f.ta=h);e.onload=e.onreadystatechange=function(){e.readyState&&"loaded"!=e.readyState&&"complete"!=e.readyState||(Qc(e,c.Za||!1,h),Gc(g),Hc(g,!0,null))};e.onerror=function(){Qc(e,!0,h);var b=new Rc(Tc,"Error while loading script "+
a);Gc(g);Hc(g,!1,b)};f=c.attributes||{};Fa(f,{type:"text/javascript",charset:"UTF-8",src:a});Sa(e,f);Uc(d).appendChild(e);return g}function Uc(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function Pc(){if(this&&this.Ta){var a=this.Ta;a&&"SCRIPT"==a.tagName&&Qc(a,!0,this.ta)}}function Qc(a,b,c){null!=c&&l.clearTimeout(c);a.onload=p;a.onerror=p;a.onreadystatechange=p;b&&window.setTimeout(function(){Ya(a)},0)}var Tc=0,Sc=1;
function Rc(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);w.call(this,c);this.code=a}v(Rc,w);function Vc(a,b){this.zb=new O(a);this.Ya=b?b:"callback";this.ta=5E3}var Wc=0;Vc.prototype.send=function(a,b,c,d){a=a||null;d=d||"_"+(Wc++).toString(36)+ga().toString(36);l._callbacks_||(l._callbacks_={});var e=this.zb.clone();if(a)for(var f in a)a.hasOwnProperty&&!a.hasOwnProperty(f)||Xb(e,f,a[f]);b&&(l._callbacks_[d]=Xc(d,b),Xb(e,this.Ya,"_callbacks_."+d));b=Oc(e.toString(),{timeout:this.ta,Za:!0});Kc(b,null,Yc(d,a,c),void 0);return{K:d,Ma:b}};
Vc.prototype.cancel=function(a){a&&(a.Ma&&a.Ma.cancel(),a.K&&Zc(a.K,!1))};function Yc(a,b,c){return function(){Zc(a,!1);c&&c(b)}}function Xc(a,b){return function(c){Zc(a,!0);b.apply(void 0,arguments)}}function Zc(a,b){l._callbacks_[a]&&(b?delete l._callbacks_[a]:l._callbacks_[a]=p)};function $c(a,b,c,d){this.Ja=G("DIV","popup-content");this.ia=null;c=c?G("A","popup-close","X"):null;this.S=G("DIV","popup");a&&Wa(this.S,G("DIV","popup-title",a));c&&this.S.appendChild(c);this.S.appendChild(this.Ja);this.Sa=b?G("DIV","popup-bg",this.S):this.S;c&&N(c,"click",function(a){W(this,!1);d&&d();a.preventDefault()},!1,this)}function W(a,b){b?document.body.appendChild(a.Sa):Ya(a.Sa)}$c.prototype.append=function(a){Xa(this.Ja,arguments)};
$c.prototype.Ha=function(a){this.ia||(this.ia=G("DIV","popup-actions"),this.S.appendChild(this.ia));Xa(this.ia,arguments)};function ad(){Cb.call(this);this.V=new $c("Coordinate system",!0,!0);this.ea=G("INPUT","srsdialog-input");var a=G("INPUT",{type:"submit","class":"srsdialog-table",value:"Search"});this.Ga=G("TABLE","srsdialog-table");var b=G("TR",void 0,G("TH",void 0,"Code"),G("TH",void 0,"Name"),G("TH",void 0,"Area"),G("TH",void 0,"Accuracy"));this.Ga.appendChild(b);this.Ba=G("FORM","srsdialog-form");N(this.Ba,"submit",function(a){bd(this);a.preventDefault()},!1,this);Xa(this.Ba,this.ea,a,this.Ga);this.V.append(this.Ba);
a=G("DIV","btn-light","Select");b=G("DIV","btn-dark","Cancel");this.V.Ha(b,a);this.Da=null;this.ga=[];N(a,"click",function(a){this.dispatchEvent({type:Fb,data:this.Da});W(this.V,!1);a.preventDefault()},!1,this);N(b,"click",function(a){W(this.V,!1);a.preventDefault()},!1,this);this.oa=new Vc("/");N(this.ea,"keydown",function(a){27==a.keyCode&&W(this.V,!1);a.stopPropagation()},!1,this)}v(ad,Cb);ad.prototype.show=function(){W(this.V,!0);this.ea.value="";this.ea.focus();cd(this)};
function dd(a,b,c){b=b.split("-");if(!(1>b.length)){var d=1<b.length?parseInt(b[1],10):null;b={format:"json",q:b[0]};null===d||(b.trans="1");a.oa.send(b,function(a){var b=a.results[0];null===d||x(b.trans,function(a){a.code_trans==d&&(a.code=b.code+"-"+d,a.name=b.name,b=a)});c(b)})}}function cd(a){x(a.ga,Ya);x(a.ga,yb);a.ga=[];a.Da=null}
function bd(a){cd(a);a.oa.send({format:"json",trans:"1",q:a.ea.value},u(function(a){var c=u(function(a,b,c,d){var e=b.area,M=b.accuracy.toString()+" m",A=G("TR",a,G("TD",void 0,c),G("TD",void 0,d),G("TD",void 0,e),G("TD",void 0,M));this.ga.push(A);this.Ga.appendChild(A);N(A,"click",function(a){ed(this,A,b);a.preventDefault()},!1,this);return A},this);cd(this);var d,e;x(a.results,function(a){var b=a.trans,h=a.default_trans,n=G("SPAN","srsdialog-transshower","\x3e");d=G("SPAN",void 0,n,a.code);e=a.name;
c("system"+(0<b.length?" expandable":""),a,d,e);var H=[];x(b,function(b){var e=b.code_trans;b.code=a.code+"-"+e;b.name=a.name;d="  "+e;h==e&&(a.bbox=b.bbox);b=c("trans hidden"+(h==e?" default":""),b,d,"");H.push(b)},this);N(n,"click",function(a){x(H,function(a){ab(a,"hidden")?cb(a,"hidden"):bb(a,"hidden")},this);a.preventDefault()},!1,this)},this)},a))}function ed(a,b,c){x(a.ga,function(a){a==b?bb(a,"selected"):cb(a,"selected")},a);a.Da=c}var Fb="selected";function fd(a){this.ya=a}var gd=/\s*;\s*/;k=fd.prototype;k.isEnabled=function(){return navigator.cookieEnabled};k.set=function(a,b,c,d,e,f){if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');m(c)||(c=-1);e=e?";domain\x3d"+e:"";d=d?";path\x3d"+d:"";f=f?";secure":"";c=0>c?"":0==c?";expires\x3d"+(new Date(1970,1,1)).toUTCString():";expires\x3d"+(new Date(ga()+1E3*c)).toUTCString();this.ya.cookie=a+"\x3d"+b+e+d+c+f};
k.get=function(a,b){for(var c=a+"\x3d",d=(this.ya.cookie||"").split(gd),e=0,f;f=d[e];e++){if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};k.remove=function(a,b,c){var d=this.I(a);this.set(a,"",0,b,c);return d};k.B=function(){return hd(this).keys};k.l=function(){return hd(this).values};k.I=function(a){return m(this.get(a))};k.clear=function(){for(var a=hd(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function hd(a){a=(a.ya.cookie||"").split(gd);for(var b=[],c=[],d,e,f=0;e=a[f];f++)d=e.indexOf("\x3d"),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}var id=new fd(document);id.Ab=3950;function jd(a){this.L=F(a);this.pa=va(Ra(Za(this.L)),function(a){return a.htmlFor==this.L.id},this);this.ca=!1;kd(this,!1)}function kd(a,b){var c=X(a);a.ca=b;Y(a,c);a.L.placeholder=a.L.getAttribute(a.ca?"data-placeholder-degrees":"data-placeholder")||a.L.placeholder;a.pa&&(a.pa.innerHTML=a.pa.getAttribute(a.ca?"data-value-degrees":"data-value")||a.pa.innerHTML)}
function X(a){var b=a.L.value;a.ca?(a=RegExp("^\\s*(-?\\d+(\\.\\d+)?)\\s*([\u00b0|\\s]\\s*(\\d+(\\.\\d+)?)?)?\\s*(['|\\s]\\s*(\\d+(\\.\\d+)?)?)?\\s*\"?\\s*$").exec(b))?(b=ra(a[1])||0,a=(0>b?-1:1)*(Math.abs(b)+(ra(a[4])||0)/60+(ra(a[7])||0)/3600)):a=NaN:a=parseFloat(b);return a}
function Y(a,b){var c=a.L,d;if(E(b))if(a.ca){d=b;var e=0,f=0,g=0,h=0>d?"-":"";d=Math.abs(d);e=Math.floor(d);d=d%1*60;0<d&&(f=Math.floor(d),d=d%1*60,0<d&&(g=Math.round(1E3*d)/1E3));60<=g&&(f++,g=0);60<=f&&(e++,f=0);h+=e.toFixed(0)+"\u00b0";if(0<f||0<g)h+=f.toFixed(0)+"'";0<g&&(h+=g.toFixed(3).replace(/\.*0+$/,"")+'"');d=h}else d=b;else d="";c.value=d};function ld(a,b){var c=new $c(b,!0);c.append(String(a));var d=G("DIV","btn","OK");c.Ha(d);N(d,"click",function(a){W(c,!1);a.preventDefault()});W(c,!0)};function md(a){var b=F("srs-in-map-link");a.c&&a.N&&a.O?(b.href="/map#srs\x3d"+a.c.code+"\x26x\x3d"+X(a.N)+"\x26y\x3d"+X(a.O),b.style.display=""):b.style.display="none";b=F("srs-out-map-link");a.b&&a.Y&&a.Z?(b.href="/map#srs\x3d"+a.b.code+"\x26x\x3d"+X(a.Y)+"\x26y\x3d"+X(a.Z),b.style.display=""):b.style.display="none"}
function nd(a){if(a.c){I(a.nb,"EPSG:"+a.c.code+" "+a.c.name);var b=/^degree/.test(a.c.unit);kd(a.N,b);kd(a.O,b);a.kb.href="/"+a.c.code;I(a.ob,a.c.unit);I(a.ib,a.c.area);b=a.c.accuracy;I(a.hb,b?b+" m":"Unknown")}a.lb.style.display=a.c?"":"none";a.b&&(I(a.ub,"EPSG:"+a.b.code+" "+a.b.name),b=/^degree/.test(a.b.unit),kd(a.Y,b),kd(a.Z,b),a.sb.href="/"+a.b.code,I(a.vb,a.b.unit),I(a.qb,a.b.area),b=a.b.accuracy,I(a.pb,b?b+" m":"Unknown"));a.tb.style.display=a.b?"":"none";a.Ua.disabled=!(a.c&&a.b);od(a)}
function od(a,b){Y(a.Y,NaN);Y(a.Z,NaN);if(a.c&&a.b){var c=X(a.N),d=X(a.O);E(c)&&E(d)?a.oa.send({x:c,y:d,s_srs:a.c.code,t_srs:a.b.code},u(function(a){b&&"error"==a.status&&ld(a.message,"Error ("+a.error_type+")");m(a.x)&&m(a.x)&&(Y(this.Y,a.x),Y(this.Z,a.y),md(this))},a)):b&&ld("Please enter valid input coordinates!","Error")}else b&&ld("Select coordinate systems before transforming!","Error");pd(a);md(a)}
function pd(a){if(!a.Oa){var b=new Q;a.c&&b.set("s_srs",a.c.code);a.b&&(b.set("t_srs",a.b.code),id.set("t_srs",a.b.code,31536E3));var c=X(a.N);a=X(a.O);E(c)&&E(a)&&(b.set("x",c.toFixed(7)),b.set("y",a.toFixed(7)));window.location.hash=b.toString()}}
function qd(a,b){var c=new Q(window.location.hash.substr(1)),d=0,e=c.get("s_srs");e&&(d++,dd(a.G,e,u(function(a){this.c=a;nd(this);0>=--d&&b()},a)));if(e=c.get("t_srs")||id.get("t_srs"))d++,dd(a.G,e,u(function(a){this.b=a;nd(this);0>=--d&&b()},a));0>=d&&b();e=parseFloat(c.get("x"));c=parseFloat(c.get("y"));E(e)&&E(c)&&(Y(a.N,e),Y(a.O,c))}
function rd(){this.oa=new Vc("/trans");this.G=new ad;this.nb=F("srs-in-name");this.jb=F("srs-in-change");this.lb=F("srs-in-details");this.kb=F("srs-in-details-link");this.ob=F("srs-in-unit");this.ib=F("srs-in-area");this.hb=F("srs-in-accuracy");this.ub=F("srs-out-name");this.rb=F("srs-out-change");this.tb=F("srs-out-details");this.sb=F("srs-out-details-link");this.vb=F("srs-out-unit");this.qb=F("srs-out-area");this.pb=F("srs-out-accuracy");this.b=this.c=null;this.Oa=!0;N(this.jb,"click",function(a){yb(this.G);
Eb(this.G,function(a){a.data&&(this.c=a.data,nd(this))},this);this.G.show();a.preventDefault()},!1,this);N(this.rb,"click",function(a){yb(this.G);Eb(this.G,function(a){a.data&&(this.b=a.data,nd(this))},this);this.G.show();a.preventDefault()},!1,this);this.N=new jd("srs-in-x");this.O=new jd("srs-in-y");this.Y=new jd("srs-out-x");this.Z=new jd("srs-out-y");this.mb=F("srs-in-form");N(this.mb,"submit",function(a){od(this,!0);a.preventDefault()},!1,this);this.Ua=F("srs-swap");N(this.Ua,"click",function(a){var b=
this.b;this.b=this.c;this.c=b;Y(this.N,X(this.Y));Y(this.O,X(this.Z));nd(this);a.preventDefault()},!1,this);qd(this,u(function(){this.Oa=!1;pd(this)},this))}var sd=["TransformPage"],Z=l;sd[0]in Z||!Z.execScript||Z.execScript("var "+sd[0]);for(var td;sd.length&&(td=sd.shift());)!sd.length&&m(rd)?Z[td]=rd:Z=Z[td]?Z[td]:Z[td]={};
