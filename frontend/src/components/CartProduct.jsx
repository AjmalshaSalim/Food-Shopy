import React from 'react'

const CartProduct = ({id,name,image,category,qty,price,total}) => {
  return (
    <div className='bg-slate-200 p-2'>
      <div className="bg-white">
<img src={image} alt="" className="h-28 w-36 object-cover p-3" />
      </div>
    </div>
  )
}

export default CartProduct