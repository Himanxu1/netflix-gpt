import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const SignUp = () => {
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
        <form className="absolute p-12 bg-black mt-52 mx-[500px]  w-3/12 h-[370px] bg-opacity-80">
          <p className="text-white text-3xl font-semibold font-sans mb-2">
            Sign Up
          </p>
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
          />
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 w-[220px] bg-gray-700 rounded"
          />
          <button className="bg-red-600 text-white w-[220px] mt-2 py-2 ml-2">
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
