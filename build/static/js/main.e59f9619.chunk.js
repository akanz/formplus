(this.webpackJsonpformplus=this.webpackJsonpformplus||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(6),r=a.n(s),l=(a(26),a(27),a(4)),i="CHANGE_SEARCH_FIELD",d="FETCH_TEMPLATE_DETAILS",o="FETCH_TEMPLATE_REQUEST",j="FETCH_TEMPLATE_SUCCESS",u="FETCH_TEMPLATE_ERROR",m="CHANGE_CATEGORY",b="CHANGE_ORDER_FIELD",f="CHANGE_DATE_FIELD",h=a(19),x=a.n(h),O=function(){return{type:o}},p=function(){return function(e){return e(O),x.a.get("https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates").then((function(t){return e((a=t.data,{type:j,payload:a}));var a})).catch((function(t){return e((a=t.message,{type:u,payload:a}));var a}))}},g=a.p+"static/media/search.0d7a3d8a.svg",v=a(0);var y=Object(l.b)((function(e){return{searchvalue:e.searchfield,dateValue:e.datefield,orderValue:e.orderfield}}),(function(e){return{onsearchchange:function(t){e({type:i,payload:t})},fetchtemplates:function(){e(p())},changecategory:function(t){e({type:m,payload:t})},changingorder:function(t){e({type:b,payload:t})},changebydate:function(t){e({type:f,payload:t})}}}))((function(e){var t=e.searchvalue,a=e.dateValue,n=e.orderValue,s=e.onsearchchange,r=e.fetchtemplates,l=e.changecategory,i=e.changingorder,d=e.changebydate;return Object(c.useEffect)((function(){r()}),[]),console.log(t),Object(v.jsx)("div",{children:Object(v.jsxs)("nav",{className:"m-4 mt-8 flow-root",children:[Object(v.jsxs)("div",{className:"w-full md:w-4/6 lg:w-2/6 lg:float-left",children:[Object(v.jsx)("input",{value:t,onChange:function(e){return s(e.target.value)},type:"text",placeholder:"Search Templates",className:"border border-gray-200 rounded-sm p-3 pt-2 px-4 w-full md:w-4/5 focus:outline-none focus:ring focus:ring-gray-100"}),Object(v.jsx)("button",{className:"p-1 outline-none align-middle -ml-10",children:Object(v.jsx)("img",{className:"w-5 opacity-60",src:g})})]}),Object(v.jsxs)("div",{className:"my-4 text-gray-400 text-sm md:w-5/6 md:justify-start md:flex lg:float-right lg:my-0 lg:w-4/6 lg:justify-end",children:[Object(v.jsx)("div",{className:"md:my-3 md:mr-3 pt-2 text-gray-400 lg:mx-4 lg:my-1",children:"Sort By:"}),Object(v.jsxs)("div",{className:"grid grid-cols-1 md:gap-8 md:grid-cols-3",children:[Object(v.jsxs)("fieldset",{className:"fieldset",children:[Object(v.jsx)("legend",{className:"mx-1",children:"category"}),Object(v.jsxs)("select",{className:"select",onChange:function(e){return function(e){l(e),t="",a="Default",n="Default"}(e.target.value)},children:[Object(v.jsx)("option",{value:"all",children:"All"}),Object(v.jsx)("option",{value:"education",children:"Education"}),Object(v.jsx)("option",{value:"ecommerce",children:"E-commerce"}),Object(v.jsx)("option",{value:"health",children:"Health"})]})]}),Object(v.jsxs)("fieldset",{className:"fieldset",children:[Object(v.jsx)("legend",{className:"mx-1",children:"order"}),Object(v.jsxs)("select",{className:"select",value:n,onChange:function(e){return i(e.target.value)},children:[Object(v.jsx)("option",{value:"Default",children:"Default"}),Object(v.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(v.jsx)("option",{value:"Descending",children:"Descending"})]})]}),Object(v.jsxs)("fieldset",{className:"fieldset",children:[Object(v.jsx)("legend",{className:"mx-1",children:"date"}),Object(v.jsxs)("select",{className:"select",value:a,onChange:function(e){return d(e.target.value)},children:[Object(v.jsx)("option",{value:"Default",children:"Default"}),Object(v.jsx)("option",{value:"Ascending",children:"Ascending"}),Object(v.jsx)("option",{value:"Descending",children:"Descending"})]})]})]})]})]})})})),N=a(5);var E=function(e){return Object(v.jsxs)("div",{className:"card min-h-1 relative",children:[Object(v.jsxs)("div",{className:"p-4 h-4/5",children:[Object(v.jsx)("div",{className:"text-2xl h-2/4 py-2 flex items-center capitalize",children:e.info.name}),Object(v.jsx)("div",{className:"text-sm h-2/4 py-2 flex items-center font-normal text-gray-600 text-base",children:e.info.description})]}),Object(v.jsx)("div",{className:"h-1/5 w-full bg-gray-100 text-lightgreen font-medium text-sm p-4 py-2 flex items-center absolute bottom-0 left-0",children:Object(v.jsx)("a",{children:e.info.link})})]})};a(51);var w=function(e){var t=e.type,a="skeleton ".concat(t);return Object(v.jsx)("div",{className:a})};var D=function(){return Object(v.jsx)("div",{className:"shimmer-wrapper",children:Object(v.jsx)("div",{className:"shimmer",children:" "})})};var A=function(){return Object(v.jsxs)("div",{className:"card h-40 w-11/12 relative overflow-hidden",children:[Object(v.jsxs)("div",{className:"p-2 px-4 h-3/5",children:[Object(v.jsx)(w,{type:"title"}),Object(v.jsx)(w,{type:"text"}),Object(v.jsx)(w,{type:"text"})]}),Object(v.jsx)("div",{className:"h-2/5 p-2 px-4",children:Object(v.jsx)(w,{type:"text"})}),Object(v.jsx)(D,{})]})},C=function(e){for(var t=e.pageAmount,a=e.totalContent,c=e.paginate,n=e.prevPage,s=(e.pgLimit,e.maxPgLimit),r=e.minPgLimit,l=[],i=Math.ceil(a/t),d=1;d<=i;d++)l.push(d);return Object(v.jsx)("div",{children:l.map((function(e){return e>r&&e<=s?Object(v.jsxs)("ul",{className:"w-4/5 mx-auto flex mt-16 font-semibold text-gray-800",children:[Object(v.jsx)("div",{children:Object(v.jsx)("button",{onClick:function(){return n()},className:"font-semibold focus:outline-none",children:" Previous "})}),Object(v.jsxs)("div",{className:"w-2/4 mx-auto flex text-center justify-center",children:[Object(v.jsx)("li",{className:"paginate",children:e})," ",Object(v.jsxs)("span",{className:"my-0 mx-3",children:[" of ",Object(v.jsx)("span",{className:"mx-1",children:i})," "]})]}),Object(v.jsx)("div",{children:Object(v.jsxs)("button",{onClick:function(){return c()},className:"font-semibold focus:outline-none",children:[Object(v.jsx)("span",{className:"py-1",children:" Next"}),Object(v.jsx)("i",{className:"fas fa-chevron-right mx-3"})]})})]},e):null}))})},T=a.p+"static/media/info.529db062.svg";var S=Object(l.b)((function(e){return{data:e.Data,error:e.error,searchvalue:e.searchfield,category:e.categoryfield,ordervalue:e.orderfield,datevalue:e.datefield}}))((function(e){var t,a=e.data,n=e.error,s=e.searchvalue,r=e.category,l=e.ordervalue,i=e.datevalue;console.log(n);var d=a.filter((function(e){return-1!==e.name.search(s)})),o=Object(c.useState)(1),j=Object(N.a)(o,2),u=j[0],m=j[1],b=Object(c.useState)(15),f=Object(N.a)(b,1)[0],h=Object(c.useState)(1),x=Object(N.a)(h,2),O=x[0],p=(x[1],Object(c.useState)(1)),g=Object(N.a)(p,2),y=g[0],w=g[1],D=Object(c.useState)(0),S=Object(N.a)(D,2),_=S[0],L=S[1];r="all"===r?"All":"health"===r?"Health":"education"===r?"Education":"E-commerce",t="Ascending"===l?d.sort((function(e,t){return e.name.localeCompare(t.name)})):"Descending"===l?d.sort((function(e,t){return t.name.localeCompare(e.name)})):d,"Ascending"===i?d.sort((function(e,t){return new Date(e.created)-new Date(t.created)})):"Descending"===i&&d.sort((function(e,t){return new Date(t.created)-new Date(e.created)}));var H=u*f,P=H-f,k=t.slice(P,H);return Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{children:[Object(v.jsxs)("div",{className:"bg-lightorange text-center font-bold flex justify-center items-center text-sm p-3 my-6 mx-4 md:p-3 md:my-12 lg:p-4",children:[Object(v.jsx)("span",{className:"mx-1 md:mx-3",children:Object(v.jsx)("img",{className:"w-16 md:w-8",src:T})}),"Tada! Get started with a free template. Can't find what you are looking for? Search from 1000 available templates"]}),Object(v.jsxs)("div",{className:"text-gray-600 my-5 mx-4 text-base font-medium flow-root",children:[Object(v.jsxs)("div",{className:"float-left",children:[r," templates"]}),Object(v.jsx)("div",{className:"float-right text-xs text-gray-400",children:"2000 templates"})]})]}),Object(v.jsxs)("div",{children:[a.length>0&&Object(v.jsx)("div",{className:"card-container",children:k.map((function(e,t){return Object(v.jsx)(E,{info:e},t)}))}),a<=0&&Object(v.jsx)("div",{className:"card-container",children:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((function(e){return Object(v.jsx)(A,{},e)}))}),a<=0&&""!=n&&Object(v.jsx)("div",{className:"card-container",children:Object(v.jsx)("h1",{className:"text-4xl text-blue-400 font-semibold",children:"Oops! an error occurred"})}),Object(v.jsx)(C,{pageAmount:f,totalContent:a.length,paginate:function(){m(u+1),u+1>y&&(w(y+O),L(_+O))},prevPage:function(){m(u-1),(u-1)%O===0&&(w(y-O),L(_-O))},pgLimit:O,maxPgLimit:y,minPgLimit:_})]})]})}));var _=function(){return Object(v.jsx)("div",{className:"",children:Object(v.jsx)(S,{})})},L=a(7),H=a(20),P=a(2),k={searchfield:"",loading:!1,error:"",categoryfield:"all",orderfield:"default",datefield:"default",Data:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return Object(P.a)(Object(P.a)({},e),{},{searchfield:t.payload});case d:return Object(P.a)(Object(P.a)({},e),{},{Data:t.payload});case o:return Object(P.a)(Object(P.a)({},e),{},{loading:!0});case j:return Object(P.a)(Object(P.a)({},e),{},{loading:!1,Data:t.payload});case u:return Object(P.a)(Object(P.a)({},e),{},{loading:!1,error:t.payload});case m:return Object(P.a)(Object(P.a)({},e),{},{categoryfield:t.payload,orderfield:"default",datefield:"default",searchfield:""});case b:return Object(P.a)(Object(P.a)({},e),{},{orderfield:t.payload});case f:return Object(P.a)(Object(P.a)({},e),{},{datefield:t.payload});default:return e}},F=a(21),M=Object(L.createStore)(R,Object(H.composeWithDevTools)(Object(L.applyMiddleware)(F.a)));var G=function(){return Object(v.jsx)(l.a,{store:M,children:Object(v.jsxs)("div",{className:"App w-11/12 mx-auto py-5 h-10/12",children:[Object(v.jsx)(y,{}),Object(v.jsx)(_,{})]})})};r.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(G,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e59f9619.chunk.js.map