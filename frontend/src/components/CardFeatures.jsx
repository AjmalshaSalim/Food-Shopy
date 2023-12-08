import React from "react";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const CardFeatures = ({ image, name, price, category, loading, id }) => {
const dispatch =useDispatch()
  const handleAddCardProduct= (e)=> {
    dispatch(addCartItem({
      _id:id,
      name: name,
      category: category,
      price: price,
      image: image
    }));
  toast("Added To Cart")
  }
  return (
    <div className="w-full min-w-[200px] max-w-[200px] bg-white shadow-lg hover:drop-shadow-2xl py-5 px-4 duration-500 ease-in-out flex flex-col rounded">
      {image ? (
        <>
          <Link
            to={`/menu/${id}`}
            onClick={() => window.scrollTo({ top: "0", behavior: "smooth" })}
          >
            <div className="h-28 flex flex-col justify-center items-center">
              <img
                src={image}
                alt="images"
                className="h-full hover:scale-105 duration-500 ease-in-out"
              />
            </div>
            <h3 className="font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden">
              {name}
            </h3>
            <p className="text-slate-500 font-medium">{category}</p>
            <p className="font-bold">
              ₹<span>{price}</span>
            </p>
            </Link>
            <button className="bg-yellow-500 hover:bg-yellow-400 rounded py-1 mt-2 w-full" onClick={handleAddCardProduct}>
              Add To Cart
            </button>
          
        </>
      ) : (
        <div className="min-w-[200px] flex justify-center items-center">
          <p>{loading}</p>
        </div>
      )}
    </div>
  );
};

export default CardFeatures;
