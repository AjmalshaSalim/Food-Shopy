import React from "react";
import Lottie from 'lottie-react';
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
// import { current } from "@reduxjs/toolkit";
import EmptyCart from "../assets/Animation - 1702285510724.json"

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);

  const totalPrice = productCartItem.reduce(
    (acc, current) => acc + parseInt(current.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, current) => acc + parseInt(current.qty),
    0
  );
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>
         {
          productCartItem[0]?
        <div className="my-4 flex gap-3">
          {/* Display Cart Items */}
          <div className="w-full max-w-3xl">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  price={el.price}
                  total={el.total}
                />
              );
            })}
          </div>

          {/* Total Cart Items */}
          <div className="w-full max-w-md ml-auto">
            <h2 className="bg-red-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p className="">Total Qty :</p>
              <p className="ml-auto font-bold">{totalQty}&nbsp;</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p className="">Total Price</p>
              <p className="ml-auto font-bold">
                <span>₹</span> {totalPrice}&nbsp;
              </p>
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-400 w-full rounded-md text-lg font-semibold py-2 text-white">
              Payment
            </button>
          </div>
        </div>
      :<>
      <div className="flex w-full justify-center items-center flex-col">
      <Lottie animationData={EmptyCart} className="w-full max-w-xs bg-white rounded-full"/>
      <p className="text-slate-500 text-3xl font-semibold pt-5">Empty Cart</p>
      </div>
      </>  
      }
      </div>
    </>
  );
};

export default Cart;
