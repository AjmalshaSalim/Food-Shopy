import React from 'react'

const CartProduct = ({id,name,image,category,qty,price,total}) => {
  return (
    <div className='bg-slate-200 p-2 flex'>
      <div className="bg-white p-3 rounded overflow-hidden">
<img src={image} alt="" className="h-28 w-36 object-cover" />
      </div>
      <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <p className="text-slate-500 font-medium ">
            {category}
          </p>
          <p className="font-bold text-base">
            ₹<span>{price}</span>
          </p>
          <div className="flex gap-3">
            <button className="bg-slate-300 hover:bg-slate-400 rounded py-1 mt-2 min-w-[100px] text-xl">
              +
            </button>
            <button className="bg-slate-300 hover:bg-slate-400 rounded py-1 mt-2 min-w-[100px] text-2xl" onClick={""}>
              -
            </button>
          </div>
        </div>
    </div>
  )
}

export default CartProduct