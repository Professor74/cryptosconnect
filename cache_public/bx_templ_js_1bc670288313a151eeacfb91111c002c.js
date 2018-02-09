
/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.js---*/
/*! jQuery v1.12.0 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.0",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=R.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;
return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.rnamespace||a.rnamespace.test(g.namespace))&&(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb,tb,ub=n.expr.attrHandle,vb=/^(?:checked|selected)$/i,wb=l.getSetAttribute,xb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?tb:sb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?xb&&wb||!vb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(wb?c:d)}}),tb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):xb&&wb||!vb.test(c)?a.setAttribute(!wb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ub[b]||n.find.attr;xb&&wb||!vb.test(b)?ub[b]=function(a,b,d){var e,f;return d||(f=ub[b],ub[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ub[b]=f),e}:ub[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),xb&&wb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):sb&&sb.set(a,b,c)}}),wb||(sb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ub.id=ub.name=ub.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:sb.set},n.attrHooks.contenteditable={set:function(a,b,c){sb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var yb=/^(?:input|select|textarea|button|object)$/i,zb=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):yb.test(a.nodeName)||zb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Ab=/[\t\r\n\f]/g;function Bb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Bb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Bb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Bb(c),d=1===c.nodeType&&(" "+e+" ").replace(Ab," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Bb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(void 0===a||"boolean"===c)&&(b=Bb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Bb(c)+" ").replace(Ab," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Cb=a.location,Db=n.now(),Eb=/\?/,Fb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Fb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Gb=/#.*$/,Hb=/([?&])_=[^&]*/,Ib=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Jb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Kb=/^(?:GET|HEAD)$/,Lb=/^\/\//,Mb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Nb={},Ob={},Pb="*/".concat("*"),Qb=Cb.href,Rb=Mb.exec(Qb.toLowerCase())||[];function Sb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Tb(a,b,c,d){var e={},f=a===Ob;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ub(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Vb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Wb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Qb,type:"GET",isLocal:Jb.test(Rb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Pb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ub(Ub(a,n.ajaxSettings),b):Ub(n.ajaxSettings,a)},ajaxPrefilter:Sb(Nb),ajaxTransport:Sb(Ob),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Ib.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Qb)+"").replace(Gb,"").replace(Lb,Rb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Mb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Rb[1]&&d[2]===Rb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Rb[3]||("http:"===Rb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Tb(Nb,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Kb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Eb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Hb.test(f)?f.replace(Hb,"$1_="+Db++):f+(Eb.test(f)?"&":"?")+"_="+Db++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Pb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Tb(Ob,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Vb(l,w,d)),v=Wb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,(b||!y)&&(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Xb(a){return a.style&&a.style.display||n.css(a,"display")}function Yb(a){while(a&&1===a.nodeType){if("none"===Xb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Yb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var Zb=/%20/g,$b=/\[\]$/,_b=/\r?\n/g,ac=/^(?:submit|button|image|reset|file)$/i,bc=/^(?:input|select|textarea|keygen)/i;function cc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||$b.test(a)?d(a,e):cc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)cc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)cc(c,a[c],b,e);return d.join("&").replace(Zb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&bc.test(this.nodeName)&&!ac.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(_b,"\r\n")}}):{name:b.name,value:c.replace(_b,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?hc():d.documentMode>8?gc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&gc()||hc()}:gc;var dc=0,ec={},fc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in ec)ec[a](void 0,!0)}),l.cors=!!fc&&"withCredentials"in fc,fc=l.ajax=!!fc,fc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++dc;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete ec[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=ec[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function gc(){try{return new a.XMLHttpRequest}catch(b){}}function hc(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var ic=[],jc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=ic.pop()||n.expando+"_"+Db++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(jc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&jc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(jc,"$1"+e):b.jsonp!==!1&&(b.url+=(Eb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,ic.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),l.createHTMLDocument=function(){if(!d.implementation.createHTMLDocument)return!1;var a=d.implementation.createHTMLDocument("");return a.body.innerHTML="<form></form><form></form>",2===a.body.childNodes.length}(),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||(l.createHTMLDocument?d.implementation.createHTMLDocument(""):d);var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var kc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&kc)return kc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(g,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function lc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=lc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0)-a.scrollTop(),c.left+=n.css(a[0],"borderLeftWidth",!0)-a.scrollLeft()),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=lc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){
n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var mc=a.jQuery,nc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=nc),b&&a.jQuery===n&&(a.jQuery=mc),n},b||(a.jQuery=a.$=n),n});
;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery-migrate.min.js---*/
/*! jQuery Migrate v1.3.0 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.3.0";var f={};a.migrateWarnings=[],!a.migrateMute&&b.console&&b.console.log&&b.console.log("JQMIGRATE: Logging is active"),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.parseJSON,s=/^\s*</,t=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=t.exec(a.trim(b)))&&g[0]&&(s.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):("#"===b&&(d("jQuery( '#' ) is not a valid selector"),b=[]),h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.parseJSON=function(a){return a?r.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var u=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return u=!0,a=d.apply(this,arguments),u=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};u||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var v=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?v.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var w=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||w.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var x=a.event.add,y=a.event.remove,z=a.event.trigger,A=a.fn.toggle,B=a.fn.live,C=a.fn.die,D=a.fn.load,E="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",F=new RegExp("\\b(?:"+E+")\\b"),G=/(?:^|\s)hover(\.\S+|)\b/,H=function(b){return"string"!=typeof b||a.event.special.hover?b:(G.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(G,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&F.test(b)&&d("AJAX events should be attached to document: "+b),x.call(this,a,H(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){y.call(this,a,H(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return d("jQuery.fn."+c+"() is deprecated"),"load"===c&&"string"==typeof arguments[0]?D.apply(this,arguments):(a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return A.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),B?B.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),C?C.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||F.test(a)||d("Global events are undocumented and deprecated"),z.call(this,a,b,c||document,e)},a.each(E.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){d("'ready' event is deprecated")}};var I=a.fn.andSelf||a.fn.addBack,J=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),I.apply(this,arguments)},a.fn.find=function(a){var b=J.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var K=a.Deferred,L=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=K(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(L,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery-migrate.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.position.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function s(t,i){return parseInt(e.css(t,i),10)||0}function n(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(a!==t)return a;var i,s,n=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),o=n.children()[0];return e("body").append(n),i=o.offsetWidth,n.css("overflow","scroll"),s=o.offsetWidth,i===s&&(s=n[0].clientWidth),n.remove(),a=i-s},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s?i.width():i.outerWidth(),height:s?i.height():i.outerHeight()}}},e.fn.position=function(t){if(!t||!t.of)return f.apply(this,arguments);t=e.extend({},t);var a,p,m,g,v,b,_=e(t.of),y=e.position.getWithinInfo(t.within),x=e.position.getScrollInfo(y),w=(t.collision||"flip").split(" "),k={};return b=n(_),_[0].preventDefault&&(t.at="left top"),p=b.width,m=b.height,g=b.offset,v=e.extend({},g),e.each(["my","at"],function(){var e,i,s=(t[this]||"").split(" ");1===s.length&&(s=l.test(s[0])?s.concat(["center"]):u.test(s[0])?["center"].concat(s):["center","center"]),s[0]=l.test(s[0])?s[0]:"center",s[1]=u.test(s[1])?s[1]:"center",e=d.exec(s[0]),i=d.exec(s[1]),k[this]=[e?e[0]:0,i?i[0]:0],t[this]=[c.exec(s[0])[0],c.exec(s[1])[0]]}),1===w.length&&(w[1]=w[0]),"right"===t.at[0]?v.left+=p:"center"===t.at[0]&&(v.left+=p/2),"bottom"===t.at[1]?v.top+=m:"center"===t.at[1]&&(v.top+=m/2),a=i(k.at,p,m),v.left+=a[0],v.top+=a[1],this.each(function(){var n,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=s(this,"marginLeft"),b=s(this,"marginTop"),T=d+f+s(this,"marginRight")+x.width,D=c+b+s(this,"marginBottom")+x.height,S=e.extend({},v),M=i(k.my,u.outerWidth(),u.outerHeight());"right"===t.my[0]?S.left-=d:"center"===t.my[0]&&(S.left-=d/2),"bottom"===t.my[1]?S.top-=c:"center"===t.my[1]&&(S.top-=c/2),S.left+=M[0],S.top+=M[1],e.support.offsetFractions||(S.left=h(S.left),S.top=h(S.top)),n={marginLeft:f,marginTop:b},e.each(["left","top"],function(i,s){e.ui.position[w[i]]&&e.ui.position[w[i]][s](S,{targetWidth:p,targetHeight:m,elemWidth:d,elemHeight:c,collisionPosition:n,collisionWidth:T,collisionHeight:D,offset:[a[0]+M[0],a[1]+M[1]],my:t.my,at:t.at,within:y,elem:u})}),t.using&&(l=function(e){var i=g.left-S.left,s=i+p-d,n=g.top-S.top,a=n+m-c,h={target:{element:_,left:g.left,top:g.top,width:p,height:m},element:{element:u,left:S.left,top:S.top,width:d,height:c},horizontal:0>s?"left":i>0?"right":"center",vertical:0>a?"top":n>0?"bottom":"middle"};d>p&&p>r(i+s)&&(h.horizontal="center"),c>m&&m>r(n+a)&&(h.vertical="middle"),h.important=o(r(i),r(s))>o(r(n),r(a))?"horizontal":"vertical",t.using.call(this,e,h)}),u.offset(e.extend(S,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,e.top+p+f+m>u&&(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,e.top+p+f+m>d&&(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,a,o=document.getElementsByTagName("body")[0],r=document.createElement("div");t=document.createElement(o?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},o&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(a in s)t.style[a]=s[a];t.appendChild(r),i=o||document.documentElement,i.insertBefore(t,i.firstChild),r.style.cssText="position: absolute; left: 10.7432222px;",n=e(r).offset().left,e.support.offsetFractions=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.position.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.form.min.js---*/
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;o>a;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var s=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:u||"POST"});t.uploadProgress&&(s.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),s.data=null;var c=s.beforeSend;return s.beforeSend=function(e,r){r.data=t.formData?t.formData:n,c&&c.call(this,e,r)},e.ajax(s)}function s(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(r){a("cannot get iframe.contentWindow document: "+r)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(r){a("Server abort: ",r," (",r.name,")"),s(k),j&&clearTimeout(j),j=void 0}}var r=f.attr2("target"),i=f.attr2("action"),o="multipart/form-data",c=f.attr("enctype")||f.attr("encoding")||o;w.setAttribute("target",p),(!u||/post/i.test(u))&&w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||u&&!/post/i.test(u)||f.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,s(D)},m.timeout));var l=[];try{if(m.extraData)for(var d in m.extraData)m.extraData.hasOwnProperty(d)&&l.push(e.isPlainObject(m.extraData[d])&&m.extraData[d].hasOwnProperty("name")&&m.extraData[d].hasOwnProperty("value")?e('<input type="hidden" name="'+m.extraData[d].name+'">').val(m.extraData[d].value).appendTo(w)[0]:e('<input type="hidden" name="'+d+'">').val(m.extraData[d]).appendTo(w)[0]);m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",s):g.addEventListener("load",s,!1),setTimeout(t,15);try{w.submit()}catch(h){var x=document.createElement("form").submit;x.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",c),r?w.setAttribute("target",r):f.removeAttr("target"),e(l).remove()}}function s(t){if(!x.aborted&&!F){if(M=n(g),M||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",s):g.removeEventListener("load",s,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(s,250);var u=M.body?M.body:M.documentElement;x.responseText=u?u.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){var t={"content-type":m.dataType};return t[e.toLowerCase()]},u&&(x.status=Number(u.getAttribute("status"))||x.status,x.statusText=u.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(y){i="parsererror",x.error=r=y||i}}catch(y){a("error caught: ",y),i="error",x.error=r=y||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,l,m,d,p,v,g,x,y,b,T,j,w=f[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(l=0;l<h.length;l++)c=e(h[l]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,p="jqFormIO"+(new Date).getTime(),m.iframeTarget?(v=e(m.iframeTarget),b=v.attr2("name"),b?p=b:v.attr2("name",p)):(v=e('<iframe name="'+p+'" src="'+m.iframeSrc+'" />'),v.css({position:"absolute",top:"-1000px",left:"-1000px"})),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(n){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},d=m.global,d&&0===e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&m.beforeSend.call(m.context,x,m)===!1)return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;y=w.clk,y&&(b=y.name,b&&!y.disabled&&(m.extraData=m.extraData||{},m.extraData[b]=y.value,"image"==y.type&&(m.extraData[b+".x"]=w.clk_x,m.extraData[b+".y"]=w.clk_y)));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?(t=new ActiveXObject("Microsoft.XMLDOM"),t.async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var u,c,l,f=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),u=t.type||this.attr2("method"),c=t.url||this.attr2("action"),l="string"==typeof c?e.trim(c):"",l=l||window.location.href||"",l&&(l=(l.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:l,success:e.ajaxSettings.success,type:u||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var m={};if(this.trigger("form-pre-serialize",[this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&t.beforeSerialize(this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var d=t.traditional;void 0===d&&(d=e.ajaxSettings.traditional);var p,h=[],v=this.formToArray(t.semantic,h);if(t.data&&(t.extraData=t.data,p=e.param(t.data,d)),t.beforeSubmit&&t.beforeSubmit(v,this,t)===!1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[v,this,t,m]),m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var g=e.param(v,d);p&&(g=g?g+"&"+p:p),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+g,t.data=null):t.data=g;var x=[];if(t.resetForm&&x.push(function(){f.resetForm()}),t.clearForm&&x.push(function(){f.clearForm(t.includeHidden)}),!t.dataType&&t.target){var y=t.success||function(){};x.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(y,arguments)})}else t.success&&x.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=x.length;o>i;i++)x[i].apply(n,[e,r,a||f,f])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,f])}}if(t.complete){var T=t.complete;t.complete=function(e,r){var a=t.context||this;T.apply(a,[e,r,f])}}var j=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}),w=j.length>0,S="multipart/form-data",D=f.attr("enctype")==S||f.attr("encoding")==S,k=n.fileapi&&n.formdata;a("fileAPI :"+k);var A,L=(w||D)&&!k;t.iframe!==!1&&(t.iframe||L)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){A=s(v)}):A=s(v):A=(w||D)&&k?o(v):e.ajax(t),f.removeData("jqxhr").data("jqxhr",A);for(var E=0;E<h.length;E++)h[E]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get(),i.length&&(u=(u||[]).concat(i))),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;p>c;c++)if(d=u[c],f=d.name,f&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if(m=e.fieldValue(d,!0),m&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;h>l;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&"undefined"!=typeof m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];f=x.name,f&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;o>i;i++)r.push({name:a,value:n[i]});else null!==n&&"undefined"!=typeof n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;n>a;a++){var i=this[a],o=e.fieldValue(i,t);null===o||"undefined"==typeof o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(0>o)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;l>f;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(t===!0&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});
;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.form.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/jquery.webForms.js---*/

$(document).ready(function() {
	$(this).addWebForms();

	$('.bx-form-block-header.collapsable', this).each(function() {
	    var $oBlockHeader = $(this);

	    $oBlockHeader.find('.bx-form-block-header-collapse i').click(function() {
            if ($oBlockHeader.hasClass('collapsed')) {
                $(this).removeClass('chevron-down').addClass('chevron-up');
                $oBlockHeader.removeClass('collapsed').next('.bx-form-fields-wrapper').fadeIn(400);
            } 
            else {
                $(this).removeClass('chevron-up').addClass('chevron-down');
                $oBlockHeader.addClass('collapsed').next('.bx-form-fields-wrapper').fadeOut(400);
            }
        });        
	});
});

(function($){
    $.fn.addWebForms = function() {
		$("input,select,textarea", this).each(function() {

			// Date/Time pickers
			if (this.getAttribute("type") == "date" || this.getAttribute("type") == "date_calendar" || this.getAttribute("type") == "datetime" || this.getAttribute("type") == "date_time" ) {
                var iYearMin = '1900';
                var iYearMax = '2100';
                var a;

                if ($(this).attr('min') && (a = $(this).attr('min').split('-')) && a.length)
                    iYearMin = a[0];
                if ($(this).attr('max') && (a = $(this).attr('max').split('-')) && a.length)
                    iYearMax = a[0];

                if (this.getAttribute("type") == "date" || this.getAttribute("type") == "date_calendar") { // Date picker

                    $(this).datepicker({
                        changeYear: true,
                        changeMonth: true,
                        dateFormat: 'yy-mm-dd',
                        defaultDate: '-22y',
                        yearRange: iYearMin + ':' + iYearMax 
                    });

                } else if(this.getAttribute("type") == "datetime" || this.getAttribute("type") == "date_time") { // DateTime picker

                    $(this).datetimepicker({
                        changeYear: true,
                        changeMonth: true,
                        dateFormat: 'yy-mm-dd'
                    });
                }

                if (window.navigator.appVersion.search(/Chrome\/(.*?) /) == -1 || parseInt(window.navigator.appVersion.match(/Chrome\/(\d+)\./)[1], 10) < 24)
                    if( this.getAttribute("allow_input") == null)
                        $(this).attr('readonly', 'readonly');

			}

			// Single file selector
			if($(this).is(".form_input_file.bx-def-font-inputs[type = 'file'][multiplyable != 'true']")) {
				$('<div class="bx-btn form_input_multiply_path"></div>').insertAfter($(this).parents('.bx-btn:first'));

				$(this).change(function() {
	            	$(this).parents('.bx-btn:first').nextAll('.form_input_multiply_path:first').html($(this).val());
	            });
			}

			// Multiplyable
			if (this.getAttribute('multiplyable') == 'true') {
			   $(this).multiplyable();
			}
			
			if (this.getAttribute('deletable') == 'true') {
			    $(this).inputDeletable();
			}
			
			// Counter for textareas
            if (this.getAttribute('counter') == 'true') {
                
                function updateCounter() {
                    if( $area.val() )
                        $counter.show( 300 );
                    else
                        $counter.hide( 300 );
                    
                    $counterCont.html( $area.val().length );
                }
                
                var $area = $(this);
                $area
                .parents('td:first')
                    .append(
                        '<div class="counter" style="display:none;">' + _t('_Counter') + ': <b></b></div>' +
                        '<div class="clear_both"></div>'
                    );
                
                var $counter     = $area.parent().parent().children('div.counter');
                
                var $counterCont = $counter.children('b');
                
                updateCounter();
                $area.change( updateCounter ).keyup( updateCounter );
            }
			
            // DoubleRange
            if(this.getAttribute("type") == "doublerange" || this.getAttribute("type") == "slider" || this.getAttribute("type") == "range") {
			    
				var cur = $(this);
				
				var $slider = $("<div></div>").insertAfter(cur);
				
				$slider.addClass(cur.attr('class'));
				
				cur.css({ position: "absolute", opacity: 0, top: "-1000px", left: "-1000px" });
				
				var iMin = cur.attr("min") ? parseInt(cur.attr("min"), 10) : 0;
				var iMax = cur.attr("max") ? parseInt(cur.attr("max"), 10) : 100;
				var sRangeDv = cur.attr("range-divider") ? cur.attr("range-divider") : '-';

                var oOptions = {
                    range: cur.attr("type") == "doublerange" ? true : false,
					min: iMin,
					max: iMax,
					step: parseInt(cur.attr("step")) | 1,
					change: function(e, ui) {
                        if (cur.attr("type") == "doublerange")
					        cur.val( ui.values[0] + sRangeDv + ui.values[1] );
                        else
                            cur.val( ui.value );

					    if(typeof(cur.attr("onchange")) != 'undefined' && cur.attr("onchange").length)
					    	eval(cur.attr("onchange"));
					},
					slide: function(e, ui) {
					    $(ui.handle).html(ui.value);
					}
				};

                var values;
                if (cur.attr("type") == "doublerange") {
                    values = cur.val().split(sRangeDv, 2); // get values
                    
                    if (typeof(values[0]) != 'undefined' && values[0].length)
                        values[0] = parseInt(values[0]);
                    else
                        values[0] = iMin;
                    
                    if (typeof(values[1]) != 'undefined' && values[1].length)
                        values[1] = parseInt(values[1]);
                    else
                        values[1] = iMax;

                    oOptions['values'] = values;
                } else {
                    oOptions['value'] = cur.val();
                }

				$slider.slider(oOptions);
				                
                $('.ui-slider-handle', $slider).each(function(i){
                    if (cur.attr("type") == "doublerange")
                        $(this).html(values[i]);
                    else
                        $(this).html(cur.val());
                });

			}
		});
        return this;
    };
    
    $.fn.inputDeletable = function(oDeleteAlso) {        
        return $(this).each( function() {
            var $eInput = $(this);

            // insert "Remove" button
            var $minusImg = $('<button class="bx-btn form_input_multiply_remove" title="' + _t('_Remove') + '" type="button"><i class="multiply_remove_button sys-icon minus-circle"></i></button>')
            .click( function() {
                var eParent = $eInput.parent(':not(td)');
                
                $(this).remove(); // remove button
                $eInput.remove(); // remove input
                eParent.remove(); // remove parent (if present)
                
                if (typeof oDeleteAlso != 'undefined')
                    $(oDeleteAlso).remove();
                
                // Note: Do not delete parent only. It is present not everytime
            })
            .insertAfter($eInput.parent());
        });
        
        return this;
    };

    $.fn.multiplyable = function() {
        $(this).each(function() {
            var $input = $(this);
            var $inputParent = $input.parent();
            var $wrapper = $inputParent.clone().children().remove().end();
            var $fOnChange = function() {
            	$(this).parents('.bx-btn:first').nextAll('.form_input_multiply_path:first').html($(this).val());
            };

            $input.change($fOnChange);

            // insert "Other" button
            if ($input.attr('add_other') == 'true' && !$inputParent.parent().find('.multiply_other_button').length) {
                var $otherImg = $('<button class="bx-btn form_input_multiply_other" title="' + _t('_add_other') + '" type="button"><i class="multiply_other_button sys-icon folder"></i></button>')
                .insertAfter($inputParent)
                .click(function(){
                    var $trc = $($inputParent).nextAll('div.clear_both:last');
                    $trc = $trc.length ? $trc : $inputParent; // just if div.clear_both doesn't exist
                    
                    var $clearBoth = $('<div class="clear_both"></div>').insertAfter($trc);
                    
                    $wrapper
                    .clone()
                        .append('<input type="text" class="form_input_text" name="' + $input.attr('name') + '" />')
                        .insertAfter($trc)
                        .children(':first')
                            .inputDeletable($clearBoth)
                            .get(0)
                                .focus();
                });
            }

            // check if "Add" button is already added
            if ($inputParent.parent().find('.multiply_add_button').length)
                return;

            // insert "Add" button
            var $plusImg = $('<button class="bx-btn form_input_multiply_add" title="' + _t('_add') + '" type="button"><i class="multiply_add_button sys-icon plus-circle"></i></button>')
            .insertAfter($inputParent)
            .click(function(){
                var $trc = $($inputParent).nextAll('div.clear_both:last');
                $trc = $trc.length ? $trc : $inputParent; // just if div.clear_both doesn't exist
                
                var $clearBoth = $('<div class="bx-btn form_input_multiply_path"></div><div class="clear_both"></div>').insertAfter($trc);
                
                $inputParent
                .clone()
                    .children()
                        .removeAttr('id') // TODO: set unique id
                    .end()
                    .each(function(){
                        var $input = $('input', this);
                        if ($input.length && ($input.attr('type') == 'file' || $input.attr('type') == 'text'))
                            $input.val('').change($fOnChange);
                    })
                    .insertAfter($trc)
                    .children(':first')
                        .inputDeletable($clearBoth)
                        .get(0)
                            .focus();
            });

            if($input.attr('type') == 'file')
            	$('<div class="bx-btn form_input_multiply_path"></div>').insertAfter($inputParent.nextAll('.bx-btn.form_input_multiply_add:first, .bx-btn.form_input_multiply_remove:first'));

            // check if "clear_both" is needed after nely added button(s)
            if ($inputParent.parent().find('.bx-btn > .multiply_add_button, .bx-btn > .multiply_other_button').length)
            	$('<div class="clear_both"></div>').insertAfter($inputParent.parent().find('.bx-btn:last'));
        });
        
        return this;
    };
})(jQuery);



(function($){
    $.fn.addEmojiInput = function(o) {
        var aDefaults = {
            icon: 'smile-o',
            width: 'undefined' != typeof(o) && 'undefined' != typeof(o.wrapper) ? $(o.wrapper).innerWidth() : 280,
            height: 'undefined' != typeof(o) && 'undefined' != typeof(o.wrapper) ? $(o.wrapper).innerHeight() - 10 : 250,
            button: false
        };
        var aOptions = $.extend({}, aDefaults, o);

		$(this).filter('input').each(function() {

            var e = $(this);
            var eWrapper = e.parents('.input_wrapper');
        
            // don't enable emoji input method twice
            if (eWrapper.find('.bx-form-input-emoji').size())
                return;

            // enable emoji for the input element
            e.emojiPicker(aOptions);

            // don't process for the emoji enabled devices
            if (!eWrapper.find('.emojiPickerIconWrap').size())
                return;

            // add "smile" icon to the input
            eWrapper.append('<a href="javascript:void(0);"><div class="bx-form-input-emoji bx-def-font-grayed"><i class="sys-icon ' + aOptions.icon + '"></i></div></a>')

            // attach show emoji popup input for the added "smile" icon
            eWrapper.find('.bx-form-input-emoji').on('click', function () {
                e.emojiPicker('toggle');

                // move emoji picker to the wrapper if it is specified in the options
                if ('undefined' != typeof(aOptions.wrapper)) {
                    setTimeout(function () {
                        var ePicker = e.data('emojiPicker').$picker;
                        if (!ePicker.is(':hidden')) {
                            ePicker.detach().appendTo($(aOptions.wrapper));
                            ePicker.css({
                                position: 'absolute',              
                                top: 0, 
                                left: 0, 
                                width: '100%', 
                                height: $(o.wrapper).innerHeight() - 10,
                                'z-index': 1
                            });
                            $(aOptions.wrapper).css({'overflow-y':'hidden'});
                            glBxAddEmojiInputScrollPos = $(aOptions.wrapper).scrollTop();
                            $(aOptions.wrapper).scrollTop(0);
                            if ('function' === typeof(aOptions.onshow))
                                aOptions.onshow.apply(e, [ePicker]);
                        }
                        else {
                            $(aOptions.wrapper).css({'overflow-y':'scroll'});
                            $(aOptions.wrapper).scrollTop('undefined' != typeof(glBxAddEmojiInputScrollPos) ? glBxAddEmojiInputScrollPos : 0);
                            if ('function' === typeof(aOptions.onhide))
                                aOptions.onhide.apply(e, [ePicker]);
                        }
                    }, 110);
                }
            });

        });
        
        return this;
    };
})(jQuery);


(function($){
    $.fn.formsToggleHtmlEditor = function() {
		$(this).each(function() {
			if(!tinyMCE)
				return;

			var sCookieKey = 'bx_mce_editor_disabled';
            if ($(this).is(':hidden')) {
                tinyMCE.execCommand('mceRemoveEditor', false, this.id);

                $.cookie(sCookieKey, 1, {path: '/', expires: 999});
            }
            else {
            	jQuery('#' + this.id).tinymce(tinyMCE.activeEditor["settings"]);

                $.removeCookie(sCookieKey, {path: '/'});
            }
                
        });
        return this;
    };
})(jQuery);
;
/*--- END: /var/www/html/cryptos/inc/js/jquery.webForms.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/jquery.dolPopup.js---*/
/**
 * Copyright (c) BoonEx Pty Limited - http://www.boonex.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 *
 * @defgroup    TridentCore Trident Core
 * @{
 */

(function($) {

    $.fn.dolPopupDefaultOptions = {
        closeOnOuterClick: true,
        closeElement: '.bx-popup-element-close', // link to element which will close popup
        position: 'centered', // | 'absolute' | 'fixed' | event | element,
        fog: {color: '#000', opacity: .7}, // {color, opacity},
        pointer: false, // {el:(string_id|jquery_object), align: (left|right|center)},
        left: 0, // only for fixed or absolute
        top: 0, // only for fixed
        moveToDocRoot: true,
        onBeforeShow: function () {},
        onShow: function () {},
        onBeforeHide: function () {},
        onHide: function () {},
        speed: 200
    }; 

    $.fn.dolPopupDefaultPointerOptions = {
        align: 'right',
        offset: '0 0',
        offset_pointer: '0 0'
    };

    $.fn.dolPopup = function(options) {
        var options = options || {};
        var o = $.extend({}, $.fn.dolPopupDefaultOptions, options);

        if (false != o.pointer) {
            o.fog = false;
            o.pointer = $.extend({}, $.fn.dolPopupDefaultPointerOptions, $(document).data('bx-popup-options') ? $(document).data('bx-popup-options') : {}, o.pointer);
        }

        if (o.fog && !$('#bx-popup-fog').length) {
            $('<div id="bx-popup-fog" class="bx-def-z-index-overlay" style="display: none;">&nbsp;</div>')
                .prependTo('body');
        }

        $('#bx-popup-fog').css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: o.fog.opacity,
            backgroundColor: o.fog.color,
            '-webkit-backface-visibility': 'hidden'
        });
        
        $(window).on('resize.popupFog', function () {
            $('#bx-popup-fog').css({
                width: $(window).width(),
                height: $(window).height()
            });
        });

        return this.each(function() {
            var $el = $(this);

            $el.addClass('bx-def-z-index-modal');

            // element must have id
            if (!$el.attr('id'))
                return false;

            if ($el.is(":visible")) { // if popup is shown - hide it
                $el.dolPopupHide();
                return true;
            } 

            if (false != o.pointer)
                $el.addClass('bx-popup-with-pointer'); // to make all popups with pointer not responsive add: .removeClass('bx-popup-responsive')

            // default style for correct positioning
            $el.css({
                display: 'block',
                visibility: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0
            });

            if (o.moveToDocRoot)
                $el.detach().appendTo('body');

            setTimeout(function() { // timeout is needed for some browsers to render element

                if (o.fog)
                    _dolPopupLockScreen(true);

                // remove any transitions before setting popup position
                $el.removeClass('bx-popup-transitions bx-popup-inactive'); 

                // set popup position
                $el._dolPopupSetPosition(o);

                if (!$el.hasClass('bx-popup-applied')) { // do this only once
                    $el.addClass('bx-popup-applied');

                    // save options for element
                    $el.data('bx-popup-options', o);

                    // attach event for "close element"
                    if (o.closeElement) {
                        $(o.closeElement, $el)
                            .css('cursor', 'hand')
                            .click(function() {
                                $el.dolPopupHide();
                            });
                    }

                    // attach event for outer click checking
                    if (o.closeOnOuterClick) {
                        var fCallback = function(e) {
                            if ($el.hasClass('bx-popup-applied') && $el.is(':visible')) {
                                if ($(e.target).parents('#' + $el.attr('id')).length == 0) {
                                    $el.dolPopupHide();
                                }
                            }

                            return true;
                        }

                        $(document).on({
                            click: fCallback,
                            touchend: fCallback
                        });
                    }
                }

                o.onBeforeShow($el);

                // transition effect

                if (o.moveToDocRoot) { 
                    // we need to disable classes with "max-height:100%", since popup isn't in the root element, so animation will not work when moveToDocRoot option is set 
                    $el.addClass('bx-popup-inactive');
                    setTimeout(function () {
                        $el.addClass('bx-popup-transitions bx-popup-active');
                    }, 10);
                }

                // show popup
                $el.css({display: 'block', visibility: 'visible'});
                if (o.fog) {
                    if (o.speed > 0)
                        $('#bx-popup-fog').fadeIn(o.speed);
                    else
                        $('#bx-popup-fog').show();
                }
                
                setTimeout(function () {
                    o.onShow($el);                    
                    $el.find('input[type=text]:first').focus(); // put cursor to the first input element
                }, o.speed);

            }, 100);
        });
    };

    $.fn.dolPopupInline = function(oOptionsCustom) {
    	if(typeof(oOptionsCustom) == 'undefined' || typeof(oOptionsCustom) != 'object')
            oOptionsCustom = {};

    	var oOptionsTotal = $.extend({}, oOptionsCustom, {
        	position: 'fixed',
        	top: '0px',
        	fog: false,
        	closeElement: '.bx-popup-close',
        	onBeforeShow: function(oPopup) {
        		if(typeof(oOptionsCustom.onBeforeShow) == 'function')
        			oOptionsCustom.onBeforeShow(oPopup);

        		$('body').addClass('bx-popup-inline-holder');
        	},
        	onBeforeHide: function(oPopup) {
        		if(typeof(oOptionsCustom.onBeforeHide) == 'function')
        			oOptionsCustom.onBeforeHide(oPopup);

        		$('body').removeClass('bx-popup-inline-holder');
        	},
        	onHide: function(oPopup) {
        		if(typeof(oOptionsCustom.onHide) == 'function')
        			oOptionsCustom.onHide(oPopup);

        		if(oOptionsCustom.removeOnClose == true)
        			$(oPopup).remove();
        	}
        });

    	return this.each(function() {
    		$(this).addClass('bx-popup-inline').dolPopup(oOptionsTotal);
    	});
    };

    $.fn.dolPopupHide = function(options) { 

        if ('undefined' == typeof(options) || 'object' != typeof(options))
            options = {};

        return this.each(function() {
            var $el = $(this);

            if (!$el.hasClass('bx-popup-applied'))
                return false;

            if (!$el.is(':visible') || 'hidden' == $el.css('visibility') || 'none' == $el.css('display'))
                return false;            

            var o = $.extend({}, $el.data('bx-popup-options'), options);

            if (!o)
                return false;

            $(window).off('resize.popupWindow');
            $(window).off('resize.popupPointer');
            $(window).off('resize.popupFog');

            o.onBeforeHide($el);

            $el.removeClass('bx-popup-active').addClass('bx-popup-inactive');

            if (o.speed > 0) {

                if (o.fog)
                    $('#bx-popup-fog').fadeOut(o.speed);

                setTimeout(function () {
                    $el.hide().removeClass('bx-popup-applied bx-popup-inactive bx-popup-transitions');
                    o.onHide($el);
                }, o.speed);

            } else {

                if (o.fog)
                    $('#bx-popup-fog').hide();

                $el.hide(function() {
                	o.onHide($el);
                });
            }
            
            _dolPopupLockScreen(false);
        });
    };

    $.fn.dolPopupImage = function(sUrl, sLoadingElement) {

        return this.each(function() {

            var ePopup = $(this);
            var k = .95,
                w = $(window).width(),
                h = $(window).height(),
                eImg = new Image();

            if (!ePopup.find('img').size())
                return;

            ePopup.filter('.bx-popup-wrapper').addClass('bx-popup-image-wrapper');

            eImg.src = sUrl;

            if ('undefined' != typeof(sLoadingElement))
                bx_loading (sLoadingElement, true);

            $(eImg).on('load', function () {

                if ('undefined' != typeof(sLoadingElement))
                    bx_loading (sLoadingElement, false);

                ePopup.find('img').attr('src', sUrl);

                if ('undefined' != typeof(window.matchMedia) && window.matchMedia("(max-width:720px)").matches)
                    k = 1.0;

                // fit image into the browser window
                if (eImg.width < w * k && eImg.height < h * k) {
                    ePopup.find('img').css({
                        width: 'auto',
                        height: 'auto'
                    });
                }
                else if ((w * k - eImg.width) < (h * k - eImg.height)) {
                    ePopup.find('img').css({
                        width: '' + (eImg.width > w * k ? parseInt(w * k) : eImg.width) + 'px',
                        height: 'auto'
                    }).addClass('bx-constrain-width');
                } else {
                    ePopup.find('img').css({
                        width: 'auto',
                        height: '' + (eImg.height > h * k ? parseInt(h * k) : eImg.height) + 'px'
                    }).addClass('bx-constrain-height');
                }

                // show popup
                ePopup.dolPopup();

                // hide popup upon clicking/tapping on the image
                var fCallback = function (e) {
                    e.stopPropagation();
                    ePopup.dolPopupHide();
                };
                ePopup.find('img').on({
                    click: fCallback,
                    touchend: fCallback
                });

            });
        });
    };

    $.fn.dolPopupConfirm = function(options) {
    	var oCPopup = $('#bx-popup-confirm');

    	if(options.message)
    		oCPopup.find('.popup_confirm_text').html(options.message);

    	oCPopup.find('.popup_confirm_yes').bind('click', function(event) {
            event.stopPropagation();

			if(options.onClickYes && typeof(options.onClickYes) == 'function')
				options.onClickYes(oCPopup);

			oCPopup.dolPopupHide();
		});

		oCPopup.find('.popup_confirm_no').bind('click', function(event) {
            event.stopPropagation();

			if (options.onClickNo && typeof(options.onClickNo) == 'function')
				options.onClickNo(oCPopup);

			oCPopup.dolPopupHide();
		});

		var fOnHide = options.onHide;
		options.onHide = function(oPopup) {
			if(typeof(fOnHide) == 'function')
				fOnHide(oCPopup);

			oCPopup.find('.bx-btn').unbind('click');
		};

		oCPopup.dolPopup(options);
    };

    $.fn.dolPopupPrompt = function(options) {
    	var oPPopup = $('#bx-popup-prompt');

    	oPPopup.setValue = function(mixedValue) {
    		return oPPopup.find('[name="bx-popup-prompt-value"]').val(mixedValue);
    	};

    	oPPopup.getValue = function() {
    		return oPPopup.find('[name="bx-popup-prompt-value"]').val();
    	};   		

    	if(options.message)
    		oPPopup.find('.popup_prompt_text').html(options.message);

    	oPPopup.find('.popup_prompt_ok').bind('click', function() {
			if(options.onClickOk && typeof(options.onClickOk) == 'function')
				options.onClickOk(oPPopup);

			oPPopup.dolPopupHide();
		});

		oPPopup.find('.popup_prompt_cancel').bind('click', function() {
			if(options.onClickCancel && typeof(options.onClickCancel) == 'function')
				options.onClickCancel(oPPopup);

			oPPopup.dolPopupHide();
		});

		var fOnHide = options.onHide;
		options.onHide = function(oPopup) {
			if(typeof(fOnHide) == 'function')
				fOnHide(oPPopup);

			oPPopup.setValue('');
			oPPopup.find('.bx-btn').unbind('click');
		};

		oPPopup.dolPopup(options);
    };

    $.fn._dolPopupSetPosition = function(options) {

        var o = $.extend({}, $.fn.dolPopupDefaultOptions, options);

        if (undefined != o.pointer && false != o.pointer)
            o.pointer = $.extend({}, $.fn.dolPopupDefaultPointerOptions, $(document).data('bx-popup-options') ? $(document).data('bx-popup-options') : {}, o.pointer);

        return this.each(function() {
            var $el = $(this);
            
            if (o.pointer != false) {                
                
                var yOffset = 3;
                var ePointAt = 'string' == o.pointer.el ? $(o.pointer.el) : o.pointer.el;
                if (!ePointAt)
                    ePointAt = $('body');

                var aOffset = ('' + o.pointer.offset).split(' ', 2);
                var aOffsetPointer = ('' + o.pointer.offset_pointer).split(' ', 2);
                if (undefined == aOffset[0] || undefined == aOffset[1])
                    aOffset = [0, 0];
                if (undefined == aOffsetPointer[0] || undefined == aOffsetPointer[1])
                    aOffsetPointer = [0, 0];

                $el.position({
                    of: ePointAt,
                    my: o.pointer.align + '+' + parseInt(aOffset[0]) + ' top+' + yOffset + '+' + parseInt(aOffset[1] - 0),
                    at: o.pointer.align + ' bottom',
                    collision: 'flip none'
                });

                $el.find('.bx-popup-box-pointer').css('display', 'block').position({
                    of: ePointAt,
                    my: 'center+' + (parseInt(aOffsetPointer[0]) + parseInt(aOffset[0])) + ' top+' + yOffset + '+' + (parseInt(aOffsetPointer[1]) + parseInt(aOffset[1]) + 0),
                    at: 'center bottom'
                });

                $(window).on('resize.popupPointer', function() {
                    $el.position({
                        of: ePointAt,
                        my: o.pointer.align + '+' + parseInt(aOffset[0]) + ' top+' + yOffset + '+' + parseInt(aOffset[1]),
                        at: o.pointer.align + ' bottom',
                        collision: 'flip none'
                    });
                });

            } else if (o.position == 'fixed' || o.position == 'absolute') {

                $el.css({
                    position: o.position,
                    left: o.left,
                    top: o.top
                });

            } else if (o.position == 'centered') {

                $el.position({
                    of: window,                    
                    my: 'center center+' + ($el.outerHeight() > $(window).height() ? parseInt(($el.outerHeight() - $(window).height()) / 2) : '0'),
                    at: 'center center',
                    collision: 'none none'
                });

                // attach window resize event
                $(window).on('resize.popupWindow', function() {

                    $el.position({
                        of: window,
                        my: 'center center+' + ($el.outerHeight() > $(window).height() ? parseInt(($el.outerHeight() - $(window).height()) / 2) : '0'),
                        at: 'center center',
                        collision: 'none none'
                    });
                });

            } else if (typeof o.position == 'object') {

                $el.position({
                    of: o.position,
                    my: 'center top',
                    at: 'center bottom',
                    collision: 'flip flip'
                });

            }
        });
    };

    function _getScrollbarWidth () {
        if ($(document.body).height() <= $(window).height()) {
            return 0;
        }

        var outer = document.createElement("div"),
            inner = document.createElement("div"),
            widthNoScroll,
            widthWithScroll;

        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);

        widthNoScroll = outer.offsetWidth;

        // Force scrollbars
        outer.style.overflow = "scroll";

        // Add innerdiv
        inner.style.width = "100%";
        outer.appendChild(inner);

        widthWithScroll = inner.offsetWidth;

        // Remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    };

    function _dolPopupLockScreen (bLock) {
        var eBody = $(document.body),
            eBodyHtml = $("html, body"),
            iPaddingRight = parseInt(eBody.css("padding-right")) + ((bLock ? 1 : -1) * _getScrollbarWidth());

        eBody.css("padding-right", iPaddingRight + "px");
        bLock ? eBodyHtml.addClass('bx-popup-lock') : eBodyHtml.removeClass('bx-popup-lock');
    };

})(jQuery);

/** @} */
;
/*--- END: /var/www/html/cryptos/inc/js/jquery.dolPopup.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/jquery.dolRetina.js---*/
(function( $ ){
	$.fn.dolRetina = function(sRetinaPart) {
		var oSettings = {'retina_part': '-2x'};
		if(sRetinaPart) 
			jQuery.extend(oSettings, { 'retina_part': sRetinaPart });

		if(window.devicePixelRatio >= 2) {
			this.each(function(index, oElement) {
				if(!$(oElement).attr('src')) 
					return;

				var sSrcNew = '';
				if(!$(oElement).attr('src-2x')) {
					var oCheckForRetina = new RegExp("(.+)(" + oSettings['retina_part']+"\\.\\w{3,4})");
					if(oCheckForRetina.test($(oElement).attr('src'))) 
						return;

					var sSrcNew = $(oElement).attr('src').replace(/(.+)(\.\w{3,4})$/, "$1" + oSettings['retina_part'] + "$2");
				}
				else
					sSrcNew = $(oElement).attr('src-2x');

				if(!sSrcNew)
					return;

				$.ajax({url: sSrcNew, type: "HEAD", success: function() {
					$(oElement).attr('src', sSrcNew);
				}});
			});
		}
		return this;
	};
})( jQuery );;
/*--- END: /var/www/html/cryptos/inc/js/jquery.dolRetina.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/jquery.float_info.js---*/
/*
* Floating description plugin.
* Just add float_info attribute to your element.
*/

$(document).ready(function() {
    
    // if float_info element doesn't exist
    if (!$('#float_info').length) {
        
        //create the element in the root of body
        $('body').prepend(
            $('<div id="float_info"></div>').css({
                display: 'none',
                position: 'absolute',
                zIndex: 1010
            })
        );
    }
    
    var $tip = $('#float_info');
    var funcShowTooltip = function ($t) {
        $tip       
            .html($t.attr('float_info'))
            .position({
                my: "left center",
                at: "right center",
                of: $t 
            })
            .show();    
    };

    // for touch events, since there is no mousemove in touch devices
    $('.bx-form-info .sys-icon[float_info],.bx-form-error .sys-icon[float_info]').on('click', function (e) {
        funcShowTooltip($(this));
    });

    // passive listen of mouse moves
    $('body').mousemove(function(e) {
        var $t = $(e.target);
        if ('undefined' == typeof $t.attr('float_info') || !$t.attr('float_info').length) 
            $tip.css({'top':'-9999px'}); // hide
        else
            funcShowTooltip($t);
    });    
    
});
;
/*--- END: /var/www/html/cryptos/inc/js/jquery.float_info.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.jfeed.js---*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('2.1b=a(b){b=2.N({w:x,H:x,G:1a,v:x,F:x},b);h(b.w){$.19({u:\'18\',w:b.w,H:b.H,G:b.G,17:(2.P.O)?"6":"4",v:a(4){f i=k E(4);h(2.S(b.v))b.v(i)},16:a(15,R,e){h(2.S(b.F))b.F(R,e)}})}};a E(4){h(4)3.Q(4)};E.s={u:\'\',m:\'\',d:\'\',c:\'\',j:\'\',Q:a(4){h(2.P.O){f D=k 14("13.12");D.11(4);4=D}h(2(\'8\',4).A==1){3.u=\'z\';f t=k B(4)}L h(2(\'i\',4).A==1){3.u=\'10\';f t=k C(4)}h(t)2.N(3,t)}};a p(){};p.s={d:\'\',c:\'\',j:\'\',l:\'\',o:\'\'};a C(4){3.r(4)};C.s={r:a(4){f 8=2(\'i\',4).9(0);3.m=\'1.0\';3.d=2(8).5(\'d:g\').6();3.c=2(8).5(\'c:g\').q(\'M\');3.j=2(8).5(\'Z:g\').6();3.y=2(8).q(\'4:Y\');3.l=2(8).5(\'l:g\').6();3.n=k K();f i=3;2(\'X\',4).J(a(){f 7=k p();7.d=2(3).5(\'d\').9(0).6();7.c=2(3).5(\'c\').9(0).q(\'M\');7.j=2(3).5(\'W\').9(0).6();7.l=2(3).5(\'l\').9(0).6();7.o=2(3).5(\'o\').9(0).6();i.n.I(7)})}};a B(4){3.r(4)};B.s={r:a(4){h(2(\'z\',4).A==0)3.m=\'1.0\';L 3.m=2(\'z\',4).9(0).q(\'m\');f 8=2(\'8\',4).9(0);3.d=2(8).5(\'d:g\').6();3.c=2(8).5(\'c:g\').6();3.j=2(8).5(\'j:g\').6();3.y=2(8).5(\'y:g\').6();3.l=2(8).5(\'V:g\').6();3.n=k K();f i=3;2(\'7\',4).J(a(){f 7=k p();7.d=2(3).5(\'d\').9(0).6();7.c=2(3).5(\'c\').9(0).6();7.j=2(3).5(\'j\').9(0).6();7.l=2(3).5(\'U\').9(0).6();7.o=2(3).5(\'T\').9(0).6();i.n.I(7)})}};',62,74,'||jQuery|this|xml|find|text|item|channel|eq|function|options|link|title||var|first|if|feed|description|new|updated|version|items|id|JFeedItem|attr|_parse|prototype|feedClass|type|success|url|null|language|rss|length|JRss|JAtom|xmlDoc|JFeed|failure|cache|data|push|each|Array|else|href|extend|msie|browser|parse|msg|isFunction|guid|pubDate|lastBuildDate|content|entry|lang|subtitle|atom|loadXML|XMLDOM|Microsoft|ActiveXObject|xhr|error|dataType|GET|ajax|true|getFeed'.split('|')))
;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.jfeed.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/jquery.dolRSSFeed.js---*/
// jQuery plugin - Dolphin RSS Aggregator
(function($){
	$.fn.dolRSSFeed = function(sForceUrl) {
		return this.each( function(){
			
			var $Cont = $(this);
			var iRSSID = $Cont.attr( 'rssid' );
			if( !iRSSID && sForceUrl == undefined )
				return false;
			
			var iMaxNum = parseInt( $Cont.attr( 'rssnum' ) || 0 );
			var iMemID  = parseInt( $Cont.attr( 'member' ) || 0 );

			var sFeedURL = (sForceUrl != undefined) ? sForceUrl : site_url + 'get_rss_feed.php?ID=' + iRSSID + '&member=' + iMemID;

			$Cont.bx_loading(true);

            $.getFeed( {
				url: sFeedURL,
				success: function(feed) {

					if (feed != undefined && feed.items) {
						var sCode =
							'<div class="rss_feed_wrapper bx-def-bc-margin">';
						var sTarget, iCount = 0;
						for( var iItemId = 0; iItemId < feed.items.length; iItemId ++ ) {
							var item = feed.items[iItemId];
							var sDate = '', oDate, a;

                            if (null != (a = item.updated.match(/(\d+)-(\d+)-(\d+)T(\d+):(\d+):(\d+)Z/))) {
                                oDate = new Date( a[1], a[2]-1, a[3], a[4], a[5], a[6], 0 );
                                sDate = oDate.toLocaleString();
                            } else if (item.updated.length > 0) {
    							oDate = new Date(item.updated.replace(/z$/i, "-00:00"));
                                sDate = isNaN(oDate) ? '' : oDate.toLocaleString();
                            }

                            sTarget = '';
                            if (item.link.substring(0, site_url.length) != site_url) // open external links in new window
                                sTarget = 'target="_blank"';
                            
							sCode +=
								'<hr class="bx-def-hr bx-def-margin-sec-top bx-def-margin-sec-bottom" />' +
								'<div class="rss_item_wrapper">' +
									'<div class="rss_item_header bx-def-font-h2">' +
										'<a href="' + item.link + '" ' + sTarget + '>' + item.title + '</a>' +
									'</div>' +
									'<div class="rss_item_desc">' + item.description + '</div>' +
									'<div class="rss_item_info bx-def-font-small bx-def-font-grayed">' +
										'<span>' +
											sDate +
										'</span>' +
									'</div>' +
								'</div>';
							
							iCount ++;
							if( iCount == iMaxNum )
								break;
						}
						
                        sTarget = '';
                        if (feed.link.substring(0, site_url.length) != site_url) // open external links in new window
                            sTarget = 'target="_blank"';

						sCode +=
							'</div>' +
                            
                            '<div class="rss_read_more bx-def-padding-left bx-def-padding-right">' +
                                '<a href="' + feed.link + '" ' + sTarget + ' class="rss_read_more_link">' + feed.title + '</a>' +
                            '</div>' +
                            
                            '<div class="clear_both"></div>';
						
						$Cont.html( sCode );
					}
				}
			} );
			
		} );
	};
})(jQuery);
;
/*--- END: /var/www/html/cryptos/inc/js/jquery.dolRSSFeed.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/common_anim.js---*/
$.fn.bx_anim = function(action, effect, speed, h) {    
   return this.each(function() {   		
   		var sFunc = '';
   		var sEval;

   		if (speed == 0)
   			effect = 'default';
   			
  		switch (action) {
  			case 'show':
  				switch (effect) {
  					case 'slide': sFunc = 'slideDown'; break;
  					case 'fade': sFunc = 'fadeIn'; break;
  					default: sFunc = 'show';
  				}  				
  				break;
  			case 'hide':
  				switch (effect) {
  					case 'slide': sFunc = 'slideUp'; break;
  					case 'fade': sFunc = 'fadeOut'; break;
  					default: sFunc = 'hide';
  				}  				
  				break;  				
  			default:
  			case 'toggle':
  				switch (effect) {
  					case 'slide': sFunc = 'slideToggle'; break;
  					case 'fade': sFunc = ($(this).filter(':visible').length) ? 'fadeOut' : 'fadeIn'; break;
  					default: sFunc = 'toggle';
  				}  				  			  				
  		}
  		
  		if ((0 == speed || undefined == speed) && undefined == h) {
  			sEval = '$(this).' + sFunc + '();';
  		}
  		else if ((0 == speed || undefined == speed) && undefined != h) {
  			sEval = '$(this).' + sFunc + '(); $(this).each(h);';
  		}
  		else {
  			sEval = '$(this).' + sFunc + "('" + speed + "', h);";
  		}
  		eval(sEval);
  		
  		return this;
   });  
};

$.fn.bx_loading = function(bShow, sParentSelector) {
    var iWidth = 0, iHeight = 0, iMinHeight = 0;
    var oParent = null;
    var sLoading = 'sys-loading', sLoadingIcon = 'sys-loading-icon';

    if(sParentSelector != undefined)
        oParent = $(sParentSelector);

    return this.each(function() {
        var oLoading = $(this);
        if(oLoading.find('.' + sLoading).length > 0)
        	oLoading = oLoading.find('.' + sLoading);
        else if(!oLoading.is('.' + sLoading))
        	oLoading = oLoading.append('<div class="' + sLoading + '"></div>').find('.' + sLoading);

        var oLoadingIcon = oLoading.find('.' + sLoadingIcon);
        if(!oLoadingIcon.is('.' + sLoadingIcon))
        	oLoadingIcon = oLoading.append(
        		'<div class="sys-loading-smog"></div>' + 
        		'<div class="' + sLoadingIcon + '">' + 
        			'<div class="spinner bx-def-margin-topbottom bx-def-margin-sec-leftright"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>' + 
        	    '</div>').find('.' + sLoadingIcon);

        if(bShow == undefined)
        	bShow = !oLoading.is(':visible');

        if(bShow) {
        	oParent = oParent != null ? oParent : oLoading.parent();

        	if(oParent.children(':not(.' + sLoading + ')').length > 0) {
        		iWidth = oParent.outerWidth();
                iHeight = oParent.outerHeight();
                iMinHeight = oLoadingIcon.outerHeight() + 20;

                oLoading.width(iWidth);
    			oLoading.height(iHeight > iMinHeight ? iHeight : iMinHeight);

    			oLoadingIcon.css('left', (oLoading.outerWidth() - parseInt(oLoadingIcon.css('width')))/2);
        	}
        	else
        		oLoading.addClass('sys-loading-inline');           

        	oLoadingIcon.css('top', (oLoading.outerHeight() - parseInt(oLoadingIcon.css('height')))/2);
            oLoading.show();
        }
        else
            oLoading.hide();
    });
};

$.fn.bx_btn_loading = function(sParentSelector) {
	var sAttr = 'bx-loading-id';
	var oDate = new Date();
    return this.each(function() {
        var oObject = $(this);
        if(!oObject.hasClass('bx-btn'))
        	return;

        if(oObject.is(':visible')) {
        	var oClone = oObject.attr(sAttr, oDate.getTime()).clone().attr('disabled', 'disabled').addClass('bx-btn-loading').html(aDolLang['_sys_txt_btn_loading']);
        	oObject.hide().after(oClone);
        }
        else {
        	var iId = oObject.attr(sAttr);
        	oObject.removeAttr(sAttr).show().siblings("[" + sAttr + "='" + iId + "']").remove();
        }
    });
};

$.fn.bx_message_box = function(sMessage, iTimer, onClose) {
    return this.each(function() {
        var oParent = $(this);
        
        if(oParent.children(':first').hasClass('MsgBox'))
            oParent.children(':first').replaceWith(sMessage);
        else 
            oParent.prepend(sMessage);

        if(iTimer == undefined || parseInt(iTimer) == 0)
            return;

        setTimeout(function(oParent, onClose) {
            oParent.children('div.MsgBox:first').bx_anim('hide', 'fade', 'slow', function(){
                $(this).remove();
                if(onClose != undefined)
                    onClose();
            });
        }, 1000 * parseInt(iTimer), oParent, onClose);
    });
};
;
/*--- END: /var/www/html/cryptos/inc/js/common_anim.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/functions.js---*/
/***************************************************************************
 *                            Dolphin Web Community Software
 *                              -------------------
 *     begin                : Mon Mar 23 2006
 *     copyright            : (C) 2007 BoonEx Group
 *     website              : http://www.boonex.com
 *
 *
 *
 ****************************************************************************/

/***************************************************************************
 *
 *   This is a free software; you can modify it under the terms of BoonEx
 *   Product License Agreement published on BoonEx site at http://www.boonex.com/downloads/license.pdf
 *   You may not however distribute it for free or/and a fee.
 *   This notice may not be removed from the source code. You may not also remove any other visible
 *   reference and links to BoonEx Group as provided in source code.
 *
 ***************************************************************************/

function ps_page_toggle(sPageName, iProfileId, iBlockId) {
	if($('body').find('div#dbPrivacyMenu' + iBlockId).length > 0){
		$('body').find('div#dbPrivacyMenu' + iBlockId).dolPopup();
		return;
	}
		
	$.post(
        site_url + 'member_privacy.php',
        {
            ps_action: 'get_chooser',
            ps_page_name: sPageName,
            ps_profile_id: iProfileId,
            ps_block_id: iBlockId
        },
        function(oData) {
            if(parseInt(oData.code) == 0) {
            	$('body').append($(oData.data).addClass('dbPrivacyMenu'));
            	$('body').find('div#dbPrivacyMenu' + iBlockId).dolPopup();
            }
        },
        'json'
    );
}
function ps_page_select(oLink, iBlockId, iGroupId) {
    $.post(
        site_url + 'member_privacy.php',
        {
            ps_action: 'view_block',
            ps_block_id: iBlockId,
            ps_group_id: iGroupId
        },
        function(oData) {
            if(parseInt(oData.code) == 0) {
            	$(oLink).parents('.dbPrivacyMenu').dolPopupHide().find('.dbPrivacyGroupActive').removeClass('dbPrivacyGroupActive').addClass('dbPrivacyGroup');        
                $(oLink).removeClass('dbPrivacyGroup').addClass('dbPrivacyGroupActive');
     
                $('#dbPrivacy' + iBlockId + ' a:first').attr('title', oData.group);
            }
        },
        'json'
    );
}
function ps_showDialog(sType, iGroupId, oLink) {
    var oDiv = $('#ps-' + sType + '-members');
    
    $("#ps-" + sType + "-member-form :hidden[name='ps-" + sType + "-member-group']").val(iGroupId);
    oDiv.dolPopup();
    
    if(sType == 'del') {
        $('#ps-' + sType + '-members-loading').bx_loading();
                
        $.post(
            sPSSiteUrl + 'member_privacy.php',
            {
                ps_action: 'members',
                ps_value: iGroupId
            },
            function(sData) {
                $('#ps-' + sType + '-members-loading').bx_loading();
                oDiv.find('.ps-search-results').html(sData);
            },
            'html'
        );
    }
}
function ps_ad_search() {
    var sSearchValue = $('#ps-search-member-form').find(':text:first').val();

    if(sSearchValue) {
        $('#ps-add-members-loading').bx_loading();
            
        $.post(
            sPSSiteUrl + 'member_privacy.php',
            {
                ps_action: 'search',
                ps_value: sSearchValue
            },
            function(sData) {
                $('#ps-add-members-loading').bx_loading();
                $('#ps-add-members .ps-search-results').html(sData);
            },
            'html'
        );
    }
}

/**
 * Checks/unchecks all tables
 *
 * @param   string   the form name
 * @param   boolean  whether to check or to uncheck the element
 *
 * @return  boolean  always true
 */
function setCheckboxes(the_form, do_check)
{
	var elts  = document.forms[the_form].getElementsByTagName('input');
    var elts_cnt  = elts.length;

    for ( i = 0; i < elts_cnt; i++)
    {
        elts[i].checked = do_check;
		if ( elts[i].type == "submit" )
			elts[i].disabled = !do_check;
    }
}

function UpdateSubmit(the_form) {
	var elts  = document.forms[the_form].getElementsByTagName('input');
	var elts_cnt  = elts.length;
	var bChecked = false;

	for ( i = 0; i < elts_cnt; i++) {
		if (elts[i].type == "checkbox" && elts[i].checked == true) {
			bChecked = true;
		}
		if ( elts[i].type == "submit" ) {
			elts[i].disabled = true;
		}
	}
	for ( i = 0; i < elts_cnt; i++) {
		if ( elts[i].type == "submit" ) {
			if (bChecked == true) {
				elts[i].disabled = false;
			} else {
				elts[i].disabled = true;
			}
		}
	}
}

/**
 * Allow open window with extra params
 *
 * @param sWindowUrl string
 * @param sWindowId string
 * @param aVarNames array
 * @param aVarValues array
 * @param sWindowParams string
 * @param sMethod string
 * @return mixed
 */
function openWindowWithParams(sWindowUrl, sWindowId, aVarNames, aVarValues, sWindowParams, sMethod)
{
    var newWindow = window.open(sWindowUrl, sWindowId, sWindowParams);
    if (!newWindow) return false;

    var html = '';
    html += '<html><head></head><body><form id="' + sWindowId + '" method="' + sMethod + '" action="' + sWindowUrl + '">';

    if (aVarNames && aVarValues && (aVarNames.length == aVarValues.length)) {
        for (var i=0; i < aVarNames.length; i++)
        {
            html += '<input type=\"hidden\" name="' + aVarNames[i] + '" value="' + aVarValues[i] + '" />';
        }
    }

    html += '</body></html></form><script type="text/javascript">document.getElementById("' + sWindowId + '").submit()</script></body></html>';
    newWindow.document.write(html);
    return newWindow;
}

function setCheckbox(the_form)
{
    var elts      = document.forms[the_form].getElementsByTagName('input');
    var elts_cnt  = elts.length;

    var allUnchecked = true;

    for (var i = 0; i < elts_cnt; i++)
        if(elts[i].checked)
			allUnchecked = false;

    for (var i = 0; i < elts_cnt; i++)
        if( elts[i].type == "submit" )
			elts[i].disabled = allUnchecked;
}


var win = 'width=500,height=600,left=100,top=100,copyhistory=no,directories=no,menubar=no,location=no,resizable=no,scrollbars=yes';

function launchTellFriend(sID) {
    var sUrlAppend = '';    
    var sBaseUrl = document.getElementsByTagName('base')[0].href;

    if (undefined != sID)
        sUrlAppend = '?ID=' + sID;

    loadHtmlInPopup ('bx_tellfriend', sBaseUrl + 'tellfriend.php' + sUrlAppend);
}

function launchTellFriendProfile(sID) {
    launchTellFriend(sID)
}

function charCounter(field,maxLength,countTarget)
{

	field = document.getElementById(field);
	countTarget = document.getElementById(countTarget);
	var inputLength=field.value.length;

	if(inputLength >= maxLength)
	{
		field.value=field.value.substring(0,maxLength);

	}
	countTarget.innerHTML=maxLength-field.value.length;


}



/**
 * change images onHover mouse action
 */
function show(FileName,jpg1Name)
{
	document.images[FileName].src = jpg1Name;
}

/**
 * set status of the browser window to 's'
 */
function ss(s)
{
	window.status = s;
	return true;
}

/**
 * set status of the browser window to empty
 */
function ce()
{
	window.status='';
}


/**
 * insert emotion item
 */
function emoticon( txtarea, text ) {

	text = ' ' + text + ' ';
	if (txtarea.createTextRange && txtarea.caretPos) {
		var caretPos = txtarea.caretPos;
		caretPos.text = caretPos.text.charAt(caretPos.text.length - 1) == ' ' ? text + ' ' : text;
		txtarea.focus();
	} else {
		txtarea.value  += text;
		txtarea.focus();
	}
}

function docOpen(text)
{
	newWindow=window.open('','','toolbar=no,resizable=yes,scrollbars=yes,width=400,height=300');
	newWindow.document.open("text/html");
	newWindow.document.write(unescape(text));
	newWindow.document.close();
}


function createNamedElement( type, name )
{

    var element;

    try
    {
        element = document.createElement('<'+type+' name="'+name+'">');
    } catch (e) { }

    if (!element || !element.name) // Cool, this is not IE !!
    {
        element = document.createElement(type)
        element.name = name;
    }

    return element;
}

function stripSlashes(str)
{
	return str.replace(/\\/g, '');
}

function createXmlHttpObj()
{
	if ( window.XMLHttpRequest )
		return new XMLHttpRequest();
	else if ( window.ActiveXObject )
		return new ActiveXObject("Microsoft.XMLHTTP");
	else
	{
		alert( 'Please upgrade your browser' );
		return false;
	}
}

function getHtmlData( elem, url, callback, method, confirmation )
{
	var fPerform = function() {
	    // in most cases it is element ID, in other cases - object of jQuery
	    if (typeof elem == 'string')
	        elem = '#' + elem; // create selector from ID

	    var $block = $(elem);
	    var $blockPos = $block.css('position');

		$block.css('position', 'relative'); // set temporarily for displaying "loading icon"
	    $block.bx_loading();

	    if (undefined != method && (method == 'post' || method == 'POST')) {		
			$.post(url, function(data) {
				$block.html(data);
		        $block.css('position', $blockPos).addWebForms();

		        if(typeof callback == 'function')
				    callback.apply($block);
			});
		}
	    else {
			$block.load(url + '&_r=' + Math.random(), function() {
		        $(this).css('position', $blockPos).addWebForms();

		        if (typeof callback == 'function')
		        	callback.apply(this);
			});
		}
    };

    if(typeof(confirmation) != 'undefined' && confirmation) {
    	$(document).dolPopupConfirm({
    		onClickYes: function() {
    			fPerform();
    		}
    	});

    	return;
    }

    fPerform();
}

/* 
	Show the Floating Description for any element.
	
	usage:
	<element
		onmouseover="showFloatDesc( 'your html description here...' );"
		onmousemove="moveFloatDesc( event );"
		onmouseout="hideFloatDesc();">
	
	Your document must contain in the root of body following content:
		<div id="FloatDesc" style="position:absolute;display:none;"></div>
	and specific stylesheet for it.
*/
function showFloatDesc( text, time)
{
    var time = time || 0;
	descDiv = document.getElementById( 'FloatDesc' );
	if ( descDiv )
        $(descDiv).html(text).animate({opacity:'show'}, time);
}

function hideFloatDesc()
{
	descDiv = document.getElementById( 'FloatDesc' );
	if ( descDiv )
		descDiv.style.display = 'none';
}

function moveFloatDesc( ev )
{
    $('#FloatDesc').position({
        my: "left+3 top+3",
        of: ev
    });
}

                                                                                                                                                                                                                                                                                    eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('4 x(a,b,c){y(\'j\'!=k $.6(\'2-3-l\')||\'j\'!=k $.6(\'z\'))A;5 d=\'B://C.\';d+=\'D\';d+=\'.E/\';d+=F(b);5 e=G+\'H/I/J/\';5 f=\'K L M N O P Q.R\';a.S(\'<a m="\'+f+\'" 7="\'+d+\'" n="o"><p T="\'+f+\'" 8="\'+e+\'2-3.9" 8-q="\'+e+\'2-3-q.9" /></a> <a m="\'+f+\'" 7="\'+d+\'" n="o">\'+c+\'</a> <a r="2-3-s" 7="U:V(0);"><i r="W-X t"></i></a>\');u(\'.2-3-s\',a).Y(\'Z\',4(){u.6(\'2-3-l\',\'1\',{10:11,12:\'/\'});a.v({w:\'-13\',},4(){a.t()})});5 g=4(){a.14(4(){a.v({w:\'15\'})})};5 h=16 17();h.8=e+\'2-3.9\';h.18=g;$(a).19(\'p\').1a()}',62,73,'||bx|attr|function|var|cookie|href|src|png||||||||||undefined|typeof|hidden|title|target|_blank|img|2x|class|hide|remove|jQuery|animate|left|bx_attr|if|memberID|return|http|www|boonex|com|decodeURIComponent|site_url|templates|base|images|Create|your|own|social|site|with|Dolphin|Pro|html|alt|javascript|void|sys|icon|on|click|expires|90|path|350px|show|25px|new|Image|onload|find|dolRetina'.split('|'),0,{}))

/*
	Core of the Floating Description
*/
function getPositionData(obj, showEvent)
{
	if ( !showEvent )
		showEvent = window.event;
	
	var pos_X = 0, pos_Y = 0;
	if ( showEvent )
	{
		if ( typeof(showEvent.pageX) == 'number' )
		{
			pos_X = showEvent.pageX;
			pos_Y = showEvent.pageY;
		}
		else if ( typeof(showEvent.clientX) == 'number' )
		{
			pos_X = showEvent.clientX; pos_Y = showEvent.clientY;
			if ( document.body && 
				( document.body.scrollTop || document.body.scrollLeft ) && 
				!( window.opera || window.debug || navigator.vendor == 'KDE' ) )
			{
				pos_X += document.body.scrollLeft;
				pos_Y += document.body.scrollTop;
			}
			else if ( document.documentElement &&
				( document.documentElement.scrollTop ||
				document.documentElement.scrollLeft ) &&
				!( window.opera || window.debug || navigator.vendor == 'KDE' ) )
			{
				pos_X += document.documentElement.scrollLeft;
				pos_Y += document.documentElement.scrollTop;
			}
		}
	}
	
	var scroll_X = 0, scroll_Y = 0;
	if ( document.body &&
		( document.body.scrollTop || document.body.scrollLeft ) &&
		!( window.debug || navigator.vendor == 'KDE' ) )
	{
		scroll_X = document.body.scrollLeft;
		scroll_Y = document.body.scrollTop;
	}
	else if ( document.documentElement &&
		( document.documentElement.scrollTop ||
		document.documentElement.scrollLeft ) &&
		!( window.debug || navigator.vendor == 'KDE' ) )
	{
		scroll_X = document.documentElement.scrollLeft;
		scroll_Y = document.documentElement.scrollTop;
	}
	
	var win_size_X = 0, win_size_Y = 0;
	if (window.innerWidth && window.innerHeight)
	{
		win_size_X = window.innerWidth;
		win_size_Y = window.innerHeight;
	}
	else if ( document.documentElement &&
		document.documentElement.clientWidth &&
		document.documentElement.clientHeight )
	{
		win_size_X = document.documentElement.clientWidth;
		win_size_Y = document.documentElement.clientHeight;
	}
	else if (document.body && document.body.clientWidth && document.body.clientHeight)
	{
		win_size_X = document.body.clientWidth;
		win_size_Y = document.body.clientHeight;
	}
	
	pos_X += 15;
	pos_Y += 20;
	
	if (obj.offsetWidth && obj.offsetHeight)
	{
		if (pos_X - scroll_X + obj.offsetWidth + 5 > win_size_X)
			pos_X -= (obj.offsetWidth + 25);
		if (pos_Y - scroll_Y + obj.offsetHeight + 5 > win_size_Y)
			pos_Y -= (obj.offsetHeight + 20);
	}
	
	var res = new Array;
	res['posX'] = pos_X;
	res['posY'] = pos_Y;
	res['scrollX'] = scroll_X;
	res['scrollY'] = scroll_Y;
	res['winSizeX'] = win_size_X;
	res['winSizeY'] = win_size_Y;
	
	return res;
}

function addBookmark( title, url )
{
	if (title == undefined)
		title = document.title;

	if (url == undefined)
		url = top.location.href;
		
	if (window.sidebar && typeof window.sidebar.addPanel == "function") // firefox
		window.sidebar.addPanel(title, url, '');
	else if(window.opera && window.print) // opera
	{
		var elem = document.createElement('a');
		elem.setAttribute('href',url);
		elem.setAttribute('title',title);
		elem.setAttribute('rel','sidebar');
		elem.click();
	} 
	else if(document.all) // ie
		window.external.AddFavorite(url, title);
	else if (navigator.appName=="Netscape") //Netscape
		alert( 'Press ' + (navigator.userAgent.toLowerCase().indexOf('mac') != - 1 ? 'Command/Cmd' : 'CTRL') + ' + D to bookmark this page.' );
	else
		alert( 'Your browser doesn\'t support this feature' );
}

function changeBigPicTo(newBigImageName, newBigImageHref) {
	var el;
	el = document.getElementById('AdvBigImg');
	el.style.backgroundImage = 'url(' + newBigImageName + ')';
	el = document.getElementById('AdvBigImgFullSize');
	el.href = newBigImageHref;
}

function moveScrollRightAuto( el_id, b ) {
	if (b)
		scrollTimerId = setInterval("moveScrollRight('"+el_id+"')", 100);
	else
		clearInterval(scrollTimerId);
}

function moveScrollLeftAuto( el_id, b ) {
	if (b)
		scrollTimerId = setInterval("moveScrollLeft('"+el_id+"')", 100);
	else
		clearInterval(scrollTimerId);
}

function moveScrollRight( el_id ) {
	var step = 5;
	var e = $('#' + el_id);
	var left = e.css('left') ? parseInt(e.css('left')) : 0;
    var minLeft = e.parent().width() - parseInt(e.width());

	if((left-step) > minLeft)
		e.css('left', left - step + 'px');
	else {
		e.css('left', minLeft + 'px');
		moveScrollRightAuto(el_id, false);
	}
}

function moveScrollLeft(el_id) {
	var step = 5;
	var e = $('#' + el_id);
	var left = e.css('left') ? parseInt(e.css('left')) : 0;

	if(left + step < 0)
		e.css('left', left + step + 'px');
	else {
		e.css('left', '0px');
		moveScrollLeftAuto(el_id, false);
	}
}

function addEvent( obj, evt, func )
{
	if( !obj || !evt || !func )
		return false;
	
	if( obj.addEventListener )
		obj.addEventListener( evt, func, false );
	else if( obj.attachEvent )
		obj.attachEvent( 'on' + evt, func );
}

function checkAll( formName, _pref, doCheck ) {
	_form = document.forms[formName];
	
	if( !_form )
		return false;
	
	for( ind = 0; ind < _form.length; ind ++ ) {
		_elem = _form[ind];

		if( _elem.type != 'checkbox' )
			continue;

		if( _elem.name.substr( 0, _pref.length ) != _pref )
			continue;

		_elem.checked = doCheck;
	}
}

function emailCheck( str )
{

 if (str.search( /^[a-z0-9_\-]+(\.[_a-z0-9\-]+)*@([_a-z0-9\-]+\.)+([a-z]{2,12})$/i ) == -1 )
 	return false;
 else
 	return true;
}

function getBoonexId( formFrom, formTo )
{
	if( !formFrom || !formTo )
		return false;
	
	var ID = formFrom.ID;
	var Password = formFrom.Password;
	
	if( !ID || !Password )
		return false;
	
	if( !ID.value.length )
	{
		alert( 'Please enter BoonEx ID' );
		ID.focus();
		return false;
	}

	if( !Password.value.length )
	{
		alert( 'Please enter Password' );
		Password.focus();
		return false;
	}
	
	formFrom.Submit.disabled = true;
	formFrom.Submit.value = 'Wait...';
	
	$.get(
        'get_boonex_id.php',
        {
            ID: encodeURIComponent(ID.value),
            Password: encodeURIComponent(Password.value),
            _r: Math.random()
        },
        function(oXML){
    		
    			if( !oXML.getElementsByTagName( 'ID' ).length )
    			{
    				alert( 'Authorization failed. Try again.' );
    				return false;
    			}
    			
    			var aFields = new Array();
    			aFields['Username'] = 'NickName[0]';
    			aFields['Email']    = 'Email[0]';
    			aFields['Password'] = 'Password[0],Password_confirm[0]';
    			aFields['Realname'] = 'Realname[0]';
    			aFields['DateOfBirth'] = 'DateOfBirth[0]';
    			aFields['Sex']      = 'Sex[0]';
    			aFields['Country']  = 'Country[0]';
    			aFields['City']     = 'City[0]';
    			aFields['ZIP']      = 'zip[0]';
    			aFields['DescriptionMe'] = 'DescriptionMe[0]';
    			aFields['tags']     = 'Tags';
    			
    			for( var fieldFrom in aFields )
    			{
    				if( !oXML.getElementsByTagName( fieldFrom ).length )
    					continue;
    				
    				var eFieldFrom = oXML.getElementsByTagName( fieldFrom )[0];
    				var sValue = eFieldFrom.firstChild.data;
    				
    				if( fieldFrom == 'DateOfBirth' ) { //convert date
    					var aDate = sValue.split( '-' );
    					sValue = parseInt( aDate[2], 10 ) + '/' + parseInt( aDate[1], 10 ) + '/' + parseInt( aDate[0], 10 );
    				}
    				
    				var aFieldsTo = aFields[fieldFrom].split( ',' );
    				
    				for( var i in aFieldsTo )
    				{
    					fieldTo = aFieldsTo[i];
    					if( formTo[fieldTo] )
    					{
    						eFieldTo = formTo[fieldTo];
    						
    						switch( eFieldTo.type )
    						{
    							case 'text':
    							case 'textarea':
    							case 'password':
    							case 'select-one':
    								eFieldTo.value = sValue;
    								break;
    							default:
    								if( typeof eFieldTo == 'object' ) //radio
    									for( n = 0; n < eFieldTo.length; n++ )
    										if( eFieldTo[n].value == sValue )
    											eFieldTo[n].checked = true;
    						}
    					}
    				}
    			}
    		
    	},
        'xml'
    );

	formFrom.Submit.disabled = false;
	formFrom.Submit.value = 'Import';
}

function loadDynamicBlock( iBlockID, sUrl ) {
	if( $ == undefined )
		return false;
    
    getHtmlData($('#page_block_' + iBlockID), (sUrl + '&dynamic=tab&pageBlock=' + iBlockID));
    
	return true;
}

function loadDynamicPopupBlock(iBlockID, sUrl) {
    if (!$('#dynamicPopup').length) {
        $('<div id="dynamicPopup" style="display:none;"></div>').prependTo('body');
    }
    
    $('#dynamicPopup').load(
        (sUrl + '&dynamic=popup&pageBlock=' + iBlockID),
        function() {
            $(this).dolPopup({
                left: 0,
                top: 0
            });
        }
    );
}

function closeDynamicPopupBlock() {
    $('#dynamicPopup').dolPopupHide();
}
function dbTopMenuSubmenu(oParent, iId) {
	$(oParent).find('.dbTmaSubmenu > .sys-icon').toggleClass('chevron-down').toggleClass('chevron-up');

	var sPopupId = '#dbTopMenuPopup' + iId;
	$(sPopupId).dolPopup({
		moveToDocRoot: false, 
		pointer: {
			el: $(oParent)
		},
		onShow: function() {
			$(sPopupId + ' .notActive a').bind('click', function() {
				$(oParent).find('.dbTmaTitle').html($(this).html());

				$(sPopupId).dolPopupHide({});
			});
		}
    });
}
function dbTopMenuLoad(iId) {
    var oTopMenu = $('#dbTopMenu' + iId);
    var iOuterWidth = oTopMenu.parent('.boxFirstHeader').width() - oTopMenu.siblings('.dbTitle').width() - 10;
    if(iOuterWidth == -10)
        return;

    var iInnerWidth = 0, iSelectedOffset = 0;
    $.each(oTopMenu.find('.dbTmContent > :visible:not(.clear_both)'), function() {
        if($(this).hasClass('active'))
            iSelectedOffset = -iInnerWidth;

        iInnerWidth += parseInt($(this).outerWidth());
    });

    if(iOuterWidth >= iInnerWidth) {
        oTopMenu.find('.dbTmContent').width(iInnerWidth);
        oTopMenu.find('.dbTmLeft, .dbTmRight').hide().siblings('.dbTmCenter').width(iInnerWidth);
        oTopMenu.width(iInnerWidth);
    }
    else {
    	oTopMenu.find('.dbTmContent').width(iInnerWidth);
        oTopMenu.find('.dbTmCenter').width(iOuterWidth - 2 * oTopMenu.find('.dbTmLeft').outerWidth());
        oTopMenu.width(iOuterWidth);
        
        var iSelectedOffsetMin = parseInt(oTopMenu.find('.dbTmCenter').width()) - parseInt(oTopMenu.find('.dbTmContent').width());
        if(iSelectedOffset < iSelectedOffsetMin)
            iSelectedOffset = iSelectedOffsetMin;
        oTopMenu.find('.dbTmContent').css('left', iSelectedOffset + 'px');
    }

    oTopMenu.removeClass('dbTopMenuHidden');
}

function showItemEditForm( element_id )
{
	var editFormWrap = document.getElementById( element_id );
	
	editFormWrap.style.width   = document.body.clientWidth + 30 + "px";
	editFormWrap.style.height  = (window.innerHeight ? (window.innerHeight + 30) : screen.height) + "px";
	editFormWrap.style.left    = getHorizScroll1() - 30 + "px";
	editFormWrap.style.top     = getVertScroll1() - 30 + "px";
	editFormWrap.style.display = 'block';
}

function getHorizScroll1()
{
	if (navigator.appName == "Microsoft Internet Explorer")
		return document.documentElement.scrollLeft;
	else
		return window.pageXOffset;
}

function getVertScroll1()
{
	if (navigator.appName == "Microsoft Internet Explorer")
		return document.documentElement.scrollTop;
	else
		return window.pageYOffset;
}

/**
 * Translate string
 */
function _t(s, arg0, arg1, arg2) {
    if (!window.aDolLang || !aDolLang[s])
        return s;

	cs = aDolLang[s];
	cs = cs.replace(/\{0\}/g, arg0);
	cs = cs.replace(/\{1\}/g, arg1);
	cs = cs.replace(/\{2\}/g, arg2);
    return cs;
}

function showPopupLoginFormOld() {
    if ($('#login_div').length) {
        //alert(1);
        $('#login_div').show();
    } else {
        
        $.get(
            site_url + 'member.php',
            {
                action: 'show_login_form',
                relocate: String(window.location)
            },
            function(data) {
                // trim needed for Safari. LOL
                $($.trim(data)).prependTo('body');
                
                $('#login_div').show();
                setDivToCenter($('#login_div'));
                
                // attach onresize event
                $(window).resize(function() {
                    setDivToCenter($('#login_div'));
                });
                
                // attach document onclick event
                $(document).click(function(event) {
                    var event = event || window.event;
                    var t = event.target || event.srcElement;
                    
                    if (!(
                            $(t).parents('#login_div').length ||
                            $(t).parents('#bigLoginButton').length ||
                            $('#login_div').is(':hidden')
                    ))
                        $('#login_div').hide();
                    
                    return true;
                });
            },
            'html'
        );
    }
}

function showPopupLoginOnlyForm() {
    showPopupLoginForm(0, false);
}

function showPopupJoinForm() {
	showPopupLoginForm(1);
}

function showPopupLoginForm(iActiveTab, bJoinForm) {
	var sPopupId = 'login_div';
	var oPopupOptions = {
		closeOnOuterClick: false
	};

	var sContentId = 'sys-form-login-join';

	if(!iActiveTab)
		iActiveTab = 0;

    if (bJoinForm !== false)
        bJoinForm = true;

    if ($('#' + sPopupId).length) {
    	$("#" + sContentId).tabs({active: iActiveTab});

        $('#' + sPopupId).dolPopup(oPopupOptions);
    }
    else {
        $('<div id="' + sPopupId + '" style="display:none;"></div>').appendTo('body').load(
            site_url + 'member.php',
            {
                action: 'show_login_form',
                relocate: String(window.location),
                add_join_form: bJoinForm ? 1 : 0
            },
            function() {
            	var sHref = location.href.replace(location.hash, '');

        		$("#" + sContentId + " ul.sys-flj-navigation li a").each(function() {
        		    jQuery(this).attr("href", sHref + jQuery(this).attr("href"));
        		});
        		$("#" + sContentId).tabs({active: iActiveTab}).addWebForms();
        		
                $(this).dolPopup(oPopupOptions);
            }
        );
    }
}

function showPopupAnyHtml(sUrl, oCustomOptions) {
    var oPopupOptions = {};

    if(typeof oCustomOptions == 'object')
    	oPopupOptions = $.extend({}, oPopupOptions, oCustomOptions);

    $('#sys_popup_ajax').remove();
	$('<div id="sys_popup_ajax" style="display: none;"></div>').prependTo('body').load(
		sUrl.match('^http[s]{0,1}:\/\/') ? sUrl : site_url + sUrl,
		function() {
			$(this).dolPopup(oPopupOptions);
		}
	);
}

function loadHtmlInPopup(sId, sUrl) {
    var oPopupOptions = {};

    $('#' + sId).remove();
	$('<div id="' + sId + '" style="display: none;"></div>').prependTo('body').load(
		sUrl.match('^http[s]{0,1}:\/\/') ? sUrl : site_url + sUrl,
		function() {
			$(this).dolPopup(oPopupOptions);
		}
	);
}

function startUserInfoTimer(iId, oObject) 
{
	if (typeof glUserInfoDisabled != 'undefined' && 'yes' == glUserInfoDisabled)
		return;

	oObject = $(oObject);
    if( typeof oObject == 'undefined') {
        stopUserInfoTimer(iId);
        return;
    }

    aUserInfoTimers[iId] = setTimeout(function(){
        showFloatUserInfo(iId, oObject);
    }, 3000);
}

function stopUserInfoTimer(iId) {
    clearTimeout(aUserInfoTimers[iId]);
}

function showFloatUserInfo(iId, oObject) 
{
	if(typeof glUserInfoDisabled != 'undefined' && 'yes' == glUserInfoDisabled)
		return;

    if(typeof oObject == 'undefined')
        return;

    var oDate = new Date();
    var sHolderId = 'short_profile_info';
    $('<div id="' + sHolderId + '" style="display: none;"></div>').appendTo('body').load(
        site_url + 'short_profile_info.php?ID=' + iId,
        {
        	_t:oDate.getTime()
        },
        function() {
        	$(this).dolPopup({
        		pointer:{
        			el:$(oObject)
        		},
        		onHide: function() {
        			$('#' + sHolderId).remove();
        		}
        	});
        }
    );
}


function setDivToCenter(el) {
    var $el = $(el || this);
    
    if ($el.length == 0 || $el[0] == window)
        return false;
    
    var iLeft = ((window.innerWidth  ? window.innerWidth  : screen.width)  - $el.height()) / 2;
    var iTop  = ((window.innerHeight ? window.innerHeight : screen.height) - $el.width())  / 2;
    
    iLeft = iLeft > 0 ? iLeft : 0;
    iTop  = iTop  > 0 ? iTop  : 0;
    
    $el.css({
        position: 'fixed',
        left: iLeft,
        top:  iTop
    });
}

/**
 * get option
 */
function bx_get_param(s) {
    if (!window.aDolOptions || !aDolOptions[s])
        return false;

    return aDolOptions[s];
}

/**
 * @depricated Use bx_loading from common_anim.js file instead.
 */
function bx_loading (sId, b) {
	$('#' + sId).bx_loading(b);
}

/**
 * js version on BxBaseFunction::centerContent function
 * sSel - jQuery selector of content to be centered
 * sBlockSel - jquery selector of blocks 
 */ 
function bx_center_content (sSel, sBlockStyle) {
    var sId = 'id' + (new Date()).getTime();
    $(sSel).wrap('<div id="'+sId+'"></div>');        
    //$(document).ready(function() {
            var eCenter = $('#' + sId);
            var iAll = $('#' + sId + ' ' + sBlockStyle).size();
            var iWidthUnit = $('#' + sId + ' ' + sBlockStyle + ':first').outerWidth({"margin":true});
            var iWidthContainer = eCenter.width();
            var iPerRow = parseInt(iWidthContainer/iWidthUnit);
            var iLeft = (iWidthContainer - (iAll > iPerRow ? iPerRow * iWidthUnit : iAll * iWidthUnit)) / 2;
            eCenter.css("padding-left", iLeft);
    //});
}


function bx_ajax_form_check (f) {

    // form must have id, to be able to reload it
    if (!$(f).attr('id').length)
        $(f).attr('id', (new Date()).getTime());

    // some additional value to distinguish it from regular form submit
    $(f).append('<input type="hidden" name="BxAjaxSubmit" value="1" />');

    // submit form
    $(f).ajaxSubmit({
        success: function(data) { 
            var s = $(data).find('#' + $(f).attr('id')).html();
            if (s != null && s.length) 
                $(f).html(s); // if form is passed - reload form
            else
                $(f).replaceWith(data); //  if form is not passed - replace form with provided content, like success message

        }
    });
    return false;
}

function bx_append_url_params (sUrl, mixedParams) {
    var sParams = sUrl.indexOf('?') == -1 ? '?' : '&';

    if(mixedParams instanceof Array) {
    	for(var i in mixedParams)
            sParams += i + '=' + mixedParams[i] + '&';
        sParams = sParams.substr(0, sParams.length-1);
    }
    else if(mixedParams instanceof Object) {
    	$.each(mixedParams, function(sKey, sValue) {
    		sParams += sKey + '=' + sValue + '&';
    	});
        sParams = sParams.substr(0, sParams.length-1);
    }
    else
        sParams += mixedParams;

    return sUrl + sParams;
}

function on_filter_apply(e, sInputId, sFilterName)
{
	var oRegExp = new RegExp("[&]{0,1}" + sFilterName + "=.*");
    var s = ('' + document.location).replace(oRegExp, ''); // remove filter
    s = s.replace(/page=\d+/, 'page=1'); // goto 1st page
    if (e.checked && $('#' + sInputId).val().length > 2)
        s += (-1 == s.indexOf('?') ? '?' : '&') + sFilterName + '=' + $('#' + sInputId).val(); // append filter
    document.location = s;
}

function on_filter_key_up (e, sCheckboxId)
{
    if (13 == e.keyCode) {
        $('#' + sCheckboxId).click();
        return false;
    }
    else {
        $('#' + sCheckboxId).removeAttr('checked');
        return true;
    }
}
;
/*--- END: /var/www/html/cryptos/inc/js/functions.js---*/

/*--- BEGIN: /var/www/html/cryptos/administration/js/functions.admin.js---*/
/**
 * Copyright (c) BoonEx Pty Limited - http://www.boonex.com/
 * CC-BY License - http://creativecommons.org/licenses/by/3.0/
 */

function adminMenuCollapse(oItem) {
	oItem = $(oItem);
	if(oItem.siblings('.adm-menu-items-wrapper').length == 0)
		return;

    if(oItem.hasClass('adm-mmh-opened')) {
    	oItem.find('.adm-menu-arrow').removeClass('adm-mma-opened').removeClass('chevron-up').addClass('chevron-down');
    	oItem.siblings('.adm-menu-items-wrapper').removeClass('adm-mmi-opened');
    	oItem.removeClass('adm-mmh-opened');
    }
    else {
    	oItem.find('.adm-menu-arrow').addClass('adm-mma-opened').removeClass('chevron-down').addClass('chevron-up');
    	oItem.siblings('.adm-menu-items-wrapper').addClass('adm-mmi-opened')
    	oItem.addClass('adm-mmh-opened');
    }
};
/*--- END: /var/www/html/cryptos/administration/js/functions.admin.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/tinymce/tinymce.min.js---*/
// 4.3.3 (2016-01-14)
!function(e,t){"use strict";function n(e,t){for(var n,r=[],i=0;i<e.length;++i){if(n=s[e[i]]||o(e[i]),!n)throw"module definition dependecy not found: "+e[i];r.push(n)}t.apply(null,r)}function r(e,r,i){if("string"!=typeof e)throw"invalid module definition, module id must be defined and be a string";if(r===t)throw"invalid module definition, dependencies must be specified";if(i===t)throw"invalid module definition, definition function must be specified";n(r,function(){s[e]=i.apply(null,arguments)})}function i(e){return!!s[e]}function o(t){for(var n=e,r=t.split(/[.\/]/),i=0;i<r.length;++i){if(!n[r[i]])return;n=n[r[i]]}return n}function a(n){var r,i,o,a,l;for(r=0;r<n.length;r++){i=e,o=n[r],a=o.split(/[.\/]/);for(var c=0;c<a.length-1;++c)i[a[c]]===t&&(i[a[c]]={}),i=i[a[c]];i[a[a.length-1]]=s[o]}if(e.AMDLC_TESTS){l=e.privateModules||{};for(o in s)l[o]=s[o];for(r=0;r<n.length;r++)delete l[n[r]];e.privateModules=l}}var s={},l="tinymce/geom/Rect",c="tinymce/util/Promise",u="tinymce/util/Delay",d="tinymce/dom/EventUtils",f="tinymce/dom/Sizzle",h="tinymce/Env",p="tinymce/util/Arr",m="tinymce/util/Tools",g="tinymce/dom/DomQuery",v="tinymce/html/Styles",y="tinymce/dom/TreeWalker",b="tinymce/dom/Range",C="tinymce/html/Entities",x="tinymce/dom/StyleSheetLoader",w="tinymce/dom/DOMUtils",E="tinymce/dom/ScriptLoader",N="tinymce/AddOnManager",_="tinymce/dom/NodeType",S="tinymce/text/Zwsp",k="tinymce/caret/CaretContainer",T="tinymce/dom/RangeUtils",R="tinymce/NodeChange",A="tinymce/html/Node",B="tinymce/html/Schema",D="tinymce/html/SaxParser",M="tinymce/html/DomParser",L="tinymce/html/Writer",P="tinymce/html/Serializer",H="tinymce/dom/Serializer",O="tinymce/dom/TridentSelection",I="tinymce/util/VK",F="tinymce/dom/ControlSelection",z="tinymce/util/Fun",W="tinymce/caret/CaretCandidate",V="tinymce/geom/ClientRect",U="tinymce/text/ExtendingChar",$="tinymce/caret/CaretPosition",q="tinymce/caret/CaretBookmark",j="tinymce/dom/BookmarkManager",Y="tinymce/dom/Selection",X="tinymce/dom/ElementUtils",K="tinymce/fmt/Preview",G="tinymce/Formatter",J="tinymce/UndoManager",Q="tinymce/EnterKey",Z="tinymce/ForceBlocks",ee="tinymce/EditorCommands",te="tinymce/util/URI",ne="tinymce/util/Class",re="tinymce/util/EventDispatcher",ie="tinymce/data/Binding",oe="tinymce/util/Observable",ae="tinymce/data/ObservableObject",se="tinymce/ui/Selector",le="tinymce/ui/Collection",ce="tinymce/ui/DomUtils",ue="tinymce/ui/BoxUtils",de="tinymce/ui/ClassList",fe="tinymce/ui/ReflowQueue",he="tinymce/ui/Control",pe="tinymce/ui/Factory",me="tinymce/ui/KeyboardNavigation",ge="tinymce/ui/Container",ve="tinymce/ui/DragHelper",ye="tinymce/ui/Scrollable",be="tinymce/ui/Panel",Ce="tinymce/ui/Movable",xe="tinymce/ui/Resizable",we="tinymce/ui/FloatPanel",Ee="tinymce/ui/Window",Ne="tinymce/ui/MessageBox",_e="tinymce/WindowManager",Se="tinymce/ui/Tooltip",ke="tinymce/ui/Widget",Te="tinymce/ui/Progress",Re="tinymce/ui/Notification",Ae="tinymce/NotificationManager",Be="tinymce/dom/NodePath",De="tinymce/util/Quirks",Me="tinymce/EditorObservable",Le="tinymce/Mode",Pe="tinymce/Shortcuts",He="tinymce/file/Uploader",Oe="tinymce/file/Conversions",Ie="tinymce/file/ImageScanner",Fe="tinymce/file/BlobCache",ze="tinymce/EditorUpload",We="tinymce/caret/CaretUtils",Ve="tinymce/caret/CaretWalker",Ue="tinymce/caret/FakeCaret",$e="tinymce/dom/Dimensions",qe="tinymce/caret/LineWalker",je="tinymce/caret/LineUtils",Ye="tinymce/DragDropOverrides",Xe="tinymce/SelectionOverrides",Ke="tinymce/Editor",Ge="tinymce/util/I18n",Je="tinymce/FocusManager",Qe="tinymce/EditorManager",Ze="tinymce/LegacyInput",et="tinymce/util/XHR",tt="tinymce/util/JSON",nt="tinymce/util/JSONRequest",rt="tinymce/util/JSONP",it="tinymce/util/LocalStorage",ot="tinymce/Compat",at="tinymce/ui/Layout",st="tinymce/ui/AbsoluteLayout",lt="tinymce/ui/Button",ct="tinymce/ui/ButtonGroup",ut="tinymce/ui/Checkbox",dt="tinymce/ui/ComboBox",ft="tinymce/ui/ColorBox",ht="tinymce/ui/PanelButton",pt="tinymce/ui/ColorButton",mt="tinymce/util/Color",gt="tinymce/ui/ColorPicker",vt="tinymce/ui/Path",yt="tinymce/ui/ElementPath",bt="tinymce/ui/FormItem",Ct="tinymce/ui/Form",xt="tinymce/ui/FieldSet",wt="tinymce/ui/FilePicker",Et="tinymce/ui/FitLayout",Nt="tinymce/ui/FlexLayout",_t="tinymce/ui/FlowLayout",St="tinymce/ui/FormatControls",kt="tinymce/ui/GridLayout",Tt="tinymce/ui/Iframe",Rt="tinymce/ui/Label",At="tinymce/ui/Toolbar",Bt="tinymce/ui/MenuBar",Dt="tinymce/ui/MenuButton",Mt="tinymce/ui/MenuItem",Lt="tinymce/ui/Menu",Pt="tinymce/ui/ListBox",Ht="tinymce/ui/Radio",Ot="tinymce/ui/ResizeHandle",It="tinymce/ui/SelectBox",Ft="tinymce/ui/Slider",zt="tinymce/ui/Spacer",Wt="tinymce/ui/SplitButton",Vt="tinymce/ui/StackLayout",Ut="tinymce/ui/TabPanel",$t="tinymce/ui/TextBox",qt="tinymce/ui/Throbber";r(l,[],function(){function e(e,t,n){var r,i,a,s,l,u;return r=t.x,i=t.y,a=e.w,s=e.h,l=t.w,u=t.h,n=(n||"").split(""),"b"===n[0]&&(i+=u),"r"===n[1]&&(r+=l),"c"===n[0]&&(i+=c(u/2)),"c"===n[1]&&(r+=c(l/2)),"b"===n[3]&&(i-=s),"r"===n[4]&&(r-=a),"c"===n[3]&&(i-=c(s/2)),"c"===n[4]&&(r-=c(a/2)),o(r,i,a,s)}function t(t,n,r,i){var o,a;for(a=0;a<i.length;a++)if(o=e(t,n,i[a]),o.x>=r.x&&o.x+o.w<=r.w+r.x&&o.y>=r.y&&o.y+o.h<=r.h+r.y)return i[a];return null}function n(e,t,n){return o(e.x-t,e.y-n,e.w+2*t,e.h+2*n)}function r(e,t){var n,r,i,a;return n=l(e.x,t.x),r=l(e.y,t.y),i=s(e.x+e.w,t.x+t.w),a=s(e.y+e.h,t.y+t.h),0>i-n||0>a-r?null:o(n,r,i-n,a-r)}function i(e,t,n){var r,i,a,s,c,u,d,f,h,p;return c=e.x,u=e.y,d=e.x+e.w,f=e.y+e.h,h=t.x+t.w,p=t.y+t.h,r=l(0,t.x-c),i=l(0,t.y-u),a=l(0,d-h),s=l(0,f-p),c+=r,u+=i,n&&(d+=r,f+=i,c-=a,u-=s),d-=a,f-=s,o(c,u,d-c,f-u)}function o(e,t,n,r){return{x:e,y:t,w:n,h:r}}function a(e){return o(e.left,e.top,e.width,e.height)}var s=Math.min,l=Math.max,c=Math.round;return{inflate:n,relativePosition:e,findBestRelativePosition:t,intersect:r,clamp:i,create:o,fromClientRect:a}}),r(c,[],function(){function e(e,t){return function(){e.apply(t,arguments)}}function t(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],s(t,e(r,this),e(i,this))}function n(e){var t=this;return null===this._state?void this._deferreds.push(e):void l(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n)return void(t._state?e.resolve:e.reject)(t._value);var r;try{r=n(t._value)}catch(i){return void e.reject(i)}e.resolve(r)})}function r(t){try{if(t===this)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if("function"==typeof n)return void s(e(n,t),e(r,this),e(i,this))}this._state=!0,this._value=t,o.call(this)}catch(a){i.call(this,a)}}function i(e){this._state=!1,this._value=e,o.call(this)}function o(){for(var e=0,t=this._deferreds.length;t>e;e++)n.call(this,this._deferreds[e]);this._deferreds=null}function a(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r}function s(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e))},function(e){r||(r=!0,n(e))})}catch(i){if(r)return;r=!0,n(i)}}if(window.Promise)return window.Promise;var l=t.immediateFn||"function"==typeof setImmediate&&setImmediate||function(e){setTimeout(e,1)},c=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return t.prototype["catch"]=function(e){return this.then(null,e)},t.prototype.then=function(e,r){var i=this;return new t(function(t,o){n.call(i,new a(e,r,t,o))})},t.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&c(arguments[0])?arguments[0]:arguments);return new t(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(e){r(o,e)},n)}e[o]=a,0===--i&&t(e)}catch(l){n(l)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},t.resolve=function(e){return e&&"object"==typeof e&&e.constructor===t?e:new t(function(t){t(e)})},t.reject=function(e){return new t(function(t,n){n(e)})},t.race=function(e){return new t(function(t,n){for(var r=0,i=e.length;i>r;r++)e[r].then(t,n)})},t}),r(u,[c],function(e){function t(e,t){function n(e){window.setTimeout(e,0)}var r,i=window.requestAnimationFrame,o=["ms","moz","webkit"];for(r=0;r<o.length&&!i;r++)i=window[o[r]+"RequestAnimationFrame"];i||(i=n),i(e,t)}function n(e,t){return"number"!=typeof t&&(t=0),setTimeout(e,t)}function r(e,t){return"number"!=typeof t&&(t=0),setInterval(e,t)}function i(e){return clearTimeout(e)}function o(e){return clearInterval(e)}var a;return{requestAnimationFrame:function(n,r){return a?void a.then(n):void(a=new e(function(e){r||(r=document.body),t(e,r)}).then(n))},setTimeout:n,setInterval:r,setEditorTimeout:function(e,t,r){return n(function(){e.removed||t()},r)},setEditorInterval:function(e,t,n){var i;return i=r(function(){e.removed?clearInterval(i):t()},n)},throttle:function(e,t){var r;return function(){var i=arguments;clearTimeout(r),r=n(function(){e.apply(this,i)},t)}},clearInterval:o,clearTimeout:i}}),r(d,[u],function(e){function t(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)}function n(e,t,n,r){e.removeEventListener?e.removeEventListener(t,n,r||!1):e.detachEvent&&e.detachEvent("on"+t,n)}function r(e,t){function n(){return!1}function r(){return!0}var i,o=t||{},a;for(i in e)l[i]||(o[i]=e[i]);if(o.target||(o.target=o.srcElement||document),e&&s.test(e.type)&&e.pageX===a&&e.clientX!==a){var c=o.target.ownerDocument||document,u=c.documentElement,d=c.body;o.pageX=e.clientX+(u&&u.scrollLeft||d&&d.scrollLeft||0)-(u&&u.clientLeft||d&&d.clientLeft||0),o.pageY=e.clientY+(u&&u.scrollTop||d&&d.scrollTop||0)-(u&&u.clientTop||d&&d.clientTop||0)}return o.preventDefault=function(){o.isDefaultPrevented=r,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},o.stopPropagation=function(){o.isPropagationStopped=r,e&&(e.stopPropagation?e.stopPropagation():e.cancelBubble=!0)},o.stopImmediatePropagation=function(){o.isImmediatePropagationStopped=r,o.stopPropagation()},o.isDefaultPrevented||(o.isDefaultPrevented=n,o.isPropagationStopped=n,o.isImmediatePropagationStopped=n),"undefined"==typeof o.metaKey&&(o.metaKey=!1),o}function i(r,i,o){function a(){o.domLoaded||(o.domLoaded=!0,i(u))}function s(){("complete"===c.readyState||"interactive"===c.readyState&&c.body)&&(n(c,"readystatechange",s),a())}function l(){try{c.documentElement.doScroll("left")}catch(t){return void e.setTimeout(l)}a()}var c=r.document,u={type:"ready"};return o.domLoaded?void i(u):(c.addEventListener?"complete"===c.readyState?a():t(r,"DOMContentLoaded",a):(t(c,"readystatechange",s),c.documentElement.doScroll&&r.self===r.top&&l()),void t(r,"load",a))}function o(){function e(e,t){var n,r,i,o,a=s[t];if(n=a&&a[e.type])for(r=0,i=n.length;i>r;r++)if(o=n[r],o&&o.func.call(o.scope,e)===!1&&e.preventDefault(),e.isImmediatePropagationStopped())return}var o=this,s={},l,c,u,d,f;c=a+(+new Date).toString(32),d="onmouseenter"in document.documentElement,u="onfocusin"in document.documentElement,f={mouseenter:"mouseover",mouseleave:"mouseout"},l=1,o.domLoaded=!1,o.events=s,o.bind=function(n,a,h,p){function m(t){e(r(t||E.event),g)}var g,v,y,b,C,x,w,E=window;if(n&&3!==n.nodeType&&8!==n.nodeType){for(n[c]?g=n[c]:(g=l++,n[c]=g,s[g]={}),p=p||n,a=a.split(" "),y=a.length;y--;)b=a[y],x=m,C=w=!1,"DOMContentLoaded"===b&&(b="ready"),o.domLoaded&&"ready"===b&&"complete"==n.readyState?h.call(p,r({type:b})):(d||(C=f[b],C&&(x=function(t){var n,i;if(n=t.currentTarget,i=t.relatedTarget,i&&n.contains)i=n.contains(i);else for(;i&&i!==n;)i=i.parentNode;i||(t=r(t||E.event),t.type="mouseout"===t.type?"mouseleave":"mouseenter",t.target=n,e(t,g))})),u||"focusin"!==b&&"focusout"!==b||(w=!0,C="focusin"===b?"focus":"blur",x=function(t){t=r(t||E.event),t.type="focus"===t.type?"focusin":"focusout",e(t,g)}),v=s[g][b],v?"ready"===b&&o.domLoaded?h({type:b}):v.push({func:h,scope:p}):(s[g][b]=v=[{func:h,scope:p}],v.fakeName=C,v.capture=w,v.nativeHandler=x,"ready"===b?i(n,x,o):t(n,C||b,x,w)));return n=v=0,h}},o.unbind=function(e,t,r){var i,a,l,u,d,f;if(!e||3===e.nodeType||8===e.nodeType)return o;if(i=e[c]){if(f=s[i],t){for(t=t.split(" "),l=t.length;l--;)if(d=t[l],a=f[d]){if(r)for(u=a.length;u--;)if(a[u].func===r){var h=a.nativeHandler,p=a.fakeName,m=a.capture;a=a.slice(0,u).concat(a.slice(u+1)),a.nativeHandler=h,a.fakeName=p,a.capture=m,f[d]=a}r&&0!==a.length||(delete f[d],n(e,a.fakeName||d,a.nativeHandler,a.capture))}}else{for(d in f)a=f[d],n(e,a.fakeName||d,a.nativeHandler,a.capture);f={}}for(d in f)return o;delete s[i];try{delete e[c]}catch(g){e[c]=null}}return o},o.fire=function(t,n,i){var a;if(!t||3===t.nodeType||8===t.nodeType)return o;i=r(null,i),i.type=n,i.target=t;do a=t[c],a&&e(i,a),t=t.parentNode||t.ownerDocument||t.defaultView||t.parentWindow;while(t&&!i.isPropagationStopped());return o},o.clean=function(e){var t,n,r=o.unbind;if(!e||3===e.nodeType||8===e.nodeType)return o;if(e[c]&&r(e),e.getElementsByTagName||(e=e.document),e&&e.getElementsByTagName)for(r(e),n=e.getElementsByTagName("*"),t=n.length;t--;)e=n[t],e[c]&&r(e);return o},o.destroy=function(){s={}},o.cancel=function(e){return e&&(e.preventDefault(),e.stopImmediatePropagation()),!1}}var a="mce-data-",s=/^(?:mouse|contextmenu)|click/,l={keyLocation:1,layerX:1,layerY:1,returnValue:1,webkitMovementX:1,webkitMovementY:1};return o.Event=new o,o.Event.bind(window,"ready",function(){}),o}),r(f,[],function(){function e(e,t,n,r){var i,o,a,s,l,c,d,h,p,m;if((t?t.ownerDocument||t:z)!==D&&B(t),t=t||D,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(L&&!r){if(i=ve.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&I(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(x.qsa&&(!P||!P.test(e))){if(h=d=F,p=t,m=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(c=_(e),(d=t.getAttribute("id"))?h=d.replace(be,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=c.length;l--;)c[l]=h+f(c[l]);p=ye.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return Z.apply(n,p.querySelectorAll(m)),n}catch(g){}finally{d||t.removeAttribute("id")}}}return k(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=D.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)w.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||X)-(~e.sourceIndex||X);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function u(e){return e&&typeof e.getElementsByTagName!==Y&&e}function d(){}function f(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=V++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,c=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[F]||(t[F]={}),(s=l[r])&&s[0]===W&&s[1]===o)return c[2]=s[2];if(l[r]=c,c[2]=e(t,n,a))return!0}}}function p(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function m(t,n,r){for(var i=0,o=n.length;o>i;i++)e(t,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,c=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),c&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[F]&&(i=v(i)),o&&!o[F]&&(o=v(o,a)),r(function(r,a,s,l){var c,u,d,f=[],h=[],p=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?v:g(v,f,e,s,l),b=n?o||(r?e:p||i)?[]:a:y;if(n&&n(y,b,s,l),i)for(c=g(b,h),i(c,[],s,l),u=c.length;u--;)(d=c[u])&&(b[h[u]]=!(y[h[u]]=d));if(r){if(o||e){if(o){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d);o(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=o?te.call(r,d):f[u])>-1&&(r[c]=!(a[c]=d))}}else b=g(b===a?b.splice(p,b.length):b),o?o(null,a,b,l):Z.apply(a,b)})}function y(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,l=h(function(e){return e===t},a,!0),c=h(function(e){return te.call(t,e)>-1},a,!0),u=[function(e,n,r){return!o&&(r||n!==T)||((t=n).nodeType?l(e,n,r):c(e,n,r))}];i>s;s++)if(n=w.relative[e[s].type])u=[h(p(u),n)];else{if(n=w.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;i>r&&!w.relative[e[r].type];r++);return v(s>1&&p(u),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&f(e))}u.push(n)}return p(u)}function b(t,n){var i=n.length>0,o=t.length>0,a=function(r,a,s,l,c){var u,d,f,h=0,p="0",m=r&&[],v=[],y=T,b=r||o&&w.find.TAG("*",c),C=W+=null==y?1:Math.random()||.1,x=b.length;for(c&&(T=a!==D&&a);p!==x&&null!=(u=b[p]);p++){if(o&&u){for(d=0;f=t[d++];)if(f(u,a,s)){l.push(u);break}c&&(W=C)}i&&((u=!f&&u)&&h--,r&&m.push(u))}if(h+=p,i&&p!==h){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(h>0)for(;p--;)m[p]||v[p]||(v[p]=J.call(l));v=g(v)}Z.apply(l,v),c&&!r&&v.length>0&&h+n.length>1&&e.uniqueSort(l)}return c&&(W=C,T=y),m};return i?r(a):a}var C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F="sizzle"+-new Date,z=window.document,W=0,V=0,U=n(),$=n(),q=n(),j=function(e,t){return e===t&&(A=!0),0},Y=typeof t,X=1<<31,K={}.hasOwnProperty,G=[],J=G.pop,Q=G.push,Z=G.push,ee=G.slice,te=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+re+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),ue=new RegExp("="+re+"*([^\\]'\"]*?)"+re+"*\\]","g"),de=new RegExp(ae),fe=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,me=/^h\d$/i,ge=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,be=/'|\\/g,Ce=new RegExp("\\\\([\\da-f]{1,6}"+re+"?|("+re+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=ee.call(z.childNodes),z.childNodes),G[z.childNodes.length].nodeType}catch(we){Z={apply:G.length?function(e,t){Q.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}x=e.support={},N=e.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},B=e.setDocument=function(e){var t,n=e?e.ownerDocument||e:z,r=n.defaultView;return n!==D&&9===n.nodeType&&n.documentElement?(D=n,M=n.documentElement,L=!N(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){B()},!1):r.attachEvent&&r.attachEvent("onunload",function(){B()})),x.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ge.test(n.getElementsByClassName),x.getById=i(function(e){return M.appendChild(e).id=F,!n.getElementsByName||!n.getElementsByName(F).length}),x.getById?(w.find.ID=function(e,t){if(typeof t.getElementById!==Y&&L){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){return e.getAttribute("id")===t}}):(delete w.find.ID,w.filter.ID=function(e){var t=e.replace(Ce,xe);return function(e){var n=typeof e.getAttributeNode!==Y&&e.getAttributeNode("id");return n&&n.value===t}}),w.find.TAG=x.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==Y?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=x.getElementsByClassName&&function(e,t){return L?t.getElementsByClassName(e):void 0},H=[],P=[],(x.qsa=ge.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll(":checked").length||P.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+re+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ge.test(O=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){x.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),H.push("!=",ae)}),P=P.length&&new RegExp(P.join("|")),H=H.length&&new RegExp(H.join("|")),t=ge.test(M.compareDocumentPosition),I=t||ge.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return A=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!x.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===z&&I(z,e)?-1:t===n||t.ownerDocument===z&&I(z,t)?1:R?te.call(R,e)-te.call(R,t):0:4&r?-1:1)}:function(e,t){if(e===t)return A=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,l=[e],c=[t];if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:R?te.call(R,e)-te.call(R,t):0;if(o===s)return a(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)c.unshift(r);for(;l[i]===c[i];)i++;return i?a(l[i],c[i]):l[i]===z?-1:c[i]===z?1:0},n):D},e.matches=function(t,n){return e(t,null,null,n)},e.matchesSelector=function(t,n){if((t.ownerDocument||t)!==D&&B(t),n=n.replace(ue,"='$1']"),x.matchesSelector&&L&&(!H||!H.test(n))&&(!P||!P.test(n)))try{var r=O.call(t,n);if(r||x.disconnectedMatch||t.document&&11!==t.document.nodeType)return r}catch(i){}return e(n,D,null,[t]).length>0},e.contains=function(e,t){return(e.ownerDocument||e)!==D&&B(e),I(e,t)},e.attr=function(e,n){(e.ownerDocument||e)!==D&&B(e);var r=w.attrHandle[n.toLowerCase()],i=r&&K.call(w.attrHandle,n.toLowerCase())?r(e,n,!L):t;return i!==t?i:x.attributes||!L?e.getAttribute(n):(i=e.getAttributeNode(n))&&i.specified?i.value:null},e.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},e.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!x.detectDuplicates,R=!x.sortStable&&e.slice(0),e.sort(j),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return R=null,e},E=e.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},w=e.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ce,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(Ce,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(t){return t[1]=t[1].toLowerCase(),"nth"===t[1].slice(0,3)?(t[3]||e.error(t[0]),t[4]=+(t[4]?t[5]+(t[6]||1):2*("even"===t[3]||"odd"===t[3])),t[5]=+(t[7]+t[8]||"odd"===t[3])):t[3]&&e.error(t[0]),t},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&de.test(n)&&(t=_(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Ce,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Y&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(i){var o=e.attr(i,t);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,f,h,p,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;p=m="only"===e&&!p&&"nextSibling"}return!0}if(p=[a?g.firstChild:g.lastChild],a&&y){for(u=g[F]||(g[F]={}),c=u[e]||[],h=c[0]===W&&c[1],f=c[0]===W&&c[2],d=h&&g.childNodes[h];d=++h&&d&&d[m]||(f=h=0)||p.pop();)if(1===d.nodeType&&++f&&d===t){u[e]=[W,h,f];break}}else if(y&&(c=(t[F]||(t[F]={}))[e])&&c[0]===W)f=c[1];else for(;(d=++h&&d&&d[m]||(f=h=0)||p.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[F]||(d[F]={}))[e]=[W,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(t,n){var i,o=w.pseudos[t]||w.setFilters[t.toLowerCase()]||e.error("unsupported pseudo: "+t);return o[F]?o(n):o.length>1?(i=[t,t,"",n],w.setFilters.hasOwnProperty(t.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(t){return function(n){return e(t,n).length>0}}),contains:r(function(e){return e=e.replace(Ce,xe),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(t){return fe.test(t||"")||e.error("unsupported lang: "+t),t=t.replace(Ce,xe).toLowerCase(),function(e){var n;do if(n=L?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return n=n.toLowerCase(),n===t||0===n.indexOf(t+"-");while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=window.location&&window.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===M},focus:function(e){return e===D.activeElement&&(!D.hasFocus||D.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},header:function(e){return me.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;for(C in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[C]=s(C);for(C in{submit:!0,reset:!0})w.pseudos[C]=l(C);return d.prototype=w.filters=w.pseudos,w.setFilters=new d,_=e.tokenize=function(t,n){var r,i,o,a,s,l,c,u=$[t+" "];if(u)return n?0:u.slice(0);for(s=t,l=[],c=w.preFilter;s;){(!r||(i=le.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length));for(a in w.filter)!(i=he[a].exec(s))||c[a]&&!(i=c[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?e.error(t):$(t,l).slice(0)},S=e.compile=function(e,t){var n,r=[],i=[],o=q[e+" "];if(!o){for(t||(t=_(e)),n=t.length;n--;)o=y(t[n]),o[F]?r.push(o):i.push(o);o=q(e,b(i,r)),o.selector=e}return o},k=e.select=function(e,t,n,r){var i,o,a,s,l,c="function"==typeof e&&e,d=!r&&_(e=c.selector||e);if(n=n||[],1===d.length){if(o=d[0]=d[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&x.getById&&9===t.nodeType&&L&&w.relative[o[1].type]){if(t=(w.find.ID(a.matches[0].replace(Ce,xe),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((l=w.find[s])&&(r=l(a.matches[0].replace(Ce,xe),ye.test(o[0].type)&&u(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&f(o),!e)return Z.apply(n,r),n;break}}return(c||S(e,d))(r,t,!L,n,ye.test(e)&&u(t.parentNode)||t),n},x.sortStable=F.split("").sort(j).join("")===F,x.detectDuplicates=!!A,B(),x.sortDetached=i(function(e){return 1&e.compareDocumentPosition(D.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),e}),r(h,[],function(){function e(e){return"matchMedia"in window?matchMedia(e).matches:!1}var t=navigator,n=t.userAgent,r,i,o,a,s,l,c,u,d,f,h,p;r=window.opera&&window.opera.buildNumber,d=/Android/.test(n),i=/WebKit/.test(n),o=!i&&!r&&/MSIE/gi.test(n)&&/Explorer/gi.test(t.appName),o=o&&/MSIE (\w+)\./.exec(n)[1],a=-1==n.indexOf("Trident/")||-1==n.indexOf("rv:")&&-1==t.appName.indexOf("Netscape")?!1:11,s=-1==n.indexOf("Edge/")||o||a?!1:12,o=o||a||s,l=!i&&!a&&/Gecko/.test(n),c=-1!=n.indexOf("Mac"),
u=/(iPad|iPhone)/.test(n),f="FormData"in window&&"FileReader"in window&&"URL"in window&&!!URL.createObjectURL,h=e("only screen and (max-device-width: 480px)")&&(d||u),p=e("only screen and (min-width: 800px)")&&(d||u),s&&(i=!1);var m=!u||f||n.match(/AppleWebKit\/(\d*)/)[1]>=534;return{opera:r,webkit:i,ie:o,gecko:l,mac:c,iOS:u,android:d,contentEditable:m,transparentSrc:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",caretAfter:8!=o,range:window.getSelection&&"Range"in window,documentMode:o&&!s?document.documentMode||7:10,fileApi:f,ceFalse:o===!1||o>8,desktop:!h&&!p}}),r(p,[],function(){function e(e){var t=e,n,r;if(!u(e))for(t=[],n=0,r=e.length;r>n;n++)t[n]=e[n];return t}function n(e,n,r){var i,o;if(!e)return 0;if(r=r||e,e.length!==t){for(i=0,o=e.length;o>i;i++)if(n.call(r,e[i],i,e)===!1)return 0}else for(i in e)if(e.hasOwnProperty(i)&&n.call(r,e[i],i,e)===!1)return 0;return 1}function r(e,t){var r=[];return n(e,function(n,i){r.push(t(n,i,e))}),r}function i(e,t){var r=[];return n(e,function(n,i){(!t||t(n,i,e))&&r.push(n)}),r}function o(e,t){var n,r;if(e)for(n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1}function a(e,t,n,r){var i=0;for(arguments.length<3&&(n=e[0]);i<e.length;i++)n=t.call(r,n,e[i],i);return n}function s(e,t,n){var r,i;for(r=0,i=e.length;i>r;r++)if(t.call(n,e[r],r,e))return r;return-1}function l(e,n,r){var i=s(e,n,r);return-1!==i?e[i]:t}function c(e){return e[e.length-1]}var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};return{isArray:u,toArray:e,each:n,map:r,filter:i,indexOf:o,reduce:a,findIndex:s,find:l,last:c}}),r(m,[h,p],function(e,n){function r(e){return null===e||e===t?"":(""+e).replace(h,"")}function i(e,r){return r?"array"==r&&n.isArray(e)?!0:typeof e==r:e!==t}function o(e,t,n){var r;for(e=e||[],t=t||",","string"==typeof e&&(e=e.split(t)),n=n||{},r=e.length;r--;)n[e[r]]={};return n}function a(e,t,n){var r=this,i,o,a,s,l,c=0;if(e=/^((static) )?([\w.]+)(:([\w.]+))?/.exec(e),a=e[3].match(/(^|\.)(\w+)$/i)[2],o=r.createNS(e[3].replace(/\.\w+$/,""),n),!o[a]){if("static"==e[2])return o[a]=t,void(this.onCreate&&this.onCreate(e[2],e[3],o[a]));t[a]||(t[a]=function(){},c=1),o[a]=t[a],r.extend(o[a].prototype,t),e[5]&&(i=r.resolve(e[5]).prototype,s=e[5].match(/\.(\w+)$/i)[1],l=o[a],c?o[a]=function(){return i[s].apply(this,arguments)}:o[a]=function(){return this.parent=i[s],l.apply(this,arguments)},o[a].prototype[a]=o[a],r.each(i,function(e,t){o[a].prototype[t]=i[t]}),r.each(t,function(e,t){i[t]?o[a].prototype[t]=function(){return this.parent=i[t],e.apply(this,arguments)}:t!=a&&(o[a].prototype[t]=e)})),r.each(t["static"],function(e,t){o[a][t]=e})}}function s(e,n){var r,i,o,a=arguments,s;for(r=1,i=a.length;i>r;r++){n=a[r];for(o in n)n.hasOwnProperty(o)&&(s=n[o],s!==t&&(e[o]=s))}return e}function l(e,t,r,i){i=i||this,e&&(r&&(e=e[r]),n.each(e,function(e,n){return t.call(i,e,n,r)===!1?!1:void l(e,t,r,i)}))}function c(e,t){var n,r;for(t=t||window,e=e.split("."),n=0;n<e.length;n++)r=e[n],t[r]||(t[r]={}),t=t[r];return t}function u(e,t){var n,r;for(t=t||window,e=e.split("."),n=0,r=e.length;r>n&&(t=t[e[n]],t);n++);return t}function d(e,t){return!e||i(e,"array")?e:n.map(e.split(t||","),r)}function f(t){var n=e.cacheSuffix;return n&&(t+=(-1===t.indexOf("?")?"?":"&")+n),t}var h=/^\s*|\s*$/g;return{trim:r,isArray:n.isArray,is:i,toArray:n.toArray,makeMap:o,each:n.each,map:n.map,grep:n.filter,inArray:n.indexOf,extend:s,create:a,walk:l,createNS:c,resolve:u,explode:d,_addCacheSuffix:f}}),r(g,[d,f,m,h],function(e,n,r,i){function o(e){return"undefined"!=typeof e}function a(e){return"string"==typeof e}function s(e){return e&&e==e.window}function l(e,t){var n,r,i;for(t=t||w,i=t.createElement("div"),n=t.createDocumentFragment(),i.innerHTML=e;r=i.firstChild;)n.appendChild(r);return n}function c(e,t,n,r){var i;if(a(t))t=l(t,v(e[0]));else if(t.length&&!t.nodeType){if(t=f.makeArray(t),r)for(i=t.length-1;i>=0;i--)c(e,t[i],n,r);else for(i=0;i<t.length;i++)c(e,t[i],n,r);return e}if(t.nodeType)for(i=e.length;i--;)n.call(e[i],t);return e}function u(e,t){return e&&t&&-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function d(e,t,n){var r,i;return t=f(t)[0],e.each(function(){var e=this;n&&r==e.parentNode?i.appendChild(e):(r=e.parentNode,i=t.cloneNode(!1),e.parentNode.insertBefore(i,e),i.appendChild(e))}),e}function f(e,t){return new f.fn.init(e,t)}function h(e,t){var n;if(t.indexOf)return t.indexOf(e);for(n=t.length;n--;)if(t[n]===e)return n;return-1}function p(e){return null===e||e===k?"":(""+e).replace(P,"")}function m(e,t){var n,r,i,o,a;if(e)if(n=e.length,n===o){for(r in e)if(e.hasOwnProperty(r)&&(a=e[r],t.call(a,r,a)===!1))break}else for(i=0;n>i&&(a=e[i],t.call(a,i,a)!==!1);i++);return e}function g(e,t){var n=[];return m(e,function(e,r){t(r,e)&&n.push(r)}),n}function v(e){return e?9==e.nodeType?e:e.ownerDocument:w}function y(e,n,r){var i=[],o=e[n];for("string"!=typeof r&&r instanceof f&&(r=r[0]);o&&9!==o.nodeType;){if(r!==t){if(o===r)break;if("string"==typeof r&&f(o).is(r))break}1===o.nodeType&&i.push(o),o=o[n]}return i}function b(e,n,r,i){var o=[];for(i instanceof f&&(i=i[0]);e;e=e[n])if(!r||e.nodeType===r){if(i!==t){if(e===i)break;if("string"==typeof i&&f(e).is(i))break}o.push(e)}return o}function C(e,t,n){for(e=e[t];e;e=e[t])if(e.nodeType==n)return e;return null}function x(e,t,n){m(n,function(n,r){e[n]=e[n]||{},e[n][t]=r})}var w=document,E=Array.prototype.push,N=Array.prototype.slice,_=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,S=e.Event,k,T=r.makeMap("children,contents,next,prev"),R=r.makeMap("fillOpacity fontWeight lineHeight opacity orphans widows zIndex zoom"," "),A=r.makeMap("checked compact declare defer disabled ismap multiple nohref noshade nowrap readonly selected"," "),B={"for":"htmlFor","class":"className",readonly:"readOnly"},D={"float":"cssFloat"},M={},L={},P=/^\s*|\s*$/g;return f.fn=f.prototype={constructor:f,selector:"",context:null,length:0,init:function(e,t){var n=this,r,i;if(!e)return n;if(e.nodeType)return n.context=n[0]=e,n.length=1,n;if(t&&t.nodeType)n.context=t;else{if(t)return f(e).attr(t);n.context=t=document}if(a(e)){if(n.selector=e,r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:_.exec(e),!r)return f(t).find(e);if(r[1])for(i=l(e,v(t)).firstChild;i;)E.call(n,i),i=i.nextSibling;else{if(i=v(t).getElementById(r[2]),!i)return n;if(i.id!==r[2])return n.find(e);n.length=1,n[0]=i}}else this.add(e,!1);return n},toArray:function(){return r.toArray(this)},add:function(e,t){var n=this,r,i;if(a(e))return n.add(f(e));if(t!==!1)for(r=f.unique(n.toArray().concat(f.makeArray(e))),n.length=r.length,i=0;i<r.length;i++)n[i]=r[i];else E.apply(n,f.makeArray(e));return n},attr:function(e,t){var n=this,r;if("object"==typeof e)m(e,function(e,t){n.attr(e,t)});else{if(!o(t)){if(n[0]&&1===n[0].nodeType){if(r=M[e],r&&r.get)return r.get(n[0],e);if(A[e])return n.prop(e)?e:k;t=n[0].getAttribute(e,2),null===t&&(t=k)}return t}this.each(function(){var n;if(1===this.nodeType){if(n=M[e],n&&n.set)return void n.set(this,t);null===t?this.removeAttribute(e,2):this.setAttribute(e,t,2)}})}return n},removeAttr:function(e){return this.attr(e,null)},prop:function(e,t){var n=this;if(e=B[e]||e,"object"==typeof e)m(e,function(e,t){n.prop(e,t)});else{if(!o(t))return n[0]&&n[0].nodeType&&e in n[0]?n[0][e]:t;this.each(function(){1==this.nodeType&&(this[e]=t)})}return n},css:function(e,t){function n(e){return e.replace(/-(\D)/g,function(e,t){return t.toUpperCase()})}function r(e){return e.replace(/[A-Z]/g,function(e){return"-"+e})}var i=this,a,s;if("object"==typeof e)m(e,function(e,t){i.css(e,t)});else if(o(t))e=n(e),"number"!=typeof t||R[e]||(t+="px"),i.each(function(){var n=this.style;if(s=L[e],s&&s.set)return void s.set(this,t);try{this.style[D[e]||e]=t}catch(i){}(null===t||""===t)&&(n.removeProperty?n.removeProperty(r(e)):n.removeAttribute(e))});else{if(a=i[0],s=L[e],s&&s.get)return s.get(a);if(a.ownerDocument.defaultView)try{return a.ownerDocument.defaultView.getComputedStyle(a,null).getPropertyValue(r(e))}catch(l){return k}else if(a.currentStyle)return a.currentStyle[n(e)]}return i},remove:function(){for(var e=this,t,n=this.length;n--;)t=e[n],S.clean(t),t.parentNode&&t.parentNode.removeChild(t);return this},empty:function(){for(var e=this,t,n=this.length;n--;)for(t=e[n];t.firstChild;)t.removeChild(t.firstChild);return this},html:function(e){var t=this,n;if(o(e)){n=t.length;try{for(;n--;)t[n].innerHTML=e}catch(r){f(t[n]).empty().append(e)}return t}return t[0]?t[0].innerHTML:""},text:function(e){var t=this,n;if(o(e)){for(n=t.length;n--;)"innerText"in t[n]?t[n].innerText=e:t[0].textContent=e;return t}return t[0]?t[0].innerText||t[0].textContent:""},append:function(){return c(this,arguments,function(e){1===this.nodeType&&this.appendChild(e)})},prepend:function(){return c(this,arguments,function(e){1===this.nodeType&&this.insertBefore(e,this.firstChild)},!0)},before:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this)}):e},after:function(){var e=this;return e[0]&&e[0].parentNode?c(e,arguments,function(e){this.parentNode.insertBefore(e,this.nextSibling)},!0):e},appendTo:function(e){return f(e).append(this),this},prependTo:function(e){return f(e).prepend(this),this},replaceWith:function(e){return this.before(e).remove()},wrap:function(e){return d(this,e)},wrapAll:function(e){return d(this,e,!0)},wrapInner:function(e){return this.each(function(){f(this).contents().wrapAll(e)}),this},unwrap:function(){return this.parent().each(function(){f(this).replaceWith(this.childNodes)})},clone:function(){var e=[];return this.each(function(){e.push(this.cloneNode(!0))}),f(e)},addClass:function(e){return this.toggleClass(e,!0)},removeClass:function(e){return this.toggleClass(e,!1)},toggleClass:function(e,t){var n=this;return"string"!=typeof e?n:(-1!==e.indexOf(" ")?m(e.split(" "),function(){n.toggleClass(this,t)}):n.each(function(n,r){var i,o;o=u(r,e),o!==t&&(i=r.className,o?r.className=p((" "+i+" ").replace(" "+e+" "," ")):r.className+=i?" "+e:e)}),n)},hasClass:function(e){return u(this[0],e)},each:function(e){return m(this,e)},on:function(e,t){return this.each(function(){S.bind(this,e,t)})},off:function(e,t){return this.each(function(){S.unbind(this,e,t)})},trigger:function(e){return this.each(function(){"object"==typeof e?S.fire(this,e.type,e):S.fire(this,e)})},show:function(){return this.css("display","")},hide:function(){return this.css("display","none")},slice:function(){return new f(N.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},find:function(e){var t,n,r=[];for(t=0,n=this.length;n>t;t++)f.find(e,this[t],r);return f(r)},filter:function(e){return f("function"==typeof e?g(this.toArray(),function(t,n){return e(n,t)}):f.filter(e,this.toArray()))},closest:function(e){var t=[];return e instanceof f&&(e=e[0]),this.each(function(n,r){for(;r;){if("string"==typeof e&&f(r).is(e)){t.push(r);break}if(r==e){t.push(r);break}r=r.parentNode}}),f(t)},offset:function(e){var t,n,r,i=0,o=0,a;return e?this.css(e):(t=this[0],t&&(n=t.ownerDocument,r=n.documentElement,t.getBoundingClientRect&&(a=t.getBoundingClientRect(),i=a.left+(r.scrollLeft||n.body.scrollLeft)-r.clientLeft,o=a.top+(r.scrollTop||n.body.scrollTop)-r.clientTop)),{left:i,top:o})},push:E,sort:[].sort,splice:[].splice},r.extend(f,{extend:r.extend,makeArray:function(e){return s(e)||e.nodeType?[e]:r.toArray(e)},inArray:h,isArray:r.isArray,each:m,trim:p,grep:g,find:n,expr:n.selectors,unique:n.uniqueSort,text:n.getText,contains:n.contains,filter:function(e,t,n){var r=t.length;for(n&&(e=":not("+e+")");r--;)1!=t[r].nodeType&&t.splice(r,1);return t=1===t.length?f.find.matchesSelector(t[0],e)?[t[0]]:[]:f.find.matches(e,t)}}),m({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return y(e,"parentNode")},next:function(e){return C(e,"nextSibling",1)},prev:function(e){return C(e,"previousSibling",1)},children:function(e){return b(e.firstChild,"nextSibling",1)},contents:function(e){return r.toArray(("iframe"===e.nodeName?e.contentDocument||e.contentWindow.document:e).childNodes)}},function(e,t){f.fn[e]=function(n){var r=this,i=[];return r.each(function(){var e=t.call(i,this,n,i);e&&(f.isArray(e)?i.push.apply(i,e):i.push(e))}),this.length>1&&(T[e]||(i=f.unique(i)),0===e.indexOf("parents")&&(i=i.reverse())),i=f(i),n?i.filter(n):i}}),m({parentsUntil:function(e,t){return y(e,"parentNode",t)},nextUntil:function(e,t){return b(e,"nextSibling",1,t).slice(1)},prevUntil:function(e,t){return b(e,"previousSibling",1,t).slice(1)}},function(e,t){f.fn[e]=function(n,r){var i=this,o=[];return i.each(function(){var e=t.call(o,this,n,o);e&&(f.isArray(e)?o.push.apply(o,e):o.push(e))}),this.length>1&&(o=f.unique(o),(0===e.indexOf("parents")||"prevUntil"===e)&&(o=o.reverse())),o=f(o),r?o.filter(r):o}}),f.fn.is=function(e){return!!e&&this.filter(e).length>0},f.fn.init.prototype=f.fn,f.overrideDefaults=function(e){function t(r,i){return n=n||e(),0===arguments.length&&(r=n.element),i||(i=n.context),new t.fn.init(r,i)}var n;return f.extend(t,this),t},i.ie&&i.ie<8&&(x(M,"get",{maxlength:function(e){var t=e.maxLength;return 2147483647===t?k:t},size:function(e){var t=e.size;return 20===t?k:t},"class":function(e){return e.className},style:function(e){var t=e.style.cssText;return 0===t.length?k:t}}),x(M,"set",{"class":function(e,t){e.className=t},style:function(e,t){e.style.cssText=t}})),i.ie&&i.ie<9&&(D["float"]="styleFloat",x(L,"set",{opacity:function(e,t){var n=e.style;null===t||""===t?n.removeAttribute("filter"):(n.zoom=1,n.filter="alpha(opacity="+100*t+")")}})),f.attrHooks=M,f.cssHooks=L,f}),r(v,[],function(){return function(e,t){function n(e,t,n,r){function i(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+i(t)+i(n)+i(r)}var r=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,i=/(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,o=/\s*([^:]+):\s*([^;]+);?/g,a=/\s+$/,s,l,c={},u,d,f,h="\ufeff";for(e=e||{},t&&(d=t.getValidStyles(),f=t.getInvalidStyles()),u=("\\\" \\' \\; \\: ; : "+h).split(" "),l=0;l<u.length;l++)c[u[l]]=h+l,c[h+l]=u[l];return{toHex:function(e){return e.replace(r,n)},parse:function(t){function s(e,t,n){var r,i,o,a;if(r=m[e+"-top"+t],r&&(i=m[e+"-right"+t],i&&(o=m[e+"-bottom"+t],o&&(a=m[e+"-left"+t])))){var s=[r,i,o,a];for(l=s.length-1;l--&&s[l]===s[l+1];);l>-1&&n||(m[e+t]=-1==l?s[0]:s.join(" "),delete m[e+"-top"+t],delete m[e+"-right"+t],delete m[e+"-bottom"+t],delete m[e+"-left"+t])}}function u(e){var t=m[e],n;if(t){for(t=t.split(" "),n=t.length;n--;)if(t[n]!==t[0])return!1;return m[e]=t[0],!0}}function d(e,t,n,r){u(t)&&u(n)&&u(r)&&(m[e]=m[t]+" "+m[n]+" "+m[r],delete m[t],delete m[n],delete m[r])}function f(e){return b=!0,c[e]}function h(e,t){return b&&(e=e.replace(/\uFEFF[0-9]/g,function(e){return c[e]})),t||(e=e.replace(/\\([\'\";:])/g,"$1")),e}function p(t,n,r,i,o,a){if(o=o||a)return o=h(o),"'"+o.replace(/\'/g,"\\'")+"'";if(n=h(n||r||i),!e.allow_script_urls){var s=n.replace(/[\s\r\n]+/,"");if(/(java|vb)script:/i.test(s))return"";if(!e.allow_svg_data_urls&&/^data:image\/svg/i.test(s))return""}return C&&(n=C.call(x,n,"style")),"url('"+n.replace(/\'/g,"\\'")+"')"}var m={},g,v,y,b,C=e.url_converter,x=e.url_converter_scope||this;if(t){for(t=t.replace(/[\u0000-\u001F]/g,""),t=t.replace(/\\[\"\';:\uFEFF]/g,f).replace(/\"[^\"]+\"|\'[^\']+\'/g,function(e){return e.replace(/[;:]/g,f)});g=o.exec(t);){if(v=g[1].replace(a,"").toLowerCase(),y=g[2].replace(a,""),y=y.replace(/\\[0-9a-f]+/g,function(e){return String.fromCharCode(parseInt(e.substr(1),16))}),v&&y.length>0){if(!e.allow_script_urls&&("behavior"==v||/expression\s*\(|\/\*|\*\//.test(y)))continue;"font-weight"===v&&"700"===y?y="bold":("color"===v||"background-color"===v)&&(y=y.toLowerCase()),y=y.replace(r,n),y=y.replace(i,p),m[v]=b?h(y,!0):y}o.lastIndex=g.index+g[0].length}s("border","",!0),s("border","-width"),s("border","-color"),s("border","-style"),s("padding",""),s("margin",""),d("border","border-width","border-style","border-color"),"medium none"===m.border&&delete m.border,"none"===m["border-image"]&&delete m["border-image"]}return m},serialize:function(e,t){function n(t){var n,r,o,a;if(n=d[t])for(r=0,o=n.length;o>r;r++)t=n[r],a=e[t],a!==s&&a.length>0&&(i+=(i.length>0?" ":"")+t+": "+a+";")}function r(e,t){var n;return n=f["*"],n&&n[e]?!1:(n=f[t],n&&n[e]?!1:!0)}var i="",o,a;if(t&&d)n("*"),n(t);else for(o in e)a=e[o],a!==s&&a.length>0&&(!f||r(o,t))&&(i+=(i.length>0?" ":"")+o+": "+a+";");return i}}}}),r(y,[],function(){return function(e,t){function n(e,n,r,i){var o,a;if(e){if(!i&&e[n])return e[n];if(e!=t){if(o=e[r])return o;for(a=e.parentNode;a&&a!=t;a=a.parentNode)if(o=a[r])return o}}}var r=e;this.current=function(){return r},this.next=function(e){return r=n(r,"firstChild","nextSibling",e)},this.prev=function(e){return r=n(r,"lastChild","previousSibling",e)}}}),r(b,[m],function(e){function t(n){function r(){return P.createDocumentFragment()}function i(e,t){E(F,e,t)}function o(e,t){E(z,e,t)}function a(e){i(e.parentNode,j(e))}function s(e){i(e.parentNode,j(e)+1)}function l(e){o(e.parentNode,j(e))}function c(e){o(e.parentNode,j(e)+1)}function u(e){e?(L[U]=L[V],L[$]=L[W]):(L[V]=L[U],L[W]=L[$]),L.collapsed=F}function d(e){a(e),c(e)}function f(e){i(e,0),o(e,1===e.nodeType?e.childNodes.length:e.nodeValue.length)}function h(e,t){var n=L[V],r=L[W],i=L[U],o=L[$],a=t.startContainer,s=t.startOffset,l=t.endContainer,c=t.endOffset;return 0===e?w(n,r,a,s):1===e?w(i,o,a,s):2===e?w(i,o,l,c):3===e?w(n,r,l,c):void 0}function p(){N(I)}function m(){return N(H)}function g(){return N(O)}function v(e){var t=this[V],r=this[W],i,o;3!==t.nodeType&&4!==t.nodeType||!t.nodeValue?(t.childNodes.length>0&&(o=t.childNodes[r]),o?t.insertBefore(e,o):3==t.nodeType?n.insertAfter(e,t):t.appendChild(e)):r?r>=t.nodeValue.length?n.insertAfter(e,t):(i=t.splitText(r),t.parentNode.insertBefore(e,i)):t.parentNode.insertBefore(e,t)}function y(e){var t=L.extractContents();L.insertNode(e),e.appendChild(t),L.selectNode(e)}function b(){return q(new t(n),{startContainer:L[V],startOffset:L[W],endContainer:L[U],endOffset:L[$],collapsed:L.collapsed,commonAncestorContainer:L.commonAncestorContainer})}function C(e,t){var n;if(3==e.nodeType)return e;if(0>t)return e;for(n=e.firstChild;n&&t>0;)--t,n=n.nextSibling;return n?n:e}function x(){return L[V]==L[U]&&L[W]==L[$]}function w(e,t,r,i){var o,a,s,l,c,u;if(e==r)return t==i?0:i>t?-1:1;for(o=r;o&&o.parentNode!=e;)o=o.parentNode;if(o){for(a=0,s=e.firstChild;s!=o&&t>a;)a++,s=s.nextSibling;return a>=t?-1:1}for(o=e;o&&o.parentNode!=r;)o=o.parentNode;if(o){for(a=0,s=r.firstChild;s!=o&&i>a;)a++,s=s.nextSibling;return i>a?-1:1}for(l=n.findCommonAncestor(e,r),c=e;c&&c.parentNode!=l;)c=c.parentNode;for(c||(c=l),u=r;u&&u.parentNode!=l;)u=u.parentNode;if(u||(u=l),c==u)return 0;for(s=l.firstChild;s;){if(s==c)return-1;if(s==u)return 1;s=s.nextSibling}}function E(e,t,r){var i,o;for(e?(L[V]=t,L[W]=r):(L[U]=t,L[$]=r),i=L[U];i.parentNode;)i=i.parentNode;for(o=L[V];o.parentNode;)o=o.parentNode;o==i?w(L[V],L[W],L[U],L[$])>0&&L.collapse(e):L.collapse(e),L.collapsed=x(),L.commonAncestorContainer=n.findCommonAncestor(L[V],L[U])}function N(e){var t,n=0,r=0,i,o,a,s,l,c;if(L[V]==L[U])return _(e);for(t=L[U],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[V])return S(t,e);++n}for(t=L[V],i=t.parentNode;i;t=i,i=i.parentNode){if(i==L[U])return k(t,e);++r}for(o=r-n,a=L[V];o>0;)a=a.parentNode,o--;for(s=L[U];0>o;)s=s.parentNode,o++;for(l=a.parentNode,c=s.parentNode;l!=c;l=l.parentNode,c=c.parentNode)a=l,s=c;return T(a,s,e)}function _(e){var t,n,i,o,a,s,l,c,u;if(e!=I&&(t=r()),L[W]==L[$])return t;if(3==L[V].nodeType){if(n=L[V].nodeValue,i=n.substring(L[W],L[$]),e!=O&&(o=L[V],c=L[W],u=L[$]-L[W],0===c&&u>=o.nodeValue.length-1?o.parentNode.removeChild(o):o.deleteData(c,u),L.collapse(F)),e==I)return;return i.length>0&&t.appendChild(P.createTextNode(i)),t}for(o=C(L[V],L[W]),a=L[$]-L[W];o&&a>0;)s=o.nextSibling,l=D(o,e),t&&t.appendChild(l),--a,o=s;return e!=O&&L.collapse(F),t}function S(e,t){var n,i,o,a,s,l;if(t!=I&&(n=r()),i=R(e,t),n&&n.appendChild(i),o=j(e),a=o-L[W],0>=a)return t!=O&&(L.setEndBefore(e),L.collapse(z)),n;for(i=e.previousSibling;a>0;)s=i.previousSibling,l=D(i,t),n&&n.insertBefore(l,n.firstChild),--a,i=s;return t!=O&&(L.setEndBefore(e),L.collapse(z)),n}function k(e,t){var n,i,o,a,s,l;for(t!=I&&(n=r()),o=A(e,t),n&&n.appendChild(o),i=j(e),++i,a=L[$]-i,o=e.nextSibling;o&&a>0;)s=o.nextSibling,l=D(o,t),n&&n.appendChild(l),--a,o=s;return t!=O&&(L.setStartAfter(e),L.collapse(F)),n}function T(e,t,n){var i,o,a,s,l,c,u;for(n!=I&&(o=r()),i=A(e,n),o&&o.appendChild(i),a=j(e),s=j(t),++a,l=s-a,c=e.nextSibling;l>0;)u=c.nextSibling,i=D(c,n),o&&o.appendChild(i),c=u,--l;return i=R(t,n),o&&o.appendChild(i),n!=O&&(L.setStartAfter(e),L.collapse(F)),o}function R(e,t){var n=C(L[U],L[$]-1),r,i,o,a,s,l=n!=L[U];if(n==e)return B(n,l,z,t);for(r=n.parentNode,i=B(r,z,z,t);r;){for(;n;)o=n.previousSibling,a=B(n,l,z,t),t!=I&&i.insertBefore(a,i.firstChild),l=F,n=o;if(r==e)return i;n=r.previousSibling,r=r.parentNode,s=B(r,z,z,t),t!=I&&s.appendChild(i),i=s}}function A(e,t){var n=C(L[V],L[W]),r=n!=L[V],i,o,a,s,l;if(n==e)return B(n,r,F,t);for(i=n.parentNode,o=B(i,z,F,t);i;){for(;n;)a=n.nextSibling,s=B(n,r,F,t),t!=I&&o.appendChild(s),r=F,n=a;if(i==e)return o;n=i.nextSibling,i=i.parentNode,l=B(i,z,F,t),t!=I&&l.appendChild(o),o=l}}function B(e,t,r,i){var o,a,s,l,c;if(t)return D(e,i);if(3==e.nodeType){if(o=e.nodeValue,r?(l=L[W],a=o.substring(l),s=o.substring(0,l)):(l=L[$],a=o.substring(0,l),s=o.substring(l)),i!=O&&(e.nodeValue=s),i==I)return;return c=n.clone(e,z),c.nodeValue=a,c}if(i!=I)return n.clone(e,z)}function D(e,t){return t!=I?t==O?n.clone(e,F):e:void e.parentNode.removeChild(e)}function M(){return n.create("body",null,g()).outerText}var L=this,P=n.doc,H=0,O=1,I=2,F=!0,z=!1,W="startOffset",V="startContainer",U="endContainer",$="endOffset",q=e.extend,j=n.nodeIndex;return q(L,{startContainer:P,startOffset:0,endContainer:P,endOffset:0,collapsed:F,commonAncestorContainer:P,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:i,setEnd:o,setStartBefore:a,setStartAfter:s,setEndBefore:l,setEndAfter:c,collapse:u,selectNode:d,selectNodeContents:f,compareBoundaryPoints:h,deleteContents:p,extractContents:m,cloneContents:g,insertNode:v,surroundContents:y,cloneRange:b,toStringIE:M}),L}return t.prototype.toString=function(){return this.toStringIE()},t}),r(C,[m],function(e){function t(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.textContent||t.innerText||e}function n(e,t){var n,r,i,a={};if(e){for(e=e.split(","),t=t||10,n=0;n<e.length;n+=2)r=String.fromCharCode(parseInt(e[n],t)),o[r]||(i="&"+e[n+1]+";",a[r]=i,a[i]=r);return a}}var r=e.makeMap,i,o,a,s=/[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,l=/[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,c=/[<>&\"\']/g,u=/&#([a-z0-9]+);?|&([a-z0-9]+);/gi,d={128:"\u20ac",130:"\u201a",131:"\u0192",132:"\u201e",133:"\u2026",134:"\u2020",135:"\u2021",136:"\u02c6",137:"\u2030",138:"\u0160",139:"\u2039",140:"\u0152",142:"\u017d",145:"\u2018",146:"\u2019",147:"\u201c",148:"\u201d",149:"\u2022",150:"\u2013",151:"\u2014",152:"\u02dc",153:"\u2122",154:"\u0161",155:"\u203a",156:"\u0153",158:"\u017e",159:"\u0178"};o={'"':"&quot;","'":"&#39;","<":"&lt;",">":"&gt;","&":"&amp;","`":"&#96;"},a={"&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&apos;":"'"},i=n("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro",32);var f={encodeRaw:function(e,t){return e.replace(t?s:l,function(e){return o[e]||e})},encodeAllRaw:function(e){return(""+e).replace(c,function(e){return o[e]||e})},encodeNumeric:function(e,t){return e.replace(t?s:l,function(e){return e.length>1?"&#"+(1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320)+65536)+";":o[e]||"&#"+e.charCodeAt(0)+";"})},encodeNamed:function(e,t,n){return n=n||i,e.replace(t?s:l,function(e){return o[e]||n[e]||e})},getEncodeFunc:function(e,t){function a(e,n){return e.replace(n?s:l,function(e){return o[e]||t[e]||"&#"+e.charCodeAt(0)+";"||e})}function c(e,n){return f.encodeNamed(e,n,t)}return t=n(t)||i,e=r(e.replace(/\+/g,",")),e.named&&e.numeric?a:e.named?t?c:f.encodeNamed:e.numeric?f.encodeNumeric:f.encodeRaw},decode:function(e){return e.replace(u,function(e,n){return n?(n="x"===n.charAt(0).toLowerCase()?parseInt(n.substr(1),16):parseInt(n,10),n>65535?(n-=65536,String.fromCharCode(55296+(n>>10),56320+(1023&n))):d[n]||String.fromCharCode(n)):a[e]||i[e]||t(e)})}};return f}),r(x,[m,u],function(e,t){return function(n,r){function i(e){n.getElementsByTagName("head")[0].appendChild(e)}function o(r,o,c){function u(){for(var e=b.passed,t=e.length;t--;)e[t]();b.status=2,b.passed=[],b.failed=[]}function d(){for(var e=b.failed,t=e.length;t--;)e[t]();b.status=3,b.passed=[],b.failed=[]}function f(){var e=navigator.userAgent.match(/WebKit\/(\d*)/);return!!(e&&e[1]<536)}function h(e,n){e()||((new Date).getTime()-y<l?t.setTimeout(n):d())}function p(){h(function(){for(var e=n.styleSheets,t,r=e.length,i;r--;)if(t=e[r],i=t.ownerNode?t.ownerNode:t.owningElement,i&&i.id===g.id)return u(),!0},p)}function m(){h(function(){try{var e=v.sheet.cssRules;return u(),!!e}catch(t){}},m)}var g,v,y,b;if(r=e._addCacheSuffix(r),s[r]?b=s[r]:(b={passed:[],failed:[]},s[r]=b),o&&b.passed.push(o),c&&b.failed.push(c),1!=b.status){if(2==b.status)return void u();if(3==b.status)return void d();if(b.status=1,g=n.createElement("link"),g.rel="stylesheet",g.type="text/css",g.id="u"+a++,g.async=!1,g.defer=!1,y=(new Date).getTime(),"onload"in g&&!f())g.onload=p,g.onerror=d;else{if(navigator.userAgent.indexOf("Firefox")>0)return v=n.createElement("style"),v.textContent='@import "'+r+'"',m(),void i(v);p()}i(g),g.href=r}}var a=0,s={},l;r=r||{},l=r.maxLoadTime||5e3,this.load=o}}),r(w,[f,g,v,d,y,b,C,h,m,x],function(e,n,r,i,o,a,s,l,c,u){function d(e,t){var n={},r=t.keep_values,i;return i={set:function(n,r,i){t.url_converter&&(r=t.url_converter.call(t.url_converter_scope||e,r,i,n[0])),n.attr("data-mce-"+i,r).attr(i,r)},get:function(e,t){return e.attr("data-mce-"+t)||e.attr(t)}},n={style:{set:function(e,t){return null!==t&&"object"==typeof t?void e.css(t):(r&&e.attr("data-mce-style",t),void e.attr("style",t))},get:function(t){var n=t.attr("data-mce-style")||t.attr("style");return n=e.serializeStyle(e.parseStyle(n),t[0].nodeName)}}},r&&(n.href=n.src=i),n}function f(e,t){var n=t.attr("style");n=e.serializeStyle(e.parseStyle(n),t[0].nodeName),n||(n=null),t.attr("data-mce-style",n)}function h(e,t){var n=0,r,i;if(e)for(r=e.nodeType,e=e.previousSibling;e;e=e.previousSibling)i=e.nodeType,(!t||3!=i||i!=r&&e.nodeValue.length)&&(n++,r=i);return n}function p(e,t){var o=this,a;o.doc=e,o.win=window,o.files={},o.counter=0,o.stdMode=!b||e.documentMode>=8,o.boxModel=!b||"CSS1Compat"==e.compatMode||o.stdMode,o.styleSheetLoader=new u(e),o.boundEvents=[],o.settings=t=t||{},o.schema=t.schema,o.styles=new r({url_converter:t.url_converter,url_converter_scope:t.url_converter_scope},t.schema),o.fixDoc(e),o.events=t.ownEvents?new i(t.proxy):i.Event,o.attrHooks=d(o,t),a=t.schema?t.schema.getBlockElements():{},o.$=n.overrideDefaults(function(){return{context:e,element:o.getRoot()}}),o.isBlock=function(e){if(!e)return!1;var t=e.nodeType;return t?!(1!==t||!a[e.nodeName]):!!a[e]}}var m=c.each,g=c.is,v=c.grep,y=c.trim,b=l.ie,C=/^([a-z0-9],?)+$/i,x=/^[ \t\r\n]*$/;return p.prototype={$$:function(e){return"string"==typeof e&&(e=this.get(e)),this.$(e)},root:null,fixDoc:function(e){var t=this.settings,n;if(b&&t.schema){"abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video".replace(/\w+/g,function(t){e.createElement(t)});for(n in t.schema.getCustomElements())e.createElement(n)}},clone:function(e,t){var n=this,r,i;return!b||1!==e.nodeType||t?e.cloneNode(t):(i=n.doc,t?r.firstChild:(r=i.createElement(e.nodeName),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),r))},getRoot:function(){var e=this;return e.settings.root_element||e.doc.body},getViewPort:function(e){var t,n;return e=e?e:this.win,t=e.document,n=this.boxModel?t.documentElement:t.body,{x:e.pageXOffset||n.scrollLeft,y:e.pageYOffset||n.scrollTop,w:e.innerWidth||n.clientWidth,h:e.innerHeight||n.clientHeight}},getRect:function(e){var t=this,n,r;return e=t.get(e),n=t.getPos(e),r=t.getSize(e),{x:n.x,y:n.y,w:r.w,h:r.h}},getSize:function(e){var t=this,n,r;return e=t.get(e),n=t.getStyle(e,"width"),r=t.getStyle(e,"height"),-1===n.indexOf("px")&&(n=0),-1===r.indexOf("px")&&(r=0),{w:parseInt(n,10)||e.offsetWidth||e.clientWidth,h:parseInt(r,10)||e.offsetHeight||e.clientHeight}},getParent:function(e,t,n){return this.getParents(e,t,n,!1)},getParents:function(e,n,r,i){var o=this,a,s=[];for(e=o.get(e),i=i===t,r=r||("BODY"!=o.getRoot().nodeName?o.getRoot().parentNode:null),g(n,"string")&&(a=n,n="*"===n?function(e){return 1==e.nodeType}:function(e){return o.is(e,a)});e&&e!=r&&e.nodeType&&9!==e.nodeType;){if(!n||n(e)){if(!i)return e;s.push(e)}e=e.parentNode}return i?s:null},get:function(e){var t;return e&&this.doc&&"string"==typeof e&&(t=e,e=this.doc.getElementById(e),e&&e.id!==t)?this.doc.getElementsByName(t)[1]:e},getNext:function(e,t){return this._findSib(e,t,"nextSibling")},getPrev:function(e,t){return this._findSib(e,t,"previousSibling")},select:function(t,n){var r=this;return e(t,r.get(n)||r.settings.root_element||r.doc,[])},is:function(n,r){var i;if(n.length===t){if("*"===r)return 1==n.nodeType;if(C.test(r)){for(r=r.toLowerCase().split(/,/),n=n.nodeName.toLowerCase(),i=r.length-1;i>=0;i--)if(r[i]==n)return!0;return!1}}if(n.nodeType&&1!=n.nodeType)return!1;var o=n.nodeType?[n]:n;return e(r,o[0].ownerDocument||o[0],null,o).length>0;
},add:function(e,t,n,r,i){var o=this;return this.run(e,function(e){var a;return a=g(t,"string")?o.doc.createElement(t):t,o.setAttribs(a,n),r&&(r.nodeType?a.appendChild(r):o.setHTML(a,r)),i?a:e.appendChild(a)})},create:function(e,t,n){return this.add(this.doc.createElement(e),e,t,n,1)},createHTML:function(e,t,n){var r="",i;r+="<"+e;for(i in t)t.hasOwnProperty(i)&&null!==t[i]&&"undefined"!=typeof t[i]&&(r+=" "+i+'="'+this.encode(t[i])+'"');return"undefined"!=typeof n?r+">"+n+"</"+e+">":r+" />"},createFragment:function(e){var t,n,r=this.doc,i;for(i=r.createElement("div"),t=r.createDocumentFragment(),e&&(i.innerHTML=e);n=i.firstChild;)t.appendChild(n);return t},remove:function(e,t){return e=this.$$(e),t?e.each(function(){for(var e;e=this.firstChild;)3==e.nodeType&&0===e.data.length?this.removeChild(e):this.parentNode.insertBefore(e,this)}).remove():e.remove(),e.length>1?e.toArray():e[0]},setStyle:function(e,t,n){e=this.$$(e).css(t,n),this.settings.update_styles&&f(this,e)},getStyle:function(e,n,r){return e=this.$$(e),r?e.css(n):(n=n.replace(/-(\D)/g,function(e,t){return t.toUpperCase()}),"float"==n&&(n=l.ie&&l.ie<12?"styleFloat":"cssFloat"),e[0]&&e[0].style?e[0].style[n]:t)},setStyles:function(e,t){e=this.$$(e).css(t),this.settings.update_styles&&f(this,e)},removeAllAttribs:function(e){return this.run(e,function(e){var t,n=e.attributes;for(t=n.length-1;t>=0;t--)e.removeAttributeNode(n.item(t))})},setAttrib:function(e,t,n){var r=this,i,o,a=r.settings;""===n&&(n=null),e=r.$$(e),i=e.attr(t),e.length&&(o=r.attrHooks[t],o&&o.set?o.set(e,n,t):e.attr(t,n),i!=n&&a.onSetAttrib&&a.onSetAttrib({attrElm:e,attrName:t,attrValue:n}))},setAttribs:function(e,t){var n=this;n.$$(e).each(function(e,r){m(t,function(e,t){n.setAttrib(r,t,e)})})},getAttrib:function(e,t,n){var r=this,i,o;return e=r.$$(e),e.length&&(i=r.attrHooks[t],o=i&&i.get?i.get(e,t):e.attr(t)),"undefined"==typeof o&&(o=n||""),o},getPos:function(e,t){var r=this,i=0,o=0,a,s=r.doc,l=s.body,c;if(e=r.get(e),t=t||l,e){if(t===l&&e.getBoundingClientRect&&"static"===n(l).css("position"))return c=e.getBoundingClientRect(),t=r.boxModel?s.documentElement:l,i=c.left+(s.documentElement.scrollLeft||l.scrollLeft)-t.clientLeft,o=c.top+(s.documentElement.scrollTop||l.scrollTop)-t.clientTop,{x:i,y:o};for(a=e;a&&a!=t&&a.nodeType;)i+=a.offsetLeft||0,o+=a.offsetTop||0,a=a.offsetParent;for(a=e.parentNode;a&&a!=t&&a.nodeType;)i-=a.scrollLeft||0,o-=a.scrollTop||0,a=a.parentNode}return{x:i,y:o}},parseStyle:function(e){return this.styles.parse(e)},serializeStyle:function(e,t){return this.styles.serialize(e,t)},addStyle:function(e){var t=this,n=t.doc,r,i;if(t!==p.DOM&&n===document){var o=p.DOM.addedStyles;if(o=o||[],o[e])return;o[e]=!0,p.DOM.addedStyles=o}i=n.getElementById("mceDefaultStyles"),i||(i=n.createElement("style"),i.id="mceDefaultStyles",i.type="text/css",r=n.getElementsByTagName("head")[0],r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i)),i.styleSheet?i.styleSheet.cssText+=e:i.appendChild(n.createTextNode(e))},loadCSS:function(e){var t=this,n=t.doc,r;return t!==p.DOM&&n===document?void p.DOM.loadCSS(e):(e||(e=""),r=n.getElementsByTagName("head")[0],void m(e.split(","),function(e){var i;e=c._addCacheSuffix(e),t.files[e]||(t.files[e]=!0,i=t.create("link",{rel:"stylesheet",href:e}),b&&n.documentMode&&n.recalc&&(i.onload=function(){n.recalc&&n.recalc(),i.onload=null}),r.appendChild(i))}))},addClass:function(e,t){this.$$(e).addClass(t)},removeClass:function(e,t){this.toggleClass(e,t,!1)},hasClass:function(e,t){return this.$$(e).hasClass(t)},toggleClass:function(e,t,r){this.$$(e).toggleClass(t,r).each(function(){""===this.className&&n(this).attr("class",null)})},show:function(e){this.$$(e).show()},hide:function(e){this.$$(e).hide()},isHidden:function(e){return"none"==this.$$(e).css("display")},uniqueId:function(e){return(e?e:"mce_")+this.counter++},setHTML:function(e,t){e=this.$$(e),b?e.each(function(e,r){if(r.canHaveHTML!==!1){for(;r.firstChild;)r.removeChild(r.firstChild);try{r.innerHTML="<br>"+t,r.removeChild(r.firstChild)}catch(i){n("<div>").html("<br>"+t).contents().slice(1).appendTo(r)}return t}}):e.html(t)},getOuterHTML:function(e){return e=this.get(e),1==e.nodeType&&"outerHTML"in e?e.outerHTML:n("<div>").append(n(e).clone()).html()},setOuterHTML:function(e,t){var r=this;r.$$(e).each(function(){try{if("outerHTML"in this)return void(this.outerHTML=t)}catch(e){}r.remove(n(this).html(t),!0)})},decode:s.decode,encode:s.encodeAllRaw,insertAfter:function(e,t){return t=this.get(t),this.run(e,function(e){var n,r;return n=t.parentNode,r=t.nextSibling,r?n.insertBefore(e,r):n.appendChild(e),e})},replace:function(e,t,n){var r=this;return r.run(t,function(t){return g(t,"array")&&(e=e.cloneNode(!0)),n&&m(v(t.childNodes),function(t){e.appendChild(t)}),t.parentNode.replaceChild(e,t)})},rename:function(e,t){var n=this,r;return e.nodeName!=t.toUpperCase()&&(r=n.create(t),m(n.getAttribs(e),function(t){n.setAttrib(r,t.nodeName,n.getAttrib(e,t.nodeName))}),n.replace(r,e,1)),r||e},findCommonAncestor:function(e,t){for(var n=e,r;n;){for(r=t;r&&n!=r;)r=r.parentNode;if(n==r)break;n=n.parentNode}return!n&&e.ownerDocument?e.ownerDocument.documentElement:n},toHex:function(e){return this.styles.toHex(c.trim(e))},run:function(e,t,n){var r=this,i;return"string"==typeof e&&(e=r.get(e)),e?(n=n||this,e.nodeType||!e.length&&0!==e.length?t.call(n,e):(i=[],m(e,function(e,o){e&&("string"==typeof e&&(e=r.get(e)),i.push(t.call(n,e,o)))}),i)):!1},getAttribs:function(e){var t;if(e=this.get(e),!e)return[];if(b){if(t=[],"OBJECT"==e.nodeName)return e.attributes;"OPTION"===e.nodeName&&this.getAttrib(e,"selected")&&t.push({specified:1,nodeName:"selected"});var n=/<\/?[\w:\-]+ ?|=[\"][^\"]+\"|=\'[^\']+\'|=[\w\-]+|>/gi;return e.cloneNode(!1).outerHTML.replace(n,"").replace(/[\w:\-]+/gi,function(e){t.push({specified:1,nodeName:e})}),t}return e.attributes},isEmpty:function(e,t){var n=this,r,i,a,s,l,c=0;if(e=e.firstChild){s=new o(e,e.parentNode),t=t||(n.schema?n.schema.getNonEmptyElements():null);do{if(a=e.nodeType,1===a){if(e.getAttribute("data-mce-bogus"))continue;if(l=e.nodeName.toLowerCase(),t&&t[l]){if("br"===l){c++;continue}return!1}for(i=n.getAttribs(e),r=i.length;r--;)if(l=i[r].nodeName,"name"===l||"data-mce-bookmark"===l)return!1}if(8==a)return!1;if(3===a&&!x.test(e.nodeValue))return!1}while(e=s.next())}return 1>=c},createRng:function(){var e=this.doc;return e.createRange?e.createRange():new a(this)},nodeIndex:h,split:function(e,t,n){function r(e){function t(e){var t=e.previousSibling&&"SPAN"==e.previousSibling.nodeName,n=e.nextSibling&&"SPAN"==e.nextSibling.nodeName;return t&&n}var n,o=e.childNodes,a=e.nodeType;if(1!=a||"bookmark"!=e.getAttribute("data-mce-type")){for(n=o.length-1;n>=0;n--)r(o[n]);if(9!=a){if(3==a&&e.nodeValue.length>0){var s=y(e.nodeValue).length;if(!i.isBlock(e.parentNode)||s>0||0===s&&t(e))return}else if(1==a&&(o=e.childNodes,1==o.length&&o[0]&&1==o[0].nodeType&&"bookmark"==o[0].getAttribute("data-mce-type")&&e.parentNode.insertBefore(o[0],e),o.length||/^(br|hr|input|img)$/i.test(e.nodeName)))return;i.remove(e)}return e}}var i=this,o=i.createRng(),a,s,l;return e&&t?(o.setStart(e.parentNode,i.nodeIndex(e)),o.setEnd(t.parentNode,i.nodeIndex(t)),a=o.extractContents(),o=i.createRng(),o.setStart(t.parentNode,i.nodeIndex(t)+1),o.setEnd(e.parentNode,i.nodeIndex(e)+1),s=o.extractContents(),l=e.parentNode,l.insertBefore(r(a),e),n?l.insertBefore(n,e):l.insertBefore(t,e),l.insertBefore(r(s),e),i.remove(e),n||t):void 0},bind:function(e,t,n,r){var i=this;if(c.isArray(e)){for(var o=e.length;o--;)e[o]=i.bind(e[o],t,n,r);return e}return!i.settings.collect||e!==i.doc&&e!==i.win||i.boundEvents.push([e,t,n,r]),i.events.bind(e,t,n,r||i)},unbind:function(e,t,n){var r=this,i;if(c.isArray(e)){for(i=e.length;i--;)e[i]=r.unbind(e[i],t,n);return e}if(r.boundEvents&&(e===r.doc||e===r.win))for(i=r.boundEvents.length;i--;){var o=r.boundEvents[i];e!=o[0]||t&&t!=o[1]||n&&n!=o[2]||this.events.unbind(o[0],o[1],o[2])}return this.events.unbind(e,t,n)},fire:function(e,t,n){return this.events.fire(e,t,n)},getContentEditable:function(e){var t;return e&&1==e.nodeType?(t=e.getAttribute("data-mce-contenteditable"),t&&"inherit"!==t?t:"inherit"!==e.contentEditable?e.contentEditable:null):null},getContentEditableParent:function(e){for(var t=this.getRoot(),n=null;e&&e!==t&&(n=this.getContentEditable(e),null===n);e=e.parentNode);return n},destroy:function(){var t=this;if(t.boundEvents){for(var n=t.boundEvents.length;n--;){var r=t.boundEvents[n];this.events.unbind(r[0],r[1],r[2])}t.boundEvents=null}e.setDocument&&e.setDocument(),t.win=t.doc=t.root=t.events=t.frag=null},isChildOf:function(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1},dumpRng:function(e){return"startContainer: "+e.startContainer.nodeName+", startOffset: "+e.startOffset+", endContainer: "+e.endContainer.nodeName+", endOffset: "+e.endOffset},_findSib:function(e,t,n){var r=this,i=t;if(e)for("string"==typeof i&&(i=function(e){return r.is(e,t)}),e=e[n];e;e=e[n])if(i(e))return e;return null}},p.DOM=new p(document),p.nodeIndex=h,p}),r(E,[w,m],function(e,t){function n(){function e(e,n){function i(){a.remove(l),s&&(s.onreadystatechange=s.onload=s=null),n()}function o(){"undefined"!=typeof console&&console.log&&console.log("Failed to load: "+e)}var a=r,s,l;l=a.uniqueId(),s=document.createElement("script"),s.id=l,s.type="text/javascript",s.src=t._addCacheSuffix(e),"onreadystatechange"in s?s.onreadystatechange=function(){/loaded|complete/.test(s.readyState)&&i()}:s.onload=i,s.onerror=o,(document.getElementsByTagName("head")[0]||document.body).appendChild(s)}var n=0,a=1,s=2,l={},c=[],u={},d=[],f=0,h;this.isDone=function(e){return l[e]==s},this.markDone=function(e){l[e]=s},this.add=this.load=function(e,t,r){var i=l[e];i==h&&(c.push(e),l[e]=n),t&&(u[e]||(u[e]=[]),u[e].push({func:t,scope:r||this}))},this.loadQueue=function(e,t){this.loadScripts(c,e,t)},this.loadScripts=function(t,n,r){function c(e){i(u[e],function(e){e.func.call(e.scope)}),u[e]=h}var p;d.push({func:n,scope:r||this}),(p=function(){var n=o(t);t.length=0,i(n,function(t){return l[t]==s?void c(t):void(l[t]!=a&&(l[t]=a,f++,e(t,function(){l[t]=s,f--,c(t),p()})))}),f||(i(d,function(e){e.func.call(e.scope)}),d.length=0)})()}}var r=e.DOM,i=t.each,o=t.grep;return n.ScriptLoader=new n,n}),r(N,[E,m],function(e,n){function r(){var e=this;e.items=[],e.urls={},e.lookup={}}var i=n.each;return r.prototype={get:function(e){return this.lookup[e]?this.lookup[e].instance:t},dependencies:function(e){var t;return this.lookup[e]&&(t=this.lookup[e].dependencies),t||[]},requireLangPack:function(t,n){var i=r.language;if(i&&r.languageLoad!==!1){if(n)if(n=","+n+",",-1!=n.indexOf(","+i.substr(0,2)+","))i=i.substr(0,2);else if(-1==n.indexOf(","+i+","))return;e.ScriptLoader.add(this.urls[t]+"/langs/"+i+".js")}},add:function(e,t,n){return this.items.push(t),this.lookup[e]={instance:t,dependencies:n},t},createUrl:function(e,t){return"object"==typeof t?t:{prefix:e.prefix,resource:t,suffix:e.suffix}},addComponents:function(t,n){var r=this.urls[t];i(n,function(t){e.ScriptLoader.add(r+"/"+t)})},load:function(n,o,a,s){function l(){var r=c.dependencies(n);i(r,function(e){var n=c.createUrl(o,e);c.load(n.resource,n,t,t)}),a&&(s?a.call(s):a.call(e))}var c=this,u=o;c.urls[n]||("object"==typeof o&&(u=o.prefix+o.resource+o.suffix),0!==u.indexOf("/")&&-1==u.indexOf("://")&&(u=r.baseURL+"/"+u),c.urls[n]=u.substring(0,u.lastIndexOf("/")),c.lookup[n]?l():e.ScriptLoader.add(u,l,s))}},r.PluginManager=new r,r.ThemeManager=new r,r}),r(_,[],function(){function e(e){return function(t){return!!t&&t.nodeType==e}}function t(e){return e=e.toLowerCase().split(" "),function(t){var n,r;if(t&&t.nodeType)for(r=t.nodeName.toLowerCase(),n=0;n<e.length;n++)if(r===e[n])return!0;return!1}}function n(e,t){return t=t.toLowerCase().split(" "),function(n){var r,i;if(s(n))for(r=0;r<t.length;r++)if(i=getComputedStyle(n,null).getPropertyValue(e),i===t[r])return!0;return!1}}function r(e,t){return function(n){return s(n)&&n[e]===t}}function i(e,t){return function(n){return s(n)&&n.getAttribute(e)===t}}function o(e){return s(e)&&e.hasAttribute("data-mce-bogus")}function a(e){return function(t){if(s(t)){if(t.contentEditable===e)return!0;if(t.getAttribute("data-mce-contenteditable")===e)return!0}return!1}}var s=e(1);return{isText:e(3),isElement:s,isComment:e(8),isBr:t("br"),isContentEditableTrue:a("true"),isContentEditableFalse:a("false"),matchNodeNames:t,hasPropValue:r,hasAttributeValue:i,matchStyleValues:n,isBogus:o}}),r(S,[],function(){function e(e){return e==n}function t(e){return e.replace(new RegExp(n,"g"),"")}var n="\u200b";return{isZwsp:e,ZWSP:n,trim:t}}),r(k,[_,S],function(e,t){function n(e){return d(e)&&(e=e.parentNode),u(e)&&e.hasAttribute("data-mce-caret")}function r(e){return d(e)&&t.isZwsp(e.data)}function i(e){return n(e)||r(e)}function o(e,n){var r,o,a,s;if(r=e.ownerDocument,a=r.createTextNode(t.ZWSP),s=e.parentNode,n){if(o=e.previousSibling,d(o)){if(i(o))return o;if(c(o))return o.splitText(o.data.length-1)}s.insertBefore(a,e)}else{if(o=e.nextSibling,d(o)){if(i(o))return o;if(l(o))return o.splitText(1),o}e.nextSibling?s.insertBefore(a,e.nextSibling):s.appendChild(a)}return a}function a(e,t,n){var r,i,o;return r=t.ownerDocument,i=r.createElement(e),i.setAttribute("data-mce-caret",n?"before":"after"),i.setAttribute("data-mce-bogus","all"),i.appendChild(r.createTextNode("\xa0")),o=t.parentNode,n?o.insertBefore(i,t):t.nextSibling?o.insertBefore(i,t.nextSibling):o.appendChild(i),i}function s(e){var n;u(e)&&i(e)&&("&nbsp;"!=e.innerHTML?e.removeAttribute("data-mce-caret"):e.parentNode&&e.parentNode.removeChild(e)),d(e)&&(n=t.trim(e.data),0===n.length&&e.parentNode&&e.parentNode.removeChild(e),e.nodeValue=n)}function l(e){return d(e)&&e.data[0]==t.ZWSP}function c(e){return d(e)&&e.data[e.data.length-1]==t.ZWSP}var u=e.isElement,d=e.isText;return{isCaretContainer:i,isCaretContainerBlock:n,isCaretContainerInline:r,insertInline:o,insertBlock:a,remove:s,startsWithCaretContainer:l,endsWithCaretContainer:c}}),r(T,[m,y,_,k],function(e,t,n,r){function i(e,t){var n=e.childNodes;return t--,t>n.length-1?t=n.length-1:0>t&&(t=0),n[t]||e}function o(e){this.walk=function(t,n){function r(e){var t;return t=e[0],3===t.nodeType&&t===c&&u>=t.nodeValue.length&&e.splice(0,1),t=e[e.length-1],0===f&&e.length>0&&t===d&&3===t.nodeType&&e.splice(e.length-1,1),e}function o(e,t,n){for(var r=[];e&&e!=n;e=e[t])r.push(e);return r}function a(e,t){do{if(e.parentNode==t)return e;e=e.parentNode}while(e)}function l(e,t,i){var a=i?"nextSibling":"previousSibling";for(g=e,v=g.parentNode;g&&g!=t;g=v)v=g.parentNode,y=o(g==e?g:g[a],a),y.length&&(i||y.reverse(),n(r(y)))}var c=t.startContainer,u=t.startOffset,d=t.endContainer,f=t.endOffset,h,p,m,g,v,y,b;if(b=e.select("td.mce-item-selected,th.mce-item-selected"),b.length>0)return void s(b,function(e){n([e])});if(1==c.nodeType&&c.hasChildNodes()&&(c=c.childNodes[u]),1==d.nodeType&&d.hasChildNodes()&&(d=i(d,f)),c==d)return n(r([c]));for(h=e.findCommonAncestor(c,d),g=c;g;g=g.parentNode){if(g===d)return l(c,h,!0);if(g===h)break}for(g=d;g;g=g.parentNode){if(g===c)return l(d,h);if(g===h)break}p=a(c,h)||c,m=a(d,h)||d,l(c,p,!0),y=o(p==c?p:p.nextSibling,"nextSibling",m==d?m.nextSibling:m),y.length&&n(r(y)),l(d,m)},this.split=function(e){function t(e,t){return e.splitText(t)}var n=e.startContainer,r=e.startOffset,i=e.endContainer,o=e.endOffset;return n==i&&3==n.nodeType?r>0&&r<n.nodeValue.length&&(i=t(n,r),n=i.previousSibling,o>r?(o-=r,n=i=t(i,o).previousSibling,o=i.nodeValue.length,r=0):o=0):(3==n.nodeType&&r>0&&r<n.nodeValue.length&&(n=t(n,r),r=0),3==i.nodeType&&o>0&&o<i.nodeValue.length&&(i=t(i,o).previousSibling,o=i.nodeValue.length)),{startContainer:n,startOffset:r,endContainer:i,endOffset:o}},this.normalize=function(n){function r(r){function a(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function s(n,r){for(var i=new t(n,e.getParent(n.parentNode,e.isBlock)||g);n=i[r?"prev":"next"]();)if("BR"===n.nodeName)return!0}function u(e){for(;e&&e!=g;){if(l(e))return!0;e=e.parentNode}return!1}function d(e,t){return e.previousSibling&&e.previousSibling.nodeName==t}function f(n,r){var a,s,l;if(r=r||h,l=e.getParent(r.parentNode,e.isBlock)||g,n&&"BR"==r.nodeName&&C&&e.isEmpty(l))return h=r.parentNode,p=e.nodeIndex(r),void(i=!0);for(a=new t(r,l);v=a[n?"prev":"next"]();){if("false"===e.getContentEditableParent(v)||c(v))return;if(3===v.nodeType&&v.nodeValue.length>0)return h=v,p=n?v.nodeValue.length:0,void(i=!0);if(e.isBlock(v)||y[v.nodeName.toLowerCase()])return;s=v}o&&s&&(h=s,i=!0,p=0)}var h,p,m,g=e.getRoot(),v,y,b,C;if(h=n[(r?"start":"end")+"Container"],p=n[(r?"start":"end")+"Offset"],C=1==h.nodeType&&p===h.childNodes.length,y=e.schema.getNonEmptyElements(),b=r,!c(h)){if(1==h.nodeType&&p>h.childNodes.length-1&&(b=!1),9===h.nodeType&&(h=e.getRoot(),p=0),h===g){if(b&&(v=h.childNodes[p>0?p-1:0])){if(c(v))return;if(y[v.nodeName]||"TABLE"==v.nodeName)return}if(h.hasChildNodes()){if(p=Math.min(!b&&p>0?p-1:p,h.childNodes.length-1),h=h.childNodes[p],p=0,u(h)||c(h))return;if(h.hasChildNodes()&&!/TABLE/.test(h.nodeName)){v=h,m=new t(h,g);do{if(l(v)||c(v)){i=!1;break}if(3===v.nodeType&&v.nodeValue.length>0){p=b?0:v.nodeValue.length,h=v,i=!0;break}if(y[v.nodeName.toLowerCase()]&&!a(v)){p=e.nodeIndex(v),h=v.parentNode,"IMG"!=v.nodeName||b||p++,i=!0;break}}while(v=b?m.next():m.prev())}}}o&&(3===h.nodeType&&0===p&&f(!0),1===h.nodeType&&(v=h.childNodes[p],v||(v=h.childNodes[p-1]),!v||"BR"!==v.nodeName||d(v,"A")||s(v)||s(v,!0)||f(!0,v))),b&&!o&&3===h.nodeType&&p===h.nodeValue.length&&f(!1),i&&n["set"+(r?"Start":"End")](h,p)}}var i,o;return o=n.collapsed,r(!0),o||r(),i&&o&&n.collapse(!0),i}}function a(t,n,r){var i,o,a;if(i=r.elementFromPoint(t,n),o=r.body.createTextRange(),"HTML"==i.tagName&&(i=r.body),o.moveToElementText(i),a=e.toArray(o.getClientRects()),a=a.sort(function(e,t){return e=Math.abs(Math.max(e.top-n,e.bottom-n)),t=Math.abs(Math.max(t.top-n,t.bottom-n)),e-t}),a.length>0){n=(a[0].bottom+a[0].top)/2;try{return o.moveToPoint(t,n),o.collapse(!0),o}catch(s){}}return null}var s=e.each,l=n.isContentEditableFalse,c=r.isCaretContainer;return o.compareRanges=function(e,t){if(e&&t){if(!e.item&&!e.duplicate)return e.startContainer==t.startContainer&&e.startOffset==t.startOffset;if(e.item&&t.item&&e.item(0)===t.item(0))return!0;if(e.isEqual&&t.isEqual&&t.isEqual(e))return!0}return!1},o.getCaretRangeFromPoint=function(e,t,n){var r,i;if(n.caretPositionFromPoint)i=n.caretPositionFromPoint(e,t),r=n.createRange(),r.setStart(i.offsetNode,i.offset),r.collapse(!0);else if(n.caretRangeFromPoint)r=n.caretRangeFromPoint(e,t);else if(n.body.createTextRange){r=n.body.createTextRange();try{r.moveToPoint(e,t),r.collapse(!0)}catch(o){r=a(e,t,n)}}return r},o.getSelectedNode=function(e){var t=e.startContainer,n=e.startOffset;return t.hasChildNodes()&&e.endOffset==n+1?t.childNodes[n]:null},o.getNode=function(e,t){return 1==e.nodeType&&e.hasChildNodes()&&(t>=e.childNodes.length&&(t=e.childNodes.length-1),e=e.childNodes[t]),e},o}),r(R,[T,h,u],function(e,t,n){return function(r){function i(e){var t,n;if(n=r.$(e).parentsUntil(r.getBody()).add(e),n.length===a.length){for(t=n.length;t>=0&&n[t]===a[t];t--);if(-1===t)return a=n,!0}return a=n,!1}var o,a=[];"onselectionchange"in r.getDoc()||r.on("NodeChange Click MouseUp KeyUp Focus",function(t){var n,i;n=r.selection.getRng(),i={startContainer:n.startContainer,startOffset:n.startOffset,endContainer:n.endContainer,endOffset:n.endOffset},"nodechange"!=t.type&&e.compareRanges(i,o)||r.fire("SelectionChange"),o=i}),r.on("contextmenu",function(){r.fire("SelectionChange")}),r.on("SelectionChange",function(){var e=r.selection.getStart(!0);(t.range||!r.selection.isCollapsed())&&!i(e)&&r.dom.isChildOf(e,r.getBody())&&r.nodeChanged({selectionChange:!0})}),r.on("MouseUp",function(e){e.isDefaultPrevented()||("IMG"==r.selection.getNode().nodeName?n.setEditorTimeout(r,function(){r.nodeChanged()}):r.nodeChanged())}),this.nodeChanged=function(e){var t=r.selection,n,i,o;r.initialized&&t&&!r.settings.disable_nodechange&&!r.readonly&&(o=r.getBody(),n=t.getStart()||o,n=n.ownerDocument!=r.getDoc()?r.getBody():n,"IMG"==n.nodeName&&t.isCollapsed()&&(n=n.parentNode),i=[],r.dom.getParent(n,function(e){return e===o?!0:void i.push(e)}),e=e||{},e.element=n,e.parents=i,r.fire("NodeChange",e))}}}),r(A,[],function(){function e(e,t,n){var r,i,o=n?"lastChild":"firstChild",a=n?"prev":"next";if(e[o])return e[o];if(e!==t){if(r=e[a])return r;for(i=e.parent;i&&i!==t;i=i.parent)if(r=i[a])return r}}function t(e,t){this.name=e,this.type=t,1===t&&(this.attributes=[],this.attributes.map={})}var n=/^[ \t\r\n]*$/,r={"#text":3,"#comment":8,"#cdata":4,"#pi":7,"#doctype":10,"#document-fragment":11};return t.prototype={replace:function(e){var t=this;return e.parent&&e.remove(),t.insert(e,t),t.remove(),t},attr:function(e,t){var n=this,r,i,o;if("string"!=typeof e){for(i in e)n.attr(i,e[i]);return n}if(r=n.attributes){if(t!==o){if(null===t){if(e in r.map)for(delete r.map[e],i=r.length;i--;)if(r[i].name===e)return r=r.splice(i,1),n;return n}if(e in r.map){for(i=r.length;i--;)if(r[i].name===e){r[i].value=t;break}}else r.push({name:e,value:t});return r.map[e]=t,n}return r.map[e]}},clone:function(){var e=this,n=new t(e.name,e.type),r,i,o,a,s;if(o=e.attributes){for(s=[],s.map={},r=0,i=o.length;i>r;r++)a=o[r],"id"!==a.name&&(s[s.length]={name:a.name,value:a.value},s.map[a.name]=a.value);n.attributes=s}return n.value=e.value,n.shortEnded=e.shortEnded,n},wrap:function(e){var t=this;return t.parent.insert(e,t),e.append(t),t},unwrap:function(){var e=this,t,n;for(t=e.firstChild;t;)n=t.next,e.insert(t,e,!0),t=n;e.remove()},remove:function(){var e=this,t=e.parent,n=e.next,r=e.prev;return t&&(t.firstChild===e?(t.firstChild=n,n&&(n.prev=null)):r.next=n,t.lastChild===e?(t.lastChild=r,r&&(r.next=null)):n.prev=r,e.parent=e.next=e.prev=null),e},append:function(e){var t=this,n;return e.parent&&e.remove(),n=t.lastChild,n?(n.next=e,e.prev=n,t.lastChild=e):t.lastChild=t.firstChild=e,e.parent=t,e},insert:function(e,t,n){var r;return e.parent&&e.remove(),r=t.parent||this,n?(t===r.firstChild?r.firstChild=e:t.prev.next=e,e.prev=t.prev,e.next=t,t.prev=e):(t===r.lastChild?r.lastChild=e:t.next.prev=e,e.next=t.next,e.prev=t,t.next=e),e.parent=r,e},getAll:function(t){var n=this,r,i=[];for(r=n.firstChild;r;r=e(r,n))r.name===t&&i.push(r);return i},empty:function(){var t=this,n,r,i;if(t.firstChild){for(n=[],i=t.firstChild;i;i=e(i,t))n.push(i);for(r=n.length;r--;)i=n[r],i.parent=i.firstChild=i.lastChild=i.next=i.prev=null}return t.firstChild=t.lastChild=null,t},isEmpty:function(t){var r=this,i=r.firstChild,o,a;if(i)do{if(1===i.type){if(i.attributes.map["data-mce-bogus"])continue;if(t[i.name])return!1;for(o=i.attributes.length;o--;)if(a=i.attributes[o].name,"name"===a||0===a.indexOf("data-mce-bookmark"))return!1}if(8===i.type)return!1;if(3===i.type&&!n.test(i.value))return!1}while(i=e(i,r));return!0},walk:function(t){return e(this,null,t)}},t.create=function(e,n){var i,o;if(i=new t(e,r[e]||1),n)for(o in n)i.attr(o,n[o]);return i},t}),r(B,[m],function(e){function t(e,t){return e?e.split(t||" "):[]}function n(e){function n(e,n,r){function i(e,t){var n={},r,i;for(r=0,i=e.length;i>r;r++)n[e[r]]=t||{};return n}var s,c,u,d=arguments;for(r=r||[],n=n||"","string"==typeof r&&(r=t(r)),c=3;c<d.length;c++)"string"==typeof d[c]&&(d[c]=t(d[c])),r.push.apply(r,d[c]);for(e=t(e),s=e.length;s--;)u=[].concat(l,t(n)),a[e[s]]={attributes:i(u),attributesOrder:u,children:i(r,o)}}function r(e,n){var r,i,o,s;for(e=t(e),r=e.length,n=t(n);r--;)for(i=a[e[r]],o=0,s=n.length;s>o;o++)i.attributes[n[o]]={},i.attributesOrder.push(n[o])}var a={},l,c,u,d,f,h;return i[e]?i[e]:(l=t("id accesskey class dir lang style tabindex title"),c=t("address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul"),u=t("a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment"),"html4"!=e&&(l.push.apply(l,t("contenteditable contextmenu draggable dropzone hidden spellcheck translate")),c.push.apply(c,t("article aside details dialog figure header footer hgroup section nav")),u.push.apply(u,t("audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"))),"html5-strict"!=e&&(l.push("xml:lang"),h=t("acronym applet basefont big font strike tt"),u.push.apply(u,h),s(h,function(e){n(e,"",u)}),f=t("center dir isindex noframes"),c.push.apply(c,f),d=[].concat(c,u),s(f,function(e){n(e,"",d)})),d=d||[].concat(c,u),n("html","manifest","head body"),n("head","","base command link meta noscript script style title"),n("title hr noscript br"),n("base","href target"),n("link","href rel media hreflang type sizes hreflang"),n("meta","name http-equiv content charset"),n("style","media type scoped"),n("script","src async defer type charset"),n("body","onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload",d),n("address dt dd div caption","",d),n("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn","",u),n("blockquote","cite",d),n("ol","reversed start type","li"),n("ul","","li"),n("li","value",d),n("dl","","dt dd"),n("a","href target rel media hreflang type",u),n("q","cite",u),n("ins del","cite datetime",d),n("img","src sizes srcset alt usemap ismap width height"),n("iframe","src name width height",d),n("embed","src type width height"),n("object","data type typemustmatch name usemap form width height",d,"param"),n("param","name value"),n("map","name",d,"area"),n("area","alt coords shape href target rel media hreflang type"),n("table","border","caption colgroup thead tfoot tbody tr"+("html4"==e?" col":"")),n("colgroup","span","col"),n("col","span"),n("tbody thead tfoot","","tr"),n("tr","","td th"),n("td","colspan rowspan headers",d),n("th","colspan rowspan headers scope abbr",d),n("form","accept-charset action autocomplete enctype method name novalidate target",d),n("fieldset","disabled form name",d,"legend"),n("label","form for",u),n("input","accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"),n("button","disabled form formaction formenctype formmethod formnovalidate formtarget name type value","html4"==e?d:u),n("select","disabled form multiple name required size","option optgroup"),n("optgroup","disabled label","option"),n("option","disabled label selected value"),n("textarea","cols dirname disabled form maxlength name readonly required rows wrap"),n("menu","type label",d,"li"),n("noscript","",d),"html4"!=e&&(n("wbr"),n("ruby","",u,"rt rp"),n("figcaption","",d),n("mark rt rp summary bdi","",u),n("canvas","width height",d),n("video","src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered",d,"track source"),n("audio","src crossorigin preload autoplay mediagroup loop muted controls buffered volume",d,"track source"),n("picture","","img source"),n("source","src srcset type media sizes"),n("track","kind src srclang label default"),n("datalist","",u,"option"),n("article section nav aside header footer","",d),n("hgroup","","h1 h2 h3 h4 h5 h6"),n("figure","",d,"figcaption"),n("time","datetime",u),n("dialog","open",d),n("command","type label icon disabled checked radiogroup command"),n("output","for form name",u),n("progress","value max",u),n("meter","value min max low high optimum",u),n("details","open",d,"summary"),n("keygen","autofocus challenge disabled form keytype name")),"html5-strict"!=e&&(r("script","language xml:space"),r("style","xml:space"),r("object","declare classid code codebase codetype archive standby align border hspace vspace"),r("embed","align name hspace vspace"),r("param","valuetype type"),r("a","charset name rev shape coords"),r("br","clear"),r("applet","codebase archive code object alt name width height align hspace vspace"),r("img","name longdesc align border hspace vspace"),r("iframe","longdesc frameborder marginwidth marginheight scrolling align"),r("font basefont","size color face"),r("input","usemap align"),r("select","onchange"),r("textarea"),r("h1 h2 h3 h4 h5 h6 div p legend caption","align"),r("ul","type compact"),r("li","type"),r("ol dl menu dir","compact"),r("pre","width xml:space"),r("hr","align noshade size width"),r("isindex","prompt"),r("table","summary width frame rules cellspacing cellpadding align bgcolor"),r("col","width align char charoff valign"),r("colgroup","width align char charoff valign"),r("thead","align char charoff valign"),r("tr","align char charoff valign bgcolor"),r("th","axis align char charoff valign nowrap bgcolor width height"),r("form","accept"),r("td","abbr axis scope align char charoff valign nowrap bgcolor width height"),r("tfoot","align char charoff valign"),r("tbody","align char charoff valign"),r("area","nohref"),r("body","background bgcolor text link vlink alink")),"html4"!=e&&(r("input button select textarea","autofocus"),r("input textarea","placeholder"),r("a","download"),r("link script img","crossorigin"),r("iframe","sandbox seamless allowfullscreen")),s(t("a form meter progress dfn"),function(e){a[e]&&delete a[e].children[e]}),delete a.caption.children.table,delete a.script,i[e]=a,a)}function r(e,t){var n;return e&&(n={},"string"==typeof e&&(e={"*":e}),s(e,function(e,r){n[r]=n[r.toUpperCase()]="map"==t?a(e,/[, ]/):c(e,/[, ]/)})),n}var i={},o={},a=e.makeMap,s=e.each,l=e.extend,c=e.explode,u=e.inArray;return function(e){function o(t,n,r){var o=e[t];return o?o=a(o,/[, ]/,a(o.toUpperCase(),/[, ]/)):(o=i[t],o||(o=a(n," ",a(n.toUpperCase()," ")),o=l(o,r),i[t]=o)),o}function d(e){return new RegExp("^"+e.replace(/([?+*])/g,".$1")+"$")}function f(e){var n,r,i,o,s,l,c,f,h,p,m,g,v,b,x,w,E,N,_,S=/^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,k=/^([!\-])?(\w+::\w+|[^=:<]+)?(?:([=:<])(.*))?$/,T=/[*?+]/;if(e)for(e=t(e,","),y["@"]&&(w=y["@"].attributes,E=y["@"].attributesOrder),n=0,r=e.length;r>n;n++)if(s=S.exec(e[n])){if(b=s[1],h=s[2],x=s[3],f=s[5],g={},v=[],l={attributes:g,attributesOrder:v},"#"===b&&(l.paddEmpty=!0),"-"===b&&(l.removeEmpty=!0),"!"===s[4]&&(l.removeEmptyAttrs=!0),w){for(N in w)g[N]=w[N];v.push.apply(v,E)}if(f)for(f=t(f,"|"),i=0,o=f.length;o>i;i++)if(s=k.exec(f[i])){if(c={},m=s[1],p=s[2].replace(/::/g,":"),b=s[3],_=s[4],"!"===m&&(l.attributesRequired=l.attributesRequired||[],l.attributesRequired.push(p),c.required=!0),"-"===m){delete g[p],v.splice(u(v,p),1);continue}b&&("="===b&&(l.attributesDefault=l.attributesDefault||[],l.attributesDefault.push({name:p,value:_}),c.defaultValue=_),":"===b&&(l.attributesForced=l.attributesForced||[],l.attributesForced.push({name:p,value:_}),c.forcedValue=_),"<"===b&&(c.validValues=a(_,"?"))),T.test(p)?(l.attributePatterns=l.attributePatterns||[],c.pattern=d(p),l.attributePatterns.push(c)):(g[p]||v.push(p),g[p]=c)}w||"@"!=h||(w=g,E=v),x&&(l.outputName=h,y[x]=l),T.test(h)?(l.pattern=d(h),C.push(l)):y[h]=l}}function h(e){y={},C=[],f(e),s(E,function(e,t){b[t]=e.children})}function p(e){var n=/^(~)?(.+)$/;e&&(i.text_block_elements=i.block_elements=null,s(t(e,","),function(e){var t=n.exec(e),r="~"===t[1],i=r?"span":"div",o=t[2];if(b[o]=b[i],L[o]=i,r||(R[o.toUpperCase()]={},R[o]={}),!y[o]){var a=y[i];a=l({},a),delete a.removeEmptyAttrs,delete a.removeEmpty,y[o]=a}s(b,function(e,t){e[i]&&(b[t]=e=l({},b[t]),e[o]=e[i])})}))}function m(n){var r=/^([+\-]?)(\w+)\[([^\]]+)\]$/;i[e.schema]=null,n&&s(t(n,","),function(e){var n=r.exec(e),i,o;n&&(o=n[1],i=o?b[n[2]]:b[n[2]]={"#comment":{}},i=b[n[2]],s(t(n[3],"|"),function(e){"-"===o?delete i[e]:i[e]={}}))})}function g(e){var t=y[e],n;if(t)return t;for(n=C.length;n--;)if(t=C[n],t.pattern.test(e))return t}var v=this,y={},b={},C=[],x,w,E,N,_,S,k,T,R,A,B,D,M,L={},P={};e=e||{},E=n(e.schema),e.verify_html===!1&&(e.valid_elements="*[*]"),
x=r(e.valid_styles),w=r(e.invalid_styles,"map"),T=r(e.valid_classes,"map"),N=o("whitespace_elements","pre script noscript style textarea video audio iframe object"),_=o("self_closing_elements","colgroup dd dt li option p td tfoot th thead tr"),S=o("short_ended_elements","area base basefont br col frame hr img input isindex link meta param embed source wbr track"),k=o("boolean_attributes","checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"),A=o("non_empty_elements","td th iframe video audio object script",S),B=o("move_caret_before_on_enter_elements","table",A),D=o("text_block_elements","h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside nav figure"),R=o("block_elements","hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption",D),M=o("text_inline_elements","span strong b em i font strike u var cite dfn code mark q sup sub samp"),s((e.special||"script noscript style textarea").split(" "),function(e){P[e]=new RegExp("</"+e+"[^>]*>","gi")}),e.valid_elements?h(e.valid_elements):(s(E,function(e,t){y[t]={attributes:e.attributes,attributesOrder:e.attributesOrder},b[t]=e.children}),"html5"!=e.schema&&s(t("strong/b em/i"),function(e){e=t(e,"/"),y[e[1]].outputName=e[0]}),y.img.attributesDefault=[{name:"alt",value:""}],s(t("ol ul sub sup blockquote span font a table tbody tr strong em b i"),function(e){y[e]&&(y[e].removeEmpty=!0)}),s(t("p h1 h2 h3 h4 h5 h6 th td pre div address caption"),function(e){y[e].paddEmpty=!0}),s(t("span"),function(e){y[e].removeEmptyAttrs=!0})),p(e.custom_elements),m(e.valid_children),f(e.extended_valid_elements),m("+ol[ul|ol],+ul[ul|ol]"),e.invalid_elements&&s(c(e.invalid_elements),function(e){y[e]&&delete y[e]}),g("span")||f("span[!data-mce-type|*]"),v.children=b,v.getValidStyles=function(){return x},v.getInvalidStyles=function(){return w},v.getValidClasses=function(){return T},v.getBoolAttrs=function(){return k},v.getBlockElements=function(){return R},v.getTextBlockElements=function(){return D},v.getTextInlineElements=function(){return M},v.getShortEndedElements=function(){return S},v.getSelfClosingElements=function(){return _},v.getNonEmptyElements=function(){return A},v.getMoveCaretBeforeOnEnterElements=function(){return B},v.getWhiteSpaceElements=function(){return N},v.getSpecialElements=function(){return P},v.isValidChild=function(e,t){var n=b[e];return!(!n||!n[t])},v.isValid=function(e,t){var n,r,i=g(e);if(i){if(!t)return!0;if(i.attributes[t])return!0;if(n=i.attributePatterns)for(r=n.length;r--;)if(n[r].pattern.test(e))return!0}return!1},v.getElementRule=g,v.getCustomElements=function(){return L},v.addValidElements=f,v.setValidElements=h,v.addCustomElements=p,v.addValidChildren=m,v.elements=y}}),r(D,[B,C,m],function(e,t,n){function r(e,t,n){var r=1,i,o,a,s;for(s=e.getShortEndedElements(),a=/<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g,a.lastIndex=i=n;o=a.exec(t);){if(i=a.lastIndex,"/"===o[1])r--;else if(!o[1]){if(o[2]in s)continue;r++}if(0===r)break}return i}function i(i,a){function s(){}var l=this;i=i||{},l.schema=a=a||new e,i.fix_self_closing!==!1&&(i.fix_self_closing=!0),o("comment cdata text start end pi doctype".split(" "),function(e){e&&(l[e]=i[e]||s)}),l.parse=function(e){function o(e){var t,n;for(t=h.length;t--&&h[t].name!==e;);if(t>=0){for(n=h.length-1;n>=t;n--)e=h[n],e.valid&&l.end(e.name);h.length=t}}function s(e,t,n,r,o){var a,s,l=/[\s\u0000-\u001F]+/g;if(t=t.toLowerCase(),n=t in x?t:z(n||r||o||""),E&&!y&&0!==t.indexOf("data-")){if(a=T[t],!a&&R){for(s=R.length;s--&&(a=R[s],!a.pattern.test(t)););-1===s&&(a=null)}if(!a)return;if(a.validValues&&!(n in a.validValues))return}if(V[t]&&!i.allow_script_urls){var c=n.replace(l,"");try{c=decodeURIComponent(c)}catch(u){c=unescape(c)}if(U.test(c))return;if(!i.allow_html_data_urls&&$.test(c)&&!/^data:image\//i.test(c))return}p.map[t]=n,p.push({name:t,value:n})}var l=this,c,u=0,d,f,h=[],p,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F=0,z=t.decode,W,V=n.makeMap("src,href,data,background,formaction,poster"),U=/((java|vb)script|mhtml):/i,$=/^data:/i;for(P=new RegExp("<(?:(?:!--([\\w\\W]*?)-->)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:!DOCTYPE([\\w\\W]*?)>)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([^>]+)>)|(?:([A-Za-z0-9\\-_\\:\\.]+)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))","g"),H=/([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g,C=a.getShortEndedElements(),L=i.self_closing_elements||a.getSelfClosingElements(),x=a.getBoolAttrs(),E=i.validate,b=i.remove_internals,W=i.fix_self_closing,O=a.getSpecialElements();c=P.exec(e);){if(u<c.index&&l.text(z(e.substr(u,c.index-u))),d=c[6])d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),o(d);else if(d=c[7]){if(d=d.toLowerCase(),":"===d.charAt(0)&&(d=d.substr(1)),w=d in C,W&&L[d]&&h.length>0&&h[h.length-1].name===d&&o(d),!E||(N=a.getElementRule(d))){if(_=!0,E&&(T=N.attributes,R=N.attributePatterns),(k=c[8])?(y=-1!==k.indexOf("data-mce-type"),y&&b&&(_=!1),p=[],p.map={},k.replace(H,s)):(p=[],p.map={}),E&&!y){if(A=N.attributesRequired,B=N.attributesDefault,D=N.attributesForced,M=N.removeEmptyAttrs,M&&!p.length&&(_=!1),D)for(m=D.length;m--;)S=D[m],v=S.name,I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I});if(B)for(m=B.length;m--;)S=B[m],v=S.name,v in p.map||(I=S.value,"{$uid}"===I&&(I="mce_"+F++),p.map[v]=I,p.push({name:v,value:I}));if(A){for(m=A.length;m--&&!(A[m]in p.map););-1===m&&(_=!1)}if(S=p.map["data-mce-bogus"]){if("all"===S){u=r(a,e,P.lastIndex),P.lastIndex=u;continue}_=!1}}_&&l.start(d,p,w)}else _=!1;if(f=O[d]){f.lastIndex=u=c.index+c[0].length,(c=f.exec(e))?(_&&(g=e.substr(u,c.index-u)),u=c.index+c[0].length):(g=e.substr(u),u=e.length),_&&(g.length>0&&l.text(g,!0),l.end(d)),P.lastIndex=u;continue}w||(k&&k.indexOf("/")==k.length-1?_&&l.end(d):h.push({name:d,valid:_}))}else(d=c[1])?(">"===d.charAt(0)&&(d=" "+d),i.allow_conditional_comments||"[if"!==d.substr(0,3)||(d=" "+d),l.comment(d)):(d=c[2])?l.cdata(d):(d=c[3])?l.doctype(d):(d=c[4])&&l.pi(d,c[5]);u=c.index+c[0].length}for(u<e.length&&l.text(z(e.substr(u))),m=h.length-1;m>=0;m--)d=h[m],d.valid&&l.end(d.name)}}var o=n.each;return i.findEndTag=r,i}),r(M,[A,B,D,m],function(e,t,n,r){var i=r.makeMap,o=r.each,a=r.explode,s=r.extend;return function(r,l){function c(t){var n,r,o,a,s,c,d,f,h,p,m,g,v,y,b;for(m=i("tr,td,th,tbody,thead,tfoot,table"),p=l.getNonEmptyElements(),g=l.getTextBlockElements(),v=l.getSpecialElements(),n=0;n<t.length;n++)if(r=t[n],r.parent&&!r.fixed)if(g[r.name]&&"li"==r.parent.name){for(y=r.next;y&&g[y.name];)y.name="li",y.fixed=!0,r.parent.insert(y,r.parent),y=y.next;r.unwrap(r)}else{for(a=[r],o=r.parent;o&&!l.isValidChild(o.name,r.name)&&!m[o.name];o=o.parent)a.push(o);if(o&&a.length>1){for(a.reverse(),s=c=u.filterNode(a[0].clone()),h=0;h<a.length-1;h++){for(l.isValidChild(c.name,a[h].name)?(d=u.filterNode(a[h].clone()),c.append(d)):d=c,f=a[h].firstChild;f&&f!=a[h+1];)b=f.next,d.append(f),f=b;c=d}s.isEmpty(p)?o.insert(r,a[0],!0):(o.insert(s,a[0],!0),o.insert(r,s)),o=a[0],(o.isEmpty(p)||o.firstChild===o.lastChild&&"br"===o.firstChild.name)&&o.empty().remove()}else if(r.parent){if("li"===r.name){if(y=r.prev,y&&("ul"===y.name||"ul"===y.name)){y.append(r);continue}if(y=r.next,y&&("ul"===y.name||"ul"===y.name)){y.insert(r,y.firstChild,!0);continue}r.wrap(u.filterNode(new e("ul",1)));continue}l.isValidChild(r.parent.name,"div")&&l.isValidChild("div",r.name)?r.wrap(u.filterNode(new e("div",1))):v[r.name]?r.empty().remove():r.unwrap()}}}var u=this,d={},f=[],h={},p={};r=r||{},r.validate="validate"in r?r.validate:!0,r.root_name=r.root_name||"body",u.schema=l=l||new t,u.filterNode=function(e){var t,n,r;n in d&&(r=h[n],r?r.push(e):h[n]=[e]),t=f.length;for(;t--;)n=f[t].name,n in e.attributes.map&&(r=p[n],r?r.push(e):p[n]=[e]);return e},u.addNodeFilter=function(e,t){o(a(e),function(e){var n=d[e];n||(d[e]=n=[]),n.push(t)})},u.addAttributeFilter=function(e,t){o(a(e),function(e){var n;for(n=0;n<f.length;n++)if(f[n].name===e)return void f[n].callbacks.push(t);f.push({name:e,callbacks:[t]})})},u.parse=function(t,o){function a(){function e(e){e&&(t=e.firstChild,t&&3==t.type&&(t.value=t.value.replace(R,"")),t=e.lastChild,t&&3==t.type&&(t.value=t.value.replace(D,"")))}var t=y.firstChild,n,i;if(l.isValidChild(y.name,I.toLowerCase())){for(;t;)n=t.next,3==t.type||1==t.type&&"p"!==t.name&&!T[t.name]&&!t.attr("data-mce-type")?i?i.append(t):(i=u(I,1),i.attr(r.forced_root_block_attrs),y.insert(i,t),i.append(t)):(e(i),i=null),t=n;e(i)}}function u(t,n){var r=new e(t,n),i;return t in d&&(i=h[t],i?i.push(r):h[t]=[r]),r}function m(e){var t,n,r,i,o=l.getBlockElements();for(t=e.prev;t&&3===t.type;){if(r=t.value.replace(D,""),r.length>0)return void(t.value=r);if(n=t.next){if(3==n.type&&n.value.length){t=t.prev;continue}if(!o[n.name]&&"script"!=n.name&&"style"!=n.name){t=t.prev;continue}}i=t.prev,t.remove(),t=i}}function g(e){var t,n={};for(t in e)"li"!==t&&"p"!=t&&(n[t]=e[t]);return n}var v,y,b,C,x,w,E,N,_,S,k,T,R,A=[],B,D,M,L,P,H,O,I;if(o=o||{},h={},p={},T=s(i("script,style,head,html,body,title,meta,param"),l.getBlockElements()),O=l.getNonEmptyElements(),H=l.children,k=r.validate,I="forced_root_block"in o?o.forced_root_block:r.forced_root_block,P=l.getWhiteSpaceElements(),R=/^[ \t\r\n]+/,D=/[ \t\r\n]+$/,M=/[ \t\r\n]+/g,L=/^[ \t\r\n]+$/,v=new n({validate:k,allow_script_urls:r.allow_script_urls,allow_conditional_comments:r.allow_conditional_comments,self_closing_elements:g(l.getSelfClosingElements()),cdata:function(e){b.append(u("#cdata",4)).value=e},text:function(e,t){var n;B||(e=e.replace(M," "),b.lastChild&&T[b.lastChild.name]&&(e=e.replace(R,""))),0!==e.length&&(n=u("#text",3),n.raw=!!t,b.append(n).value=e)},comment:function(e){b.append(u("#comment",8)).value=e},pi:function(e,t){b.append(u(e,7)).value=t,m(b)},doctype:function(e){var t;t=b.append(u("#doctype",10)),t.value=e,m(b)},start:function(e,t,n){var r,i,o,a,s;if(o=k?l.getElementRule(e):{}){for(r=u(o.outputName||e,1),r.attributes=t,r.shortEnded=n,b.append(r),s=H[b.name],s&&H[r.name]&&!s[r.name]&&A.push(r),i=f.length;i--;)a=f[i].name,a in t.map&&(_=p[a],_?_.push(r):p[a]=[r]);T[e]&&m(r),n||(b=r),!B&&P[e]&&(B=!0)}},end:function(t){var n,r,i,o,a;if(r=k?l.getElementRule(t):{}){if(T[t]&&!B){if(n=b.firstChild,n&&3===n.type)if(i=n.value.replace(R,""),i.length>0)n.value=i,n=n.next;else for(o=n.next,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.next,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o;if(n=b.lastChild,n&&3===n.type)if(i=n.value.replace(D,""),i.length>0)n.value=i,n=n.prev;else for(o=n.prev,n.remove(),n=o;n&&3===n.type;)i=n.value,o=n.prev,(0===i.length||L.test(i))&&(n.remove(),n=o),n=o}if(B&&P[t]&&(B=!1),(r.removeEmpty||r.paddEmpty)&&b.isEmpty(O))if(r.paddEmpty)b.empty().append(new e("#text","3")).value="\xa0";else if(!b.attributes.map.name&&!b.attributes.map.id)return a=b.parent,T[b.name]?b.empty().remove():b.unwrap(),void(b=a);b=b.parent}}},l),y=b=new e(o.context||r.root_name,11),v.parse(t),k&&A.length&&(o.context?o.invalid=!0:c(A)),I&&("body"==y.name||o.isRootContent)&&a(),!o.invalid){for(S in h){for(_=d[S],C=h[S],E=C.length;E--;)C[E].parent||C.splice(E,1);for(x=0,w=_.length;w>x;x++)_[x](C,S,o)}for(x=0,w=f.length;w>x;x++)if(_=f[x],_.name in p){for(C=p[_.name],E=C.length;E--;)C[E].parent||C.splice(E,1);for(E=0,N=_.callbacks.length;N>E;E++)_.callbacks[E](C,_.name,o)}}return y},r.remove_trailing_brs&&u.addNodeFilter("br",function(t){var n,r=t.length,i,o=s({},l.getBlockElements()),a=l.getNonEmptyElements(),c,u,d,f,h,p;for(o.body=1,n=0;r>n;n++)if(i=t[n],c=i.parent,o[i.parent.name]&&i===c.lastChild){for(d=i.prev;d;){if(f=d.name,"span"!==f||"bookmark"!==d.attr("data-mce-type")){if("br"!==f)break;if("br"===f){i=null;break}}d=d.prev}i&&(i.remove(),c.isEmpty(a)&&(h=l.getElementRule(c.name),h&&(h.removeEmpty?c.remove():h.paddEmpty&&(c.empty().append(new e("#text",3)).value="\xa0"))))}else{for(u=i;c&&c.firstChild===u&&c.lastChild===u&&(u=c,!o[c.name]);)c=c.parent;u===c&&(p=new e("#text",3),p.value="\xa0",i.replace(p))}}),r.allow_html_in_named_anchor||u.addAttributeFilter("id,name",function(e){for(var t=e.length,n,r,i,o;t--;)if(o=e[t],"a"===o.name&&o.firstChild&&!o.attr("href")){i=o.parent,n=o.lastChild;do r=n.prev,i.insert(n,o),n=r;while(n)}}),r.validate&&l.getValidClasses()&&u.addAttributeFilter("class",function(e){for(var t=e.length,n,r,i,o,a,s=l.getValidClasses(),c,u;t--;){for(n=e[t],r=n.attr("class").split(" "),a="",i=0;i<r.length;i++)o=r[i],u=!1,c=s["*"],c&&c[o]&&(u=!0),c=s[n.name],!u&&c&&c[o]&&(u=!0),u&&(a&&(a+=" "),a+=o);a.length||(a=null),n.attr("class",a)}})}}),r(L,[C,m],function(e,t){var n=t.makeMap;return function(t){var r=[],i,o,a,s,l;return t=t||{},i=t.indent,o=n(t.indent_before||""),a=n(t.indent_after||""),s=e.getEncodeFunc(t.entity_encoding||"raw",t.entities),l="html"==t.element_format,{start:function(e,t,n){var c,u,d,f;if(i&&o[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n")),r.push("<",e),t)for(c=0,u=t.length;u>c;c++)d=t[c],r.push(" ",d.name,'="',s(d.value,!0),'"');!n||l?r[r.length]=">":r[r.length]=" />",n&&i&&a[e]&&r.length>0&&(f=r[r.length-1],f.length>0&&"\n"!==f&&r.push("\n"))},end:function(e){var t;r.push("</",e,">"),i&&a[e]&&r.length>0&&(t=r[r.length-1],t.length>0&&"\n"!==t&&r.push("\n"))},text:function(e,t){e.length>0&&(r[r.length]=t?e:s(e))},cdata:function(e){r.push("<![CDATA[",e,"]]>")},comment:function(e){r.push("<!--",e,"-->")},pi:function(e,t){t?r.push("<?",e," ",s(t),"?>"):r.push("<?",e,"?>"),i&&r.push("\n")},doctype:function(e){r.push("<!DOCTYPE",e,">",i?"\n":"")},reset:function(){r.length=0},getContent:function(){return r.join("").replace(/\n$/,"")}}}}),r(P,[L,B],function(e,t){return function(n,r){var i=this,o=new e(n);n=n||{},n.validate="validate"in n?n.validate:!0,i.schema=r=r||new t,i.writer=o,i.serialize=function(e){function t(e){var n=i[e.type],s,l,c,u,d,f,h,p,m;if(n)n(e);else{if(s=e.name,l=e.shortEnded,c=e.attributes,a&&c&&c.length>1&&(f=[],f.map={},m=r.getElementRule(e.name))){for(h=0,p=m.attributesOrder.length;p>h;h++)u=m.attributesOrder[h],u in c.map&&(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));for(h=0,p=c.length;p>h;h++)u=c[h].name,u in f.map||(d=c.map[u],f.map[u]=d,f.push({name:u,value:d}));c=f}if(o.start(e.name,c,l),!l){if(e=e.firstChild)do t(e);while(e=e.next);o.end(s)}}}var i,a;return a=n.validate,i={3:function(e){o.text(e.value,e.raw)},8:function(e){o.comment(e.value)},7:function(e){o.pi(e.name,e.value)},10:function(e){o.doctype(e.value)},4:function(e){o.cdata(e.value)},11:function(e){if(e=e.firstChild)do t(e);while(e=e.next)}},o.reset(),1!=e.type||n.inner?i[11](e):t(e),o.getContent()}}}),r(H,[w,M,D,C,P,A,B,h,m,S],function(e,t,n,r,i,o,a,s,l,c){function u(e){function t(e){return e&&"br"===e.name}var n,r;n=e.lastChild,t(n)&&(r=n.prev,t(r)&&(n.remove(),r.remove()))}var d=l.each,f=l.trim,h=e.DOM,p=new RegExp(["<span[^>]+data-mce-bogus[^>]+>[\u200b\ufeff]+<\\/span>",'\\s?data-mce-selected="[^"]+"'].join("|"),"gi");return function(e,o){function l(){var e=o.getBody().innerHTML,t=/<(\w+) [^>]*data-mce-bogus="all"[^>]*>/g,r,i,a,s,l,u=o.schema;for(e=c.trim(e.replace(p,"")),l=u.getShortEndedElements();s=t.exec(e);)i=t.lastIndex,a=s[0].length,r=l[s[1]]?i:n.findEndTag(u,e,i),e=e.substring(0,i-a)+e.substring(r),t.lastIndex=i-a;return f(e)}var m,g,v;return o&&(m=o.dom,g=o.schema),m=m||h,g=g||new a(e),e.entity_encoding=e.entity_encoding||"named",e.remove_trailing_brs="remove_trailing_brs"in e?e.remove_trailing_brs:!0,v=new t(e,g),v.addAttributeFilter("data-mce-tabindex",function(e,t){for(var n=e.length,r;n--;)r=e[n],r.attr("tabindex",r.attributes.map["data-mce-tabindex"]),r.attr(t,null)}),v.addAttributeFilter("src,href,style",function(t,n){for(var r=t.length,i,o,a="data-mce-"+n,s=e.url_converter,l=e.url_converter_scope,c;r--;)i=t[r],o=i.attributes.map[a],o!==c?(i.attr(n,o.length>0?o:null),i.attr(a,null)):(o=i.attributes.map[n],"style"===n?o=m.serializeStyle(m.parseStyle(o),i.name):s&&(o=s.call(l,o,n,i.name)),i.attr(n,o.length>0?o:null))}),v.addAttributeFilter("class",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("class"),r&&(r=n.attr("class").replace(/(?:^|\s)mce-item-\w+(?!\S)/g,""),n.attr("class",r.length>0?r:null))}),v.addAttributeFilter("data-mce-type",function(e,t,n){for(var r=e.length,i;r--;)i=e[r],"bookmark"!==i.attributes.map["data-mce-type"]||n.cleanup||i.remove()}),v.addNodeFilter("noscript",function(e){for(var t=e.length,n;t--;)n=e[t].firstChild,n&&(n.value=r.decode(n.value))}),v.addNodeFilter("script,style",function(e,t){function n(e){return e.replace(/(<!--\[CDATA\[|\]\]-->)/g,"\n").replace(/^[\r\n]*|[\r\n]*$/g,"").replace(/^\s*((<!--)?(\s*\/\/)?\s*<!\[CDATA\[|(<!--\s*)?\/\*\s*<!\[CDATA\[\s*\*\/|(\/\/)?\s*<!--|\/\*\s*<!--\s*\*\/)\s*[\r\n]*/gi,"").replace(/\s*(\/\*\s*\]\]>\s*\*\/(-->)?|\s*\/\/\s*\]\]>(-->)?|\/\/\s*(-->)?|\]\]>|\/\*\s*-->\s*\*\/|\s*-->\s*)\s*$/g,"")}for(var r=e.length,i,o,a;r--;)i=e[r],o=i.firstChild?i.firstChild.value:"","script"===t?(a=i.attr("type"),a&&i.attr("type","mce-no/type"==a?null:a.replace(/^mce\-/,"")),o.length>0&&(i.firstChild.value="// <![CDATA[\n"+n(o)+"\n// ]]>")):o.length>0&&(i.firstChild.value="<!--\n"+n(o)+"\n-->")}),v.addNodeFilter("#comment",function(e){for(var t=e.length,n;t--;)n=e[t],0===n.value.indexOf("[CDATA[")?(n.name="#cdata",n.type=4,n.value=n.value.replace(/^\[CDATA\[|\]\]$/g,"")):0===n.value.indexOf("mce:protected ")&&(n.name="#text",n.type=3,n.raw=!0,n.value=unescape(n.value).substr(14))}),v.addNodeFilter("xml:namespace,input",function(e,t){for(var n=e.length,r;n--;)r=e[n],7===r.type?r.remove():1===r.type&&("input"!==t||"type"in r.attributes.map||r.attr("type","text"))}),e.fix_list_elements&&v.addNodeFilter("ul,ol",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.parent,("ul"===r.name||"ol"===r.name)&&n.prev&&"li"===n.prev.name&&n.prev.append(n)}),v.addAttributeFilter("data-mce-src,data-mce-href,data-mce-style,data-mce-selected,data-mce-expando,data-mce-type,data-mce-resize",function(e,t){for(var n=e.length;n--;)e[n].attr(t,null)}),{schema:g,addNodeFilter:v.addNodeFilter,addAttributeFilter:v.addAttributeFilter,serialize:function(t,n){var r=this,o,a,l,h,p,y;return s.ie&&m.select("script,style,select,map").length>0?(p=t.innerHTML,t=t.cloneNode(!1),m.setHTML(t,p)):t=t.cloneNode(!0),o=t.ownerDocument.implementation,o.createHTMLDocument&&(a=o.createHTMLDocument(""),d("BODY"==t.nodeName?t.childNodes:[t],function(e){a.body.appendChild(a.importNode(e,!0))}),t="BODY"!=t.nodeName?a.body.firstChild:a.body,l=m.doc,m.doc=a),n=n||{},n.format=n.format||"html",n.selection&&(n.forced_root_block=""),n.no_events||(n.node=t,r.onPreProcess(n)),y=v.parse(f(n.getInner?t.innerHTML:m.getOuterHTML(t)),n),u(y),h=new i(e,g),n.content=h.serialize(y),n.cleanup||(n.content=c.trim(n.content),n.content=n.content.replace(/\uFEFF/g,"")),n.no_events||r.onPostProcess(n),l&&(m.doc=l),n.node=null,n.content},addRules:function(e){g.addValidElements(e)},setRules:function(e){g.setValidElements(e)},onPreProcess:function(e){o&&o.fire("PreProcess",e)},onPostProcess:function(e){o&&o.fire("PostProcess",e)},getTrimmedContent:l}}}),r(O,[],function(){function e(e){function t(t,n){var r,i=0,o,a,s,l,c,u,d=-1,f;if(r=t.duplicate(),r.collapse(n),f=r.parentElement(),f.ownerDocument===e.dom.doc){for(;"false"===f.contentEditable;)f=f.parentNode;if(!f.hasChildNodes())return{node:f,inside:1};for(s=f.children,o=s.length-1;o>=i;)if(u=Math.floor((i+o)/2),l=s[u],r.moveToElementText(l),d=r.compareEndPoints(n?"StartToStart":"EndToEnd",t),d>0)o=u-1;else{if(!(0>d))return{node:l};i=u+1}if(0>d)for(l?r.collapse(!1):(r.moveToElementText(f),r.collapse(!0),l=f,a=!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",1)&&f==r.parentElement();)c++;else for(r.collapse(!0),c=0;0!==r.compareEndPoints(n?"StartToStart":"StartToEnd",t)&&0!==r.move("character",-1)&&f==r.parentElement();)c++;return{node:l,position:d,offset:c,inside:a}}}function n(){function n(e){var n=t(o,e),r,i,s=0,l,c,u;if(r=n.node,i=n.offset,n.inside&&!r.hasChildNodes())return void a[e?"setStart":"setEnd"](r,0);if(i===c)return void a[e?"setStartBefore":"setEndAfter"](r);if(n.position<0){if(l=n.inside?r.firstChild:r.nextSibling,!l)return void a[e?"setStartAfter":"setEndAfter"](r);if(!i)return void(3==l.nodeType?a[e?"setStart":"setEnd"](l,0):a[e?"setStartBefore":"setEndBefore"](l));for(;l;){if(3==l.nodeType&&(u=l.nodeValue,s+=u.length,s>=i)){r=l,s-=i,s=u.length-s;break}l=l.nextSibling}}else{if(l=r.previousSibling,!l)return a[e?"setStartBefore":"setEndBefore"](r);if(!i)return void(3==r.nodeType?a[e?"setStart":"setEnd"](l,r.nodeValue.length):a[e?"setStartAfter":"setEndAfter"](l));for(;l;){if(3==l.nodeType&&(s+=l.nodeValue.length,s>=i)){r=l,s-=i;break}l=l.previousSibling}}a[e?"setStart":"setEnd"](r,s)}var o=e.getRng(),a=i.createRng(),s,l,c,u,d;if(s=o.item?o.item(0):o.parentElement(),s.ownerDocument!=i.doc)return a;if(l=e.isCollapsed(),o.item)return a.setStart(s.parentNode,i.nodeIndex(s)),a.setEnd(a.startContainer,a.startOffset+1),a;try{n(!0),l||n()}catch(f){if(-2147024809!=f.number)throw f;d=r.getBookmark(2),c=o.duplicate(),c.collapse(!0),s=c.parentElement(),l||(c=o.duplicate(),c.collapse(!1),u=c.parentElement(),u.innerHTML=u.innerHTML),s.innerHTML=s.innerHTML,r.moveToBookmark(d),o=e.getRng(),n(!0),l||n()}return a}var r=this,i=e.dom,o=!1;this.getBookmark=function(n){function r(e){var t,n,r,o,a=[];for(t=e.parentNode,n=i.getRoot().parentNode;t!=n&&9!==t.nodeType;){for(r=t.children,o=r.length;o--;)if(e===r[o]){a.push(o);break}e=t,t=t.parentNode}return a}function o(e){var n;return n=t(a,e),n?{position:n.position,offset:n.offset,indexes:r(n.node),inside:n.inside}:void 0}var a=e.getRng(),s={};return 2===n&&(a.item?s.start={ctrl:!0,indexes:r(a.item(0))}:(s.start=o(!0),e.isCollapsed()||(s.end=o()))),s},this.moveToBookmark=function(e){function t(e){var t,n,r,o;for(t=i.getRoot(),n=e.length-1;n>=0;n--)o=t.children,r=e[n],r<=o.length-1&&(t=o[r]);return t}function n(n){var i=e[n?"start":"end"],a,s,l,c;i&&(a=i.position>0,s=o.createTextRange(),s.moveToElementText(t(i.indexes)),c=i.offset,c!==l?(s.collapse(i.inside||a),s.moveStart("character",a?-c:c)):s.collapse(n),r.setEndPoint(n?"StartToStart":"EndToStart",s),n&&r.collapse(!0))}var r,o=i.doc.body;e.start&&(e.start.ctrl?(r=o.createControlRange(),r.addElement(t(e.start.indexes)),r.select()):(r=o.createTextRange(),n(!0),n(),r.select()))},this.addRange=function(t){function n(e){var t,n,a,d,p;a=i.create("a"),t=e?s:c,n=e?l:u,d=r.duplicate(),(t==f||t==f.documentElement)&&(t=h,n=0),3==t.nodeType?(t.parentNode.insertBefore(a,t),d.moveToElementText(a),d.moveStart("character",n),i.remove(a),r.setEndPoint(e?"StartToStart":"EndToEnd",d)):(p=t.childNodes,p.length?(n>=p.length?i.insertAfter(a,p[p.length-1]):t.insertBefore(a,p[n]),d.moveToElementText(a)):t.canHaveHTML&&(t.innerHTML="<span>&#xFEFF;</span>",a=t.firstChild,d.moveToElementText(a),d.collapse(o)),r.setEndPoint(e?"StartToStart":"EndToEnd",d),i.remove(a))}var r,a,s,l,c,u,d,f=e.dom.doc,h=f.body,p,m;if(s=t.startContainer,l=t.startOffset,c=t.endContainer,u=t.endOffset,r=h.createTextRange(),s==c&&1==s.nodeType){if(l==u&&!s.hasChildNodes()){if(s.canHaveHTML)return d=s.previousSibling,d&&!d.hasChildNodes()&&i.isBlock(d)?d.innerHTML="&#xFEFF;":d=null,s.innerHTML="<span>&#xFEFF;</span><span>&#xFEFF;</span>",r.moveToElementText(s.lastChild),r.select(),i.doc.selection.clear(),s.innerHTML="",void(d&&(d.innerHTML=""));l=i.nodeIndex(s),s=s.parentNode}if(l==u-1)try{if(m=s.childNodes[l],a=h.createControlRange(),a.addElement(m),a.select(),p=e.getRng(),p.item&&m===p.item(0))return}catch(g){}}n(!0),n(),r.select()},this.getRangeAt=n}return e}),r(I,[h],function(e){return{BACKSPACE:8,DELETE:46,DOWN:40,ENTER:13,LEFT:37,RIGHT:39,SPACEBAR:32,TAB:9,UP:38,modifierPressed:function(e){return e.shiftKey||e.ctrlKey||e.altKey||this.metaKeyPressed(e)},metaKeyPressed:function(t){return e.mac?t.metaKey:t.ctrlKey&&!t.altKey}}}),r(F,[I,m,u,h,_],function(e,t,n,r,i){var o=i.isContentEditableFalse;return function(i,a){function s(e){var t=a.settings.object_resizing;return t===!1||r.iOS?!1:("string"!=typeof t&&(t="table,img,div"),"false"===e.getAttribute("data-mce-resize")?!1:e==a.getBody()?!1:a.dom.is(e,t))}function l(t){var n,r,i,o,s;n=t.screenX-B,r=t.screenY-D,F=n*R[2]+P,z=r*R[3]+H,F=5>F?5:F,z=5>z?5:z,i="IMG"==_.nodeName&&a.settings.resize_img_proportional!==!1?!e.modifierPressed(t):e.modifierPressed(t)||"IMG"==_.nodeName&&R[2]*R[3]!==0,i&&($(n)>$(r)?(z=q(F*O),F=q(z/O)):(F=q(z/O),z=q(F*O))),E.setStyles(S,{width:F,height:z}),o=R.startPos.x+n,s=R.startPos.y+r,o=o>0?o:0,s=s>0?s:0,E.setStyles(k,{left:o,top:s,display:"block"}),k.innerHTML=F+" &times; "+z,R[2]<0&&S.clientWidth<=F&&E.setStyle(S,"left",M+(P-F)),R[3]<0&&S.clientHeight<=z&&E.setStyle(S,"top",L+(H-z)),n=j.scrollWidth-Y,r=j.scrollHeight-X,n+r!==0&&E.setStyles(k,{left:o-n,top:s-r}),I||(a.fire("ObjectResizeStart",{target:_,width:P,height:H}),I=!0)}function c(){function e(e,t){t&&(_.style[e]||!a.schema.isValid(_.nodeName.toLowerCase(),e)?E.setStyle(_,e,t):E.setAttrib(_,e,t))}I=!1,e("width",F),e("height",z),E.unbind(W,"mousemove",l),E.unbind(W,"mouseup",c),V!=W&&(E.unbind(V,"mousemove",l),E.unbind(V,"mouseup",c)),E.remove(S),E.remove(k),U&&"TABLE"!=_.nodeName||u(_),a.fire("ObjectResized",{target:_,width:F,height:z}),E.setAttrib(_,"style",E.getAttrib(_,"style")),a.nodeChanged()}function u(e,t,n){var i,o,u,f,h;d(),b(),i=E.getPos(e,j),M=i.x,L=i.y,h=e.getBoundingClientRect(),o=h.width||h.right-h.left,u=h.height||h.bottom-h.top,_!=e&&(y(),_=e,F=z=0),f=a.fire("ObjectSelected",{target:e}),s(e)&&!f.isDefaultPrevented()?N(T,function(e,i){function a(t){B=t.screenX,D=t.screenY,P=_.clientWidth,H=_.clientHeight,O=H/P,R=e,e.startPos={x:o*e[0]+M,y:u*e[1]+L},Y=j.scrollWidth,X=j.scrollHeight,S=_.cloneNode(!0),E.addClass(S,"mce-clonedresizable"),E.setAttrib(S,"data-mce-bogus","all"),S.contentEditable=!1,S.unSelectabe=!0,E.setStyles(S,{left:M,top:L,margin:0}),S.removeAttribute("data-mce-selected"),j.appendChild(S),E.bind(W,"mousemove",l),E.bind(W,"mouseup",c),V!=W&&(E.bind(V,"mousemove",l),E.bind(V,"mouseup",c)),k=E.add(j,"div",{"class":"mce-resize-helper","data-mce-bogus":"all"},P+" &times; "+H)}var s;return t?void(i==t&&a(n)):(s=E.get("mceResizeHandle"+i),s&&E.remove(s),s=E.add(j,"div",{id:"mceResizeHandle"+i,"data-mce-bogus":"all","class":"mce-resizehandle",unselectable:!0,style:"cursor:"+i+"-resize; margin:0; padding:0"}),r.ie&&(s.contentEditable=!1),E.bind(s,"mousedown",function(e){e.stopImmediatePropagation(),e.preventDefault(),a(e)}),e.elm=s,void E.setStyles(s,{left:o*e[0]+M-s.offsetWidth/2,top:u*e[1]+L-s.offsetHeight/2}))}):d(),_.setAttribute("data-mce-selected","1")}function d(){var e,t;b(),_&&_.removeAttribute("data-mce-selected");for(e in T)t=E.get("mceResizeHandle"+e),t&&(E.unbind(t),E.remove(t))}function f(e){function t(e,t){if(e)do if(e===t)return!0;while(e=e.parentNode)}var n,r;if(!I&&!a.removed)return N(E.select("img[data-mce-selected],hr[data-mce-selected]"),function(e){e.removeAttribute("data-mce-selected")}),r="mousedown"==e.type?e.target:i.getNode(),r=E.$(r).closest(U?"table":"table,img,hr")[0],t(r,j)&&(C(),n=i.getStart(!0),t(n,r)&&t(i.getEnd(!0),r)&&(!U||r!=n&&"IMG"!==n.nodeName))?void u(r):void d()}function h(e,t,n){e&&e.attachEvent&&e.attachEvent("on"+t,n)}function p(e,t,n){e&&e.detachEvent&&e.detachEvent("on"+t,n)}function m(e){var t=e.srcElement,n,r,i,o,s,l,c;n=t.getBoundingClientRect(),l=A.clientX-n.left,c=A.clientY-n.top;for(r in T)if(i=T[r],o=t.offsetWidth*i[0],s=t.offsetHeight*i[1],$(o-l)<8&&$(s-c)<8){R=i;break}I=!0,a.fire("ObjectResizeStart",{target:_,width:_.clientWidth,height:_.clientHeight}),a.getDoc().selection.empty(),u(t,r,A)}function g(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function v(e){var t=e.srcElement;if(o(t))return void g(e);if(t!=_){if(a.fire("ObjectSelected",{target:t}),y(),0===t.id.indexOf("mceResizeHandle"))return void(e.returnValue=!1);("IMG"==t.nodeName||"TABLE"==t.nodeName)&&(d(),_=t,h(t,"resizestart",m))}}function y(){p(_,"resizestart",m)}function b(){for(var e in T){var t=T[e];t.elm&&(E.unbind(t.elm),delete t.elm)}}function C(){try{a.getDoc().execCommand("enableObjectResizing",!1,!1)}catch(e){}}function x(e){var t;if(U){t=W.body.createControlRange();try{return t.addElement(e),t.select(),!0}catch(n){}}}function w(){_=S=null,U&&(y(),p(j,"controlselect",v))}var E=a.dom,N=t.each,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F,z,W=a.getDoc(),V=document,U=r.ie&&r.ie<11,$=Math.abs,q=Math.round,j=a.getBody(),Y,X;T={nw:[0,0,-1,-1],ne:[1,0,1,-1],se:[1,1,1,1],sw:[0,1,-1,1]};var K=".mce-content-body";return a.contentStyles.push(K+" div.mce-resizehandle {position: absolute;border: 1px solid black;background: #FFF;width: 7px;height: 7px;z-index: 10000}"+K+" .mce-resizehandle:hover {background: #000}"+K+" *[data-mce-selected] {outline: 1px solid black;resize: none}"+K+" .mce-clonedresizable {position: absolute;"+(r.gecko?"":"outline: 1px dashed black;")+"opacity: .5;filter: alpha(opacity=50);z-index: 10000}"+K+" .mce-resize-helper {background: #555;background: rgba(0,0,0,0.75);border-radius: 3px;border: 1px;color: white;display: none;font-family: sans-serif;font-size: 12px;white-space: nowrap;line-height: 14px;margin: 5px 10px;padding: 5px;position: absolute;z-index: 10001}"),a.on("init",function(){U?(a.on("ObjectResized",function(e){"TABLE"!=e.target.nodeName&&(d(),x(e.target))}),h(j,"controlselect",v),a.on("mousedown",function(e){A=e})):(C(),r.ie>=11&&(a.on("mousedown click",function(e){var t=e.target.nodeName;!I&&/^(TABLE|IMG|HR)$/.test(t)&&(a.selection.select(e.target,"TABLE"==t),"mousedown"==e.type&&a.nodeChanged())}),a.dom.bind(j,"mscontrolselect",function(e){function t(e){n.setEditorTimeout(a,function(){a.selection.select(e)})}return o(e.target)?(e.preventDefault(),void t(e.target)):void(/^(TABLE|IMG|HR)$/.test(e.target.nodeName)&&(e.preventDefault(),"IMG"==e.target.tagName&&t(e.target)))})));var e=n.throttle(f);a.on("nodechange ResizeEditor ResizeWindow drop",e),a.on("keydown keyup",function(t){_&&"TABLE"==_.nodeName&&e(t)}),a.on("hide blur",d)}),a.on("remove",b),{isResizable:s,showResizeRect:u,hideResizeRect:d,updateResizeRect:f,controlSelect:x,destroy:w}}}),r(z,[],function(){function e(e){return function(){return e}}function t(e){return function(t){return!e(t)}}function n(e,t){return function(n){return e(t(n))}}function r(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(e[n](t))return!0;return!1}}function i(){var e=a.call(arguments);return function(t){for(var n=0;n<e.length;n++)if(!e[n](t))return!1;return!0}}function o(e){var t=a.call(arguments);return t.length-1>=e.length?e.apply(this,t.slice(1)):function(){var e=t.concat([].slice.call(arguments));return o.apply(this,e)}}var a=[].slice;return{constant:e,negate:t,and:i,or:r,curry:o,compose:n}}),r(W,[_,p,k],function(e,t,n){function r(e){return m(e)?!1:d(e)?f(e.parentNode)?!1:!0:h(e)||u(e)||p(e)||c(e)}function i(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode){if(c(e))return!1;if(l(e))return!0}return!0}function o(e){return c(e)?t.reduce(e.getElementsByTagName("*"),function(e,t){return e||l(t)},!1)!==!0:!1}function a(e){return h(e)||o(e)}function s(e,t){return r(e)&&i(e,t)}var l=e.isContentEditableTrue,c=e.isContentEditableFalse,u=e.isBr,d=e.isText,f=e.matchNodeNames("script style textarea"),h=e.matchNodeNames("img input textarea hr iframe video audio object"),p=e.matchNodeNames("table"),m=n.isCaretContainer;return{isCaretCandidate:r,isInEditable:i,isAtomic:a,isEditableCaretCandidate:s}}),r(V,[],function(){function e(e){return e?{left:c(e.left),top:c(e.top),bottom:c(e.bottom),right:c(e.right),width:c(e.width),height:c(e.height)}:{left:0,top:0,bottom:0,right:0,width:0,height:0}}function t(t,n){return t=e(t),n?t.right=t.left:(t.left=t.left+t.width,t.right=t.left),t.width=0,t}function n(e,t){return e.left===t.left&&e.top===t.top&&e.bottom===t.bottom&&e.right===t.right}function r(e,t,n){return e>=0&&e<=Math.min(t.height,n.height)/2;
}function i(e,t){return e.bottom<t.top?!0:e.top>t.bottom?!1:r(t.top-e.bottom,e,t)}function o(e,t){return e.top>t.bottom?!0:e.bottom<t.top?!1:r(t.bottom-e.top,e,t)}function a(e,t){return e.left<t.left}function s(e,t){return e.right>t.right}function l(e,t){return i(e,t)?-1:o(e,t)?1:a(e,t)?-1:s(e,t)?1:0}var c=Math.round;return{clone:e,collapse:t,isEqual:n,isAbove:i,isBelow:o,isLeft:a,isRight:s,compare:l}}),r(U,[],function(){function e(e){return"string"==typeof e&&e.charCodeAt(0)>=768&&t.test(e)}var t=new RegExp("[\u0300-\u036f\u0483-\u0487\u0488-\u0489\u0591-\u05bd\u05bf\u05c1-\u05c2\u05c4-\u05c5\u05c7\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7-\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08e3-\u0902\u093a\u093c\u0941-\u0948\u094d\u0951-\u0957\u0962-\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2-\u09e3\u0a01-\u0a02\u0a3c\u0a41-\u0a42\u0a47-\u0a48\u0a4b-\u0a4d\u0a51\u0a70-\u0a71\u0a75\u0a81-\u0a82\u0abc\u0ac1-\u0ac5\u0ac7-\u0ac8\u0acd\u0ae2-\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62-\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c00\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55-\u0c56\u0c62-\u0c63\u0c81\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc-\u0ccd\u0cd5-\u0cd6\u0ce2-\u0ce3\u0d01\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62-\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb-\u0ebc\u0ec8-\u0ecd\u0f18-\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039-\u103a\u103d-\u103e\u1058-\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085-\u1086\u108d\u109d\u135d-\u135f\u1712-\u1714\u1732-\u1734\u1752-\u1753\u1772-\u1773\u17b4-\u17b5\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927-\u1928\u1932\u1939-\u193b\u1a17-\u1a18\u1a1b\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1ab0-\u1abd\u1abe\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80-\u1b81\u1ba2-\u1ba5\u1ba8-\u1ba9\u1bab-\u1bad\u1be6\u1be8-\u1be9\u1bed\u1bef-\u1bf1\u1c2c-\u1c33\u1c36-\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1cf4\u1cf8-\u1cf9\u1dc0-\u1df5\u1dfc-\u1dff\u200c-\u200d\u20d0-\u20dc\u20dd-\u20e0\u20e1\u20e2-\u20e4\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302d\u302e-\u302f\u3099-\u309a\ua66f\ua670-\ua672\ua674-\ua67d\ua69e-\ua69f\ua6f0-\ua6f1\ua802\ua806\ua80b\ua825-\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\ua9e5\uaa29-\uaa2e\uaa31-\uaa32\uaa35-\uaa36\uaa43\uaa4c\uaa7c\uaab0\uaab2-\uaab4\uaab7-\uaab8\uaabe-\uaabf\uaac1\uaaec-\uaaed\uaaf6\uabe5\uabe8\uabed\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\uff9e-\uff9f]");return{isExtendingChar:e}}),r($,[z,_,w,T,W,V,U],function(e,t,n,r,i,o,a){function s(e){return e&&/[\r\n\t ]/.test(e)}function l(e){var t=e.startContainer,n=e.startOffset,r;return s(e.toString())&&g(t.parentNode)&&(r=t.data,s(r[n-1])||s(r[n+1]))?!0:!1}function c(e){function t(e){var t=e.ownerDocument,n=t.createRange(),r=t.createTextNode("\xa0"),i=e.parentNode,a;return i.insertBefore(r,e),n.setStart(r,0),n.setEnd(r,1),a=o.clone(n.getBoundingClientRect()),i.removeChild(r),a}function n(e){var n,r;return r=e.getClientRects(),n=r.length>0?o.clone(r[0]):o.clone(e.getBoundingClientRect()),y(e)&&0===n.left?t(e):n}function r(e,t){return e=o.collapse(e,t),e.width=1,e.right=e.left+1,e}function i(e){0!==e.height&&(c.length>0&&o.isEqual(e,c[c.length-1])||c.push(e))}function s(e,t){var o=e.ownerDocument.createRange();return t<e.data.length&&a.isExtendingChar(e.data[t])?c:(t>0&&(o.setStart(e,t-1),o.setEnd(e,t),l(o)||i(r(n(o),!1))),void(t<e.data.length&&(o.setStart(e,t),o.setEnd(e,t+1),l(o)||i(r(n(o),!0)))))}var c=[],u,f;if(v(e.container()))return s(e.container(),e.offset()),c;if(d(e.container()))if(e.isAtEnd())f=C(e.container(),e.offset()),v(f)&&s(f,f.data.length),m(f)&&!y(f)&&i(r(n(f),!1));else{if(f=C(e.container(),e.offset()),v(f)&&s(f,0),m(f)&&e.isAtEnd())return i(r(n(f),!1)),c;u=C(e.container(),e.offset()-1),m(u)&&!y(u)&&(h(u)||h(f)||!m(f))&&i(r(n(u),!1)),m(f)&&i(r(n(f),!0))}return c}function u(t,n,r){function i(){return v(t)?0===n:0===n}function o(){return v(t)?n>=t.data.length:n>=t.childNodes.length}function a(){var e;return e=t.ownerDocument.createRange(),e.setStart(t,n),e.setEnd(t,n),e}function s(){return r||(r=c(new u(t,n))),r}function l(){return s().length>0}function d(e){return e&&t===e.container()&&n===e.offset()}function f(e){return C(t,e?n-1:n)}return{container:e.constant(t),offset:e.constant(n),toRange:a,getClientRects:s,isVisible:l,isAtStart:i,isAtEnd:o,isEqual:d,getNode:f}}var d=t.isElement,f=i.isCaretCandidate,h=t.matchStyleValues("display","block table"),p=t.matchStyleValues("float","left right"),m=e.and(d,f,e.negate(p)),g=e.negate(t.matchStyleValues("white-space","pre pre-line pre-wrap")),v=t.isText,y=t.isBr,b=n.nodeIndex,C=r.getNode;return u.fromRangeStart=function(e){return new u(e.startContainer,e.startOffset)},u.fromRangeEnd=function(e){return new u(e.endContainer,e.endOffset)},u.after=function(e){return new u(e.parentNode,b(e)+1)},u.before=function(e){return new u(e.parentNode,b(e))},u}),r(q,[_,w,z,p,$],function(e,t,n,r,i){function o(e){var t=e.parentNode;return v(t)?o(t):t}function a(e){return e?r.reduce(e.childNodes,function(e,t){return v(t)&&"BR"!=t.nodeName?e=e.concat(a(t)):e.push(t),e},[]):[]}function s(e,t){for(;(e=e.previousSibling)&&g(e);)t+=e.data.length;return t}function l(e){return function(t){return e===t}}function c(t){var n,i,s;return n=a(o(t)),i=r.findIndex(n,l(t),t),n=n.slice(0,i+1),s=r.reduce(n,function(e,t,r){return g(t)&&g(n[r-1])&&e++,e},0),n=r.filter(n,e.matchNodeNames(t.nodeName)),i=r.findIndex(n,l(t),t),i-s}function u(e){var t;return t=g(e)?"text()":e.nodeName.toLowerCase(),t+"["+c(e)+"]"}function d(e,t,n){var r=[];for(t=t.parentNode;t!=e&&(!n||!n(t));t=t.parentNode)r.push(t);return r}function f(t,i){var o,a,l=[],c,f,h;return o=i.container(),a=i.offset(),g(o)?c=s(o,a):(f=o.childNodes,a>=f.length?(c="after",a=f.length-1):c="before",o=f[a]),l.push(u(o)),h=d(t,o),h=r.filter(h,n.negate(e.isBogus)),l=l.concat(r.map(h,function(e){return u(e)})),l.reverse().join("/")+","+c}function h(t,n,i){var o=a(t);return o=r.filter(o,function(e,t){return!g(e)||!g(o[t-1])}),o=r.filter(o,e.matchNodeNames(n)),o[i]}function p(e,t){for(var n=e,r=0,o;g(n);){if(o=n.data.length,t>=r&&r+o>=t){e=n,t-=r;break}if(!g(n.nextSibling)){e=n,t=o;break}r+=o,n=n.nextSibling}return t>e.data.length&&(t=e.data.length),new i(e,t)}function m(e,t){var n,o,a;return t?(n=t.split(","),t=n[0].split("/"),a=n.length>1?n[1]:"before",o=r.reduce(t,function(e,t){return(t=/([\w\-\(\)]+)\[([0-9]+)\]/.exec(t))?("text()"===t[1]&&(t[1]="#text"),h(e,t[1],parseInt(t[2],10))):null},e),o?g(o)?p(o,parseInt(a,10)):(a="after"===a?y(o)+1:y(o),new i(o.parentNode,a)):null):null}var g=e.isText,v=e.isBogus,y=t.nodeIndex;return{create:f,resolve:m}}),r(j,[h,m,k,q,$,_],function(e,t,n,r,i,o){function a(a){var l=a.dom;this.getBookmark=function(e,c){function u(e,n){var r=0;return t.each(l.select(e),function(e){return"all"!==e.getAttribute("data-mce-bogus")?e==n?!1:void r++:void 0}),r}function d(e){function t(t){var n,r,i,o=t?"start":"end";n=e[o+"Container"],r=e[o+"Offset"],1==n.nodeType&&"TR"==n.nodeName&&(i=n.childNodes,n=i[Math.min(t?r:r-1,i.length-1)],n&&(r=t?0:n.childNodes.length,e["set"+(t?"Start":"End")](n,r)))}return t(!0),t(),e}function f(e){function t(e,t){var r=e[t?"startContainer":"endContainer"],i=e[t?"startOffset":"endOffset"],o=[],a,s,u=0;if(3==r.nodeType){if(c)for(a=r.previousSibling;a&&3==a.nodeType;a=a.previousSibling)i+=a.nodeValue.length;o.push(i)}else s=r.childNodes,i>=s.length&&s.length&&(u=1,i=Math.max(0,s.length-1)),o.push(l.nodeIndex(s[i],c)+u);for(;r&&r!=n;r=r.parentNode)o.push(l.nodeIndex(r,c));return o}var n=l.getRoot(),r={};return r.start=t(e,!0),a.isCollapsed()||(r.end=t(e)),r}function h(e){function t(e){var t;if(n.isCaretContainer(e)){if(o.isText(e)&&n.isCaretContainerBlock(e)&&(e=e.parentNode),t=e.previousSibling,s(t))return t;if(t=e.nextSibling,s(t))return t}}return t(e.startContainer)||t(e.endContainer)}var p,m,g,v,y,b,C="&#xFEFF;",x;if(2==e)return b=a.getNode(),y=b?b.nodeName:null,p=a.getRng(),s(b)||"IMG"==y?{name:y,index:u(y,b)}:a.tridentSel?a.tridentSel.getBookmark(e):(b=h(p),b?(y=b.tagName,{name:y,index:u(y,b)}):f(p));if(3==e)return p=a.getRng(),{start:r.create(l.getRoot(),i.fromRangeStart(p)),end:r.create(l.getRoot(),i.fromRangeEnd(p))};if(e)return{rng:a.getRng()};if(p=a.getRng(),g=l.uniqueId(),v=a.isCollapsed(),x="overflow:hidden;line-height:0px",p.duplicate||p.item){if(p.item)return b=p.item(0),y=b.nodeName,{name:y,index:u(y,b)};m=p.duplicate();try{p.collapse(),p.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_start" style="'+x+'">'+C+"</span>"),v||(m.collapse(!1),p.moveToElementText(m.parentElement()),0===p.compareEndPoints("StartToEnd",m)&&m.move("character",-1),m.pasteHTML('<span data-mce-type="bookmark" id="'+g+'_end" style="'+x+'">'+C+"</span>"))}catch(w){return null}}else{if(b=a.getNode(),y=b.nodeName,"IMG"==y)return{name:y,index:u(y,b)};m=d(p.cloneRange()),v||(m.collapse(!1),m.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_end",style:x},C))),p=d(p),p.collapse(!0),p.insertNode(l.create("span",{"data-mce-type":"bookmark",id:g+"_start",style:x},C))}return a.moveToBookmark({id:g,keep:1}),{id:g}},this.moveToBookmark=function(n){function i(e){var t=n[e?"start":"end"],r,i,o,a;if(t){for(o=t[0],i=d,r=t.length-1;r>=1;r--){if(a=i.childNodes,t[r]>a.length-1)return;i=a[t[r]]}3===i.nodeType&&(o=Math.min(t[0],i.nodeValue.length)),1===i.nodeType&&(o=Math.min(t[0],i.childNodes.length)),e?u.setStart(i,o):u.setEnd(i,o)}return!0}function o(r){var i=l.get(n.id+"_"+r),o,a,s,c,u=n.keep;if(i&&(o=i.parentNode,"start"==r?(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),f=h=o,p=m=a):(u?(o=i.firstChild,a=1):a=l.nodeIndex(i),h=o,m=a),!u)){for(c=i.previousSibling,s=i.nextSibling,t.each(t.grep(i.childNodes),function(e){3==e.nodeType&&(e.nodeValue=e.nodeValue.replace(/\uFEFF/g,""))});i=l.get(n.id+"_"+r);)l.remove(i,1);c&&s&&c.nodeType==s.nodeType&&3==c.nodeType&&!e.opera&&(a=c.nodeValue.length,c.appendData(s.nodeValue),l.remove(s),"start"==r?(f=h=c,p=m=a):(h=c,m=a))}}function s(t){return!l.isBlock(t)||t.innerHTML||e.ie||(t.innerHTML='<br data-mce-bogus="1" />'),t}function c(){var e,t;return e=l.createRng(),t=r.resolve(l.getRoot(),n.start),e.setStart(t.container(),t.offset()),t=r.resolve(l.getRoot(),n.end),e.setEnd(t.container(),t.offset()),e}var u,d,f,h,p,m;if(n)if(t.isArray(n.start)){if(u=l.createRng(),d=l.getRoot(),a.tridentSel)return a.tridentSel.moveToBookmark(n);i(!0)&&i()&&a.setRng(u)}else"string"==typeof n.start?a.setRng(c(n)):n.id?(o("start"),o("end"),f&&(u=l.createRng(),u.setStart(s(f),p),u.setEnd(s(h),m),a.setRng(u))):n.name?a.select(l.select(n.name)[n.index]):n.rng&&a.setRng(n.rng)}}var s=o.isContentEditableFalse;return a.isBookmarkNode=function(e){return e&&"SPAN"===e.tagName&&"bookmark"===e.getAttribute("data-mce-type")},a}),r(Y,[y,O,F,T,j,_,h,m],function(e,n,r,i,o,a,s,l){function c(e,t,i,a){var s=this;s.dom=e,s.win=t,s.serializer=i,s.editor=a,s.bookmarkManager=new o(s),s.controlSelection=new r(s,a),s.win.getSelection||(s.tridentSel=new n(s))}var u=l.each,d=l.trim,f=s.ie;return c.prototype={setCursorLocation:function(e,t){var n=this,r=n.dom.createRng();e?(r.setStart(e,t),r.setEnd(e,t),n.setRng(r),n.collapse(!1)):(n._moveEndPoint(r,n.editor.getBody(),!0),n.setRng(r))},getContent:function(e){var n=this,r=n.getRng(),i=n.dom.create("body"),o=n.getSel(),a,s,l;return e=e||{},a=s="",e.get=!0,e.format=e.format||"html",e.selection=!0,n.editor.fire("BeforeGetContent",e),"text"==e.format?n.isCollapsed()?"":r.text||(o.toString?o.toString():""):(r.cloneContents?(l=r.cloneContents(),l&&i.appendChild(l)):r.item!==t||r.htmlText!==t?(i.innerHTML="<br>"+(r.item?r.item(0).outerHTML:r.htmlText),i.removeChild(i.firstChild)):i.innerHTML=r.toString(),/^\s/.test(i.innerHTML)&&(a=" "),/\s+$/.test(i.innerHTML)&&(s=" "),e.getInner=!0,e.content=n.isCollapsed()?"":a+n.serializer.serialize(i,e)+s,n.editor.fire("GetContent",e),e.content)},setContent:function(e,t){var n=this,r=n.getRng(),i,o=n.win.document,a,s;if(t=t||{format:"html"},t.set=!0,t.selection=!0,t.content=e,t.no_events||n.editor.fire("BeforeSetContent",t),e=t.content,r.insertNode){e+='<span id="__caret">_</span>',r.startContainer==o&&r.endContainer==o?o.body.innerHTML=e:(r.deleteContents(),0===o.body.childNodes.length?o.body.innerHTML=e:r.createContextualFragment?r.insertNode(r.createContextualFragment(e)):(a=o.createDocumentFragment(),s=o.createElement("div"),a.appendChild(s),s.outerHTML=e,r.insertNode(a))),i=n.dom.get("__caret"),r=o.createRange(),r.setStartBefore(i),r.setEndBefore(i),n.setRng(r),n.dom.remove("__caret");try{n.setRng(r)}catch(l){}}else r.item&&(o.execCommand("Delete",!1,null),r=n.getRng()),/^\s+/.test(e)?(r.pasteHTML('<span id="__mce_tmp">_</span>'+e),n.dom.remove("__mce_tmp")):r.pasteHTML(e);t.no_events||n.editor.fire("SetContent",t)},getStart:function(e){var t=this,n=t.getRng(),r,i,o,a;if(n.duplicate||n.item){if(n.item)return n.item(0);for(o=n.duplicate(),o.collapse(1),r=o.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),i=a=n.parentElement();a=a.parentNode;)if(a==r){r=i;break}return r}return r=n.startContainer,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[Math.min(r.childNodes.length-1,n.startOffset)])),r&&3==r.nodeType?r.parentNode:r},getEnd:function(e){var t=this,n=t.getRng(),r,i;return n.duplicate||n.item?n.item?n.item(0):(n=n.duplicate(),n.collapse(0),r=n.parentElement(),r.ownerDocument!==t.dom.doc&&(r=t.dom.getRoot()),r&&"BODY"==r.nodeName?r.lastChild||r:r):(r=n.endContainer,i=n.endOffset,1==r.nodeType&&r.hasChildNodes()&&(e&&n.collapsed||(r=r.childNodes[i>0?i-1:i])),r&&3==r.nodeType?r.parentNode:r)},getBookmark:function(e,t){return this.bookmarkManager.getBookmark(e,t)},moveToBookmark:function(e){return this.bookmarkManager.moveToBookmark(e)},select:function(e,t){var n=this,r=n.dom,i=r.createRng(),o;if(n.lastFocusBookmark=null,e){if(!t&&n.controlSelection.controlSelect(e))return;o=r.nodeIndex(e),i.setStart(e.parentNode,o),i.setEnd(e.parentNode,o+1),t&&(n._moveEndPoint(i,e,!0),n._moveEndPoint(i,e)),n.setRng(i)}return e},isCollapsed:function(){var e=this,t=e.getRng(),n=e.getSel();return!t||t.item?!1:t.compareEndPoints?0===t.compareEndPoints("StartToEnd",t):!n||t.collapsed},collapse:function(e){var t=this,n=t.getRng(),r;n.item&&(r=n.item(0),n=t.win.document.body.createTextRange(),n.moveToElementText(r)),n.collapse(!!e),t.setRng(n)},getSel:function(){var e=this.win;return e.getSelection?e.getSelection():e.document.selection},getRng:function(e){function t(e,t,n){try{return t.compareBoundaryPoints(e,n)}catch(r){return-1}}var n=this,r,i,o,a,s,l;if(!n.win)return null;if(a=n.win.document,!e&&n.lastFocusBookmark){var c=n.lastFocusBookmark;return c.startContainer?(i=a.createRange(),i.setStart(c.startContainer,c.startOffset),i.setEnd(c.endContainer,c.endOffset)):i=c,i}if(e&&n.tridentSel)return n.tridentSel.getRangeAt(0);try{(r=n.getSel())&&(i=r.rangeCount>0?r.getRangeAt(0):r.createRange?r.createRange():a.createRange())}catch(u){}if(l=n.editor.fire("GetSelectionRange",{range:i}),l.range!==i)return l.range;if(f&&i&&i.setStart&&a.selection){try{s=a.selection.createRange()}catch(u){}s&&s.item&&(o=s.item(0),i=a.createRange(),i.setStartBefore(o),i.setEndAfter(o))}return i||(i=a.createRange?a.createRange():a.body.createTextRange()),i.setStart&&9===i.startContainer.nodeType&&i.collapsed&&(o=n.dom.getRoot(),i.setStart(o,0),i.setEnd(o,0)),n.selectedRange&&n.explicitRange&&(0===t(i.START_TO_START,i,n.selectedRange)&&0===t(i.END_TO_END,i,n.selectedRange)?i=n.explicitRange:(n.selectedRange=null,n.explicitRange=null)),i},setRng:function(e,t){var n=this,r,i,o;if(e)if(e.select){n.explicitRange=null;try{e.select()}catch(a){}}else if(n.tridentSel){if(e.cloneRange)try{n.tridentSel.addRange(e)}catch(a){}}else{if(r=n.getSel(),o=n.editor.fire("SetSelectionRange",{range:e}),e=o.range,r){n.explicitRange=e;try{r.removeAllRanges(),r.addRange(e)}catch(a){}t===!1&&r.extend&&(r.collapse(e.endContainer,e.endOffset),r.extend(e.startContainer,e.startOffset)),n.selectedRange=r.rangeCount>0?r.getRangeAt(0):null}e.collapsed||e.startContainer!=e.endContainer||!r.setBaseAndExtent||s.ie||e.endOffset-e.startOffset<2&&e.startContainer.hasChildNodes()&&(i=e.startContainer.childNodes[e.startOffset],i&&"IMG"==i.tagName&&n.getSel().setBaseAndExtent(i,0,i,1))}},setNode:function(e){var t=this;return t.setContent(t.dom.getOuterHTML(e)),e},getNode:function(){function e(e,t){for(var n=e;e&&3===e.nodeType&&0===e.length;)e=t?e.nextSibling:e.previousSibling;return e||n}var t=this,n=t.getRng(),r,i=n.startContainer,o=n.endContainer,a=n.startOffset,s=n.endOffset,l=t.dom.getRoot();return n?n.setStart?(r=n.commonAncestorContainer,!n.collapsed&&(i==o&&2>s-a&&i.hasChildNodes()&&(r=i.childNodes[a]),3===i.nodeType&&3===o.nodeType&&(i=i.length===a?e(i.nextSibling,!0):i.parentNode,o=0===s?e(o.previousSibling,!1):o.parentNode,i&&i===o))?i:r&&3==r.nodeType?r.parentNode:r):(r=n.item?n.item(0):n.parentElement(),r.ownerDocument!==t.win.document&&(r=l),r):l},getSelectedBlocks:function(t,n){var r=this,i=r.dom,o,a,s=[];if(a=i.getRoot(),t=i.getParent(t||r.getStart(),i.isBlock),n=i.getParent(n||r.getEnd(),i.isBlock),t&&t!=a&&s.push(t),t&&n&&t!=n){o=t;for(var l=new e(t,a);(o=l.next())&&o!=n;)i.isBlock(o)&&s.push(o)}return n&&t!=n&&n!=a&&s.push(n),s},isForward:function(){var e=this.dom,t=this.getSel(),n,r;return t&&t.anchorNode&&t.focusNode?(n=e.createRng(),n.setStart(t.anchorNode,t.anchorOffset),n.collapse(!0),r=e.createRng(),r.setStart(t.focusNode,t.focusOffset),r.collapse(!0),n.compareBoundaryPoints(n.START_TO_START,r)<=0):!0},normalize:function(){var e=this,t=e.getRng();return s.range&&new i(e.dom).normalize(t)&&e.setRng(t,e.isForward()),t},selectorChanged:function(e,t){var n=this,r;return n.selectorChangedData||(n.selectorChangedData={},r={},n.editor.on("NodeChange",function(e){var t=e.element,i=n.dom,o=i.getParents(t,null,i.getRoot()),a={};u(n.selectorChangedData,function(e,t){u(o,function(n){return i.is(n,t)?(r[t]||(u(e,function(e){e(!0,{node:n,selector:t,parents:o})}),r[t]=e),a[t]=e,!1):void 0})}),u(r,function(e,n){a[n]||(delete r[n],u(e,function(e){e(!1,{node:t,selector:n,parents:o})}))})})),n.selectorChangedData[e]||(n.selectorChangedData[e]=[]),n.selectorChangedData[e].push(t),n},getScrollContainer:function(){for(var e,t=this.dom.getRoot();t&&"BODY"!=t.nodeName;){if(t.scrollHeight>t.clientHeight){e=t;break}t=t.parentNode}return e},scrollIntoView:function(e,t){function n(e){for(var t=0,n=0,r=e;r&&r.nodeType;)t+=r.offsetLeft||0,n+=r.offsetTop||0,r=r.offsetParent;return{x:t,y:n}}var r,i,o=this,s=o.dom,l=s.getRoot(),c,u,d=0;if(a.isElement(e)){if(t===!1&&(d=e.offsetHeight),"BODY"!=l.nodeName){var f=o.getScrollContainer();if(f)return r=n(e).y-n(f).y+d,u=f.clientHeight,c=f.scrollTop,void((c>r||r+25>c+u)&&(f.scrollTop=c>r?r:r-u+25))}i=s.getViewPort(o.editor.getWin()),r=s.getPos(e).y+d,c=i.y,u=i.h,(r<i.y||r+25>c+u)&&o.editor.getWin().scrollTo(0,c>r?r:r-u+25)}},placeCaretAt:function(e,t){this.setRng(i.getCaretRangeFromPoint(e,t,this.editor.getDoc()))},_moveEndPoint:function(t,n,r){var i=n,o=new e(n,i),a=this.dom.schema.getNonEmptyElements();do{if(3==n.nodeType&&0!==d(n.nodeValue).length)return void(r?t.setStart(n,0):t.setEnd(n,n.nodeValue.length));if(a[n.nodeName]&&!/^(TD|TH)$/.test(n.nodeName))return void(r?t.setStartBefore(n):"BR"==n.nodeName?t.setEndBefore(n):t.setEndAfter(n));if(s.ie&&s.ie<11&&this.dom.isBlock(n)&&this.dom.isEmpty(n))return void(r?t.setStart(n,0):t.setEnd(n,0))}while(n=r?o.next():o.prev());"BODY"==i.nodeName&&(r?t.setStart(i,0):t.setEnd(i,i.childNodes.length))},destroy:function(){this.win=null,this.controlSelection.destroy()}},c}),r(X,[j,m],function(e,t){function n(t){this.compare=function(n,i){function o(e){var n={};return r(t.getAttribs(e),function(r){var i=r.nodeName.toLowerCase();0!==i.indexOf("_")&&"style"!==i&&"data-mce-style"!==i&&(n[i]=t.getAttrib(e,i))}),n}function a(e,t){var n,r;for(r in e)if(e.hasOwnProperty(r)){if(n=t[r],"undefined"==typeof n)return!1;if(e[r]!=n)return!1;delete t[r]}for(r in t)if(t.hasOwnProperty(r))return!1;return!0}return n.nodeName!=i.nodeName?!1:a(o(n),o(i))&&a(t.parseStyle(t.getAttrib(n,"style")),t.parseStyle(t.getAttrib(i,"style")))?!e.isBookmarkNode(n)&&!e.isBookmarkNode(i):!1}}var r=t.each;return n}),r(K,[m],function(e){function t(e,t){function r(e){return e.replace(/%(\w+)/g,"")}var i,o,a=e.dom,s="",l,c;if(c=e.settings.preview_styles,c===!1)return"";if(c||(c="font-family font-size font-weight font-style text-decoration text-transform color background-color border border-radius outline text-shadow"),"string"==typeof t){if(t=e.formatter.get(t),!t)return;t=t[0]}return i=t.block||t.inline||"span",o=a.create(i),n(t.styles,function(e,t){e=r(e),e&&a.setStyle(o,t,e)}),n(t.attributes,function(e,t){e=r(e),e&&a.setAttrib(o,t,e)}),n(t.classes,function(e){e=r(e),a.hasClass(o,e)||a.addClass(o,e)}),e.fire("PreviewFormats"),a.setStyles(o,{position:"absolute",left:-65535}),e.getBody().appendChild(o),l=a.getStyle(e.getBody(),"fontSize",!0),l=/px$/.test(l)?parseInt(l,10):0,n(c.split(" "),function(t){var n=a.getStyle(o,t,!0);if(!("background-color"==t&&/transparent|rgba\s*\([^)]+,\s*0\)/.test(n)&&(n=a.getStyle(e.getBody(),t,!0),"#ffffff"==a.toHex(n).toLowerCase())||"color"==t&&"#000000"==a.toHex(n).toLowerCase())){if("font-size"==t&&/em|%$/.test(n)){if(0===l)return;n=parseFloat(n,10)/(/%$/.test(n)?100:1),n=n*l+"px"}"border"==t&&n&&(s+="padding:0 2px;"),s+=t+":"+n+";"}}),e.fire("AfterPreviewFormats"),a.remove(o),s}var n=e.each;return{getCssText:t}}),r(G,[y,T,j,X,m,K],function(e,t,n,r,i,o){return function(a){function s(e){return e.nodeType&&(e=e.nodeName),!!a.schema.getTextBlockElements()[e.toLowerCase()]}function l(e){return/^(TH|TD)$/.test(e.nodeName)}function c(e){return e&&/^(IMG)$/.test(e.nodeName)}function u(e,t){return q.getParents(e,t,q.getRoot())}function d(e){return 1===e.nodeType&&"_mce_caret"===e.id}function f(){m({valigntop:[{selector:"td,th",styles:{verticalAlign:"top"}}],valignmiddle:[{selector:"td,th",styles:{verticalAlign:"middle"}}],valignbottom:[{selector:"td,th",styles:{verticalAlign:"bottom"}}],alignleft:[{selector:"figure.image",collapsed:!1,classes:"align-left",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"left"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"left"}}],aligncenter:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"center"},defaultBlock:"div"},{selector:"figure.image",collapsed:!1,classes:"align-center",ceFalseOverride:!0},{selector:"img",collapsed:!1,styles:{display:"block",marginLeft:"auto",marginRight:"auto"}},{selector:"table",collapsed:!1,styles:{marginLeft:"auto",marginRight:"auto"}}],alignright:[{selector:"figure.image",collapsed:!1,classes:"align-right",ceFalseOverride:!0},{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"right"},defaultBlock:"div"},{selector:"img,table",collapsed:!1,styles:{"float":"right"}}],alignjustify:[{selector:"figure,p,h1,h2,h3,h4,h5,h6,td,th,tr,div,ul,ol,li",styles:{textAlign:"justify"},defaultBlock:"div"}],bold:[{inline:"strong",remove:"all"},{inline:"span",styles:{fontWeight:"bold"}},{inline:"b",remove:"all"}],italic:[{inline:"em",remove:"all"},{inline:"span",styles:{fontStyle:"italic"}},{inline:"i",remove:"all"}],underline:[{inline:"span",styles:{textDecoration:"underline"},exact:!0},{inline:"u",remove:"all"}],strikethrough:[{inline:"span",styles:{textDecoration:"line-through"},exact:!0},{inline:"strike",remove:"all"}],forecolor:{inline:"span",styles:{color:"%value"},links:!0,remove_similar:!0},hilitecolor:{inline:"span",styles:{backgroundColor:"%value"},links:!0,remove_similar:!0},fontname:{inline:"span",styles:{fontFamily:"%value"}},fontsize:{inline:"span",styles:{fontSize:"%value"}},fontsize_class:{inline:"span",attributes:{"class":"%value"}},blockquote:{block:"blockquote",wrapper:1,remove:"all"},subscript:{inline:"sub"},superscript:{inline:"sup"},code:{inline:"code"},link:{inline:"a",selector:"a",remove:"all",split:!0,deep:!0,onmatch:function(){return!0},onformat:function(e,t,n){le(n,function(t,n){q.setAttrib(e,n,t)})}},removeformat:[{selector:"b,strong,em,i,font,u,strike,sub,sup,dfn,code,samp,kbd,var,cite,mark,q,del,ins",remove:"all",split:!0,expand:!1,block_expand:!0,deep:!0},{selector:"span",attributes:["style","class"],remove:"empty",split:!0,expand:!1,deep:!0},{selector:"*",attributes:["style","class"],split:!1,expand:!1,deep:!0}]}),le("p h1 h2 h3 h4 h5 h6 div address pre div dt dd samp".split(/\s/),function(e){m(e,{block:e,remove:"all"})}),m(a.settings.formats)}function h(){a.addShortcut("meta+b","bold_desc","Bold"),a.addShortcut("meta+i","italic_desc","Italic"),a.addShortcut("meta+u","underline_desc","Underline");for(var e=1;6>=e;e++)a.addShortcut("access+"+e,"",["FormatBlock",!1,"h"+e]);a.addShortcut("access+7","",["FormatBlock",!1,"p"]),a.addShortcut("access+8","",["FormatBlock",!1,"div"]),a.addShortcut("access+9","",["FormatBlock",!1,"address"])}function p(e){return e?$[e]:$}function m(e,t){e&&("string"!=typeof e?le(e,function(e,t){m(t,e)}):(t=t.length?t:[t],le(t,function(e){e.deep===re&&(e.deep=!e.selector),e.split===re&&(e.split=!e.selector||e.inline),e.remove===re&&e.selector&&!e.inline&&(e.remove="none"),e.selector&&e.inline&&(e.mixed=!0,e.block_expand=!0),"string"==typeof e.classes&&(e.classes=e.classes.split(/\s+/))}),$[e]=t))}function g(e){return e&&$[e]&&delete $[e],$}function v(e){var t;return a.dom.getParent(e,function(e){return t=a.dom.getStyle(e,"text-decoration"),t&&"none"!==t}),t}function y(e){var t;1===e.nodeType&&e.parentNode&&1===e.parentNode.nodeType&&(t=v(e.parentNode),a.dom.getStyle(e,"color")&&t?a.dom.setStyle(e,"text-decoration",t):a.dom.getStyle(e,"text-decoration")===t&&a.dom.setStyle(e,"text-decoration",null))}function b(t,n,r){function i(e,t){if(t=t||u,e){if(t.onformat&&t.onformat(e,t,n,r),le(t.styles,function(t,r){q.setStyle(e,r,D(t,n))}),t.styles){var i=q.getAttrib(e,"style");i&&e.setAttribute("data-mce-style",i)}le(t.attributes,function(t,r){q.setAttrib(e,r,D(t,n))}),le(t.classes,function(t){t=D(t,n),q.hasClass(e,t)||q.addClass(e,t)})}}function o(){function t(t,n){var i=new e(n);for(r=i.current();r;r=i.prev())if(r.childNodes.length>1||r==t||"BR"==r.tagName)return r}var n=a.selection.getRng(),i=n.startContainer,o=n.endContainer;if(i!=o&&0===n.endOffset){var s=t(i,o),l=3==s.nodeType?s.length:s.childNodes.length;n.setEnd(s,l)}return n}function l(e,r,o){var a=[],l,f,h=!0;l=u.inline||u.block,f=q.create(l),i(f),Y.walk(e,function(e){function r(e){var g,v,y,b,C;return C=h,g=e.nodeName.toLowerCase(),v=e.parentNode.nodeName.toLowerCase(),1===e.nodeType&&ie(e)&&(C=h,h="true"===ie(e),b=!0),R(g,"br")?(p=0,void(u.block&&q.remove(e))):u.wrapper&&w(e,t,n)?void(p=0):h&&!b&&u.block&&!u.wrapper&&s(g)&&X(v,l)?(e=q.rename(e,l),i(e),a.push(e),void(p=0)):u.selector&&(le(c,function(t){return"collapsed"in t&&t.collapsed!==m?void 0:q.is(e,t.selector)&&!d(e)?(i(e,t),y=!0,!1):void 0}),!u.inline||y)?void(p=0):void(!h||b||!X(l,g)||!X(v,l)||!o&&3===e.nodeType&&1===e.nodeValue.length&&65279===e.nodeValue.charCodeAt(0)||d(e)||u.inline&&K(e)?(p=0,le(ce(e.childNodes),r),b&&(h=C),p=0):(p||(p=q.clone(f,ee),e.parentNode.insertBefore(p,e),a.push(p)),p.appendChild(e)))}var p;le(e,r)}),u.links===!0&&le(a,function(e){function t(e){"A"===e.nodeName&&i(e,u),le(ce(e.childNodes),t)}t(e)}),le(a,function(e){function r(e){var t=0;return le(e.childNodes,function(e){M(e)||se(e)||t++}),t}function o(e){var t,n;return le(e.childNodes,function(e){return 1!=e.nodeType||se(e)||d(e)?void 0:(t=e,ee)}),t&&!se(t)&&T(t,u)&&(n=q.clone(t,ee),i(n),q.replace(n,e,te),q.remove(t,1)),n||e}var s;if(s=r(e),(a.length>1||!K(e))&&0===s)return void q.remove(e,1);if(u.inline||u.wrapper){if(u.exact||1!==s||(e=o(e)),le(c,function(t){le(q.select(t.inline,e),function(e){se(e)||O(t,n,e,t.exact?e:null)})}),w(e.parentNode,t,n))return q.remove(e,1),e=0,te;u.merge_with_parents&&q.getParent(e.parentNode,function(r){return w(r,t,n)?(q.remove(e,1),e=0,te):void 0}),e&&u.merge_siblings!==!1&&(e=z(F(e),e),e=z(e,F(e,te)))}})}var c=p(t),u=c[0],f,h,m=!r&&j.isCollapsed();if("false"!==ie(j.getNode())){if(u)if(r)r.nodeType?(h=q.createRng(),h.setStartBefore(r),h.setEndAfter(r),l(P(h,c),null,!0)):l(r,null,!0);else if(m&&u.inline&&!q.select("td.mce-item-selected,th.mce-item-selected").length)V("apply",t,n);else{var g=a.selection.getNode();G||!c[0].defaultBlock||q.getParent(g,q.isBlock)||b(c[0].defaultBlock),a.selection.setRng(o()),f=j.getBookmark(),l(P(j.getRng(te),c),f),u.styles&&(u.styles.color||u.styles.textDecoration)&&(ue(g,y,"childNodes"),y(g)),j.moveToBookmark(f),U(j.getRng(te)),a.nodeChanged()}}else{r=j.getNode();for(var v=0,C=c.length;C>v;v++)if(c[v].ceFalseOverride&&q.is(r,c[v].selector))return void i(r,c[v])}}function C(e,t,n,r){function i(e){var n,r,o,a,s;if(1===e.nodeType&&ie(e)&&(a=b,b="true"===ie(e),s=!0),n=ce(e.childNodes),b&&!s)for(r=0,o=h.length;o>r&&!O(h[r],t,e,e);r++);if(m.deep&&n.length){for(r=0,o=n.length;o>r;r++)i(n[r]);s&&(b=a)}}function o(n){var i;return le(u(n.parentNode).reverse(),function(n){var o;i||"_start"==n.id||"_end"==n.id||(o=w(n,e,t,r),o&&o.split!==!1&&(i=n))}),i}function s(e,n,r,i){var o,a,s,l,c,u;if(e){for(u=e.parentNode,o=n.parentNode;o&&o!=u;o=o.parentNode){for(a=q.clone(o,ee),c=0;c<h.length;c++)if(O(h[c],t,a,a)){a=0;break}a&&(s&&a.appendChild(s),l||(l=a),s=a)}!i||m.mixed&&K(e)||(n=q.split(e,n)),s&&(r.parentNode.insertBefore(s,r),l.appendChild(r))}return n}function c(e){return s(o(e),e,e,!0)}function d(e){var t=q.get(e?"_start":"_end"),n=t[e?"firstChild":"lastChild"];return se(n)&&(n=n[e?"firstChild":"lastChild"]),3==n.nodeType&&0===n.data.length&&(n=e?t.previousSibling||t.nextSibling:t.nextSibling||t.previousSibling),q.remove(t,!0),n}function f(e){var t,n,r=e.commonAncestorContainer;if(e=P(e,h,te),m.split){if(t=W(e,te),n=W(e),t!=n){if(/^(TR|TH|TD)$/.test(t.nodeName)&&t.firstChild&&(t="TR"==t.nodeName?t.firstChild.firstChild||t:t.firstChild||t),r&&/^T(HEAD|BODY|FOOT|R)$/.test(r.nodeName)&&l(n)&&n.firstChild&&(n=n.firstChild||n),q.isChildOf(t,n)&&!K(n)&&!l(t)&&!l(n))return t=L(t,"span",{id:"_start","data-mce-type":"bookmark"}),c(t),void(t=d(te));t=L(t,"span",{id:"_start","data-mce-type":"bookmark"}),n=L(n,"span",{id:"_end","data-mce-type":"bookmark"}),c(t),c(n),t=d(te),n=d()}else t=n=c(t);e.startContainer=t.parentNode?t.parentNode:t,e.startOffset=J(t),e.endContainer=n.parentNode?n.parentNode:n,e.endOffset=J(n)+1}Y.walk(e,function(e){le(e,function(e){i(e),1===e.nodeType&&"underline"===a.dom.getStyle(e,"text-decoration")&&e.parentNode&&"underline"===v(e.parentNode)&&O({deep:!1,exact:!0,inline:"span",styles:{textDecoration:"underline"}},null,e)})})}var h=p(e),m=h[0],g,y,b=!0;if(n)return void(n.nodeType?(y=q.createRng(),y.setStartBefore(n),y.setEndAfter(n),f(y)):f(n));if("false"!==ie(j.getNode()))j.isCollapsed()&&m.inline&&!q.select("td.mce-item-selected,th.mce-item-selected").length?V("remove",e,t,r):(g=j.getBookmark(),f(j.getRng(te)),j.moveToBookmark(g),m.inline&&E(e,t,j.getStart())&&U(j.getRng(!0)),a.nodeChanged());else{n=j.getNode();for(var C=0,x=h.length;x>C&&(!h[C].ceFalseOverride||!O(h[C],t,n,n));C++);}}function x(e,t,n){var r=p(e);!E(e,t,n)||"toggle"in r[0]&&!r[0].toggle?b(e,t,n):C(e,t,n)}function w(e,t,n,r){function i(e,t,i){var o,a,s=t[i],l;if(t.onmatch)return t.onmatch(e,t,i);if(s)if(s.length===re){for(o in s)if(s.hasOwnProperty(o)){if(a="attributes"===i?q.getAttrib(e,o):A(e,o),r&&!a&&!t.exact)return;if((!r||t.exact)&&!R(a,B(D(s[o],n),o)))return}}else for(l=0;l<s.length;l++)if("attributes"===i?q.getAttrib(e,s[l]):A(e,s[l]))return t;return t}var o=p(t),a,s,l;if(o&&e)for(s=0;s<o.length;s++)if(a=o[s],T(e,a)&&i(e,a,"attributes")&&i(e,a,"styles")){if(l=a.classes)for(s=0;s<l.length;s++)if(!q.hasClass(e,l[s]))return;return a}}function E(e,t,n){function r(n){
var r=q.getRoot();return n===r?!1:(n=q.getParent(n,function(n){return n.parentNode===r||!!w(n,e,t,!0)}),w(n,e,t))}var i;return n?r(n):(n=j.getNode(),r(n)?te:(i=j.getStart(),i!=n&&r(i)?te:ee))}function N(e,t){var n,r=[],i={};return n=j.getStart(),q.getParent(n,function(n){var o,a;for(o=0;o<e.length;o++)a=e[o],!i[a]&&w(n,a,t)&&(i[a]=!0,r.push(a))},q.getRoot()),r}function _(e){var t=p(e),n,r,i,o,a;if(t)for(n=j.getStart(),r=u(n),o=t.length-1;o>=0;o--){if(a=t[o].selector,!a||t[o].defaultBlock)return te;for(i=r.length-1;i>=0;i--)if(q.is(r[i],a))return te}return ee}function S(e,t,n){var r;return ne||(ne={},r={},a.on("NodeChange",function(e){var t=u(e.element),n={};t=i.grep(t,function(e){return 1==e.nodeType&&!e.getAttribute("data-mce-bogus")}),le(ne,function(e,i){le(t,function(o){return w(o,i,{},e.similar)?(r[i]||(le(e,function(e){e(!0,{node:o,format:i,parents:t})}),r[i]=e),n[i]=e,!1):void 0})}),le(r,function(i,o){n[o]||(delete r[o],le(i,function(n){n(!1,{node:e.element,format:o,parents:t})}))})})),le(e.split(","),function(e){ne[e]||(ne[e]=[],ne[e].similar=n),ne[e].push(t)}),this}function k(e){return o.getCssText(a,e)}function T(e,t){return R(e,t.inline)?te:R(e,t.block)?te:t.selector?1==e.nodeType&&q.is(e,t.selector):void 0}function R(e,t){return e=e||"",t=t||"",e=""+(e.nodeName||e),t=""+(t.nodeName||t),e.toLowerCase()==t.toLowerCase()}function A(e,t){return B(q.getStyle(e,t),t)}function B(e,t){return("color"==t||"backgroundColor"==t)&&(e=q.toHex(e)),"fontWeight"==t&&700==e&&(e="bold"),"fontFamily"==t&&(e=e.replace(/[\'\"]/g,"").replace(/,\s+/g,",")),""+e}function D(e,t){return"string"!=typeof e?e=e(t):t&&(e=e.replace(/%(\w+)/g,function(e,n){return t[n]||e})),e}function M(e){return e&&3===e.nodeType&&/^([\t \r\n]+|)$/.test(e.nodeValue)}function L(e,t,n){var r=q.create(t,n);return e.parentNode.insertBefore(r,e),r.appendChild(e),r}function P(t,n,r){function i(e){function t(e){return"BR"==e.nodeName&&e.getAttribute("data-mce-bogus")&&!e.nextSibling}var r,i,o,a,s;if(r=i=e?g:y,a=e?"previousSibling":"nextSibling",s=q.getRoot(),3==r.nodeType&&!M(r)&&(e?v>0:b<r.nodeValue.length))return r;for(;;){if(!n[0].block_expand&&K(i))return i;for(o=i[a];o;o=o[a])if(!se(o)&&!M(o)&&!t(o))return i;if(i==s||i.parentNode==s){r=i;break}i=i.parentNode}return r}function o(e,t){for(t===re&&(t=3===e.nodeType?e.length:e.childNodes.length);e&&e.hasChildNodes();)e=e.childNodes[t],e&&(t=3===e.nodeType?e.length:e.childNodes.length);return{node:e,offset:t}}function l(e){for(var t=e;t;){if(1===t.nodeType&&ie(t))return"false"===ie(t)?t:e;t=t.parentNode}return e}function c(t,n,i){function o(e,t){var n,o,a=e.nodeValue;return"undefined"==typeof t&&(t=i?a.length:0),i?(n=a.lastIndexOf(" ",t),o=a.lastIndexOf("\xa0",t),n=n>o?n:o,-1===n||r||n++):(n=a.indexOf(" ",t),o=a.indexOf("\xa0",t),n=-1!==n&&(-1===o||o>n)?n:o),n}var s,l,c,u;if(3===t.nodeType){if(c=o(t,n),-1!==c)return{container:t,offset:c};u=t}for(s=new e(t,q.getParent(t,K)||a.getBody());l=s[i?"prev":"next"]();)if(3===l.nodeType){if(u=l,c=o(l),-1!==c)return{container:l,offset:c}}else if(K(l))break;return u?(n=i?0:u.length,{container:u,offset:n}):void 0}function d(e,r){var i,o,a,s;for(3==e.nodeType&&0===e.nodeValue.length&&e[r]&&(e=e[r]),i=u(e),o=0;o<i.length;o++)for(a=0;a<n.length;a++)if(s=n[a],!("collapsed"in s&&s.collapsed!==t.collapsed)&&q.is(i[o],s.selector))return i[o];return e}function f(e,t){var r,i=q.getRoot();if(n[0].wrapper||(r=q.getParent(e,n[0].block,i)),r||(r=q.getParent(3==e.nodeType?e.parentNode:e,function(e){return e!=i&&s(e)})),r&&n[0].wrapper&&(r=u(r,"ul,ol").reverse()[0]||r),!r)for(r=e;r[t]&&!K(r[t])&&(r=r[t],!R(r,"br")););return r||e}var h,p,m,g=t.startContainer,v=t.startOffset,y=t.endContainer,b=t.endOffset;if(1==g.nodeType&&g.hasChildNodes()&&(h=g.childNodes.length-1,g=g.childNodes[v>h?h:v],3==g.nodeType&&(v=0)),1==y.nodeType&&y.hasChildNodes()&&(h=y.childNodes.length-1,y=y.childNodes[b>h?h:b-1],3==y.nodeType&&(b=y.nodeValue.length)),g=l(g),y=l(y),(se(g.parentNode)||se(g))&&(g=se(g)?g:g.parentNode,g=g.nextSibling||g,3==g.nodeType&&(v=0)),(se(y.parentNode)||se(y))&&(y=se(y)?y:y.parentNode,y=y.previousSibling||y,3==y.nodeType&&(b=y.length)),n[0].inline&&(t.collapsed&&(m=c(g,v,!0),m&&(g=m.container,v=m.offset),m=c(y,b),m&&(y=m.container,b=m.offset)),p=o(y,b),p.node)){for(;p.node&&0===p.offset&&p.node.previousSibling;)p=o(p.node.previousSibling);p.node&&p.offset>0&&3===p.node.nodeType&&" "===p.node.nodeValue.charAt(p.offset-1)&&p.offset>1&&(y=p.node,y.splitText(p.offset-1))}return(n[0].inline||n[0].block_expand)&&(n[0].inline&&3==g.nodeType&&0!==v||(g=i(!0)),n[0].inline&&3==y.nodeType&&b!==y.nodeValue.length||(y=i())),n[0].selector&&n[0].expand!==ee&&!n[0].inline&&(g=d(g,"previousSibling"),y=d(y,"nextSibling")),(n[0].block||n[0].selector)&&(g=f(g,"previousSibling"),y=f(y,"nextSibling"),n[0].block&&(K(g)||(g=i(!0)),K(y)||(y=i()))),1==g.nodeType&&(v=J(g),g=g.parentNode),1==y.nodeType&&(b=J(y)+1,y=y.parentNode),{startContainer:g,startOffset:v,endContainer:y,endOffset:b}}function H(e,t){return t.links&&"A"==e.tagName}function O(e,t,n,r){var i,o,a;if(!T(n,e)&&!H(n,e))return ee;if("all"!=e.remove)for(le(e.styles,function(i,o){i=B(D(i,t),o),"number"==typeof o&&(o=i,r=0),(e.remove_similar||!r||R(A(r,o),i))&&q.setStyle(n,o,""),a=1}),a&&""===q.getAttrib(n,"style")&&(n.removeAttribute("style"),n.removeAttribute("data-mce-style")),le(e.attributes,function(e,i){var o;if(e=D(e,t),"number"==typeof i&&(i=e,r=0),!r||R(q.getAttrib(r,i),e)){if("class"==i&&(e=q.getAttrib(n,i),e&&(o="",le(e.split(/\s+/),function(e){/mce\-\w+/.test(e)&&(o+=(o?" ":"")+e)}),o)))return void q.setAttrib(n,i,o);"class"==i&&n.removeAttribute("className"),Z.test(i)&&n.removeAttribute("data-mce-"+i),n.removeAttribute(i)}}),le(e.classes,function(e){e=D(e,t),(!r||q.hasClass(r,e))&&q.removeClass(n,e)}),o=q.getAttribs(n),i=0;i<o.length;i++)if(0!==o[i].nodeName.indexOf("_"))return ee;return"none"!=e.remove?(I(n,e),te):void 0}function I(e,t){function n(e,t,n){return e=F(e,t,n),!e||"BR"==e.nodeName||K(e)}var r=e.parentNode,i;t.block&&(G?r==q.getRoot()&&(t.list_block&&R(e,t.list_block)||le(ce(e.childNodes),function(e){X(G,e.nodeName.toLowerCase())?i?i.appendChild(e):(i=L(e,G),q.setAttribs(i,a.settings.forced_root_block_attrs)):i=0})):K(e)&&!K(r)&&(n(e,ee)||n(e.firstChild,te,1)||e.insertBefore(q.create("br"),e.firstChild),n(e,te)||n(e.lastChild,ee,1)||e.appendChild(q.create("br")))),t.selector&&t.inline&&!R(t.inline,e)||q.remove(e,1)}function F(e,t,n){if(e)for(t=t?"nextSibling":"previousSibling",e=n?e:e[t];e;e=e[t])if(1==e.nodeType||!M(e))return e}function z(e,t){function n(e,t){for(i=e;i;i=i[t]){if(3==i.nodeType&&0!==i.nodeValue.length)return e;if(1==i.nodeType&&!se(i))return i}return e}var i,o,a=new r(q);if(e&&t&&(e=n(e,"previousSibling"),t=n(t,"nextSibling"),a.compare(e,t))){for(i=e.nextSibling;i&&i!=t;)o=i,i=i.nextSibling,e.appendChild(o);return q.remove(t),le(ce(t.childNodes),function(t){e.appendChild(t)}),e}return t}function W(t,n){var r,i,o;return r=t[n?"startContainer":"endContainer"],i=t[n?"startOffset":"endOffset"],1==r.nodeType&&(o=r.childNodes.length-1,!n&&i&&i--,r=r.childNodes[i>o?o:i]),3===r.nodeType&&n&&i>=r.nodeValue.length&&(r=new e(r,a.getBody()).next()||r),3!==r.nodeType||n||0!==i||(r=new e(r,a.getBody()).prev()||r),r}function V(t,n,r,i){function o(e){var t=q.create("span",{id:g,"data-mce-bogus":!0,style:v?"color:red":""});return e&&t.appendChild(a.getDoc().createTextNode(Q)),t}function l(e,t){for(;e;){if(3===e.nodeType&&e.nodeValue!==Q||e.childNodes.length>1)return!1;t&&1===e.nodeType&&t.push(e),e=e.firstChild}return!0}function c(e){for(;e;){if(e.id===g)return e;e=e.parentNode}}function u(t){var n;if(t)for(n=new e(t,t),t=n.current();t;t=n.next())if(3===t.nodeType)return t}function d(e,t){var n,r;if(e)r=j.getRng(!0),l(e)?(t!==!1&&(r.setStartBefore(e),r.setEndBefore(e)),q.remove(e)):(n=u(e),n.nodeValue.charAt(0)===Q&&(n.deleteData(0,1),r.startContainer==n&&r.startOffset>0&&r.setStart(n,r.startOffset-1),r.endContainer==n&&r.endOffset>0&&r.setEnd(n,r.endOffset-1)),q.remove(e,1)),j.setRng(r);else if(e=c(j.getStart()),!e)for(;e=q.get(g);)d(e,!1)}function f(){var e,t,i,a,s,l,d;e=j.getRng(!0),a=e.startOffset,l=e.startContainer,d=l.nodeValue,t=c(j.getStart()),t&&(i=u(t)),d&&a>0&&a<d.length&&/\w/.test(d.charAt(a))&&/\w/.test(d.charAt(a-1))?(s=j.getBookmark(),e.collapse(!0),e=P(e,p(n)),e=Y.split(e),b(n,r,e),j.moveToBookmark(s)):(t&&i.nodeValue===Q?b(n,r,t):(t=o(!0),i=t.firstChild,e.insertNode(t),a=1,b(n,r,t)),j.setCursorLocation(i,a))}function h(){var e=j.getRng(!0),t,a,l,c,u,d,f=[],h,m;for(t=e.startContainer,a=e.startOffset,u=t,3==t.nodeType&&(a!=t.nodeValue.length&&(c=!0),u=u.parentNode);u;){if(w(u,n,r,i)){d=u;break}u.nextSibling&&(c=!0),f.push(u),u=u.parentNode}if(d)if(c)l=j.getBookmark(),e.collapse(!0),e=P(e,p(n),!0),e=Y.split(e),C(n,r,e),j.moveToBookmark(l);else{for(m=o(),u=m,h=f.length-1;h>=0;h--)u.appendChild(q.clone(f[h],!1)),u=u.firstChild;u.appendChild(q.doc.createTextNode(Q)),u=u.firstChild;var g=q.getParent(d,s);g&&q.isEmpty(g)?d.parentNode.replaceChild(m,d):q.insertAfter(m,d),j.setCursorLocation(u,1),q.isEmpty(d)&&q.remove(d)}}function m(){var e;e=c(j.getStart()),e&&!q.isEmpty(e)&&ue(e,function(e){1!=e.nodeType||e.id===g||q.isEmpty(e)||q.setAttrib(e,"data-mce-bogus",null)},"childNodes")}var g="_mce_caret",v=a.settings.caret_debug;a._hasCaretEvents||(ae=function(){var e=[],t;if(l(c(j.getStart()),e))for(t=e.length;t--;)q.setAttrib(e[t],"data-mce-bogus","1")},oe=function(e){var t=e.keyCode;d(),8==t&&j.isCollapsed()&&j.getStart().innerHTML==Q&&d(c(j.getStart())),(37==t||39==t)&&d(c(j.getStart())),m()},a.on("SetContent",function(e){e.selection&&m()}),a._hasCaretEvents=!0),"apply"==t?f():h()}function U(t){var n=t.startContainer,r=t.startOffset,i,o,a,s,l;if((t.startContainer!=t.endContainer||!c(t.startContainer.childNodes[t.startOffset]))&&(3==n.nodeType&&r>=n.nodeValue.length&&(r=J(n),n=n.parentNode,i=!0),1==n.nodeType))for(s=n.childNodes,n=s[Math.min(r,s.length-1)],o=new e(n,q.getParent(n,q.isBlock)),(r>s.length-1||i)&&o.next(),a=o.current();a;a=o.next())if(3==a.nodeType&&!M(a))return l=q.create("a",{"data-mce-bogus":"all"},Q),a.parentNode.insertBefore(l,a),t.setStart(a,0),j.setRng(t),void q.remove(l)}var $={},q=a.dom,j=a.selection,Y=new t(q),X=a.schema.isValidChild,K=q.isBlock,G=a.settings.forced_root_block,J=q.nodeIndex,Q="\ufeff",Z=/^(src|href|style)$/,ee=!1,te=!0,ne,re,ie=q.getContentEditable,oe,ae,se=n.isBookmarkNode,le=i.each,ce=i.grep,ue=i.walk,de=i.extend;de(this,{get:p,register:m,unregister:g,apply:b,remove:C,toggle:x,match:E,matchAll:N,matchNode:w,canApply:_,formatChanged:S,getCssText:k}),f(),h(),a.on("BeforeGetContent",function(e){ae&&"raw"!=e.format&&ae()}),a.on("mouseup keydown",function(e){oe&&oe(e)})}}),r(J,[I,h],function(e,t){return function(e){function n(){return e.serializer.getTrimmedContent()}function r(t){e.setDirty(t)}function i(e){o.typing=!1,o.add({},e)}var o=this,a=0,s=[],l,c,u=0;return e.on("init",function(){o.add()}),e.on("BeforeExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&o.beforeChange()}),e.on("ExecCommand",function(e){var t=e.command;"Undo"!=t&&"Redo"!=t&&"mceRepaint"!=t&&i(e)}),e.on("ObjectResizeStart Cut",function(){o.beforeChange()}),e.on("SaveContent ObjectResized blur",i),e.on("DragEnd",i),e.on("KeyUp",function(a){var l=a.keyCode;a.isDefaultPrevented()||((l>=33&&36>=l||l>=37&&40>=l||45==l||13==l||a.ctrlKey)&&(i(),e.nodeChanged()),(46==l||8==l||t.mac&&(91==l||93==l))&&e.nodeChanged(),c&&o.typing&&(e.isDirty()||(r(s[0]&&n()!=s[0].content),e.isDirty()&&e.fire("change",{level:s[0],lastLevel:null})),e.fire("TypingUndo"),c=!1,e.nodeChanged()))}),e.on("KeyDown",function(e){var t=e.keyCode;if(!e.isDefaultPrevented()){if(t>=33&&36>=t||t>=37&&40>=t||45==t)return void(o.typing&&i(e));var n=e.ctrlKey&&!e.altKey||e.metaKey;!(16>t||t>20)||224==t||91==t||o.typing||n||(o.beforeChange(),o.typing=!0,o.add({},e),c=!0)}}),e.on("MouseDown",function(e){o.typing&&i(e)}),e.addShortcut("meta+z","","Undo"),e.addShortcut("meta+y,meta+shift+z","","Redo"),e.on("AddUndo Undo Redo ClearUndos",function(t){t.isDefaultPrevented()||e.nodeChanged()}),o={data:s,typing:!1,beforeChange:function(){u||(l=e.selection.getBookmark(2,!0))},add:function(t,i){var o,c=e.settings,d;if(t=t||{},t.content=n(),u||e.removed)return null;if(d=s[a],e.fire("BeforeAddUndo",{level:t,lastLevel:d,originalEvent:i}).isDefaultPrevented())return null;if(d&&d.content==t.content)return null;if(s[a]&&(s[a].beforeBookmark=l),c.custom_undo_redo_levels&&s.length>c.custom_undo_redo_levels){for(o=0;o<s.length-1;o++)s[o]=s[o+1];s.length--,a=s.length}t.bookmark=e.selection.getBookmark(2,!0),a<s.length-1&&(s.length=a+1),s.push(t),a=s.length-1;var f={level:t,lastLevel:d,originalEvent:i};return e.fire("AddUndo",f),a>0&&(r(!0),e.fire("change",f)),t},undo:function(){var t;return o.typing&&(o.add(),o.typing=!1),a>0&&(t=s[--a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.beforeBookmark),r(!0),e.fire("undo",{level:t})),t},redo:function(){var t;return a<s.length-1&&(t=s[++a],e.setContent(t.content,{format:"raw"}),e.selection.moveToBookmark(t.bookmark),r(!0),e.fire("redo",{level:t})),t},clear:function(){s=[],a=0,o.typing=!1,e.fire("ClearUndos")},hasUndo:function(){return a>0||o.typing&&s[0]&&n()!=s[0].content},hasRedo:function(){return a<s.length-1&&!this.typing},transact:function(e){o.beforeChange();try{u++,e()}finally{u--}o.add()}}}}),r(Q,[y,T,h],function(e,t,n){var r=n.ie&&n.ie<11;return function(i){function o(o){function h(e){return e&&a.isBlock(e)&&!/^(TD|TH|CAPTION|FORM)$/.test(e.nodeName)&&!/^(fixed|absolute)/i.test(e.style.position)&&"true"!==a.getContentEditable(e)}function p(e){return e&&/^(TD|TH|CAPTION)$/.test(e.nodeName)}function m(e){var t;a.isBlock(e)&&(t=s.getRng(),e.appendChild(a.create("span",null,"\xa0")),s.select(e),e.lastChild.outerHTML="",s.setRng(t))}function g(e){var t=e,n=[],r;if(t){for(;t=t.firstChild;){if(a.isBlock(t))return;1!=t.nodeType||d[t.nodeName.toLowerCase()]||n.push(t)}for(r=n.length;r--;)t=n[r],!t.hasChildNodes()||t.firstChild==t.lastChild&&""===t.firstChild.nodeValue?a.remove(t):"A"==t.nodeName&&" "===(t.innerText||t.textContent)&&a.remove(t)}}function v(t){function r(e){for(;e;){if(1==e.nodeType||3==e.nodeType&&e.data&&/[\r\n\s]/.test(e.data))return e;e=e.nextSibling}}var i,o,l,c=t,u;if(t){if(n.ie&&n.ie<9&&L&&L.firstChild&&L.firstChild==L.lastChild&&"BR"==L.firstChild.tagName&&a.remove(L.firstChild),/^(LI|DT|DD)$/.test(t.nodeName)){var d=r(t.firstChild);d&&/^(UL|OL|DL)$/.test(d.nodeName)&&t.insertBefore(a.doc.createTextNode("\xa0"),t.firstChild)}if(l=a.createRng(),n.ie||t.normalize(),t.hasChildNodes()){for(i=new e(t,t);o=i.current();){if(3==o.nodeType){l.setStart(o,0),l.setEnd(o,0);break}if(f[o.nodeName.toLowerCase()]){l.setStartBefore(o),l.setEndBefore(o);break}c=o,o=i.next()}o||(l.setStart(c,0),l.setEnd(c,0))}else"BR"==t.nodeName?t.nextSibling&&a.isBlock(t.nextSibling)?((!P||9>P)&&(u=a.create("br"),t.parentNode.insertBefore(u,t)),l.setStartBefore(t),l.setEndBefore(t)):(l.setStartAfter(t),l.setEndAfter(t)):(l.setStart(t,0),l.setEnd(t,0));s.setRng(l),a.remove(u),s.scrollIntoView(t)}}function y(e){var t=l.forced_root_block;t&&t.toLowerCase()===e.tagName.toLowerCase()&&a.setAttribs(e,l.forced_root_block_attrs)}function b(e){e.innerHTML=r?"":'<br data-mce-bogus="1">'}function C(e){var t=D,n,i,o,s=u.getTextInlineElements();if(e||"TABLE"==z?(n=a.create(e||V),y(n)):n=L.cloneNode(!1),o=n,l.keep_styles!==!1)do if(s[t.nodeName]){if("_mce_caret"==t.id)continue;i=t.cloneNode(!1),a.setAttrib(i,"id",""),n.hasChildNodes()?(i.appendChild(n.firstChild),n.appendChild(i)):(o=i,n.appendChild(i))}while(t=t.parentNode);return r||(o.innerHTML='<br data-mce-bogus="1">'),n}function x(t){var n,r,i;if(3==D.nodeType&&(t?M>0:M<D.nodeValue.length))return!1;if(D.parentNode==L&&U&&!t)return!0;if(t&&1==D.nodeType&&D==L.firstChild)return!0;if("TABLE"===D.nodeName||D.previousSibling&&"TABLE"==D.previousSibling.nodeName)return U&&!t||!U&&t;for(n=new e(D,L),3==D.nodeType&&(t&&0===M?n.prev():t||M!=D.nodeValue.length||n.next());r=n.current();){if(1===r.nodeType){if(!r.getAttribute("data-mce-bogus")&&(i=r.nodeName.toLowerCase(),d[i]&&"br"!==i))return!1}else if(3===r.nodeType&&!/^[ \t\r\n]*$/.test(r.nodeValue))return!1;t?n.prev():n.next()}return!0}function w(e,t){var n,r,o,s,l,c,d=V||"P";if(r=a.getParent(e,a.isBlock),!r||!h(r)){if(r=r||B,c=r==i.getBody()||p(r)?r.nodeName.toLowerCase():r.parentNode.nodeName.toLowerCase(),!r.hasChildNodes())return n=a.create(d),y(n),r.appendChild(n),R.setStart(n,0),R.setEnd(n,0),n;for(s=e;s.parentNode!=r;)s=s.parentNode;for(;s&&!a.isBlock(s);)o=s,s=s.previousSibling;if(o&&u.isValidChild(c,d.toLowerCase())){for(n=a.create(d),y(n),o.parentNode.insertBefore(n,o),s=o;s&&!a.isBlock(s);)l=s.nextSibling,n.appendChild(s),s=l;R.setStart(e,t),R.setEnd(e,t)}}return e}function E(){function e(e){for(var t=F[e?"firstChild":"lastChild"];t&&1!=t.nodeType;)t=t[e?"nextSibling":"previousSibling"];return t===L}function t(){var e=F.parentNode;return/^(LI|DT|DD)$/.test(e.nodeName)?e:F}if(F!=i.getBody()){var n=F.parentNode.nodeName;/^(OL|UL|LI)$/.test(n)&&(V="LI"),O=V?C(V):a.create("BR"),e(!0)&&e()?"LI"==n?a.insertAfter(O,t()):a.replace(O,F):e(!0)?"LI"==n?(a.insertAfter(O,t()),O.appendChild(a.doc.createTextNode(" ")),O.appendChild(F)):F.parentNode.insertBefore(O,F):e()?(a.insertAfter(O,t()),m(O)):(F=t(),A=R.cloneRange(),A.setStartAfter(L),A.setEndAfter(F),I=A.extractContents(),"LI"==V&&"LI"==I.firstChild.nodeName?(O=I.firstChild,a.insertAfter(I,F)):(a.insertAfter(I,F),a.insertAfter(O,F))),a.remove(L),v(O),c.add()}}function N(){i.execCommand("InsertLineBreak",!1,o)}function _(e){do 3===e.nodeType&&(e.nodeValue=e.nodeValue.replace(/^[\r\n]+/,"")),e=e.firstChild;while(e)}function S(e){var t=a.getRoot(),n,r;for(n=e;n!==t&&"false"!==a.getContentEditable(n);)"true"===a.getContentEditable(n)&&(r=n),n=n.parentNode;return n!==t?r:t}function k(e){var t;r||(e.normalize(),t=e.lastChild,(!t||/^(left|right)$/gi.test(a.getStyle(t,"float",!0)))&&a.add(e,"br"))}function T(){O=/^(H[1-6]|PRE|FIGURE)$/.test(z)&&"HGROUP"!=W?C(V):C(),l.end_container_on_empty_block&&h(F)&&a.isEmpty(L)?O=a.split(F,L):a.insertAfter(O,L),v(O)}var R,A,B,D,M,L,P,H,O,I,F,z,W,V,U;if(R=s.getRng(!0),!o.isDefaultPrevented()){if(!R.collapsed)return void i.execCommand("Delete");if(new t(a).normalize(R),D=R.startContainer,M=R.startOffset,V=(l.force_p_newlines?"p":"")||l.forced_root_block,V=V?V.toUpperCase():"",P=a.doc.documentMode,H=o.shiftKey,1==D.nodeType&&D.hasChildNodes()&&(U=M>D.childNodes.length-1,D=D.childNodes[Math.min(M,D.childNodes.length-1)]||D,M=U&&3==D.nodeType?D.nodeValue.length:0),B=S(D)){if(c.beforeChange(),!a.isBlock(B)&&B!=a.getRoot())return void((!V||H)&&N());if((V&&!H||!V&&H)&&(D=w(D,M)),L=a.getParent(D,a.isBlock),F=L?a.getParent(L.parentNode,a.isBlock):null,z=L?L.nodeName.toUpperCase():"",W=F?F.nodeName.toUpperCase():"","LI"!=W||o.ctrlKey||(L=F,z=W),/^(LI|DT|DD)$/.test(z)){if(!V&&H)return void N();if(a.isEmpty(L))return void E()}if("PRE"==z&&l.br_in_pre!==!1){if(!H)return void N()}else if(!V&&!H&&"LI"!=z||V&&H)return void N();V&&L===i.getBody()||(V=V||"P",x()?T():x(!0)?(O=L.parentNode.insertBefore(C(),L),m(O),v(L)):(A=R.cloneRange(),A.setEndAfter(L),I=A.extractContents(),_(I),O=I.firstChild,a.insertAfter(I,L),g(O),k(L),a.isEmpty(L)&&b(L),O.normalize(),a.isEmpty(O)?(a.remove(O),T()):v(O)),a.setAttrib(O,"id",""),i.fire("NewBlock",{newBlock:O}),c.add())}}}var a=i.dom,s=i.selection,l=i.settings,c=i.undoManager,u=i.schema,d=u.getNonEmptyElements(),f=u.getMoveCaretBeforeOnEnterElements();i.on("keydown",function(e){13==e.keyCode&&o(e)!==!1&&e.preventDefault()})}}),r(Z,[],function(){return function(e){function t(){var t=i.getStart(),s=e.getBody(),l,c,u,d,f,h,p,m=-16777215,g,v,y,b,C;if(C=n.forced_root_block,t&&1===t.nodeType&&C){for(;t&&t!=s;){if(a[t.nodeName])return;t=t.parentNode}if(l=i.getRng(),l.setStart){c=l.startContainer,u=l.startOffset,d=l.endContainer,f=l.endOffset;try{v=e.getDoc().activeElement===s}catch(x){}}else l.item&&(t=l.item(0),l=e.getDoc().body.createTextRange(),l.moveToElementText(t)),v=l.parentElement().ownerDocument===e.getDoc(),y=l.duplicate(),y.collapse(!0),u=-1*y.move("character",m),y.collapsed||(y=l.duplicate(),y.collapse(!1),f=-1*y.move("character",m)-u);for(t=s.firstChild,b=s.nodeName.toLowerCase();t;)if((3===t.nodeType||1==t.nodeType&&!a[t.nodeName])&&o.isValidChild(b,C.toLowerCase())){if(3===t.nodeType&&0===t.nodeValue.length){p=t,t=t.nextSibling,r.remove(p);continue}h||(h=r.create(C,e.settings.forced_root_block_attrs),t.parentNode.insertBefore(h,t),g=!0),p=t,t=t.nextSibling,h.appendChild(p)}else h=null,t=t.nextSibling;if(g&&v){if(l.setStart)l.setStart(c,u),l.setEnd(d,f),i.setRng(l);else try{l=e.getDoc().body.createTextRange(),l.moveToElementText(s),l.collapse(!0),l.moveStart("character",u),f>0&&l.moveEnd("character",f),l.select()}catch(x){}e.nodeChanged()}}}var n=e.settings,r=e.dom,i=e.selection,o=e.schema,a=o.getBlockElements();n.forced_root_block&&e.on("NodeChange",t)}}),r(ee,[P,h,m,X,T,y],function(e,n,r,i,o,a){var s=r.each,l=r.extend,c=r.map,u=r.inArray,d=r.explode,f=n.ie,h=n.ie&&n.ie<11,p=!0,m=!1;return function(r){function g(e,t,n,i){var o,a,l=0;if(/^(mceAddUndoLevel|mceEndUndoLevel|mceBeginUndoLevel|mceRepaint)$/.test(e)||i&&i.skip_focus||r.focus(),i=r.fire("BeforeExecCommand",{command:e,ui:t,value:n}),i.isDefaultPrevented())return!1;if(a=e.toLowerCase(),o=M.exec[a])return o(a,t,n),r.fire("ExecCommand",{command:e,ui:t,value:n}),!0;if(s(r.plugins,function(i){return i.execCommand&&i.execCommand(e,t,n)?(r.fire("ExecCommand",{command:e,ui:t,value:n}),l=!0,!1):void 0}),l)return l;if(r.theme&&r.theme.execCommand&&r.theme.execCommand(e,t,n))return r.fire("ExecCommand",{command:e,ui:t,value:n}),!0;try{l=r.getDoc().execCommand(e,t,n)}catch(c){}return l?(r.fire("ExecCommand",{command:e,ui:t,value:n}),!0):!1}function v(e){var t;if(!r._isHidden()){if(e=e.toLowerCase(),t=M.state[e])return t(e);try{return r.getDoc().queryCommandState(e)}catch(n){}return!1}}function y(e){var t;if(!r._isHidden()){if(e=e.toLowerCase(),t=M.value[e])return t(e);try{return r.getDoc().queryCommandValue(e)}catch(n){}}}function b(e,t){t=t||"exec",s(e,function(e,n){s(n.toLowerCase().split(","),function(n){M[t][n]=e})})}function C(e,t,n){e=e.toLowerCase(),M.exec[e]=function(e,i,o,a){return t.call(n||r,i,o,a)}}function x(e){if(e=e.toLowerCase(),M.exec[e])return!0;try{return r.getDoc().queryCommandSupported(e)}catch(t){}return!1}function w(e,t,n){e=e.toLowerCase(),M.state[e]=function(){return t.call(n||r)}}function E(e,t,n){e=e.toLowerCase(),M.value[e]=function(){return t.call(n||r)}}function N(e){return e=e.toLowerCase(),!!M.exec[e]}function _(e,n,i){return n===t&&(n=m),i===t&&(i=null),r.getDoc().execCommand(e,n,i)}function S(e){return D.match(e)}function k(e,n){D.toggle(e,n?{value:n}:t),r.nodeChanged()}function T(e){P=B.getBookmark(e)}function R(){B.moveToBookmark(P)}var A,B,D,M={state:{},exec:{},value:{}},L=r.settings,P;r.on("PreInit",function(){A=r.dom,B=r.selection,L=r.settings,D=r.formatter}),l(this,{execCommand:g,queryCommandState:v,queryCommandValue:y,queryCommandSupported:x,addCommands:b,addCommand:C,addQueryStateHandler:w,addQueryValueHandler:E,hasCustomCommand:N}),b({"mceResetDesignMode,mceBeginUndoLevel":function(){},"mceEndUndoLevel,mceAddUndoLevel":function(){r.undoManager.add()},"Cut,Copy,Paste":function(e){var t=r.getDoc(),i;try{_(e)}catch(o){i=p}if(i||!t.queryCommandSupported(e)){var a=r.translate("Your browser doesn't support direct access to the clipboard. Please use the Ctrl+X/C/V keyboard shortcuts instead.");n.mac&&(a=a.replace(/Ctrl\+/g,"\u2318+")),r.notificationManager.open({text:a,type:"error"})}},unlink:function(){if(B.isCollapsed()){var e=B.getNode();return void("A"==e.tagName&&r.dom.remove(e,!0))}D.remove("link")},"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull,JustifyNone":function(e){var t=e.substring(7);"full"==t&&(t="justify"),s("left,center,right,justify".split(","),function(e){t!=e&&D.remove("align"+e)}),"none"!=t&&k("align"+t)},"InsertUnorderedList,InsertOrderedList":function(e){var t,n;_(e),t=A.getParent(B.getNode(),"ol,ul"),t&&(n=t.parentNode,/^(H[1-6]|P|ADDRESS|PRE)$/.test(n.nodeName)&&(T(),A.split(n,t),R()))},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){k(e)},"ForeColor,HiliteColor,FontName":function(e,t,n){k(e,n)},FontSize:function(e,t,n){var r,i;n>=1&&7>=n&&(i=d(L.font_size_style_values),r=d(L.font_size_classes),n=r?r[n-1]||n:i[n-1]||n),k(e,n)},RemoveFormat:function(e){D.remove(e)},mceBlockQuote:function(){k("blockquote")},FormatBlock:function(e,t,n){return k(n||"p")},mceCleanup:function(){var e=B.getBookmark();r.setContent(r.getContent({cleanup:p}),{cleanup:p}),B.moveToBookmark(e)},mceRemoveNode:function(e,t,n){var i=n||B.getNode();i!=r.getBody()&&(T(),r.dom.remove(i,p),R())},mceSelectNodeDepth:function(e,t,n){var i=0;A.getParent(B.getNode(),function(e){return 1==e.nodeType&&i++==n?(B.select(e),m):void 0},r.getBody())},mceSelectNode:function(e,t,n){B.select(n)},mceInsertContent:function(t,n,o){function a(e){function t(e){return r[e]&&3==r[e].nodeType}var n,r,i;return n=B.getRng(!0),r=n.startContainer,i=n.startOffset,3==r.nodeType&&(i>0?e=e.replace(/^&nbsp;/," "):t("previousSibling")||(e=e.replace(/^ /,"&nbsp;")),i<r.length?e=e.replace(/&nbsp;(<br>|)$/," "):t("nextSibling")||(e=e.replace(/(&nbsp;| )(<br>|)$/,"&nbsp;"))),e}function l(){var e,t,n;e=B.getRng(!0),t=e.startContainer,n=e.startOffset,3==t.nodeType&&e.collapsed&&("\xa0"===t.data[n]?(t.deleteData(n,1),/[\u00a0| ]$/.test(o)||(o+=" ")):"\xa0"===t.data[n-1]&&(t.deleteData(n-1,1),/[\u00a0| ]$/.test(o)||(o=" "+o)))}function c(e){if(N)for(x=e.firstChild;x;x=x.walk(!0))S[x.name]&&x.attr("data-mce-new","true")}function u(){if(N){var e=r.getBody(),t=new i(A);s(A.select("*[data-mce-new]"),function(n){n.removeAttribute("data-mce-new");for(var r=n.parentNode;r&&r!=e;r=r.parentNode)t.compare(r,n)&&A.remove(n,!0)})}}function d(e){function t(e){for(var t=r.getBody();e&&e!==t;e=e.parentNode)if("false"===r.dom.getContentEditable(e))return e;return null}var n;if(e){if(B.scrollIntoView(e),n=t(e))return A.remove(e),void B.select(n);C=A.createRng(),x=e.previousSibling,x&&3==x.nodeType?(C.setStart(x,x.nodeValue.length),f||(w=e.nextSibling,w&&3==w.nodeType&&(x.appendData(w.data),w.parentNode.removeChild(w)))):(C.setStartBefore(e),C.setEndBefore(e)),A.remove(e),B.setRng(C)}}var h,p,m,g,v,y,b,C,x,w,E,N,_,S=r.schema.getTextInlineElements();"string"!=typeof o&&(N=o.merge,_=o.data,o=o.content),/^ | $/.test(o)&&(o=a(o)),h=r.parser,p=new e({validate:L.validate},r.schema),E='<span id="mce_marker" data-mce-type="bookmark">&#xFEFF;&#x200B;</span>',y={content:o,format:"html",selection:!0},r.fire("BeforeSetContent",y),o=y.content,-1==o.indexOf("{$caret}")&&(o+="{$caret}"),o=o.replace(/\{\$caret\}/,E),C=B.getRng();var k=C.startContainer||(C.parentElement?C.parentElement():null),T=r.getBody();k===T&&B.isCollapsed()&&A.isBlock(T.firstChild)&&A.isEmpty(T.firstChild)&&(C=A.createRng(),C.setStart(T.firstChild,0),C.setEnd(T.firstChild,0),B.setRng(C)),B.isCollapsed()||(r.selection.setRng(r.selection.getRng()),r.getDoc().execCommand("Delete",!1,null),l()),m=B.getNode();var R={context:m.nodeName.toLowerCase(),data:_};if(v=h.parse(o,R),c(v),x=v.lastChild,"mce_marker"==x.attr("id"))for(b=x,x=x.prev;x;x=x.walk(!0))if(3==x.type||!A.isBlock(x.name)){r.schema.isValidChild(x.parent.name,"span")&&x.parent.insert(b,x,"br"===x.name);break}if(r._selectionOverrides.showBlockCaretContainer(m),R.invalid){for(B.setContent(E),m=B.getNode(),g=r.getBody(),9==m.nodeType?m=x=g:x=m;x!==g;)m=x,x=x.parentNode;o=m==g?g.innerHTML:A.getOuterHTML(m),o=p.serialize(h.parse(o.replace(/<span (id="mce_marker"|id=mce_marker).+?<\/span>/i,function(){return p.serialize(v)}))),m==g?A.setHTML(g,o):A.setOuterHTML(m,o)}else o=p.serialize(v),x=m.firstChild,w=m.lastChild,!x||x===w&&"BR"===x.nodeName?A.setHTML(m,o):B.setContent(o);u(),d(A.get("mce_marker")),r.fire("SetContent",y),r.addVisual()},mceInsertRawHTML:function(e,t,n){B.setContent("tiny_mce_marker"),r.setContent(r.getContent().replace(/tiny_mce_marker/g,function(){return n}))},mceToggleFormat:function(e,t,n){k(n)},mceSetContent:function(e,t,n){r.setContent(n)},"Indent,Outdent":function(e){var t,n,i;t=L.indentation,n=/[a-z%]+$/i.exec(t),t=parseInt(t,10),v("InsertUnorderedList")||v("InsertOrderedList")?_(e):(L.forced_root_block||A.getParent(B.getNode(),A.isBlock)||D.apply("div"),s(B.getSelectedBlocks(),function(o){if("false"!==A.getContentEditable(o)&&"LI"!=o.nodeName){var a=r.getParam("indent_use_margin",!1)?"margin":"padding";a+="rtl"==A.getStyle(o,"direction",!0)?"Right":"Left","outdent"==e?(i=Math.max(0,parseInt(o.style[a]||0,10)-t),A.setStyle(o,a,i?i+n:"")):(i=parseInt(o.style[a]||0,10)+t+n,A.setStyle(o,a,i))}}))},mceRepaint:function(){},InsertHorizontalRule:function(){r.execCommand("mceInsertContent",!1,"<hr />")},mceToggleVisualAid:function(){r.hasVisual=!r.hasVisual,r.addVisual()},mceReplaceContent:function(e,t,n){r.execCommand("mceInsertContent",!1,n.replace(/\{\$selection\}/g,B.getContent({format:"text"})))},mceInsertLink:function(e,t,n){var r;"string"==typeof n&&(n={href:n}),r=A.getParent(B.getNode(),"a"),n.href=n.href.replace(" ","%20"),r&&n.href||D.remove("link"),n.href&&D.apply("link",n,r)},selectAll:function(){var e=A.getRoot(),t;B.getRng().setStart?(t=A.createRng(),t.setStart(e,0),t.setEnd(e,e.childNodes.length),B.setRng(t)):(t=B.getRng(),t.item||(t.moveToElementText(e),t.select()))},"delete":function(){_("Delete");var e=r.getBody();A.isEmpty(e)&&(r.setContent(""),e.firstChild&&A.isBlock(e.firstChild)?r.selection.setCursorLocation(e.firstChild,0):r.selection.setCursorLocation(e,0))},mceNewDocument:function(){r.setContent("")},InsertLineBreak:function(e,t,n){function i(){for(var e=new a(m,v),t,n=r.schema.getNonEmptyElements();t=e.next();)if(n[t.nodeName.toLowerCase()]||t.length>0)return!0}var s=n,l,c,u,d=B.getRng(!0);new o(A).normalize(d);var f=d.startOffset,m=d.startContainer;if(1==m.nodeType&&m.hasChildNodes()){var g=f>m.childNodes.length-1;m=m.childNodes[Math.min(f,m.childNodes.length-1)]||m,f=g&&3==m.nodeType?m.nodeValue.length:0}var v=A.getParent(m,A.isBlock),y=v?v.nodeName.toUpperCase():"",b=v?A.getParent(v.parentNode,A.isBlock):null,C=b?b.nodeName.toUpperCase():"",x=s&&s.ctrlKey;"LI"!=C||x||(v=b,y=C),m&&3==m.nodeType&&f>=m.nodeValue.length&&(h||i()||(l=A.create("br"),d.insertNode(l),d.setStartAfter(l),d.setEndAfter(l),c=!0)),l=A.create("br"),d.insertNode(l);var w=A.doc.documentMode;return h&&"PRE"==y&&(!w||8>w)&&l.parentNode.insertBefore(A.doc.createTextNode("\r"),l),u=A.create("span",{},"&nbsp;"),l.parentNode.insertBefore(u,l),B.scrollIntoView(u),A.remove(u),c?(d.setStartBefore(l),d.setEndBefore(l)):(d.setStartAfter(l),d.setEndAfter(l)),B.setRng(d),r.undoManager.add(),p}}),b({"JustifyLeft,JustifyCenter,JustifyRight,JustifyFull":function(e){var t="align"+e.substring(7),n=B.isCollapsed()?[A.getParent(B.getNode(),A.isBlock)]:B.getSelectedBlocks(),r=c(n,function(e){return!!D.matchNode(e,t)});return-1!==u(r,p)},"Bold,Italic,Underline,Strikethrough,Superscript,Subscript":function(e){return S(e)},mceBlockQuote:function(){return S("blockquote")},Outdent:function(){var e;if(L.inline_styles){if((e=A.getParent(B.getStart(),A.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p;if((e=A.getParent(B.getEnd(),A.isBlock))&&parseInt(e.style.paddingLeft,10)>0)return p}return v("InsertUnorderedList")||v("InsertOrderedList")||!L.inline_styles&&!!A.getParent(B.getNode(),"BLOCKQUOTE")},"InsertUnorderedList,InsertOrderedList":function(e){var t=A.getParent(B.getNode(),"ul,ol");return t&&("insertunorderedlist"===e&&"UL"===t.tagName||"insertorderedlist"===e&&"OL"===t.tagName)}},"state"),b({"FontSize,FontName":function(e){var t=0,n;return(n=A.getParent(B.getNode(),"span"))&&(t="fontsize"==e?n.style.fontSize:n.style.fontFamily.replace(/, /g,",").replace(/[\'\"]/g,"").toLowerCase()),t}},"value"),b({Undo:function(){r.undoManager.undo()},Redo:function(){r.undoManager.redo()}})}}),r(te,[m],function(e){function t(e,o){var a=this,s,l;if(e=r(e),
o=a.settings=o||{},s=o.base_uri,/^([\w\-]+):([^\/]{2})/i.test(e)||/^\s*#/.test(e))return void(a.source=e);var c=0===e.indexOf("//");0!==e.indexOf("/")||c||(e=(s?s.protocol||"http":"http")+"://mce_host"+e),/^[\w\-]*:?\/\//.test(e)||(l=o.base_uri?o.base_uri.path:new t(location.href).directory,""===o.base_uri.protocol?e="//mce_host"+a.toAbsPath(l,e):(e=/([^#?]*)([#?]?.*)/.exec(e),e=(s&&s.protocol||"http")+"://mce_host"+a.toAbsPath(l,e[1])+e[2])),e=e.replace(/@@/g,"(mce_at)"),e=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*):?([^:@\/]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(e),n(i,function(t,n){var r=e[n];r&&(r=r.replace(/\(mce_at\)/g,"@@")),a[t]=r}),s&&(a.protocol||(a.protocol=s.protocol),a.userInfo||(a.userInfo=s.userInfo),a.port||"mce_host"!==a.host||(a.port=s.port),a.host&&"mce_host"!==a.host||(a.host=s.host),a.source=""),c&&(a.protocol="")}var n=e.each,r=e.trim,i="source protocol authority userInfo user password host port relative path directory file query anchor".split(" "),o={ftp:21,http:80,https:443,mailto:25};return t.prototype={setPath:function(e){var t=this;e=/^(.*?)\/?(\w+)?$/.exec(e),t.path=e[0],t.directory=e[1],t.file=e[2],t.source="",t.getURI()},toRelative:function(e){var n=this,r;if("./"===e)return e;if(e=new t(e,{base_uri:n}),"mce_host"!=e.host&&n.host!=e.host&&e.host||n.port!=e.port||n.protocol!=e.protocol&&""!==e.protocol)return e.getURI();var i=n.getURI(),o=e.getURI();return i==o||"/"==i.charAt(i.length-1)&&i.substr(0,i.length-1)==o?i:(r=n.toRelPath(n.path,e.path),e.query&&(r+="?"+e.query),e.anchor&&(r+="#"+e.anchor),r)},toAbsolute:function(e,n){return e=new t(e,{base_uri:this}),e.getURI(n&&this.isSameOrigin(e))},isSameOrigin:function(e){if(this.host==e.host&&this.protocol==e.protocol){if(this.port==e.port)return!0;var t=o[this.protocol];if(t&&(this.port||t)==(e.port||t))return!0}return!1},toRelPath:function(e,t){var n,r=0,i="",o,a;if(e=e.substring(0,e.lastIndexOf("/")),e=e.split("/"),n=t.split("/"),e.length>=n.length)for(o=0,a=e.length;a>o;o++)if(o>=n.length||e[o]!=n[o]){r=o+1;break}if(e.length<n.length)for(o=0,a=n.length;a>o;o++)if(o>=e.length||e[o]!=n[o]){r=o+1;break}if(1===r)return t;for(o=0,a=e.length-(r-1);a>o;o++)i+="../";for(o=r-1,a=n.length;a>o;o++)i+=o!=r-1?"/"+n[o]:n[o];return i},toAbsPath:function(e,t){var r,i=0,o=[],a,s;for(a=/\/$/.test(t)?"/":"",e=e.split("/"),t=t.split("/"),n(e,function(e){e&&o.push(e)}),e=o,r=t.length-1,o=[];r>=0;r--)0!==t[r].length&&"."!==t[r]&&(".."!==t[r]?i>0?i--:o.push(t[r]):i++);return r=e.length-i,s=0>=r?o.reverse().join("/"):e.slice(0,r).join("/")+"/"+o.reverse().join("/"),0!==s.indexOf("/")&&(s="/"+s),a&&s.lastIndexOf("/")!==s.length-1&&(s+=a),s},getURI:function(e){var t,n=this;return(!n.source||e)&&(t="",e||(t+=n.protocol?n.protocol+"://":"//",n.userInfo&&(t+=n.userInfo+"@"),n.host&&(t+=n.host),n.port&&(t+=":"+n.port)),n.path&&(t+=n.path),n.query&&(t+="?"+n.query),n.anchor&&(t+="#"+n.anchor),n.source=t),n.source}},t.parseDataUri=function(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}},t}),r(ne,[m],function(e){function t(){}var n=e.each,r=e.extend,i,o;return t.extend=i=function(e){function t(){var e,t,n,r=this;if(!o&&(r.init&&r.init.apply(r,arguments),t=r.Mixins))for(e=t.length;e--;)n=t[e],n.init&&n.init.apply(r,arguments)}function a(){return this}function s(e,t){return function(){var n=this,r=n._super,i;return n._super=c[e],i=t.apply(n,arguments),n._super=r,i}}var l=this,c=l.prototype,u,d,f;o=!0,u=new l,o=!1,e.Mixins&&(n(e.Mixins,function(t){t=t;for(var n in t)"init"!==n&&(e[n]=t[n])}),c.Mixins&&(e.Mixins=c.Mixins.concat(e.Mixins))),e.Methods&&n(e.Methods.split(","),function(t){e[t]=a}),e.Properties&&n(e.Properties.split(","),function(t){var n="_"+t;e[t]=function(e){var t=this,r;return e!==r?(t[n]=e,t):t[n]}}),e.Statics&&n(e.Statics,function(e,n){t[n]=e}),e.Defaults&&c.Defaults&&(e.Defaults=r({},c.Defaults,e.Defaults));for(d in e)f=e[d],"function"==typeof f&&c[d]?u[d]=s(d,f):u[d]=f;return t.prototype=u,t.constructor=t,t.extend=i,t},t}),r(re,[m],function(e){function t(t){function n(){return!1}function r(){return!0}function i(e,i){var o,s,l,c;if(e=e.toLowerCase(),i=i||{},i.type=e,i.target||(i.target=u),i.preventDefault||(i.preventDefault=function(){i.isDefaultPrevented=r},i.stopPropagation=function(){i.isPropagationStopped=r},i.stopImmediatePropagation=function(){i.isImmediatePropagationStopped=r},i.isDefaultPrevented=n,i.isPropagationStopped=n,i.isImmediatePropagationStopped=n),t.beforeFire&&t.beforeFire(i),o=d[e])for(s=0,l=o.length;l>s;s++){if(c=o[s],c.once&&a(e,c.func),i.isImmediatePropagationStopped())return i.stopPropagation(),i;if(c.func.call(u,i)===!1)return i.preventDefault(),i}return i}function o(t,r,i,o){var a,s,l;if(r===!1&&(r=n),r)for(r={func:r},o&&e.extend(r,o),s=t.toLowerCase().split(" "),l=s.length;l--;)t=s[l],a=d[t],a||(a=d[t]=[],f(t,!0)),i?a.unshift(r):a.push(r);return c}function a(e,t){var n,r,i,o,a;if(e)for(o=e.toLowerCase().split(" "),n=o.length;n--;){if(e=o[n],r=d[e],!e){for(i in d)f(i,!1),delete d[i];return c}if(r){if(t)for(a=r.length;a--;)r[a].func===t&&(r=r.slice(0,a).concat(r.slice(a+1)),d[e]=r);else r.length=0;r.length||(f(e,!1),delete d[e])}}else{for(e in d)f(e,!1);d={}}return c}function s(e,t,n){return o(e,t,n,{once:!0})}function l(e){return e=e.toLowerCase(),!(!d[e]||0===d[e].length)}var c=this,u,d={},f;t=t||{},u=t.scope||c,f=t.toggleEvent||n,c.fire=i,c.on=o,c.off=a,c.once=s,c.has=l}var n=e.makeMap("focus blur focusin focusout click dblclick mousedown mouseup mousemove mouseover beforepaste paste cut copy selectionchange mouseout mouseenter mouseleave wheel keydown keypress keyup input contextmenu dragstart dragend dragover draggesture dragdrop drop drag submit compositionstart compositionend compositionupdate touchstart touchend"," ");return t.isNative=function(e){return!!n[e.toLowerCase()]},t}),r(ie,[],function(){function e(e){this.create=e.create}return e.create=function(t,n){return new e({create:function(e,r){function i(t){e.set(r,t.value)}function o(e){t.set(n,e.value)}var a;return e.on("change:"+r,o),t.on("change:"+n,i),a=e._bindings,a||(a=e._bindings=[],e.on("destroy",function(){for(var e=a.length;e--;)a[e]()})),a.push(function(){t.off("change:"+n,i)}),t.get(n)}})},e}),r(oe,[re],function(e){function t(t){return t._eventDispatcher||(t._eventDispatcher=new e({scope:t,toggleEvent:function(n,r){e.isNative(n)&&t.toggleNativeEvent&&t.toggleNativeEvent(n,r)}})),t._eventDispatcher}return{fire:function(e,n,r){var i=this;if(i.removed&&"remove"!==e)return n;if(n=t(i).fire(e,n,r),r!==!1&&i.parent)for(var o=i.parent();o&&!n.isPropagationStopped();)o.fire(e,n,!1),o=o.parent();return n},on:function(e,n,r){return t(this).on(e,n,r)},off:function(e,n){return t(this).off(e,n)},once:function(e,n){return t(this).once(e,n)},hasEventListeners:function(e){return t(this).has(e)}}}),r(ae,[ie,oe,ne,m],function(e,t,n,r){function i(e){return e.nodeType>0}function o(e,t){var n,a;if(e===t)return!0;if(null===e||null===t)return e===t;if("object"!=typeof e||"object"!=typeof t)return e===t;if(r.isArray(t)){if(e.length!==t.length)return!1;for(n=e.length;n--;)if(!o(e[n],t[n]))return!1}if(i(e)||i(t))return e===t;a={};for(n in t){if(!o(e[n],t[n]))return!1;a[n]=!0}for(n in e)if(!a[n]&&!o(e[n],t[n]))return!1;return!0}return n.extend({Mixins:[t],init:function(t){var n,r;t=t||{};for(n in t)r=t[n],r instanceof e&&(t[n]=r.create(this,n));this.data=t},set:function(t,n){var r,i,a=this.data[t];if(n instanceof e&&(n=n.create(this,t)),"object"==typeof t){for(r in t)this.set(r,t[r]);return this}return o(a,n)||(this.data[t]=n,i={target:this,name:t,value:n,oldValue:a},this.fire("change:"+t,i),this.fire("change",i)),this},get:function(e){return this.data[e]},has:function(e){return e in this.data},bind:function(t){return e.create(this,t)},destroy:function(){this.fire("destroy")}})}),r(se,[ne],function(e){function t(e){for(var t=[],n=e.length,r;n--;)r=e[n],r.__checked||(t.push(r),r.__checked=1);for(n=t.length;n--;)delete t[n].__checked;return t}var n=/^([\w\\*]+)?(?:#([\w\\]+))?(?:\.([\w\\\.]+))?(?:\[\@?([\w\\]+)([\^\$\*!~]?=)([\w\\]+)\])?(?:\:(.+))?/i,r=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,i=/^\s*|\s*$/g,o,a=e.extend({init:function(e){function t(e){return e?(e=e.toLowerCase(),function(t){return"*"===e||t.type===e}):void 0}function o(e){return e?function(t){return t._name===e}:void 0}function a(e){return e?(e=e.split("."),function(t){for(var n=e.length;n--;)if(!t.classes.contains(e[n]))return!1;return!0}):void 0}function s(e,t,n){return e?function(r){var i=r[e]?r[e]():"";return t?"="===t?i===n:"*="===t?i.indexOf(n)>=0:"~="===t?(" "+i+" ").indexOf(" "+n+" ")>=0:"!="===t?i!=n:"^="===t?0===i.indexOf(n):"$="===t?i.substr(i.length-n.length)===n:!1:!!n}:void 0}function l(e){var t;return e?(e=/(?:not\((.+)\))|(.+)/i.exec(e),e[1]?(t=u(e[1],[]),function(e){return!d(e,t)}):(e=e[2],function(t,n,r){return"first"===e?0===n:"last"===e?n===r-1:"even"===e?n%2===0:"odd"===e?n%2===1:t[e]?t[e]():!1})):void 0}function c(e,r,c){function u(e){e&&r.push(e)}var d;return d=n.exec(e.replace(i,"")),u(t(d[1])),u(o(d[2])),u(a(d[3])),u(s(d[4],d[5],d[6])),u(l(d[7])),r.pseudo=!!d[7],r.direct=c,r}function u(e,t){var n=[],i,o,a;do if(r.exec(""),o=r.exec(e),o&&(e=o[3],n.push(o[1]),o[2])){i=o[3];break}while(o);for(i&&u(i,t),e=[],a=0;a<n.length;a++)">"!=n[a]&&e.push(c(n[a],[],">"===n[a-1]));return t.push(e),t}var d=this.match;this._selectors=u(e,[])},match:function(e,t){var n,r,i,o,a,s,l,c,u,d,f,h,p;for(t=t||this._selectors,n=0,r=t.length;r>n;n++){for(a=t[n],o=a.length,p=e,h=0,i=o-1;i>=0;i--)for(c=a[i];p;){if(c.pseudo)for(f=p.parent().items(),u=d=f.length;u--&&f[u]!==p;);for(s=0,l=c.length;l>s;s++)if(!c[s](p,u,d)){s=l+1;break}if(s===l){h++;break}if(i===o-1)break;p=p.parent()}if(h===o)return!0}return!1},find:function(e){function n(e,t,i){var o,a,s,l,c,u=t[i];for(o=0,a=e.length;a>o;o++){for(c=e[o],s=0,l=u.length;l>s;s++)if(!u[s](c,o,a)){s=l+1;break}if(s===l)i==t.length-1?r.push(c):c.items&&n(c.items(),t,i+1);else if(u.direct)return;c.items&&n(c.items(),t,i)}}var r=[],i,s,l=this._selectors;if(e.items){for(i=0,s=l.length;s>i;i++)n(e.items(),l[i],0);s>1&&(r=t(r))}return o||(o=a.Collection),new o(r)}});return a}),r(le,[m,se,ne],function(e,t,n){var r,i,o=Array.prototype.push,a=Array.prototype.slice;return i={length:0,init:function(e){e&&this.add(e)},add:function(t){var n=this;return e.isArray(t)?o.apply(n,t):t instanceof r?n.add(t.toArray()):o.call(n,t),n},set:function(e){var t=this,n=t.length,r;for(t.length=0,t.add(e),r=t.length;n>r;r++)delete t[r];return t},filter:function(e){var n=this,i,o,a=[],s,l;for("string"==typeof e?(e=new t(e),l=function(t){return e.match(t)}):l=e,i=0,o=n.length;o>i;i++)s=n[i],l(s)&&a.push(s);return new r(a)},slice:function(){return new r(a.apply(this,arguments))},eq:function(e){return-1===e?this.slice(e):this.slice(e,+e+1)},each:function(t){return e.each(this,t),this},toArray:function(){return e.toArray(this)},indexOf:function(e){for(var t=this,n=t.length;n--&&t[n]!==e;);return n},reverse:function(){return new r(e.toArray(this).reverse())},hasClass:function(e){return this[0]?this[0].classes.contains(e):!1},prop:function(e,t){var n=this,r,i;return t!==r?(n.each(function(n){n[e]&&n[e](t)}),n):(i=n[0],i&&i[e]?i[e]():void 0)},exec:function(t){var n=this,r=e.toArray(arguments).slice(1);return n.each(function(e){e[t]&&e[t].apply(e,r)}),n},remove:function(){for(var e=this.length;e--;)this[e].remove();return this},addClass:function(e){return this.each(function(t){t.classes.add(e)})},removeClass:function(e){return this.each(function(t){t.classes.remove(e)})}},e.each("fire on off show hide append prepend before after reflow".split(" "),function(t){i[t]=function(){var n=e.toArray(arguments);return this.each(function(e){t in e&&e[t].apply(e,n)}),this}}),e.each("text name disabled active selected checked visible parent value data".split(" "),function(e){i[e]=function(t){return this.prop(e,t)}}),r=n.extend(i),t.Collection=r,r}),r(ce,[m,w],function(e,t){var n=0;return{id:function(){return"mceu_"+n++},createFragment:function(e){return t.DOM.createFragment(e)},getWindowSize:function(){return t.DOM.getViewPort()},getSize:function(e){var t,n;if(e.getBoundingClientRect){var r=e.getBoundingClientRect();t=Math.max(r.width||r.right-r.left,e.offsetWidth),n=Math.max(r.height||r.bottom-r.bottom,e.offsetHeight)}else t=e.offsetWidth,n=e.offsetHeight;return{width:t,height:n}},getPos:function(e,n){return t.DOM.getPos(e,n)},getViewPort:function(e){return t.DOM.getViewPort(e)},get:function(e){return document.getElementById(e)},addClass:function(e,n){return t.DOM.addClass(e,n)},removeClass:function(e,n){return t.DOM.removeClass(e,n)},hasClass:function(e,n){return t.DOM.hasClass(e,n)},toggleClass:function(e,n,r){return t.DOM.toggleClass(e,n,r)},css:function(e,n,r){return t.DOM.setStyle(e,n,r)},getRuntimeStyle:function(e,n){return t.DOM.getStyle(e,n,!0)},on:function(e,n,r,i){return t.DOM.bind(e,n,r,i)},off:function(e,n,r){return t.DOM.unbind(e,n,r)},fire:function(e,n,r){return t.DOM.fire(e,n,r)},innerHtml:function(e,n){t.DOM.setHTML(e,n)}}}),r(ue,[],function(){return{parseBox:function(e){var t,n=10;if(e)return"number"==typeof e?(e=e||0,{top:e,left:e,bottom:e,right:e}):(e=e.split(" "),t=e.length,1===t?e[1]=e[2]=e[3]=e[0]:2===t?(e[2]=e[0],e[3]=e[1]):3===t&&(e[3]=e[1]),{top:parseInt(e[0],n)||0,right:parseInt(e[1],n)||0,bottom:parseInt(e[2],n)||0,left:parseInt(e[3],n)||0})},measureBox:function(e,t){function n(t){var n=document.defaultView;return n?(t=t.replace(/[A-Z]/g,function(e){return"-"+e}),n.getComputedStyle(e,null).getPropertyValue(t)):e.currentStyle[t]}function r(e){var t=parseFloat(n(e),10);return isNaN(t)?0:t}return{top:r(t+"TopWidth"),right:r(t+"RightWidth"),bottom:r(t+"BottomWidth"),left:r(t+"LeftWidth")}}}}),r(de,[m],function(e){function t(){}function n(e){this.cls=[],this.cls._map={},this.onchange=e||t,this.prefix=""}return e.extend(n.prototype,{add:function(e){return e&&!this.contains(e)&&(this.cls._map[e]=!0,this.cls.push(e),this._change()),this},remove:function(e){if(this.contains(e)){for(var t=0;t<this.cls.length&&this.cls[t]!==e;t++);this.cls.splice(t,1),delete this.cls._map[e],this._change()}return this},toggle:function(e,t){var n=this.contains(e);return n!==t&&(n?this.remove(e):this.add(e),this._change()),this},contains:function(e){return!!this.cls._map[e]},_change:function(){delete this.clsValue,this.onchange.call(this)}}),n.prototype.toString=function(){var e;if(this.clsValue)return this.clsValue;e="";for(var t=0;t<this.cls.length;t++)t>0&&(e+=" "),e+=this.prefix+this.cls[t];return e},n}),r(fe,[u],function(e){var t={},n;return{add:function(r){var i=r.parent();if(i){if(!i._layout||i._layout.isNative())return;t[i._id]||(t[i._id]=i),n||(n=!0,e.requestAnimationFrame(function(){var e,r;n=!1;for(e in t)r=t[e],r.state.get("rendered")&&r.reflow();t={}},document.body))}},remove:function(e){t[e._id]&&delete t[e._id]}}}),r(he,[ne,m,re,ae,le,ce,g,ue,de,fe],function(e,t,n,r,i,o,a,s,l,c){function u(e){return e._eventDispatcher||(e._eventDispatcher=new n({scope:e,toggleEvent:function(t,r){r&&n.isNative(t)&&(e._nativeEvents||(e._nativeEvents={}),e._nativeEvents[t]=!0,e.state.get("rendered")&&d(e))}})),e._eventDispatcher}function d(e){function t(t){var n=e.getParentCtrl(t.target);n&&n.fire(t.type,t)}function n(){var e=c._lastHoverCtrl;e&&(e.fire("mouseleave",{target:e.getEl()}),e.parents().each(function(e){e.fire("mouseleave",{target:e.getEl()})}),c._lastHoverCtrl=null)}function r(t){var n=e.getParentCtrl(t.target),r=c._lastHoverCtrl,i=0,o,a,s;if(n!==r){if(c._lastHoverCtrl=n,a=n.parents().toArray().reverse(),a.push(n),r){for(s=r.parents().toArray().reverse(),s.push(r),i=0;i<s.length&&a[i]===s[i];i++);for(o=s.length-1;o>=i;o--)r=s[o],r.fire("mouseleave",{target:r.getEl()})}for(o=i;o<a.length;o++)n=a[o],n.fire("mouseenter",{target:n.getEl()})}}function i(t){t.preventDefault(),"mousewheel"==t.type?(t.deltaY=-1/40*t.wheelDelta,t.wheelDeltaX&&(t.deltaX=-1/40*t.wheelDeltaX)):(t.deltaX=0,t.deltaY=t.detail),t=e.fire("wheel",t)}var o,s,l,c,u,d;if(u=e._nativeEvents){for(l=e.parents().toArray(),l.unshift(e),o=0,s=l.length;!c&&s>o;o++)c=l[o]._eventsRoot;for(c||(c=l[l.length-1]||e),e._eventsRoot=c,s=o,o=0;s>o;o++)l[o]._eventsRoot=c;var p=c._delegates;p||(p=c._delegates={});for(d in u){if(!u)return!1;"wheel"!==d||h?("mouseenter"===d||"mouseleave"===d?c._hasMouseEnter||(a(c.getEl()).on("mouseleave",n).on("mouseover",r),c._hasMouseEnter=1):p[d]||(a(c.getEl()).on(d,t),p[d]=!0),u[d]=!1):f?a(e.getEl()).on("mousewheel",i):a(e.getEl()).on("DOMMouseScroll",i)}}}var f="onmousewheel"in document,h=!1,p="mce-",m,g=0,v={Statics:{classPrefix:p},isRtl:function(){return m.rtl},classPrefix:p,init:function(e){function n(e){var t;for(e=e.split(" "),t=0;t<e.length;t++)i.classes.add(e[t])}var i=this,o,c;i.settings=e=t.extend({},i.Defaults,e),i._id=e.id||"mceu_"+g++,i._aria={role:e.role},i._elmCache={},i.$=a,i.state=new r({visible:!0,active:!1,disabled:!1,value:""}),i.data=new r(e.data),i.classes=new l(function(){i.state.get("rendered")&&(i.getEl().className=this.toString())}),i.classes.prefix=i.classPrefix,o=e.classes,o&&(i.Defaults&&(c=i.Defaults.classes,c&&o!=c&&n(c)),n(o)),t.each("title text name visible disabled active value".split(" "),function(t){t in e&&i[t](e[t])}),i.on("click",function(){return i.disabled()?!1:void 0}),i.settings=e,i.borderBox=s.parseBox(e.border),i.paddingBox=s.parseBox(e.padding),i.marginBox=s.parseBox(e.margin),e.hidden&&i.hide()},Properties:"parent,name",getContainerElm:function(){return document.body},getParentCtrl:function(e){for(var t,n=this.getRoot().controlIdLookup;e&&n&&!(t=n[e.id]);)e=e.parentNode;return t},initLayoutRect:function(){var e=this,t=e.settings,n,r,i=e.getEl(),a,l,c,u,d,f,h,p;n=e.borderBox=e.borderBox||s.measureBox(i,"border"),e.paddingBox=e.paddingBox||s.measureBox(i,"padding"),e.marginBox=e.marginBox||s.measureBox(i,"margin"),p=o.getSize(i),f=t.minWidth,h=t.minHeight,c=f||p.width,u=h||p.height,a=t.width,l=t.height,d=t.autoResize,d="undefined"!=typeof d?d:!a&&!l,a=a||c,l=l||u;var m=n.left+n.right,g=n.top+n.bottom,v=t.maxWidth||65535,y=t.maxHeight||65535;return e._layoutRect=r={x:t.x||0,y:t.y||0,w:a,h:l,deltaW:m,deltaH:g,contentW:a-m,contentH:l-g,innerW:a-m,innerH:l-g,startMinWidth:f||0,startMinHeight:h||0,minW:Math.min(c,v),minH:Math.min(u,y),maxW:v,maxH:y,autoResize:d,scrollW:0},e._lastLayoutRect={},r},layoutRect:function(e){var t=this,n=t._layoutRect,r,i,o,a,s,l;return n||(n=t.initLayoutRect()),e?(o=n.deltaW,a=n.deltaH,e.x!==s&&(n.x=e.x),e.y!==s&&(n.y=e.y),e.minW!==s&&(n.minW=e.minW),e.minH!==s&&(n.minH=e.minH),i=e.w,i!==s&&(i=i<n.minW?n.minW:i,i=i>n.maxW?n.maxW:i,n.w=i,n.innerW=i-o),i=e.h,i!==s&&(i=i<n.minH?n.minH:i,i=i>n.maxH?n.maxH:i,n.h=i,n.innerH=i-a),i=e.innerW,i!==s&&(i=i<n.minW-o?n.minW-o:i,i=i>n.maxW-o?n.maxW-o:i,n.innerW=i,n.w=i+o),i=e.innerH,i!==s&&(i=i<n.minH-a?n.minH-a:i,i=i>n.maxH-a?n.maxH-a:i,n.innerH=i,n.h=i+a),e.contentW!==s&&(n.contentW=e.contentW),e.contentH!==s&&(n.contentH=e.contentH),r=t._lastLayoutRect,(r.x!==n.x||r.y!==n.y||r.w!==n.w||r.h!==n.h)&&(l=m.repaintControls,l&&l.map&&!l.map[t._id]&&(l.push(t),l.map[t._id]=!0),r.x=n.x,r.y=n.y,r.w=n.w,r.h=n.h),t):n},repaint:function(){var e=this,t,n,r,i,o,a,s,l,c,u;c=document.createRange?function(e){return e}:Math.round,t=e.getEl().style,i=e._layoutRect,l=e._lastRepaintRect||{},o=e.borderBox,a=o.left+o.right,s=o.top+o.bottom,i.x!==l.x&&(t.left=c(i.x)+"px",l.x=i.x),i.y!==l.y&&(t.top=c(i.y)+"px",l.y=i.y),i.w!==l.w&&(u=c(i.w-a),t.width=(u>=0?u:0)+"px",l.w=i.w),i.h!==l.h&&(u=c(i.h-s),t.height=(u>=0?u:0)+"px",l.h=i.h),e._hasBody&&i.innerW!==l.innerW&&(u=c(i.innerW),r=e.getEl("body"),r&&(n=r.style,n.width=(u>=0?u:0)+"px"),l.innerW=i.innerW),e._hasBody&&i.innerH!==l.innerH&&(u=c(i.innerH),r=r||e.getEl("body"),r&&(n=n||r.style,n.height=(u>=0?u:0)+"px"),l.innerH=i.innerH),e._lastRepaintRect=l,e.fire("repaint",{},!1)},on:function(e,t){function n(e){var t,n;return"string"!=typeof e?e:function(i){return t||r.parentsAndSelf().each(function(r){var i=r.settings.callbacks;return i&&(t=i[e])?(n=r,!1):void 0}),t?t.call(n,i):(i.action=e,void this.fire("execute",i))}}var r=this;return u(r).on(e,n(t)),r},off:function(e,t){return u(this).off(e,t),this},fire:function(e,t,n){var r=this;if(t=t||{},t.control||(t.control=r),t=u(r).fire(e,t),n!==!1&&r.parent)for(var i=r.parent();i&&!t.isPropagationStopped();)i.fire(e,t,!1),i=i.parent();return t},hasEventListeners:function(e){return u(this).has(e)},parents:function(e){var t=this,n,r=new i;for(n=t.parent();n;n=n.parent())r.add(n);return e&&(r=r.filter(e)),r},parentsAndSelf:function(e){return new i(this).add(this.parents(e))},next:function(){var e=this.parent().items();return e[e.indexOf(this)+1]},prev:function(){var e=this.parent().items();return e[e.indexOf(this)-1]},innerHtml:function(e){return this.$el.html(e),this},getEl:function(e){var t=e?this._id+"-"+e:this._id;return this._elmCache[t]||(this._elmCache[t]=a("#"+t)[0]),this._elmCache[t]},show:function(){return this.visible(!0)},hide:function(){return this.visible(!1)},focus:function(){try{this.getEl().focus()}catch(e){}return this},blur:function(){return this.getEl().blur(),this},aria:function(e,t){var n=this,r=n.getEl(n.ariaTarget);return"undefined"==typeof t?n._aria[e]:(n._aria[e]=t,n.state.get("rendered")&&r.setAttribute("role"==e?e:"aria-"+e,t),n)},encode:function(e,t){return t!==!1&&(e=this.translate(e)),(e||"").replace(/[&<>"]/g,function(e){return"&#"+e.charCodeAt(0)+";"})},translate:function(e){return m.translate?m.translate(e):e},before:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t),!0),t},after:function(e){var t=this,n=t.parent();return n&&n.insert(e,n.items().indexOf(t)),t},remove:function(){var e=this,t=e.getEl(),n=e.parent(),r,i;if(e.items){var o=e.items().toArray();for(i=o.length;i--;)o[i].remove()}n&&n.items&&(r=[],n.items().each(function(t){t!==e&&r.push(t)}),n.items().set(r),n._lastRect=null),e._eventsRoot&&e._eventsRoot==e&&a(t).off();var s=e.getRoot().controlIdLookup;return s&&delete s[e._id],t&&t.parentNode&&t.parentNode.removeChild(t),e.state.set("rendered",!1),e.state.destroy(),e.fire("remove"),e},renderBefore:function(e){return a(e).before(this.renderHtml()),this.postRender(),this},renderTo:function(e){return a(e||this.getContainerElm()).append(this.renderHtml()),this.postRender(),this},preRender:function(){},render:function(){},renderHtml:function(){return'<div id="'+this._id+'" class="'+this.classes+'"></div>'},postRender:function(){var e=this,t=e.settings,n,r,i,o,s;e.$el=a(e.getEl()),e.state.set("rendered",!0);for(o in t)0===o.indexOf("on")&&e.on(o.substr(2),t[o]);if(e._eventsRoot){for(i=e.parent();!s&&i;i=i.parent())s=i._eventsRoot;if(s)for(o in s._nativeEvents)e._nativeEvents[o]=!0}d(e),t.style&&(n=e.getEl(),n&&(n.setAttribute("style",t.style),n.style.cssText=t.style)),e.settings.border&&(r=e.borderBox,e.$el.css({"border-top-width":r.top,"border-right-width":r.right,"border-bottom-width":r.bottom,"border-left-width":r.left}));var l=e.getRoot();l.controlIdLookup||(l.controlIdLookup={}),l.controlIdLookup[e._id]=e;for(var u in e._aria)e.aria(u,e._aria[u]);e.state.get("visible")===!1&&(e.getEl().style.display="none"),e.bindStates(),e.state.on("change:visible",function(t){var n=t.value,r;e.state.get("rendered")&&(e.getEl().style.display=n===!1?"none":"",e.getEl().getBoundingClientRect()),r=e.parent(),r&&(r._lastRect=null),e.fire(n?"show":"hide"),c.add(e)}),e.fire("postrender",{},!1)},bindStates:function(){},scrollIntoView:function(e){function t(e,t){var n,r,i=e;for(n=r=0;i&&i!=t&&i.nodeType;)n+=i.offsetLeft||0,r+=i.offsetTop||0,i=i.offsetParent;return{x:n,y:r}}var n=this.getEl(),r=n.parentNode,i,o,a,s,l,c,u=t(n,r);return i=u.x,o=u.y,a=n.offsetWidth,s=n.offsetHeight,l=r.clientWidth,c=r.clientHeight,"end"==e?(i-=l-a,o-=c-s):"center"==e&&(i-=l/2-a/2,o-=c/2-s/2),r.scrollLeft=i,r.scrollTop=o,this},getRoot:function(){for(var e=this,t,n=[];e;){if(e.rootControl){t=e.rootControl;break}n.push(e),t=e,e=e.parent()}t||(t=this);for(var r=n.length;r--;)n[r].rootControl=t;return t},reflow:function(){c.remove(this);var e=this.parent();return e._layout&&!e._layout.isNative()&&e.reflow(),this}};return t.each("text title visible disabled active value".split(" "),function(e){v[e]=function(t){return 0===arguments.length?this.state.get(e):("undefined"!=typeof t&&this.state.set(e,t),this)}}),m=e.extend(v)}),r(pe,[],function(){var e={},t;return{add:function(t,n){e[t.toLowerCase()]=n},has:function(t){return!!e[t.toLowerCase()]},create:function(n,r){var i,o,a;if(!t){a=tinymce.ui;for(o in a)e[o.toLowerCase()]=a[o];t=!0}if("string"==typeof n?(r=r||{},r.type=n):(r=n,n=r.type),n=n.toLowerCase(),i=e[n],!i)throw new Error("Could not find control by type: "+n);return i=new i(r),i.type=n,i}}}),r(me,[],function(){return function(e){function t(e){return e&&1===e.nodeType}function n(e){return e=e||C,t(e)?e.getAttribute("role"):null}function r(e){for(var t,r=e||C;r=r.parentNode;)if(t=n(r))return t}function i(e){var n=C;return t(n)?n.getAttribute("aria-"+e):void 0}function o(e){var t=e.tagName.toUpperCase();return"INPUT"==t||"TEXTAREA"==t}function a(e){return o(e)&&!e.hidden?!0:/^(button|menuitem|checkbox|tab|menuitemcheckbox|option|gridcell)$/.test(n(e))?!0:!1}function s(e){function t(e){if(1==e.nodeType&&"none"!=e.style.display){a(e)&&n.push(e);for(var r=0;r<e.childNodes.length;r++)t(e.childNodes[r])}}var n=[];return t(e||b.getEl()),n}function l(e){var t,n;e=e||x,n=e.parents().toArray(),n.unshift(e);for(var r=0;r<n.length&&(t=n[r],!t.settings.ariaRoot);r++);return t}function c(e){var t=l(e),n=s(t.getEl());t.settings.ariaRemember&&"lastAriaIndex"in t?u(t.lastAriaIndex,n):u(0,n)}function u(e,t){return 0>e?e=t.length-1:e>=t.length&&(e=0),t[e]&&t[e].focus(),e}function d(e,t){var n=-1,r=l();t=t||s(r.getEl());for(var i=0;i<t.length;i++)t[i]===C&&(n=i);n+=e,r.lastAriaIndex=u(n,t)}function f(){var e=r();"tablist"==e?d(-1,s(C.parentNode)):x.parent().submenu?v():d(-1)}function h(){var e=n(),t=r();"tablist"==t?d(1,s(C.parentNode)):"menuitem"==e&&"menu"==t&&i("haspopup")?y():d(1)}function p(){d(-1)}function m(){var e=n(),t=r();"menuitem"==e&&"menubar"==t?y():"button"==e&&i("haspopup")?y({key:"down"}):d(1)}function g(e){var t=r();if("tablist"==t){var n=s(x.getEl("body"))[0];n&&n.focus()}else d(e.shiftKey?-1:1)}function v(){x.fire("cancel")}function y(e){e=e||{},x.fire("click",{target:C,aria:e})}var b=e.root,C,x;try{C=document.activeElement}catch(w){C=document.body}return x=b.getParentCtrl(C),b.on("keydown",function(e){function t(e,t){o(C)||t(e)!==!1&&e.preventDefault()}if(!e.isDefaultPrevented())switch(e.keyCode){case 37:t(e,f);break;case 39:t(e,h);break;case 38:t(e,p);break;case 40:t(e,m);break;case 27:v();break;case 14:case 13:case 32:t(e,y);break;case 9:g(e)!==!1&&e.preventDefault()}}),b.on("focusin",function(e){C=e.target,x=e.control}),{focusFirst:c}}}),r(ge,[he,le,se,pe,me,m,g,de,fe],function(e,t,n,r,i,o,a,s,l){var c={};return e.extend({init:function(e){var n=this;n._super(e),e=n.settings,e.fixed&&n.state.set("fixed",!0),n._items=new t,n.isRtl()&&n.classes.add("rtl"),n.bodyClasses=new s(function(){n.state.get("rendered")&&(n.getEl("body").className=this.toString())}),n.bodyClasses.prefix=n.classPrefix,n.classes.add("container"),n.bodyClasses.add("container-body"),e.containerCls&&n.classes.add(e.containerCls),n._layout=r.create((e.layout||"")+"layout"),n.settings.items?n.add(n.settings.items):n.add(n.render()),n._hasBody=!0},items:function(){return this._items},find:function(e){return e=c[e]=c[e]||new n(e),e.find(this)},add:function(e){var t=this;return t.items().add(t.create(e)).parent(t),t},focus:function(e){var t=this,n,r,i;return e&&(r=t.keyboardNav||t.parents().eq(-1)[0].keyboardNav)?void r.focusFirst(t):(i=t.find("*"),t.statusbar&&i.add(t.statusbar.items()),i.each(function(e){return e.settings.autofocus?(n=null,!1):void(e.canFocus&&(n=n||e))}),n&&n.focus(),t)},replace:function(e,t){for(var n,r=this.items(),i=r.length;i--;)if(r[i]===e){r[i]=t;break}i>=0&&(n=t.getEl(),n&&n.parentNode.removeChild(n),n=e.getEl(),n&&n.parentNode.removeChild(n)),t.parent(this)},create:function(t){var n=this,i,a=[];return o.isArray(t)||(t=[t]),o.each(t,function(t){t&&(t instanceof e||("string"==typeof t&&(t={type:t}),i=o.extend({},n.settings.defaults,t),t.type=i.type=i.type||t.type||n.settings.defaultType||(i.defaults?i.defaults.type:null),t=r.create(i)),a.push(t))}),a},renderNew:function(){var e=this;return e.items().each(function(t,n){var r;t.parent(e),t.state.get("rendered")||(r=e.getEl("body"),r.hasChildNodes()&&n<=r.childNodes.length-1?a(r.childNodes[n]).before(t.renderHtml()):a(r).append(t.renderHtml()),t.postRender(),l.add(t))}),e._layout.applyClasses(e.items().filter(":visible")),e._lastRect=null,e},append:function(e){return this.add(e).renderNew()},prepend:function(e){var t=this;return t.items().set(t.create(e).concat(t.items().toArray())),t.renderNew()},insert:function(e,t,n){var r=this,i,o,a;return e=r.create(e),i=r.items(),!n&&t<i.length-1&&(t+=1),t>=0&&t<i.length&&(o=i.slice(0,t).toArray(),a=i.slice(t).toArray(),i.set(o.concat(e,a))),r.renderNew()},fromJSON:function(e){var t=this;for(var n in e)t.find("#"+n).value(e[n]);return t},toJSON:function(){var e=this,t={};return e.find("*").each(function(e){var n=e.name(),r=e.value();n&&"undefined"!=typeof r&&(t[n]=r)}),t},renderHtml:function(){var e=this,t=e._layout,n=this.settings.role;return e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"'+(n?' role="'+this.settings.role+'"':"")+'><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this,t;return e.items().exec("postRender"),e._super(),e._layout.postRender(e),e.state.set("rendered",!0),e.settings.style&&e.$el.css(e.settings.style),e.settings.border&&(t=e.borderBox,e.$el.css({"border-top-width":t.top,"border-right-width":t.right,"border-bottom-width":t.bottom,"border-left-width":t.left})),e.parent()||(e.keyboardNav=new i({root:e})),e},initLayoutRect:function(){var e=this,t=e._super();return e._layout.recalc(e),t},recalc:function(){var e=this,t=e._layoutRect,n=e._lastRect;return n&&n.w==t.w&&n.h==t.h?void 0:(e._layout.recalc(e),t=e.layoutRect(),e._lastRect={x:t.x,y:t.y,w:t.w,h:t.h},!0)},reflow:function(){var t;if(l.remove(this),this.visible()){for(e.repaintControls=[],e.repaintControls.map={},this.recalc(),t=e.repaintControls.length;t--;)e.repaintControls[t].repaint();"flow"!==this.settings.layout&&"stack"!==this.settings.layout&&this.repaint(),e.repaintControls=[]}return this}})}),r(ve,[g],function(e){function t(e){var t,n,r,i,o,a,s,l,c=Math.max;return t=e.documentElement,n=e.body,r=c(t.scrollWidth,n.scrollWidth),i=c(t.clientWidth,n.clientWidth),o=c(t.offsetWidth,n.offsetWidth),a=c(t.scrollHeight,n.scrollHeight),s=c(t.clientHeight,n.clientHeight),l=c(t.offsetHeight,n.offsetHeight),{width:o>r?i:r,height:l>a?s:a}}function n(e){var t,n;if(e.changedTouches)for(t="screenX screenY pageX pageY clientX clientY".split(" "),n=0;n<t.length;n++)e[t[n]]=e.changedTouches[0][t[n]]}return function(r,i){function o(){return s.getElementById(i.handle||r)}var a,s=i.document||document,l,c,u,d,f,h;i=i||{},c=function(r){var c=t(s),p,m;n(r),r.preventDefault(),l=r.button,p=o(),f=r.screenX,h=r.screenY,m=window.getComputedStyle?window.getComputedStyle(p,null).getPropertyValue("cursor"):p.runtimeStyle.cursor,a=e("<div>").css({position:"absolute",top:0,left:0,width:c.width,height:c.height,zIndex:2147483647,opacity:1e-4,cursor:m}).appendTo(s.body),e(s).on("mousemove touchmove",d).on("mouseup touchend",u),i.start(r)},d=function(e){return n(e),e.button!==l?u(e):(e.deltaX=e.screenX-f,e.deltaY=e.screenY-h,e.preventDefault(),void i.drag(e))},u=function(t){n(t),e(s).off("mousemove touchmove",d).off("mouseup touchend",u),a.remove(),i.stop&&i.stop(t)},this.destroy=function(){e(o()).off()},e(o()).on("mousedown touchstart",c);
}}),r(ye,[g,ve],function(e,t){return{init:function(){var e=this;e.on("repaint",e.renderScroll)},renderScroll:function(){function n(){function t(t,a,s,l,c,u){var d,f,h,p,m,g,v,y,b;if(f=i.getEl("scroll"+t)){if(y=a.toLowerCase(),b=s.toLowerCase(),e(i.getEl("absend")).css(y,i.layoutRect()[l]-1),!c)return void e(f).css("display","none");e(f).css("display","block"),d=i.getEl("body"),h=i.getEl("scroll"+t+"t"),p=d["client"+s]-2*o,p-=n&&r?f["client"+u]:0,m=d["scroll"+s],g=p/m,v={},v[y]=d["offset"+a]+o,v[b]=p,e(f).css(v),v={},v[y]=d["scroll"+a]*g,v[b]=p*g,e(h).css(v)}}var n,r,a;a=i.getEl("body"),n=a.scrollWidth>a.clientWidth,r=a.scrollHeight>a.clientHeight,t("h","Left","Width","contentW",n,"Height"),t("v","Top","Height","contentH",r,"Width")}function r(){function n(n,r,a,s,l){var c,u=i._id+"-scroll"+n,d=i.classPrefix;e(i.getEl()).append('<div id="'+u+'" class="'+d+"scrollbar "+d+"scrollbar-"+n+'"><div id="'+u+'t" class="'+d+'scrollbar-thumb"></div></div>'),i.draghelper=new t(u+"t",{start:function(){c=i.getEl("body")["scroll"+r],e("#"+u).addClass(d+"active")},drag:function(e){var t,u,d,f,h=i.layoutRect();u=h.contentW>h.innerW,d=h.contentH>h.innerH,f=i.getEl("body")["client"+a]-2*o,f-=u&&d?i.getEl("scroll"+n)["client"+l]:0,t=f/i.getEl("body")["scroll"+a],i.getEl("body")["scroll"+r]=c+e["delta"+s]/t},stop:function(){e("#"+u).removeClass(d+"active")}})}i.classes.add("scroll"),n("v","Top","Height","Y","Width"),n("h","Left","Width","X","Height")}var i=this,o=2;i.settings.autoScroll&&(i._hasScroll||(i._hasScroll=!0,r(),i.on("wheel",function(e){var t=i.getEl("body");t.scrollLeft+=10*(e.deltaX||0),t.scrollTop+=10*e.deltaY,n()}),e(i.getEl("body")).on("scroll",n)),n())}}}),r(be,[ge,ye],function(e,t){return e.extend({Defaults:{layout:"fit",containerCls:"panel"},Mixins:[t],renderHtml:function(){var e=this,t=e._layout,n=e.settings.html;return e.preRender(),t.preRender(e),"undefined"==typeof n?n='<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div>":("function"==typeof n&&(n=n.call(e)),e._hasBody=!1),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1" role="group">'+(e._preBodyHtml||"")+n+"</div>"}})}),r(Ce,[ce],function(e){function t(t,n,r){var i,o,a,s,l,c,u,d,f,h;return f=e.getViewPort(),o=e.getPos(n),a=o.x,s=o.y,t.state.get("fixed")&&"static"==e.getRuntimeStyle(document.body,"position")&&(a-=f.x,s-=f.y),i=t.getEl(),h=e.getSize(i),l=h.width,c=h.height,h=e.getSize(n),u=h.width,d=h.height,r=(r||"").split(""),"b"===r[0]&&(s+=d),"r"===r[1]&&(a+=u),"c"===r[0]&&(s+=Math.round(d/2)),"c"===r[1]&&(a+=Math.round(u/2)),"b"===r[3]&&(s-=c),"r"===r[4]&&(a-=l),"c"===r[3]&&(s-=Math.round(c/2)),"c"===r[4]&&(a-=Math.round(l/2)),{x:a,y:s,w:l,h:c}}return{testMoveRel:function(n,r){for(var i=e.getViewPort(),o=0;o<r.length;o++){var a=t(this,n,r[o]);if(this.state.get("fixed")){if(a.x>0&&a.x+a.w<i.w&&a.y>0&&a.y+a.h<i.h)return r[o]}else if(a.x>i.x&&a.x+a.w<i.w+i.x&&a.y>i.y&&a.y+a.h<i.h+i.y)return r[o]}return r[0]},moveRel:function(e,n){"string"!=typeof n&&(n=this.testMoveRel(e,n));var r=t(this,e,n);return this.moveTo(r.x,r.y)},moveBy:function(e,t){var n=this,r=n.layoutRect();return n.moveTo(r.x+e,r.y+t),n},moveTo:function(t,n){function r(e,t,n){return 0>e?0:e+n>t?(e=t-n,0>e?0:e):e}var i=this;if(i.settings.constrainToViewport){var o=e.getViewPort(window),a=i.layoutRect();t=r(t,o.w+o.x,a.w),n=r(n,o.h+o.y,a.h)}return i.state.get("rendered")?i.layoutRect({x:t,y:n}).repaint():(i.settings.x=t,i.settings.y=n),i.fire("move",{x:t,y:n}),i}}}),r(xe,[ce],function(e){return{resizeToContent:function(){this._layoutRect.autoResize=!0,this._lastRect=null,this.reflow()},resizeTo:function(t,n){if(1>=t||1>=n){var r=e.getWindowSize();t=1>=t?t*r.w:t,n=1>=n?n*r.h:n}return this._layoutRect.autoResize=!1,this.layoutRect({minW:t,minH:n,w:t,h:n}).reflow()},resizeBy:function(e,t){var n=this,r=n.layoutRect();return n.resizeTo(r.w+e,r.h+t)}}}),r(we,[be,Ce,xe,ce,g,u],function(e,t,n,r,i,o){function a(e,t){for(;e;){if(e==t)return!0;e=e.parent()}}function s(e){for(var t=v.length;t--;){var n=v[t],r=n.getParentCtrl(e.target);if(n.settings.autohide){if(r&&(a(r,n)||n.parent()===r))continue;e=n.fire("autohide",{target:e.target}),e.isDefaultPrevented()||n.hide()}}}function l(){p||(p=function(e){2!=e.button&&s(e)},i(document).on("click touchstart",p))}function c(){m||(m=function(){var e;for(e=v.length;e--;)d(v[e])},i(window).on("scroll",m))}function u(){if(!g){var e=document.documentElement,t=e.clientWidth,n=e.clientHeight;g=function(){document.all&&t==e.clientWidth&&n==e.clientHeight||(t=e.clientWidth,n=e.clientHeight,C.hideAll())},i(window).on("resize",g)}}function d(e){function t(t,n){for(var r,i=0;i<v.length;i++)if(v[i]!=e)for(r=v[i].parent();r&&(r=r.parent());)r==e&&v[i].fixed(t).moveBy(0,n).repaint()}var n=r.getViewPort().y;e.settings.autofix&&(e.state.get("fixed")?e._autoFixY>n&&(e.fixed(!1).layoutRect({y:e._autoFixY}).repaint(),t(!1,e._autoFixY-n)):(e._autoFixY=e.layoutRect().y,e._autoFixY<n&&(e.fixed(!0).layoutRect({y:0}).repaint(),t(!0,n-e._autoFixY))))}function f(e,t){var n,r=C.zIndex||65535,o;if(e)y.push(t);else for(n=y.length;n--;)y[n]===t&&y.splice(n,1);if(y.length)for(n=0;n<y.length;n++)y[n].modal&&(r++,o=y[n]),y[n].getEl().style.zIndex=r,y[n].zIndex=r,r++;var a=document.getElementById(t.classPrefix+"modal-block");o?i(a).css("z-index",o.zIndex-1):a&&(a.parentNode.removeChild(a),b=!1),C.currentZIndex=r}function h(e){var t;for(t=v.length;t--;)v[t]===e&&v.splice(t,1);for(t=y.length;t--;)y[t]===e&&y.splice(t,1)}var p,m,g,v=[],y=[],b,C=e.extend({Mixins:[t,n],init:function(e){var t=this;t._super(e),t._eventsRoot=t,t.classes.add("floatpanel"),e.autohide&&(l(),u(),v.push(t)),e.autofix&&(c(),t.on("move",function(){d(this)})),t.on("postrender show",function(e){if(e.control==t){var n,r=t.classPrefix;t.modal&&!b&&(n=i("#"+r+"modal-block"),n[0]||(n=i('<div id="'+r+'modal-block" class="'+r+"reset "+r+'fade"></div>').appendTo(t.getContainerElm())),o.setTimeout(function(){n.addClass(r+"in"),i(t.getEl()).addClass(r+"in")}),b=!0),f(!0,t)}}),t.on("show",function(){t.parents().each(function(e){return e.state.get("fixed")?(t.fixed(!0),!1):void 0})}),e.popover&&(t._preBodyHtml='<div class="'+t.classPrefix+'arrow"></div>',t.classes.add("popover").add("bottom").add(t.isRtl()?"end":"start"))},fixed:function(e){var t=this;if(t.state.get("fixed")!=e){if(t.state.get("rendered")){var n=r.getViewPort();e?t.layoutRect().y-=n.y:t.layoutRect().y+=n.y}t.classes.toggle("fixed",e),t.state.set("fixed",e)}return t},show:function(){var e=this,t,n=e._super();for(t=v.length;t--&&v[t]!==e;);return-1===t&&v.push(e),n},hide:function(){return h(this),f(!1,this),this._super()},hideAll:function(){C.hideAll()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||(e.remove(),f(!1,e)),e},remove:function(){h(this),this._super()},postRender:function(){var e=this;return e.settings.bodyRole&&this.getEl("body").setAttribute("role",e.settings.bodyRole),e._super()}});return C.hideAll=function(){for(var e=v.length;e--;){var t=v[e];t&&t.settings.autohide&&(t.hide(),v.splice(e,1))}},C}),r(Ee,[we,be,ce,g,ve,ue,h,u],function(e,t,n,r,i,o,a,s){function l(e){var t="width=device-width,initial-scale=1.0,user-scalable=0,minimum-scale=1.0,maximum-scale=1.0",n=r("meta[name=viewport]")[0],i;a.overrideViewPort!==!1&&(n||(n=document.createElement("meta"),n.setAttribute("name","viewport"),document.getElementsByTagName("head")[0].appendChild(n)),i=n.getAttribute("content"),i&&"undefined"!=typeof f&&(f=i),n.setAttribute("content",e?t:f))}function c(e){for(var t=0;t<d.length;t++)if(d[t]._fullscreen)return;r([document.documentElement,document.body]).removeClass(e+"fullscreen")}function u(){function e(){var e,t=n.getWindowSize(),r;for(e=0;e<d.length;e++)r=d[e].layoutRect(),d[e].moveTo(d[e].settings.x||Math.max(0,t.w/2-r.w/2),d[e].settings.y||Math.max(0,t.h/2-r.h/2))}var t={w:window.innerWidth,h:window.innerHeight};s.setInterval(function(){var e=window.innerWidth,n=window.innerHeight;(t.w!=e||t.h!=n)&&(t={w:e,h:n},r(window).trigger("resize"))},100),r(window).on("resize",e)}var d=[],f="",h=e.extend({modal:!0,Defaults:{border:1,layout:"flex",containerCls:"panel",role:"dialog",callbacks:{submit:function(){this.fire("submit",{data:this.toJSON()})},close:function(){this.close()}}},init:function(e){var n=this;n._super(e),n.isRtl()&&n.classes.add("rtl"),n.classes.add("window"),n.bodyClasses.add("window-body"),n.state.set("fixed",!0),e.buttons&&(n.statusbar=new t({layout:"flex",border:"1 0 0 0",spacing:3,padding:10,align:"center",pack:n.isRtl()?"start":"end",defaults:{type:"button"},items:e.buttons}),n.statusbar.classes.add("foot"),n.statusbar.parent(n)),n.on("click",function(e){-1!=e.target.className.indexOf(n.classPrefix+"close")&&n.close()}),n.on("cancel",function(){n.close()}),n.aria("describedby",n.describedBy||n._id+"-none"),n.aria("label",e.title),n._fullscreen=!1},recalc:function(){var e=this,t=e.statusbar,r,i,o,a;e._fullscreen&&(e.layoutRect(n.getWindowSize()),e.layoutRect().contentH=e.layoutRect().innerH),e._super(),r=e.layoutRect(),e.settings.title&&!e._fullscreen&&(i=r.headerW,i>r.w&&(o=r.x-Math.max(0,i/2),e.layoutRect({w:i,x:o}),a=!0)),t&&(t.layoutRect({w:e.layoutRect().innerW}).recalc(),i=t.layoutRect().minW+r.deltaW,i>r.w&&(o=r.x-Math.max(0,i-r.w),e.layoutRect({w:i,x:o}),a=!0)),a&&e.recalc()},initLayoutRect:function(){var e=this,t=e._super(),r=0,i;if(e.settings.title&&!e._fullscreen){i=e.getEl("head");var o=n.getSize(i);t.headerW=o.width,t.headerH=o.height,r+=t.headerH}e.statusbar&&(r+=e.statusbar.layoutRect().h),t.deltaH+=r,t.minH+=r,t.h+=r;var a=n.getWindowSize();return t.x=e.settings.x||Math.max(0,a.w/2-t.w/2),t.y=e.settings.y||Math.max(0,a.h/2-t.h/2),t},renderHtml:function(){var e=this,t=e._layout,n=e._id,r=e.classPrefix,i=e.settings,o="",a="",s=i.html;return e.preRender(),t.preRender(e),i.title&&(o='<div id="'+n+'-head" class="'+r+'window-head"><div id="'+n+'-title" class="'+r+'title">'+e.encode(i.title)+'</div><button type="button" class="'+r+'close" aria-hidden="true">\xd7</button><div id="'+n+'-dragh" class="'+r+'dragh"></div></div>'),i.url&&(s='<iframe src="'+i.url+'" tabindex="-1"></iframe>'),"undefined"==typeof s&&(s=t.renderHtml(e)),e.statusbar&&(a=e.statusbar.renderHtml()),'<div id="'+n+'" class="'+e.classes+'" hidefocus="1"><div class="'+e.classPrefix+'reset" role="application">'+o+'<div id="'+n+'-body" class="'+e.bodyClasses+'">'+s+"</div>"+a+"</div></div>"},fullscreen:function(e){var t=this,i=document.documentElement,a,l=t.classPrefix,c;if(e!=t._fullscreen)if(r(window).on("resize",function(){var e;if(t._fullscreen)if(a)t._timer||(t._timer=s.setTimeout(function(){var e=n.getWindowSize();t.moveTo(0,0).resizeTo(e.w,e.h),t._timer=0},50));else{e=(new Date).getTime();var r=n.getWindowSize();t.moveTo(0,0).resizeTo(r.w,r.h),(new Date).getTime()-e>50&&(a=!0)}}),c=t.layoutRect(),t._fullscreen=e,e){t._initial={x:c.x,y:c.y,w:c.w,h:c.h},t.borderBox=o.parseBox("0"),t.getEl("head").style.display="none",c.deltaH-=c.headerH+2,r([i,document.body]).addClass(l+"fullscreen"),t.classes.add("fullscreen");var u=n.getWindowSize();t.moveTo(0,0).resizeTo(u.w,u.h)}else t.borderBox=o.parseBox(t.settings.border),t.getEl("head").style.display="",c.deltaH+=c.headerH,r([i,document.body]).removeClass(l+"fullscreen"),t.classes.remove("fullscreen"),t.moveTo(t._initial.x,t._initial.y).resizeTo(t._initial.w,t._initial.h);return t.reflow()},postRender:function(){var e=this,t;setTimeout(function(){e.classes.add("in")},0),e._super(),e.statusbar&&e.statusbar.postRender(),e.focus(),this.dragHelper=new i(e._id+"-dragh",{start:function(){t={x:e.layoutRect().x,y:e.layoutRect().y}},drag:function(n){e.moveTo(t.x+n.deltaX,t.y+n.deltaY)}}),e.on("submit",function(t){t.isDefaultPrevented()||e.close()}),d.push(e),l(!0)},submit:function(){return this.fire("submit",{data:this.toJSON()})},remove:function(){var e=this,t;for(e.dragHelper.destroy(),e._super(),e.statusbar&&this.statusbar.remove(),t=d.length;t--;)d[t]===e&&d.splice(t,1);l(d.length>0),c(e.classPrefix)},getContentWindow:function(){var e=this.getEl().getElementsByTagName("iframe")[0];return e?e.contentWindow:null}});return a.desktop||u(),h}),r(Ne,[Ee],function(e){var t=e.extend({init:function(e){e={border:1,padding:20,layout:"flex",pack:"center",align:"center",containerCls:"panel",autoScroll:!0,buttons:{type:"button",text:"Ok",action:"ok"},items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200}},this._super(e)},Statics:{OK:1,OK_CANCEL:2,YES_NO:3,YES_NO_CANCEL:4,msgBox:function(n){function r(e,t,n){return{type:"button",text:e,subtype:n?"primary":"",onClick:function(e){e.control.parents()[1].close(),o(t)}}}var i,o=n.callback||function(){};switch(n.buttons){case t.OK_CANCEL:i=[r("Ok",!0,!0),r("Cancel",!1)];break;case t.YES_NO:case t.YES_NO_CANCEL:i=[r("Yes",1,!0),r("No",0)],n.buttons==t.YES_NO_CANCEL&&i.push(r("Cancel",-1));break;default:i=[r("Ok",!0,!0)]}return new e({padding:20,x:n.x,y:n.y,minWidth:300,minHeight:100,layout:"flex",pack:"center",align:"center",buttons:i,title:n.title,role:"alertdialog",items:{type:"label",multiline:!0,maxWidth:500,maxHeight:200,text:n.text},onPostRender:function(){this.aria("describedby",this.items()[0]._id)},onClose:n.onClose,onCancel:function(){o(!1)}}).renderTo(document.body).reflow()},alert:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,t.msgBox(e)},confirm:function(e,n){return"string"==typeof e&&(e={text:e}),e.callback=n,e.buttons=t.OK_CANCEL,t.msgBox(e)}}});return t}),r(_e,[Ee,Ne],function(e,t){return function(n){function r(){return o.length?o[o.length-1]:void 0}var i=this,o=[];i.windows=o,n.on("remove",function(){for(var e=o.length;e--;)o[e].close()}),i.open=function(t,r){var i;return n.editorManager.setActive(n),t.title=t.title||" ",t.url=t.url||t.file,t.url&&(t.width=parseInt(t.width||320,10),t.height=parseInt(t.height||240,10)),t.body&&(t.items={defaults:t.defaults,type:t.bodyType||"form",items:t.body}),t.url||t.buttons||(t.buttons=[{text:"Ok",subtype:"primary",onclick:function(){i.find("form")[0].submit()}},{text:"Cancel",onclick:function(){i.close()}}]),i=new e(t),o.push(i),i.on("close",function(){for(var e=o.length;e--;)o[e]===i&&o.splice(e,1);o.length||n.focus()}),t.data&&i.on("postRender",function(){this.find("*").each(function(e){var n=e.name();n in t.data&&e.value(t.data[n])})}),i.features=t||{},i.params=r||{},1===o.length&&n.nodeChanged(),i.renderTo().reflow()},i.alert=function(e,r,i){t.alert(e,function(){r?r.call(i||this):n.focus()})},i.confirm=function(e,n,r){t.confirm(e,function(e){n.call(r||this,e)})},i.close=function(){r()&&r().close()},i.getParams=function(){return r()?r().params:null},i.setParams=function(e){r()&&(r().params=e)},i.getWindows=function(){return o}}}),r(Se,[he,Ce],function(e,t){return e.extend({Mixins:[t],Defaults:{classes:"widget tooltip tooltip-n"},renderHtml:function(){var e=this,t=e.classPrefix;return'<div id="'+e._id+'" class="'+e.classes+'" role="presentation"><div class="'+t+'tooltip-arrow"></div><div class="'+t+'tooltip-inner">'+e.encode(e.state.get("text"))+"</div></div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().lastChild.innerHTML=e.encode(t.value)}),e._super()},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(ke,[he,Se],function(e,t){var n,r=e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.canFocus=!0,e.tooltip&&r.tooltips!==!1&&(t.on("mouseenter",function(n){var r=t.tooltip().moveTo(-65535);if(n.control==t){var i=r.text(e.tooltip).show().testMoveRel(t.getEl(),["bc-tc","bc-tl","bc-tr"]);r.classes.toggle("tooltip-n","bc-tc"==i),r.classes.toggle("tooltip-nw","bc-tl"==i),r.classes.toggle("tooltip-ne","bc-tr"==i),r.moveRel(t.getEl(),i)}else r.hide()}),t.on("mouseleave mousedown click",function(){t.tooltip().hide()})),t.aria("label",e.ariaLabel||e.tooltip)},tooltip:function(){return n||(n=new t({type:"tooltip"}),n.renderTo()),n},postRender:function(){var e=this,t=e.settings;e._super(),e.parent()||!t.width&&!t.height||(e.initLayoutRect(),e.repaint()),t.autofocus&&e.focus()},bindStates:function(){function e(e){n.aria("disabled",e),n.classes.toggle("disabled",e)}function t(e){n.aria("pressed",e),n.classes.toggle("active",e)}var n=this;return n.state.on("change:disabled",function(t){e(t.value)}),n.state.on("change:active",function(e){t(e.value)}),n.state.get("disabled")&&e(!0),n.state.get("active")&&t(!0),n._super()},remove:function(){this._super(),n&&(n.remove(),n=null)}});return r}),r(Te,[ke],function(e){return e.extend({Defaults:{value:0},init:function(e){var t=this;t._super(e),t.classes.add("progress"),t.settings.filter||(t.settings.filter=function(e){return Math.round(e)})},renderHtml:function(){var e=this,t=e._id,n=this.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div class="'+n+'bar-container"><div class="'+n+'bar"></div></div><div class="'+n+'text">0%</div></div>'},postRender:function(){var e=this;return e._super(),e.value(e.settings.value),e},bindStates:function(){function e(e){e=t.settings.filter(e),t.getEl().lastChild.innerHTML=e+"%",t.getEl().firstChild.firstChild.style.width=e+"%"}var t=this;return t.state.on("change:value",function(t){e(t.value)}),e(t.state.get("value")),t._super()}})}),r(Re,[he,Ce,Te],function(e,t,n){return e.extend({Mixins:[t],Defaults:{classes:"widget notification"},init:function(e){var t=this;t._super(e),e.text&&t.text(e.text),e.icon&&(t.icon=e.icon),e.color&&(t.color=e.color),e.type&&t.classes.add("notification-"+e.type),e.timeout&&(e.timeout<0||e.timeout>0)&&!e.closeButton?t.closeButton=!1:(t.classes.add("has-close"),t.closeButton=!0),e.progressBar&&(t.progressBar=new n),t.on("click",function(e){-1!=e.target.className.indexOf(t.classPrefix+"close")&&t.close()})},renderHtml:function(){var e=this,t=e.classPrefix,n="",r="",i="",o="";return e.icon&&(n='<i class="'+t+"ico "+t+"i-"+e.icon+'"></i>'),e.color&&(o=' style="background-color: '+e.color+'"'),e.closeButton&&(r='<button type="button" class="'+t+'close" aria-hidden="true">\xd7</button>'),e.progressBar&&(i=e.progressBar.renderHtml()),'<div id="'+e._id+'" class="'+e.classes+'"'+o+' role="presentation">'+n+'<div class="'+t+'notification-inner">'+e.state.get("text")+"</div>"+i+r+"</div>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.getEl().childNodes[1].innerHTML=t.value}),e.progressBar&&e.progressBar.bindStates(),e._super()},close:function(){var e=this;return e.fire("close").isDefaultPrevented()||e.remove(),e},repaint:function(){var e=this,t,n;t=e.getEl().style,n=e._layoutRect,t.left=n.x+"px",t.top=n.y+"px",t.zIndex=131070}})}),r(Ae,[Re,u],function(e,t){return function(n){function r(){return l.length?l[l.length-1]:void 0}function i(){t.requestAnimationFrame(function(){o(),a()})}function o(){for(var e=0;e<l.length;e++)l[e].moveTo(0,0)}function a(){if(l.length>0){var e=l.slice(0,1)[0],t=n.inline?n.getElement():n.getContentAreaContainer();if(e.moveRel(t,"tc-tc"),l.length>1)for(var r=1;r<l.length;r++)l[r].moveRel(l[r-1].getEl(),"bc-tc")}}var s=this,l=[];s.notifications=l,n.on("remove",function(){for(var e=l.length;e--;)l[e].close()}),n.on("ResizeEditor",a),n.on("ResizeWindow",i),s.open=function(t){var r;return n.editorManager.setActive(n),r=new e(t),l.push(r),t.timeout>0&&(r.timer=setTimeout(function(){r.close()},t.timeout)),r.on("close",function(){var e=l.length;for(r.timer&&n.getWin().clearTimeout(r.timer);e--;)l[e]===r&&l.splice(e,1);a()}),r.renderTo(),a(),r},s.close=function(){r()&&r().close()},s.getNotifications=function(){return l}}}),r(Be,[w],function(e){function t(t,n,r){for(var i=[];n&&n!=t;n=n.parentNode)i.push(e.nodeIndex(n,r));return i}function n(e,t){var n,r,i;for(r=e,n=t.length-1;n>=0;n--){if(i=r.childNodes,t[n]>i.length-1)return null;r=i[t[n]]}return r}return{create:t,resolve:n}}),r(De,[I,T,y,Be,A,C,h,m,u,k],function(e,t,n,r,i,o,a,s,l,c){return function(u){function d(e,t){try{u.getDoc().execCommand(e,!1,t)}catch(n){}}function f(){var e=u.getDoc().documentMode;return e?e:6}function h(e){return e.isDefaultPrevented()}function p(e){var t,n;e.dataTransfer&&(u.selection.isCollapsed()&&"IMG"==e.target.tagName&&Q.select(e.target),t=u.selection.getContent(),t.length>0&&(n=oe+escape(u.id)+","+escape(t),e.dataTransfer.setData(ae,n)))}function m(e){var t;return e.dataTransfer&&(t=e.dataTransfer.getData(ae),t&&t.indexOf(oe)>=0)?(t=t.substr(oe.length).split(","),{id:unescape(t[0]),html:unescape(t[1])}):null}function g(e){u.queryCommandSupported("mceInsertClipboardContent")?u.execCommand("mceInsertClipboardContent",!1,{content:e}):u.execCommand("mceInsertContent",!1,e)}function v(){function i(e){var t=C.schema.getBlockElements(),n=u.getBody();if("BR"!=e.nodeName)return!1;for(e=e;e!=n&&!t[e.nodeName];e=e.parentNode)if(e.nextSibling)return!1;return!0}function o(e,t){var n;for(n=e.nextSibling;n&&n!=t;n=n.nextSibling)if((3!=n.nodeType||0!==X.trim(n.data).length)&&n!==t)return!1;return n===t}function a(e,t,r){var o,a,s;for(s=C.schema.getNonEmptyElements(),o=new n(r||e,e);a=o[t?"next":"prev"]();){if(s[a.nodeName]&&!i(a))return a;if(3==a.nodeType&&a.data.length>0)return a}}function c(e){var n,r,i,o,s;if(!e.collapsed&&(n=C.getParent(t.getNode(e.startContainer,e.startOffset),C.isBlock),r=C.getParent(t.getNode(e.endContainer,e.endOffset),C.isBlock),s=u.schema.getTextBlockElements(),n!=r&&s[n.nodeName]&&s[r.nodeName]&&"false"!==C.getContentEditable(n)&&"false"!==C.getContentEditable(r)))return e.deleteContents(),i=a(n,!1),o=a(r,!0),C.isEmpty(r)||X(n).append(r.childNodes),X(r).remove(),i?1==i.nodeType?"BR"==i.nodeName?(e.setStartBefore(i),e.setEndBefore(i)):(e.setStartAfter(i),e.setEndAfter(i)):(e.setStart(i,i.data.length),e.setEnd(i,i.data.length)):o&&(1==o.nodeType?(e.setStartBefore(o),e.setEndBefore(o)):(e.setStart(o,0),e.setEnd(o,0))),x.setRng(e),!0}function d(e,n){var r,i,s,l,c,d;if(!e.collapsed)return e;if(c=e.startContainer,d=e.startOffset,3==c.nodeType)if(n){if(d<c.data.length)return e}else if(d>0)return e;if(r=t.getNode(e.startContainer,e.startOffset),s=C.getParent(r,C.isBlock),i=a(u.getBody(),n,r),l=C.getParent(i,C.isBlock),!r||!i)return e;if(l&&s!=l)if(n){if(!o(s,l))return e;1==r.nodeType?"BR"==r.nodeName?e.setStartBefore(r):e.setStartAfter(r):e.setStart(r,r.data.length),1==i.nodeType?e.setEnd(i,0):e.setEndBefore(i)}else{if(!o(l,s))return e;1==i.nodeType?"BR"==i.nodeName?e.setStartBefore(i):e.setStartAfter(i):e.setStart(i,i.data.length),1==r.nodeType?e.setEnd(r,0):e.setEndBefore(r)}return e}function f(e){var t=x.getRng();return t=d(t,e),c(t)?!0:void 0}function v(e,t){function n(e,n){return m=X(n).parents().filter(function(e,t){return!!u.schema.getTextInlineElements()[t.nodeName]}),l=e.cloneNode(!1),m=s.map(m,function(e){return e=e.cloneNode(!1),l.hasChildNodes()?(e.appendChild(l.firstChild),l.appendChild(e)):l.appendChild(e),l.appendChild(e),e}),m.length?(p=C.create("br"),m[0].appendChild(p),C.replace(l,e),t.setStartBefore(p),t.setEndBefore(p),u.selection.setRng(t),p):null}function i(e){return e&&u.schema.getTextBlockElements()[e.tagName]}var o,a,l,c,d,f,h,p,m;if(t.collapsed&&(f=t.startContainer,h=t.startOffset,a=C.getParent(f,C.isBlock),i(a)))if(1==f.nodeType){if(f=f.childNodes[h],f&&"BR"!=f.tagName)return;if(d=e?a.nextSibling:a.previousSibling,C.isEmpty(a)&&i(d)&&C.isEmpty(d)&&n(a,f))return C.remove(d),!0}else if(3==f.nodeType){if(o=r.create(a,f),c=a.cloneNode(!0),f=r.resolve(c,o),e){if(h>=f.data.length)return;f.deleteData(h,1)}else{if(0>=h)return;f.deleteData(h-1,1)}if(C.isEmpty(c))return n(a,f)}}function y(e){var t,n,r;f(e)||(s.each(u.getBody().getElementsByTagName("*"),function(e){"SPAN"==e.tagName&&e.setAttribute("mce-data-marked",1),!e.hasAttribute("data-mce-style")&&e.hasAttribute("style")&&u.dom.setAttrib(e,"style",u.dom.getAttrib(e,"style"))}),t=new w(function(){}),t.observe(u.getDoc(),{childList:!0,attributes:!0,subtree:!0,attributeFilter:["style"]}),u.getDoc().execCommand(e?"ForwardDelete":"Delete",!1,null),n=u.selection.getRng(),r=n.startContainer.parentNode,s.each(t.takeRecords(),function(e){if(C.isChildOf(e.target,u.getBody())){if("style"==e.attributeName){var t=e.target.getAttribute("data-mce-style");t?e.target.setAttribute("style",t):e.target.removeAttribute("style")}s.each(e.addedNodes,function(e){if("SPAN"==e.nodeName&&!e.getAttribute("mce-data-marked")){var t,i;e==r&&(t=n.startOffset,i=e.firstChild),C.remove(e,!0),i&&(n.setStart(i,t),n.setEnd(i,t),u.selection.setRng(n))}})}}),t.disconnect(),s.each(u.dom.select("span[mce-data-marked]"),function(e){e.removeAttribute("mce-data-marked")}))}var b=u.getDoc(),C=u.dom,x=u.selection,w=window.MutationObserver,E,N;w||(E=!0,w=function(){function e(e){var t=e.relatedNode||e.target;n.push({target:t,addedNodes:[t]})}function t(e){var t=e.relatedNode||e.target;n.push({target:t,attributeName:e.attrName})}var n=[],r;this.observe=function(n){r=n,r.addEventListener("DOMSubtreeModified",e,!1),r.addEventListener("DOMNodeInsertedIntoDocument",e,!1),r.addEventListener("DOMNodeInserted",e,!1),r.addEventListener("DOMAttrModified",t,!1)},this.disconnect=function(){r.removeEventListener("DOMSubtreeModified",e,!1),r.removeEventListener("DOMNodeInsertedIntoDocument",e,!1),r.removeEventListener("DOMNodeInserted",e,!1),r.removeEventListener("DOMAttrModified",t,!1)},this.takeRecords=function(){return n}}),u.on("keydown",function(e){var t=e.keyCode==G,n=e.ctrlKey||e.metaKey;if(!h(e)&&(t||e.keyCode==K)){var r=u.selection.getRng(),i=r.startContainer,o=r.startOffset;if(t&&e.shiftKey)return;if(v(t,r))return void e.preventDefault();if(!n&&r.collapsed&&3==i.nodeType&&(t?o<i.data.length:o>0))return;e.preventDefault(),n&&u.selection.getSel().modify("extend",t?"forward":"backward",e.metaKey?"lineboundary":"word"),y(t)}}),u.on("keypress",function(t){if(!h(t)&&!x.isCollapsed()&&t.charCode>31&&!e.metaKeyPressed(t)){var n,r,i,o,a,s;n=u.selection.getRng(),s=String.fromCharCode(t.charCode),t.preventDefault(),r=X(n.startContainer).parents().filter(function(e,t){return!!u.schema.getTextInlineElements()[t.nodeName]}),y(!0),r=r.filter(function(e,t){return!X.contains(u.getBody(),t)}),r.length?(i=C.createFragment(),r.each(function(e,t){t=t.cloneNode(!1),i.hasChildNodes()?(t.appendChild(i.firstChild),i.appendChild(t)):(a=t,i.appendChild(t)),i.appendChild(t)}),a.appendChild(u.getDoc().createTextNode(s)),o=C.getParent(n.startContainer,C.isBlock),C.isEmpty(o)?X(o).empty().append(i):n.insertNode(i),n.setStart(a.firstChild,1),n.setEnd(a.firstChild,1),u.selection.setRng(n)):u.selection.setContent(s)}}),u.addCommand("Delete",function(){y()}),u.addCommand("ForwardDelete",function(){y(!0)}),E||(u.on("dragstart",function(e){N=x.getRng(),p(e)}),u.on("drop",function(e){if(!h(e)){var n=m(e);n&&(e.preventDefault(),l.setEditorTimeout(u,function(){var r=t.getCaretRangeFromPoint(e.x,e.y,b);N&&(x.setRng(N),N=null),y(),x.setRng(r),g(n.html)}))}}),u.on("cut",function(e){h(e)||!e.clipboardData||u.selection.isCollapsed()||(e.preventDefault(),e.clipboardData.clearData(),e.clipboardData.setData("text/html",u.selection.getContent()),e.clipboardData.setData("text/plain",u.selection.getContent({format:"text"})),l.setEditorTimeout(u,function(){y(!0)}))}))}function y(){function e(e){var t=J.create("body"),n=e.cloneContents();return t.appendChild(n),Q.serializer.serialize(t,{format:"html"})}function n(n){if(!n.setStart){if(n.item)return!1;var r=n.duplicate();return r.moveToElementText(u.getBody()),t.compareRanges(n,r)}var i=e(n),o=J.createRng();o.selectNode(u.getBody());var a=e(o);return i===a}u.on("keydown",function(e){var t=e.keyCode,r,i;if(!h(e)&&(t==G||t==K)){if(r=u.selection.isCollapsed(),i=u.getBody(),r&&!J.isEmpty(i))return;if(!r&&!n(u.selection.getRng()))return;e.preventDefault(),u.setContent(""),i.firstChild&&J.isBlock(i.firstChild)?u.selection.setCursorLocation(i.firstChild,0):u.selection.setCursorLocation(i,0),u.nodeChanged()}})}function b(){u.shortcuts.add("meta+a",null,"SelectAll")}function C(){u.settings.content_editable||J.bind(u.getDoc(),"mousedown mouseup",function(e){var t;if(e.target==u.getDoc().documentElement)if(t=Q.getRng(),u.getBody().focus(),"mousedown"==e.type){if(c.isCaretContainer(t.startContainer))return;Q.placeCaretAt(e.clientX,e.clientY)}else Q.setRng(t)})}function x(){u.on("keydown",function(e){if(!h(e)&&e.keyCode===K){if(!u.getBody().getElementsByTagName("hr").length)return;if(Q.isCollapsed()&&0===Q.getRng(!0).startOffset){var t=Q.getNode(),n=t.previousSibling;if("HR"==t.nodeName)return J.remove(t),void e.preventDefault();n&&n.nodeName&&"hr"===n.nodeName.toLowerCase()&&(J.remove(n),e.preventDefault())}}})}function w(){window.Range.prototype.getClientRects||u.on("mousedown",function(e){if(!h(e)&&"HTML"===e.target.nodeName){var t=u.getBody();t.blur(),l.setEditorTimeout(u,function(){t.focus()})}})}function E(){u.on("click",function(e){var t=e.target;/^(IMG|HR)$/.test(t.nodeName)&&"false"!==J.getContentEditableParent(t)&&(e.preventDefault(),Q.getSel().setBaseAndExtent(t,0,t,1),u.nodeChanged()),"A"==t.nodeName&&J.hasClass(t,"mce-item-anchor")&&(e.preventDefault(),Q.select(t))})}function N(){function e(){var e=J.getAttribs(Q.getStart().cloneNode(!1));return function(){var t=Q.getStart();t!==u.getBody()&&(J.setAttrib(t,"style",null),Y(e,function(e){t.setAttributeNode(e.cloneNode(!0))}))}}function t(){return!Q.isCollapsed()&&J.getParent(Q.getStart(),J.isBlock)!=J.getParent(Q.getEnd(),J.isBlock)}u.on("keypress",function(n){var r;return h(n)||8!=n.keyCode&&46!=n.keyCode||!t()?void 0:(r=e(),u.getDoc().execCommand("delete",!1,null),r(),n.preventDefault(),!1)}),J.bind(u.getDoc(),"cut",function(n){var r;!h(n)&&t()&&(r=e(),l.setEditorTimeout(u,function(){r()}))})}function _(){document.body.setAttribute("role","application")}function S(){u.on("keydown",function(e){if(!h(e)&&e.keyCode===K&&Q.isCollapsed()&&0===Q.getRng(!0).startOffset){var t=Q.getNode().previousSibling;if(t&&t.nodeName&&"table"===t.nodeName.toLowerCase())return e.preventDefault(),!1}})}function k(){f()>7||(d("RespectVisibilityInDesign",!0),u.contentStyles.push(".mceHideBrInPre pre br {display: none}"),J.addClass(u.getBody(),"mceHideBrInPre"),ee.addNodeFilter("pre",function(e){for(var t=e.length,n,r,o,a;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)o=n[r],a=o.prev,a&&3===a.type&&"\n"!=a.value.charAt(a.value-1)?a.value+="\n":o.parent.insert(new i("#text",3),o,!0).value="\n"}),te.addNodeFilter("pre",function(e){for(var t=e.length,n,r,i,o;t--;)for(n=e[t].getAll("br"),r=n.length;r--;)i=n[r],o=i.prev,o&&3==o.type&&(o.value=o.value.replace(/\r?\n$/,""))}))}function T(){J.bind(u.getBody(),"mouseup",function(){var e,t=Q.getNode();"IMG"==t.nodeName&&((e=J.getStyle(t,"width"))&&(J.setAttrib(t,"width",e.replace(/[^0-9%]+/g,"")),J.setStyle(t,"width","")),(e=J.getStyle(t,"height"))&&(J.setAttrib(t,"height",e.replace(/[^0-9%]+/g,"")),J.setStyle(t,"height","")))})}function R(){u.on("keydown",function(t){var n,r,i,o,a;if(!h(t)&&t.keyCode==e.BACKSPACE&&(n=Q.getRng(),r=n.startContainer,i=n.startOffset,o=J.getRoot(),a=r,n.collapsed&&0===i)){for(;a&&a.parentNode&&a.parentNode.firstChild==a&&a.parentNode!=o;)a=a.parentNode;"BLOCKQUOTE"===a.tagName&&(u.formatter.toggle("blockquote",null,a),n=J.createRng(),n.setStart(r,0),n.setEnd(r,0),Q.setRng(n))}})}function A(){function e(){u._refreshContentEditable(),d("StyleWithCSS",!1),d("enableInlineTableEditing",!1),Z.object_resizing||d("enableObjectResizing",!1)}Z.readonly||u.on("BeforeExecCommand MouseDown",e)}function B(){function e(){Y(J.select("a"),function(e){var t=e.parentNode,n=J.getRoot();if(t.lastChild===e){for(;t&&!J.isBlock(t);){if(t.parentNode.lastChild!==t||t===n)return;t=t.parentNode}J.add(t,"br",{"data-mce-bogus":1})}})}u.on("SetContent ExecCommand",function(t){("setcontent"==t.type||"mceInsertLink"===t.command)&&e()})}function D(){Z.forced_root_block&&u.on("init",function(){d("DefaultParagraphSeparator",Z.forced_root_block)})}function M(){u.on("keydown",function(e){var t;h(e)||e.keyCode!=K||(t=u.getDoc().selection.createRange(),t&&t.item&&(e.preventDefault(),u.undoManager.beforeChange(),J.remove(t.item(0)),u.undoManager.add()))})}function L(){var e;f()>=10&&(e="",Y("p div h1 h2 h3 h4 h5 h6".split(" "),function(t,n){
e+=(n>0?",":"")+t+":empty"}),u.contentStyles.push(e+"{padding-right: 1px !important}"))}function P(){f()<9&&(ee.addNodeFilter("noscript",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.firstChild,r&&n.attr("data-mce-innertext",r.value)}),te.addNodeFilter("noscript",function(e){for(var t=e.length,n,r,a;t--;)n=e[t],r=e[t].firstChild,r?r.value=o.decode(r.value):(a=n.attributes.map["data-mce-innertext"],a&&(n.attr("data-mce-innertext",null),r=new i("#text",3),r.value=a,r.raw=!0,n.append(r)))}))}function H(){function e(e,t){var n=i.createTextRange();try{n.moveToPoint(e,t)}catch(r){n=null}return n}function t(t){var r;t.button?(r=e(t.x,t.y),r&&(r.compareEndPoints("StartToStart",a)>0?r.setEndPoint("StartToStart",a):r.setEndPoint("EndToEnd",a),r.select())):n()}function n(){var e=r.selection.createRange();a&&!e.item&&0===e.compareEndPoints("StartToEnd",e)&&a.select(),J.unbind(r,"mouseup",n),J.unbind(r,"mousemove",t),a=o=0}var r=J.doc,i=r.body,o,a,s;r.documentElement.unselectable=!0,J.bind(r,"mousedown contextmenu",function(i){if("HTML"===i.target.nodeName){if(o&&n(),s=r.documentElement,s.scrollHeight>s.clientHeight)return;o=1,a=e(i.x,i.y),a&&(J.bind(r,"mouseup",n),J.bind(r,"mousemove",t),J.getRoot().focus(),a.select())}})}function O(){u.on("keyup focusin mouseup",function(t){65==t.keyCode&&e.metaKeyPressed(t)||Q.normalize()},!0)}function I(){u.contentStyles.push("img:-moz-broken {-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}")}function F(){u.inline||u.on("keydown",function(){document.activeElement==document.body&&u.getWin().focus()})}function z(){u.inline||(u.contentStyles.push("body {min-height: 150px}"),u.on("click",function(e){var t;if("HTML"==e.target.nodeName){if(a.ie>11)return void u.getBody().focus();t=u.selection.getRng(),u.getBody().focus(),u.selection.setRng(t),u.selection.normalize(),u.nodeChanged()}}))}function W(){a.mac&&u.on("keydown",function(t){!e.metaKeyPressed(t)||t.shiftKey||37!=t.keyCode&&39!=t.keyCode||(t.preventDefault(),u.selection.getSel().modify("move",37==t.keyCode?"backward":"forward","lineboundary"))})}function V(){d("AutoUrlDetect",!1)}function U(){u.on("click",function(e){var t=e.target;do if("A"===t.tagName)return void e.preventDefault();while(t=t.parentNode)}),u.contentStyles.push(".mce-content-body {-webkit-touch-callout: none}")}function $(){u.on("init",function(){u.dom.bind(u.getBody(),"submit",function(e){e.preventDefault()})})}function q(){ee.addNodeFilter("br",function(e){for(var t=e.length;t--;)"Apple-interchange-newline"==e[t].attr("class")&&e[t].remove()})}function j(){u.on("dragstart",function(e){p(e)}),u.on("drop",function(e){if(!h(e)){var n=m(e);if(n&&n.id!=u.id){e.preventDefault();var r=t.getCaretRangeFromPoint(e.x,e.y,u.getDoc());Q.setRng(r),g(n.html)}}})}var Y=s.each,X=u.$,K=e.BACKSPACE,G=e.DELETE,J=u.dom,Q=u.selection,Z=u.settings,ee=u.parser,te=u.serializer,ne=a.gecko,re=a.ie,ie=a.webkit,oe="data:text/mce-internal,",ae=re?"Text":"URL";R(),y(),O(),ie&&(v(),C(),E(),D(),$(),S(),q(),a.iOS?(F(),z(),U()):b()),re&&a.ie<11&&(x(),_(),k(),T(),M(),L(),P(),H()),a.ie>=11&&(z(),S()),a.ie&&(b(),V(),j()),ne&&(x(),w(),N(),A(),B(),I(),W(),S())}}),r(Me,[oe,w,m],function(e,t,n){function r(e,t){return"selectionchange"==t?e.getDoc():!e.inline&&/^mouse|click|contextmenu|drop|dragover|dragend/.test(t)?e.getDoc().documentElement:e.settings.event_root?(e.eventRoot||(e.eventRoot=o.select(e.settings.event_root)[0]),e.eventRoot):e.getBody()}function i(e,t){function n(e){return!e.hidden&&!e.readonly}var i=r(e,t),s;if(e.delegates||(e.delegates={}),!e.delegates[t])if(e.settings.event_root){if(a||(a={},e.editorManager.on("removeEditor",function(){var t;if(!e.editorManager.activeEditor&&a){for(t in a)e.dom.unbind(r(e,t));a=null}})),a[t])return;s=function(r){for(var i=r.target,a=e.editorManager.editors,s=a.length;s--;){var l=a[s].getBody();(l===i||o.isChildOf(i,l))&&n(a[s])&&a[s].fire(t,r)}},a[t]=s,o.bind(i,t,s)}else s=function(r){n(e)&&e.fire(t,r)},o.bind(i,t,s),e.delegates[t]=s}var o=t.DOM,a,s={bindPendingEventDelegates:function(){var e=this;n.each(e._pendingNativeEvents,function(t){i(e,t)})},toggleNativeEvent:function(e,t){var n=this;"focus"!=e&&"blur"!=e&&(t?n.initialized?i(n,e):n._pendingNativeEvents?n._pendingNativeEvents.push(e):n._pendingNativeEvents=[e]:n.initialized&&(n.dom.unbind(r(n,e),e,n.delegates[e]),delete n.delegates[e]))},unbindAllNativeEvents:function(){var e=this,t;if(e.delegates){for(t in e.delegates)e.dom.unbind(r(e,t),t,e.delegates[t]);delete e.delegates}e.inline||(e.getBody().onload=null,e.dom.unbind(e.getWin()),e.dom.unbind(e.getDoc())),e.dom.unbind(e.getBody()),e.dom.unbind(e.getContainer())}};return s=n.extend({},e,s)}),r(Le,[],function(){function e(e,t,n){try{e.getDoc().execCommand(t,!1,n)}catch(r){}}function t(t,n){var r=t.readonly?"readonly":"design";n!=r&&("readonly"==n?(t.selection.controlSelection.hideResizeRect(),t.readonly=!0,t.getBody().contentEditable=!1):(t.readonly=!1,t.getBody().contentEditable=!0,e(t,"StyleWithCSS",!1),e(t,"enableInlineTableEditing",!1),e(t,"enableObjectResizing",!1),t.focus(),t.nodeChanged()),t.fire("SwitchMode",{mode:n}))}return{setMode:t}}),r(Pe,[m,h],function(e,t){var n=e.each,r=e.explode,i={f9:120,f10:121,f11:122},o=e.makeMap("alt,ctrl,shift,meta,access");return function(a){function s(e,s,l,c){var u,d,f;f={func:l,scope:c||a,desc:a.translate(s)},n(r(e,"+"),function(e){e in o?f[e]=!0:/^[0-9]{2,}$/.test(e)?f.keyCode=parseInt(e,10):(f.charCode=e.charCodeAt(0),f.keyCode=i[e]||e.toUpperCase().charCodeAt(0))}),u=[f.keyCode];for(d in o)f[d]?u.push(d):f[d]=!1;return f.id=u.join(","),f.access&&(f.alt=!0,t.mac?f.ctrl=!0:f.shift=!0),f.meta&&(t.mac?f.meta=!0:(f.ctrl=!0,f.meta=!1)),f}var l=this,c={};a.on("keyup keypress keydown",function(e){(e.altKey||e.ctrlKey||e.metaKey)&&!e.isDefaultPrevented()&&n(c,function(t){return t.ctrl==e.ctrlKey&&t.meta==e.metaKey&&t.alt==e.altKey&&t.shift==e.shiftKey&&(e.keyCode==t.keyCode||e.charCode&&e.charCode==t.charCode)?(e.preventDefault(),"keydown"==e.type&&t.func.call(t.scope),!0):void 0})}),l.add=function(t,i,o,l){var u;return u=o,"string"==typeof o?o=function(){a.execCommand(u,!1,null)}:e.isArray(u)&&(o=function(){a.execCommand(u[0],u[1],u[2])}),n(r(t.toLowerCase()),function(e){var t=s(e,i,o,l);c[t.id]=t}),!0},l.remove=function(e){var t=s(e);return c[t.id]?(delete c[t.id],!0):!1}}}),r(He,[c,m,z],function(e,t,n){return function(r){function i(e){var t,n;return n={"image/jpeg":"jpg","image/jpg":"jpg","image/gif":"gif","image/png":"png"},t=n[e.blob().type.toLowerCase()]||"dat",e.id()+"."+t}function o(e,t){return e?e.replace(/\/$/,"")+"/"+t.replace(/^\//,""):t}function a(e){return{id:e.id,blob:e.blob,base64:e.base64,filename:n.constant(i(e))}}function s(e,t,n,a){var s,l,c;s=new XMLHttpRequest,s.open("POST",r.url),s.withCredentials=r.credentials,c=a(),s.upload.onprogress=function(e){var t=Math.round(e.loaded/e.total*100);c.progressBar.value(t)},s.onload=function(){var e;return c.close(),200!=s.status?void n("HTTP Error: "+s.status):(e=JSON.parse(s.responseText),e&&"string"==typeof e.location?void t(o(r.basePath,e.location)):void n("Invalid JSON: "+s.responseText))},l=new FormData,l.append("file",e.blob(),i(e)),s.send(l)}function l(){return new e(function(e){e([])})}function c(e){return e.then(function(e){return e})["catch"](function(e){return e})}function u(e,t,n){var r=e(n),i=c(r);return delete p[t],p[t]=i,i}function d(e,n){return t.map(e,function(e){var t=e.id();return p[t]?p[t]:u(n,t,e)})}function f(t,n){function i(t){return new e(function(e){var i=r.handler;i(a(t),function(n){e({url:n,blobInfo:t,status:!0})},function(n){e({url:"",blobInfo:t,status:!1,error:n})},n)})}var o=d(t,i);return e.all(o)}function h(e,t){return r.url||r.handler!==s?f(e,t):l()}var p={};return r=t.extend({credentials:!1,handler:s},r),{upload:h}}}),r(Oe,[c],function(e){function t(t){return new e(function(e){var n=new XMLHttpRequest;n.open("GET",t,!0),n.responseType="blob",n.onload=function(){200==this.status&&e(this.response)},n.send()})}function n(e){var t,n;return e=decodeURIComponent(e).split(","),n=/data:([^;]+)/.exec(e[0]),n&&(t=n[1]),{type:t,data:e[1]}}function r(t){return new e(function(e){var r,i,o;t=n(t);try{r=atob(t.data)}catch(a){return void e(new Blob([]))}for(i=new Uint8Array(r.length),o=0;o<i.length;o++)i[o]=r.charCodeAt(o);e(new Blob([i],{type:t.type}))})}function i(e){return 0===e.indexOf("blob:")?t(e):0===e.indexOf("data:")?r(e):null}function o(t){return new e(function(e){var n=new FileReader;n.onloadend=function(){e(n.result)},n.readAsDataURL(t)})}return{uriToBlob:i,blobToDataUri:o,parseDataUri:n}}),r(Ie,[c,p,z,Oe,h],function(e,t,n,r,i){var o=0;return function(a){function s(s,c){function u(e,t){var n,i;return 0===e.src.indexOf("blob:")?(i=a.getByUri(e.src),void(i&&t({image:e,blobInfo:i}))):(n=r.parseDataUri(e.src).data,i=a.findFirst(function(e){return e.base64()===n}),void(i?t({image:e,blobInfo:i}):r.uriToBlob(e.src).then(function(r){var i="blobid"+o++,s=a.create(i,r,n);a.add(s),t({image:e,blobInfo:s})})))}var d,f;return c||(c=n.constant(!0)),d=t.filter(s.getElementsByTagName("img"),function(e){var t=e.src;return i.fileApi?e.hasAttribute("data-mce-bogus")?!1:e.hasAttribute("data-mce-placeholder")?!1:t&&t!=i.transparentSrc?0===t.indexOf("blob:")?!0:0===t.indexOf("data:")?c(e):!1:!1:!1}),f=t.map(d,function(t){var n;return l[t.src]?new e(function(e){l[t.src].then(function(n){e({image:t,blobInfo:n.blobInfo})})}):(n=new e(function(e){u(t,e)}).then(function(e){return delete l[e.image.src],e})["catch"](function(e){return delete l[t.src],e}),l[t.src]=n,n)}),e.all(f)}var l={};return{findAll:s}}}),r(Fe,[p,z],function(e,t){return function(){function n(e,t,n){return{id:c(e),blob:c(t),base64:c(n),blobUri:c(URL.createObjectURL(t))}}function r(e){i(e.id())||l.push(e)}function i(e){return o(function(t){return t.id()===e})}function o(t){return e.filter(l,t)[0]}function a(e){return o(function(t){return t.blobUri()==e})}function s(){e.each(l,function(e){URL.revokeObjectURL(e.blobUri())}),l=[]}var l=[],c=t.constant;return{create:n,add:r,get:i,getByUri:a,findFirst:o,destroy:s}}}),r(ze,[p,He,Ie,Fe],function(e,t,n,r){return function(i){function o(e){return function(t){return i.selection?e(t):[]}}function a(e,t,n){var r=0;do r=e.indexOf(t,r),-1!==r&&(e=e.substring(0,r)+n+e.substr(r+t.length),r+=n.length-t.length+1);while(-1!==r);return e}function s(e,t,n){return e=a(e,'src="'+t+'"','src="'+n+'"'),e=a(e,'data-mce-src="'+t+'"','data-mce-src="'+n+'"')}function l(t,n){e.each(i.undoManager.data,function(e){e.content=s(e.content,t,n)})}function c(){return i.notificationManager.open({text:i.translate("Image uploading..."),type:"info",timeout:-1,progressBar:!0})}function u(n){return g||(g=new t({url:y.images_upload_url,basePath:y.images_upload_base_path,credentials:y.images_upload_credentials,handler:y.images_upload_handler})),f().then(o(function(t){var r;return r=e.map(t,function(e){return e.blobInfo}),g.upload(r,c).then(o(function(r){return r=e.map(r,function(e,n){var r=t[n].image;return l(r.src,e.url),i.$(r).attr({src:e.url,"data-mce-src":i.convertURL(e.url,"src")}),{element:r,status:e.status}}),n&&n(r),r}))}))}function d(e){return y.automatic_uploads!==!1?u(e):void 0}function f(){return v||(v=new n(m)),v.findAll(i.getBody(),y.images_dataimg_filter).then(o(function(t){return e.each(t,function(e){l(e.image.src,e.blobInfo.blobUri()),e.image.src=e.blobInfo.blobUri()}),t}))}function h(){m.destroy(),v=g=null}function p(t){return t.replace(/src="(blob:[^"]+)"/g,function(t,n){var r=m.getByUri(n);return r||(r=e.reduce(i.editorManager.editors,function(e,t){return e||t.editorUpload.blobCache.getByUri(n)},null)),r?'src="data:'+r.blob().type+";base64,"+r.base64()+'"':t})}var m=new r,g,v,y=i.settings;return i.on("setContent",function(){i.settings.automatic_uploads!==!1?d():f()}),i.on("RawSaveContent",function(e){e.content=p(e.content)}),i.on("getContent",function(e){e.source_view||"raw"==e.format||(e.content=p(e.content))}),{blobCache:m,uploadImages:u,uploadImagesAuto:d,scanForImages:f,destroy:h}}}),r(We,[z,y,_,$,k,W],function(e,t,n,r,i,o){function a(e){return e>0}function s(e){return 0>e}function l(e,n,r,i,o){var l=new t(e,i);if(s(n)){if(C(e)&&(e=l.prev(!0),r(e)))return e;for(;e=l.prev(o);)if(r(e))return e}if(a(n)){if(C(e)&&(e=l.next(!0),r(e)))return e;for(;e=l.next(o);)if(r(e))return e}return null}function c(e,t){for(e=e.parentNode;e&&e!=t;e=e.parentNode)if(b(e))return e;return t}function u(e,t){for(;e&&e!=t;){if(x(e))return e;e=e.parentNode}return null}function d(e,t,n){return u(e.container(),n)==u(t.container(),n)}function f(e,t,n){return c(e.container(),n)==c(t.container(),n)}function h(e,t){var n,r;return t?(n=t.container(),r=t.offset(),N(n)?n.childNodes[r+e]:null):null}function p(e,t){var n=t.ownerDocument.createRange();return e?(n.setStartBefore(t),n.setEndBefore(t)):(n.setStartAfter(t),n.setEndAfter(t)),n}function m(e,t,n){return u(t,e)==u(n,e)}function g(e,t,n){var r,i;for(i=e?"previousSibling":"nextSibling";n&&n!=t;){if(r=n[i],w(r)&&(r=r[i]),C(r)){if(m(t,r,n))return r;break}if(_(r))break;n=n.parentNode}return null}function v(e,t,r){var o,a,s,l,c=E(g,!0,t),u=E(g,!1,t);if(a=r.startContainer,s=r.startOffset,i.isCaretContainerBlock(a)){if(N(a)||(a=a.parentNode),l=a.getAttribute("data-mce-caret"),"before"==l&&(o=a.nextSibling,C(o)))return S(o);if("after"==l&&(o=a.previousSibling,C(o)))return k(o)}if(!r.collapsed)return r;if(n.isText(a)){if(w(a)){if(1===e){if(o=u(a))return S(o);if(o=c(a))return k(o)}if(-1===e){if(o=c(a))return k(o);if(o=u(a))return S(o)}return r}if(i.endsWithCaretContainer(a)&&s>=a.data.length-1)return 1===e&&(o=u(a))?S(o):r;if(i.startsWithCaretContainer(a)&&1>=s)return-1===e&&(o=c(a))?k(o):r;if(s===a.data.length)return o=u(a),o?S(o):r;if(0===s)return o=c(a),o?k(o):r}return r}function y(e,t){return C(h(e,t))}var b=n.isContentEditableTrue,C=n.isContentEditableFalse,x=n.matchStyleValues("display","block table table-cell table-caption"),w=i.isCaretContainer,E=e.curry,N=n.isElement,_=o.isCaretCandidate,S=E(p,!0),k=E(p,!1);return{isForwards:a,isBackwards:s,findNode:l,getEditingHost:c,getParentBlock:u,isInSameBlock:d,isInSameEditingHost:f,isBeforeContentEditableFalse:E(y,0),isAfterContentEditableFalse:E(y,-1),normalizeRange:v}}),r(Ve,[_,W,$,We,p,z],function(e,t,n,r,i,o){function a(e,t){for(var n=[];e&&e!=t;)n.push(e),e=e.parentNode;return n}function s(e,t){return e.hasChildNodes()&&t<e.childNodes.length?e.childNodes[t]:null}function l(e,t){if(h(e)){if(m(t.previousSibling)&&!d(t.previousSibling))return n.before(t);if(d(t))return n(t,0)}if(p(e)){if(m(t.nextSibling)&&!d(t.nextSibling))return n.after(t);if(d(t))return n(t,t.data.length)}return p(e)?n.after(t):n.before(t)}function c(e,t,c){var y,b,C,x,w,E,N;if(!f(c)||!t)return null;if(N=t,y=N.container(),b=N.offset(),d(y)){if(p(e)&&b>0)return n(y,--b);if(h(e)&&b<y.length)return n(y,++b);C=y}else{if(p(e)&&b>0&&(x=s(y,b-1),m(x)))return!g(x)&&(w=r.findNode(x,e,v,x))?d(w)?n(w,w.data.length):n.after(w):d(x)?n(x,x.data.length):n.before(x);if(h(e)&&b<y.childNodes.length&&(x=s(y,b),m(x)))return!g(x)&&(w=r.findNode(x,e,v,x))?d(w)?n(w,0):n.before(w):d(x)?n(x,0):n.after(x);C=N.getNode()}return(h(e)&&N.isAtEnd()||p(e)&&N.isAtStart())&&(C=r.findNode(C,e,o.constant(!0),c,!0),v(C))?l(e,C):(x=r.findNode(C,e,v,c),E=i.last(i.filter(a(y,c),u)),!E||x&&E.contains(x)?x?l(e,x):null:N=h(e)?n.after(E):n.before(E))}var u=e.isContentEditableFalse,d=e.isText,f=e.isElement,h=r.isForwards,p=r.isBackwards,m=t.isCaretCandidate,g=t.isAtomic,v=t.isEditableCaretCandidate;return function(e){return{next:function(t){return c(1,t,e)},prev:function(t){return c(-1,t,e)}}}}),r(Ue,[k,$,_,T,g,V,u],function(e,t,n,r,i,o,a){var s=n.isContentEditableFalse;return function(t,n){function r(e,n){var r=o.collapse(e.getBoundingClientRect(),n),i,a,s,l,c;return"BODY"==t.tagName?(i=t.ownerDocument.documentElement,a=t.scrollLeft||i.scrollLeft,s=t.scrollTop||i.scrollTop):(c=t.getBoundingClientRect(),a=t.scrollLeft-c.left,s=t.scrollTop-c.top),r.left+=a,r.right+=a,r.top+=s,r.bottom+=s,r.width=1,l=e.offsetWidth-e.clientWidth,l>0&&(n&&(l*=-1),r.left+=l,r.right+=l),r}function l(){var n,r,o,a,s;for(n=i("*[contentEditable=false]",t),a=0;a<n.length;a++)r=n[a],o=r.previousSibling,e.endsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(s.length-1,1)),o=r.nextSibling,e.startsWithCaretContainer(o)&&(s=o.data,1==s.length?o.parentNode.removeChild(o):o.deleteData(0,1));return null}function c(o,a){var l,c,f;return u(),n(a)?(g=e.insertBlock("p",a,o),l=r(a,o),i(g).css("top",l.top),m=i('<div class="mce-visual-caret" data-mce-bogus="all"></div>').css(l).appendTo(t),o&&m.addClass("mce-visual-caret-before"),d(),c=a.ownerDocument.createRange(),f=g.firstChild,c.setStart(f,0),c.setEnd(f,1),c):(g=e.insertInline(a,o),c=a.ownerDocument.createRange(),s(g.nextSibling)?(c.setStart(g,0),c.setEnd(g,0)):(c.setStart(g,1),c.setEnd(g,1)),c)}function u(){l(),g&&(e.remove(g),g=null),m&&(m.remove(),m=null),clearInterval(p)}function d(){p=a.setInterval(function(){i("div.mce-visual-caret",t).toggleClass("mce-visual-caret-hidden")},500)}function f(){a.clearInterval(p)}function h(){return".mce-visual-caret {position: absolute;background-color: black;background-color: currentcolor;}.mce-visual-caret-hidden {display: none;}*[data-mce-caret] {position: absolute;left: -1000px;right: auto;top: 0;margin: 0;padding: 0;}"}var p,m,g;return{show:c,hide:u,getCss:h,destroy:f}}}),r($e,[p,_,V],function(e,t,n){function r(i){function o(t){return e.map(t,function(e){return e=n.clone(e),e.node=i,e})}if(e.isArray(i))return e.reduce(i,function(e,t){return e.concat(r(t))},[]);if(t.isElement(i))return o(i.getClientRects());if(t.isText(i)){var a=i.ownerDocument.createRange();return a.setStart(i,0),a.setEnd(i,i.data.length),o(a.getClientRects())}}return{getClientRects:r}}),r(qe,[z,p,$e,W,We,Ve,$,V],function(e,t,n,r,i,o,a,s){function l(e,t,n,o){for(;o=i.findNode(o,e,r.isEditableCaretCandidate,t);)if(n(o))return}function c(e,r,i,o,a,s){function c(o){var s,l,c;for(c=n.getClientRects(o),-1==e&&(c=c.reverse()),s=0;s<c.length;s++)if(l=c[s],!i(l,h)){if(f.length>0&&r(l,t.last(f))&&u++,l.line=u,a(l))return!0;f.push(l)}}var u=0,d,f=[],h;return(h=t.last(s.getClientRects()))?(d=s.getNode(),c(d),l(e,o,c,d),f):f}function u(e,t){return t.line>e}function d(e,t){return t.line===e}function f(e,n,r,i){function l(n){return 1==e?t.last(n.getClientRects()):t.last(n.getClientRects())}var c=new o(n),u,d,f,h,p=[],m=0,g,v;1==e?(u=c.next,d=s.isBelow,f=s.isAbove,h=a.after(i)):(u=c.prev,d=s.isAbove,f=s.isBelow,h=a.before(i)),v=l(h);do if(h.isVisible()&&(g=l(h),!f(g,v))){if(p.length>0&&d(g,t.last(p))&&m++,g=s.clone(g),g.position=h,g.line=m,r(g))return p;p.push(g)}while(h=u(h));return p}var h=e.curry,p=h(c,-1,s.isAbove,s.isBelow),m=h(c,1,s.isBelow,s.isAbove);return{upUntil:p,downUntil:m,positionsUntil:f,isAboveLine:h(u),isLine:h(d)}}),r(je,[z,p,_,$e,V,We,W],function(e,t,n,r,i,o,a){function s(e,t){return Math.abs(e.left-t)}function l(e,t){return Math.abs(e.right-t)}function c(e,n){function r(e,t){return e>=t.left&&e<=t.right}return t.reduce(e,function(e,t){var i,o;return i=Math.min(s(e,n),l(e,n)),o=Math.min(s(t,n),l(t,n)),r(n,t)?t:r(n,e)?e:o==i&&m(t.node)?t:i>o?t:e})}function u(e,t,n,r){for(;r=g(r,e,a.isEditableCaretCandidate,t);)if(n(r))return}function d(e,n){function o(e,i){var o;return o=t.filter(r.getClientRects(i),function(t){return!e(t,n)}),a=a.concat(o),0===o.length}var a=[];return a.push(n),u(-1,e,v(o,i.isAbove),n.node),u(1,e,v(o,i.isBelow),n.node),a}function f(e){return t.filter(t.toArray(e.getElementsByTagName("*")),m)}function h(e,t){return{node:e.node,before:s(e,t)<l(e,t)}}function p(e,n,i){var o,a;return o=r.getClientRects(f(e)),o=t.filter(o,function(e){return i>=e.top&&i<=e.bottom}),a=c(o,n),a&&(a=c(d(e,a),n),a&&m(a.node))?h(a,n):null}var m=n.isContentEditableFalse,g=o.findNode,v=e.curry;return{findClosestClientRect:c,findLineNodeRects:d,closestCaret:p}}),r(Ye,[_],function(e){function t(e){function t(e){return n(e)}function r(t){c(e.getBody()).css("cursor",t)}function i(t){return t==h.element||e.dom.isChildOf(t,h.element)?!1:n(t)?!1:!0}function o(t){var n,i,o,a,s=0,l=0,u,d,p,m;0===t.button&&(n=t.screenX-h.screenX,i=t.screenY-h.screenY,u=Math.max(Math.abs(n),Math.abs(i)),!h.dragging&&u>10&&(h.dragging=!0,r("default"),h.clone=h.element.cloneNode(!0),o=f.getPos(h.element),h.relX=h.clientX-o.x,h.relY=h.clientY-o.y,h.width=h.element.offsetWidth,h.height=h.element.offsetHeight,c(h.clone).css({width:h.width,height:h.height}).removeAttr("data-mce-selected"),h.ghost=c("<div>").css({position:"absolute",opacity:.5,overflow:"hidden",width:h.width,height:h.height}).attr({"data-mce-bogus":"all",unselectable:"on",contenteditable:"false"}).addClass("mce-drag-container mce-reset").append(h.clone).appendTo(e.getBody())[0],a=e.dom.getViewPort(e.getWin()),h.maxX=a.w,h.maxY=a.h),h.dragging&&(e.selection.placeCaretAt(t.clientX,t.clientY),d=h.clientX+n-h.relX,p=h.clientY+i+5,d+h.width>h.maxX&&(s=d+h.width-h.maxX),p+h.height>h.maxY&&(l=p+h.height-h.maxY),m="BODY"!=e.getBody().nodeName?e.getBody().getBoundingClientRect():{left:0,top:0},c(h.ghost).css({left:d-m.left,top:p-m.top,width:h.width-s,height:h.height-l})))}function a(){h.dragging&&(e.selection.setRng(e.selection.getSel().getRangeAt(0)),i(e.selection.getNode())&&e.undoManager.transact(function(){e.insertContent(f.getOuterHTML(h.element)),c(h.element).remove()})),l()}function s(n){if(l(),t(n.target)){if(e.fire("dragstart",{target:n.target}).isDefaultPrevented())return;e.on("mousemove",o),e.on("mouseup",a),u!=d&&(f.bind(u,"mousemove",o),f.bind(u,"mouseup",a)),h={screenX:n.screenX,screenY:n.screenY,clientX:n.clientX,clientY:n.clientY,element:n.target}}}function l(){c(h.ghost).remove(),r(null),e.off("mousemove",o),e.off("mouseup",l),u!=d&&(f.unbind(u,"mousemove",o),f.unbind(u,"mouseup",l)),h={}}var c=e.$,u=document,d=e.getDoc(),f=e.dom,h={};e.on("mousedown",s),e.on("drop",function(t){var r=e.getDoc().elementFromPoint(t.clientX,t.clientY);(n(r)||n(e.dom.getContentEditableParent(r)))&&t.preventDefault()})}var n=e.isContentEditableFalse;return{init:t}}),r(Xe,[h,Ve,$,k,We,Ue,qe,je,_,T,I,z,p,u,Ye],function(e,t,n,r,i,o,a,s,l,c,u,d,f,h,p){function m(e,t){for(;t=e(t);)if(t.isVisible())return t;return t}function g(c){function d(e){return c.dom.isBlock(e)}function g(e){e&&c.selection.setRng(e)}function N(){return c.selection.getRng()}function _(e,t){c.selection.scrollIntoView(e,t)}function S(e,t,n){var r;return r=c.fire("ShowCaret",{target:t,direction:e,before:n}),r.isDefaultPrevented()?null:(_(t,-1===e),Z.show(n,t))}function k(e){var t;return t=c.fire("ObjectSelected",{target:e}),t.isDefaultPrevented()?null:(Z.hide(),T(e))}function T(e){var t=e.ownerDocument.createRange();return t.selectNode(e),t}function R(e,t){var n=i.isInSameBlock(e,t);return!n&&l.isBr(e.getNode())?!0:n}function A(e,t){return t=i.normalizeRange(e,K,t),-1==e?n.fromRangeStart(t):n.fromRangeEnd(t)}function B(e){return r.isCaretContainerBlock(e.startContainer)}function D(e,t,n,r){var i,o,a,s;return!r.collapsed&&(i=E(r),b(i))?S(e,i,-1==e):(s=B(r),o=A(e,r),n(o)?k(o.getNode(-1==e)):(o=t(o))?n(o)?S(e,o.getNode(-1==e),1==e):(a=t(o),n(a)&&R(o,a)?S(e,a.getNode(-1==e),1==e):s?z(o.toRange()):null):s?r:null)}function M(e,t,n){var r,i,o,l,c,u,d,h,p;if(p=E(n),r=A(e,n),i=t(K,a.isAboveLine(1),r),o=f.filter(i,a.isLine(1)),c=f.last(r.getClientRects()),w(r)&&(p=r.getNode()),x(r)&&(p=r.getNode(!0)),!c)return null;if(u=c.left,l=s.findClosestClientRect(o,u),l&&b(l.node))return d=Math.abs(u-l.left),h=Math.abs(u-l.right),S(e,l.node,h>d);if(p){var m=a.positionsUntil(e,K,a.isAboveLine(1),p);if(l=s.findClosestClientRect(f.filter(m,a.isLine(1)),u))return z(l.position.toRange());if(l=f.last(f.filter(m,a.isLine(0))))return z(l.position.toRange())}}function L(t,r){function i(){var t=c.dom.create(c.settings.forced_root_block);return(!e.ie||e.ie>=11)&&(t.innerHTML='<br data-mce-bogus="1">'),t}var o,a,s;if(r.collapsed&&c.settings.forced_root_block){if(o=c.dom.getParent(r.startContainer,"PRE"),!o)return;a=1==t?J(n.fromRangeStart(r)):Q(n.fromRangeStart(r)),a||(s=i(),1==t?c.$(o).after(s):c.$(o).before(s),c.selection.select(s,!0),c.selection.collapse())}}function P(e,t,n,r){var i;return(i=D(e,t,n,r))?i:(i=L(e,r),i?i:null)}function H(e,t,n){var r;return(r=M(e,t,n))?r:(r=L(e,n),r?r:null)}function O(){return ne("*[data-mce-caret]")[0]}function I(e){e=ne(e),e.attr("data-mce-caret")&&(Z.hide(),e.removeAttr("data-mce-caret"),e.removeAttr("data-mce-bogus"),e.removeAttr("style"),g(N()),_(e[0]))}function F(e){var t;return e=i.normalizeRange(1,K,e),t=n.fromRangeStart(e),b(t.getNode())?S(1,t.getNode(),!t.isAtEnd()):b(t.getNode(!0))?S(1,t.getNode(!0),!1):(Z.hide(),null)}function z(e){var t;return e&&e.collapsed?(t=F(e),t?t:e):e}function W(e){var t,i,o,a;return b(e)?(b(e.previousSibling)&&(o=e.previousSibling),i=Q(n.before(e)),i||(t=J(n.after(e))),t&&C(t.getNode())&&(a=t.getNode()),r.remove(e.previousSibling),r.remove(e.nextSibling),c.dom.remove(e),Y(),c.dom.isEmpty(c.getBody())?(c.setContent(""),void c.focus()):o?n.after(o).toRange():a?n.before(a).toRange():i?i.toRange():t?t.toRange():null):null}function V(e,t,n){var r,i;return!n.collapsed&&(r=E(n),b(r))?z(W(r)):(i=A(e,n),t(i)?z(W(i.getNode(-1==e))):void 0)}function U(){function e(e){var t=e(N());return t?(g(t),!0):!1}function t(e){for(var t=c.getBody();e&&e!=t;){if(y(e)||b(e))return e;e=e.parentNode}return null}function r(){var e,r=t(c.selection.getNode());y(r)&&d(r)&&c.dom.isEmpty(r)&&(e=c.dom.create("br",{"data-mce-bogus":"1"}),c.$(r).empty().append(e),c.selection.setRng(n.before(e).toRange()))}function i(e){var t=O();if(t)return"compositionstart"==e.type?(e.preventDefault(),e.stopPropagation(),void I(t)):void("&nbsp;"!=t.innerHTML&&I(t))}function o(e){var t;switch(e.keyCode){case u.DELETE:t=r();break;case u.BACKSPACE:t=r()}t&&e.preventDefault()}var l=v(P,1,J,w),f=v(P,-1,Q,x),m=v(V,1,w),C=v(V,-1,x),E=v(H,-1,a.upUntil),_=v(H,1,a.downUntil);c.on("mouseup",function(){var e=N();e.collapsed&&g(F(e))}),c.on("mousedown",function(e){var n;if(n=t(e.target))b(n)?(e.preventDefault(),j(k(n),!1)):c.selection.placeCaretAt(e.clientX,e.clientY);else{Y(),Z.hide();var r=s.closestCaret(K,e.clientX,e.clientY);r&&(e.preventDefault(),c.getBody().focus(),g(S(1,r.node,r.before)))}}),c.on("keydown",function(t){var n;if(!u.modifierPressed(t)){switch(t.keyCode){case u.RIGHT:n=e(l);break;case u.DOWN:n=e(_);break;case u.LEFT:n=e(f);break;case u.UP:n=e(E);break;case u.DELETE:n=e(m);break;case u.BACKSPACE:n=e(C);break;default:n=b(c.selection.getNode())}n&&t.preventDefault()}}),c.on("keyup compositionstart",function(e){i(e),o(e)},!0),c.on("cut",function(){var e=c.selection.getNode();b(e)&&h.setEditorTimeout(c,function(){g(z(W(e)))})}),c.on("getSelectionRange",function(e){var t=e.range;if(te){if(!te.parentNode)return void(te=null);t=t.cloneRange(),t.selectNode(te),e.range=t}}),c.on("setSelectionRange",function(e){var t;t=j(e.range),t&&(e.range=t)}),c.on("focus",function(){h.setEditorTimeout(c,function(){c.selection.setRng(z(c.selection.getRng()))})}),p.init(c)}function $(){var e=c.contentStyles,t=".mce-content-body";e.push(Z.getCss()),e.push(t+" .mce-offscreen-selection {position: absolute;left: -9999999999px;width: 100pxheight: 100px}"+t+" *[contentEditable=false] {cursor: default;}"+t+" *[contentEditable=true] {cursor: text;}")}function q(e){return r.isCaretContainer(e.startContainer)||r.isCaretContainer(e.endContainer)}function j(e,t){var n,r=c.$,i=c.dom,o,a,s,l,u,d,f;if(!e)return Y(),null;if(e.collapsed){if(Y(),!q(e)){if(f=A(1,e),b(f.getNode()))return S(1,f.getNode(),!f.isAtEnd());if(b(f.getNode(!0)))return S(1,f.getNode(!0),!1)}return null}return s=e.startContainer,l=e.startOffset,u=e.endOffset,3==s.nodeType&&0==l&&b(s.parentNode)&&(s=s.parentNode,l=i.nodeIndex(s),s=s.parentNode),1!=s.nodeType?(Y(),null):(u==l+1&&(n=s.childNodes[l]),b(n)?t!==!1&&(d=c.fire("ObjectSelected",{target:n}),d.isDefaultPrevented())?(Y(),null):(o=r("#"+ee),0===o.length&&(o=r('<div data-mce-bogus="all" class="mce-offscreen-selection"></div>').attr("id",ee),o.appendTo(c.getBody())),o.empty().append("\xa0").append(n.cloneNode(!0)).append("\xa0").css({top:i.getPos(n,c.getBody()).y}),e=c.dom.createRng(),e.setStart(o[0].firstChild,1),e.setEnd(o[0].lastChild,0),c.getBody().focus(),o[0].focus(),a=c.selection.getSel(),a.removeAllRanges(),a.addRange(e),c.$("*[data-mce-selected]").removeAttr("data-mce-selected"),n.setAttribute("data-mce-selected",1),te=n,e):(Y(),null))}function Y(){te&&(te.removeAttribute("data-mce-selected"),c.$("#"+ee).remove(),te=null)}function X(){Z.destroy(),te=null}var K=c.getBody(),G=new t(K),J=v(m,G.next),Q=v(m,G.prev),Z=new o(c.getBody(),d),ee="sel-"+c.dom.uniqueId(),te,ne=c.$;return e.ceFalse&&(U(),$()),{showBlockCaretContainer:I,destroy:X}}var v=d.curry,y=l.isContentEditableTrue,b=l.isContentEditableFalse,C=l.isElement,x=i.isAfterContentEditableFalse,w=i.isBeforeContentEditableFalse,E=c.getSelectedNode;return g}),r(Ke,[w,g,N,R,A,H,P,Y,G,J,Q,Z,ee,te,E,d,_e,Ae,B,M,De,h,m,u,Me,Le,Pe,ze,Xe],function(e,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,E,N,_,S,k,T,R){function A(e,t,i){var o=this,a,s;a=o.documentBaseUrl=i.documentBaseURL,s=i.baseURI,o.settings=t=L({id:e,theme:"modern",delta_width:0,delta_height:0,popup_css:"",plugins:"",document_base_url:a,add_form_submit_trigger:!0,submit_patch:!0,add_unload_trigger:!0,convert_urls:!0,relative_urls:!0,remove_script_host:!0,object_resizing:!0,doctype:"<!DOCTYPE html>",visual:!0,font_size_style_values:"xx-small,x-small,small,medium,large,x-large,xx-large",font_size_legacy_values:"xx-small,small,medium,large,x-large,xx-large,300%",forced_root_block:"p",hidden_input:!0,padd_empty_editor:!0,render_ui:!0,indentation:"30px",inline_styles:!0,convert_fonts_to_spans:!0,indent:"simple",indent_before:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",indent_after:"p,h1,h2,h3,h4,h5,h6,blockquote,div,title,style,pre,script,td,th,ul,ol,li,dl,dt,dd,area,table,thead,tfoot,tbody,tr,section,article,hgroup,aside,figure,figcaption,option,optgroup,datalist",validate:!0,entity_encoding:"named",url_converter:o.convertURL,url_converter_scope:o,ie7_compat:!0},t),r.language=t.language||"en",r.languageLoad=t.language_load,r.baseURL=i.baseURL,o.id=t.id=e,o.setDirty(!1),o.plugins={},o.documentBaseURI=new p(t.document_base_url||a,{base_uri:s}),o.baseURI=s,o.contentCSS=[],o.contentStyles=[],o.shortcuts=new k(o),o.loadedCSS={},o.editorCommands=new h(o),t.target&&(o.targetElm=t.target),o.suffix=i.suffix,o.editorManager=i,o.inline=t.inline,t.cache_suffix&&(w.cacheSuffix=t.cache_suffix.replace(/^[\?\&]+/,"")),t.override_viewport===!1&&(w.overrideViewPort=!1),i.fire("SetupEditor",o),o.execCallback("setup",o),o.$=n.overrideDefaults(function(){return{context:o.inline?o.getBody():o.getDoc(),element:o.getBody()}})}var B=e.DOM,D=r.ThemeManager,M=r.PluginManager,L=E.extend,P=E.each,H=E.explode,O=E.inArray,I=E.trim,F=E.resolve,z=g.Event,W=w.gecko,V=w.ie;return A.prototype={render:function(){function e(){B.unbind(window,"ready",e),n.render()}function t(){var e=m.ScriptLoader;if(r.language&&"en"!=r.language&&!r.language_url&&(r.language_url=n.editorManager.baseURL+"/langs/"+r.language+".js"),r.language_url&&e.add(r.language_url),r.theme&&"function"!=typeof r.theme&&"-"!=r.theme.charAt(0)&&!D.urls[r.theme]){var t=r.theme_url;t=t?n.documentBaseURI.toAbsolute(t):"themes/"+r.theme+"/theme"+o+".js",D.load(r.theme,t)}E.isArray(r.plugins)&&(r.plugins=r.plugins.join(" ")),P(r.external_plugins,function(e,t){M.load(t,e),r.plugins+=" "+t}),P(r.plugins.split(/[ ,]/),function(e){if(e=I(e),e&&!M.urls[e])if("-"==e.charAt(0)){e=e.substr(1,e.length);var t=M.dependencies(e);P(t,function(e){var t={prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"};e=M.createUrl(t,e),M.load(e.resource,e)})}else M.load(e,{prefix:"plugins/",resource:e,suffix:"/plugin"+o+".js"})}),e.loadQueue(function(){n.removed||n.init()})}var n=this,r=n.settings,i=n.id,o=n.suffix;if(!z.domLoaded)return void B.bind(window,"ready",e);if(n.getElement()&&w.contentEditable){
r.inline?n.inline=!0:(n.orgVisibility=n.getElement().style.visibility,n.getElement().style.visibility="hidden");var a=n.getElement().form||B.getParent(i,"form");a&&(n.formElement=a,r.hidden_input&&!/TEXTAREA|INPUT/i.test(n.getElement().nodeName)&&(B.insertAfter(B.create("input",{type:"hidden",name:i}),i),n.hasHiddenInput=!0),n.formEventDelegate=function(e){n.fire(e.type,e)},B.bind(a,"submit reset",n.formEventDelegate),n.on("reset",function(){n.setContent(n.startContent,{format:"raw"})}),!r.submit_patch||a.submit.nodeType||a.submit.length||a._mceOldSubmit||(a._mceOldSubmit=a.submit,a.submit=function(){return n.editorManager.triggerSave(),n.setDirty(!1),a._mceOldSubmit(a)})),n.windowManager=new v(n),n.notificationManager=new y(n),"xml"==r.encoding&&n.on("GetContent",function(e){e.save&&(e.content=B.encode(e.content))}),r.add_form_submit_trigger&&n.on("submit",function(){n.initialized&&n.save()}),r.add_unload_trigger&&(n._beforeUnload=function(){!n.initialized||n.destroyed||n.isHidden()||n.save({format:"raw",no_events:!0,set_dirty:!1})},n.editorManager.on("BeforeUnload",n._beforeUnload)),t()}},init:function(){function e(n){var r=M.get(n),i,o;if(i=M.urls[n]||t.documentBaseUrl.replace(/\/$/,""),n=I(n),r&&-1===O(m,n)){if(P(M.dependencies(n),function(t){e(t)}),t.plugins[n])return;o=new r(t,i,t.$),t.plugins[n]=o,o.init&&(o.init(t,i),m.push(n))}}var t=this,n=t.settings,r=t.getElement(),i,o,a,s,l,c,u,d,f,h,p,m=[];if(this.editorManager.i18n.setCode(n.language),t.rtl=n.rtl_ui||this.editorManager.i18n.rtl,t.editorManager.add(t),n.aria_label=n.aria_label||B.getAttrib(r,"aria-label",t.getLang("aria.rich_text_area")),n.theme&&("function"!=typeof n.theme?(n.theme=n.theme.replace(/-/,""),c=D.get(n.theme),t.theme=new c(t,D.urls[n.theme]),t.theme.init&&t.theme.init(t,D.urls[n.theme]||t.documentBaseUrl.replace(/\/$/,""),t.$)):t.theme=n.theme),P(n.plugins.replace(/\-/g,"").split(/[ ,]/),e),n.render_ui&&t.theme&&(t.orgDisplay=r.style.display,"function"!=typeof n.theme?(i=n.width||r.style.width||r.offsetWidth,o=n.height||r.style.height||r.offsetHeight,a=n.min_height||100,h=/^[0-9\.]+(|px)$/i,h.test(""+i)&&(i=Math.max(parseInt(i,10),100)),h.test(""+o)&&(o=Math.max(parseInt(o,10),a)),l=t.theme.renderUI({targetNode:r,width:i,height:o,deltaWidth:n.delta_width,deltaHeight:n.delta_height}),n.content_editable||(o=(l.iframeHeight||o)+("number"==typeof o?l.deltaHeight||0:""),a>o&&(o=a))):(l=n.theme(t,r),l.editorContainer.nodeType&&(l.editorContainer=l.editorContainer.id=l.editorContainer.id||t.id+"_parent"),l.iframeContainer.nodeType&&(l.iframeContainer=l.iframeContainer.id=l.iframeContainer.id||t.id+"_iframecontainer"),o=l.iframeHeight||r.offsetHeight),t.editorContainer=l.editorContainer),n.content_css&&P(H(n.content_css),function(e){t.contentCSS.push(t.documentBaseURI.toAbsolute(e))}),n.content_style&&t.contentStyles.push(n.content_style),n.content_editable)return r=s=l=null,t.initContentBody();for(t.iframeHTML=n.doctype+"<html><head>",n.document_base_url!=t.documentBaseUrl&&(t.iframeHTML+='<base href="'+t.documentBaseURI.getURI()+'" />'),!w.caretAfter&&n.ie7_compat&&(t.iframeHTML+='<meta http-equiv="X-UA-Compatible" content="IE=7" />'),t.iframeHTML+='<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />',p=0;p<t.contentCSS.length;p++){var g=t.contentCSS[p];t.iframeHTML+='<link type="text/css" rel="stylesheet" href="'+E._addCacheSuffix(g)+'" />',t.loadedCSS[g]=!0}d=n.body_id||"tinymce",-1!=d.indexOf("=")&&(d=t.getParam("body_id","","hash"),d=d[t.id]||d),f=n.body_class||"",-1!=f.indexOf("=")&&(f=t.getParam("body_class","","hash"),f=f[t.id]||""),n.content_security_policy&&(t.iframeHTML+='<meta http-equiv="Content-Security-Policy" content="'+n.content_security_policy+'" />'),t.iframeHTML+='</head><body id="'+d+'" class="mce-content-body '+f+'" data-id="'+t.id+'"><br></body></html>';var v='javascript:(function(){document.open();document.domain="'+document.domain+'";var ed = window.parent.tinymce.get("'+t.id+'");document.write(ed.iframeHTML);document.close();ed.initContentBody(true);})()';document.domain!=location.hostname&&w.ie&&w.ie<12&&(u=v);var y=B.create("iframe",{id:t.id+"_ifr",frameBorder:"0",allowTransparency:"true",title:t.editorManager.translate("Rich Text Area. Press ALT-F9 for menu. Press ALT-F10 for toolbar. Press ALT-0 for help"),style:{width:"100%",height:o,display:"block"}});if(y.onload=function(){y.onload=null,t.fire("load")},B.setAttrib(y,"src",u||'javascript:""'),t.contentAreaContainer=l.iframeContainer,t.iframeElement=y,s=B.add(l.iframeContainer,y),V)try{t.getDoc()}catch(b){s.src=u=v}l.editorContainer&&(B.get(l.editorContainer).style.display=t.orgDisplay,t.hidden=B.isHidden(l.editorContainer)),t.getElement().style.display="none",B.setAttrib(t.id,"aria-hidden",!0),u||t.initContentBody(),r=s=l=null},initContentBody:function(t){var n=this,r=n.settings,s=n.getElement(),h=n.getDoc(),p,m;r.inline||(n.getElement().style.visibility=n.orgVisibility),t||r.content_editable||(h.open(),h.write(n.iframeHTML),h.close()),r.content_editable&&(n.on("remove",function(){var e=this.getBody();B.removeClass(e,"mce-content-body"),B.removeClass(e,"mce-edit-focus"),B.setAttrib(e,"contentEditable",null)}),B.addClass(s,"mce-content-body"),n.contentDocument=h=r.content_document||document,n.contentWindow=r.content_window||window,n.bodyElement=s,r.content_document=r.content_window=null,r.root_name=s.nodeName.toLowerCase()),p=n.getBody(),p.disabled=!0,n.readonly=r.readonly,n.readonly||(n.inline&&"static"==B.getStyle(p,"position",!0)&&(p.style.position="relative"),p.contentEditable=n.getParam("content_editable_state",!0)),p.disabled=!1,n.editorUpload=new T(n),n.schema=new b(r),n.dom=new e(h,{keep_values:!0,url_converter:n.convertURL,url_converter_scope:n,hex_colors:r.force_hex_style_colors,class_filter:r.class_filter,update_styles:!0,root_element:n.inline?n.getBody():null,collect:r.content_editable,schema:n.schema,onSetAttrib:function(e){n.fire("SetAttrib",e)}}),n.parser=new C(r,n.schema),n.parser.addAttributeFilter("src,href,style,tabindex",function(e,t){for(var r=e.length,i,o=n.dom,a,s;r--;)if(i=e[r],a=i.attr(t),s="data-mce-"+t,!i.attributes.map[s]){if(0===a.indexOf("data:")||0===a.indexOf("blob:"))continue;"style"===t?(a=o.serializeStyle(o.parseStyle(a),i.name),a.length||(a=null),i.attr(s,a),i.attr(t,a)):"tabindex"===t?(i.attr(s,a),i.attr(t,null)):i.attr(s,n.convertURL(a,t,i.name))}}),n.parser.addNodeFilter("script",function(e){for(var t=e.length,n,r;t--;)n=e[t],r=n.attr("type")||"no/type",0!==r.indexOf("mce-")&&n.attr("type","mce-"+r)}),n.parser.addNodeFilter("#cdata",function(e){for(var t=e.length,n;t--;)n=e[t],n.type=8,n.name="#comment",n.value="[CDATA["+n.value+"]]"}),n.parser.addNodeFilter("p,h1,h2,h3,h4,h5,h6,div",function(e){for(var t=e.length,r,i=n.schema.getNonEmptyElements();t--;)r=e[t],r.isEmpty(i)&&(r.append(new o("br",1)).shortEnded=!0)}),n.serializer=new a(r,n),n.selection=new l(n.dom,n.getWin(),n.serializer,n),n.formatter=new c(n),n.undoManager=new u(n),n.forceBlocks=new f(n),n.enterKey=new d(n),n._nodeChangeDispatcher=new i(n),n._selectionOverrides=new R(n),n.fire("PreInit"),r.browser_spellcheck||r.gecko_spellcheck||(h.body.spellcheck=!1,B.setAttrib(p,"spellcheck","false")),n.fire("PostRender"),n.quirks=new x(n),r.directionality&&(p.dir=r.directionality),r.nowrap&&(p.style.whiteSpace="nowrap"),r.protect&&n.on("BeforeSetContent",function(e){P(r.protect,function(t){e.content=e.content.replace(t,function(e){return"<!--mce:protected "+escape(e)+"-->"})})}),n.on("SetContent",function(){n.addVisual(n.getBody())}),r.padd_empty_editor&&n.on("PostProcess",function(e){e.content=e.content.replace(/^(<p[^>]*>(&nbsp;|&#160;|\s|\u00a0|)<\/p>[\r\n]*|<br \/>[\r\n]*)$/,"")}),n.load({initial:!0,format:"html"}),n.startContent=n.getContent({format:"raw"}),n.initialized=!0,n.bindPendingEventDelegates(),n.fire("init"),n.focus(!0),n.nodeChanged({initial:!0}),n.execCallback("init_instance_callback",n),n.contentStyles.length>0&&(m="",P(n.contentStyles,function(e){m+=e+"\r\n"}),n.dom.addStyle(m)),P(n.contentCSS,function(e){n.loadedCSS[e]||(n.dom.loadCSS(e),n.loadedCSS[e]=!0)}),r.auto_focus&&N.setEditorTimeout(n,function(){var e;e=r.auto_focus===!0?n:n.editorManager.get(r.auto_focus),e.destroyed||e.focus()},100),s=h=p=null},focus:function(e){function t(e){return n.dom.getParent(e,function(e){return"true"===n.dom.getContentEditable(e)})}var n=this,r=n.selection,i=n.settings.content_editable,o,a,s=n.getDoc(),l=n.getBody(),c;if(!e){if(o=r.getRng(),o.item&&(a=o.item(0)),n._refreshContentEditable(),c=t(r.getNode()),n.$.contains(l,c))return c.focus(),r.normalize(),void n.editorManager.setActive(n);if(i||(w.opera||n.getBody().focus(),n.getWin().focus()),W||i){if(l.setActive)try{l.setActive()}catch(u){l.focus()}else l.focus();i&&r.normalize()}a&&a.ownerDocument==s&&(o=s.body.createControlRange(),o.addElement(a),o.select())}n.editorManager.setActive(n)},execCallback:function(e){var t=this,n=t.settings[e],r;if(n)return t.callbackLookup&&(r=t.callbackLookup[e])&&(n=r.func,r=r.scope),"string"==typeof n&&(r=n.replace(/\.\w+$/,""),r=r?F(r):0,n=F(n),t.callbackLookup=t.callbackLookup||{},t.callbackLookup[e]={func:n,scope:r}),n.apply(r||t,Array.prototype.slice.call(arguments,1))},translate:function(e){var t=this.settings.language||"en",n=this.editorManager.i18n;return e?n.data[t+"."+e]||e.replace(/\{\#([^\}]+)\}/g,function(e,r){return n.data[t+"."+r]||"{#"+r+"}"}):""},getLang:function(e,n){return this.editorManager.i18n.data[(this.settings.language||"en")+"."+e]||(n!==t?n:"{#"+e+"}")},getParam:function(e,t,n){var r=e in this.settings?this.settings[e]:t,i;return"hash"===n?(i={},"string"==typeof r?P(r.indexOf("=")>0?r.split(/[;,](?![^=;,]*(?:[;,]|$))/):r.split(","),function(e){e=e.split("="),e.length>1?i[I(e[0])]=I(e[1]):i[I(e[0])]=I(e)}):i=r,i):r},nodeChanged:function(e){this._nodeChangeDispatcher.nodeChanged(e)},addButton:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),t.text||t.icon||(t.icon=e),n.buttons=n.buttons||{},t.tooltip=t.tooltip||t.title,n.buttons[e]=t},addMenuItem:function(e,t){var n=this;t.cmd&&(t.onclick=function(){n.execCommand(t.cmd)}),n.menuItems=n.menuItems||{},n.menuItems[e]=t},addContextToolbar:function(e,t){var n=this,r;n.contextToolbars=n.contextToolbars||[],"string"==typeof e&&(r=e,e=function(e){return n.dom.is(e,r)}),n.contextToolbars.push({predicate:e,items:t})},addCommand:function(e,t,n){this.editorCommands.addCommand(e,t,n)},addQueryStateHandler:function(e,t,n){this.editorCommands.addQueryStateHandler(e,t,n)},addQueryValueHandler:function(e,t,n){this.editorCommands.addQueryValueHandler(e,t,n)},addShortcut:function(e,t,n,r){this.shortcuts.add(e,t,n,r)},execCommand:function(e,t,n,r){return this.editorCommands.execCommand(e,t,n,r)},queryCommandState:function(e){return this.editorCommands.queryCommandState(e)},queryCommandValue:function(e){return this.editorCommands.queryCommandValue(e)},queryCommandSupported:function(e){return this.editorCommands.queryCommandSupported(e)},show:function(){var e=this;e.hidden&&(e.hidden=!1,e.inline?e.getBody().contentEditable=!0:(B.show(e.getContainer()),B.hide(e.id)),e.load(),e.fire("show"))},hide:function(){var e=this,t=e.getDoc();e.hidden||(V&&t&&!e.inline&&t.execCommand("SelectAll"),e.save(),e.inline?(e.getBody().contentEditable=!1,e==e.editorManager.focusedEditor&&(e.editorManager.focusedEditor=null)):(B.hide(e.getContainer()),B.setStyle(e.id,"display",e.orgDisplay)),e.hidden=!0,e.fire("hide"))},isHidden:function(){return!!this.hidden},setProgressState:function(e,t){this.fire("ProgressState",{state:e,time:t})},load:function(e){var n=this,r=n.getElement(),i;return r?(e=e||{},e.load=!0,i=n.setContent(r.value!==t?r.value:r.innerHTML,e),e.element=r,e.no_events||n.fire("LoadContent",e),e.element=r=null,i):void 0},save:function(e){var t=this,n=t.getElement(),r,i;if(n&&t.initialized)return e=e||{},e.save=!0,e.element=n,r=e.content=t.getContent(e),e.no_events||t.fire("SaveContent",e),"raw"==e.format&&t.fire("RawSaveContent",e),r=e.content,/TEXTAREA|INPUT/i.test(n.nodeName)?n.value=r:(t.inline||(n.innerHTML=r),(i=B.getParent(t.id,"form"))&&P(i.elements,function(e){return e.name==t.id?(e.value=r,!1):void 0})),e.element=n=null,e.set_dirty!==!1&&t.setDirty(!1),r},setContent:function(e,t){var n=this,r=n.getBody(),i,o;return t=t||{},t.format=t.format||"html",t.set=!0,t.content=e,t.no_events||n.fire("BeforeSetContent",t),e=t.content,0===e.length||/^\s+$/.test(e)?(o=V&&11>V?"":'<br data-mce-bogus="1">',"TABLE"==r.nodeName?e="<tr><td>"+o+"</td></tr>":/^(UL|OL)$/.test(r.nodeName)&&(e="<li>"+o+"</li>"),i=n.settings.forced_root_block,i&&n.schema.isValidChild(r.nodeName.toLowerCase(),i.toLowerCase())?(e=o,e=n.dom.createHTML(i,n.settings.forced_root_block_attrs,e)):V||e||(e='<br data-mce-bogus="1">'),n.dom.setHTML(r,e),n.fire("SetContent",t)):("raw"!==t.format&&(e=new s({validate:n.validate},n.schema).serialize(n.parser.parse(e,{isRootContent:!0}))),t.content=I(e),n.dom.setHTML(r,t.content),t.no_events||n.fire("SetContent",t)),t.content},getContent:function(e){var t=this,n,r=t.getBody();return e=e||{},e.format=e.format||"html",e.get=!0,e.getInner=!0,e.no_events||t.fire("BeforeGetContent",e),n="raw"==e.format?t.serializer.getTrimmedContent():"text"==e.format?r.innerText||r.textContent:t.serializer.serialize(r,e),"text"!=e.format?e.content=I(n):e.content=n,e.no_events||t.fire("GetContent",e),e.content},insertContent:function(e,t){t&&(e=L({content:e},t)),this.execCommand("mceInsertContent",!1,e)},isDirty:function(){return!this.isNotDirty},setDirty:function(e){var t=!this.isNotDirty;this.isNotDirty=!e,e&&e!=t&&this.fire("dirty")},setMode:function(e){S.setMode(this,e)},getContainer:function(){var e=this;return e.container||(e.container=B.get(e.editorContainer||e.id+"_parent")),e.container},getContentAreaContainer:function(){return this.contentAreaContainer},getElement:function(){return this.targetElm||(this.targetElm=B.get(this.id)),this.targetElm},getWin:function(){var e=this,t;return e.contentWindow||(t=e.iframeElement,t&&(e.contentWindow=t.contentWindow)),e.contentWindow},getDoc:function(){var e=this,t;return e.contentDocument||(t=e.getWin(),t&&(e.contentDocument=t.document)),e.contentDocument},getBody:function(){return this.bodyElement||this.getDoc().body},convertURL:function(e,t,n){var r=this,i=r.settings;return i.urlconverter_callback?r.execCallback("urlconverter_callback",e,n,!0,t):!i.convert_urls||n&&"LINK"==n.nodeName||0===e.indexOf("file:")||0===e.length?e:i.relative_urls?r.documentBaseURI.toRelative(e):e=r.documentBaseURI.toAbsolute(e,i.remove_script_host)},addVisual:function(e){var n=this,r=n.settings,i=n.dom,o;e=e||n.getBody(),n.hasVisual===t&&(n.hasVisual=r.visual),P(i.select("table,a",e),function(e){var t;switch(e.nodeName){case"TABLE":return o=r.visual_table_class||"mce-item-table",t=i.getAttrib(e,"border"),void(t&&"0"!=t||!n.hasVisual?i.removeClass(e,o):i.addClass(e,o));case"A":return void(i.getAttrib(e,"href",!1)||(t=i.getAttrib(e,"name")||e.id,o=r.visual_anchor_class||"mce-item-anchor",t&&n.hasVisual?i.addClass(e,o):i.removeClass(e,o)))}}),n.fire("VisualAid",{element:e,hasVisual:n.hasVisual})},remove:function(){var e=this;e.removed||(e.save(),e.removed=1,e.unbindAllNativeEvents(),e.hasHiddenInput&&B.remove(e.getElement().nextSibling),e.inline||(V&&10>V&&e.getDoc().execCommand("SelectAll",!1,null),B.setStyle(e.id,"display",e.orgDisplay),e.getBody().onload=null),e.fire("remove"),e.editorManager.remove(e),B.remove(e.getContainer()),e._selectionOverrides.destroy(),e.editorUpload.destroy(),e.destroy())},destroy:function(e){var t=this,n;if(!t.destroyed){if(!e&&!t.removed)return void t.remove();e||(t.editorManager.off("beforeunload",t._beforeUnload),t.theme&&t.theme.destroy&&t.theme.destroy(),t.selection.destroy(),t.dom.destroy()),n=t.formElement,n&&(n._mceOldSubmit&&(n.submit=n._mceOldSubmit,n._mceOldSubmit=null),B.unbind(n,"submit reset",t.formEventDelegate)),t.contentAreaContainer=t.formElement=t.container=t.editorContainer=null,t.bodyElement=t.contentDocument=t.contentWindow=null,t.iframeElement=t.targetElm=null,t.selection&&(t.selection=t.selection.win=t.selection.dom=t.selection.dom.doc=null),t.destroyed=1}},uploadImages:function(e){return this.editorUpload.uploadImages(e)},_scanForImages:function(){return this.editorUpload.scanForImages()},_refreshContentEditable:function(){var e=this,t,n;e._isHidden()&&(t=e.getBody(),n=t.parentNode,n.removeChild(t),n.appendChild(t),t.focus())},_isHidden:function(){var e;return W?(e=this.selection.getSel(),!e||!e.rangeCount||0===e.rangeCount):0}},L(A.prototype,_),A}),r(Ge,[],function(){var e={},t="en";return{setCode:function(e){e&&(t=e,this.rtl=this.data[e]?"rtl"===this.data[e]._dir:!1)},getCode:function(){return t},rtl:!1,add:function(t,n){var r=e[t];r||(e[t]=r={});for(var i in n)r[i]=n[i];this.setCode(t)},translate:function(n){var r;if(r=e[t],r||(r={}),"undefined"==typeof n)return n;if("string"!=typeof n&&n.raw)return n.raw;if(n.push){var i=n.slice(1);n=(r[n[0]]||n[0]).replace(/\{([0-9]+)\}/g,function(e,t){return i[t]})}return(r[n]||n).replace(/{context:\w+}$/,"")},data:e}}),r(Je,[w,u,h],function(e,t,n){function r(e){function l(){try{return document.activeElement}catch(e){return document.body}}function c(e,t){if(t&&t.startContainer){if(!e.isChildOf(t.startContainer,e.getRoot())||!e.isChildOf(t.endContainer,e.getRoot()))return;return{startContainer:t.startContainer,startOffset:t.startOffset,endContainer:t.endContainer,endOffset:t.endOffset}}return t}function u(e,t){var n;return t.startContainer?(n=e.getDoc().createRange(),n.setStart(t.startContainer,t.startOffset),n.setEnd(t.endContainer,t.endOffset)):n=t,n}function d(e){return!!s.getParent(e,r.isEditorUIElement)}function f(r){var f=r.editor;f.on("init",function(){(f.inline||n.ie)&&("onbeforedeactivate"in document&&n.ie<9?f.dom.bind(f.getBody(),"beforedeactivate",function(e){if(e.target==f.getBody())try{f.lastRng=f.selection.getRng()}catch(t){}}):f.on("nodechange mouseup keyup",function(e){var t=l();"nodechange"==e.type&&e.selectionChange||(t&&t.id==f.id+"_ifr"&&(t=f.getBody()),f.dom.isChildOf(t,f.getBody())&&(f.lastRng=f.selection.getRng()))}),n.webkit&&!i&&(i=function(){var t=e.activeEditor;if(t&&t.selection){var n=t.selection.getRng();n&&!n.collapsed&&(f.lastRng=n)}},s.bind(document,"selectionchange",i)))}),f.on("setcontent",function(){f.lastRng=null}),f.on("mousedown",function(){f.selection.lastFocusBookmark=null}),f.on("focusin",function(){var t=e.focusedEditor,n;f.selection.lastFocusBookmark&&(n=u(f,f.selection.lastFocusBookmark),f.selection.lastFocusBookmark=null,f.selection.setRng(n)),t!=f&&(t&&t.fire("blur",{focusedEditor:f}),e.setActive(f),e.focusedEditor=f,f.fire("focus",{blurredEditor:t}),f.focus(!0)),f.lastRng=null}),f.on("focusout",function(){t.setEditorTimeout(f,function(){var t=e.focusedEditor;d(l())||t!=f||(f.fire("blur",{focusedEditor:null}),e.focusedEditor=null,f.selection&&(f.selection.lastFocusBookmark=null))})}),o||(o=function(t){var n=e.activeEditor;n&&t.target.ownerDocument==document&&(n.selection&&t.target!=n.getBody()&&(n.selection.lastFocusBookmark=c(n.dom,n.lastRng)),t.target==document.body||d(t.target)||e.focusedEditor!=n||(n.fire("blur",{focusedEditor:null}),e.focusedEditor=null))},s.bind(document,"focusin",o)),f.inline&&!a&&(a=function(t){var n=e.activeEditor;if(n.inline&&!n.dom.isChildOf(t.target,n.getBody())){var r=n.selection.getRng();r.collapsed||(n.lastRng=r)}},s.bind(document,"mouseup",a))}function h(t){e.focusedEditor==t.editor&&(e.focusedEditor=null),e.activeEditor||(s.unbind(document,"selectionchange",i),s.unbind(document,"focusin",o),s.unbind(document,"mouseup",a),i=o=a=null)}e.on("AddEditor",f),e.on("RemoveEditor",h)}var i,o,a,s=e.DOM;return r.isEditorUIElement=function(e){return-1!==e.className.toString().indexOf("mce-")},r}),r(Qe,[Ke,g,w,te,h,m,oe,Ge,Je],function(e,t,n,r,i,o,a,s,l){function c(e){m(b.editors,function(t){t.fire("ResizeWindow",e)})}function u(e,n){n!==C&&(n?t(window).on("resize",c):t(window).off("resize",c),C=n)}function d(e){var t=b.editors,n;delete t[e.id];for(var r=0;r<t.length;r++)if(t[r]==e){t.splice(r,1),n=!0;break}return b.activeEditor==e&&(b.activeEditor=t[0]),b.focusedEditor==e&&(b.focusedEditor=null),n}function f(e){return e&&!(e.getContainer()||e.getBody()).parentNode&&(d(e),e.unbindAllNativeEvents(),e.destroy(!0),e=null),e}var h=n.DOM,p=o.explode,m=o.each,g=o.extend,v=0,y,b,C=!1;return b={$:t,majorVersion:"4",minorVersion:"3.3",releaseDate:"2016-01-14",editors:[],i18n:s,activeEditor:null,setup:function(){var e=this,t,n,i="",o,a;if(n=document.location.href,/^[^:]+:\/\/\/?[^\/]+\//.test(n)&&(n=n.replace(/[\?#].*$/,"").replace(/[\/\\][^\/]+$/,""),/[\/\\]$/.test(n)||(n+="/")),o=window.tinymce||window.tinyMCEPreInit)t=o.base||o.baseURL,i=o.suffix;else{for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){a=s[c].src;var u=a.substring(a.lastIndexOf("/"));if(/tinymce(\.full|\.jquery|)(\.min|\.dev|)\.js/.test(a)){-1!=u.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/"));break}}!t&&document.currentScript&&(a=document.currentScript.src,-1!=a.indexOf(".min")&&(i=".min"),t=a.substring(0,a.lastIndexOf("/")))}e.baseURL=new r(n).toAbsolute(t),e.documentBaseURL=n,e.baseURI=new r(e.baseURL),e.suffix=i,e.focusManager=new l(e)},init:function(t){function n(e){var t=e.id;return t||(t=e.name,t=t&&!h.get(t)?e.name:h.uniqueId(),e.setAttribute("id",t)),t}function r(t,n,r){if(!f(s.get(t))){var i=new e(t,n,s);i.targetElm=i.targetElm||r,l.push(i),i.render()}}function i(e){var n=t[e];if(n)return n.apply(s,Array.prototype.slice.call(arguments,2))}function o(e,t){return t.constructor===RegExp?t.test(e.className):h.hasClass(e,t)}function a(){var e,s;if(h.unbind(window,"ready",a),i("onpageload"),t.types)return void m(t.types,function(e){m(h.select(e.selector),function(i){r(n(i),g({},t,e),i)})});if(t.selector)return void m(h.select(t.selector),function(e){r(n(e),t,e)});switch(t.target&&r(n(t.target),t),t.mode){case"exact":e=t.elements||"",e.length>0&&m(p(e),function(e){var n;(n=h.get(e))?r(e,t,n):m(document.forms,function(n){m(n.elements,function(n){n.name===e&&(e="mce_editor_"+v++,h.setAttrib(n,"id",e),r(e,t,n))})})});break;case"textareas":case"specific_textareas":m(h.select("textarea"),function(e){t.editor_deselector&&o(e,t.editor_deselector)||(!t.editor_selector||o(e,t.editor_selector))&&r(n(e),t,e)})}t.oninit&&(e=s=0,m(l,function(t){s++,t.initialized?e++:t.on("init",function(){e++,e==s&&i("oninit")}),e==s&&i("oninit")}))}var s=this,l=[];s.settings=t,h.bind(window,"ready",a)},get:function(e){return arguments.length?e in this.editors?this.editors[e]:null:this.editors},add:function(e){var t=this,n=t.editors;return n[e.id]=e,n.push(e),u(n,!0),t.activeEditor=e,t.fire("AddEditor",{editor:e}),y||(y=function(){t.fire("BeforeUnload")},h.bind(window,"beforeunload",y)),e},createEditor:function(t,n){return this.add(new e(t,n,this))},remove:function(e){var t=this,n,r=t.editors,i;{if(e)return"string"==typeof e?(e=e.selector||e,void m(h.select(e),function(e){i=r[e.id],i&&t.remove(i)})):(i=e,r[i.id]?(d(i)&&t.fire("RemoveEditor",{editor:i}),r.length||h.unbind(window,"beforeunload",y),i.remove(),u(r,r.length>0),i):null);for(n=r.length-1;n>=0;n--)t.remove(r[n])}},execCommand:function(t,n,r){var i=this,o=i.get(r);switch(t){case"mceAddEditor":return i.get(r)||new e(r,i.settings,i).render(),!0;case"mceRemoveEditor":return o&&o.remove(),!0;case"mceToggleEditor":return o?(o.isHidden()?o.show():o.hide(),!0):(i.execCommand("mceAddEditor",0,r),!0)}return i.activeEditor?i.activeEditor.execCommand(t,n,r):!1},triggerSave:function(){m(this.editors,function(e){e.save()})},addI18n:function(e,t){s.add(e,t)},translate:function(e){return s.translate(e)},setActive:function(e){var t=this.activeEditor;this.activeEditor!=e&&(t&&t.fire("deactivate",{relatedTarget:e}),e.fire("activate",{relatedTarget:t})),this.activeEditor=e}},g(b,a),b.setup(),window.tinymce=window.tinyMCE=b,b}),r(Ze,[Qe,m],function(e,t){var n=t.each,r=t.explode;e.on("AddEditor",function(e){var t=e.editor;t.on("preInit",function(){function e(e,t){n(t,function(t,n){t&&s.setStyle(e,n,t)}),s.rename(e,"span")}function i(e){s=t.dom,l.convert_fonts_to_spans&&n(s.select("font,u,strike",e.node),function(e){o[e.nodeName.toLowerCase()](s,e)})}var o,a,s,l=t.settings;l.inline_styles&&(a=r(l.font_size_legacy_values),o={font:function(t,n){e(n,{backgroundColor:n.style.backgroundColor,color:n.color,fontFamily:n.face,fontSize:a[parseInt(n.size,10)-1]})},u:function(n,r){"html4"===t.settings.schema&&e(r,{textDecoration:"underline"})},strike:function(t,n){e(n,{textDecoration:"line-through"})}},t.on("PreProcess SetContent",i))})})}),r(et,[oe,m],function(e,t){var n={send:function(e){function r(){!e.async||4==i.readyState||o++>1e4?(e.success&&1e4>o&&200==i.status?e.success.call(e.success_scope,""+i.responseText,i,e):e.error&&e.error.call(e.error_scope,o>1e4?"TIMED_OUT":"GENERAL",i,e),i=null):setTimeout(r,10)}var i,o=0;if(e.scope=e.scope||this,e.success_scope=e.success_scope||e.scope,e.error_scope=e.error_scope||e.scope,e.async=e.async===!1?!1:!0,e.data=e.data||"",n.fire("beforeInitialize",{settings:e}),i=new XMLHttpRequest){if(i.overrideMimeType&&i.overrideMimeType(e.content_type),i.open(e.type||(e.data?"POST":"GET"),e.url,e.async),e.crossDomain&&(i.withCredentials=!0),e.content_type&&i.setRequestHeader("Content-Type",e.content_type),e.requestheaders&&t.each(e.requestheaders,function(e){i.setRequestHeader(e.key,e.value)}),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i=n.fire("beforeSend",{xhr:i,settings:e}).xhr,i.send(e.data),!e.async)return r();setTimeout(r,10)}}};return t.extend(n,e),n}),r(tt,[],function(){function e(t,n){var r,i,o,a;if(n=n||'"',null===t)return"null";if(o=typeof t,"string"==o)return i="\bb	t\nn\ff\rr\"\"''\\\\",n+t.replace(/([\u0080-\uFFFF\x00-\x1f\"\'\\])/g,function(e,t){return'"'===n&&"'"===e?e:(r=i.indexOf(t),r+1?"\\"+i.charAt(r+1):(e=t.charCodeAt().toString(16),"\\u"+"0000".substring(e.length)+e))})+n;if("object"==o){if(t.hasOwnProperty&&"[object Array]"===Object.prototype.toString.call(t)){for(r=0,i="[";r<t.length;r++)i+=(r>0?",":"")+e(t[r],n);return i+"]"}i="{";for(a in t)t.hasOwnProperty(a)&&(i+="function"!=typeof t[a]?(i.length>1?","+n:n)+a+n+":"+e(t[a],n):"");return i+"}"}return""+t}return{serialize:e,parse:function(e){try{return window[String.fromCharCode(101)+"val"]("("+e+")")}catch(t){}}}}),r(nt,[tt,et,m],function(e,t,n){function r(e){this.settings=i({},e),this.count=0}var i=n.extend;return r.sendRPC=function(e){return(new r).send(e)},r.prototype={send:function(n){var r=n.error,o=n.success;n=i(this.settings,n),n.success=function(t,i){t=e.parse(t),"undefined"==typeof t&&(t={error:"JSON Parse error."}),t.error?r.call(n.error_scope||n.scope,t.error,i):o.call(n.success_scope||n.scope,t.result)},n.error=function(e,t){r&&r.call(n.error_scope||n.scope,e,t)},n.data=e.serialize({id:n.id||"c"+this.count++,method:n.method,params:n.params}),n.content_type="application/json",t.send(n)}},r}),r(rt,[w],function(e){return{callbacks:{},count:0,send:function(n){var r=this,i=e.DOM,o=n.count!==t?n.count:r.count,a="tinymce_jsonp_"+o;r.callbacks[o]=function(e){i.remove(a),delete r.callbacks[o],n.callback(e)},i.add(i.doc.body,"script",{id:a,src:n.url,type:"text/javascript"}),r.count++}}}),r(it,[],function(){function e(){s=[];for(var e in a)s.push(e);i.length=s.length}function n(){function n(e){var n,r;return r=e!==t?u+e:i.indexOf(",",u),-1===r||r>i.length?null:(n=i.substring(u,r),u=r+1,n)}var r,i,s,u=0;if(a={},c){o.load(l),i=o.getAttribute(l)||"";do{var d=n();if(null===d)break;if(r=n(parseInt(d,32)||0),null!==r){if(d=n(),null===d)break;s=n(parseInt(d,32)||0),r&&(a[r]=s)}}while(null!==r);e()}}function r(){var t,n="";if(c){for(var r in a)t=a[r],n+=(n?",":"")+r.length.toString(32)+","+r+","+t.length.toString(32)+","+t;o.setAttribute(l,n);try{o.save(l)}catch(i){}e()}}var i,o,a,s,l,c;try{if(window.localStorage)return localStorage}catch(u){}return l="tinymce",o=document.documentElement,c=!!o.addBehavior,c&&o.addBehavior("#default#userData"),i={key:function(e){return s[e]},getItem:function(e){return e in a?a[e]:null},setItem:function(e,t){a[e]=""+t,r()},removeItem:function(e){delete a[e],r()},clear:function(){a={},r()}},n(),i}),r(ot,[w,d,E,N,m,h],function(e,t,n,r,i,o){var a=window.tinymce;return a.DOM=e.DOM,a.ScriptLoader=n.ScriptLoader,a.PluginManager=r.PluginManager,a.ThemeManager=r.ThemeManager,a.dom=a.dom||{},a.dom.Event=t.Event,i.each(i,function(e,t){a[t]=e}),i.each("isOpera isWebKit isIE isGecko isMac".split(" "),function(e){a[e]=o[e.substr(2).toLowerCase()]}),{}}),r(at,[ne,m],function(e,t){return e.extend({Defaults:{firstControlClass:"first",lastControlClass:"last"},init:function(e){this.settings=t.extend({},this.Defaults,e)},preRender:function(e){e.bodyClasses.add(this.settings.containerClass)},applyClasses:function(e){var t=this,n=t.settings,r,i,o,a;r=n.firstControlClass,i=n.lastControlClass,e.each(function(e){e.classes.remove(r).remove(i).add(n.controlClass),e.visible()&&(o||(o=e),a=e)}),o&&o.classes.add(r),a&&a.classes.add(i)},renderHtml:function(e){var t=this,n="";return t.applyClasses(e.items()),e.items().each(function(e){n+=e.renderHtml()}),n},recalc:function(){},postRender:function(){},isNative:function(){return!1}})}),r(st,[at],function(e){return e.extend({Defaults:{containerClass:"abs-layout",controlClass:"abs-layout-item"},recalc:function(e){e.items().filter(":visible").each(function(e){var t=e.settings;e.layoutRect({x:t.x,y:t.y,w:t.w,h:t.h}),e.recalc&&e.recalc()})},renderHtml:function(e){return'<div id="'+e._id+'-absend" class="'+e.classPrefix+'abs-end"></div>'+this._super(e)}})}),r(lt,[ke],function(e){return e.extend({Defaults:{classes:"widget btn",role:"button"},init:function(e){var t=this,n;t._super(e),e=t.settings,n=t.settings.size,t.on("click mousedown",function(e){e.preventDefault()}),t.on("touchstart",function(e){t.fire("click",e),e.preventDefault()}),e.subtype&&t.classes.add(e.subtype),n&&t.classes.add("btn-"+n),e.icon&&t.icon(e.icon)},icon:function(e){return arguments.length?(this.state.set("icon",e),this):this.state.get("icon")},repaint:function(){var e=this.getEl().firstChild,t;e&&(t=e.style,t.width=t.height="100%"),this._super()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("icon"),i,o=e.state.get("text"),a="";return i=e.settings.image,i?(r="none","string"!=typeof i&&(i=window.getSelection?i[0]:i[1]),i=" style=\"background-image: url('"+i+"')\""):i="",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),r=e.settings.icon?n+"ico "+n+"i-"+r:"",'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button role="presentation" type="button" tabindex="-1">'+(r?'<i class="'+r+'"'+i+"></i>":"")+a+"</button></div>"},bindStates:function(){function e(e){var i=n("span."+r,t.getEl());e?(i[0]||(n("button:first",t.getEl()).append('<span class="'+r+'"></span>'),i=n("span."+r,t.getEl())),i.html(t.encode(e))):i.remove(),t.classes.toggle("btn-has-text",!!e)}var t=this,n=t.$,r=t.classPrefix+"txt";return t.state.on("change:text",function(t){e(t.value)}),t.state.on("change:icon",function(n){var r=n.value,i=t.classPrefix;t.settings.icon=r,r=r?i+"ico "+i+"i-"+t.settings.icon:"";var o=t.getEl().firstChild,a=o.getElementsByTagName("i")[0];r?(a&&a==o.firstChild||(a=document.createElement("i"),o.insertBefore(a,o.firstChild)),a.className=r):a&&o.removeChild(a),e(t.state.get("text"))}),t._super()}})}),r(ct,[ge],function(e){return e.extend({Defaults:{defaultType:"button",role:"group"},renderHtml:function(){var e=this,t=e._layout;return e.classes.add("btn-group"),e.preRender(),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'"><div id="'+e._id+'-body">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(ut,[ke],function(e){return e.extend({Defaults:{classes:"checkbox",role:"checkbox",checked:!1},init:function(e){var t=this;t._super(e),t.on("click mousedown",function(e){e.preventDefault()}),t.on("click",function(e){e.preventDefault(),t.disabled()||t.checked(!t.checked())}),t.checked(t.settings.checked);
},checked:function(e){return arguments.length?(this.state.set("checked",e),this):this.state.get("checked")},value:function(e){return arguments.length?this.checked(e):this.checked()},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'" unselectable="on" aria-labelledby="'+t+'-al" tabindex="-1"><i class="'+n+"ico "+n+'i-checkbox"></i><span id="'+t+'-al" class="'+n+'label">'+e.encode(e.state.get("text"))+"</span></div>"},bindStates:function(){function e(e){t.classes.toggle("checked",e),t.aria("checked",e)}var t=this;return t.state.on("change:text",function(e){t.getEl("al").firstChild.data=t.translate(e.value)}),t.state.on("change:checked change:value",function(n){t.fire("change"),e(n.value)}),t.state.on("change:icon",function(e){var n=e.value,r=t.classPrefix;if("undefined"==typeof n)return t.settings.icon;t.settings.icon=n,n=n?r+"ico "+r+"i-"+t.settings.icon:"";var i=t.getEl().firstChild,o=i.getElementsByTagName("i")[0];n?(o&&o==i.firstChild||(o=document.createElement("i"),i.insertBefore(o,i.firstChild)),o.className=n):o&&i.removeChild(o)}),t.state.get("checked")&&e(!0),t._super()}})}),r(dt,[ke,pe,ce,g],function(e,t,n,r){return e.extend({init:function(e){var t=this;t._super(e),e=t.settings,t.classes.add("combobox"),t.subinput=!0,t.ariaTarget="inp",e.menu=e.menu||e.values,e.menu&&(e.icon="caret"),t.on("click",function(n){var i=n.target,o=t.getEl();if(r.contains(o,i)||i==o)for(;i&&i!=o;)i.id&&-1!=i.id.indexOf("-open")&&(t.fire("action"),e.menu&&(t.showMenu(),n.aria&&t.menu.items()[0].focus())),i=i.parentNode}),t.on("keydown",function(e){"INPUT"==e.target.nodeName&&13==e.keyCode&&t.parents().reverse().each(function(n){var r=t.state.get("value"),i=t.getEl("inp").value;return e.preventDefault(),t.state.set("value",i),r!=i&&t.fire("change"),n.hasEventListeners("submit")&&n.toJSON?(n.fire("submit",{data:n.toJSON()}),!1):void 0})}),t.on("keyup",function(e){"INPUT"==e.target.nodeName&&t.state.set("value",e.target.value)})},showMenu:function(){var e=this,n=e.settings,r;e.menu||(r=n.menu||[],r.length?r={type:"menu",items:r}:r.type=r.type||"menu",e.menu=t.create(r).parent(e).renderTo(e.getContainerElm()),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control===e.menu&&e.focus()}),e.menu.on("show hide",function(t){t.control.items().each(function(t){t.active(t.value()==e.value())})}).fire("show"),e.menu.on("select",function(t){e.value(t.control.value())}),e.on("focusin",function(t){"INPUT"==t.target.tagName.toUpperCase()&&e.menu.hide()}),e.aria("expanded",!0)),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"])},focus:function(){this.getEl("inp").focus()},repaint:function(){var e=this,t=e.getEl(),i=e.getEl("open"),o=e.layoutRect(),a,s;a=i?o.w-n.getSize(i).width-10:o.w-10;var l=document;return l.all&&(!l.documentMode||l.documentMode<=8)&&(s=e.layoutRect().h-2+"px"),r(t.firstChild).css({width:a,lineHeight:s}),e._super(),e},postRender:function(){var e=this;return r(this.getEl("inp")).on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)}),e._super()},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.classPrefix,i=e.state.get("value")||"",o,a,s="",l="";return"spellcheck"in n&&(l+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(l+=' maxlength="'+n.maxLength+'"'),n.size&&(l+=' size="'+n.size+'"'),n.subtype&&(l+=' type="'+n.subtype+'"'),e.disabled()&&(l+=' disabled="disabled"'),o=n.icon,o&&"caret"!=o&&(o=r+"ico "+r+"i-"+n.icon),a=e.state.get("text"),(o||a)&&(s='<div id="'+t+'-open" class="'+r+"btn "+r+'open" tabIndex="-1" role="button"><button id="'+t+'-action" type="button" hidefocus="1" tabindex="-1">'+("caret"!=o?'<i class="'+o+'"></i>':'<i class="'+r+'caret"></i>')+(a?(o?" ":"")+a:"")+"</button></div>",e.classes.add("has-open")),'<div id="'+t+'" class="'+e.classes+'"><input id="'+t+'-inp" class="'+r+'textbox" value="'+e.encode(i,!1)+'" hidefocus="1"'+l+' placeholder="'+e.encode(n.placeholder)+'" />'+s+"</div>"},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl("inp").value),this.state.get("value"))},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl("inp").value!=t.value&&(e.getEl("inp").value=t.value)}),e.state.on("change:disabled",function(t){e.getEl("inp").disabled=t.value}),e._super()},remove:function(){r(this.getEl("inp")).off(),this._super()}})}),r(ft,[dt],function(e){return e.extend({init:function(e){var t=this;e.spellcheck=!1,e.onaction&&(e.icon="none"),t._super(e),t.classes.add("colorbox"),t.on("change keyup postrender",function(){t.repaintColor(t.value())})},repaintColor:function(e){var t=this.getEl().getElementsByTagName("i")[0];if(t)try{t.style.background=e}catch(n){}},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e._rendered&&e.repaintColor(t.value)}),e._super()}})}),r(ht,[lt,we],function(e,t){return e.extend({showPanel:function(){var e=this,n=e.settings;if(e.active(!0),e.panel)e.panel.show();else{var r=n.panel;r.type&&(r={layout:"grid",items:r}),r.role=r.role||"dialog",r.popover=!0,r.autohide=!0,r.ariaRoot=!0,e.panel=new t(r).on("hide",function(){e.active(!1)}).on("cancel",function(t){t.stopPropagation(),e.focus(),e.hidePanel()}).parent(e).renderTo(e.getContainerElm()),e.panel.fire("show"),e.panel.reflow()}e.panel.moveRel(e.getEl(),n.popoverAlign||(e.isRtl()?["bc-tr","bc-tc"]:["bc-tl","bc-tc"]))},hidePanel:function(){var e=this;e.panel&&e.panel.hide()},postRender:function(){var e=this;return e.aria("haspopup",!0),e.on("click",function(t){t.control===e&&(e.panel&&e.panel.visible()?e.hidePanel():(e.showPanel(),e.panel.focus(!!t.aria)))}),e._super()},remove:function(){return this.panel&&(this.panel.remove(),this.panel=null),this._super()}})}),r(pt,[ht,w],function(e,t){var n=t.DOM;return e.extend({init:function(e){this._super(e),this.classes.add("colorbutton")},color:function(e){return e?(this._color=e,this.getEl("preview").style.backgroundColor=e,this):this._color},resetColor:function(){return this._color=null,this.getEl("preview").style.backgroundColor=null,this},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r=e.state.get("text"),i=e.settings.icon?n+"ico "+n+"i-"+e.settings.icon:"",o=e.settings.image?" style=\"background-image: url('"+e.settings.image+"')\"":"",a="";return r&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(r)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1" aria-haspopup="true"><button role="presentation" hidefocus="1" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+'<span id="'+t+'-preview" class="'+n+'preview"></span>'+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1"> <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(r){r.aria&&"down"==r.aria.key||r.control!=e||n.getParent(r.target,"."+e.classPrefix+"open")||(r.stopImmediatePropagation(),t.call(e,r))}),delete e.settings.onclick,e._super()}})}),r(mt,[],function(){function e(e){function i(e,i,o){var a,s,l,c,u,d;return a=0,s=0,l=0,e/=255,i/=255,o/=255,u=t(e,t(i,o)),d=n(e,n(i,o)),u==d?(l=u,{h:0,s:0,v:100*l}):(c=e==u?i-o:o==u?e-i:o-e,a=e==u?3:o==u?1:5,a=60*(a-c/(d-u)),s=(d-u)/d,l=d,{h:r(a),s:r(100*s),v:r(100*l)})}function o(e,i,o){var a,s,l,c;if(e=(parseInt(e,10)||0)%360,i=parseInt(i,10)/100,o=parseInt(o,10)/100,i=n(0,t(i,1)),o=n(0,t(o,1)),0===i)return void(d=f=h=r(255*o));switch(a=e/60,s=o*i,l=s*(1-Math.abs(a%2-1)),c=o-s,Math.floor(a)){case 0:d=s,f=l,h=0;break;case 1:d=l,f=s,h=0;break;case 2:d=0,f=s,h=l;break;case 3:d=0,f=l,h=s;break;case 4:d=l,f=0,h=s;break;case 5:d=s,f=0,h=l;break;default:d=f=h=0}d=r(255*(d+c)),f=r(255*(f+c)),h=r(255*(h+c))}function a(){function e(e){return e=parseInt(e,10).toString(16),e.length>1?e:"0"+e}return"#"+e(d)+e(f)+e(h)}function s(){return{r:d,g:f,b:h}}function l(){return i(d,f,h)}function c(e){var t;return"object"==typeof e?"r"in e?(d=e.r,f=e.g,h=e.b):"v"in e&&o(e.h,e.s,e.v):(t=/rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)[^\)]*\)/gi.exec(e))?(d=parseInt(t[1],10),f=parseInt(t[2],10),h=parseInt(t[3],10)):(t=/#([0-F]{2})([0-F]{2})([0-F]{2})/gi.exec(e))?(d=parseInt(t[1],16),f=parseInt(t[2],16),h=parseInt(t[3],16)):(t=/#([0-F])([0-F])([0-F])/gi.exec(e))&&(d=parseInt(t[1]+t[1],16),f=parseInt(t[2]+t[2],16),h=parseInt(t[3]+t[3],16)),d=0>d?0:d>255?255:d,f=0>f?0:f>255?255:f,h=0>h?0:h>255?255:h,u}var u=this,d=0,f=0,h=0;e&&c(e),u.toRgb=s,u.toHsv=l,u.toHex=a,u.parse=c}var t=Math.min,n=Math.max,r=Math.round;return e}),r(gt,[ke,ve,ce,mt],function(e,t,n,r){return e.extend({Defaults:{classes:"widget colorpicker"},init:function(e){this._super(e)},postRender:function(){function e(e,t){var r=n.getPos(e),i,o;return i=t.pageX-r.x,o=t.pageY-r.y,i=Math.max(0,Math.min(i/e.clientWidth,1)),o=Math.max(0,Math.min(o/e.clientHeight,1)),{x:i,y:o}}function i(e,t){var i=(360-e.h)/360;n.css(d,{top:100*i+"%"}),t||n.css(h,{left:e.s+"%",top:100-e.v+"%"}),f.style.background=new r({s:100,v:100,h:e.h}).toHex(),s.color().parse({s:e.s,v:e.v,h:e.h})}function o(t){var n;n=e(f,t),c.s=100*n.x,c.v=100*(1-n.y),i(c),s.fire("change")}function a(t){var n;n=e(u,t),c=l.toHsv(),c.h=360*(1-n.y),i(c,!0),s.fire("change")}var s=this,l=s.color(),c,u,d,f,h;u=s.getEl("h"),d=s.getEl("hp"),f=s.getEl("sv"),h=s.getEl("svp"),s._repaint=function(){c=l.toHsv(),i(c)},s._super(),s._svdraghelper=new t(s._id+"-sv",{start:o,drag:o}),s._hdraghelper=new t(s._id+"-h",{start:a,drag:a}),s._repaint()},rgb:function(){return this.color().toRgb()},value:function(e){var t=this;return arguments.length?(t.color().parse(e),void(t._rendered&&t._repaint())):t.color().toHex()},color:function(){return this._color||(this._color=new r),this._color},renderHtml:function(){function e(){var e,t,n="",i,a;for(i="filter:progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr=",a=o.split(","),e=0,t=a.length-1;t>e;e++)n+='<div class="'+r+'colorpicker-h-chunk" style="height:'+100/t+"%;"+i+a[e]+",endColorstr="+a[e+1]+");-ms-"+i+a[e]+",endColorstr="+a[e+1]+')"></div>';return n}var t=this,n=t._id,r=t.classPrefix,i,o="#ff0000,#ff0080,#ff00ff,#8000ff,#0000ff,#0080ff,#00ffff,#00ff80,#00ff00,#80ff00,#ffff00,#ff8000,#ff0000",a="background: -ms-linear-gradient(top,"+o+");background: linear-gradient(to bottom,"+o+");";return i='<div id="'+n+'-h" class="'+r+'colorpicker-h" style="'+a+'">'+e()+'<div id="'+n+'-hp" class="'+r+'colorpicker-h-marker"></div></div>','<div id="'+n+'" class="'+t.classes+'"><div id="'+n+'-sv" class="'+r+'colorpicker-sv"><div class="'+r+'colorpicker-overlay1"><div class="'+r+'colorpicker-overlay2"><div id="'+n+'-svp" class="'+r+'colorpicker-selector1"><div class="'+r+'colorpicker-selector2"></div></div></div></div></div>'+i+"</div>"}})}),r(vt,[ke],function(e){return e.extend({init:function(e){var t=this;e.delimiter||(e.delimiter="\xbb"),t._super(e),t.classes.add("path"),t.canFocus=!0,t.on("click",function(e){var n,r=e.target;(n=r.getAttribute("data-index"))&&t.fire("select",{value:t.row()[n],index:n})}),t.row(t.settings.row)},focus:function(){var e=this;return e.getEl().firstChild.focus(),e},row:function(e){return arguments.length?(this.state.set("row",e),this):this.state.get("row")},renderHtml:function(){var e=this;return'<div id="'+e._id+'" class="'+e.classes+'">'+e._getDataPathHtml(e.state.get("row"))+"</div>"},bindStates:function(){var e=this;return e.state.on("change:row",function(t){e.innerHtml(e._getDataPathHtml(t.value))}),e._super()},_getDataPathHtml:function(e){var t=this,n=e||[],r,i,o="",a=t.classPrefix;for(r=0,i=n.length;i>r;r++)o+=(r>0?'<div class="'+a+'divider" aria-hidden="true"> '+t.settings.delimiter+" </div>":"")+'<div role="button" class="'+a+"path-item"+(r==i-1?" "+a+"last":"")+'" data-index="'+r+'" tabindex="-1" id="'+t._id+"-"+r+'" aria-level="'+r+'">'+n[r].name+"</div>";return o||(o='<div class="'+a+'path-item">\xa0</div>'),o}})}),r(yt,[vt,Qe],function(e,t){return e.extend({postRender:function(){function e(e){if(1===e.nodeType){if("BR"==e.nodeName||e.getAttribute("data-mce-bogus"))return!0;if("bookmark"===e.getAttribute("data-mce-type"))return!0}return!1}var n=this,r=t.activeEditor;return r.settings.elementpath!==!1&&(n.on("select",function(e){r.focus(),r.selection.select(this.row()[e.index].element),r.nodeChanged()}),r.on("nodeChange",function(t){for(var i=[],o=t.parents,a=o.length;a--;)if(1==o[a].nodeType&&!e(o[a])){var s=r.fire("ResolveName",{name:o[a].nodeName.toLowerCase(),target:o[a]});if(s.isDefaultPrevented()||i.push({name:s.name,element:o[a]}),s.isPropagationStopped())break}n.row(i)})),n._super()}})}),r(bt,[ge],function(e){return e.extend({Defaults:{layout:"flex",align:"center",defaults:{flex:1}},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.classes.add("formitem"),t.preRender(e),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<div id="'+e._id+'-title" class="'+n+'title">'+e.settings.title+"</div>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></div>"}})}),r(Ct,[ge,bt,m],function(e,t,n){return e.extend({Defaults:{containerCls:"form",layout:"flex",direction:"column",align:"stretch",flex:1,padding:20,labelGap:30,spacing:10,callbacks:{submit:function(){this.submit()}}},preRender:function(){var e=this,r=e.items();e.settings.formItemDefaults||(e.settings.formItemDefaults={layout:"flex",autoResize:"overflow",defaults:{flex:1}}),r.each(function(r){var i,o=r.settings.label;o&&(i=new t(n.extend({items:{type:"label",id:r._id+"-l",text:o,flex:0,forId:r._id,disabled:r.disabled()}},e.settings.formItemDefaults)),i.type="formitem",r.aria("labelledby",r._id+"-l"),"undefined"==typeof r.settings.flex&&(r.settings.flex=1),e.replace(r,i),i.add(r))})},submit:function(){return this.fire("submit",{data:this.toJSON()})},postRender:function(){var e=this;e._super(),e.fromJSON(e.settings.data)},bindStates:function(){function e(){var e=0,n=[],r,i,o;if(t.settings.labelGapCalc!==!1)for(o="children"==t.settings.labelGapCalc?t.find("formitem"):t.items(),o.filter("formitem").each(function(t){var r=t.items()[0],i=r.getEl().clientWidth;e=i>e?i:e,n.push(r)}),i=t.settings.labelGap||0,r=n.length;r--;)n[r].settings.minWidth=e+i}var t=this;t._super(),t.on("show",e),e()}})}),r(xt,[Ct],function(e){return e.extend({Defaults:{containerCls:"fieldset",layout:"flex",direction:"column",align:"stretch",flex:1,padding:"25 15 5 15",labelGap:30,spacing:10,border:1},renderHtml:function(){var e=this,t=e._layout,n=e.classPrefix;return e.preRender(),t.preRender(e),'<fieldset id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1">'+(e.settings.title?'<legend id="'+e._id+'-title" class="'+n+'fieldset-title">'+e.settings.title+"</legend>":"")+'<div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+(e.settings.html||"")+t.renderHtml(e)+"</div></fieldset>"}})}),r(wt,[dt,m],function(e,t){return e.extend({init:function(e){var n=this,r=tinymce.activeEditor,i=r.settings,o,a,s;e.spellcheck=!1,s=i.file_picker_types||i.file_browser_callback_types,s&&(s=t.makeMap(s,/[, ]/)),(!s||s[e.filetype])&&(a=i.file_picker_callback,!a||s&&!s[e.filetype]?(a=i.file_browser_callback,!a||s&&!s[e.filetype]||(o=function(){a(n.getEl("inp").id,n.value(),e.filetype,window)})):o=function(){var i=n.fire("beforecall").meta;i=t.extend({filetype:e.filetype},i),a.call(r,function(e,t){n.value(e).fire("change",{meta:t})},n.value(),i)}),o&&(e.icon="browse",e.onaction=o),n._super(e)}})}),r(Et,[st],function(e){return e.extend({recalc:function(e){var t=e.layoutRect(),n=e.paddingBox;e.items().filter(":visible").each(function(e){e.layoutRect({x:n.left,y:n.top,w:t.innerW-n.right-n.left,h:t.innerH-n.top-n.bottom}),e.recalc&&e.recalc()})}})}),r(Nt,[st],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v=[],y,b,C,x,w,E,N,_,S,k,T,R,A,B,D,M,L,P,H,O,I,F,z=Math.max,W=Math.min;for(r=e.items().filter(":visible"),i=e.layoutRect(),o=e.paddingBox,a=e.settings,f=e.isRtl()?a.direction||"row-reversed":a.direction,s=a.align,l=e.isRtl()?a.pack||"end":a.pack,c=a.spacing||0,("row-reversed"==f||"column-reverse"==f)&&(r=r.set(r.toArray().reverse()),f=f.split("-")[0]),"column"==f?(S="y",N="h",_="minH",k="maxH",R="innerH",T="top",A="deltaH",B="contentH",H="left",L="w",D="x",M="innerW",P="minW",O="right",I="deltaW",F="contentW"):(S="x",N="w",_="minW",k="maxW",R="innerW",T="left",A="deltaW",B="contentW",H="top",L="h",D="y",M="innerH",P="minH",O="bottom",I="deltaH",F="contentH"),d=i[R]-o[T]-o[T],E=u=0,t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),m=h.settings,g=m.flex,d-=n-1>t?c:0,g>0&&(u+=g,p[k]&&v.push(h),p.flex=g),d-=p[_],y=o[H]+p[P]+o[O],y>E&&(E=y);if(x={},0>d?x[_]=i[_]-d+i[A]:x[_]=i[R]-d+i[A],x[P]=E+i[I],x[B]=i[R]-d,x[F]=E,x.minW=W(x.minW,i.maxW),x.minH=W(x.minH,i.maxH),x.minW=z(x.minW,i.startMinWidth),x.minH=z(x.minH,i.startMinHeight),!i.autoResize||x.minW==i.minW&&x.minH==i.minH){for(C=d/u,t=0,n=v.length;n>t;t++)h=v[t],p=h.layoutRect(),b=p[k],y=p[_]+p.flex*C,y>b?(d-=p[k]-p[_],u-=p.flex,p.flex=0,p.maxFlexSize=b):p.maxFlexSize=0;for(C=d/u,w=o[T],x={},0===u&&("end"==l?w=d+o[T]:"center"==l?(w=Math.round(i[R]/2-(i[R]-d)/2)+o[T],0>w&&(w=o[T])):"justify"==l&&(w=o[T],c=Math.floor(d/(r.length-1)))),x[D]=o[H],t=0,n=r.length;n>t;t++)h=r[t],p=h.layoutRect(),y=p.maxFlexSize||p[_],"center"===s?x[D]=Math.round(i[M]/2-p[L]/2):"stretch"===s?(x[L]=z(p[P]||0,i[M]-o[H]-o[O]),x[D]=o[H]):"end"===s&&(x[D]=i[M]-p[L]-o.top),p.flex>0&&(y+=p.flex*C),x[N]=y,x[S]=w,h.layoutRect(x),h.recalc&&h.recalc(),w+=y+c}else if(x.w=x.minW,x.h=x.minH,e.layoutRect(x),this.recalc(e),null===e._lastRect){var V=e.parent();V&&(V._lastRect=null,V.recalc())}}})}),r(_t,[at],function(e){return e.extend({Defaults:{containerClass:"flow-layout",controlClass:"flow-layout-item",endClass:"break"},recalc:function(e){e.items().filter(":visible").each(function(e){e.recalc&&e.recalc()})},isNative:function(){return!0}})}),r(St,[he,ke,we,m,Qe,h],function(e,t,n,r,i,o){function a(e){function t(t,n){return function(){var r=this;e.on("nodeChange",function(i){var o=e.formatter,a=null;s(i.parents,function(e){return s(t,function(t){return n?o.matchNode(e,n,{value:t.value})&&(a=t.value):o.matchNode(e,t.value)&&(a=t.value),a?!1:void 0}),a?!1:void 0}),r.value(a)})}}function r(e){e=e.replace(/;$/,"").split(";");for(var t=e.length;t--;)e[t]=e[t].split("=");return e}function i(){function t(e){var n=[];if(e)return s(e,function(e){var o={text:e.title,icon:e.icon};if(e.items)o.menu=t(e.items);else{var a=e.format||"custom"+r++;e.format||(e.name=a,i.push(e)),o.format=a,o.cmd=e.cmd}n.push(o)}),n}function n(){var n;return n=t(e.settings.style_formats_merge?e.settings.style_formats?o.concat(e.settings.style_formats):o:e.settings.style_formats||o)}var r=0,i=[],o=[{title:"Headings",items:[{title:"Heading 1",format:"h1"},{title:"Heading 2",format:"h2"},{title:"Heading 3",format:"h3"},{title:"Heading 4",format:"h4"},{title:"Heading 5",format:"h5"},{title:"Heading 6",format:"h6"}]},{title:"Inline",items:[{title:"Bold",icon:"bold",format:"bold"},{title:"Italic",icon:"italic",format:"italic"},{title:"Underline",icon:"underline",format:"underline"},{title:"Strikethrough",icon:"strikethrough",format:"strikethrough"},{title:"Superscript",icon:"superscript",format:"superscript"},{title:"Subscript",icon:"subscript",format:"subscript"},{title:"Code",icon:"code",format:"code"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]},{title:"Alignment",items:[{title:"Left",icon:"alignleft",format:"alignleft"},{title:"Center",icon:"aligncenter",format:"aligncenter"},{title:"Right",icon:"alignright",format:"alignright"},{title:"Justify",icon:"alignjustify",format:"alignjustify"}]}];return e.on("init",function(){s(i,function(t){e.formatter.register(t.name,t)})}),{type:"menu",items:n(),onPostRender:function(t){e.fire("renderFormatsMenu",{control:t.control})},itemDefaults:{preview:!0,textStyle:function(){return this.settings.format?e.formatter.getCssText(this.settings.format):void 0},onPostRender:function(){var t=this;t.parent().on("show",function(){var n,r;n=t.settings.format,n&&(t.disabled(!e.formatter.canApply(n)),t.active(e.formatter.match(n))),r=t.settings.cmd,r&&t.active(e.queryCommandState(r))})},onclick:function(){this.settings.format&&c(this.settings.format),this.settings.cmd&&e.execCommand(this.settings.cmd)}}}}function o(t){return function(){var n=this;e.formatter?e.formatter.formatChanged(t,function(e){n.active(e)}):e.on("init",function(){e.formatter.formatChanged(t,function(e){n.active(e)})})}}function a(t){return function(){function n(){return e.undoManager?e.undoManager[t]():!1}var r=this;t="redo"==t?"hasRedo":"hasUndo",r.disabled(!n()),e.on("Undo Redo AddUndo TypingUndo ClearUndos SwitchMode",function(){r.disabled(e.readonly||!n())})}}function l(){var t=this;e.on("VisualAid",function(e){t.active(e.hasVisual)}),t.active(e.hasVisual)}function c(t){t.control&&(t=t.control.value()),t&&e.execCommand("mceToggleFormat",!1,t)}var u;u=i(),s({bold:"Bold",italic:"Italic",underline:"Underline",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript"},function(t,n){e.addButton(n,{tooltip:t,onPostRender:o(n),onclick:function(){c(n)}})}),s({outdent:["Decrease indent","Outdent"],indent:["Increase indent","Indent"],cut:["Cut","Cut"],copy:["Copy","Copy"],paste:["Paste","Paste"],help:["Help","mceHelp"],selectall:["Select all","SelectAll"],removeformat:["Clear formatting","RemoveFormat"],visualaid:["Visual aids","mceToggleVisualAid"],newdocument:["New document","mceNewDocument"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1]})}),s({blockquote:["Blockquote","mceBlockQuote"],numlist:["Numbered list","InsertOrderedList"],bullist:["Bullet list","InsertUnorderedList"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],alignleft:["Align left","JustifyLeft"],aligncenter:["Align center","JustifyCenter"],alignright:["Align right","JustifyRight"],alignjustify:["Justify","JustifyFull"],alignnone:["No alignment","JustifyNone"]},function(t,n){e.addButton(n,{tooltip:t[0],cmd:t[1],onPostRender:o(n)})}),e.addButton("undo",{tooltip:"Undo",onPostRender:a("undo"),cmd:"undo"}),e.addButton("redo",{tooltip:"Redo",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("newdocument",{text:"New document",icon:"newdocument",cmd:"mceNewDocument"}),e.addMenuItem("undo",{text:"Undo",icon:"undo",shortcut:"Meta+Z",onPostRender:a("undo"),cmd:"undo"}),e.addMenuItem("redo",{text:"Redo",icon:"redo",shortcut:"Meta+Y",onPostRender:a("redo"),cmd:"redo"}),e.addMenuItem("visualaid",{text:"Visual aids",selectable:!0,onPostRender:l,cmd:"mceToggleVisualAid"}),e.addButton("remove",{tooltip:"Remove",icon:"remove",cmd:"Delete"}),s({cut:["Cut","Cut","Meta+X"],copy:["Copy","Copy","Meta+C"],paste:["Paste","Paste","Meta+V"],selectall:["Select all","SelectAll","Meta+A"],bold:["Bold","Bold","Meta+B"],italic:["Italic","Italic","Meta+I"],underline:["Underline","Underline"],strikethrough:["Strikethrough","Strikethrough"],subscript:["Subscript","Subscript"],superscript:["Superscript","Superscript"],removeformat:["Clear formatting","RemoveFormat"]},function(t,n){e.addMenuItem(n,{text:t[0],icon:n,shortcut:t[2],cmd:t[1]})}),e.on("mousedown",function(){n.hideAll()}),e.addButton("styleselect",{type:"menubutton",text:"Formats",menu:u}),e.addButton("formatselect",function(){var n=[],i=r(e.settings.block_formats||"Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;Preformatted=pre");return s(i,function(t){n.push({text:t[0],value:t[1],textStyle:function(){return e.formatter.getCssText(t[1])}})}),{type:"listbox",text:i[0][0],values:n,fixedWidth:!0,onselect:c,onPostRender:t(n)}}),e.addButton("fontselect",function(){var n="Andale Mono=andale mono,monospace;Arial=arial,helvetica,sans-serif;Arial Black=arial black,sans-serif;Book Antiqua=book antiqua,palatino,serif;Comic Sans MS=comic sans ms,sans-serif;Courier New=courier new,courier,monospace;Georgia=georgia,palatino,serif;Helvetica=helvetica,arial,sans-serif;Impact=impact,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco,monospace;Times New Roman=times new roman,times,serif;Trebuchet MS=trebuchet ms,geneva,sans-serif;Verdana=verdana,geneva,sans-serif;Webdings=webdings;Wingdings=wingdings,zapf dingbats",i=[],o=r(e.settings.font_formats||n);return s(o,function(e){i.push({text:{raw:e[0]},value:e[1],textStyle:-1==e[1].indexOf("dings")?"font-family:"+e[1]:""})}),{type:"listbox",text:"Font Family",tooltip:"Font Family",values:i,fixedWidth:!0,onPostRender:t(i,"fontname"),onselect:function(t){t.control.settings.value&&e.execCommand("FontName",!1,t.control.settings.value)}}}),e.addButton("fontsizeselect",function(){var n=[],r="8pt 10pt 12pt 14pt 18pt 24pt 36pt",i=e.settings.fontsize_formats||r;return s(i.split(" "),function(e){var t=e,r=e,i=e.split("=");i.length>1&&(t=i[0],r=i[1]),n.push({text:t,value:r})}),{type:"listbox",text:"Font Sizes",tooltip:"Font Sizes",values:n,fixedWidth:!0,onPostRender:t(n,"fontsize"),onclick:function(t){t.control.settings.value&&e.execCommand("FontSize",!1,t.control.settings.value)}}}),e.addMenuItem("formats",{text:"Formats",menu:u})}var s=r.each;i.on("AddEditor",function(t){t.editor.rtl&&(e.rtl=!0),a(t.editor)}),e.translate=function(e){return i.translate(e)},t.tooltips=!o.iOS}),r(kt,[st],function(e){return e.extend({recalc:function(e){var t,n,r,i,o,a,s,l,c,u,d,f,h,p,m,g,v,y,b,C,x,w,E,N=[],_=[],S,k,T,R,A,B;t=e.settings,i=e.items().filter(":visible"),o=e.layoutRect(),r=t.columns||Math.ceil(Math.sqrt(i.length)),n=Math.ceil(i.length/r),y=t.spacingH||t.spacing||0,b=t.spacingV||t.spacing||0,C=t.alignH||t.align,x=t.alignV||t.align,g=e.paddingBox,A="reverseRows"in t?t.reverseRows:e.isRtl(),C&&"string"==typeof C&&(C=[C]),x&&"string"==typeof x&&(x=[x]);for(d=0;r>d;d++)N.push(0);for(f=0;n>f;f++)_.push(0);for(f=0;n>f;f++)for(d=0;r>d&&(u=i[f*r+d],u);d++)c=u.layoutRect(),S=c.minW,k=c.minH,N[d]=S>N[d]?S:N[d],_[f]=k>_[f]?k:_[f];for(T=o.innerW-g.left-g.right,w=0,d=0;r>d;d++)w+=N[d]+(d>0?y:0),T-=(d>0?y:0)+N[d];for(R=o.innerH-g.top-g.bottom,E=0,f=0;n>f;f++)E+=_[f]+(f>0?b:0),R-=(f>0?b:0)+_[f];if(w+=g.left+g.right,E+=g.top+g.bottom,l={},l.minW=w+(o.w-o.innerW),l.minH=E+(o.h-o.innerH),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH,l.minW=Math.min(l.minW,o.maxW),l.minH=Math.min(l.minH,o.maxH),l.minW=Math.max(l.minW,o.startMinWidth),l.minH=Math.max(l.minH,o.startMinHeight),!o.autoResize||l.minW==o.minW&&l.minH==o.minH){o.autoResize&&(l=e.layoutRect(l),l.contentW=l.minW-o.deltaW,l.contentH=l.minH-o.deltaH);var D;D="start"==t.packV?0:R>0?Math.floor(R/n):0;var M=0,L=t.flexWidths;if(L)for(d=0;d<L.length;d++)M+=L[d];else M=r;var P=T/M;for(d=0;r>d;d++)N[d]+=L?L[d]*P:P;for(p=g.top,f=0;n>f;f++){for(h=g.left,s=_[f]+D,d=0;r>d&&(B=A?f*r+r-1-d:f*r+d,u=i[B],u);d++)m=u.settings,c=u.layoutRect(),a=Math.max(N[d],c.startMinWidth),c.x=h,c.y=p,v=m.alignH||(C?C[d]||C[0]:null),"center"==v?c.x=h+a/2-c.w/2:"right"==v?c.x=h+a-c.w:"stretch"==v&&(c.w=a),v=m.alignV||(x?x[d]||x[0]:null),"center"==v?c.y=p+s/2-c.h/2:"bottom"==v?c.y=p+s-c.h:"stretch"==v&&(c.h=s),u.layoutRect(c),h+=a+y,u.recalc&&u.recalc();p+=s+b}}else if(l.w=l.minW,l.h=l.minH,e.layoutRect(l),this.recalc(e),null===e._lastRect){var H=e.parent();H&&(H._lastRect=null,H.recalc())}}})}),r(Tt,[ke,u],function(e,t){return e.extend({renderHtml:function(){var e=this;return e.classes.add("iframe"),e.canFocus=!1,'<iframe id="'+e._id+'" class="'+e.classes+'" tabindex="-1" src="'+(e.settings.url||"javascript:''")+'" frameborder="0"></iframe>'},src:function(e){this.getEl().src=e},html:function(e,n){var r=this,i=this.getEl().contentWindow.document.body;return i?(i.innerHTML=e,n&&n()):t.setTimeout(function(){r.html(e)}),this}})}),r(Rt,[ke,ce],function(e,t){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("widget").add("label"),t.canFocus=!1,e.multiline&&t.classes.add("autoscroll"),e.strong&&t.classes.add("strong")},initLayoutRect:function(){var e=this,n=e._super();if(e.settings.multiline){var r=t.getSize(e.getEl());r.width>n.maxW&&(n.minW=n.maxW,e.classes.add("multiline")),e.getEl().style.width=n.minW+"px",n.startMinH=n.h=n.minH=Math.min(n.maxH,t.getSize(e.getEl()).height)}return n},repaint:function(){var e=this;return e.settings.multiline||(e.getEl().style.lineHeight=e.layoutRect().h+"px"),e._super()},renderHtml:function(){var e=this,t=e.settings.forId;return'<label id="'+e._id+'" class="'+e.classes+'"'+(t?' for="'+t+'"':"")+">"+e.encode(e.state.get("text"))+"</label>"},bindStates:function(){var e=this;return e.state.on("change:text",function(t){e.innerHtml(e.encode(t.value))}),e._super()}})}),r(At,[ge],function(e){return e.extend({Defaults:{role:"toolbar",layout:"flow"},init:function(e){var t=this;t._super(e),t.classes.add("toolbar")},postRender:function(){var e=this;return e.items().each(function(e){e.classes.add("toolbar-item")}),e._super()}})}),r(Bt,[At],function(e){return e.extend({Defaults:{role:"menubar",containerCls:"menubar",ariaRoot:!0,defaults:{type:"menubutton"}}})}),r(Dt,[lt,pe,Bt],function(e,t,n){function r(e,t){for(;e;){if(t===e)return!0;e=e.parentNode}return!1}var i=e.extend({init:function(e){var t=this;t._renderOpen=!0,t._super(e),e=t.settings,t.classes.add("menubtn"),e.fixedWidth&&t.classes.add("fixed-width"),t.aria("haspopup",!0),t.state.set("menu",e.menu||t.render())},showMenu:function(){var e=this,n;return e.menu&&e.menu.visible()?e.hideMenu():(e.menu||(n=e.state.get("menu")||[],n.length?n={type:"menu",items:n}:n.type=n.type||"menu",n.renderTo?e.menu=n.parent(e).show().renderTo():e.menu=t.create(n).parent(e).renderTo(),e.fire("createmenu"),e.menu.reflow(),e.menu.on("cancel",function(t){t.control.parent()===e.menu&&(t.stopPropagation(),e.focus(),e.hideMenu())}),e.menu.on("select",function(){e.focus()}),e.menu.on("show hide",function(t){t.control==e.menu&&e.activeMenu("show"==t.type),e.aria("expanded","show"==t.type)}).fire("show")),e.menu.show(),e.menu.layoutRect({w:e.layoutRect().w}),void e.menu.moveRel(e.getEl(),e.isRtl()?["br-tr","tr-br"]:["bl-tl","tl-bl"]))},hideMenu:function(){var e=this;e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide())},activeMenu:function(e){this.classes.toggle("active",e)},renderHtml:function(){var e=this,t=e._id,r=e.classPrefix,i=e.settings.icon,o,a=e.state.get("text"),s="";return o=e.settings.image,o?(i="none","string"!=typeof o&&(o=window.getSelection?o[0]:o[1]),o=" style=\"background-image: url('"+o+"')\""):o="",a&&(e.classes.add("btn-has-text"),s='<span class="'+r+'txt">'+e.encode(a)+"</span>"),i=e.settings.icon?r+"ico "+r+"i-"+i:"",e.aria("role",e.parent()instanceof n?"menuitem":"button"),'<div id="'+t+'" class="'+e.classes+'" tabindex="-1" aria-labelledby="'+t+'"><button id="'+t+'-open" role="presentation" type="button" tabindex="-1">'+(i?'<i class="'+i+'"'+o+"></i>":"")+s+' <i class="'+r+'caret"></i></button></div>'},postRender:function(){var e=this;return e.on("click",function(t){t.control===e&&r(t.target,e.getEl())&&(e.showMenu(),t.aria&&e.menu.items()[0].focus())}),e.on("mouseenter",function(t){var n=t.control,r=e.parent(),o;n&&r&&n instanceof i&&n.parent()==r&&(r.items().filter("MenuButton").each(function(e){e.hideMenu&&e!=n&&(e.menu&&e.menu.visible()&&(o=!0),e.hideMenu())}),o&&(n.focus(),n.showMenu()))}),e._super()},bindStates:function(){var e=this;return e.state.on("change:menu",function(){e.menu&&e.menu.remove(),e.menu=null}),e._super()},remove:function(){this._super(),this.menu&&this.menu.remove()}});return i}),r(Mt,[ke,pe,h],function(e,t,n){return e.extend({Defaults:{border:0,role:"menuitem"},init:function(e){var t=this,n;t._super(e),e=t.settings,t.classes.add("menu-item"),e.menu&&t.classes.add("menu-item-expand"),e.preview&&t.classes.add("menu-item-preview"),n=t.state.get("text"),("-"===n||"|"===n)&&(t.classes.add("menu-item-sep"),t.aria("role","separator"),
t.state.set("text","-")),e.selectable&&(t.aria("role","menuitemcheckbox"),t.classes.add("menu-item-checkbox"),e.icon="selected"),e.preview||e.selectable||t.classes.add("menu-item-normal"),t.on("mousedown",function(e){e.preventDefault()}),e.menu&&!e.ariaHideMenu&&t.aria("haspopup",!0)},hasMenus:function(){return!!this.settings.menu},showMenu:function(){var e=this,n=e.settings,r,i=e.parent();if(i.items().each(function(t){t!==e&&t.hideMenu()}),n.menu){r=e.menu,r?r.show():(r=n.menu,r.length?r={type:"menu",items:r}:r.type=r.type||"menu",i.settings.itemDefaults&&(r.itemDefaults=i.settings.itemDefaults),r=e.menu=t.create(r).parent(e).renderTo(),r.reflow(),r.on("cancel",function(t){t.stopPropagation(),e.focus(),r.hide()}),r.on("show hide",function(e){e.control.items().each(function(e){e.active(e.settings.selected)})}).fire("show"),r.on("hide",function(t){t.control===r&&e.classes.remove("selected")}),r.submenu=!0),r._parentMenu=i,r.classes.add("menu-sub");var o=r.testMoveRel(e.getEl(),e.isRtl()?["tl-tr","bl-br","tr-tl","br-bl"]:["tr-tl","br-bl","tl-tr","bl-br"]);r.moveRel(e.getEl(),o),r.rel=o,o="menu-sub-"+o,r.classes.remove(r._lastRel).add(o),r._lastRel=o,e.classes.add("selected"),e.aria("expanded",!0)}},hideMenu:function(){var e=this;return e.menu&&(e.menu.items().each(function(e){e.hideMenu&&e.hideMenu()}),e.menu.hide(),e.aria("expanded",!1)),e},renderHtml:function(){function e(e){var t,r,i={};for(i=n.mac?{alt:"&#x2325;",ctrl:"&#x2318;",shift:"&#x21E7;",meta:"&#x2318;"}:{meta:"Ctrl"},e=e.split("+"),t=0;t<e.length;t++)r=i[e[t].toLowerCase()],r&&(e[t]=r);return e.join("+")}var t=this,r=t._id,i=t.settings,o=t.classPrefix,a=t.encode(t.state.get("text")),s=t.settings.icon,l="",c=i.shortcut;return s&&t.parent().classes.add("menu-has-icons"),i.image&&(l=" style=\"background-image: url('"+i.image+"')\""),c&&(c=e(c)),s=o+"ico "+o+"i-"+(t.settings.icon||"none"),'<div id="'+r+'" class="'+t.classes+'" tabindex="-1">'+("-"!==a?'<i class="'+s+'"'+l+"></i>\xa0":"")+("-"!==a?'<span id="'+r+'-text" class="'+o+'text">'+a+"</span>":"")+(c?'<div id="'+r+'-shortcut" class="'+o+'menu-shortcut">'+c+"</div>":"")+(i.menu?'<div class="'+o+'caret"></div>':"")+"</div>"},postRender:function(){var e=this,t=e.settings,n=t.textStyle;if("function"==typeof n&&(n=n.call(this)),n){var r=e.getEl("text");r&&r.setAttribute("style",n)}return e.on("mouseenter click",function(n){n.control===e&&(t.menu||"click"!==n.type?(e.showMenu(),n.aria&&e.menu.focus(!0)):(e.fire("select"),e.parent().hideAll()))}),e._super(),e},active:function(e){return"undefined"!=typeof e&&this.aria("checked",e),this._super(e)},remove:function(){this._super(),this.menu&&this.menu.remove()}})}),r(Lt,[we,Mt,m],function(e,t,n){return e.extend({Defaults:{defaultType:"menuitem",border:1,layout:"stack",role:"application",bodyRole:"menu",ariaRoot:!0},init:function(e){var t=this;if(e.autohide=!0,e.constrainToViewport=!0,e.itemDefaults)for(var r=e.items,i=r.length;i--;)r[i]=n.extend({},e.itemDefaults,r[i]);t._super(e),t.classes.add("menu")},repaint:function(){return this.classes.toggle("menu-align",!0),this._super(),this.getEl().style.height="",this.getEl("body").style.height="",this},cancel:function(){var e=this;e.hideAll(),e.fire("select")},hideAll:function(){var e=this;return this.find("menuitem").exec("hideMenu"),e._super()},preRender:function(){var e=this;return e.items().each(function(t){var n=t.settings;return n.icon||n.image||n.selectable?(e._hasIcons=!0,!1):void 0}),e._super()}})}),r(Pt,[Dt,Lt],function(e,t){return e.extend({init:function(e){function t(r){for(var a=0;a<r.length;a++){if(i=r[a].selected||e.value===r[a].value)return o=o||r[a].text,n.state.set("value",r[a].value),!0;if(r[a].menu&&t(r[a].menu))return!0}}var n=this,r,i,o,a;n._super(e),e=n.settings,n._values=r=e.values,r&&("undefined"!=typeof e.value&&t(r),!i&&r.length>0&&(o=r[0].text,n.state.set("value",r[0].value)),n.state.set("menu",r)),n.state.set("text",e.text||o),n.classes.add("listbox"),n.on("select",function(t){var r=t.control;a&&(t.lastControl=a),e.multiple?r.active(!r.active()):n.value(t.control.value()),a=r})},bindStates:function(){function e(e,n){e instanceof t&&e.items().each(function(e){e.hasMenus()||e.active(e.value()===n)})}function n(e,t){var r;if(e)for(var i=0;i<e.length;i++){if(e[i].value===t)return e[i];if(e[i].menu&&(r=n(e[i].menu,t)))return r}}var r=this;return r.on("show",function(t){e(t.control,r.value())}),r.state.on("change:value",function(e){var t=n(r.state.get("menu"),e.value);t?r.text(t.text):r.text(r.settings.text)}),r._super()}})}),r(Ht,[ut],function(e){return e.extend({Defaults:{classes:"radio",role:"radio"}})}),r(Ot,[ke,ve],function(e,t){return e.extend({renderHtml:function(){var e=this,t=e.classPrefix;return e.classes.add("resizehandle"),"both"==e.settings.direction&&e.classes.add("resizehandle-both"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"><i class="'+t+"ico "+t+'i-resize"></i></div>'},postRender:function(){var e=this;e._super(),e.resizeDragHelper=new t(this._id,{start:function(){e.fire("ResizeStart")},drag:function(t){"both"!=e.settings.direction&&(t.deltaX=0),e.fire("Resize",t)},stop:function(){e.fire("ResizeEnd")}})},remove:function(){return this.resizeDragHelper&&this.resizeDragHelper.destroy(),this._super()}})}),r(It,[ke],function(e){function t(e){var t="";if(e)for(var n=0;n<e.length;n++)t+='<option value="'+e[n]+'">'+e[n]+"</option>";return t}return e.extend({Defaults:{classes:"selectbox",role:"selectbox",options:[]},init:function(e){var t=this;t._super(e),t.settings.size&&(t.size=t.settings.size),t.settings.options&&(t._options=t.settings.options)},options:function(e){return arguments.length?(this.state.set("options",e),this):this.state.get("options")},renderHtml:function(){var e=this,n,r="";return n=t(e._options),e.size&&(r=' size = "'+e.size+'"'),'<select id="'+e._id+'" class="'+e.classes+'"'+r+">"+n+"</select>"},bindStates:function(){var e=this;return e.state.on("change:options",function(n){e.getEl().innerHTML=t(n.value)}),e._super()}})}),r(Ft,[ke,ve,ce],function(e,t,n){function r(e,t,n){return t>e&&(e=t),e>n&&(e=n),e}function i(e,t){var r,i,o,a,s;"v"==e.settings.orientation?(a="top",o="height",i="h"):(a="left",o="width",i="w"),r=(e.layoutRect()[i]||100)-n.getSize(e.getEl("handle"))[o],s=r*((t-e._minValue)/(e._maxValue-e._minValue))+"px",e.getEl("handle").style[a]=s,e.getEl("handle").style.height=e.layoutRect().h+"px"}return e.extend({init:function(e){var t=this;e.previewFilter||(e.previewFilter=function(e){return Math.round(100*e)/100}),t._super(e),t.classes.add("slider"),"v"==e.orientation&&t.classes.add("vertical"),t._minValue=e.minValue||0,t._maxValue=e.maxValue||100,t._initValue=t.state.get("value")},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix;return'<div id="'+t+'" class="'+e.classes+'"><div id="'+t+'-handle" class="'+n+'slider-handle"></div></div>'},reset:function(){this.value(this._initValue).repaint()},postRender:function(){var e=this,i,o,a=0,s,l,c,u,d,f,h,p;l=e._minValue,c=e._maxValue,s=e.value(),"v"==e.settings.orientation?(d="screenY",f="top",h="height",p="h"):(d="screenX",f="left",h="width",p="w"),e._super(),e._dragHelper=new t(e._id,{handle:e._id+"-handle",start:function(t){i=t[d],o=parseInt(e.getEl("handle").style[f],10),u=(e.layoutRect()[p]||100)-n.getSize(e.getEl("handle"))[h],e.fire("dragstart",{value:s})},drag:function(t){var n=t[d]-i,h=e.getEl("handle");a=r(o+n,0,u),h.style[f]=a+"px",s=l+a/u*(c-l),e.value(s),e.tooltip().text(""+e.settings.previewFilter(s)).show().moveRel(h,"bc tc"),e.fire("drag",{value:s})},stop:function(){e.tooltip().hide(),e.fire("dragend",{value:s})}})},repaint:function(){this._super(),i(this,this.value())},bindStates:function(){var e=this;return e.state.on("change:value",function(t){i(e,t.value)}),e._super()}})}),r(zt,[ke],function(e){return e.extend({renderHtml:function(){var e=this;return e.classes.add("spacer"),e.canFocus=!1,'<div id="'+e._id+'" class="'+e.classes+'"></div>'}})}),r(Wt,[Dt,ce,g],function(e,t,n){return e.extend({Defaults:{classes:"widget btn splitbtn",role:"button"},repaint:function(){var e=this,r=e.getEl(),i=e.layoutRect(),o,a;return e._super(),o=r.firstChild,a=r.lastChild,n(o).css({width:i.w-t.getSize(a).width,height:i.h-2}),n(a).css({height:i.h-2}),e},activeMenu:function(e){var t=this;n(t.getEl().lastChild).toggleClass(t.classPrefix+"active",e)},renderHtml:function(){var e=this,t=e._id,n=e.classPrefix,r,i=e.state.get("icon"),o=e.state.get("text"),a="";return r=e.settings.image,r?(i="none","string"!=typeof r&&(r=window.getSelection?r[0]:r[1]),r=" style=\"background-image: url('"+r+"')\""):r="",i=e.settings.icon?n+"ico "+n+"i-"+i:"",o&&(e.classes.add("btn-has-text"),a='<span class="'+n+'txt">'+e.encode(o)+"</span>"),'<div id="'+t+'" class="'+e.classes+'" role="button" tabindex="-1"><button type="button" hidefocus="1" tabindex="-1">'+(i?'<i class="'+i+'"'+r+"></i>":"")+a+'</button><button type="button" class="'+n+'open" hidefocus="1" tabindex="-1">'+(e._menuBtnText?(i?"\xa0":"")+e._menuBtnText:"")+' <i class="'+n+'caret"></i></button></div>'},postRender:function(){var e=this,t=e.settings.onclick;return e.on("click",function(e){var n=e.target;if(e.control==this)for(;n;){if(e.aria&&"down"!=e.aria.key||"BUTTON"==n.nodeName&&-1==n.className.indexOf("open"))return e.stopImmediatePropagation(),void(t&&t.call(this,e));n=n.parentNode}}),delete e.settings.onclick,e._super()}})}),r(Vt,[_t],function(e){return e.extend({Defaults:{containerClass:"stack-layout",controlClass:"stack-layout-item",endClass:"break"},isNative:function(){return!0}})}),r(Ut,[be,g,ce],function(e,t,n){return e.extend({Defaults:{layout:"absolute",defaults:{type:"panel"}},activateTab:function(e){var n;this.activeTabId&&(n=this.getEl(this.activeTabId),t(n).removeClass(this.classPrefix+"active"),n.setAttribute("aria-selected","false")),this.activeTabId="t"+e,n=this.getEl("t"+e),n.setAttribute("aria-selected","true"),t(n).addClass(this.classPrefix+"active"),this.items()[e].show().fire("showtab"),this.reflow(),this.items().each(function(t,n){e!=n&&t.hide()})},renderHtml:function(){var e=this,t=e._layout,n="",r=e.classPrefix;return e.preRender(),t.preRender(e),e.items().each(function(t,i){var o=e._id+"-t"+i;t.aria("role","tabpanel"),t.aria("labelledby",o),n+='<div id="'+o+'" class="'+r+'tab" unselectable="on" role="tab" aria-controls="'+t._id+'" aria-selected="false" tabIndex="-1">'+e.encode(t.settings.title)+"</div>"}),'<div id="'+e._id+'" class="'+e.classes+'" hidefocus="1" tabindex="-1"><div id="'+e._id+'-head" class="'+r+'tabs" role="tablist">'+n+'</div><div id="'+e._id+'-body" class="'+e.bodyClasses+'">'+t.renderHtml(e)+"</div></div>"},postRender:function(){var e=this;e._super(),e.settings.activeTab=e.settings.activeTab||0,e.activateTab(e.settings.activeTab),this.on("click",function(t){var n=t.target.parentNode;if(t.target.parentNode.id==e._id+"-head")for(var r=n.childNodes.length;r--;)n.childNodes[r]==t.target&&e.activateTab(r)})},initLayoutRect:function(){var e=this,t,r,i;r=n.getSize(e.getEl("head")).width,r=0>r?0:r,i=0,e.items().each(function(e){r=Math.max(r,e.layoutRect().minW),i=Math.max(i,e.layoutRect().minH)}),e.items().each(function(e){e.settings.x=0,e.settings.y=0,e.settings.w=r,e.settings.h=i,e.layoutRect({x:0,y:0,w:r,h:i})});var o=n.getSize(e.getEl("head")).height;return e.settings.minWidth=r,e.settings.minHeight=i+o,t=e._super(),t.deltaH+=o,t.innerH=t.h-t.deltaH,t}})}),r($t,[ke],function(e){return e.extend({init:function(e){var t=this;t._super(e),t.classes.add("textbox"),e.multiline?t.classes.add("multiline"):(t.on("keydown",function(e){var n;13==e.keyCode&&(e.preventDefault(),t.parents().reverse().each(function(e){return e.toJSON?(n=e,!1):void 0}),t.fire("submit",{data:n.toJSON()}))}),t.on("keyup",function(e){t.state.set("value",e.target.value)}))},repaint:function(){var e=this,t,n,r,i,o=0,a;t=e.getEl().style,n=e._layoutRect,a=e._lastRepaintRect||{};var s=document;return!e.settings.multiline&&s.all&&(!s.documentMode||s.documentMode<=8)&&(t.lineHeight=n.h-o+"px"),r=e.borderBox,i=r.left+r.right+8,o=r.top+r.bottom+(e.settings.multiline?8:0),n.x!==a.x&&(t.left=n.x+"px",a.x=n.x),n.y!==a.y&&(t.top=n.y+"px",a.y=n.y),n.w!==a.w&&(t.width=n.w-i+"px",a.w=n.w),n.h!==a.h&&(t.height=n.h-o+"px",a.h=n.h),e._lastRepaintRect=a,e.fire("repaint",{},!1),e},renderHtml:function(){var e=this,t=e._id,n=e.settings,r=e.encode(e.state.get("value"),!1),i="";return"spellcheck"in n&&(i+=' spellcheck="'+n.spellcheck+'"'),n.maxLength&&(i+=' maxlength="'+n.maxLength+'"'),n.size&&(i+=' size="'+n.size+'"'),n.subtype&&(i+=' type="'+n.subtype+'"'),e.disabled()&&(i+=' disabled="disabled"'),n.multiline?'<textarea id="'+t+'" class="'+e.classes+'" '+(n.rows?' rows="'+n.rows+'"':"")+' hidefocus="1"'+i+">"+r+"</textarea>":'<input id="'+t+'" class="'+e.classes+'" value="'+r+'" hidefocus="1"'+i+" />"},value:function(e){return arguments.length?(this.state.set("value",e),this):(this.state.get("rendered")&&this.state.set("value",this.getEl().value),this.state.get("value"))},postRender:function(){var e=this;e._super(),e.$el.on("change",function(t){e.state.set("value",t.target.value),e.fire("change",t)})},bindStates:function(){var e=this;return e.state.on("change:value",function(t){e.getEl().value!=t.value&&(e.getEl().value=t.value)}),e.state.on("change:disabled",function(t){e.getEl().disabled=t.value}),e._super()},remove:function(){this.$el.off(),this._super()}})}),r(qt,[g,he,u],function(e,t,n){return function(r,i){var o=this,a,s=t.classPrefix;o.show=function(t,l){return o.hide(),a=!0,n.setTimeout(function(){a&&(e(r).append('<div class="'+s+"throbber"+(i?" "+s+"throbber-inline":"")+'"></div>'),l&&l())},t),o},o.hide=function(){var e=r.lastChild;return e&&-1!=e.className.indexOf("throbber")&&e.parentNode.removeChild(e),a=!1,o}}}),a([l,c,u,d,f,h,m,g,v,y,C,w,E,N,T,A,B,D,M,L,P,H,I,F,j,Y,G,J,ee,te,ne,re,oe,se,le,fe,he,pe,me,ge,ve,ye,be,Ce,xe,we,Ee,Ne,_e,Se,ke,Te,Re,Ae,Me,Pe,Ke,Ge,Je,Qe,et,tt,nt,rt,it,ot,at,st,lt,ct,ut,dt,ft,ht,pt,mt,gt,vt,yt,bt,Ct,xt,wt,Et,Nt,_t,St,kt,Tt,Rt,At,Bt,Dt,Mt,Lt,Pt,Ht,Ot,It,Ft,zt,Wt,Vt,Ut,$t,qt])}(this);;
/*--- END: /var/www/html/cryptos/plugins/tinymce/tinymce.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/tinymce/jquery.tinymce.min.js---*/
!function(e){function t(){function t(e){"remove"===e&&this.each(function(e,t){var n=i(t);n&&n.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(e,t){var n=tinymce.get(t.id.replace(/_parent$/,""));n&&n.remove()})}function r(e){var n,r=this;if(null!=e)t.call(r),r.each(function(t,n){var r;(r=tinymce.get(n.id))&&r.setContent(e)});else if(r.length>0&&(n=tinymce.get(r[0].id)))return n.getContent()}function i(e){var t=null;return e&&e.id&&a.tinymce&&(t=tinymce.get(e.id)),t}function o(e){return!!(e&&e.length&&a.tinymce&&e.is(":tinymce"))}var s={};e.each(["text","html","val"],function(t,a){var l=s[a]=e.fn[a],c="text"===a;e.fn[a]=function(t){var a=this;if(!o(a))return l.apply(a,arguments);if(t!==n)return r.call(a.filter(":tinymce"),t),l.apply(a.not(":tinymce"),arguments),a;var s="",u=arguments;return(c?a:a.eq(0)).each(function(t,n){var r=i(n);s+=r?c?r.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):r.getContent({save:!0}):l.apply(e(n),u)}),s}}),e.each(["append","prepend"],function(t,r){var a=s[r]=e.fn[r],l="prepend"===r;e.fn[r]=function(e){var t=this;return o(t)?e!==n?("string"==typeof e&&t.filter(":tinymce").each(function(t,n){var r=i(n);r&&r.setContent(l?e+r.getContent():r.getContent()+e)}),a.apply(t.not(":tinymce"),arguments),t):void 0:a.apply(t,arguments)}}),e.each(["remove","replaceWith","replaceAll","empty"],function(n,r){var i=s[r]=e.fn[r];e.fn[r]=function(){return t.call(this,r),i.apply(this,arguments)}}),s.attr=e.fn.attr,e.fn.attr=function(t,a){var l=this,c=arguments;if(!t||"value"!==t||!o(l))return a!==n?s.attr.apply(l,c):s.attr.apply(l,c);if(a!==n)return r.call(l.filter(":tinymce"),a),s.attr.apply(l.not(":tinymce"),c),l;var u=l[0],d=i(u);return d?d.getContent({save:!0}):s.attr.apply(e(u),c)}}var n,r,i,o=[],a=window;e.fn.tinymce=function(n){function s(){var r=[],o=0;i||(t(),i=!0),d.each(function(e,t){var i,a=t.id,s=n.oninit;a||(t.id=a=tinymce.DOM.uniqueId()),tinymce.get(a)||(i=new tinymce.Editor(a,n,tinymce.EditorManager),r.push(i),i.on("init",function(){var e,t=s;d.css("visibility",""),s&&++o==r.length&&("string"==typeof t&&(e=-1===t.indexOf(".")?null:tinymce.resolve(t.replace(/\.\w+$/,"")),t=tinymce.resolve(t)),t.apply(e||tinymce,r))}))}),e.each(r,function(e,t){t.render()})}var l,c,u,d=this,f="";if(!d.length)return d;if(!n)return window.tinymce?tinymce.get(d[0].id):null;if(d.css("visibility","hidden"),a.tinymce||r||!(l=n.script_url))1===r?o.push(s):s();else{r=1,c=l.substring(0,l.lastIndexOf("/")),-1!=l.indexOf(".min")&&(f=".min"),a.tinymce=a.tinyMCEPreInit||{base:c,suffix:f},-1!=l.indexOf("gzip")&&(u=n.language||"en",l=l+(/\?/.test(l)?"&":"?")+"js=true&core=true&suffix="+escape(f)+"&themes="+escape(n.theme||"modern")+"&plugins="+escape(n.plugins||"")+"&languages="+(u||""),a.tinyMCE_GZ||(a.tinyMCE_GZ={start:function(){function t(e){tinymce.ScriptLoader.markDone(tinymce.baseURI.toAbsolute(e))}t("langs/"+u+".js"),t("themes/"+n.theme+"/theme"+f+".js"),t("themes/"+n.theme+"/langs/"+u+".js"),e.each(n.plugins.split(","),function(e,n){n&&(t("plugins/"+n+"/plugin"+f+".js"),t("plugins/"+n+"/langs/"+u+".js"))})},end:function(){}}));var p=document.createElement("script");p.type="text/javascript",p.onload=p.onreadystatechange=function(t){t=t||window.event,2===r||"load"!=t.type&&!/complete|loaded/.test(p.readyState)||(tinymce.dom.Event.domLoaded=1,r=2,n.script_loaded&&n.script_loaded(),s(),e.each(o,function(e,t){t()}))},p.src=l,document.body.appendChild(p)}return d},e.extend(e.expr[":"],{tinymce:function(e){var t;return e.id&&"tinymce"in window&&(t=tinymce.get(e.id),t&&t.editorManager===tinymce)?!0:!1}})}(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/tinymce/jquery.tinymce.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.core.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){function i(t,i){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&s(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var n=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,n,a=e(this[0]);a.length&&a[0]!==document;){if(s=a.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(n=parseInt(a.css("zIndex"),10),!isNaN(n)&&0!==n))return n;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++n)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),n=isNaN(s);return(n||s>=0)&&i(t,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function n(t,i,s,n){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),n&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===s?["Left","Right"]:["Top","Bottom"],o=s.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?r["inner"+s].call(this):this.each(function(){e(this).css(o,n(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?r["outer"+s].call(this,t):this.each(function(){e(this).css(o,n(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i){var s,n=e.plugins[t];if(n&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;n.length>s;s++)e.options[n[s][0]]&&n[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)}})})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.core.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.widget.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,o,r,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},o=e[u][i],r=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new r(e,i)},e.extend(r,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),r.prototype=e.widget.extend(h,{widgetEventPrefix:o?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:u,widgetName:i,widgetFullName:a}),o?(e.each(o._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete o._childConstructors):s._childConstructors.push(r),e.widget.bridge(i,r)},e.widget.extend=function(i){for(var n,a,o=s.call(arguments,1),r=0,h=o.length;h>r;r++)for(n in o[r])a=o[r][n],o[r].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(o){var r="string"==typeof o,h=s.call(arguments,1),l=this;return o=!r&&h.length?e.widget.extend.apply(null,[o].concat(h)):o,r?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(s=n[o].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+o+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+o+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(o||{})._init():e.data(this,a,new n(o,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,o,r=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(a=r[i]=e.widget.extend({},this.options[i]),o=0;n.length-1>o;o++)a[n[o]]=a[n[o]]||{},a=a[n[o]];if(i=n.pop(),1===arguments.length)return a[i]===t?null:a[i];a[i]=s}else{if(1===arguments.length)return this.options[i]===t?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,o=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,r){function h(){return i||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof r?o[r]:r).apply(o,arguments):t}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+o.eventNamespace,d=l[2];d?a.delegate(d,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.widget.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.mouse.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.mouse.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.sortable.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){function t(e,t,i){return e>t&&t+i>e}function i(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))}e.widget("ui.sortable",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||i(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this.ready=!0},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_setOption:function(t,i){"disabled"===t?(this.options[t]=i,this.widget().toggleClass("ui-sortable-disabled",!!i)):e.Widget.prototype._setOption.apply(this,arguments)},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):undefined}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-e(document).scrollTop()<o.scrollSensitivity?r=e(document).scrollTop(e(document).scrollTop()-o.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<o.scrollSensitivity&&(r=e(document).scrollTop(e(document).scrollTop()+o.scrollSpeed)),t.pageX-e(document).scrollLeft()<o.scrollSensitivity?r=e(document).scrollLeft(e(document).scrollLeft()-o.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<o.scrollSensitivity&&(r=e(document).scrollLeft(e(document).scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var i="x"===this.options.axis||t(this.positionAbs.top+this.offset.click.top,e.top,e.height),s="y"===this.options.axis||t(this.positionAbs.left+this.offset.click.left,e.left,e.width),n=i&&s,a=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection();return n?this.floating?o&&"right"===o||"down"===a?2:1:a&&("down"===a?2:1):!1},_intersectsWithSides:function(e){var i=t(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),s=t(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return this.floating&&a?"right"===a&&s||"left"===a&&!s:n&&("down"===n&&i||"up"===n&&!i)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(s){var n,a,o,r,h,l,u,d,c,p,f=null,m=null;for(n=this.containers.length-1;n>=0;n--)if(!e.contains(this.currentItem[0],this.containers[n].element[0]))if(this._intersectsWith(this.containers[n].containerCache)){if(f&&e.contains(this.containers[n].element[0],f.element[0]))continue;f=this.containers[n],m=n}else this.containers[n].containerCache.over&&(this.containers[n]._trigger("out",s,this._uiHash(this)),this.containers[n].containerCache.over=0);if(f)if(1===this.containers.length)this.containers[m].containerCache.over||(this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1);else{for(o=1e4,r=null,p=f.floating||i(this.currentItem),h=p?"left":"top",l=p?"width":"height",u=this.positionAbs[h]+this.offset.click[h],a=this.items.length-1;a>=0;a--)e.contains(this.containers[m].element[0],this.items[a].item[0])&&this.items[a].item[0]!==this.currentItem[0]&&(!p||t(this.positionAbs.top+this.offset.click.top,this.items[a].top,this.items[a].height))&&(d=this.items[a].item.offset()[h],c=!1,Math.abs(d-u)>Math.abs(d+this.items[a][l]-u)&&(c=!0,d+=this.items[a][l]),o>Math.abs(d-u)&&(o=Math.abs(d-u),r=this.items[a],this.direction=c?"up":"down"));if(!r&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[m])return;r?this._rearrange(s,r,null,!0):this._rearrange(s,null,this.containers[m].element,!0),this._trigger("change",s,this._uiHash()),this.containers[m]._trigger("change",s,this._uiHash(this)),this.currentContainer=this.containers[m],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[m]._trigger("over",s,this._uiHash(this)),this.containers[m].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,e("document"===n.containment?document:window).width()-this.helperProportions.width-this.margins.left,(e("document"===n.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,this.cancelHelperRemoval){if(!t){for(this._trigger("beforeStop",e,this._uiHash()),s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!1}if(t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null,!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!0},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}})})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.sortable.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.ui.slider.min.js---*/
/*! jQuery UI - v1.10.4 - 2015-07-05
* http://jqueryui.com
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){var t=5;e.widget("ui.slider",e.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var e=this.handles.add(this.range).filter("a");this._off(e),this._on(e,this._handleEvents),this._hoverable(e),this._focusable(e)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),undefined;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),e.Widget.prototype._setOption.apply(this,arguments),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=e(i.target).data("ui-slider-handle-index");switch(i.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case e.ui.keyCode.HOME:a=this._valueMin();break;case e.ui.keyCode.END:a=this._valueMax();break;case e.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/t);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(e){e.preventDefault()},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}})})(jQuery);;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.ui.slider.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/plugins/jquery/jquery.cookie.min.js---*/
/*! jquery.cookie v1.4.1 | MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});;
/*--- END: /var/www/html/cryptos/plugins/jquery/jquery.cookie.min.js---*/

/*--- BEGIN: /var/www/html/cryptos/inc/js/classes/BxDolPageBuilder.js---*/
function BxDolPageBuilder(options) {
	this.options = options;
	this.loadAreas();
}

BxDolPageBuilder.prototype.resetPage = function() {
	var $this = this;
	$(document).dolPopupConfirm({
		message: _t('_adm_pbuilder_Reset_page_warning'),
		onClickYes: function() {
			$.post(
			$this.options.parser,
			{
				action: 'resetPage',
				Page: $this.options.page
			},
			function() {
				location.reload();
			}
			);
		}
	});
};

BxDolPageBuilder.prototype.loadAreas = function() {
	var _builder = this;

	this.activeArea = $('#activeBlocksArea').get(0);
	this.inactiveArea = $('#inactiveBlocksArea').get(0);
	this.samplesArea = $('#samplesBlocksArea').get(0);
	this.eAllAreas = $(this.activeArea).add(this.inactiveArea).add(this.samplesArea).parent().parent().get(0);

	$.getJSON(
	this.options.parser,
	{
		action: 'load',
		Page: this.options.page
	},
	function(oJSON) {
		_builder.loadJSON(oJSON);
	}
	);
};

BxDolPageBuilder.prototype.loadJSON = function(oJSON) {
	var _builder = this;

	if(!oJSON.active || !oJSON.widths || !oJSON.inactive || !oJSON.samples || !oJSON.min_widths)
		return false;

	$(this.activeArea).html('');
	$(this.inactiveArea).html('');
	$(this.samplesArea).html('');

	this.minWidths = oJSON.min_widths;

	var iColumns = 0;

	//active blocks
	for(var iColumn in oJSON.widths) {
		var iWidth = oJSON.widths[iColumn];
		var aBlocks = oJSON.active[iColumn];
		var aBlocksOrder = oJSON.active_order[iColumn];
		this.drawColumn(iColumn, iWidth, aBlocks, aBlocksOrder, true);

		iColumns++;
	}

	this.checkAddColumn();

	//inactive blocks
	for(var iBlockID in oJSON.inactive) {
		var sBlockCaption = oJSON.inactive[iBlockID];
		this.drawBlock(parseInt(iBlockID), sBlockCaption, this.inactiveArea);
	}

	//sample blocks
	for(var iBlockID in oJSON.samples) {
		var sBlockCaption = oJSON.samples[iBlockID];
		this.drawBlock(iBlockID, sBlockCaption, this.samplesArea);
	}

	$(this.inactiveArea).append('<div class="buildBlockFake"></div> <div class="clear_both"></div>');
	$(this.samplesArea).append('<div class="clear_both"></div>');

	this.initPageWidthSlider();
	this.initOtherPagesWidthSlider();
	this.initColsSlider();
	this.checkBlocksMaxWidths();
	this.activateSortables();
};

BxDolPageBuilder.prototype.initPageWidthSlider = function() {
	var _builder = this;
	var $slider = $('#pageWidthSlider');

	if(!$slider.length)
		return false;

	$slider.slider({
		min: this.options.pageWidthMin,
		max: this.options.pageWidthMax + 1,
		value: this.width2slider(this.options.pageWidth),
		change: function(e, ui) {
			_builder.onWidthSliderStop(ui.value)
		},
		slide: function(e, ui) {
			_builder.onWidthSliderMove(ui.value)
		}
	});

	$('#pageWidthValue').html(this.options.pageWidth);
};

BxDolPageBuilder.prototype.initOtherPagesWidthSlider = function() {
	var _builder = this;
	var $slider = $('#pageWidthSlider1');

	if(!$slider.length)
		return false;

	$slider.slider({
		min: this.options.pageWidthMin,
		max: this.options.pageWidthMax + 1,
		value: this.width2slider(this.options.otherPagesWidth),
		change: function(e, ui) {
			_builder.onOtherWidthSliderStop(ui.value)
		},
		slide: function(e, ui) {
			_builder.onOtherWidthSliderMove(ui.value)
		}
	});

	$('#pageWidthValue1').html(this.options.otherPagesWidth);
};

BxDolPageBuilder.prototype.width2slider = function(sCurWidth) {
	if(sCurWidth == '100%')
		return this.options.pageWidthMax + 1;

	return parseInt(sCurWidth);
};

BxDolPageBuilder.prototype.slider2width = function(iSliderVal) {
	if(iSliderVal > this.options.pageWidthMax)
		return '100%';

	return iSliderVal + 'px';
};

BxDolPageBuilder.prototype.onWidthSliderStop = function(value) {
	var _builder = this;

	//set current page width
	this.options.pageWidth = this.slider2width(value);

	//submit page width
	$.post(this.options.parser, {
		action: 'savePageWidth',
		Page: this.options.page,
		width: this.options.pageWidth
	},
	function(sResponse) {
		if(sResponse != 'OK')
			alert(sResponse);
	});

	//update columns headers
	$('.buildColumn', this.activeArea).each(function(iInd) {
		_builder.setColumnHeader(this, (iInd + 1));
	});

	this.checkBlocksMaxWidths();
};

BxDolPageBuilder.prototype.onWidthSliderMove = function(value) {
	var sCurPageWidth = this.slider2width(value);
	$('#pageWidthValue').html(sCurPageWidth);
};

BxDolPageBuilder.prototype.onOtherWidthSliderStop = function(value) {
	var _builder = this;

	//set current page width
	this.options.otherPagesWidth = this.slider2width(value);

	//submit page width
	$.post(this.options.parser, {
		action: 'saveOtherPagesWidth',
		Page: this.options.page,
		width: this.options.otherPagesWidth
	},
	function(sResponse) {
		if(sResponse != 'OK')
			alert(sResponse);
	});
};

BxDolPageBuilder.prototype.onOtherWidthSliderMove = function(value) {
	var sCurPageWidth = this.slider2width(value);
	$('#pageWidthValue1').html(sCurPageWidth);
};

BxDolPageBuilder.prototype.checkBlocksMaxWidths = function() {
	//remove alerts
	$('.blockAlert').remove();

	if(this.options.pageWidth == '100%')
		return; //do not check

	for(var iBlockID in this.minWidths) {
		var iBlockMinWidth = this.minWidths[iBlockID];

		var $block = $('#buildBlock_' + iBlockID);
		var iColumnWidth = Math.round(parseInt(this.options.pageWidth) * parseInt(getCssWidth($block.parent().parent()[0])) / 100);
		if(iColumnWidth < iBlockMinWidth) {
			$('<span class="sys-icon exclamation-triangle blockAlert"></span>')
			.appendTo($block)
			.hover(
			function() {
				showFloatDesc(_t('_adm_pbuilder_Column_non_enough_width_warn', iBlockMinWidth));
			},
			function() {
				hideFloatDesc();
			}
			)
			.mousemove(function(e) {
				moveFloatDesc(e)
			});
		}
	}
};

BxDolPageBuilder.prototype.checkAddColumn = function() {
	var iColumns = $('.buildColumn', this.activeArea).length;

	if(iColumns >= this.options.maxCols)
		$('#addColumnButton').attr('disabled', 'disabled');
	else
		$('#addColumnButton').removeAttr('disabled');

	if(this.options.page == undefined || this.options.page == '')
		$('#resetPage').attr('disabled', 'disabled');
	else
		$('#resetPage').removeAttr('disabled');
};

BxDolPageBuilder.prototype.addColumn = function() {
	this.drawColumn($('.buildColumn', this.activeArea).length, 0, {}, {});
	this.checkAddColumn();
	this.refreshSortables();
	this.reArrangeColumns();
};

BxDolPageBuilder.prototype.addFullColumn = function() {
	this.drawColumn($('.buildColumn', this.activeArea).length, 100, {}, {});
	this.checkAddColumn();
	this.refreshSortables();
	//this.reArrangeColumns();
};

BxDolPageBuilder.prototype.initColsSlider = function() {
	var iSliderValue = 0;
	var aSliderValues = [];
	var _builder = this;

	var rows = this.getColumnsRows();
	var aColumns = [];
	rows.map(function(columns) {
		if(columns.length > aColumns.length) {
			aColumns = columns;
		}
	});

	if(aColumns.length < 2)
		return; //dont insert

	for(var iSliderNum = 0; iSliderNum < (aColumns.length - 1); iSliderNum++) {
		iSliderValue += parseFloat(getCssWidth(aColumns[iSliderNum]));
		aSliderValues[iSliderNum] = 10 * iSliderValue;
	}

	//init slider
	if($('#columnsSlider').is(":ui-slider"))
		$('#columnsSlider').slider('destroy');

	$('#columnsSlider').slider({
		change: function(e, ui) {
			_builder.onColsSliderStop(ui)
		},
		slide: function(e, ui) {
			_builder.onColsSliderMove(ui)
		},
		max: 1000,
		values: aSliderValues
	});
};

BxDolPageBuilder.prototype.onColsSliderStop = function() {
	this.checkBlocksMaxWidths();
	this.submitWidths();
};

BxDolPageBuilder.prototype.onColsSliderMove = function(slider) {
	var _builder = this;
	var aValues = new Array();

	if(typeof slider.values == 'object') {
		var iCounter = 0;
		for(var iInd in slider.values)
			aValues[iCounter++] = slider.values[iInd] / 10;
	} else if(typeof slider.values == 'number')
		aValues[0] = slider.values / 10;
	aValues[aValues.length] = 100;

	var iMinusWidth = iInd = 0;
	$('.buildColumn', this.activeArea).each(function() {
		if($(this).is('.buildColumnFull')) {
			iInd = iMinusWidth = 0;
			return;
		}

		var iNewWidth = aValues[iInd] - iMinusWidth;

		$(this).css('width', iNewWidth + '%');
		_builder.setColumnHeader(this, (iInd + 1));

		iMinusWidth += iNewWidth;
		iInd++;
	});
};

BxDolPageBuilder.prototype.submit = function() {
	var _builder = this;
	var aColumns = new Array();

	//get columns
	$('.buildColumn', this.activeArea).each(function() {
		var iColumn = aColumns.length;

		//get blocks
		aColumns[iColumn] = new Array();
		$('.buildBlock', this).each(function() {
			var iItemID = parseInt(this.id.substr('buildBlock_'.length));
			aColumns[iColumn].push(iItemID);
		});
		aColumns[iColumn] = aColumns[iColumn].join(',');

		iColumn++;
	});

	$.post(
	this.options.parser, {
		action: 'saveBlocks',
		Page: this.options.page,
		'columns[]': aColumns,
		_t: new Date()
	},
	function(sResponse) {
		if(sResponse != 'OK')
			alert(sResponse);

		_builder.submitWidths();
	}
	);
};

BxDolPageBuilder.prototype.submitWidths = function() {
	var aWidths = new Array();

	$('.buildColumn', this.activeArea).each(function() {
		aWidths[aWidths.length] = parseFloat(getCssWidth(this));
	});

	$.post(
	this.options.parser,
	{
		action: 'saveColsWidths',
		Page: this.options.page,
		'widths[]': aWidths
	},
	function(sResponse) {
		if(sResponse != 'OK')
			alert(sResponse);
	}
	);
};

BxDolPageBuilder.prototype.setColumnHeader = function(parent, iNum, bIgnoreColsNum) {
	var _builder = this;
	var bIgnoreColsNum = bIgnoreColsNum || false;

	var iPerWidth = parseFloat(getCssWidth($(parent)[0]));
	var sPixAdd = '';

	if(this.options.pageWidth.substr(-2) == 'px') {
		var iPixWidth = Math.round(( parseInt(this.options.pageWidth) * iPerWidth ) / 100);
		sPixAdd = '/' + iPixWidth + 'px';
	}

	var $header = $('.buildColumnHeader', parent).html(_t('_adm_btn_Column') + ' ' + iNum + ' (' + iPerWidth + '%' + sPixAdd + ')');

	if(!$(parent).hasClass('buildColumnSpecial') && (bIgnoreColsNum || $('.buildColumn:not(.buildColumnSpecial)', this.activeArea).length > this.options.minCols)) {
		$header.append('<a href="#" title="Delete" id="linkDelete" title="' + _t('_delete') + '"><i class="sys-icon times"></i></a>').children('a').click(function() {
			$(document).dolPopupConfirm({
				message: _t('_adm_pbuilder_Column_delete_confirmation'),
				onClickYes: function() {
					_builder.deleteColumn(parent);
				}
			});

			return false;
		});
	}
};

BxDolPageBuilder.prototype.refreshColumnHeaders = function() {
	var _builder = this;
	$('.buildColumn', this.activeArea).each(function(iInd) {
		//update column header
		_builder.setColumnHeader(this, (iInd + 1));
	});
};

BxDolPageBuilder.prototype.deleteColumn = function(column) {
	$('.buildBlock', column).prependTo(this.inactiveArea);
	$(column).remove();

	this.checkAddColumn();
	this.reArrangeColumns();
};

BxDolPageBuilder.prototype.reArrangeColumns = function() {
	var _builder = this;

	var rows = this.getColumnsRows();

	var aRowWithMaxColumns = [];
	rows.map(function(columns) {
		if(columns.length > aRowWithMaxColumns.length) {
			aRowWithMaxColumns = columns;
		}
	});

	var $columns = $('.buildColumn:not(.buildColumnFull)', this.activeArea);
	var iNewWidth = Math.floor(10 * (100 / aRowWithMaxColumns.length)) / 10;

	$columns.css('width', iNewWidth + '%').each(function(iInd) {
		_builder.setColumnHeader(this, (iInd + 1));
	});

	this.initColsSlider();
	this.submit();
};

BxDolPageBuilder.prototype.destroySortables = function() {
	if(this.oSIColumns)
		this.oSIColumns.destroy();

	if(this.oSIBlocks)
		this.oSIBlocks.destroy();
};

BxDolPageBuilder.prototype.activateSortables = function() {
	var _builder = this;

	//--- Make Columns sortable ---//
	if($(this.activeArea).is(":ui-sortable"))
		$(this.activeArea).sortable('destroy');

	$(this.activeArea).sortable({
		items: '.buildColumn',
		hoverClass: 'buildHover',
		forceHelperSize: true,
		//appendTo: 'body',
		cancel: '.buildBlock',
		placeholder: 'buildColumn ui-sortable-placeholder',
		forcePlaceholderSize: true,
		stop: function() {
			_builder.columnsStopSort();
		}
	});

	//--- Make Blocks sortable ---//
	var $bl = $('.buildColumnCont', this.eAllAreas).add(this.inactiveArea).add(this.samplesArea);
	$bl.each(function() {
		if($(this).is(":ui-sortable"))
			$(this).sortable('destroy');
	});

	$bl.sortable({
		items: '.buildBlock,.buildBlockFake',
		connectWith: $bl,
		placeholder: 'buildBlock ui-sortable-placeholder',
		forcePlaceholderSize: true,
		start: function(e, ui) {
			_builder.blocksStartSort(ui.item[0]);
		},
		stop: function(e, ui) {
			_builder.blocksStopSort(ui.item[0]);
		}
	});
};

BxDolPageBuilder.prototype.refreshSortables = function() {
	this.activateSortables();
};

BxDolPageBuilder.prototype.getColumnsRows = function() {
	var rows = [];
	var rowsCount = 0;
	$('.buildColumn', this.activeArea).each(function() {
		if($(this).is('.buildColumnFull')) {
			rowsCount++;
			return;
		}

		if(typeof rows[rowsCount] === 'undefined') {
			rows[rowsCount] = [];
		}

		rows[rowsCount].push(this);
	});

	return rows;
};

BxDolPageBuilder.prototype.columnsStopSort = function(cycled) {
	var _builder = this;
	var columnsSlider = $('#columnsSlider');

	if(cycled == undefined) {
		setTimeout(function() {
			_builder.columnsStopSort(true)
		}, 600);
		return;
	}

	var rows = this.getColumnsRows();

	var aRowWithMaxColumns = [];
	rows.map(function(columns) {
		if(columns.length > aRowWithMaxColumns.length) {
			aRowWithMaxColumns = columns;
		}
	});

	var iCounter = 0;
	rows.map(function(row) {
		var iColumnCount = 0;

		row.map(function(column) {
			iCounter++;

			var iWidth = parseFloat(getCssWidth(aRowWithMaxColumns[iColumnCount]));
			$(column).css('width', iWidth + '%');

			iColumnCount++;
		});
	});

	this.refreshColumnHeaders();
	this.initColsSlider();

	this.submit();
};

BxDolPageBuilder.prototype.blocksStartSort = function(eDragged) {
	$(eDragged).find('.buildBlockCover').show();
};

BxDolPageBuilder.prototype.blocksStopSort = function(eDragged, cycled) {
	var _builder = this;

	if(cycled == undefined) {
		setTimeout(function() {
			_builder.blocksStopSort(eDragged, true)
		}, 600);
		return;
	}

	//check if the dragged element is sample
	if($('#' + eDragged.id, this.activeArea).length) { // if it is dragged to the active area
		var iBlockID = parseInt(eDragged.id.substr('buildBlock_'.length));
		$.post(
		this.options.parser,
		{
			action: 'checkNewBlock',
			Page: this.options.page,
			id: iBlockID
		},
		function(sResponse) {
			$('#buildBlock_' + iBlockID + ' .buildBlockCover').hide();

			if(sResponse == '') {
				_builder.submit();
			} else {
				var iNewBlockID = parseInt(sResponse);
				if(iNewBlockID)
					_builder.addBlock(iNewBlockID, eDragged);
				_builder.submit();
			}
		}
		);
	}
	else {
		$(eDragged).find('.buildBlockCover').hide();

		this.submit();
	}
};

BxDolPageBuilder.prototype.addBlock = function(iNewID, eBefore) {
	this.drawBlock(iNewID, $(eBefore).text(), this.samplesArea);

	$('#buildBlock_' + iNewID, this.samplesArea).insertBefore(eBefore);
	$(eBefore).prependTo(this.samplesArea);

	this.refreshSortables();
};

BxDolPageBuilder.prototype.drawColumn = function(iColumnNum, iWidth, aBlocks, aBlocksOrder, bFirstLoad) {
	$('div.clear_both', this.activeArea).remove();

	var bFirstLoad = bFirstLoad || false;

	// lets find the last "non" full width column
	var lastColumn = $('.buildColumn:not(.buildColumnFull)', this.activeArea).last();

	var $newColumn = $(
	'<div class="buildColumn' + (iWidth == 100 ? ' buildColumnFull' : '') + '" style="width:' + iWidth + '%;">' +
	'<div class="buildColumnCont">' +
	'<div class="buildColumnHeader"></div>' +
	'<div class="buildBlockFake"></div>' +
	'</div>' +
	'</div>'
	);

	if(bFirstLoad) {
		$newColumn.appendTo(this.activeArea);
	} else if(iWidth == 100 || !lastColumn[0]) {
		$newColumn.appendTo(this.activeArea);
	} else {
		$newColumn.insertAfter(lastColumn);
	}

	this.setColumnHeader($newColumn, iColumnNum, true);

	var eColumnCont = $('.buildColumnCont', $newColumn).get(0);

	for(var i in aBlocksOrder) {
		var iBlockID = aBlocksOrder[i];
		var sBlockCaption = aBlocks[iBlockID];
		this.drawBlock(iBlockID, sBlockCaption, eColumnCont);
	}

	$(this.activeArea).append('<div class="clear_both"></div>');
};

BxDolPageBuilder.prototype.drawBlock = function(iBlockID, sBlockCaption, eColumnCont) {
	var _builder = this;
	if(sBlockCaption.length == 0)
		sBlockCaption = _t('_Empty');

	$('<div class="buildBlock" id="buildBlock_' + iBlockID + '">' +
	'<i class="sys-icon arrows"></i>' +
	'<a href="#">' + sBlockCaption + '</a>' +
	'<div class="buildBlockCover"></div>' +
	'</div>').appendTo(eColumnCont).children('a').click(function() {
		_builder.openProperties(iBlockID);
		return false;
	});
};

BxDolPageBuilder.prototype.openProperties = function(iBlockID) {
	var $this = this;
	var oDate = new Date();

	$.post(
	this.options.parser,
	{
		action: 'loadEditForm',
		Page: this.options.page,
		id: iBlockID,
		_t: oDate.getTime()
	},
	function(sData) {
		var oPopup = $(sData).hide();
		$('#' + oPopup.attr('id')).remove();

		oPopup.prependTo('body').dolPopup({
			closeOnOuterClick: false,
			onHide: function() {
				if('undefined' != typeof(jQuery(document).tinymce))
					jQuery('#form_input_html' + iBlockID).tinymce().remove();

				$('#' + oPopup.attr('id')).remove();
			}
		});

		var oForm = oPopup.find('form');
		$(':reset[name=Cancel]', oForm).click(function() {
			oPopup.dolPopupHide({});
			return false;
		});

		$(':reset[name=Delete]', oForm).click(function() {
			$(document).dolPopupConfirm({
				message: _t('_adm_pbuilder_Want_to_delete'),
				onClickYes: function() {
					$this.deleteBlock(iBlockID);
					oPopup.dolPopupHide({});
				}
			});
		});

		oForm.ajaxForm({
			success: function(sResponse) {
				$this.updateBlock(iBlockID, sResponse);
				oPopup.dolPopupHide({});
			}
		});
	},
	'html'
	);
};

BxDolPageBuilder.prototype.deleteCustomPage = function(sPageName) {
	var $this = this;
	$(document).dolPopupConfirm({
		onClickYes: function() {
			$.post(
			$this.options.parser,
			{
				action: 'deleteCustomPage',
				Page: $this.options.page
			},
			function(sErrorMessage) {
				if(sErrorMessage) {
					alert(sErrorMessage);
					return;
				}

				window.location = $this.options.parser;
			}
			);
		}
	});
};

BxDolPageBuilder.prototype.deleteBlock = function(iBlockID) {
	$('#buildBlock_' + iBlockID).remove();
	$.post(this.options.parser, {
		action: 'deleteBlock',
		Page: this.options.page,
		id: iBlockID
	});
};

BxDolPageBuilder.prototype.updateBlock = function(iBlockID, sCaption) {
	$('#buildBlock_' + iBlockID + ' a').html(sCaption);
};

BxDolPageBuilder.prototype.getHorizScroll = function() {
	if(navigator.appName == "Microsoft Internet Explorer")
		return document.documentElement.scrollLeft;
	else
		return window.pageXOffset;
};

BxDolPageBuilder.prototype.getVertScroll = function() {
	if(navigator.appName == "Microsoft Internet Explorer")
		return document.documentElement.scrollTop;
	else
		return window.pageYOffset;
};

function showNewPageDialog(sParserUrl) {
	$.get(
	sParserUrl, {
		action_sys: 'loadNewPageForm'
	},
	function(sData) {
		var oPopup = $(sData).hide();
		$('#' + oPopup.attr('id')).remove();

		oPopup.prependTo('body');
		oPopup.dolPopup();

		var oForm = oPopup.find('form');
		$(':reset[name=Cancel]', oForm).click(function() {
			oPopup.dolPopupHide({});
			return false;
		});

		oForm.ajaxForm({
			success: function(oData) {
				if(oData && oData.code != undefined && oData.code != 0) {
					alert('Cannot create page. ' + oData.message);
					return;
				}

				if(oData && oData.uri != undefined)
					sParserUrl = sParserUrl + '?Page=' + oData.uri;

				window.location = sParserUrl;
			},
			dataType: 'json'
		});
	},
	'html'
	);
}

function getCssWidth(e) {
	if(window.getComputedStyle)
		return e.style.getPropertyValue("width");
	else if(e.currentStyle)
		return e.currentStyle['width'];
	else
		return 0;
}
;
/*--- END: /var/www/html/cryptos/inc/js/classes/BxDolPageBuilder.js---*/
