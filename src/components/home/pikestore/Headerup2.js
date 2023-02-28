import React from "react";
import logo from "./assets/logo.jpg";
import { AiOutlineInfoCircle, AiOutlineWhatsApp,AiOutlineMail } from "react-icons/ai";

const Headerup2 = () => {
  return (
    <nav className="w-full hidden md:flex mb-20 items-center justify-end px-20 bg-pike2 p-2">
      <div className="flex gap-4 text-[0.8rem] ">
        <div className="flex items-center ">
          <AiOutlineInfoCircle className="text-pike" />

          <p className="text-white ml-2 ">
            Horarios de Lunes a Viernes - 9 a 17 hs / Sábados 8 A 12 hs
          </p>
        </div>
        <div className="flex items-center">
          <AiOutlineWhatsApp className="text-pike" />

          <p className="text-white ml-2">+598 99 651 873</p>
        </div>
        <div className="flex items-center">
          <AiOutlineMail className="text-pike" />

          <p className="text-white ml-2">ventas@pikestore.com.uy</p>
        </div>
      </div>
    </nav>
  );
};

export default Headerup2;
