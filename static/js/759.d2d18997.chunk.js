(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[759],{7228:function(r){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n},r.exports.__esModule=!0,r.exports.default=r.exports},2858:function(r){r.exports=function(r){if(Array.isArray(r))return r},r.exports.__esModule=!0,r.exports.default=r.exports},3646:function(r,t,e){var n=e(7228);r.exports=function(r){if(Array.isArray(r))return n(r)},r.exports.__esModule=!0,r.exports.default=r.exports},3269:function(r,t,e){var n=e(379);r.exports=function(r,t){var e="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=n(r))||t&&r&&"number"===typeof r.length){e&&(r=e);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return u=r.done,r},e:function(r){c=!0,i=r},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw i}}}},r.exports.__esModule=!0,r.exports.default=r.exports},9713:function(r){r.exports=function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r},r.exports.__esModule=!0,r.exports.default=r.exports},6860:function(r){r.exports=function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)},r.exports.__esModule=!0,r.exports.default=r.exports},3884:function(r){r.exports=function(r,t){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,a=[],i=!0,u=!1;try{for(e=e.call(r);!(i=(n=e.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}},r.exports.__esModule=!0,r.exports.default=r.exports},521:function(r){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},8206:function(r){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},3038:function(r,t,e){var n=e(2858),o=e(3884),a=e(379),i=e(521);r.exports=function(r,t){return n(r)||o(r,t)||a(r,t)||i()},r.exports.__esModule=!0,r.exports.default=r.exports},319:function(r,t,e){var n=e(3646),o=e(6860),a=e(379),i=e(8206);r.exports=function(r){return n(r)||o(r)||a(r)||i()},r.exports.__esModule=!0,r.exports.default=r.exports},379:function(r,t,e){var n=e(7228);r.exports=function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}},r.exports.__esModule=!0,r.exports.default=r.exports},3908:function(r,t,e){"use strict";e.d(t,{aV:function(){return a},fh:function(){return i},M1:function(){return u},tx:function(){return c},z1:function(){return s}});var n=e(4569),o=e.n(n);o().defaults.baseURL="https://api.themoviedb.org",o().defaults.params={api_key:"b30723d90054545e6fdab6d6887d20fb",language:"en-US"};var a=function(){return o().get("/3/trending/movie/day?").then((function(r){return r.data.results})).catch((function(r){throw r}))},i=function(r){return o().get("/3/movie/".concat(r,"?")).then((function(r){return r.data})).catch((function(r){throw r}))},u=function(r){return o().get("/3/movie/".concat(r,"/credits?")).then((function(r){return r.data.cast})).catch((function(r){throw r}))},c=function(r){return o().get("/3/movie/".concat(r,"/reviews?")).then((function(r){return r.data.results})).catch((function(r){throw r}))},s=function(r){return o().get("/3/search/movie?query=".concat(r)).then((function(r){return r.data.results})).catch((function(r){throw r}))}},6239:function(r,t,e){"use strict";e.d(t,{Z:function(){return c}});var n=e(1523),o="Navigation_nav__7WdPp",a="Navigation_link__13qe6",i="Navigation_activeClass__sMsTd",u=e(184),c=function(){return(0,u.jsxs)("nav",{className:o,children:[(0,u.jsx)(n.OL,{exact:!0,className:a,activeClassName:i,to:"/",children:"Home"}),(0,u.jsx)(n.OL,{className:a,activeClassName:i,to:"/movies",children:"Movies"})]})}},1759:function(r,t,e){"use strict";e.r(t),e.d(t,{default:function(){return p}});var n=e(8152),o={form__wrapper:"MoivesPage_form__wrapper__tzXV4",SearchForm__input:"MoivesPage_SearchForm__input__ck7e+",link:"MoivesPage_link__nWKBj"},a=e(2791),i=e(9271),u=e(1523),c=e(4245),s=e(3908),l=e(6239),f=e(184),p=function(){var r=(0,a.useState)(""),t=(0,n.Z)(r,2),e=t[0],p=t[1],d=(0,i.k6)(),m=(0,i.TH)(),y=c.parse(m.search).query,v=(0,a.useState)([]),h=(0,n.Z)(v,2),g=h[0],x=h[1];(0,a.useEffect)((function(){y&&(0,s.z1)(y).then((function(r){return x(r)}))}),[y]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(l.Z,{}),(0,f.jsxs)("div",{className:o.form__wrapper,children:[(0,f.jsxs)("form",{className:o.SearchForm,onSubmit:function(r){r.preventDefault(),e&&function(r){d.push({pathname:"/movies",search:"?query="+r})}(e)},children:[(0,f.jsx)("input",{className:o.SearchForm__input,type:"text",autoComplete:"off",value:e,autoFocus:!0,placeholder:"Search movies",onChange:function(r){var t=r.target.value;p(t)}}),(0,f.jsx)("button",{type:"submit",className:o.SearchForm__button,children:"Search"})]}),(0,f.jsx)("ul",{className:o.movie,children:g&&g.map((function(r){return(0,f.jsx)("li",{children:(0,f.jsx)(u.rU,{to:{pathname:"/movies/".concat(r.id),state:{from:{location:m}}},className:o.link,children:r.title})},r.id)}))})]})]})}},9412:function(r){"use strict";var t="%[a-f0-9]{2}",e=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(r,t){try{return decodeURIComponent(r.join(""))}catch(a){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],o(e),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var t=r.match(e),n=1;n<t.length;n++)t=(r=o(t,n).join("")).match(e);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(r);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var i=a(o[0]);i!==o[0]&&(e[o[0]]=i)}o=n.exec(r)}e["%C2"]="\ufffd";for(var u=Object.keys(e),c=0;c<u.length;c++){var s=u[c];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},2683:function(r){"use strict";r.exports=function(r,t){for(var e={},n=Object.keys(r),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],u=r[i];(o?-1!==t.indexOf(i):t(i,u,r))&&(e[i]=u)}return e}},4245:function(r,t,e){"use strict";var n=e(9713).default,o=e(3038).default,a=e(3269).default,i=e(319).default,u=e(499),c=e(9412),s=e(845),l=e(2683),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,t){return t.encode?t.strict?u(r):encodeURIComponent(r):r}function m(r,t){return t.decode?c(r):r}function y(r){return Array.isArray(r)?r.sort():"object"===typeof r?y(Object.keys(r)).sort((function(r,t){return Number(r)-Number(t)})).map((function(t){return r[t]})):r}function v(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function h(r){var t=(r=v(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function g(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function x(r,t){p((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"colon-list-separator":return function(r,e,n){t=/(:list)$/.exec(r),r=r.replace(/:list$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"===typeof e&&e.includes(r.arrayFormatSeparator),a="string"===typeof e&&!o&&m(e,r).includes(r.arrayFormatSeparator);e=a?m(e,r):e;var i=o||a?e.split(r.arrayFormatSeparator).map((function(t){return m(t,r)})):null===e?e:m(e,r);n[t]=i};case"bracket-separator":return function(t,e,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(r.arrayFormatSeparator).map((function(t){return m(t,r)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=e?m(e,r):e};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var i,u=a(r.split("&"));try{for(u.s();!(i=u.n()).done;){var c=i.value;if(""!==c){var l=s(t.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),d=f[0],v=f[1];v=void 0===v?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?v:m(v,t),e(m(d,t),v,n)}}}catch(w){u.e(w)}finally{u.f()}for(var h=0,x=Object.keys(n);h<x.length;h++){var b=x[h],_=n[b];if("object"===typeof _&&null!==_)for(var j=0,k=Object.keys(_);j<k.length;j++){var S=k[j];_[S]=g(_[S],t)}else n[b]=g(_,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(r,t){var e=n[t];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?r[t]=y(e):r[t]=e,r}),Object.create(null))}t.extract=h,t.parse=x,t.stringify=function(r,t){if(!r)return"";p((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&(null===(n=r[e])||void 0===n)||t.skipEmptyString&&""===r[e];var n},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var o=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[d(t,r),"[",o,"]"].join("")]:[[d(t,r),"[",d(o,r),"]=",d(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[d(t,r),"[]"].join("")]:[[d(t,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[[d(t,r),":list="].join("")]:[[d(t,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===r.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[d(e,r),t,d(o,r)].join("")]:[[n,d(o,r)].join(r.arrayFormatSeparator)])}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(i(e),null===n?[d(t,r)]:[[d(t,r),"=",d(n,r)].join("")])}}}}(t),o={},a=0,u=Object.keys(r);a<u.length;a++){var c=u[a];e(c)||(o[c]=r[c])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var o=r[e];return void 0===o?"":null===o?d(e,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?d(e,t)+"[]":o.reduce(n(e),[]).join("&"):d(e,t)+"="+d(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){t=Object.assign({decode:!0},t);var e=s(r,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:x(h(r),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:m(i,t)}:{})},t.stringifyUrl=function(r,e){e=Object.assign(n({encode:!0,strict:!0},f,!0),e);var o=v(r.url).split("?")[0]||"",a=t.extract(r.url),i=t.parse(a,{sort:!1}),u=Object.assign(i,r.query),c=t.stringify(u,e);c&&(c="?".concat(c));var s=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url);return r.fragmentIdentifier&&(s="#".concat(e[f]?d(r.fragmentIdentifier,e):r.fragmentIdentifier)),"".concat(o).concat(c).concat(s)},t.pick=function(r,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=t.parseUrl(r,o),i=a.url,u=a.query,c=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:l(u,e),fragmentIdentifier:c},o)},t.exclude=function(r,e,n){var o=Array.isArray(e)?function(r){return!e.includes(r)}:function(r,t){return!e(r,t)};return t.pick(r,o,n)}},845:function(r){"use strict";r.exports=function(r,t){if("string"!==typeof r||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}},499:function(r){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);
//# sourceMappingURL=759.d2d18997.chunk.js.map