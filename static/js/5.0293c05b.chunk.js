(this["webpackJsonpway-of-samurai"]=this["webpackJsonpway-of-samurai"]||[]).push([[5],{254:function(e,t,a){e.exports={errors:"Login_errors__3wFhf",emailField:"Login_emailField__qaoLF",passwordField:"Login_passwordField__2hBxQ",checkboxField:"Login_checkboxField__2Jjct",remember:"Login_remember__1NDpf",button:"Login_button__1YO0h",formik:"Login_formik__3eZ8Y"}},260:function(e,t,a){"use strict";a.r(t);var s=a(2),c=a(3),i=a(4),r=a(9),n=a(10),l=a(0),o=a.n(l),b=a(24),j=a(38),d=a(47),h=a(74),m=a(254),u=a.n(m),x=a(8),p=a(1),O=function(e){return Object(p.jsx)("div",{className:u.a.formik,children:Object(p.jsx)(d.d,{initialValues:{email:"",password:"",checkbox:!1,captcha:""},validationSchema:h.a({password:h.b().required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"),email:h.b().email("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435")}),onSubmit:function(t,a){var s=a.setSubmitting,c=a.setFieldError,i=a.setStatus;e.loginThunk(t.email,t.password,t.checkbox,s,c,i,t.captcha)},children:function(e){return Object(p.jsxs)(d.c,{onSubmit:e.handleSubmit,children:[Object(p.jsx)(d.b,{className:u.a.emailField,name:"email",type:"email",placeholder:"email"}),Object(p.jsx)("div",{className:u.a.errors,children:Object(p.jsx)(d.a,{name:"email"})}),Object(p.jsx)(d.b,{className:u.a.passwordField,name:"password",type:"password",placeholder:"password"}),Object(p.jsx)("div",{className:u.a.errors,children:Object(p.jsx)(d.a,{name:"password"})}),Object(p.jsx)("div",{className:u.a.errors,children:e.status}),e.status?"Incorrect anti-bot symbols"===e.status[0]&&Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)("img",{src:e.isSubmitting.toString(),alt:""})}),Object(p.jsx)("div",{children:Object(p.jsx)(d.b,{name:"captcha",type:"text",placeholder:"captcha"})}),Object(p.jsx)("div",{className:u.a.errors,children:Object(p.jsx)(d.a,{name:"captcha"})})]}):null,Object(p.jsxs)("label",{children:[Object(p.jsx)(d.b,{className:u.a.checkboxField,name:"checkbox",type:"checkbox"}),Object(p.jsx)("span",{className:u.a.remember,children:"\u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})]}),Object(p.jsx)("div",{className:u.a.button,children:Object(p.jsx)("button",{type:"submit",children:"\u0412\u0445\u043e\u0434"})})]})}})})},_=function(e){return e.isAuth?Object(p.jsx)(x.a,{to:"/profile"}):Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"LOGIN"}),Object(p.jsx)("div",{children:Object(p.jsx)(O,{loginThunk:e.loginThunk})})]})},f=function(e){Object(r.a)(a,e);var t=Object(n.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(_,Object(s.a)({},this.props))}}]),a}(o.a.Component);t.default=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginThunk:j.c})(f)}}]);
//# sourceMappingURL=5.0293c05b.chunk.js.map