(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[0],[,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"n",(function(){return c})),n.d(t,"p",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"k",(function(){return a})),n.d(t,"l",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"m",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return j})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return b})),n.d(t,"e",(function(){return p})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return O})),n.d(t,"o",(function(){return g}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",i="SET_INGREDIENTS",o="FETCH_INGREDIENTS_FAILED",a="PERCHASE_BURGER_START",s="PURCHASE_BURGER_SUCCESS",u="PURCHASE_BURGER_FAIL",d="PURCHASE_INIT",l="FECTHED_ORDERS_START",j="FECTHED_ORDERS_SUCCESS",h="FECTHED_ORDERS_FAIL",b="AUTH_START",p="AUTH_SUCCESS",f="AUTH_FAIL",O="AUTH_LOGOUT",g="SET_AUTH_REDIRECT_PATH"},,,,,,,,,function(e,t,n){"use strict";t.a=function(e){return e.children}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"i",(function(){return o})),n.d(t,"e",(function(){return a})),n.d(t,"h",(function(){return d})),n.d(t,"g",(function(){return u})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return O})),n.d(t,"f",(function(){return p})),n.d(t,"j",(function(){return g})),n.d(t,"c",(function(){return x}));var r=n(18),c=n(3),i=function(e){return{type:c.a,ingredientName:e}},o=function(e){return{type:c.n,ingredientName:e}},a=function(e){return function(t){r.a.get("https://broject-burger-default-rtdb.firebaseio.com/ingredients.json?auth="+e).then((function(e){var n;t((n=e.data,{type:c.p,ingredients:n}))})).catch((function(e){t({type:c.i})}))}},s=n(2),u=function(e,t){return function(n){n({type:c.k}),r.a.post("/orders.json?auth="+t,e).then((function(t){n(function(e,t){return{type:c.l,orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:c.j,error:e}}(e))}))}},d=function(){return{type:c.m}},l=function(e,t){return function(n){n({type:c.g}),r.a.get("/orders.json",{params:{auth:e,orderBy:'"userId"',equalTo:'"'.concat(t,'"')}}).then((function(e){var t,r=[];for(var i in e.data)r.push(Object(s.a)(Object(s.a)({},e.data[i]),{},{id:[i]}));n((t=r,{type:c.h,orders:t}))})).catch((function(e){var t;n((t=e,{type:c.f,error:t}))}))}},j=n(32),h=n.n(j),b=function(e,t){return{type:c.e,idToken:e,userId:t}},p=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:c.c}},f=function(e){return function(t){setTimeout((function(){t(p())}),1e3*+e)}},O=function(e,t,n){return function(r){r({type:c.d});var i={email:e,password:t,returnSecureToken:!0},o="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCT1oAkg5SYkgIQaNRoxOW8xTpq2EaFujY";n||(o="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCT1oAkg5SYkgIQaNRoxOW8xTpq2EaFujY"),h.a.post(o,i).then((function(e){var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.localId),r(f(e.data.expiresIn)),r(b(e.data.idToken,e.data.localId))})).catch((function(e){r(function(e){return{type:c.b,error:e}}(e.response.data.error.message))}))}},g=function(e){return{type:c.o,path:e}},x=function(){return function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(p());else{var r=localStorage.getItem("userId");e(b(t,r)),e(f((n.getTime()-(new Date).getTime())/1e3))}}else e(p())}}},function(e,t,n){"use strict";var r=n(32),c=n.n(r).a.create({baseURL:"https://broject-burger-default-rtdb.firebaseio.com/"});t.a=c},,,,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(2),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},i=function(e,t){var n=!0;return t?(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.minLength&&n),t.isEmail&&(n=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&n),t.isNumeric&&(n=/^\d+$/.test(e)&&n),n):n}},,,function(e,t,n){e.exports={SideDrawer:"upDK9fw0SBRlQDjaiTI9J",Open:"_18rb-JbNLHH1D4hNOiZ76U",Close:"_3ko5Va8U50e878Eor-FBTb",Logo:"B4FbZ3Ie2XHe0h2piztSK"}},function(e,t,n){e.exports={BreadBottom:"_1UbShteCK_Z9EFG0cjig1N",BreadTop:"d94JO4r6-puRQ_T918k6z",Seeds1:"_1Odq_iHxRVYuZLRMLylk-D",Seeds2:"_3PsG4XV2adFU1G_yEMII7I",Meat:"_1fXGJZ1HkBF9utPrNqxCiZ",Cheese:"_3MB6xMdq867-MMBn3XhR6t",Salad:"zQem8r9ALfDUGOnAgDPt5",Bacon:"_1El-pqDh3Swd2zqKTmHnUi"}},function(e,t,n){e.exports={BuildControl:"_2zYRWk_P-LyxKCjlpyV8Rp",Label:"_2mOXkyM8bjk2z2iAPFWrPm",Less:"_20ieqjRSzAh0JFxLlYiEBN",More:"_29mgQtEdbttG_ubTWwJA8N"}},,,function(e,t,n){"use strict";n(1);var r=n(62),c=n.n(r),i=n(0);t.a=function(e){return e.show?Object(i.jsx)("div",{className:c.a.BackDrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(6),c=n(7),i=n(9),o=n(8),a=n(1),s=n(64),u=n.n(s),d=n(12),l=n(30),j=n(0),h=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return Object(j.jsxs)(d.a,{children:[Object(j.jsx)(l.a,{show:this.props.show,clicked:this.props.modalClosed}),Object(j.jsx)("div",{className:u.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)"},children:this.props.children})]})}}]),n}(a.Component);t.a=h},,function(e,t,n){e.exports={Toolbar:"_2N0TSUNx5ZTvjjhofjifRQ",Logo:"LWn5rbdkk_NY51mtVRbXz",DesktopOnly:"_13qkdC-3BwacAK4W2Nt4MC"}},function(e,t,n){e.exports={Close:"_1fM1rhy91lFN86sbZnFMf9",TitleBox:"_2CdwP2lBoxUhDLv3cJ02-8",Title:"Y_IMztGStgBcxpemPh3fv"}},,,,function(e,t,n){e.exports={NavigationItem:"_3e0yIC69S7u0z-ors5PeFf",active:"_3DeVVfnQncuXBehKIzFWHD"}},,,function(e,t,n){e.exports={BuildControls:"bpFGsubTD51tacCc1pqHy",OrderButton:"L9P-q_nE_axWBCfzaRMN3",enable:"_3VXZheCMshAkMvqsk5BuKA"}},function(e,t,n){e.exports={Button:"_3bi60-3WEz-JGyftVhz_Ki",Success:"_3LPfrmP3A3YnLb8Qb2y4Xt",Danger:"_3Zyj7CNiZ7EvdlS--6hAwq"}},function(e,t,n){"use strict";n(1);var r=n(42),c=n.n(r),i=n(0);t.a=function(e){return Object(i.jsx)("button",{disabled:e.disabled,className:[c.a.Button,c.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})}},function(e,t,n){"use strict";n(1);var r=n(65),c=n.n(r),i=n(0);t.a=function(){return Object(i.jsx)("div",{className:c.a.Spinner,children:"Loading..."})}},function(e,t,n){"use strict";var r=n(2),c=n(6),i=n(7),o=n(9),a=n(8),s=n(1),u=n(31),d=n(12),l=n(0);t.a=function(e,t){return function(n){Object(o.a)(j,n);var s=Object(a.a)(j);function j(){var e;Object(c.a)(this,j);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=s.call.apply(s,[this].concat(n))).state={error:null},e.errorConfirmedHandler=function(){e.setState({error:null})},e}return Object(i.a)(j,[{key:"componentWillMount",value:function(){var e=this;this.requestInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.responseInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.requestInterceptor),t.interceptors.response.eject(this.responseInterceptor)}},{key:"render",value:function(){return Object(l.jsxs)(d.a,{children:[Object(l.jsx)(u.a,{show:this.state.error,modalClosed:this.errorConfirmedHandler,children:this.state.error?this.state.error.message:null}),Object(l.jsx)(e,Object(r.a)({},this.props))]})}}]),j}(s.Component)}},,,,,,,,,,function(e,t,n){"use strict";var r=n(66),c=(n(1),n(63)),i=n.n(c),o=n(26),a=n.n(o),s=n(0),u=function(e){return function(e){return"BreadTop"===e?Object(s.jsxs)("div",{className:a.a.BreadTop,children:[Object(s.jsx)("div",{className:a.a.Seeds1}),Object(s.jsx)("div",{className:a.a.Seeds2})]}):(t=e,Object(s.jsx)("div",{className:a.a[t]}));var t}(e.type)};t.a=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(s.jsx)(u,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(s.jsx)("p",{children:"Please start adding ingredients!"})),Object(s.jsxs)("div",{className:i.a.Burger,children:[Object(s.jsx)(u,{type:"BreadTop"}),t,Object(s.jsx)(u,{type:"BreadBottom"})]})}},,,function(e,t,n){e.exports={Content:"e47xAk4wKw4RHTQ4IRmEO"}},function(e,t,n){e.exports={Logo:"_2kHbHSiBr15rgS55u0LnPE"}},function(e,t,n){e.exports={NavigationItems:"_3tGJ9kyU3HdUjwJ76R5TfX"}},function(e,t,n){e.exports={DrawerToggle:"_1uXwPGVv-tljUqRT0Q4MXG"}},function(e,t,n){e.exports={BackDrop:"_4QruHzjwAqZA3WpE8d8wY"}},function(e,t,n){e.exports={Burger:"Rr26x7ZxI8fHM7qauZbC7"}},function(e,t,n){e.exports={Modal:"_3F8O4CUEIPPR2C37i-5sz8"}},function(e,t,n){e.exports={Spinner:"IKKHkXO1LJ-q4Q4p7FCSa",load7:"_24PXs-S4275xR_n9fnmKp8"}},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(28),o=n.n(i),a=n(16),s=n(57),u=(n(75),n(6)),d=n(7),l=n(9),j=n(8),h=n(12),b=n(58),p=n.n(b),f=n(33),O=n.n(f),g=n.p+"static/media/burger-logo.ec69c7f6.png",x=n(59),m=n.n(x),v=n(0),k=function(e){return Object(v.jsx)("div",{className:m.a.Logo,style:{height:e.height},children:Object(v.jsx)("img",{src:g,alt:"My Burger"})})},y=n(60),C=n.n(y),S=n(20),I=n(38),T=n.n(I),N=function(e){return Object(v.jsx)("li",{className:T.a.NavigationItem,children:Object(v.jsx)(S.b,{to:e.link,exact:!0,activeClassName:T.a.active,children:e.children})})},_=function(e){return Object(v.jsxs)("ul",{className:C.a.NavigationItems,children:[e.isLogged?Object(v.jsx)(N,{link:"/",children:"Burger Builder"}):null,e.isLogged?Object(v.jsx)(N,{link:"/orders",children:"Orders"}):null,e.isLogged?Object(v.jsx)(N,{link:"/logout",children:"Logout"}):Object(v.jsx)(N,{link:"/login",children:"Login"})]})},D=n(61),w=n.n(D),R=function(e){return Object(v.jsxs)("div",{onClick:e.clicked,className:w.a.DrawerToggle,children:[Object(v.jsx)("div",{}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]})},E=function(e){return Object(v.jsxs)("header",{className:O.a.Toolbar,children:[Object(v.jsx)(R,{clicked:e.drawerToggleClicked}),Object(v.jsx)("div",{className:O.a.Logo,children:Object(v.jsx)(k,{})}),Object(v.jsx)("nav",{className:O.a.DesktopOnly,children:Object(v.jsx)(_,{isLogged:e.isAuth})})]})},A=n(25),B=n.n(A),L=n(30),P=function(e){var t=[B.a.SideDrawer,e.open?B.a.Open:B.a.Close];return Object(v.jsxs)(h.a,{children:[Object(v.jsx)(L.a,{show:e.open,clicked:e.closed}),Object(v.jsxs)("div",{className:t.join(" "),onClick:e.closed,children:[Object(v.jsx)("div",{className:B.a.Logo,children:Object(v.jsx)(k,{})}),Object(v.jsx)("nav",{children:Object(v.jsx)(_,{isLogged:e.isAuth})})]})]})},H=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={showSideDrawer:!1},e.sideDrawerClosed=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(v.jsxs)(h.a,{children:[Object(v.jsx)(E,{drawerToggleClicked:this.sideDrawerClosed,isAuth:this.props.token}),Object(v.jsx)(P,{closed:this.sideDrawerClosed,open:this.state.showSideDrawer,isAuth:this.props.token}),Object(v.jsx)("main",{className:p.a.Content,children:this.props.children})]})}}]),n}(r.Component),M=Object(a.b)((function(e){return{token:e.auth.token}}))(H),U=n(2),F=n(55),q=n(41),z=n.n(q),G=n(27),Z=n.n(G),W=function(e){return Object(v.jsxs)("div",{className:Z.a.BuildControl,children:[Object(v.jsx)("div",{className:Z.a.Label,children:e.label}),Object(v.jsx)("button",{className:Z.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"}),Object(v.jsx)("button",{className:Z.a.More,onClick:e.added,children:"More"})]})},X=[{label:"Salad",type:"Salad"},{label:"Bacon",type:"Bacon"},{label:"Cheese",type:"Cheese"},{label:"Meat",type:"Meat"}],Y=function(e){return Object(v.jsxs)("div",{className:z.a.BuildControls,children:[Object(v.jsxs)("p",{children:["Current price: ",Object(v.jsxs)("strong",{children:[e.price.toFixed(2),"$"]})]}),X.map((function(t){return Object(v.jsx)(W,{label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type],isPerchasable:e.isPerchasable},t.label)})),Object(v.jsx)("button",{className:z.a.OrderButton,disabled:e.perchasable,onClick:e.checkout,children:"ORDER NOW"})]})},J=n(31),K=n(34),Q=n.n(K),V=n(43),$=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(v.jsxs)("li",{children:[t,": ",e.ingredients[t]]},t)}));return Object(v.jsxs)(h.a,{children:[Object(v.jsxs)("div",{className:Q.a.TitleBox,children:[Object(v.jsx)("h3",{className:Q.a.Title,children:"Your Order"}),Object(v.jsx)("button",{className:Q.a.Close,onClick:e.closeModal,children:"X"})]}),Object(v.jsx)("p",{children:"A delicious burger with the following ingredients:"}),Object(v.jsx)("ul",{children:t}),Object(v.jsx)("p",{children:Object(v.jsxs)("strong",{children:["Total Price: ",e.price.toFixed(2),"$"]})}),Object(v.jsxs)("p",{children:["Cooking + Delivery duration"," ",Object(v.jsxs)("strong",{children:[e.durationTime," minutes!"]})]}),Object(v.jsx)("p",{children:"Continue to Checkout?"}),Object(v.jsx)(V.a,{btnType:"Success",clicked:e.purchaseContinue,children:"CONTINUE"})]})},ee=n(18),te=n(45),ne=n(44),re=n(17),ce=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,c=new Array(r),i=0;i<r;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={durationTime:0,purchasing:!1},e.checkoutNow=function(){e.setState({purchasing:!e.state.purchasing})},e.purchaseCancelHandler=function(){e.setState({purchasing:!e.state.purchasing})},e.deliveryDurationCalculator=function(e){var t,n=0;return(t=Object.values(e).reduce((function(e,t){return e+=Number(t)}),0))>=1&&(n=15),t>=4&&(n=20),t>=6&&(n=30),t>=10&&(n=60),n},e.purchaseContinueHandler=function(){e.props.onInitPurchase(),e.props.history.push("checkout")},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onInitIngredients(this.props.token)}},{key:"updatePerchaseState",value:function(e){return Object.values(e).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=Object(U.a)({},this.props.ingredients);for(var t in e)e[t]=e[t]<=0;var n=null,r=this.props.error?Object(v.jsx)("p",{children:"Ingredients can't be loaded!"}):Object(v.jsx)(ne.a,{});return this.props.ingredients&&(r=Object(v.jsxs)(h.a,{children:[Object(v.jsx)(F.a,{ingredients:this.props.ingredients}),Object(v.jsx)(Y,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,price:this.props.totalPrice,perchasable:!this.updatePerchaseState(this.props.ingredients),checkout:this.checkoutNow})]}),n=Object(v.jsx)($,{ingredients:this.props.ingredients,price:this.props.totalPrice,durationTime:this.deliveryDurationCalculator(this.props.ingredients),closeModal:this.purchaseCancelHandler,purchaseContinue:this.purchaseContinueHandler})),Object(v.jsxs)(h.a,{children:[Object(v.jsx)(J.a,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:n}),r]})}}]),n}(r.Component),ie=Object(a.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,totalPrice:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,token:e.auth.token,path:e.auth.authRedirectPath}}),(function(e){return{onIngredientAdded:function(t){return e(re.a(t))},onIngredientRemoved:function(t){return e(re.i(t))},onInitIngredients:function(t){return e(re.e(t))},onInitPurchase:function(){return e(re.h())},onSetAuthRedirect:function(t){return e(re.j(t))}}}))(Object(te.a)(ce,ee.a)),oe=n(5),ae=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return Object(v.jsx)(oe.a,{to:"/login"})}}]),n}(r.Component),se=Object(a.b)(null,(function(e){return{onLogout:function(){return e(re.f())}}}))(ae),ue=function(e){return function(t){Object(l.a)(r,t);var n=Object(j.a)(r);function r(){var e;Object(u.a)(this,r);for(var t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return(e=n.call.apply(n,[this].concat(c))).state={component:null},e}return Object(d.a)(r,[{key:"componentDidMount",value:function(){var t=this;e().then((function(e){t.setState({component:e.default})}))}},{key:"render",value:function(){var e=this.state.component;return e?Object(v.jsx)(e,Object(U.a)({},this.props)):null}}]),r}(r.Component)},de=ue((function(){return n.e(3).then(n.bind(null,105))})),le=ue((function(){return n.e(5).then(n.bind(null,106))})),je=ue((function(){return n.e(4).then(n.bind(null,103))})),he=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).props.onTryAuthSignup(),r}return Object(d.a)(n,[{key:"render",value:function(){var e=null;return this.props.isLogged?(console.log(this.props),e=Object(v.jsxs)(oe.d,{children:[Object(v.jsx)(oe.b,{path:"/",exact:!0,component:ie}),Object(v.jsx)(oe.b,{path:"/checkout",component:de}),Object(v.jsx)(oe.b,{path:"/orders",component:le}),Object(v.jsx)(oe.b,{path:"/logout",component:se}),Object(v.jsx)(oe.a,{to:"/"})]})):e=Object(v.jsxs)(oe.d,{children:[Object(v.jsx)(oe.b,{path:"/login",component:je}),Object(v.jsx)(oe.a,{to:"/login"})]}),Object(v.jsx)("div",{children:Object(v.jsx)(M,{children:e})})}}]),n}(r.Component),be=Object(oe.g)(Object(a.b)((function(e){return{isLogged:e.auth.token}}),(function(e){return{onTryAuthSignup:function(){return e(re.c())}}}))(he)),pe=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,104)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))},fe=n(19),Oe=n(23),ge=n(3),xe={ingredients:null,totalPrice:4,erorr:!1},me={Salad:.5,Cheese:.5,Bacon:1,Meat:2},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.a:return Object(U.a)(Object(U.a)({},e),{},{ingredients:Object(U.a)(Object(U.a)({},e.ingredients),{},Object(Oe.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1)),totalPrice:e.totalPrice+me[t.ingredientName]});case ge.n:return Object(U.a)(Object(U.a)({},e),{},{ingredients:Object(U.a)(Object(U.a)({},e.ingredients),{},Object(Oe.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1)),totalPrice:e.totalPrice-me[t.ingredientName]});case ge.p:return Object(U.a)(Object(U.a)({},e),{},{ingredients:t.ingredients,totalPrice:4,erorr:!1});case ge.i:return Object(U.a)(Object(U.a)({},e),{},{error:!0});default:return e}},ke={orders:[],loading:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.m:return Object(U.a)(Object(U.a)({},e),{},{purchased:!1});case ge.k:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case ge.l:var n=Object(U.a)(Object(U.a)({},t.orderData),{},{id:t.orderId});return Object(U.a)(Object(U.a)({},e),{},{loading:!1,purchased:!0,orders:e.orders.concat(n)});case ge.j:return Object(U.a)(Object(U.a)({},e),{},{loading:!1});case ge.g:return Object(U.a)(Object(U.a)({},e),{},{loading:!0});case ge.h:return Object(U.a)(Object(U.a)({},e),{},{orders:t.orders,loading:!1});case ge.f:return Object(U.a)(Object(U.a)({},e),{},{loading:!1});default:return e}},Ce=n(22),Se={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ge.d:return Object(Ce.b)(e,{error:null,loading:!0});case ge.e:return Object(Ce.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1});case ge.b:return Object(Ce.b)(e,{error:t.error,loading:!1});case ge.c:return Object(Ce.b)(e,{token:null,userId:null});case ge.o:return Object(Ce.b)(e,{authRedirectPath:t.path});default:return e}},Te=fe.d,Ne=Object(fe.c)({burgerBuilder:ve,order:ye,auth:Ie}),_e=Object(fe.e)(Ne,Te(Object(fe.a)(s.a)));o.a.render(Object(v.jsx)(a.a,{store:_e,children:Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(S.a,{children:Object(v.jsx)(be,{})})})}),document.getElementById("root")),pe()}],[[96,1,2]]]);
//# sourceMappingURL=main.56a28879.chunk.js.map