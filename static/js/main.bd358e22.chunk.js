(this.webpackJsonpbank=this.webpackJsonpbank||[]).push([[0],{34:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t.n(n),s=t(19),r=t.n(s),l=(t(27),t(22)),i=t(3),o=t(9),d=t(10),b=t(12),j=t(11),h=t(37),m=t(0),u=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){return Object(m.jsx)(c.a.Fragment,{children:Object(m.jsx)(h.a,{children:Object(m.jsxs)("div",{className:"text-center  navbar  ",children:[Object(m.jsx)("h2",{children:"Bank-Money Transaction Application"}),Object(m.jsx)("h7",{className:"text-light",children:"   -Krishna Vamshi Kammari"})]})})})}}]),t}(n.Component),p=[{id:0,name:"Krishna ",currentbalance:20500,Accno:"123123123",place:"bibipet,kamareddy,telangana",bankname:"YES Bank"},{id:1,name:"Vamshi",currentbalance:1400,Accno:"123123124",place:"kamareddy,hyderabad",bankname:"SBH Bank"},{id:2,name:"Deepak",currentbalance:1e4,Accno:"123123125",place:"kammam,telangana",bankname:"PUNJAB Bank"},{id:3,name:"Rahul",currentbalance:21e3,Accno:"123123126",place:"nizamabad,hyderabad",bankname:"UNION Bank"},{id:4,name:"Sumanth",currentbalance:3800,Accno:"123123127",place:"mumbai,maharastra",bankname:"KANARA Bank"},{id:5,name:"Nikhil",currentbalance:46e3,Accno:"123123128",place:"kamareddy,hyderabad",bankname:"AXIS Bank"},{id:6,name:"Pavan",currentbalance:1e4,Accno:"123123129",place:"warangal,telangana",bankname:"GRAMEENA Bank"},{id:7,name:"sai charan",currentbalance:5200,Accno:"123123120",place:"kompally,hyderabad",bankname:"KOTAK Bank"},{id:8,name:"Mukesh",currentbalance:1e4,Accno:"123123121",place:"bachupally,hyderabad",bankname:"YES Bank"},{id:9,name:"Dhioni",currentbalance:5e3,Accno:"123123122",place:"kukatpally,hyderabad",bankname:"SBH Bank"}],x=t(14),O=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).state={after:0,accno:0},e}return Object(d.a)(t,[{key:"render",value:function(e){var a,t=this;return Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:" row single mt-5 ",children:[console.log(p[this.props.location.states.data.id]),Object(m.jsx)("div",{className:"col-8 col-md-6 mt-3",children:Object(m.jsxs)("div",{className:"card shadow-lg rounded",children:[Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title",children:["Account Holder Name: ",Object(m.jsx)("span",{className:"text-primary",children:this.props.location.states.data.name})]}),Object(m.jsxs)("h6",{children:["Account Number: ",Object(m.jsx)("span",{className:"text-info",children:this.props.location.states.data.Accno})]}),Object(m.jsxs)("h6",{children:["Place/Location: ",Object(m.jsx)("span",{className:"text-info",children:this.props.location.states.data.place})]}),Object(m.jsxs)("h6",{children:["Bank: ",Object(m.jsx)("span",{className:"text-info",children:this.props.location.states.data.bankname})]}),Object(m.jsxs)("h6",{children:["Available Balance: ",Object(m.jsx)("span",{className:"text-info",children:this.props.location.states.data.currentbalance})]}),Object(m.jsxs)("h6",{children:["After Transfer: ",Object(m.jsx)("span",{className:"text-danger",children:parseInt(p[this.props.location.states.data.id].currentbalance)-parseInt(this.state.after)})]}),(a=parseInt(p[this.props.location.states.data.id].currentbalance)-parseInt(this.state.after),void(a<0&&alert("Insufficient Amount"))),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"example-number-input",class:"col-md-4 col-form-label",children:Object(m.jsx)("h6",{className:"text-secondary",children:"Amount to transfer:"})}),Object(m.jsx)("div",{class:"col-md-4",children:Object(m.jsx)("input",{class:"form-control",type:"number",placeholder:"Amount",id:"example-number-input",onChange:function(e){return t.setState({after:e.target.value})}})})]}),Object(m.jsxs)("div",{class:"form-group row",children:[Object(m.jsx)("label",{for:"example-number-input",class:"col-md-4 col-form-label",children:Object(m.jsx)("h6",{className:"text-secondary",children:"To :"})}),Object(m.jsx)("div",{class:"col-md-4",children:Object(m.jsx)("input",{class:"form-control",type:"number",placeholder:"Account Number",id:"example-number-input",onChange:function(e){return t.setState({accno:e.target.value})}})})]}),Object(m.jsxs)("div",{className:"text-center ",children:[Object(m.jsx)("div",{children:Object(m.jsx)(x.Link,{to:{pathname:"/home}"},children:Object(m.jsx)("button",{class:"btn btn-primary btnn",onClick:function(){return function(e,a){try{var n,c=parseInt(p[t.props.location.states.data.id].currentbalance),s=parseInt(e);for(n=0;n<=9&&p[n].Accno!==a;n++);var r=parseInt(p[n].currentbalance);p[t.props.location.states.data.id].currentbalance=c-s,p[n].currentbalance=r+s,console.log(p[n])}catch(l){console.log(l)}}(t.state.after,t.state.accno)},"data-toggle":"modal","data-target":"#myModal",children:"Transfer"})})}),Object(m.jsx)("div",{children:Object(m.jsx)(x.Link,{to:{pathname:"/home}"},children:Object(m.jsx)("button",{class:"btn btn-success btnn shadow-sm",children:"Home"})})})]})]}),Object(m.jsx)("div",{})]})})]})})}}]),t}(n.Component),f=function(e){Object(b.a)(t,e);var a=Object(j.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={},n}return Object(d.a)(t,[{key:"render",value:function(){var e=p.map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.id}),Object(m.jsx)("td",{children:e.name}),Object(m.jsx)("td",{children:e.Accno}),Object(m.jsx)("td",{children:e.currentbalance}),Object(m.jsx)("td",{children:Object(m.jsx)(x.Link,{to:{pathname:"/details/".concat(e.id),states:{data:e}},children:Object(m.jsx)("button",{class:"btn btn-info",children:"Transfer"})})})]},e.id)}));return Object(m.jsx)("div",{className:"main center container mt-5  ",children:Object(m.jsx)("div",{className:" form container  ml-2 ",children:Object(m.jsxs)("table",{class:"table",children:[Object(m.jsx)("thead",{class:"thead-light",children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"S.NO"}),Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Acc No"}),Object(m.jsx)("th",{children:"Balance"}),Object(m.jsx)("th",{children:" "})]})}),Object(m.jsx)("tbody",{children:e})]})})})}}]),t}(n.Component);t(34);var k=function(){return Object(m.jsx)("div",{children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(u,{}),Object(m.jsxs)(i.Switch,{children:[Object(m.jsx)(i.Route,{path:"/home",component:f}),Object(m.jsx)(i.Route,{path:"/details/:id",component:O}),Object(m.jsx)(i.Redirect,{to:"/home"})]})]})})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,38)).then((function(a){var t=a.getCLS,n=a.getFID,c=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),v()}},[[35,1,2]]]);
//# sourceMappingURL=main.bd358e22.chunk.js.map