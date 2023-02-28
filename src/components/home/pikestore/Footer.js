import React from "react";
import logo from "./assets/logo.jpg";
import {
  AiOutlineInfoCircle,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineSearch,

} from "react-icons/ai";
import {BiMailSend} from 'react-icons/bi'

const Footer = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 bg-pike2 p-2 py-10">
     {/*  <div className="flex gap-4">
         <div className="flex items-center">
          <AiOutlineInfoCircle className="text-pike" />
          <p className="text-white ml-2">
            Retiros en Zona Reducto - Parque Posadas
          </p>
        </div> 
       
      </div> */}
      <ul className="text-white flex flex-col gap-2">
        <h1 className="font-bold ">Newsletter</h1>
        <li className="hover:underline cursor-pointer">Suscribite y recibí todas nuestras novedades!</li>
        <li className="hover:underline cursor-pointer">
        <div className="flex ">
          <input
            className="w-full p-2 bg-white rounded-l-md text-center shadow-md"
            type="text"
            placeholder="Escribe tu email"
          />
          <BiMailSend className="bg-pike text-[2.5rem] p-1 text-white rounded-r-md cursor-pointer" />
        </div>
        </li>
        <li></li>
      </ul>
      <ul className="text-white flex flex-col gap-4">
        <h1 className="font-bold ">Retiros</h1>
        <li>Zona Reducto</li>
        <li>Parque Posadas</li>
        <li></li>
      </ul>
      <ul className="text-white flex flex-col gap-2">
        <h1 className="font-bold ">Compra</h1>
        <li className="hover:underline cursor-pointer">
          Como comprar en nuestra web
        </li>
        <li className="hover:underline cursor-pointer">
          Envíos y devoluciones
        </li>
        <li className="hover:underline cursor-pointer">Preguntas frecuentes</li>
      </ul>
      <div className="flex flex-col gap-4 bottom-6 relative">
        <p className="text-white font-bold">Seguinos</p>
        <div className="flex gap-4 text-pike">
          <a href="https://www.instagram.com/pikestore.uy/">
            {" "}
            <AiOutlineInstagram className="text-[2rem]" />
          </a>
          <a href="https://wa.me/+59899651873">
            {" "}
            <AiOutlineWhatsApp className="text-[2rem]" />
          </a>
          <a href="mailto:ventas@pikestore.com.uy">
            {" "}
            <AiOutlineMail className="text-[2rem]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
