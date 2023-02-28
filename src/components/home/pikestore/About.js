import React from "react";
import logo from "./assets/logo.jpg";
const About = () => {
  const Card = ({ title, text }) => {
    return (
      <div className="rounded-lg w-full shadow-lg p-4">
        <h1 className="font-bold text-pike ">{title}</h1>
        <p>{text}</p>
      </div>
    );
  };
  return (
    <div className="w-full md:pt-0 pt-[10vh] md:px-[25vw] px-8 text-center text-gray-500  flex flex-col justify-between gap-4 pb-20">
      <img className="w-[300px] mx-auto" src={logo} alt="logo" />
      <div className="flex md:flex-row flex-col gap-4">
        <Card
          title="Quienes somos"
          text="Somos una empresa familiar de e-commerce que apunta a brindar
          soluciones a nuestros clientes, simplificando todos los pasos para la
          compra de productos on-line."
        />
        <Card
          title="Misión"
          text="Ofrecer productos en forma eficiente a nuestros clientes a través de
        diferentes canales y puntos de venta"
        />
        <Card
          title="Visión"
          text="Comercializar y distribuir nuestros productos respetando y teniendo
        como objetivo al cliente y sus tiempos"
        />
      </div>
    </div>
  );
};

export default About;
