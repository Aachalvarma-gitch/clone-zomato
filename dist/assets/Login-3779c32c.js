import{x as c,z as n,r as m,y as u,j as s}from"./index-5ea37ea9.js";import{u as h,c as x,a as i,h as r}from"./handleClasses-fff7ae3c.js";const f=()=>{const l=c(),[d,{isSuccess:a,isError:p,error:j,isLoading:b}]=n(),e=h({initialValues:{email:"",password:""},validationSchema:x({email:i().required("Enter Email"),password:i().required("Enter Password")}),onSubmit:(o,{resetForm:t})=>{d(o),t()}});return m.useEffect(()=>{a&&(u.success("login success"),l("/resturant"))},[a]),s.jsx("form",{onSubmit:e.handleSubmit,children:s.jsx("div",{className:"container",children:s.jsx("div",{className:"row mt-auto",children:s.jsx("div",{className:"col-sm-6 offset-sm-3 mt-5",children:s.jsxs("div",{className:"card bg-dark text-light",children:[s.jsx("div",{className:"card-header",children:"Login"}),s.jsxs("div",{className:"card-body",children:[s.jsxs("div",{children:[s.jsx("label",{for:"email",className:"form-label",children:"Email"}),s.jsx("input",{className:r(e,"email"),...e.getFieldProps("email"),type:"email",id:"email",placeholder:"Enter Your Email"}),s.jsx("div",{className:"valid-feedback",children:"Looks good!"}),s.jsx("div",{className:"invalid-feedback",children:e.errors.email})]}),s.jsxs("div",{className:"mt-2",children:[s.jsx("label",{for:"password",className:"form-label",children:"Password"}),s.jsx("input",{className:r(e,"password"),...e.getFieldProps("password"),type:"password",id:"password",placeholder:"Enter Your Password"}),s.jsx("div",{className:"valid-feedback",children:"Looks good!"}),s.jsx("div",{className:"invalid-feedback",children:e.errors.email})]}),s.jsx("button",{type:"submit",className:"btn btn-primary w-100 mt-3",children:"Login"}),s.jsx("p",{className:"text-center my-3",children:"OR"}),s.jsx("button",{className:"btn btn-outline-primary w-100",children:"Continue With Google"})]})]})})})})})};export{f as default};
