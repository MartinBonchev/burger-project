(this["webpackJsonpburger-project"]=this["webpackJsonpburger-project"]||[]).push([[3],{100:function(e,t,a){e.exports={ContactData:"Ol2yTM1fo_f5CY0mRdr4s"}},105:function(e,t,a){"use strict";a.r(t);var n=a(6),r=a(7),i=a(9),c=a(8),o=a(1),l=a(5),u=a(16),s=a(55),d=a(43),p=a(99),h=a.n(p),j=a(0),v=function(e){return Object(j.jsxs)("div",{className:h.a.CheckoutSummary,children:[Object(j.jsx)("h1",{children:"We hope it tastes well"}),Object(j.jsx)("div",{style:{width:"100%",margin:"auto"},children:Object(j.jsx)(s.a,{ingredients:e.ingredients})}),Object(j.jsx)(d.a,{btnType:"Danger",clicked:e.checkoutCancelled,children:"CANCEL"}),Object(j.jsx)(d.a,{btnType:"Success",clicked:e.checkoutContinued,children:"CONTINUE"})]})},b=a(23),m=a(100),g=a.n(m),f=a(18),O=a(44),C=a(97),y=a(45),x=a(17),k=a(22),N=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0,isNumeric:!1},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP CODE"},value:"",validation:{required:!0,isNumeric:!0,minLength:4,maxLength:8},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0,isNumeric:!1},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your Email"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},freeDrink:{elementType:"select",elementConfig:{options:[{value:"cocaCola",displayValue:"CoCa-Cola"},{value:"fanta",displayValue:"Fanta"},{value:"sprite",displayValue:"Sprite"},{value:"beer",displayValue:"Beer"}]},valid:!0,value:"CoCa-Cola",validation:{}}},formIsValid:!1},e.orderHandler=function(t){t.preventDefault();var a={};for(var n in e.state.orderForm)a[n]=e.state.orderForm[n].value;var r={ingredients:e.props.ingredients,price:e.props.price,orderData:a,userId:e.props.userId};e.props.onOrderBurger(r,e.props.token)},e}return Object(r.a)(a,[{key:"inputChangedHandler",value:function(e,t){var a=Object(k.b)(this.state.orderForm[t],{value:e.target.value,valid:Object(k.a)(e.target.value,this.state.orderForm[t].validation),touched:!0}),n=Object(k.b)(this.state.orderForm,Object(b.a)({},t,a)),r=!0;for(var i in n)r=n[i].valid&&r;this.setState({orderForm:n,formIsValid:r})}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForm)t.push({id:a,config:this.state.orderForm[a]});var n=null;return n=this.props.loading?Object(j.jsx)(O.a,{}):Object(j.jsxs)("form",{onSubmit:this.orderHandler,children:[t.map((function(t){return Object(j.jsx)(C.a,{elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,change:function(a){return e.inputChangedHandler(a,t.id)}},t.id)})),Object(j.jsx)(d.a,{btnType:"Success",clicked:this.orderHandler,disabled:!this.state.formIsValid,children:"ORDER"})]}),Object(j.jsxs)("div",{className:g.a.ContactData,children:[Object(j.jsx)("h4",{children:"Enter your Contact Data"}),n]})}}]),a}(o.Component),I=Object(u.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,a){return e(x.g(t,a))}}}))(Object(y.a)(N,f.a)),T=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).checkoutCancelledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(a,[{key:"render",value:function(){var e=Object(j.jsx)(l.a,{to:"/"});if(this.props.ingredients){var t=this.props.purchased?Object(j.jsx)(l.a,{to:"/"}):null;e=Object(j.jsxs)("div",{children:[t,Object(j.jsx)(v,{ingredients:this.props.ingredients,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),Object(j.jsx)(l.b,{path:this.props.match.path+"/contact-data",component:I})]})}return e}}]),a}(o.Component);t.default=Object(u.b)((function(e){return{ingredients:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(T)},97:function(e,t,a){"use strict";var n=a(2),r=(a(1),a(98)),i=a.n(r),c=a(0);t.a=function(e){var t=null,a=[i.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&a.push(i.a.Invalid),e.elementType){case"input":t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.change}));break;case"textarea":t=Object(c.jsx)("textarea",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.change}));break;case"select":t=Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Pick a free drink!"}),Object(c.jsx)("select",{className:a.join(" "),value:e.value,onChange:e.change,children:e.elementConfig.options.map((function(t){return Object(c.jsx)("option",{value:t.value,onChange:e.change,children:t.displayValue},t.value)}))})]});break;default:t=Object(c.jsx)("input",Object(n.a)(Object(n.a)({className:a.join(" ")},e.elementConfig),{},{value:e.value,onChange:e.change}))}return Object(c.jsxs)("div",{className:i.a.Input,children:[Object(c.jsx)("label",{className:i.a.Label,children:e.label}),t]})}},98:function(e,t,a){e.exports={Input:"_2JD9xfJ5iopsdJv4stofmd",Label:"_1BS4VDEyRn6gTvXKGhCGtY",InputElement:"_2h6u9szBkMg06ulHHM-dBj",Invalid:"_3PMZLK250RqXAYcKDUm6_p"}},99:function(e,t,a){e.exports={CheckoutSummary:"j_q_G8Gs_-9oNwEM38yRf"}}}]);
//# sourceMappingURL=3.444abdc0.chunk.js.map