(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2),a=t.n(o),c=t(15),u=t.n(c),i=t(6),s=t(3),l=t(4),d=t.n(l),b="/api/persons",j=function(){return d.a.get(b).then((function(e){return e.data}))},f=function(e){return d.a.post(b,e).then((function(e){return e.data}))},h=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},m=function(e){return d.a.delete("".concat(b,"/").concat(e))},g=function(e){var n=e.onChange;return Object(r.jsxs)("div",{children:["filter shown with ",Object(r.jsx)("input",{onChange:n})]})},O=function(e){var n=e.onSubmit,t=e.handleNameChange,o=e.handleNumberChange,a=e.nameValue,c=e.numberValue;return Object(r.jsxs)("form",{onSubmit:n,children:[Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{onChange:t,value:a})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{onChange:o,value:c})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.namesToShow,t=e.deletePerson;return Object(r.jsx)("ul",{children:n.map((function(e){return Object(r.jsxs)("li",{children:[e.name," ",e.number," ",Object(r.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},p=function(e){var n=e.message,t=e.errorStatus;if(null===n)return null;var o={color:t?"red":"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return Object(r.jsx)("div",{style:o,children:n})},x=function(){var e=Object(o.useState)([]),n=Object(s.a)(e,2),t=n[0],a=n[1],c=Object(o.useState)(""),u=Object(s.a)(c,2),l=u[0],d=u[1],b=Object(o.useState)(""),x=Object(s.a)(b,2),w=x[0],S=x[1],C=Object(o.useState)(""),y=Object(s.a)(C,2),k=y[0],N=y[1],V=Object(o.useState)({message:null,error:null}),D=Object(s.a)(V,2),P=D[0],T=D[1];Object(o.useEffect)((function(){console.log("effect"),j().then((function(e){console.log("promise fulfilled"),a(e)}))}),[]);var B=function(){setTimeout((function(){T({message:null,error:!1})}),5e3)},E=0===k.length?t:t.filter((function(e){return e.name.toLowerCase().includes(k.toLowerCase())}));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(p,{message:P.message,errorStatus:P.error}),Object(r.jsx)(g,{onChange:function(e){console.log(e.target.value),N(e.target.value)}}),Object(r.jsx)("h2",{children:"add a new"}),Object(r.jsx)(O,{onSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===l}));if(n){if(window.confirm("".concat(l," is already added to phonebook, replace the old number with a new one?"))){var r=Object(i.a)(Object(i.a)({},n),{},{number:w});h(r.id,r).then((function(e){console.log(e),a(t.map((function(n){return n.id!==r.id?n:e}))),T({message:"Updated ".concat(r.name,"'s phone number"),error:!1}),B()})).catch((function(e){console.log(e),a(t.filter((function(e){return e.id!==r.id}))),T({message:"Information of ".concat(r.name," has already been removed from server"),error:!0}),B()}))}}else{var o={name:l,number:w};f(o).then((function(e){a(t.concat(e)),console.log(e),T({message:"Added ".concat(o.name),error:!1}),B()})).catch((function(e){console.log(e.response.data);var n=e.response.data.error;T({message:n,error:!0}),B()}))}d(""),S("")},handleNameChange:function(e){console.log(e.target.value),d(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),S(e.target.value)},nameValue:l,numberValue:w}),Object(r.jsx)("h2",{children:"Numbers"}),Object(r.jsx)(v,{namesToShow:E,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name," ?"))&&m(n.id).then((function(){a(t.filter((function(e){return e.id!==n.id}))),T({message:"Deleted ".concat(n.name),error:!1}),B()}))}})]})};u.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(x,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.6794b37f.chunk.js.map