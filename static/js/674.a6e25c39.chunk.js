"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[674],{3908:function(t,n,e){e.d(n,{aV:function(){return c},fh:function(){return i},M1:function(){return o},tx:function(){return u},z1:function(){return s}});var a=e(4569),r=e.n(a);r().defaults.baseURL="https://api.themoviedb.org",r().defaults.params={api_key:"b30723d90054545e6fdab6d6887d20fb",language:"en-US"};var c=function(){return r().get("/3/trending/movie/day").then((function(t){return t.data.results})).catch((function(t){throw t}))},i=function(t){return r().get("/3/movie/".concat(t)).then((function(t){return t.data})).catch((function(t){throw t}))},o=function(t){return r().get("/3/movie/".concat(t,"/credits")).then((function(t){return t.data.cast})).catch((function(t){throw t}))},u=function(t){return r().get("/3/movie/".concat(t,"/reviews")).then((function(t){return t.data.results})).catch((function(t){throw t}))},s=function(t){return r().get("/3/search/movie?query=".concat(t)).then((function(t){return t.data.results})).catch((function(t){throw t}))}},6239:function(t,n,e){e.d(n,{Z:function(){return u}});var a=e(1523),r="Navigation_nav__7WdPp",c="Navigation_link__13qe6",i="Navigation_activeClass__sMsTd",o=e(184),u=function(){return(0,o.jsxs)("nav",{className:r,children:[(0,o.jsx)(a.OL,{exact:!0,className:c,activeClassName:i,to:"/",children:"Home"}),(0,o.jsx)(a.OL,{className:c,activeClassName:i,to:"/movies",children:"Movies"})]})}},8674:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var a=e(8152),r=e(2791),c=e(1523),i=e(3908),o=e(9271),u={wrapper:"HomePage_wrapper__fbr7T",link:"HomePage_link__-d+Of"},s=e(6239),f=e(184),l=function(){var t=(0,r.useState)([]),n=(0,a.Z)(t,2),e=n[0],l=n[1],d=(0,o.TH)();return(0,r.useEffect)((function(){(0,i.aV)().then((function(t){return l(t)}))}),[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(s.Z,{}),(0,f.jsxs)("div",{className:u.wrapper,children:[(0,f.jsx)("h2",{children:"Trending today"}),(0,f.jsx)("ul",{className:u.movie,children:e&&e.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(c.rU,{to:{pathname:"/movies/".concat(t.id),state:{from:{location:d}}},className:u.link,children:t.title})},t.id)}))})]})]})}}}]);
//# sourceMappingURL=674.a6e25c39.chunk.js.map