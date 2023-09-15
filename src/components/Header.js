import React, { useState,useEffect } from "react";
import {IoMdArrowDropdown} from 'react-icons/io'
import {FaUserAlt} from 'react-icons/fa'
import {TbLogout2} from 'react-icons/tb'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import GptSearch from "./GptSearch";
import { changeLanguage } from "../utils/ConfigSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";


const Header = () => {
  const [isOpen,setIsOpen] = useState(false);
  const dispatch = useDispatch()
  const user = useSelector((store)=>store.user)
  const navigate = useNavigate()
 const showgtsearch = useSelector(store=>store?.gpt.showGptSearch)

  const handlehover= () =>{
    setIsOpen(!isOpen)
  }

  const handleSignout= () =>{
    signOut(auth).then(() => {}).catch((error) => {
     console.log(error)
    });
  }
   
  useEffect(()=>{
   const subscribe=  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
       navigate("/home")
      } else {
        dispatch(removeUser()) 
        navigate("/")
      }
    });
    return () => subscribe()
  },[])
  const handleLanguageSelect = (e) =>{
     dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute z-40 w-full flex justify-between items-center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className=" w-28 xl:w-44 p-2 h-20 xl:h-28 "
      />
    
      <div className="xl:ml-[880px] sm:ml-0 flex items-center md:ml-[400px]">
        {
          showgtsearch &&  (
            <select className="h-8 mr-2 rounded " onChange={handleLanguageSelect}>
            {SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
             </select>
          )
        }
      
      <GptSearch />
      </div>

{
  user && (
<div >

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
