import React from "react";
import logo from "./assets/logo.jpg";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Header = () => {
  const [{ cartItems, cartShow }, dispatch] = useStateValue();

  const navigate = useNavigate()
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };
  return (
    <nav className="w-full flex fixed z-10 bg-white justify-between items-center px-40 h-16 shadow-lg">
{/*       <img src={logo} alt="logo" className="flex w-20" />
 */}      <p className="font-bold text-[1.5rem] cursor-pointer" onClick={() => navigate('/')}>PIKE STORE</p>
      <div className="flex items-center mr-20">
        <input className="w-[300px] p-2 bg-gray-200 rounded-l-md" type="text" placeholder="Ingrese el producto deseado" />
        <AiOutlineSearch className="bg-pike text-[2.5rem] p-1 text-white rounded-r-md cursor-pointer" />
      </div>
      <div className="flex gap-2 items-center relative">
        <p className="absolute left-5 bottom-6 bg-red-500 w-4 h-4 text-[12px] items-center flex justify-center text-white rounded-full ">
        {cartItems.length}
        </p>
      <AiOutlineShoppingCart onClick={() => showCart()} className="flex z-100 cursor-pointer text-[1.8rem] text-gray-500" />
      </div>
    </nav>
  );
};

export default Header;
