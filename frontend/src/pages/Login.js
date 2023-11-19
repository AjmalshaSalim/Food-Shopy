import React from 'react'
import { useState} from "react";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { Link} from 'react-router-dom';
import loginSignupImage from "../assets/login-animation.gif";

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
      firstName: "",
      LastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  console.log(data);
    const handleShowPassword = () => {
      setShowPassword((prev) => !prev);
    };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    };
  
    const handleSubmit=(e)=>{
  e.preventDefault()
  const {email,password}=data
  if(email&&password){
  alert("Registed Successfully")
  }else{
    alert("Please enter required fields")
  }
    }
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={loginSignupImage} alt="" className="w-full" />
        </div>
        <form action="" className="w-full py-4 flex flex-col" onSubmit={handleSubmit}>
         
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleChange}
          />

          <label htmlFor="password" className="">
            Password
          </label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleChange}
            />

            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center pb-1 py-1 rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have an account ?{" "}
          <Link to={"/signup"} className="text-blue-400">
             Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login