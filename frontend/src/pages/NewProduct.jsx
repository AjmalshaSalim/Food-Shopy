import React, { useState } from "react";
import { BsCloudUpload } from "react-icons/bs";
import { imageToBase64 } from "../utility/imageToBase64";
import { toast } from "react-hot-toast";

function NewProduct() {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await imageToBase64(e.target.files[0]);
    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("New Product Data",data);

    const { name, image, category, price } = data;

    if (name && image && category && price) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/uploadProducts`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const fetchRes = await fetchData.json();
      toast(fetchRes.message);
      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("enter required field");
    }
  };

  return (
    <div className="p-6">
      <form
        action=""
        className="m-auto w-full max-w-md drop-shadow-xl flex flex-col p-3 bg-white rounded-md"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="">
          Name
        </label>
        <input
          type="text"
          className="bg-slate-200 p-1 my-1"
          name="name"
          value={data.name}
          onChange={handleOnChange}
        />

        <label htmlFor="category" className="">
          Category
        </label>
        <select
          name="category"
          id="category"
          className="bg-slate-200 p-1 my-1"
          value={data.category}
          onChange={handleOnChange}
        >
          <option value={"other"}>-- Select</option>
          <option value={"fruits"}>fruits</option>
          <option value={"vegetables"}>vegitables</option>
          <option value={"frozen"}>Frozen</option>
          <option value={"canned"}>Canned</option>
          <option value={"spices"}>Spices</option>
          <option value={"dairy"}>Dairy</option>
          <option value={"meat"}>Meat</option>
          <option value={"seafood"}>Seafood</option>
          <option value={"cakes"}>Cakes</option>
          <option value={"baking"}>Baking</option>
          <option value={"snacks"}>Snacks</option>
          <option value={"fast"}>Fast Food</option>
        </select>

        <label htmlFor="image" className="">
          Image
          <div className="h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} alt="" className="h-full" />
            ) : (
              <span className="text-5xl">
                <BsCloudUpload />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type="text"
          name="price"
          className="bg-slate-200 p-1 my-1"
          value={data.price}
          onChange={handleOnChange}
        />

        <label htmlFor="" className="description">
          Description
        </label>
        <textarea
          name="description"
          id=""
          cols=""
          rows="2"
          className="bg-slate-200 p-1 my-1 resize-none"
          value={data.description}
          onChange={handleOnChange}
        ></textarea>
        <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-medium pt-1 pb-1 my-2 drop-shadow-sm rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
