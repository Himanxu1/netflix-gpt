import React, { useState,useEffect } from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {TbLogout2} from 'react-icons/tb'
import {  signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
  const handlehover= () =>{
    setIsOpen(!isOpen)
  }

  const handleSignout= () =>{
   
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
     console.log(error)
    });
  }
  return (
    <div className="absolute z-40 w-full flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="w-44 p-2 h-28"
      />

{
  user && (
<div>
      <div className="flex items-center mr-4">
        <img
          alt="user-icon"
          src={user?.photoURL}
          className="w-12 h-12 p-1 mr-2"
        />
        <IoMdArrowDropdown  className="text-white inline-flex cursor-pointer text-2xl" onClick={handlehover} />
      </div>
      {
        isOpen && (
          <div className="absolute right-0 z-10 w-28 mt-0 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
          <div className="p-2 ">
            <div className="flex items-center">
            <FaUserAlt />
              <p
                  
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer font-bold"
              >
                 Profile
              </p>

            </div>
            <div className="flex items-center"> 
              <TbLogout2 />
              <p
                  className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700 cursor-pointer font-bold"
                  onClick={handleSignout}
              >
            logout
              </p>
            </div>
            
          </div>
      </div>
        )
      }
      </div>
  )
}
      
     
    </div>
  );
};

export default Header;
