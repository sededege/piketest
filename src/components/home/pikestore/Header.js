import React from "react";
import logo from "./assets/logo.jpg";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Header = () => {
  const [{ cartItems, cartShow }, dispatch] = useStateValue();

  const navigate = useNavigate();
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  };

  const [scroll, setY] = React.useState(window.scrollY);

  const handleNavigation = React.useCallback(
    (e) => {
      const window = e.currentTarget;
      setY(window.scrollY);
    },
    [scroll]
  );

  React.useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <nav
      className={`${
        scroll > 10
          ? "top-0  border-b-4 border-pike fixed "
          : "top-10 absolute "
      } : w-full flex z-[100] bg-white justify-between items-center px-20 h-16 transition-all ease-in 2s`}
    >
      {/*       <img src={logo} alt="logo" className="flex w-20" />
       */}{" "}
      <p
        className="font-bold text-[1.5rem] cursor-pointer"
        onClick={() => navigate("/")}
      >
        PIKE STORE
      </p>
      <div className="flex gap-4 mr-6">
        <ul className="flex gap-4 text-right text-pike2 cursor-pointer">
          <li className="text-pike">Inicio</li>
          <li>Catalogo</li>
          <li>Sobre nosotros</li>
          <li>Contacto</li>
        </ul>
        <div
          onClick={() => showCart()}
          className="flex gap-2 items-center relative "
        >
          <p className="absolute left-8 bottom-1 bg-red-500 w-5 h-5 text-[12px] items-center flex justify-center text-white rounded-full ">
            {cartItems.length}
          </p>
          <AiOutlineShoppingCart className="flex z-100 cursor-pointer text-[1.8rem] text-gray-500" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
