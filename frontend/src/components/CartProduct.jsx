import React from "react";
import { IoAdd } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice";

const CartProduct = ({ id, name, image, category, qty, price, total }) => {
  const dispatch = useDispatch();
  return (
    <div className="bg-white p-2 flex gap-4 rounded border-b-4 border-slate-100">
      <div className="bg-white p-3 rounded overflow-hidden">
        <img src={image} alt="" className="h-28 w-40 object-cover" />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex justify-between">
          <h3 className="font-semibold text-slate-600 capitalize text-lg md:text-xl">
            {name}
          </h3>
          <div
            className=" cursor-pointer text-slate-700 hover:text-red-500"
            onClick={() => dispatch(deleteCartItem(id))}
          >
            <MdDelete />
          </div>
        </div>
        <p className="text-slate-500 font-medium ">{category}</p>
        <p className="font-bold text-base">
          ₹<span>{price}</span>
        </p>
        <div className="flex justify-between ">
          <div className="flex gap-3 items-center">
            <button
              className="bg-slate-300 hover:bg-slate-400 rounded py-1 mt-2 p-1  "
              onClick={() => dispatch(increaseQty(id))}
            >
              <IoAdd />
            </button>
            <p className="font-semibold p-1">{qty}</p>
            <button
              className="bg-slate-300 hover:bg-slate-400 rounded py-1 mt-2 p-1"
              onClick={() => dispatch(decreaseQty(id))}
            >
              <FiMinus />
            </button>
          </div>
          <div className=" flex items-center gap-2 font-bold text-slate-700 pr-2">
            <p>Total : </p>
            <p><span>₹</span>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
