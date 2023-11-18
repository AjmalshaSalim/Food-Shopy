import React from 'react'
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
    <input type={"text"} id='firstName' className="mt-1 w-full bg-slate-200 px-2 py-1 rounded" />
    <label htmlFor="lastName" className="">Last Name</label>
    <label htmlFor="" className="">First Name</label>
    <label htmlFor="" className="">First Name</label>
</form>
        </div>
    </div>
  )
}

export default Signup