import React, { useRef, useState } from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { checkValidation } from "../utils/validate";
import {  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../utils/firebase";



const Login = () => {
  const [errorMessage,setErrorMessage] = useState("")
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleLogin = () =>{
   const message = checkValidation(email.current.value,password.current.value)
   setErrorMessage(message)

   signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {

    const user = userCredential.user;
    console.log(user)
    navigate('/home')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
   
  }
  return (
    <div>
      <Header />
      <div>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
            alt="backgroud"
            className="w-full "
          />
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="absolute p-12 bg-black mt-52 mx-[500px]  w-3/12 h-[330px] bg-opacity-80">
          <p className="text-white text-3xl font-semibold font-sans mb-2">
            Sign In
          </p>
          <input
             ref={email}
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
          />
          <p className="text-red-500 font-semibold ml-2 text-sm">{errorMessage}</p>
          <button className="bg-red-600 text-white w-[220px] mt-2 py-2 ml-2" onClick={handleLogin}>
            Sign In
          </button>
          <p className="text-white ml-2 mt-2">
            new user ? <Link to="/signup" className="text-red-600 ml-1">Sign Up</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
