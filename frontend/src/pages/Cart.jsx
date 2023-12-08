import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);
  return (
    <div className="p-2 md:p-4">
      <h2 className="text-lg md:text-2xl font-bold text-slate-600">
        Your Cart Items
      </h2>

      <div className="">
        {/* Display Cart Items */}
        <div className="">
          {
            productCartItem.map(el=>{
              return(
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
              )
            })
          }
        </div>

        {/* Total Cart Items */}
        <div className=""></div>
      </div>
    </div>
  );
};

export default Cart;
