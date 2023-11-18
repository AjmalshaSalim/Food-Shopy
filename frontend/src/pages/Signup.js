import React from 'react'
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import loginSignupImage from '../assets/login-animation.gif'
function Signup() {
  return (
    <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col p-4">
{/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
<div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md">
    <img src={loginSignupImage} alt="" className='w-full'/>
</div>
<form action="" className="w-full py-4">
    <label htmlFor="firstName" className="">First Name</label>
    <input type={"text"} id='firstName' name='firstName' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded" />

    <label htmlFor="LastName" className="">Last Name</label>
    <input type={"text"} id='LastName' name='LastName' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded" />

    <label htmlFor="email" className="">Email</label>
    <input type={"email"} id='email' name='email' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded" />

    <label htmlFor="password" className="">Password</label>
    <input type={"password"} id='password' name='password' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded" />
<div className="">
    <label htmlFor="confirmPassword" className="">Confirm Password</label>
    <input type={"confirmPassword"} id='confirmPassword' name='confirmPassword' className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded" />
<span className="">
<BiShow /><BiHide />
</span>
</div>
</form>
        </div>
    </div>
  )
}

export default Signup