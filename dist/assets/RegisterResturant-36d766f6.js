import{x as n,C as t,r as m,y as p,j as s}from"./index-5ea37ea9.js";import{u,c as x,a,d as h,h as r}from"./handleClasses-fff7ae3c.js";const g=()=>{const d=n(),[l,{isError:j,isLoading:f,isSuccess:i,error:v}]=t(),e=u({initialValues:{name:"",email:"",password:"",cpassword:""},validationSchema:x({name:a().required("Enter name"),email:a().required("Enter email").email(),password:a().required("Enter password"),cpassword:a().required("Enter cpassword").oneOf([h("password")])}),onSubmit:(o,{resetForm:c})=>{l(o),c()}});return m.useEffect(()=>{i&&(p.success("register success"),d("/login-resturant"))},[i]),s.jsx("form",{onSubmit:e.handleSubmit,children:s.jsx("div",{class:"container",children:s.jsx("div",{class:"row",children:s.jsx("div",{class:"col-sm-6 offset-sm-3",children:s.jsxs("div",{class:"card",children:[s.jsx("div",{class:"card-header",children:"Register"}),s.jsxs("div",{class:"card-body",children:[s.jsxs("div",{children:[s.jsx("label",{for:"name",class:"form-label",children:"name"}),s.jsx("input",{className:r(e,"name"),...e.getFieldProps("name"),type:"text",id:"name",placeholder:"Enter your name"}),s.jsx("div",{class:"valid-feedback",children:"Looks good!"}),s.jsx("div",{class:"invalid-feedback",children:e.errors.name})]}),s.jsxs("div",{class:"mt-2",children:[s.jsx("label",{for:"email",class:"form-label",children:"email"}),s.jsx("input",{className:r(e,"email"),...e.getFieldProps("email"),type:"email",id:"email",placeholder:"Enter Your Email"}),s.jsx("div",{class:"valid-feedback",children:"Looks good!"}),s.jsx("div",{class:"invalid-feedback",children:e.errors.email})]}),s.jsxs("div",{class:"mt-2",children:[s.jsx("label",{for:"password",class:"form-label",children:"password"}),s.jsx("input",{className:r(e,"password"),...e.getFieldProps("password"),type:"password",id:"password",placeholder:"Enter Your Password"}),s.jsx("div",{class:"valid-feedback",children:"Looks good!"}),s.jsx("div",{class:"invalid-feedback",children:e.errors.password})]}),s.jsxs("div",{class:"mt-2",children:[s.jsx("label",{for:"cpassword",class:"form-label",children:"confirm password"}),s.jsx("input",{className:r(e,"cpassword"),...e.getFieldProps("cpassword"),type:"password",id:"cpassword",placeholder:"Confirm Your Password"}),s.jsx("div",{class:"valid-feedback",children:"Looks good!"}),s.jsx("div",{class:"invalid-feedback",children:e.errors.cpassword})]}),s.jsx("button",{type:"submit",class:"btn btn-primary w-100 mt-3",children:"Register"}),s.jsx("p",{className:"text-center mt-3",children:"OR"}),s.jsx("button",{type:"button",className:"btn btn-outline-primary w-100",children:"Continue With Google"})]})]})})})})})};export{g as default};
