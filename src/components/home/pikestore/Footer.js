import React from "react";
import logo from "./assets/logo.jpg";
import { AiOutlineInfoCircle, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <nav className="w-full flex justify-between items-center px-40 bg-pike2 p-2">
      <div className="flex gap-4">
        <div className="flex items-center">
          <AiOutlineInfoCircle className="text-pike" />
          <p className="text-white ml-2">Retiros en Zona Reducto - Parque Posadas</p>
        </div>
      {/*   <div className="flex items-center">
        <AiOutlineWhatsApp className="text-pike" />
        <p className="text-white ml-2">Horarios de lun a vier de 8 am a 12 pm</p>
        </div> */}

      </div>
      <ul className="flex flex-col text-right text-pike cursor-pointer">
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Footer;
