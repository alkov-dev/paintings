(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={pictureItem_container:"PictureItem_pictureItem_container__3BjFm",description:"PictureItem_description__2SjTf",description__item__ul:"PictureItem_description__item__ul__3-kYe",item__li:"PictureItem_item__li__2CEl6",description__item:"PictureItem_description__item__11pu9",span:"PictureItem_span__2JOAa",title:"PictureItem_title__rcWvb"}},function(e,t,n){e.exports={block__container:"Select_block__container__20yYH",current__block:"Select_current__block__nh9eP",img:"Select_img__1C2SK",img__rotate:"Select_img__rotate__262Bu",name__text:"Select_name__text__3mqUi",current__value:"Select_current__value__2wD_s",block__borderRadius:"Select_block__borderRadius__3Piy_",block__inside:"Select_block__inside__3F4iq",block:"Select_block__1sb7b",li__none:"Select_li__none__lYnDR",block__item:"Select_block__item__3DXOH"}},function(e,t,n){e.exports={block__container:"CreatedSelect_block__container__1uAFd",current__block:"CreatedSelect_current__block__2bmlg",img:"CreatedSelect_img__2JzmK",img__rotate:"CreatedSelect_img__rotate__2P_UN",current__value:"CreatedSelect_current__value__8FPBi",block__borderRadius:"CreatedSelect_block__borderRadius__EgjfL",block__inside:"CreatedSelect_block__inside__1vVfW",inputs__block:"CreatedSelect_inputs__block__kluu_",line:"CreatedSelect_line__3VvOl",inputs:"CreatedSelect_inputs__3rrlL"}},function(e,t,n){e.exports={block__container:"CurrentSelect_block__container__2Rm55",current__block:"CurrentSelect_current__block__nBRMC",img:"CurrentSelect_img__1GCsO",img__rotate:"CurrentSelect_img__rotate__23QXG",current__value:"CurrentSelect_current__value__Rm1AA",block__borderRadius:"CurrentSelect_block__borderRadius__3EXhE",block__inside:"CurrentSelect_block__inside__3rB2a",block:"CurrentSelect_block__eHKTY",li__none:"CurrentSelect_li__none__1Gh2U",block__item:"CurrentSelect_block__item__3y8rd"}},,function(e,t,n){e.exports={pag__container:"Pagination_pag__container__eJtnx",pageNumbers:"Pagination_pageNumbers__276zY",active:"Pagination_active__2HLsS",button__next:"Pagination_button__next__2RZ5y",button__prev:"Pagination_button__prev__1xPaQ",button__nextEnd:"Pagination_button__nextEnd__1nvn8",button__prevStart:"Pagination_button__prevStart__OYN7f"}},,,function(e,t,n){e.exports={header__container:"Header_header__container__2NA0J",buttons:"Header_buttons__2wXLf",label:"Header_label__iJ91j",switch1:"Header_switch1__UE9qg"}},function(e,t,n){e.exports={pictures__container:"PicturesBlock_pictures__container__PeAWj",paintings__container:"PicturesBlock_paintings__container__1N4sK",pagination__block:"PicturesBlock_pagination__block__2ayZF"}},,function(e,t,n){e.exports={container:"FindingFields_container__3ltDr",item:"FindingFields_item__DI9yr"}},function(e,t,n){e.exports={input:"Search_input__tuLU3"}},,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(17),i=n.n(r),s=n(2),l=n(4),o=n.n(l),_=n.p+"static/media/down-svgrepo-com.5d10c8c6.svg",u=n(0),d=function(e){var t=e.data,n=e.handleLocationsId,a=c.a.useState(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],d=c.a.useState("Locations"),b=Object(s.a)(d,2),j=b[0],m=b[1],h=c.a.useRef(),p=function(e){e.path.includes(h.current)||l(!1)};c.a.useEffect((function(){document.body.addEventListener("click",p)}),[]);var v=function(e){n(e.currentTarget.id);for(var a=0;a<t.length;a++)Number(e.currentTarget.id)===a+1&&m(t[a].location),0===Number(e.currentTarget.id)&&m("Locations")};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:o.a.block__container,children:[Object(u.jsx)("div",{ref:h,className:!0===i?o.a.block__borderRadius:o.a.current__value,children:Object(u.jsxs)("div",{onClick:function(){l(!i)},className:o.a.current__block,children:[Object(u.jsx)("div",{className:o.a.name__text,children:j}),Object(u.jsx)("img",{className:!0===i?o.a.img__rotate:o.a.img,src:_,alt:""})]})}),i&&Object(u.jsx)("div",{className:o.a.block__inside,children:Object(u.jsx)("div",{className:o.a.block,children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:o.a.li__none,onClick:v,id:0,children:"None"},"none"),t.map((function(e){var t=e.id,n=e.location;return Object(u.jsx)("li",{onClick:v,id:t,children:Object(u.jsx)("div",{className:o.a.block__item,children:n})},n)}))]})})})]})})},b=n(6),j=n.n(b),m=n.p+"static/media/down-svgrepo-com.5d10c8c6.svg",h=function(e){var t=e.data,n=e.handleAuthorsId,a=c.a.useState(!1),r=Object(s.a)(a,2),i=r[0],l=r[1],o=c.a.useState("Authors"),_=Object(s.a)(o,2),d=_[0],b=_[1],h=c.a.useRef(),p=function(e){e.path.includes(h.current)||l(!1)};c.a.useEffect((function(){document.body.addEventListener("click",p)}),[]);var v=function(e){n(e.currentTarget.id);for(var a=0;a<t.length;a++)Number(e.currentTarget.id)===a+1&&b(t[a].name),0===Number(e.currentTarget.id)&&b("Authors")};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:j.a.block__container,children:[Object(u.jsx)("div",{ref:h,className:!0===i?j.a.block__borderRadius:j.a.current__value,children:Object(u.jsxs)("div",{onClick:function(){l(!i)},className:j.a.current__block,children:[Object(u.jsx)("div",{children:d}),Object(u.jsx)("img",{className:!0===i?j.a.img__rotate:j.a.img,src:m,alt:""})]})}),i&&Object(u.jsx)("div",{className:j.a.block__inside,children:Object(u.jsx)("div",{className:j.a.block,children:Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{className:j.a.li__none,onClick:v,id:0,children:"None"},"none"),t.map((function(e){var t=e.id,n=e.name;return Object(u.jsx)("li",{onClick:v,id:t,children:Object(u.jsx)("div",{className:j.a.block__item,children:n})},n)}))]})})})]})})},p=n(14),v=n.n(p),f=n(15),O=n.n(f),x=function(e){var t=e.handleInputValue,n=e.inputValue;return Object(u.jsx)("div",{className:O.a.searchInput,children:Object(u.jsx)("input",{className:O.a.input,onKeyDown:function(e){46===e.keyCode||8===e.keyCode||9===e.keyCode||27===e.keyCode||65===e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(e.keyCode>47&&e.keyCode<58||e.keyCode>186&&e.keyCode<192)&&e.preventDefault()},onChange:function(e){return t(e.target.value)},value:n,type:"text",placeholder:"name"})})},k=n(5),g=n.n(k),N=n.p+"static/media/down-svgrepo-com.5d10c8c6.svg",C=function(e){var t=e.setValueGte,n=e.setValueLte,a=e.valueGte,r=e.valueLte,i=e.handleCreatedInputGte,l=e.handleCreatedInputLte,o=c.a.useState(!1),_=Object(s.a)(o,2),d=_[0],b=_[1],j=c.a.useRef(),m=function(e){e.path.includes(j.current)||b(!1)};c.a.useEffect((function(){document.body.addEventListener("click",m)}),[]);var h=function(e){46===e.keyCode||8===e.keyCode||9===e.keyCode||27===e.keyCode||65===e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(e.target.value.length>3||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105))&&e.preventDefault()};return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{ref:j,className:g.a.block__container,children:[Object(u.jsx)("div",{className:!0===d?g.a.block__borderRadius:g.a.current__value,children:Object(u.jsxs)("div",{onClick:function(){b(!d),t(null),n(null)},className:g.a.current__block,children:[Object(u.jsx)("div",{children:"Created"}),Object(u.jsx)("img",{className:!0===d?g.a.img__rotate:g.a.img,src:N,alt:""})]})}),d&&Object(u.jsx)("div",{className:g.a.block__inside,children:Object(u.jsxs)("div",{className:g.a.inputs__block,children:[Object(u.jsx)("div",{className:g.a.inputs,children:Object(u.jsx)("input",{value:a,onKeyDown:h,onChange:function(e){i(e.target.value)},type:"text",placeholder:"from"})}),Object(u.jsx)("div",{className:g.a.line}),Object(u.jsx)("div",{className:g.a.inputs,children:Object(u.jsx)("input",{value:r,onKeyDown:h,onChange:function(e){l(e.target.value)},type:"text",placeholder:"before"})})]})})]})})},S=function(e){var t=e.authorsData,n=e.handleAuthorsId,a=e.locationsData,c=e.handleLocationsId,r=e.handleInputValue,i=e.inputValue,s=e.valueGte,l=e.valueLte,o=e.handleCreatedInputGte,_=e.handleCreatedInputLte,b=e.setValueGte,j=e.setValueLte;return Object(u.jsx)("div",{className:v.a.container,children:Object(u.jsxs)("div",{className:v.a.item,children:[Object(u.jsx)(x,{handleInputValue:r,inputValue:i}),Object(u.jsx)(d,{data:a,handleLocationsId:c}),Object(u.jsx)(h,{data:t,handleAuthorsId:n}),Object(u.jsx)(C,{valueGte:s,valueLte:l,handleCreatedInputGte:o,handleCreatedInputLte:_,setValueGte:b,setValueLte:j})]})})},y=n(11),I=n.n(y),w=n.p+"static/media/label.89c5d48f.svg",P=n.p+"static/media/Vector.c9c1cfcb.svg",L=n.p+"static/media/VectorBlack.8c2aa315.svg",E=n(16),V=n(18),R=["children"],G="dark",D=c.a.createContext(),A=function(e){var t=e.children,n=Object(V.a)(e,R),a=c.a.useState("good!"),r=Object(s.a)(a,2),i=r[0],l=r[1];return Object(u.jsx)(D.Provider,Object(E.a)(Object(E.a)({value:{theme:i,change:function(e){l(e)}}},n),{},{children:t}))},B=function(){return c.a.useContext(D)},U=function(){var e=B(),t=c.a.useState(""),n=Object(s.a)(t,2),a=n[0],r=n[1],i=c.a.useState("light"),l=Object(s.a)(i,2),o=l[0],_=l[1];c.a.useEffect((function(){e.change(G)}),[]);var d="";return c.a.useEffect((function(){"dark"===e.theme?r(P):r(L)}),[e]),Object(u.jsxs)("div",{className:I.a.header__container,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{className:I.a.label,src:w,alt:""})}),Object(u.jsx)("div",{children:Object(u.jsx)("img",{onClick:function(){return"dark"===o?(d="light",_("light"),e.change(G)):(d="dark",_("dark"),e.change("light")),document.documentElement.style.setProperty("--theme-defaut-color","var(--theme-".concat(o,"-color)")),void document.documentElement.style.setProperty("--theme-defaut-color-r","var(--theme-".concat(d,"-color)"))},className:I.a.switch1,src:a,alt:"",title:"Change theme"})})]})},F=n(7),K=n.n(F),H=n(9),T=n(12),J=n.n(T),Y=function(){var e=Object(H.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 10:return e.prev=10,e.t0=e.catch(0),console.log("Could not fetch : ",e.t0.message),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),W=n(3),q=n.n(W),M=n(10),X=n.n(M),z=function(e){var t=e.name,n=e.author,a=e.location,c=e.created,r="https://test-front.framework.team"+e.imageUrl;return Object(u.jsxs)("div",{className:q.a.pictureItem_container,children:[Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:r,alt:"",title:t})}),Object(u.jsx)("div",{className:q.a.description,children:Object(u.jsx)("div",{className:q.a.description__item,children:Object(u.jsxs)("div",{className:q.a.description__item__ul,children:[Object(u.jsx)("div",{className:X()(q.a.title,q.a.item__li),children:Object(u.jsxs)("span",{children:[t," "]})}),Object(u.jsxs)("div",{className:X()(q.a.span,q.a.item__li),children:[Object(u.jsx)("span",{children:"Author:"})," ",n]}),Object(u.jsxs)("div",{className:X()(q.a.span,q.a.item__li),children:[Object(u.jsx)("span",{children:"Created:"})," ",c]}),Object(u.jsxs)("div",{className:X()(q.a.span,q.a.item__li),children:[Object(u.jsx)("span",{children:"Location:"})," ",a]})]})})})]})},Q=n(8),Z=n.n(Q),$=n.p+"static/media/NextEnd.2dc29e5a.svg",ee=n.p+"static/media/NextOne.bc69b614.svg",te=n.p+"static/media/NextEndBlack.c7511021.svg",ne=n.p+"static/media/NextOneBlack.6063ef55.svg",ae=function(e){var t=e.itemsPerPage,n=e.totalPaitings,a=e.currentPage,r=e.handleClick,i=e.maxNumberLimit,l=e.minNumberLimit,o=e.handleNext,_=e.handlePrev,d=e.handleEnd,b=e.handleStart,j=c.a.useState("dark"),m=Object(s.a)(j,2),h=m[0],p=m[1],v=c.a.useState("dark"),f=Object(s.a)(v,2),O=f[0],x=f[1],k=B(),g=[];c.a.useEffect((function(){"light"===k.theme?(p(ne),x(te)):(p(ee),x($))}),[k]);for(var N=1;N<=Math.ceil(n/t);N++)g.push(N);return Object(u.jsx)("div",{className:Z.a.pag__container,children:Object(u.jsxs)("ul",{className:Z.a.pageNumbers,children:[Object(u.jsx)("button",{className:Z.a.button__prevStart,onClick:b,disabled:1===a,children:Object(u.jsx)("img",{src:h,alt:""})}),Object(u.jsx)("button",{className:Z.a.button__prev,onClick:_,disabled:a===g[0],children:Object(u.jsx)("img",{src:O,alt:""})}),g.map((function(e){return e<i+1&&e>l||e<=i&&e>l?Object(u.jsx)("li",{className:a===e?Z.a.active:"",id:e,onClick:r,children:e},e):null})),Object(u.jsx)("button",{className:Z.a.button__next,onClick:o,disabled:a===g[g.length-1],children:Object(u.jsx)("img",{src:O,alt:""})}),Object(u.jsx)("button",{className:Z.a.button__nextEnd,onClick:d,disabled:a===g[g.length-1],children:Object(u.jsx)("img",{src:h,alt:""})})]})})},ce=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(!1),l=Object(s.a)(i,2),o=l[0],_=l[1],d=Object(a.useState)([]),b=Object(s.a)(d,2),j=b[0],m=b[1],h=Object(a.useState)(null),p=Object(s.a)(h,2),v=p[0],f=p[1],O=Object(a.useState)(1),x=Object(s.a)(O,2),k=x[0],g=x[1],N=Object(a.useState)(9),C=Object(s.a)(N,2),y=C[0],I=C[1],w=Object(a.useState)(3),P=Object(s.a)(w,1)[0],L=Object(a.useState)(3),E=Object(s.a)(L,2),V=E[0],R=E[1],G=Object(a.useState)(0),D=Object(s.a)(G,2),A=D[0],B=D[1],U=c.a.useState(""),F=Object(s.a)(U,2),T=F[0],W=F[1],q=c.a.useState(""),M=Object(s.a)(q,2),X=M[0],Q=M[1],Z=c.a.useState(""),$=Object(s.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(window.innerWidth),ce=Object(s.a)(ne,2),re=ce[0],ie=ce[1];Object(a.useEffect)((function(){I(re<768?6:re>=768&&re<1024?8:9),window.addEventListener("resize",(function(e){ie(window.innerWidth),I(re<768?6:re>=768&&re<1024?8:9)}),!1)}),[re]);var se=function(){var e=Object(H.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:n=e.sent,a=n.map((function(e){var t=e.authorId,n=e.imageUrl;return{id:e.id,name:e.name,imageUrl:n,authorId:t,created:e.created,locationId:e.locationId}})),r(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(H.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:n=e.sent,a=n.map((function(e){return{id:e.id,name:e.name}})),m(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(H.a)(K.a.mark((function e(t){var n,a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y(t);case 2:n=e.sent,a=n.map((function(e){return{id:e.id,location:e.location}})),f(a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){_(!0),se("https://test-front.framework.team/paintings"),le("https://test-front.framework.team/authors"),oe("https://test-front.framework.team/locations"),_(!1)}),[]),Object(a.useEffect)((function(){var e="https://test-front.framework.team/paintings?q=".concat(T);se(e)}),[T]);Object(a.useEffect)((function(){if(ee>X&&ee<2022){var e="https://test-front.framework.team/paintings?created_gte=".concat(X,"&&created_lte=").concat(ee);se(e)}}),[X,ee]);var _e=Math.ceil(n.length/y),ue=k*y,de=ue-y,be=n.slice(de,ue);0===be.length&&(be=n);return o?Object(u.jsx)("h2",{children:"Loading..."}):Object(u.jsxs)("div",{children:[Object(u.jsx)(S,{inputValue:T,handleInputValue:function(e){W(e)},authorsData:j,handleAuthorsId:function(e){var t="";t=0!==Number(e)?"https://test-front.framework.team/paintings?authorId=".concat(e):"https://test-front.framework.team/paintings",se(t)},locationsData:v,handleLocationsId:function(e){var t="";t=0!==Number(e)?"https://test-front.framework.team/paintings?locationId=".concat(e):"https://test-front.framework.team/paintings",se(t)},valueGte:X,valueLte:ee,handleCreatedInputGte:function(e){Q(Number(e)),Number(e)>2021&&(alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u043e\u0434 (\u0434\u043e 2021)"),Q(0))},handleCreatedInputLte:function(e){te(Number(e)),Number(e)>2021&&(alert("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u0432\u0435\u0441\u0442\u0438 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0439 \u0433\u043e\u0434 (\u0434\u043e 2021)"),te(0))},setValueGte:Q,setValueLte:te}),v&&Object(u.jsxs)("div",{children:[j&&Object(u.jsx)("div",{className:J.a.pictures__container,children:n&&Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:J.a.paintings__container,children:be.map((function(e){var t=e.id,n=e.name,a=e.imageUrl,c=e.authorId,r=e.created,i=e.locationId;return Object(u.jsx)("li",{children:Object(u.jsx)(z,{name:n,imageUrl:a,author:j[c-1].name,location:v[i-1].location,created:r})},t+n)}))})})}),n.length>y&&Object(u.jsx)("div",{className:J.a.pagination__block,children:Object(u.jsx)(ae,{handleNext:function(){g(k+1),k+1>V&&(R(V+P),B(A+P))},handleEnd:function(){g(_e),R(_e),B(_e-P)},handleStart:function(){g(1),R(P),B(0)},handlePrev:function(){g(k-1),(k-1)%P===0&&(R(V-P),B(A-P))},minNumberLimit:A,maxNumberLimit:V,handleClick:function(e){g(Number(e.target.id))},data:n,numberPages:_e,currentPage:k,itemsPerPage:y,totalPaitings:n.length})})]})]})};n(25);var re=function(){return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(U,{}),Object(u.jsx)(ce,{})]})};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(A,{children:Object(u.jsx)(re,{})})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.fb4b7ff1.chunk.js.map