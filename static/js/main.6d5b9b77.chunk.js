(this["webpackJsonpbanking-app"]=this["webpackJsonpbanking-app"]||[]).push([[0],{100:function(e,t,a){e.exports={icon:"Icon_icon__3l6tx"}},101:function(e,t,a){e.exports={Header:"Header_Header__1whZ2",amount:"Header_amount__1kxEI"}},104:function(e,t,a){e.exports={History:"History_History__1OANJ"}},105:function(e,t,a){e.exports={CreditHead:"CreditHead_CreditHead__2Hyeu"}},106:function(e,t,a){e.exports={gold:"CreditCard_gold__1v7QM",green:"CreditCard_green__3AAxf",CreditCard:"CreditCard_CreditCard__3jwE5"}},107:function(e,t,a){e.exports={flex:"ConfirmRow_flex__2z4kg"}},113:function(e,t,a){},12:function(e,t,a){e.exports={gray:"SendMoney_gray__3fGFB",SendMoney:"SendMoney_SendMoney__RzZnd",real:"SendMoney_real__24NL2",input:"SendMoney_input__3ewV1",dirty:"SendMoney_dirty__22AKL",abs:"SendMoney_abs__k7J5c",btn:"SendMoney_btn__3_vc1",Close:"SendMoney_Close__Jme9f",chill:"SendMoney_chill__2YigT"}},14:function(e,t,a){e.exports={Credit:"CreditDetails_Credit__3TvtK",amt:"CreditDetails_amt__1B6n2",end:"CreditDetails_end__1b0t3",flex:"CreditDetails_flex__3QeRQ",flexamt:"CreditDetails_flexamt__1wt5G",details:"CreditDetails_details__2R8oA",CreditDetails:"CreditDetails_CreditDetails__1On-c"}},20:function(e,t,a){e.exports={flex:"Register_flex__2eJEp",width:"Register_width__2m7Ay",input:"Register_input__1x_Kk",dirty:"Register_dirty__14PM3",btn:"Register_btn__GqpeL"}},21:function(e,t,a){e.exports={Home:"Home_Home__2F5JQ",toogle:"Home_toogle__1AvEX",header:"Home_header__e72aq",balance:"Home_balance__2hfqm",chart:"Home_chart__3dKEP",history:"Home_history__2CYvO",card:"Home_card__3jqjM",slider:"Home_slider__2UivP",CreditCard:"Home_CreditCard__27cxa"}},22:function(e,t,a){e.exports={toogle:"Transaction_toogle__2YC6b",header:"Transaction_header__3OeAH",Transaction:"Transaction_Transaction__2vOMq",period:"Transaction_period__3juSd",history:"Transaction_history__1xnzw",date:"Transaction_date__3OMH-",border:"Transaction_border__1hqcZ",hist:"Transaction_hist__XZOuP"}},225:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(50),s=a.n(r),i=(a(113),a(4)),o=a(25),l=a.n(o),d=a(23),u=a(98),j=a.n(u),b=a(0),m=function(){return Object(b.jsxs)("div",{className:j.a.flex,children:[Object(b.jsx)("span",{children:Object(b.jsx)("i",{className:"fas fa-piggy-bank fa-2x"})}),Object(b.jsx)("span",{children:"BankSafe"})]})},O=function(e){return Object(b.jsx)("div",{className:l.a.screen,children:Object(b.jsxs)("div",{className:l.a.Card,children:[Object(b.jsx)(m,{}),Object(b.jsxs)("div",{className:l.a.flex,children:[Object(b.jsx)(d.b,{activeClassName:l.a.active,className:l.a.flexdiv,to:"/auth",children:"Sign In"}),Object(b.jsx)(d.b,{activeClassName:l.a.active,className:l.a.flexdiv,to:"/register",children:"Sign Up"})]}),e.children]})})},x=a(32),f=a.n(x),h=a(52),p=a.n(h),_=function(e){var t=!0===e.color?p.a.color+" "+p.a["lds-ring"]:p.a["lds-ring"];return Object(b.jsxs)("div",{className:t,children:[Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{}),Object(b.jsx)("div",{})]})},g=a(99),v=a.n(g),y=function(e){return Object(b.jsxs)("div",{className:v.a.error,children:[e.children,Object(b.jsx)("span",{onClick:function(){e.cancel(!1)},children:"x"})," "]})},N=a(8),C=a.n(N),k=a(16),S=a(3),w=a(2),M=a(24),D=Object(M.b)({name:"ui",initialState:{logout:!1,showSendModal:!1,token:localStorage.getItem("token")},reducers:{logout:function(e){e.logout=!e.logout},showSendModalHandler:function(e,t){e.showSendModal=t.payload},loginHandler:function(e,t){e.token=t.payload.idToken,localStorage.setItem("token",t.payload.idToken),localStorage.setItem("deadLine",t.payload.expirationTime),localStorage.setItem("email",t.payload.email)},logoutHandler:function(e){e.token=null,localStorage.removeItem("token"),localStorage.removeItem("deadLine"),localStorage.removeItem("email")}}}),T=D.actions,H=D,A=function(e){return e-Date.now()},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=Object(n.useState)(""),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),l=Object(i.a)(o,2),d=l[0],u=l[1],j=Object(n.useState)(!1),b=Object(i.a)(j,2),m=b[0],O=b[1],x=Object(n.useState)(!1),f=Object(i.a)(x,2),h=f[0],p=f[1],_=Object(n.useState)(""),g=Object(i.a)(_,2),v=g[0],y=g[1],N=Object(n.useState)(""),M=Object(i.a)(N,2),D=M[0],H=M[1],R=Object(S.g)(),L=Object(w.b)(),q=function(){var a=Object(k.a)(C.a.mark((function a(n){var c,s,i,o,l,u;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n.preventDefault(),O(!0),a.next=4,fetch(e,{method:"POST",body:JSON.stringify({email:r,password:d,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}});case 4:return c=a.sent,a.next=7,c.json();case 7:s=a.sent,c.ok||(p(s.error.message),setTimeout((function(){h||p(!1)}),3e3)),O(!1),c.ok&&(i=Date.now()+1e3*s.expiresIn,o=s.idToken,L(T.loginHandler({idToken:o,expirationTime:i,email:r})),l=A(i),setTimeout((function(){L(T.logoutHandler())}),l),R.replace("/home")),u={name:"".concat(v," ").concat(D),accountNo:"BS-".concat(Math.random().toString(16).slice(11)),pin:d,email:r,height:"red",movements:[{date:"06/17/21",amount:1e4,narration:"account opening"}]},t&&c.ok&&fetch("https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json",{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return{password:d,error:h,email:r,loading:m,setError:p,loginHandler:q,setEmail:s,setPassword:u,firstName:v,setFirstName:y,lastName:D,setLastName:H}},L=function(){var e=R("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDXsGc-C5AZGrgtOB6J5N2_-LG9xaAm4rY"),t=e.password,a=e.email,n=e.loading,c=e.error,r=e.setError,s=e.loginHandler,i=e.setEmail,o=e.setPassword;return Object(b.jsxs)(O,{children:[c&&Object(b.jsx)(y,{cancel:r,children:c}),Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsxs)("div",{className:f.a.input,children:[Object(b.jsx)("input",{type:"email",required:!0,value:a,className:a.length>0?f.a.dirty:null,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("label",{children:"Email"})]}),Object(b.jsxs)("div",{className:f.a.input,children:[Object(b.jsx)("input",{type:"password",required:!0,value:t,minLength:6,className:t.length>0?f.a.dirty:null,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("label",{children:"password"})]}),Object(b.jsxs)("button",{type:"submit",className:f.a.btn,children:[n&&Object(b.jsx)(_,{}),!n&&"let me in"]})]})]})},q=function(){return Object(b.jsx)(L,{})},E=a(20),B=a.n(E),I=function(){var e=R("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDXsGc-C5AZGrgtOB6J5N2_-LG9xaAm4rY",!0),t=e.password,a=e.email,n=e.loading,c=e.error,r=e.setError,s=e.loginHandler,i=e.setEmail,o=e.setPassword,l=e.firstName,d=e.setFirstName,u=e.lastName,j=e.setLastName;return Object(b.jsxs)(O,{children:[c&&Object(b.jsx)(y,{cancel:r,children:c}),Object(b.jsxs)("form",{onSubmit:s,children:[Object(b.jsxs)("div",{className:B.a.flex,children:[Object(b.jsxs)("div",{className:B.a.input,style:{width:"45%"},children:[Object(b.jsx)("input",{type:"text",required:!0,onChange:function(e){return d(e.target.value)},value:l,onBlur:function(){0===l.trim().length&&(r("Fill All Fields"),d(""),setTimeout((function(){r(!1)}),2e3))}}),Object(b.jsx)("label",{children:"first name"})]}),Object(b.jsxs)("div",{className:B.a.input,style:{width:"45%"},children:[Object(b.jsx)("input",{type:"text",required:!0,onChange:function(e){return j(e.target.value)},value:u,onBlur:function(){0===u.trim().length&&(r("Fill All Fields"),j(""),setTimeout((function(){r(!1)}),2e3))}}),Object(b.jsx)("label",{children:"last name"})]})]}),Object(b.jsxs)("div",{className:B.a.input,children:[Object(b.jsx)("input",{type:"email",required:!0,value:a,className:a.length>0?B.a.dirty:null,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("label",{children:"Email"})]}),Object(b.jsxs)("div",{className:B.a.input,children:[Object(b.jsx)("input",{type:"password",required:!0,value:t,minLength:6,className:t.length>0?B.a.dirty:null,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("label",{children:"password"})]}),Object(b.jsxs)("button",{type:"submit",className:B.a.btn,children:[n&&Object(b.jsx)(_,{}),!n&&"let's go!"]})]})]})},J=function(){return Object(b.jsx)(I,{})},P=a(19),U=a(53),F=a.n(U),z=function(e){return e.path?Object(b.jsx)(d.b,{to:e.path,activeClassName:F.a.active,className:F.a.MenuRow,children:e.children}):Object(b.jsx)("span",{className:F.a.MenuRow,children:e.children})},G=a(54),$=a.n(G),Z=a(100),Y=a.n(Z),X=a(38),K=a.n(X),Q=function(e){var t=Object(w.b)();return Object(b.jsx)("div",{className:K.a.gray,onClick:e.click,children:Object(b.jsxs)("div",{className:K.a.menu,children:[Object(b.jsx)("span",{className:K.a.icon,onClick:e.close,children:Object(b.jsx)("i",{className:"fas fa-times fa-2x"})}),Object(b.jsx)("div",{className:K.a.logo,children:Object(b.jsx)("i",{className:"fas fa-piggy-bank fa-2x"})}),Object(b.jsxs)(z,{path:"/home",children:[Object(b.jsx)("i",{className:"fas fa-home",style:{marginRight:"1rem"}}),"home"]}),Object(b.jsx)("div",{onClick:function(){t(T.showSendModalHandler(!0))},children:Object(b.jsxs)(z,{children:[Object(b.jsx)("i",{className:"fas fa-hand-holding-usd",style:{marginRight:"1rem"}}),"send money"]})}),Object(b.jsxs)(z,{path:"/transaction",children:[Object(b.jsx)("i",{className:"fas fa-history",style:{marginRight:"1rem"}}),"transaction history"]}),Object(b.jsx)("div",{onClick:function(){t(T.logout())},children:Object(b.jsxs)(z,{children:[Object(b.jsx)("i",{className:"fas fa-sign-out-alt",style:{marginRight:"1rem"}}),"logout"]})})]})})},V=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(){c(!1)};return Object(b.jsxs)("div",{children:[!a&&Object(b.jsx)("span",{className:Y.a.icon,onClick:function(){c((function(e){return!e}))},children:Object(b.jsx)("i",{className:"fas fa-bars fa-2x"})}),a&&Object(b.jsx)(Q,{click:r,close:r})]})},W=function(){var e=Object(w.b)();return Object(b.jsxs)("div",{className:$.a.toggle,children:[Object(b.jsx)("div",{className:$.a.logo,children:Object(b.jsx)("i",{className:"fas fa-piggy-bank fa-2x"})}),Object(b.jsx)(V,{}),Object(b.jsxs)("div",{className:$.a.dis,children:[Object(b.jsxs)(z,{path:"/home",children:[Object(b.jsx)("i",{className:"fas fa-home",style:{marginRight:"1rem"}}),"home"]}),Object(b.jsx)("div",{onClick:function(){e(T.showSendModalHandler(!0))},children:Object(b.jsxs)(z,{children:[Object(b.jsx)("i",{className:"fas fa-hand-holding-usd",style:{marginRight:"1rem"}}),"send money"]})}),Object(b.jsxs)(z,{path:"/transaction",children:[Object(b.jsx)("i",{className:"fas fa-history",style:{marginRight:"1rem"}}),"transaction history"]}),Object(b.jsx)("div",{onClick:function(){e(T.logout())},children:Object(b.jsxs)(z,{children:[Object(b.jsx)("i",{className:"fas fa-sign-out-alt",style:{marginRight:"1rem"}}),"logout"]})})]})]})},ee=a(21),te=a.n(ee),ae=a(101),ne=a.n(ae),ce=function(e){return Object(b.jsx)("div",{className:ne.a.Header,children:Object(b.jsx)("h1",{children:e.name})})},re=a(108),se=function(){var e=Object(w.c)((function(e){return e.bank.date})),t=Object(w.c)((function(e){return e.bank.posAmount})),a=Object(w.c)((function(e){return e.bank.negAmount})),c=e.map((function(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(e).getDay()]})).slice(-7),r=Object(n.useState)({data:{labels:c,datasets:[{label:"Outflow",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:Object.values(a).map((function(e){return Math.abs(e)})).slice(-7)},{label:"Inflow",backgroundColor:"rgba(155,231,91,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:Object.values(t).slice(-7)}]}}),s=Object(i.a)(r,1)[0];return Object(b.jsx)(re.a,{data:s.data,width:"100%",height:"100%",options:{maintainAspectRatio:!1,responsive:!0,legend:{display:!1},scales:{x:{grid:{display:!1}}},type:"bar"}})},ie=a(75),oe=a.n(ie),le=function(e){return Object(b.jsxs)("div",{className:oe.a.CreditRow,children:[Object(b.jsx)("div",{children:Object(b.jsx)("i",{className:"fas fa-arrow-alt-circle-left"})}),Object(b.jsx)("span",{children:e.narr}),Object(b.jsx)("span",{className:oe.a.Creditamt,children:e.amt})]})},de=a(76),ue=a.n(de),je=function(e){return Object(b.jsxs)("div",{className:ue.a.DebitRow,children:[Object(b.jsx)("div",{children:Object(b.jsx)("i",{className:"far fa-arrow-alt-circle-right"})}),Object(b.jsx)("span",{children:e.narr}),Object(b.jsx)("span",{className:ue.a.Debitamt,children:e.amt})]})},be=a(39),me=a.n(be),Oe=function(e){var t=Object(w.c)((function(e){return e.bank.sortData})),a=Object(w.c)((function(e){return e.bank.tranData})),n="",c=[];if(!0===e.recent){var r=Object.keys(a).pop();if(a&&a[r]){var s=a[r].slice(-2),o=new Date(r),l=String(o).split(" "),d=s.map((function(e){return e.amount>=0?Object(b.jsx)(le,{narr:e.narration,amt:e.amount},Math.random()):Object(b.jsx)(je,{narr:e.narration,amt:e.amount},Math.random())}));n=Object(b.jsxs)("div",{className:me.a.margin,children:[Object(b.jsx)("span",{className:me.a.HistoryRow,children:"".concat(l[0],",").concat(l[2]," ").concat(l[1]," ").concat(l[3]," ")}),d]},Math.random()),c.push(n)}}else for(var u=0,j=Object.entries(t);u<j.length;u++){var m=Object(i.a)(j[u],2),O=m[0],x=m[1],f=new Date(O),h=String(f).split(" "),p=x.map((function(e){return e.amount>=0?Object(b.jsx)(le,{narr:e.narration,amt:e.amount},Math.random()):Object(b.jsx)(je,{narr:e.narration,amt:e.amount},Math.random())}));n=Object(b.jsxs)("div",{className:me.a.margin,children:[Object(b.jsx)("span",{className:me.a.HistoryRow,children:"".concat(h[0],", ").concat(h[2],"  ").concat(h[1]," ").concat(h[3]," ")}),p]},Math.random()),c.push(n)}return Object(b.jsx)(b.Fragment,{children:c.length>0?c:Object(b.jsxs)("p",{style:{fontSize:"1rem",margin:"2rem 0rem",textAlign:"center"},children:["no Transaction history found! ",Object(b.jsx)("br",{}),"\xa0\xa0\xa0\xa0"," ",Object(b.jsx)("span",{style:{fontSize:"0.8rem",margin:"3rem 0rem"},children:"Try setting a time period."})]})})},xe=a(104),fe=a.n(xe),he=function(){return Object(b.jsxs)("div",{className:fe.a.History,children:[Object(b.jsx)("h1",{children:"latest transactions"}),Object(b.jsx)(Oe,{recent:!0})]})},pe=a(33),_e=a.n(pe),ge=function(){var e=Object(w.c)((function(e){return e.bank.balance})),t=Object(w.c)((function(e){return e.bank.myNo}));return Object(b.jsxs)("div",{className:_e.a.Balance,children:[Object(b.jsx)("span",{className:_e.a.name,children:"balance"}),Object(b.jsx)("span",{className:_e.a.amt,children:"$".concat(e.toLocaleString())}),Object(b.jsx)("span",{className:_e.a.No,children:"account-no"}),Object(b.jsx)("span",{className:_e.a.NoAmt,children:t})]})},ve=a(14),ye=a.n(ve),Ne=a(40),Ce=a.n(Ne),ke=function(e){return Object(b.jsxs)("div",{className:Ce.a.Credit,style:e.style,children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{className:Ce.a.end,children:Object(b.jsx)("i",{className:"fas fa-ellipsis-h"})}),Object(b.jsx)("span",{className:Ce.a.amt,children:e.amount}),Object(b.jsx)("span",{children:e.expdate}),Object(b.jsx)("span",{className:Ce.a.end,children:Object(b.jsx)("i",{className:"fab fa-cc-mastercard fa-2x"})})]})},Se=function(e){return Object(b.jsxs)("div",{className:ye.a.CreditDetails,children:[Object(b.jsx)(ke,{name:e.name,expdate:e.expdate,amount:e.amount,style:{backgroundColor:"".concat(e.background),color:"".concat(e.color)}}),Object(b.jsxs)("div",{className:ye.a.details,children:[Object(b.jsxs)("div",{className:ye.a.flex,children:[Object(b.jsx)("span",{children:"credit limit"}),Object(b.jsx)("span",{className:ye.a.flexamt,children:e.creditLimit})]}),Object(b.jsxs)("div",{className:ye.a.flex,children:[Object(b.jsx)("span",{children:"credit used"}),Object(b.jsx)("span",{className:ye.a.flexamt,children:"$00.00"})]}),Object(b.jsxs)("div",{className:ye.a.flex,children:[Object(b.jsx)("span",{children:"currency"}),Object(b.jsx)("span",{className:ye.a.flexamt,children:"USD"})]}),Object(b.jsxs)("div",{className:ye.a.flex,children:[Object(b.jsx)("span",{children:"status"}),Object(b.jsx)("span",{className:ye.a.flexamt,children:e.status})]})]})]})},we=a(105),Me=a.n(we),De=function(e){var t=e.className+" "+Me.a.CreditHead;return Object(b.jsxs)("div",{className:t,style:{backgroundColor:"".concat(e.background),color:"".concat(e.color)},onClick:function(){e.click(e.id)},children:[Object(b.jsx)("span",{children:e.name}),Object(b.jsx)("span",{children:e.amount})]})},Te=a(106),He=a.n(Te),Ae=function(){var e=Object(w.c)((function(e){return e.bank.balance})),t=[{id:"1",name:"universal",amount:"$".concat(e.toLocaleString()),expdate:"*2243 04/21",background:"black",creditLimit:"$100,000",status:"active",color:"white"},{id:"2",name:"gold",amount:"$2343.3",expdate:"*1043 07/21",background:"#c8ed43",creditLimit:"$664343",status:"Not active",color:"black"},{id:"3",name:"junior",amount:"$8743.3",expdate:"*6743 04/22",background:"#29a174",creditLimit:"$14343",status:"Not active",color:"white"}],a=Object(n.useState)("1"),c=Object(i.a)(a,2),r=c[0],s=c[1],o=t.find((function(e){return e.id===r})),l=t.filter((function(e){return e.id!==r}));return Object(b.jsxs)("div",{className:He.a.CreditCard,children:[Object(b.jsx)(Se,{name:o.name,expdate:o.expdate,amount:o.amount,creditLimit:o.creditLimit,status:o.status,background:o.background,color:o.color},o.id),l.map((function(e){return Object(b.jsx)(De,{id:e.id,name:e.name,expdate:e.expdate,amount:e.amount,creditLimit:e.creditLimit,status:e.status,background:e.background,color:e.color,click:s},e.id)}))]})},Re=a(55),Le=a.n(Re),qe=function(){var e=Object(w.c)((function(e){return e.bank.balance})),t=[{id:"1",name:"universal",amount:"$".concat(e.toLocaleString()),expdate:"*2243 04/21"},{id:"2",name:"gold",amount:"$2343.3",expdate:"*1043 07/21"},{id:"3",name:"junior",amount:"$8743.3",expdate:"*6743 04/22"}].map((function(e,t){var a,n,c;return 0===t&&(a=0,n="black"),1===t&&(a=110,n="#c8ed43",c="black"),2===t&&(a=220,n="#29a174"),Object(b.jsx)(ke,{name:e.name,amount:e.amount,expdate:e.expdate,style:{transform:"translateX(".concat(a,"%)"),position:"absolute",backgroundColor:"".concat(n),color:"".concat(c),fontWeight:"bold"}},e.id)}));return Object(b.jsxs)("div",{className:Le.a.flex,children:[Object(b.jsx)("div",{className:Le.a.Slider,children:t}),Object(b.jsx)("div",{className:Le.a.dot})]})},Ee=Object(M.b)({name:"bank",initialState:{balance:0,date:[],posAmount:0,negAmount:0,tranData:[],sortData:[],name:"",myNo:""},reducers:{saveBalance:function(e,t){e.balance=t.payload},saveDateToData:function(e,t){e.date=t.payload.date,e.posAmount=t.payload.dateToPosAmount,e.negAmount=t.payload.dateToNegAmount},saveTranData:function(e,t){e.tranData=t.payload},saveSortData:function(e,t){e.sortData=t.payload},saveName:function(e,t){e.name=t.payload},saveMyNo:function(e,t){e.myNo=t.payload}}}),Be=Ee.actions,Ie=Ee,Je=Object(M.b)({name:"transfer",initialState:{amount:0,date:"",narration:"",destinatedAccount:"",destinatedAccountName:"",pinNo:"",unique:"",movementNode:"",myUnique:"",myMovementNode:""},reducers:{storeTransferDetails:function(e,t){e.amount=t.payload.amount,e.narration=t.payload.narration,e.date=t.payload.date,e.destinatedAccount=t.payload.destinatedAccount,e.destinatedAccountName=t.payload.destinatedAccountName},savePin:function(e,t){e.pinNo=t.payload},updateUrl:function(e,t){e.unique=t.payload.unique,e.movementNode=t.payload.movementNode},updateMyUrl:function(e,t){e.myUnique=t.payload.myUnique,e.myMovementNode=t.payload.myMovementNode}}}),Pe=Je.actions,Ue=Je,Fe=function(){var e=Object(w.b)(),t=Object(S.g)(),a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],s=c[1],o=Object(w.c)((function(e){return e.bank.name})),l=localStorage.getItem("email");return Object(n.useEffect)((function(){(function(){var a=Object(k.a)(C.a.mark((function a(){var n,c,r,i;return C.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s(!0),a.next=3,fetch('https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="'.concat(l,'"&print=pretty'));case 3:return n=a.sent,a.next=6,n.json();case 6:if(c=a.sent,"{}"!==JSON.stringify(c)){a.next=10;break}return t.go(0),a.abrupt("return");case 10:for(i in r=function(t){e(Be.saveName(c[t].name)),e(Be.saveMyNo(c[t].accountNo)),e(Pe.savePin(c[t].pin)),e(Pe.updateMyUrl({myUnique:t,myMovementNode:c[t].movements.length}));var a=c[t].movements.reduce((function(e,t){return e+t.amount}),0);e(Be.saveBalance(a));var n=c[t].movements.reduce((function(e,a){return Object.keys(e).includes(a.date)||(e[a.date]=c[t].movements.filter((function(e){return e.date===a.date}))),e}),{}),r=Object(P.a)({},n);for(var s in e(Be.saveTranData(r)),n)n[s]=n[s].map((function(e){return e.amount}));var i=Object.keys(n),o=Object(P.a)({},n),l=Object(P.a)({},n);for(var d in o)o[d]=o[d].reduce((function(e,t){return t>0?e+t:e}),0);for(var u in l)l[u]=l[u].reduce((function(e,t){return t<0?e+t:e}),0);e(Be.saveDateToData({date:i,dateToPosAmount:o,dateToNegAmount:l}))},c)r(i);s(!1);case 13:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e,l,t]),Object(b.jsxs)(b.Fragment,{children:[r&&Object(b.jsx)(_,{color:!0}),!r&&Object(b.jsxs)("div",{className:te.a.Home,children:[Object(b.jsx)("div",{className:te.a.toogle,children:Object(b.jsx)(W,{})}),Object(b.jsx)("div",{className:te.a.header,children:Object(b.jsx)(ce,{name:"hi, ".concat(o)})}),Object(b.jsx)("div",{className:te.a.balance,children:Object(b.jsx)(ge,{})}),Object(b.jsx)("div",{className:te.a.chart,children:Object(b.jsx)(se,{})}),Object(b.jsx)("div",{className:te.a.history,children:Object(b.jsx)(he,{})}),Object(b.jsxs)("div",{className:te.a.card,children:[Object(b.jsx)("div",{className:te.a.slider,children:Object(b.jsx)(qe,{})}),Object(b.jsx)(Ae,{})]})]})]})},ze=a(6),Ge=a(22),$e=a.n(Ge),Ze=function(){var e=new Date;e.setMonth(e.getMonth()-1);var t=[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"),a=[(new Date).getFullYear(),("0"+((new Date).getMonth()+1)).slice(-2),("0"+(new Date).getDate()).slice(-2)].join("-"),c=Object(n.useState)(t),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(a),d=Object(i.a)(l,2),u=d[0],j=d[1],m=Object(n.useState)(!1),O=Object(i.a)(m,2),x=O[0],f=O[1],h=Object(w.b)(),p=Object(w.c)((function(e){return e.bank.tranData})),g=localStorage.getItem("email");return Object(n.useEffect)((function(){(function(){var e=Object(k.a)(C.a.mark((function e(){var t,a,n,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,fetch('https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json?orderBy="email"&equalTo="'.concat(g,'"&print=pretty'));case 3:return t=e.sent,e.next=6,t.json();case 6:for(c in a=e.sent,n=function(e){var t=Object(ze.a)(a[e].movements).reduce((function(t,n){return Object.keys(t).includes(n.date)||(t[n.date]=a[e].movements.filter((function(e){return e.date===n.date}))),t}),{});h(Be.saveTranData(t))},a)n(c);f(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h,g]),Object(n.useEffect)((function(){var e=Object.entries(p).filter((function(e){var t=Object(i.a)(e,1)[0];return new Date(t).setHours(0,0,0,0)>=new Date(s).setHours(0,0,0,0)&&new Date(t).setHours(0,0,0,0)<=new Date(u).setHours(0,0,0,0)})),t=Object.fromEntries(e);h(Be.saveSortData(t))}),[s,u,h,p]),Object(b.jsxs)("div",{children:[x&&Object(b.jsx)(_,{color:!0}),!x&&Object(b.jsxs)("div",{className:$e.a.Transaction,children:[Object(b.jsx)("div",{className:$e.a.toogle,children:Object(b.jsx)(W,{})}),Object(b.jsx)("div",{className:$e.a.header,children:Object(b.jsx)(ce,{name:"Transactions"})}),Object(b.jsx)("div",{className:$e.a.period,children:Object(b.jsxs)("div",{className:$e.a.date,children:[Object(b.jsx)("h3",{children:"Time Period"}),Object(b.jsxs)("div",{className:$e.a.border,children:[Object(b.jsx)("span",{children:"Start Date"}),Object(b.jsx)("input",{type:"date",defaultValue:s,onChange:function(e){return o(e.target.value)}})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{children:"End Date"}),Object(b.jsx)("input",{type:"date",defaultValue:u,onChange:function(e){return j(e.target.value)}})]})]})}),Object(b.jsx)("div",{className:$e.a.history,children:Object(b.jsxs)("div",{className:$e.a.hist,children:[Object(b.jsx)("p",{children:"All Transactions"}),Object(b.jsx)(Oe,{recent:!1})]})})]})]})},Ye=a(12),Xe=a.n(Ye),Ke=a(107),Qe=a.n(Ke),Ve=function(e){return Object(b.jsxs)("div",{className:Qe.a.flex,children:[Object(b.jsx)("span",{children:e.label}),Object(b.jsx)("span",{children:e.value})]})},We=a(34),et=a.n(We),tt=function(e){var t=Object(S.g)(),a=Object(w.c)((function(e){return e.transfer})),c=Object(w.c)((function(e){return e.bank.balance})),r=Object(n.useState)(""),s=Object(i.a)(r,2),o=s[0],l=s[1],d=Object(n.useState)(!1),u=Object(i.a)(d,2),j=u[0],m=u[1],O=Object(n.useState)(!1),x=Object(i.a)(O,2),f=x[0],h=x[1],p=Object(n.useState)("confirm"),g=Object(i.a)(p,2),v=g[0],y=g[1],N=Object(b.jsx)("i",{className:"far fa-check-circle fa-2x"}),M=function(){var e=Object(k.a)(C.a.mark((function e(n){var c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),o===a.pinNo&&0!==o.trim().length){e.next=5;break}return m(!0),l(""),e.abrupt("return");case 5:c={amount:Number("-"+a.amount),narration:a.narration,date:a.date},r={amount:Number(a.amount),narration:a.narration,date:a.date},console.log(c,r),h(!0),fetch("https://banking-app-7dc7f-default-rtdb.firebaseio.com/users/".concat(a.unique,"/movements/").concat(a.movementNode,".json"),{method:"PATCH",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}),fetch("https://banking-app-7dc7f-default-rtdb.firebaseio.com/users/".concat(a.myUnique,"/movements/").concat(a.myMovementNode,".json"),{method:"PATCH",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}),h(!1),y(N),setTimeout((function(){t.go(0)}),1e3);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:et.a.SendMoney,children:[Object(b.jsx)("span",{className:et.a.Close,onClick:e.click,children:Object(b.jsx)("i",{className:"fas fa-times fa-2x"})}),Object(b.jsx)("h3",{children:"Confirm Transfer"}),Object(b.jsx)(Ve,{label:"from",value:"Universal $".concat(c.toLocaleString())}),Object(b.jsx)(Ve,{label:"to",value:"".concat(a.destinatedAccountName," ").concat(a.destinatedAccount)}),Object(b.jsx)(Ve,{label:"bank",value:"Bank Safe"}),Object(b.jsx)(Ve,{label:"Date",value:"".concat(a.date)}),Object(b.jsx)(Ve,{label:"amount",value:"".concat(a.amount)}),Object(b.jsx)(Ve,{label:"narration",value:"".concat(a.narration)}),Object(b.jsxs)("form",{className:et.a.pin,onSubmit:M,children:[Object(b.jsxs)("div",{className:et.a.color,children:[Object(b.jsx)("div",{children:"enter account PIN to confirm your transfer"}),Object(b.jsx)("input",{style:{border:j?"1px solid red":null},type:"password",value:o,onChange:function(e){return l(e.target.value)}})]}),Object(b.jsxs)("button",{type:"submit",className:et.a.btn,children:[!f&&v,f&&Object(b.jsx)(_,{})]})]})]})},at=function(){var e=Object(w.b)(),t=Object(w.c)((function(e){return e.bank.balance})),a=Object(w.c)((function(e){return e.bank.myNo})),c=Object(n.useState)(""),r=Object(i.a)(c,2),s=r[0],o=r[1],l=Object(n.useState)(""),d=Object(i.a)(l,2),u=d[0],j=d[1],m=Object(n.useState)(""),O=Object(i.a)(m,2),x=O[0],f=O[1],h=Object(n.useState)(!1),p=Object(i.a)(h,2),g=p[0],v=p[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),S=N[0],M=N[1],D=Object(n.useState)(!1),H=Object(i.a)(D,2),A=H[0],R=H[1],L=Object(n.useState)(""),q=Object(i.a)(L,2),E=q[0],B=q[1],I=Object(n.useState)(!1),J=Object(i.a)(I,2),P=J[0],U=J[1],F=function(){e(T.showSendModalHandler(!1))},z=function(){var t=Object(k.a)(C.a.mark((function t(){var n,c,r;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(v(!0),0!==s.trim().length){t.next=6;break}return o(""),v(!1),R(!1),t.abrupt("return");case 6:if(a!==s){t.next=12;break}return console.log("sj"),v(!1),M(!0),R(!0),t.abrupt("return");case 12:return M(!1),t.next=15,fetch('https://banking-app-7dc7f-default-rtdb.firebaseio.com/users.json?orderBy="accountNo"&equalTo="'.concat(s,'"&print=pretty'));case 15:return n=t.sent,t.next=18,n.json();case 18:for(r in c=t.sent)e(Pe.updateUrl({unique:r,movementNode:c[r].movements.length})),j(c[r].name),R(!0);v(!1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:Xe.a.gray,children:[!P&&Object(b.jsxs)("div",{className:Xe.a.chill,children:[g&&Object(b.jsx)(_,{color:!0}),!g&&Object(b.jsxs)("div",{className:Xe.a.SendMoney,children:[Object(b.jsx)("span",{className:Xe.a.Close,onClick:F,children:Object(b.jsx)("i",{className:"fas fa-times fa-2x"})}),Object(b.jsx)("h3",{children:"Send Money Details"}),Object(b.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),0!==x.trim().length)if(t-Number(E)<=0||0===Number(E))B(0);else{if(0===s.trim().length)return o(""),v(!1),void R(!1);e(Pe.storeTransferDetails({narration:x,amount:E,destinatedAccount:s,destinatedAccountName:u,date:(new Date).toLocaleDateString()})),U(!0)}else f("")},children:[Object(b.jsxs)("div",{className:Xe.a.input,children:[Object(b.jsx)("input",{className:Xe.a.real,type:"text",required:!0,defaultValue:"$".concat(t.toLocaleString()),style:{pointerEvents:"none"}}),Object(b.jsx)("label",{children:"from Account: Universal "})]}),Object(b.jsxs)("div",{className:Xe.a.input,children:[Object(b.jsx)("input",{type:"text",required:!0,value:s,onChange:function(e){return o(e.target.value)},onBlur:z}),Object(b.jsx)("label",{children:"Enter Destination Account Number"}),Object(b.jsxs)("div",{className:Xe.a.abs,style:{display:A?"block":"none",backgroundColor:S?"rgba(255, 0, 0, 0.493)":null},children:[!g&&!S&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("i",{className:"fas fa-user-check"}),u]}),S&&Object(b.jsx)("p",{children:"You can't send money to self."})]})]}),Object(b.jsxs)("div",{className:Xe.a.input,children:[Object(b.jsx)("input",{type:"number",min:"100",className:E<100?Xe.a.dirty:null,value:E,onChange:function(e){return B(e.target.value)},required:!0}),Object(b.jsx)("label",{children:"Enter Amount"})]}),Object(b.jsxs)("div",{className:Xe.a.input,children:[Object(b.jsx)("input",{type:"text",required:!0,maxLength:"20",value:x,onChange:function(e){return f(e.target.value)},onBlur:function(){0!==x.trim().length||f("")}}),Object(b.jsx)("label",{children:"Enter Narration"})]}),Object(b.jsx)("button",{type:"submit",className:Xe.a.btn,disabled:!!S||null,children:"continue"})]})]})]}),P&&Object(b.jsx)(tt,{click:F})]})},nt=a(56),ct=a.n(nt),rt=function(){var e=Object(w.b)(),t=Object(S.g)();return Object(b.jsx)("div",{className:ct.a.Modal,children:Object(b.jsxs)("div",{className:ct.a.logout,children:[Object(b.jsx)("p",{children:"Are you sure you want to log out?"}),Object(b.jsxs)("div",{className:ct.a.flex,children:[Object(b.jsx)("span",{onClick:function(){e(T.logout())},children:"no"}),Object(b.jsx)("span",{onClick:function(){e(T.logout()),e(T.logoutHandler()),t.go(0)},children:"yes"})]})]})})};var st=function(){var e=localStorage.getItem("token"),t=Object(n.useState)(e),a=Object(i.a)(t,1)[0],c=Object(w.c)((function(e){return!!e.ui.token})),r=Object(w.c)((function(e){return e.ui.logout})),s=Object(w.c)((function(e){return e.ui.showSendModal})),o=Object(w.b)();return Object(n.useEffect)((function(){if(a){var e=localStorage.getItem("deadLine")-Date.now();e<6e3&&(e=0),setTimeout((function(){o(T.logoutHandler())}),e)}}),[a,o]),Object(b.jsxs)("div",{children:[Object(b.jsxs)(S.d,{children:[Object(b.jsx)(S.b,{path:"/",exact:!0,children:Object(b.jsx)(S.a,{to:"/auth"})}),!c&&Object(b.jsx)(S.b,{path:"/auth",children:Object(b.jsx)(q,{})}),!c&&Object(b.jsx)(S.b,{path:"/register",children:Object(b.jsx)(J,{})}),c&&Object(b.jsx)(S.b,{path:"/home",children:Object(b.jsx)(Fe,{})}),c&&Object(b.jsx)(S.b,{path:"/transaction",children:Object(b.jsx)(Ze,{})}),Object(b.jsxs)(S.b,{path:"*",children:[c&&Object(b.jsx)(S.a,{to:"/home"}),!c&&Object(b.jsx)(S.a,{to:"/auth"})]})]}),r&&Object(b.jsx)(rt,{}),s&&Object(b.jsxs)(S.b,{children:[Object(b.jsx)(S.a,{to:"/home"}),Object(b.jsx)(at,{})]})]})},it=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,226)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))},ot=Object(M.a)({reducer:{ui:H.reducer,bank:Ie.reducer,transfer:Ue.reducer}});s.a.render(Object(b.jsx)(w.a,{store:ot,children:Object(b.jsx)(d.a,{basename:"/",children:Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(st,{})})})}),document.getElementById("root")),it()},25:function(e,t,a){e.exports={screen:"Card_screen__3mg-K",Card:"Card_Card__2op5z",flex:"Card_flex__2YXH-",flexdiv:"Card_flexdiv__3G9Ak",active:"Card_active__1qjdO"}},32:function(e,t,a){e.exports={input:"Login_input__3nS2N",dirty:"Login_dirty__1RIb4",btn:"Login_btn__1pBcC"}},33:function(e,t,a){e.exports={Balance:"balance_Balance__1zgJ2",name:"balance_name__1GwZn",amt:"balance_amt__2Ge6f",No:"balance_No__3qUCO",NoAmt:"balance_NoAmt__29sca"}},34:function(e,t,a){e.exports={SendMoney:"ConfirmMoney_SendMoney__R1Ucr",btn:"ConfirmMoney_btn__1JlUl",pin:"ConfirmMoney_pin__3A3eh",color:"ConfirmMoney_color__2mdwC",Close:"ConfirmMoney_Close__1_CrJ"}},38:function(e,t,a){e.exports={menu:"Menu_menu__3yMv-",logo:"Menu_logo__Hg5zU",icon:"Menu_icon__2EGEZ",gray:"Menu_gray__3kJXy"}},39:function(e,t,a){e.exports={HistoryRow:"HistoryRow_HistoryRow__3jbz6",margin:"HistoryRow_margin__kcGkj"}},40:function(e,t,a){e.exports={Credit:"Credit_Credit__22J9U",amt:"Credit_amt__2Q68x",end:"Credit_end__uVdwn"}},52:function(e,t,a){e.exports={"lds-ring":"Loader_lds-ring__3LlAd",color:"Loader_color__FzRTt"}},53:function(e,t,a){e.exports={MenuRow:"MenuRow_MenuRow__2uMTa",active:"MenuRow_active__1h6P9"}},54:function(e,t,a){e.exports={toggle:"Toggle_toggle__3Djsa",logo:"Toggle_logo__3mFVz",dis:"Toggle_dis__15aX_"}},55:function(e,t,a){e.exports={Slider:"Slider_Slider__3bave",dot:"Slider_dot__1zEsm",flex:"Slider_flex__2p5vZ"}},56:function(e,t,a){e.exports={Modal:"Modal_Modal__2YkRC",logout:"Modal_logout__2uBNB",flex:"Modal_flex__1DH0K"}},75:function(e,t,a){e.exports={CreditRow:"CreditRow_CreditRow__EZA5Q",Creditamt:"CreditRow_Creditamt__1HSUJ"}},76:function(e,t,a){e.exports={DebitRow:"DebitRow_DebitRow__JhJD_",Debitamt:"DebitRow_Debitamt__1OSSn"}},98:function(e,t,a){e.exports={flex:"LogoName_flex__21HaI"}},99:function(e,t,a){e.exports={error:"Error_error__2Z1-5"}}},[[225,1,2]]]);
//# sourceMappingURL=main.6d5b9b77.chunk.js.map