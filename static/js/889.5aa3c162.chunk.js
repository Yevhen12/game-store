(self.webpackChunkgame_store=self.webpackChunkgame_store||[]).push([[889],{4188:function(e,n,s){"use strict";s.d(n,{Z:function(){return d}});var t=s(2791),r="styles_footer__a4wrh",l="styles_logo__6HoX9",i="styles_made_block__Xeu-U",c="styles_made__jEh+r",a="styles_rigth_block__GXvfv",o="styles_social_media__1m5Zm",u="styles_link__815lZ",_=s(6871),m=s(6748),f=s(184),g=function(){var e=(0,_.s0)(),n=["https://uk-ua.facebook.com/","https://twitter.com/?lang=ua","https://www.instagram.com/","https://www.youtube.com/","https://play.google.com/store/apps;?hl=uk&gl=US","https://www.apple.com/ua/app-store/"],s=["Facebook","Twitter","Instagram","YouTube","Android App","iOS App"].map((function(e,s){return(0,f.jsx)("a",{className:u,href:n[s],children:e},s)}));return(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("div",{children:(0,f.jsx)("img",{alt:"logo",src:"/game-store/images/logo.png",className:l,onClick:function(){return e(m.Z.HOME)}})}),(0,f.jsxs)("div",{className:a,children:[(0,f.jsxs)("div",{className:i,children:[(0,f.jsx)("p",{className:c,children:"MADE BY YEVHEN COMPANY"}),(0,f.jsx)("p",{className:c,children:"PROTECTED RIGTHS 2022"})]}),(0,f.jsx)("div",{className:o,children:s})]})]})},d=t.memo(g)},515:function(e,n,s){"use strict";s.d(n,{Z:function(){return w}});var t=s(885),r=s(2791),l={header:"styles_header__CcvTA",container:"styles_container__nzd23",logo:"styles_logo__QOZOh",sony_block:"styles_sony_block__ONUqh","outer_profile_blo\u0441k":"styles_outer_profile_blo\u0441k__qPFwj",profile_block:"styles_profile_block__FmnhA",profile_block_image:"styles_profile_block_image__G4p8m",underline:"styles_underline__2g06Q",text:"styles_text__m60Q+",text_menu:"styles_text_menu__OYGMy"},i=s(6748),c=s(6871),a=s(3153),o=s(4581),u=s(1413),_=s(4165),m=s(5861),f=s(4217),g=s(9150),d="styles_items__e4rl6",p="styles_block__F0Jk1",x="styles_text__Rxllz",h="styles_img__6wbxr",j=s(184),y=function(e){var n=e.name,s=e.image,t=e.funcToDo;return(0,j.jsxs)("div",{className:p,onClick:t,children:[(0,j.jsx)("img",{alt:n,src:"/game-store"+s,className:h}),(0,j.jsx)("p",{className:x,children:n})]})},v=r.memo(y),k=s(6444),N=function(){var e=(0,m.Z)((0,_.Z)().mark((function e(){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,k.w7)(o.I8);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=s(7239),Z=function(e){var n=e.activeModal,s=e.setActiveModal,t=(0,a.T)(),r=(0,c.s0)(),l=(0,a.C)((function(e){return e.user.user})),i=function(){var e=(0,m.Z)((0,_.Z)().mark((function e(){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t((0,b.kX)()),s(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(e){s(!1),setTimeout((function(){r(e)}),300)},p=[{name:"Profile",image:"/images/user-icon.png",funcToDo:function(){return o("/profile/".concat(l.uid))}},{name:"Favorite",image:"/images/heart-uncolored.png",funcToDo:function(){return o("/".concat(g.Z.FAVORITE))}},{name:"My games",image:"/images/shopping-cart-icon.png",funcToDo:function(){return o("/".concat(g.Z.MY_GAMES))}},{name:"History",image:"/images/history-icon.png",funcToDo:function(){return o("/".concat(g.Z.HISTORY))}},{name:"Exit",image:"/images/exit-icon.png",funcToDo:i}].map((function(e,n){return(0,j.jsx)(v,(0,u.Z)({},e),n)})),x=n?"35px":"10px";return(0,j.jsx)(f.Z,{activeModal:n,setActiveModal:s,topAnimation:x,rigthPosition:"-10px",children:(0,j.jsx)("div",{className:d,children:p})})},C=r.memo(Z),T=function(){var e=(0,c.s0)(),n=(0,a.C)((function(e){return e.user.user})),s=(0,r.useState)(!1),u=(0,t.Z)(s,2),_=u[0],m=u[1],f=(0,r.useState)(!1),g=(0,t.Z)(f,2),d=g[0],p=g[1];return(0,j.jsx)("header",{className:l.header,children:(0,j.jsxs)("div",{className:l.container,children:[(0,j.jsx)("img",{alt:"logo",src:"/game-store/images/logo.png",className:l.logo,onClick:function(){return e(i.Z.HOME)}}),(0,j.jsx)("div",{className:l.sony_block,children:(0,j.jsx)("img",{alt:"sony",src:"/game-store/images/sony.png",className:l.sony_black_image})}),o.I8.currentUser?(0,j.jsxs)("div",{className:l["outer_profile_blo\u0441k"],children:[(0,j.jsxs)("div",{className:l.profile_block,onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onClick:function(){return p(!0)},children:[(0,j.jsx)("img",{alt:"user",src:"".concat((null===n||void 0===n?void 0:n.image)||"/game-store/images/profile.png"),className:l.profile_block_image}),(0,j.jsx)("p",{className:"".concat(l.text," ").concat(_&&l.underline),children:n.username})]}),(0,j.jsx)(C,{activeModal:d,setActiveModal:p})]}):(0,j.jsx)("p",{className:l.text,onClick:function(){return e("/".concat(i.Z.LOG_IN))},children:"Log in"})]})})},w=r.memo(T)},665:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return ae}});var t=s(2791),r=s(515),l=s(4165),i=s(5861),c="styles_section__1QqPI",a="styles_container__xzm3t",o="styles_header__O9oTS",u="styles_list__ViOo8",_="styles_img__A1O7X",m=s(885),f=s(3153),g=s(2545),d=s(8772),p="styles_block_input__qelZA",x="styles_z_20__RTZ-h",h="styles_z_10__FPguC",j="styles_position_block_input__qJml7",y="styles_input__Pe9lq",v="styles_active__th3jy",k="styles_disabled__nr67O",N="styles_delete__HJYLU",b=s(184),Z=function(e){var n=e.refInput,s=(0,f.T)(),r=(0,t.useState)(!1),l=(0,m.Z)(r,2),i=l[0],c=l[1],a=(0,t.useState)(""),o=(0,m.Z)(a,2),u=o[0],_=o[1];(0,t.useEffect)((function(){u.length>0&&c(!0)}),[u]),(0,t.useEffect)((function(){s((0,d.n6)(!0));var e=setTimeout((function(){s((0,g.qP)(u)),s((0,g.YA)(1)),s((0,d.n6)(!1))}),300);return function(){return clearTimeout(e)}}),[u,s]);return(0,b.jsxs)("div",{className:p,children:[(0,b.jsx)("div",{className:"".concat(j," ").concat(i?x:h),children:(0,b.jsx)("input",{ref:n,type:"text",value:u,placeholder:"Search",className:"".concat(y," ").concat(i?v:k),onFocus:function(){return c(!0)},onChange:function(e){return _(e.target.value)}})}),i&&u.length>0&&(0,b.jsx)("img",{alt:"delete",src:"/game-store/images/delete-icon.png",className:N,onClick:function(){_(""),n.current&&n.current.focus()}})]})},C=t.memo(Z),T=s(6748),w=s(6871),M=s(9150),O=s(4823),A=function(){var e=(0,t.useRef)(null),n=(0,w.UO)().gameId,s=(0,w.s0)(),r=(0,w.TH)().pathname,l=r.substring(1)===M.Z.HISTORY,i=r.substring(1)===M.Z.MY_GAMES,c=r.substring(1)===M.Z.FAVORITE,a=(0,O.Z)().innerWidth;return(0,b.jsxs)("header",{className:o,children:[(0,b.jsx)("nav",{children:(0,b.jsxs)("ul",{className:u,children:[(0,b.jsx)("li",{onClick:function(){return s(T.Z.HOME)},children:(0,b.jsx)("img",{alt:"store",src:"/game-store/images/store_logo.png",className:_})}),(0,b.jsx)("li",{onClick:function(){return s(M.Z.MY_GAMES)},children:"My games"}),(0,b.jsx)("li",{onClick:function(){return s(M.Z.HISTORY)},children:"History"}),(0,b.jsx)("li",{onClick:function(){e.current&&e.current.focus()},children:"Browse"})]})}),!n&&!l&&!i&&!c&&a>900&&(0,b.jsx)(C,{refInput:e})]})},E=t.memo(A),I=s(6048),S=s.n(I),F="styles_pagination__LvNDb",Y=function(){var e=(0,f.T)(),n=(0,f.C)((function(e){return e.filter.page})),s=(0,f.C)((function(e){return e.games.allGames})),t=Math.ceil(s.length/18);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(S(),{className:F,breakLabel:"...",nextLabel:">",onPageChange:function(n){return e((0,g.YA)(n.selected+1))},pageRangeDisplayed:2,marginPagesDisplayed:1,forcePage:n-1,pageCount:t,previousLabel:"<",renderOnZeroPageCount:null})})},P=t.memo(Y),R=s(6806),H=s(2808),D=s.n(H),q="styles_filtration_block__D7Snq",G="styles_sort_block__R3-Ri",L="styles_title__xZO8L",U=s(4846),V=s(3743),X="styles_filter_block__72bKM",z="styles_clearAllFilters__UnICK",Q="styles_filter_block__y7-qC",J="styles_text__y5aeN",B="styles_img__8XINu",K=function(e){var n=e.text,s=e.setFilters,t=(0,f.T)();return(0,b.jsxs)("div",{className:Q,children:[(0,b.jsx)("p",{className:J,children:n}),(0,b.jsx)("img",{alt:"deleteFilter",src:"/game-store/images/delete-icon.png",onClick:function(){return t(s(null))},className:B})]})},W=t.memo(K),$=function(){var e=(0,f.C)((function(e){return e.filter.age})),n=(0,f.C)((function(e){return e.filter.price})),s=(0,f.C)((function(e){return e.filter.genre})),t=(0,f.C)((function(e){return e.filter.platform})),r=(0,f.T)(),l=null!==e||null!==n||null!==s||null!==t;return(0,b.jsx)(b.Fragment,{children:l?(0,b.jsxs)("div",{className:X,children:[null!==e&&(0,b.jsx)(W,{text:U.IX[e],setFilters:g.VS}),null!==n&&(0,b.jsx)(W,{text:U.q0[n],setFilters:g.i_}),null!==s&&(0,b.jsx)(W,{text:U.L9[s],setFilters:g.bU}),null!==t&&(0,b.jsx)(W,{text:U.op[t],setFilters:g.VY}),(0,b.jsx)("button",{className:z,onClick:function(){r((0,g.VS)(null)),r((0,g.i_)(null)),r((0,g.bU)(null)),r((0,g.VY)(null))},children:"Clear all filters"})]}):null})},ee=t.memo($),ne=function(){return(0,b.jsxs)("div",{className:q,children:[(0,b.jsxs)("div",{className:G,children:[(0,b.jsx)("h2",{className:L,children:"All PS5 games"}),(0,b.jsx)(V.Z,{})]}),(0,b.jsx)(U.ZP,{}),(0,b.jsx)(ee,{})]})},se=t.memo(ne),te=(s(4569),s(9062),s(4581),function(){var e=(0,f.T)(),n=(0,w.s0)(),s=(0,f.C)((function(e){return e.filter})),r=(0,f.C)((function(e){return e.user.user})),o=s.page,u=s.sort,_=s.genre,m=s.price,d=s.age,p=s.platform,x=s.search,h=(0,t.useRef)(null),j=(0,w.UO)().gameId,y=(0,w.TH)().pathname,v=y.substring(1)===M.Z.HISTORY,k=y.substring(1)===M.Z.MY_GAMES,N=y.substring(1)===M.Z.FAVORITE;return(0,t.useEffect)((function(){var n=function(){var n=(0,i.Z)((0,l.Z)().mark((function n(){var s;return(0,l.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s={page:o,sort:u,genre:_,price:m,age:d,platform:p,search:x},n.t0=e,n.next=4,(0,R.k)(s);case 4:n.t1=n.sent,(0,n.t0)(n.t1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e,o,u,_,m,d,p,x]),(0,t.useEffect)((function(){if(window.location.search){var n=D().parse(window.location.search.substring(1));e((0,g.c9)(n))}}),[e]),(0,t.useEffect)((function(){h.current&&h.current.scrollIntoView({block:"start"})}),[o]),(0,t.useEffect)((function(){if(!j&&!v&&!k&&!N){var e=D().stringify({sort:u.property,genre:_,price:m,age:d,platform:p,search:x,page:o});n("?".concat(e))}}),[o,u,n,_,m,d,p,x,j,v,k,N]),console.log(r),(0,b.jsx)("main",{className:c,children:(0,b.jsxs)("div",{ref:h,className:a,children:[(0,b.jsx)(E,{}),!j&&!v&&!k&&!N&&(0,b.jsx)(se,{}),(0,b.jsx)(w.j3,{}),!j&&!v&&!k&&!N&&(0,b.jsx)(P,{})]})})}),re=t.memo(te),le="styles_main__Y5PcN",ie=s(4188),ce=function(){return(0,b.jsxs)("div",{className:le,children:[(0,b.jsx)(r.Z,{}),(0,b.jsx)(re,{}),(0,b.jsx)(ie.Z,{})]})},ae=t.memo(ce)},4654:function(){}}]);
//# sourceMappingURL=889.5aa3c162.chunk.js.map