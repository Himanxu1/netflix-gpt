import React,{useState,useRef} from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { checkValidation } from "../utils/validate";
import {  createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BACKGROUND } from "../utils/constants";
import { USER_AVATAR } from "../utils/constants";


const SignUp = () => {
  const [errorMessage,setErrorMessage] = useState("")
  const dispatch = useDispatch()

  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null)

  const handleSignup = () =>{
   const message = checkValidation(email.current.value,password.current.value)
   setErrorMessage(message)
   if(message) return;

   createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    updateProfile(user,
       {
      displayName: fullname.current.value, 
      photoURL:USER_AVATAR,
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
    }).catch((error) => {
      setErrorMessage(error)
    });

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
            src={BACKGROUND}
            alt="backgroud"
            className="w-full "
          />
        </div>
        <form className="absolute p-12 bg-black mt-52 mx-[500px]  w-3/12 h-[370px] bg-opacity-80" onSubmit={(e)=>e.preventDefault()}>
          <p className="text-white text-3xl font-semibold font-sans mb-2">
            Sign Up
          </p>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
            ref={fullname}
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
            ref={password}
          />
          <p className="text-red-500 font-semibold ml-2 text-sm">{errorMessage}</p>
          <button className="bg-red-600 text-white w-[220px] mt-2 py-2 ml-2" onClick={handleSignup}>
            Sign Up
          </button>
          <p className="text-white ml-2 mt-2">
         Already a member ? <Link to="/" className="text-red-600 ml-1">Sign In</Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
