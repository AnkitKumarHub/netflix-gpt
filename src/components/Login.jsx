import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <Header />
      <div className="absolute inset-0 ">
        <img className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-50 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-4xl py-6">{isSignInForm ? " Sign In" : "Sign Up"}</h1>
        
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="my-4 p-4  w-full bg-gray-800"
        />}
        <input
          type="email"
          placeholder="Email Address"
          className="my-4 p-4  w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-800"
        />
        <button className="p-4 my-6 bg-red-600 w-full rounded-lg cursor-pointer ">{isSignInForm ? " Sign In" : "Sign Up"} </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}> {isSignInForm ? "New to Netflix? Sign up now." : "Already registered? Sign In Now."}</p>
      </form>
    </div>
  );
};

export default Login;
