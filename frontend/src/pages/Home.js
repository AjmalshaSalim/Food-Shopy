import React from "react";
import HomeCard from "../components/HomeCard";
import { useSelector } from "react-redux";
import CardFeatures from "../components/CardFeatures";
import loadingSvg from "../assets/Rolling-1s-200px.svg";

function Home() {
  const productData = useSelector((state) => state.product.productList);
  console.log("PRODUCT DATA +++", productData);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegitables = productData.filter(
    (el) => el.category === "vegetables",
    []
  );
  const loadingArray = new Array(4).fill(null);
  console.log("VEGETABLES", homeProductCartListVegitables);
  return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2">
        {/* left */}
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-red-200 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-700">Bike Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              alt="bike"
              className="h-7"
            />
          </div>
          <h2 className="text-4xl md:text-7xl font-bold py-3">
            The Fasted Delivery In{" "}
            <span className="text-red-600">Your Home</span>
          </h2>
          <p className="py-3 text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged
          </p>
          <button className="font-bold bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:scale-110 transition duration-300 ease-in-out ...">
            Order Now
          </button>
        </div>
        {/* right */}
        <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => (
                <HomeCard
                  key={el._id}
                  id={el._id}
                  image={el.image}
                  name={el.name}
                  price={el.price}
                  category={el.category}
                />
              ))
            : loadingArray.map((el, index) => (
                <HomeCard
                  key={index + "loading"}
                  loading={<img src={loadingSvg} alt="Loading" />}
                />
              ))}
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-2xl text-slate-800">Fresh Vegetables</h2>
        <div className="">
          {homeProductCartListVegitables.map((el) => {
            return (
              <CardFeatures
                key={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
