import React, { useState } from 'react';
import './login.css'
const Login = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''
  })
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)
    setFormData({
    email:"",
    password:""
  })
  }
  const handleChange=(e)=>{
    setFormData((prev)=>({...prev,[e.target.name]:e.target.value}))
  }
  return (
    <div className='container'>
      <form className='form' action="" onSubmit={handleSubmit}>
      <h1>LOGIN</h1>
      <label>Email:</label><br/>
      <input type="email" name="email" placeholder="Enter Email id" value={formData.email} onChange={handleChange}/><br/>
      <label>Password:</label><br />
      <input type="password" name="password" placeholder="Enter password" value={formData.password} onChange={handleChange}/><br/>
      <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
