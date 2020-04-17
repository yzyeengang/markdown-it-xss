!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("markdown-it-xss",[],e):"object"==typeof exports?exports["markdown-it-xss"]=e():t["markdown-it-xss"]=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){var n=r(3),i=r(8);for(var o in(e=t.exports=function(t,e){return new i(e).process(t)}).FilterCSS=i,n)e[o]=n[o];"undefined"!=typeof window&&(window.filterCSS=t.exports)},function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},spaceIndex:function(t){var e=/\s|\n|\t/.exec(t);return e?e.index:-1}}},function(t,e,r){var n=r(0).FilterCSS,i=r(0).getDefaultWhiteList,o=r(1);function a(){return{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]}}var s=new n;function l(t){return t.replace(c,"&lt;").replace(u,"&gt;")}var c=/</g,u=/>/g,f=/"/g,g=/&quot;/g,p=/&#([a-zA-Z0-9]*);?/gim,d=/&colon;?/gim,h=/&newline;?/gim,m=/((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,b=/e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,v=/u\s*r\s*l\s*\(.*/gi;function y(t){return t.replace(f,"&quot;")}function w(t){return t.replace(g,'"')}function x(t){return t.replace(p,(function(t,e){return"x"===e[0]||"X"===e[0]?String.fromCharCode(parseInt(e.substr(1),16)):String.fromCharCode(parseInt(e,10))}))}function k(t){return t.replace(d,":").replace(h," ")}function A(t){for(var e="",r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<32?" ":t.charAt(r);return o.trim(e)}function T(t){return t=A(t=k(t=x(t=w(t))))}function S(t){return t=l(t=y(t))}var I=/<!--[\s\S]*?-->/g;e.whiteList={a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align","valign"],tt:[],u:[],ul:[],video:["autoplay","controls","loop","preload","src","height","width"]},e.getDefaultWhiteList=a,e.onTag=function(t,e,r){},e.onIgnoreTag=function(t,e,r){},e.onTagAttr=function(t,e,r){},e.onIgnoreTagAttr=function(t,e,r){},e.safeAttrValue=function(t,e,r,n){if(r=T(r),"href"===e||"src"===e){if("#"===(r=o.trim(r)))return"#";if("http://"!==r.substr(0,7)&&"https://"!==r.substr(0,8)&&"mailto:"!==r.substr(0,7)&&"tel:"!==r.substr(0,4)&&"#"!==r[0]&&"/"!==r[0])return""}else if("background"===e){if(m.lastIndex=0,m.test(r))return""}else if("style"===e){if(b.lastIndex=0,b.test(r))return"";if(v.lastIndex=0,v.test(r)&&(m.lastIndex=0,m.test(r)))return"";!1!==n&&(r=(n=n||s).process(r))}return r=S(r)},e.escapeHtml=l,e.escapeQuote=y,e.unescapeQuote=w,e.escapeHtmlEntities=x,e.escapeDangerHtml5Entities=k,e.clearNonPrintableCharacter=A,e.friendlyAttrValue=T,e.escapeAttrValue=S,e.onIgnoreTagStripAll=function(){return""},e.StripTagBody=function(t,e){"function"!=typeof e&&(e=function(){});var r=!Array.isArray(t),n=[],i=!1;return{onIgnoreTag:function(a,s,l){if(function(e){return!!r||-1!==o.indexOf(t,e)}(a)){if(l.isClosing){var c="[/removed]",u=l.position+c.length;return n.push([!1!==i?i:l.position,u]),i=!1,c}return i||(i=l.position),"[removed]"}return e(a,s,l)},remove:function(t){var e="",r=0;return o.forEach(n,(function(n){e+=t.slice(r,n[0]),r=n[1]})),e+=t.slice(r)}}},e.stripCommentTag=function(t){return t.replace(I,"")},e.stripBlankChar=function(t){var e=t.split("");return(e=e.filter((function(t){var e=t.charCodeAt(0);return 127!==e&&(!(e<=31)||(10===e||13===e))}))).join("")},e.cssFilter=s,e.getDefaultCSSWhiteList=i},function(t,e){function r(){var t={"align-content":!1,"align-items":!1,"align-self":!1,"alignment-adjust":!1,"alignment-baseline":!1,all:!1,"anchor-point":!1,animation:!1,"animation-delay":!1,"animation-direction":!1,"animation-duration":!1,"animation-fill-mode":!1,"animation-iteration-count":!1,"animation-name":!1,"animation-play-state":!1,"animation-timing-function":!1,azimuth:!1,"backface-visibility":!1,background:!0,"background-attachment":!0,"background-clip":!0,"background-color":!0,"background-image":!0,"background-origin":!0,"background-position":!0,"background-repeat":!0,"background-size":!0,"baseline-shift":!1,binding:!1,bleed:!1,"bookmark-label":!1,"bookmark-level":!1,"bookmark-state":!1,border:!0,"border-bottom":!0,"border-bottom-color":!0,"border-bottom-left-radius":!0,"border-bottom-right-radius":!0,"border-bottom-style":!0,"border-bottom-width":!0,"border-collapse":!0,"border-color":!0,"border-image":!0,"border-image-outset":!0,"border-image-repeat":!0,"border-image-slice":!0,"border-image-source":!0,"border-image-width":!0,"border-left":!0,"border-left-color":!0,"border-left-style":!0,"border-left-width":!0,"border-radius":!0,"border-right":!0,"border-right-color":!0,"border-right-style":!0,"border-right-width":!0,"border-spacing":!0,"border-style":!0,"border-top":!0,"border-top-color":!0,"border-top-left-radius":!0,"border-top-right-radius":!0,"border-top-style":!0,"border-top-width":!0,"border-width":!0,bottom:!1,"box-decoration-break":!0,"box-shadow":!0,"box-sizing":!0,"box-snap":!0,"box-suppress":!0,"break-after":!0,"break-before":!0,"break-inside":!0,"caption-side":!1,chains:!1,clear:!0,clip:!1,"clip-path":!1,"clip-rule":!1,color:!0,"color-interpolation-filters":!0,"column-count":!1,"column-fill":!1,"column-gap":!1,"column-rule":!1,"column-rule-color":!1,"column-rule-style":!1,"column-rule-width":!1,"column-span":!1,"column-width":!1,columns:!1,contain:!1,content:!1,"counter-increment":!1,"counter-reset":!1,"counter-set":!1,crop:!1,cue:!1,"cue-after":!1,"cue-before":!1,cursor:!1,direction:!1,display:!0,"display-inside":!0,"display-list":!0,"display-outside":!0,"dominant-baseline":!1,elevation:!1,"empty-cells":!1,filter:!1,flex:!1,"flex-basis":!1,"flex-direction":!1,"flex-flow":!1,"flex-grow":!1,"flex-shrink":!1,"flex-wrap":!1,float:!1,"float-offset":!1,"flood-color":!1,"flood-opacity":!1,"flow-from":!1,"flow-into":!1,font:!0,"font-family":!0,"font-feature-settings":!0,"font-kerning":!0,"font-language-override":!0,"font-size":!0,"font-size-adjust":!0,"font-stretch":!0,"font-style":!0,"font-synthesis":!0,"font-variant":!0,"font-variant-alternates":!0,"font-variant-caps":!0,"font-variant-east-asian":!0,"font-variant-ligatures":!0,"font-variant-numeric":!0,"font-variant-position":!0,"font-weight":!0,grid:!1,"grid-area":!1,"grid-auto-columns":!1,"grid-auto-flow":!1,"grid-auto-rows":!1,"grid-column":!1,"grid-column-end":!1,"grid-column-start":!1,"grid-row":!1,"grid-row-end":!1,"grid-row-start":!1,"grid-template":!1,"grid-template-areas":!1,"grid-template-columns":!1,"grid-template-rows":!1,"hanging-punctuation":!1,height:!0,hyphens:!1,icon:!1,"image-orientation":!1,"image-resolution":!1,"ime-mode":!1,"initial-letters":!1,"inline-box-align":!1,"justify-content":!1,"justify-items":!1,"justify-self":!1,left:!1,"letter-spacing":!0,"lighting-color":!0,"line-box-contain":!1,"line-break":!1,"line-grid":!1,"line-height":!1,"line-snap":!1,"line-stacking":!1,"line-stacking-ruby":!1,"line-stacking-shift":!1,"line-stacking-strategy":!1,"list-style":!0,"list-style-image":!0,"list-style-position":!0,"list-style-type":!0,margin:!0,"margin-bottom":!0,"margin-left":!0,"margin-right":!0,"margin-top":!0,"marker-offset":!1,"marker-side":!1,marks:!1,mask:!1,"mask-box":!1,"mask-box-outset":!1,"mask-box-repeat":!1,"mask-box-slice":!1,"mask-box-source":!1,"mask-box-width":!1,"mask-clip":!1,"mask-image":!1,"mask-origin":!1,"mask-position":!1,"mask-repeat":!1,"mask-size":!1,"mask-source-type":!1,"mask-type":!1,"max-height":!0,"max-lines":!1,"max-width":!0,"min-height":!0,"min-width":!0,"move-to":!1,"nav-down":!1,"nav-index":!1,"nav-left":!1,"nav-right":!1,"nav-up":!1,"object-fit":!1,"object-position":!1,opacity:!1,order:!1,orphans:!1,outline:!1,"outline-color":!1,"outline-offset":!1,"outline-style":!1,"outline-width":!1,overflow:!1,"overflow-wrap":!1,"overflow-x":!1,"overflow-y":!1,padding:!0,"padding-bottom":!0,"padding-left":!0,"padding-right":!0,"padding-top":!0,page:!1,"page-break-after":!1,"page-break-before":!1,"page-break-inside":!1,"page-policy":!1,pause:!1,"pause-after":!1,"pause-before":!1,perspective:!1,"perspective-origin":!1,pitch:!1,"pitch-range":!1,"play-during":!1,position:!1,"presentation-level":!1,quotes:!1,"region-fragment":!1,resize:!1,rest:!1,"rest-after":!1,"rest-before":!1,richness:!1,right:!1,rotation:!1,"rotation-point":!1,"ruby-align":!1,"ruby-merge":!1,"ruby-position":!1,"shape-image-threshold":!1,"shape-outside":!1,"shape-margin":!1,size:!1,speak:!1,"speak-as":!1,"speak-header":!1,"speak-numeral":!1,"speak-punctuation":!1,"speech-rate":!1,stress:!1,"string-set":!1,"tab-size":!1,"table-layout":!1,"text-align":!0,"text-align-last":!0,"text-combine-upright":!0,"text-decoration":!0,"text-decoration-color":!0,"text-decoration-line":!0,"text-decoration-skip":!0,"text-decoration-style":!0,"text-emphasis":!0,"text-emphasis-color":!0,"text-emphasis-position":!0,"text-emphasis-style":!0,"text-height":!0,"text-indent":!0,"text-justify":!0,"text-orientation":!0,"text-overflow":!0,"text-shadow":!0,"text-space-collapse":!0,"text-transform":!0,"text-underline-position":!0,"text-wrap":!0,top:!1,transform:!1,"transform-origin":!1,"transform-style":!1,transition:!1,"transition-delay":!1,"transition-duration":!1,"transition-property":!1,"transition-timing-function":!1,"unicode-bidi":!1,"vertical-align":!1,visibility:!1,"voice-balance":!1,"voice-duration":!1,"voice-family":!1,"voice-pitch":!1,"voice-range":!1,"voice-rate":!1,"voice-stress":!1,"voice-volume":!1,volume:!1,"white-space":!1,widows:!1,width:!0,"will-change":!1,"word-break":!0,"word-spacing":!0,"word-wrap":!0,"wrap-flow":!1,"wrap-through":!1,"writing-mode":!1,"z-index":!1};return t}var n=/javascript\s*\:/gim;e.whiteList=r(),e.getDefaultWhiteList=r,e.onAttr=function(t,e,r){},e.onIgnoreAttr=function(t,e,r){},e.safeAttrValue=function(t,e){return n.test(e)?"":e}},function(t,e){t.exports={indexOf:function(t,e){var r,n;if(Array.prototype.indexOf)return t.indexOf(e);for(r=0,n=t.length;r<n;r++)if(t[r]===e)return r;return-1},forEach:function(t,e,r){var n,i;if(Array.prototype.forEach)return t.forEach(e,r);for(n=0,i=t.length;n<i;n++)e.call(r,t[n],n,t)},trim:function(t){return String.prototype.trim?t.trim():t.replace(/(^\s*)|(\s*$)/g,"")},trimRight:function(t){return String.prototype.trimRight?t.trimRight():t.replace(/(\s*$)/g,"")}}},function(t,e,r){var n=r(1);function i(t){var e=n.spaceIndex(t);if(-1===e)var r=t.slice(1,-1);else r=t.slice(1,e+1);return"/"===(r=n.trim(r).toLowerCase()).slice(0,1)&&(r=r.slice(1)),"/"===r.slice(-1)&&(r=r.slice(0,-1)),r}function o(t){return"</"===t.slice(0,2)}var a=/[^a-zA-Z0-9_:\.\-]/gim;function s(t,e){for(;e<t.length;e++){var r=t[e];if(" "!==r)return"="===r?e:-1}}function l(t,e){for(;e>0;e--){var r=t[e];if(" "!==r)return"="===r?e:-1}}function c(t){return function(t){return'"'===t[0]&&'"'===t[t.length-1]||"'"===t[0]&&"'"===t[t.length-1]}(t)?t.substr(1,t.length-2):t}e.parseTag=function(t,e,r){var n="",a=0,s=!1,l=!1,c=0,u=t.length,f="",g="";for(c=0;c<u;c++){var p=t.charAt(c);if(!1===s){if("<"===p){s=c;continue}}else if(!1===l){if("<"===p){n+=r(t.slice(a,c)),s=c,a=c;continue}if(">"===p){n+=r(t.slice(a,s)),f=i(g=t.slice(s,c+1)),n+=e(s,n.length,f,g,o(g)),a=c+1,s=!1;continue}if(('"'===p||"'"===p)&&"="===t.charAt(c-1)){l=p;continue}}else if(p===l){l=!1;continue}}return a<t.length&&(n+=r(t.substr(a))),n},e.parseAttr=function(t,e){var r=0,i=[],o=!1,u=t.length;function f(t,r){if(!((t=(t=n.trim(t)).replace(a,"").toLowerCase()).length<1)){var o=e(t,r||"");o&&i.push(o)}}for(var g=0;g<u;g++){var p,d=t.charAt(g);if(!1!==o||"="!==d)if(!1===o||g!==r||'"'!==d&&"'"!==d||"="!==t.charAt(g-1))if(/\s|\n|\t/.test(d)){if(t=t.replace(/\s|\n|\t/g," "),!1===o){if(-1===(p=s(t,g))){f(n.trim(t.slice(r,g))),o=!1,r=g+1;continue}g=p-1;continue}if(-1===(p=l(t,g-1))){f(o,c(n.trim(t.slice(r,g)))),o=!1,r=g+1;continue}}else;else{if(-1===(p=t.indexOf(d,g+1)))break;f(o,n.trim(t.slice(r+1,p))),o=!1,r=(g=p)+1}else o=t.slice(r,g),r=g+1}return r<t.length&&(!1===o?f(t.slice(r)):f(o,c(n.trim(t.slice(r))))),n.trim(i.join(" "))}},function(t,e,r){var n=r(7);t.exports=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.xss,i=new n.FilterXSS("function"==typeof r?r(n):r);function o(t){return t=i.process(t)}function a(t){for(var e=0;e<t.tokens.length;e++){var r=t.tokens[e];if("html_block"===r.type&&(r.content=o(r.content)),"inline"===r.type)for(var n=r.children,i=0;i<n.length;i++)"html_inline"===n[i].type&&(n[i].content=o(n[i].content))}}t.core.ruler.after("linkify","xss",a)}},function(t,e,r){var n=r(2),i=r(5),o=r(10);function a(t,e){return new o(e).process(t)}for(var s in(e=t.exports=a).filterXSS=a,e.FilterXSS=o,n)e[s]=n[s];for(var s in i)e[s]=i[s];"undefined"!=typeof window&&(window.filterXSS=t.exports),"undefined"!=typeof self&&"undefined"!=typeof DedicatedWorkerGlobalScope&&self instanceof DedicatedWorkerGlobalScope&&(self.filterXSS=t.exports)},function(t,e,r){var n=r(3),i=r(9);r(4);function o(t){return null==t}function a(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).whiteList=t.whiteList||n.whiteList,t.onAttr=t.onAttr||n.onAttr,t.onIgnoreAttr=t.onIgnoreAttr||n.onIgnoreAttr,t.safeAttrValue=t.safeAttrValue||n.safeAttrValue,this.options=t}a.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onAttr,a=e.onIgnoreAttr,s=e.safeAttrValue;return i(t,(function(t,e,i,l,c){var u=r[i],f=!1;if(!0===u?f=u:"function"==typeof u?f=u(l):u instanceof RegExp&&(f=u.test(l)),!0!==f&&(f=!1),l=s(i,l)){var g,p={position:e,sourcePosition:t,source:c,isWhite:f};return f?o(g=n(i,l,p))?i+":"+l:g:o(g=a(i,l,p))?void 0:g}}))},t.exports=a},function(t,e,r){var n=r(4);t.exports=function(t,e){";"!==(t=n.trimRight(t))[t.length-1]&&(t+=";");var r=t.length,i=!1,o=0,a=0,s="";function l(){if(!i){var r=n.trim(t.slice(o,a)),l=r.indexOf(":");if(-1!==l){var c=n.trim(r.slice(0,l)),u=n.trim(r.slice(l+1));if(c){var f=e(o,s.length,c,u,r);f&&(s+=f+"; ")}}}o=a+1}for(;a<r;a++){var c=t[a];if("/"===c&&"*"===t[a+1]){var u=t.indexOf("*/",a+2);if(-1===u)break;o=(a=u+1)+1,i=!1}else"("===c?i=!0:")"===c?i=!1:";"===c?i||l():"\n"===c&&l()}return n.trim(s)}},function(t,e,r){var n=r(0).FilterCSS,i=r(2),o=r(5),a=o.parseTag,s=o.parseAttr,l=r(1);function c(t){return null==t}function u(t){(t=function(t){var e={};for(var r in t)e[r]=t[r];return e}(t||{})).stripIgnoreTag&&(t.onIgnoreTag&&console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),t.onIgnoreTag=i.onIgnoreTagStripAll),t.whiteList=t.whiteList||i.whiteList,t.onTag=t.onTag||i.onTag,t.onTagAttr=t.onTagAttr||i.onTagAttr,t.onIgnoreTag=t.onIgnoreTag||i.onIgnoreTag,t.onIgnoreTagAttr=t.onIgnoreTagAttr||i.onIgnoreTagAttr,t.safeAttrValue=t.safeAttrValue||i.safeAttrValue,t.escapeHtml=t.escapeHtml||i.escapeHtml,this.options=t,!1===t.css?this.cssFilter=!1:(t.css=t.css||{},this.cssFilter=new n(t.css))}u.prototype.process=function(t){if(!(t=(t=t||"").toString()))return"";var e=this.options,r=e.whiteList,n=e.onTag,o=e.onIgnoreTag,u=e.onTagAttr,f=e.onIgnoreTagAttr,g=e.safeAttrValue,p=e.escapeHtml,d=this.cssFilter;e.stripBlankChar&&(t=i.stripBlankChar(t)),e.allowCommentTag||(t=i.stripCommentTag(t));var h=!1;if(e.stripIgnoreTagBody){h=i.StripTagBody(e.stripIgnoreTagBody,o);o=h.onIgnoreTag}var m=a(t,(function(t,e,i,a,h){var m,b={sourcePosition:t,position:e,isClosing:h,isWhite:r.hasOwnProperty(i)};if(!c(m=n(i,a,b)))return m;if(b.isWhite){if(b.isClosing)return"</"+i+">";var v=function(t){var e=l.spaceIndex(t);if(-1===e)return{html:"",closing:"/"===t[t.length-2]};var r="/"===(t=l.trim(t.slice(e+1,-1)))[t.length-1];return r&&(t=l.trim(t.slice(0,-1))),{html:t,closing:r}}(a),y=r[i],w=s(v.html,(function(t,e){var r,n=-1!==l.indexOf(y,t);return c(r=u(i,t,e,n))?n?(e=g(i,t,e,d))?t+'="'+e+'"':t:c(r=f(i,t,e,n))?void 0:r:r}));a="<"+i;return w&&(a+=" "+w),v.closing&&(a+=" /"),a+=">"}return c(m=o(i,a,b))?p(a):m}),p);return h&&(m=h.remove(m)),m},t.exports=u}])}));