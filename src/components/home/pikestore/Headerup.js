import React from "react";
import logo from "./assets/logo.jpg";
import { AiOutlineInfoCircle, AiOutlineWhatsApp } from "react-icons/ai";

const Headerup = () => {
  return (
    <nav className="w-full flex justify-between items-center px-40 bg-pike2 p-2 mb-4">
      <div className="flex gap-4 mt-16 ">
        <div className="flex items-center">
          <AiOutlineWhatsApp className="text-pike" />

          <p className="text-white ml-2">+59898412760</p>
        </div>
        <div className="flex items-center ">
        <AiOutlineInfoCircle className="text-pike" />

        <p className="text-white ml-2 text-[0.9rem]">Horarios de Lunes a Viernes - 9 a 17 hs / Sábados 8 A 12 hs</p>
        </div>

      </div>
      <ul className="mt-16 flex gap-4 text-right text-pike cursor-pointer">
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
};

export default Headerup;
