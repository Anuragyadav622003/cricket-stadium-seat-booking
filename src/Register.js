import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Register(){
  var navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    // phone:'',
    address:''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const response =  await fetch('http://localhost:5000/register',{
      method:"POST",
      headers:{
          'Accept':"application/json",
          'Content-Type':"application/json"
         },
         body: JSON.stringify({
          username:userData.username,email:userData.email,password:userData.password
        })
   
 })
 navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-slate-900">
      <div className="bg-white p-8 rounded shadow-md w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              className="w-full border-2 border-slate-400 rounded-md py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full border-2 border-slate-400  rounded-md py-2 px-3 text-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              className="w-full border-2 border-slate-400  rounded-md py-2 px-3 text-gray-700"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-600">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              className="w-full border-2 border-slate-400  rounded-md py-2 px-3 text-gray-700"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label htmlFor="telephone" className="block text-gray-600">Phone no.</label>
            <input
              type='number'
              id="password"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full border-2 border-slate-400  rounded-md py-2 px-3 text-gray-700"
              required
            />
          </div> */}
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Register
          </button>
</form>
</div>
</div>)}