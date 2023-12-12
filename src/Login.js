import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name,setName] = useState("");
var navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
const handleNameChange = (e)=>{
   setName(e.target.value);
};
  const handleSubmit = async(e) => {
    e.preventDefault();
    const response =  await fetch('http://localhost:5000/login',{
      method:"POST",
      headers:{
          'Accept':"application/json",
          'Content-Type':"application/json"
         },
         body: JSON.stringify({
        email:email,password:password
        })
        
    
 })
 const res =await response.json();
 alert(res.status);
 if(res.status === "Loign successfully")
 {
   sessionStorage.setItem("user",name);
   if(sessionStorage.getItem('stadium'))
   {
    navigate('/seat-layout');
   }else
navigate('/')
 }
 else if(res.status === "you are not registered yet, get registered")
{
navigate('/register')
}

window.location.reload();


  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-900">
      <div className="bg-white mb-5 p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 font-bold">name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full border-2 border-slate-600 rounded-md py-2 px-3 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-bold">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border-2 border-slate-600 rounded-md py-2 px-3 text-gray-900"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 font-bold">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full  rounded-md  border-slate-400 py-2 px-3 text-gray-700 border-2"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
