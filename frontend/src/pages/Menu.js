import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Menu() {
  const {filterby} = useParams()
  const productData = useSelector(state=>state.product.productList)
  const productDisplay= productData.filter(el=>el._id === filterby)[0]
  console.log("PRODUCTDATA__",productData);
  
  return(
    <div className=" p-2 md:p-4">
    <div className="w-full max-w-4xl m-auto md:flex bg-white">
      <div className="max-w-sm overflow-hidden w-full p-5">
        <img src={productDisplay.image} alt="" className=" hover:scale-105 transition-all h-full" />
      </div>
      <div className="flex flex-col gap-1">
      <h3 className="font-semibold text-slate-600 capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className="text-slate-500 font-medium text-2xl">{productDisplay.category}</p>
          <p className="font-bold md:text-2xl">
            ₹<span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
          <button className="bg-yellow-500 hover:bg-yellow-400 rounded py-1 mt-2 min-w-[100px]">
            Buy
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-400 rounded py-1 mt-2 min-w-[100px]">
            Add To Cart
          </button>
          </div>
          <div className="">
            <p className=" text-slate-600 font-medium">Description :</p>
            <p>{productDisplay.description}</p>
          </div>
      </div>
      </div>  
    </div>
  )
}

export default Menu;
