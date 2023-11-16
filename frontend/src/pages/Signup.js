import React from 'react'
import loginSignupImage from '../assets/login-animation.gif'
function Signup() {
  return (
    <div className="p-3 md:p-4">
        <div className="w-full max-w-sm bg-white m-auto flex items-center flex-col">
{/* <h1 className='text-center text-2xl font-bold'>Signup</h1> */}
<div className="w-20">
    <img src={loginSignupImage} alt="" className='w-full'/>
</div>
        </div>
    </div>
  )
}

export default Signup