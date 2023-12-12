// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
const [dropDown,setDropDown] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const toggledropdown = ()=>{
  setDropDown(!dropDown)
}
  const handleLogout = () => {
    // Implement your logout logic here
    sessionStorage.removeItem('user');
 window.location.reload()
  };

  return (
    <nav className=" p-1 top-0 sticky">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        
          <div className="text-white font-bold text-xl flex cursor-pointer"> <img
                    className=" w-10 h-10 rounded-full"
                    src="OIP.jpeg"
                    alt="Rounded avatar"
                  /><span className='p-2 text-orange-700'>Book Now...</span></div>
          <div className="hidden md:flex flex-wrap space-x-5 text-lg text-white font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/event">Event</NavLink>
            {!sessionStorage.getItem('user') ? (
              <NavLink to="/login">Login</NavLink>
            ) : null}
            <NavLink to="/register">Register</NavLink>
            {sessionStorage.getItem('user') ? (
              <div className="relative">
                <button
                  className="flex items-center focus:outline-none"
                  onClick={toggledropdown}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="logo.png"
                    alt="Rounded avatar"
                  />
                </button>
                {dropDown && (
                  <div className="absolute right-0 mt-2 bg-orange-700 rounded shadow-md">
                    <ul className="list-none p-2">
                      <li>
                        <button
                          className="w-full text-left"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                      {/* Add other profile options as needed */}
                    </ul>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <div className="md:hidden">
            <button className="text-white text-xl" onClick={toggleMenu}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <div
          className={`md:hidden  mt-2  ${menuOpen ? 'block' : 'hidden'}`}
        >
          <div className="flex  space-x-5 flex-wrap text-md font-semibold text-white">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/event">Event</NavLink>
            {!sessionStorage.getItem('user') ? (
              <NavLink to="/login">Login</NavLink>
            ) : null}
            <NavLink to="/register">Register</NavLink>
            {sessionStorage.getItem('user') ? (
              <div className="relative">
                <button
                  className="flex items-center focus:outline-none cursor-pointer "
                  onClick={toggledropdown}
                >
                  <img
                    className="w-8 h-8 rounded-full"
                    src="logo.png"
                    alt="Rounded avatar"
                  />
                </button>
                {dropDown && (
                  <div className="right-0 mt-2 bg-orange-700 rounded shadow-md">
                    <ul className="list-none p-2">
                      <li>
                        <button
                          className="w-full text-left"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                      {/* Add other profile options as needed */}
                    </ul>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
