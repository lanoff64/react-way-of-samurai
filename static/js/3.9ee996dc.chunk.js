(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[3],{252:function(e,r,s){e.exports={avatarURL:"Users_avatarURL__1H5oh",usersList:"Users_usersList__2XMzW",oneUser:"Users_oneUser__1WxrH",userNameArea:"Users_userNameArea__2_LZn",userIdArea:"Users_userIdArea__2VNVV",userStatusArea:"Users_userStatusArea__21ba_",userButton:"Users_userButton__COizx",userInfo:"Users_userInfo__1B18E",samurai:"Users_samurai__2Sk3l"}},255:function(e,r,s){e.exports={selectedPage:"Paginator_selectedPage__3a9og",pages:"Paginator_pages__2byFv",nextBTN:"Paginator_nextBTN__1-azS",prevBTN:"Paginator_prevBTN__34bJv"}},257:function(e,r,s){"use strict";s.r(r);var t=s(3),n=s(4),o=s(9),a=s(10),u=s(0),i=s.n(u),l=s(21),c=s(79),f=s(252),p=s.n(f),g=s(25),d=s(255),j=s.n(d),h=s(1),b=function(e){for(var r=e.totalItemsCount,s=e.pagesSize,t=e.currentPage,n=e.onPageClick,o=e.portionSize,a=void 0===o?20:o,i=Math.ceil(r/s),l=[],c=1;c<=i;c++)l.push(c);var f=Math.ceil(i/a),p=Object(u.useState)(1),d=Object(g.a)(p,2),b=d[0],v=d[1],m=(b-1)*a+1,P=b*a;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:j.a.pages,children:l.filter((function(e){return e>=m&&e<=P})).map((function(e){return Object(h.jsx)("span",{className:t===e?j.a.selectedPage:void 0,onClick:function(r){n(e)},children:e},e.toString())}))}),Object(h.jsxs)("div",{children:[b>1?Object(h.jsx)("button",{className:j.a.prevBTN,onClick:function(){v(b-1)},children:"PREV"}):Object(h.jsx)("button",{disabled:!0,children:"PREV"}),f>b?Object(h.jsx)("button",{className:j.a.nextBTN,onClick:function(){v(b+1)},children:"NEXT"}):Object(h.jsx)("button",{disabled:!0,children:"NEXT"})]})]})},v=s(44),m=s(15),P=function(e){var r=e.user,s=e.followingInProgress,t=e.unfollow,n=e.follow;return Object(h.jsxs)("div",{className:p.a.oneUser,children:[Object(h.jsx)("div",{children:Object(h.jsx)(m.b,{to:"/profile/"+r.id,children:Object(h.jsx)("img",{src:null!=r.photos.small?r.photos.small:v.a,className:p.a.avatarURL,alt:""})})}),Object(h.jsx)("div",{children:r.followed?Object(h.jsx)("button",{disabled:s.some((function(e){return e===r.id})),className:p.a.userButton,onClick:function(){t(r.id)},children:"Unfollow "}):Object(h.jsx)("button",{disabled:s.some((function(e){return e===r.id})),className:p.a.userButton,onClick:function(){n(r.id)},children:"Follow"})}),Object(h.jsxs)("div",{className:p.a.userInfo,children:[Object(h.jsxs)("div",{className:p.a.userNameArea,children:["Name: ",r.name]}),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:p.a.userIdArea,children:["id:",r.id]})}),Object(h.jsx)("div",{className:p.a.userStatusArea,children:null!=r.status?r.status:null})]})]})},_=function(e){var r=e.unfollow,s=e.follow,t=e.followingInProgress,n=e.currentPage,o=e.onPageClick,a=e.totalUsersCount,u=e.pagesSize,i=e.users;Object(c.a)(e,["unfollow","follow","followingInProgress","currentPage","onPageClick","totalUsersCount","pagesSize","users"]);return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:p.a.samurai,children:["Users from ",Object(h.jsx)("a",{href:"https://social-network.samuraijs.com/",children:"social-network.samuraijs.com"})]}),Object(h.jsx)(b,{currentPage:n,onPageClick:o,totalItemsCount:a,pagesSize:u}),Object(h.jsx)("div",{className:p.a.usersList,children:i.map((function(e){return Object(h.jsx)(P,{user:e,followingInProgress:t,unfollow:r,follow:s},e.id)}))}),Object(h.jsx)(b,{currentPage:n,onPageClick:o,totalItemsCount:a,pagesSize:u})]})},O=s(112),x=s(45),w=s(27);function N(e,r){return e===r}function U(e,r,s){if(null===r||null===s||r.length!==s.length)return!1;for(var t=r.length,n=0;n<t;n++)if(!e(r[n],s[n]))return!1;return!0}function C(e){var r=Array.isArray(e[0])?e[0]:e;if(!r.every((function(e){return"function"===typeof e}))){var s=r.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+s+"]")}return r}var k=function(e){for(var r=arguments.length,s=Array(r>1?r-1:0),t=1;t<r;t++)s[t-1]=arguments[t];return function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];var o=0,a=t.pop(),u=C(t),i=e.apply(void 0,[function(){return o++,a.apply(null,arguments)}].concat(s)),l=e((function(){for(var e=[],r=u.length,s=0;s<r;s++)e.push(u[s].apply(null,arguments));return i.apply(null,e)}));return l.resultFunc=a,l.dependencies=u,l.recomputations=function(){return o},l.resetRecomputations=function(){return o=0},l}}((function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:N,s=null,t=null;return function(){return U(r,s,arguments)||(t=e.apply(null,arguments)),s=arguments,t}}));var y=k((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),S=function(e){return e.usersPage.pagesSize},I=function(e){return e.usersPage.totalUsersCount},z=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.isFetch},B=function(e){return e.usersPage.followingInProgress},F=function(e){Object(o.a)(s,e);var r=Object(a.a)(s);function s(){var e;Object(t.a)(this,s);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=r.call.apply(r,[this].concat(o))).onPageClick=function(r){var s=e.props.pagesSize;e.props.requestUsers(r,s)},e}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,r=e.currentPage,s=e.pagesSize;this.props.requestUsers(r,s)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetch?Object(h.jsx)(x.a,{}):null,Object(h.jsx)(_,{totalUsersCount:this.props.totalUsersCount,pagesSize:this.props.pagesSize,currentPage:this.props.currentPage,onPageClick:this.onPageClick,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),s}(i.a.Component);r.default=Object(w.c)(Object(l.b)((function(e){return{users:y(e),pagesSize:S(e),totalUsersCount:I(e),currentPage:z(e),isFetch:A(e),followingInProgress:B(e)}}),{follow:O.b,unfollow:O.f,setCurrentPage:O.d,toggleFollowingProgress:O.e,requestUsers:O.c}))(F)}}]);
//# sourceMappingURL=3.9ee996dc.chunk.js.map