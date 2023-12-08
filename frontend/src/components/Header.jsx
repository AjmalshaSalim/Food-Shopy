import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import toast from "react-hot-toast";
function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout Successfully");
  };
  const CartItemNumber=useSelector((state)=>state.product.cartItem)
  // console.log("Header Admin Email ->",process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </Link>
        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link className="hover:text-red-500" to={""}>
              Home
            </Link>
            <Link
              className="hover:text-red-500"
              to={"menu/656ac023a1f616e5ceaab053"}
            >
              Menu
            </Link>
            <Link className="hover:text-red-500" to={"about"}>
              About
            </Link>
            <Link className="hover:text-red-500" to={"contact"}>
              Contact
            </Link>
          </nav>
          <div className="text-2xl text-slate-600 relative cursor-pointer">
            <Link to={"cart"}><FaCartShopping />
            <div className="absolute -top-2 -right-2 p-0 m-0 text-white bg-red-500 h-4 w-4 rounded-full text-xs text-center">
              {CartItemNumber.length}
            </div>
            </Link>
          </div>
          <div className="text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-sm">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="profile"
                  className="h-full w-full"
                />
              ) : (
                <BiSolidUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newProduct"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New Product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="cursor-pointer text-white bg-red-500 px-2"
                    onClick={handleLogout}
                  >
                    Logout
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="hover:text-red-500 whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link className="hover:text-red-500 px-2 py-1" to={""}>
                    Home
                  </Link>
                  <Link
                    className="hover:text-red-500 px-2 py-1"
                    to={"menu/656ac023a1f616e5ceaab053"}
                  >
                    Menu
                  </Link>
                  <Link className="hover:text-red-500 px-2 py-1" to={"About"}>
                    About
                  </Link>
                  <Link className="hover:text-red-500 px-2 py-1" to={"Contact"}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
}

export default Header;
