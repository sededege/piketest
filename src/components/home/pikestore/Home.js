import React, { useState } from "react";
import Products from "./Products";
import Slider from "./Slider";
import Range from "./Range";
import Pagination from "./Pagination";
import { IoIosConstruct } from "react-icons/io";
import { AiFillHome, AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { GiFactory, GiClothes, GiCoinsPile } from "react-icons/gi";
import { BsFillMusicPlayerFill, BsTruck } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { useLocation } from "react-router";
import banner from "./assets/banner2.jpg";

const Home = () => {
  /*   const [products, setProducts] = React.useState();
   */
  const [{ products }, dispatch] = useStateValue();
  const [categories, setCategories] = React.useState();
  const [categories2, setCategories2] = React.useState();
  const [price, setPrice] = React.useState();
  const [select, setSelect] = React.useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    products && products.slice(firstPostIndex, lastPostIndex);
  const location = useLocation();
  const state = location.state;
  const [showModal, setShowModal] = React.useState(false);

  const banners = [
    {
      id: 0,
      name: "Pagá en cuotas!",
    },
    {
      id: 1,
      name: "Envíos a todo el país",
    },
    {
      id: 2,
      name: "Retira en el día",
    },
    /*  {
      id: 3,
      name: "Contacto",
    }, */
  ];
  React.useEffect(() => {
    fetch("https://api.mercadolibre.com/sites/MLU/search?seller_id=109907868")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.available_filters[0].values);
        setPrice(data.available_filters[1].values);

        dispatch({
          type: actionType.SET_PRODUCTS,
          products: data.results,
        });
      });

    if (state === "catalogo") {
      const offsetPosition = 630;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else if (state === "inicio") {
      const offsetPosition = 0;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }

    setSelect("todos");

    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, [state]);

  const iconos = (e) => {
    if (e === "Industrias y Oficinas") {
      return <GiFactory className="text-[1rem]" />;
    }
    if (e === "Construcción") {
      return <IoIosConstruct className="text-[1rem]" />;
    }
    if (e === "Ropa, Calzados y Accesorios") {
      return <GiClothes className="text-[1rem]" />;
    }
    if (e === "Electrónica, Audio y Video") {
      return <BsFillMusicPlayerFill className="text-[1rem]" />;
    }
    if (e === "Hogar, Muebles y Jardín") {
      return <AiFillHome className="text-[1rem]" />;
    }
    if (e === "Bebés") {
      return <FaBaby className="text-[1rem]" />;
    }
  };
  const iconos2 = (e) => {
    if (e === "Pagá en cuotas!") {
      return <GiFactory className="text-[3rem] text-gray-700" />;
    }
    if (e === "Retira en el día") {
      return <IoIosConstruct className="text-[3rem] text-gray-700" />;
    }
    if (e === "Envíos a todo el país") {
      return <GiClothes className="text-[3rem] text-gray-700" />;
    }
    if (e === "Electrónica, Audio y Video") {
      return <BsFillMusicPlayerFill className="text-[3rem] text-gray-400" />;
    }
    if (e === "Hogar, Muebles y Jardín") {
      return <AiFillHome className="text-[3rem] text-gray-400" />;
    }
    if (e === "Bebés") {
      return <FaBaby className="text-[3rem] text-gray-400" />;
    }
  };

  const Popup = () => {
    return (
      <>
        {showModal ? (
          <>
            <div className="flex bg-black bg-opacity-30 justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none ">
              <div className="relative w-auto my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-[30vw] bg-white outline-none focus:outline-none">
                  <div className="relative p-0 flex-auto">
                    <img
                      className="w-full h-[200px] rounded-t-lg object-cover"
                      src={banner}
                      width="200"
                      height="267"
                      alt="me"
                    ></img>
                    <div>
                      <h1 className="font-bold text-pike text-center mt-4">
                        ¿Necesitas comprar al por mayor?
                      </h1>
                      <p className="text-center">
                        Tenemos el mejor precio para tu empresa!
                      </p>
                    </div>

                    <form
                      type="POST"
                      className=" rounded px-8 pt-6 pb-8 w-full"
                    >
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                           Empresa (*)
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Email (*)
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className="relative">
                          <label
                            for="name"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Teléfono
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            required
                          />
                        </div>
                      </div>
                     
                    </form>
                  </div>
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="text-white bg-pike2 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="submit"
                      /*                       onClick={() => setShowModal(false)}
                       */
                    >
                      Enviar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  };

  const cambiar = (props) => {
    if (props === "todos") {
      setSelect("todos");
    } else {
      setSelect(props.name);
    }
    fetch(
      `https://api.mercadolibre.com/sites/MLU/search?seller_id=109907868&category=${props.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories2(data.results);
        dispatch({
          type: actionType.SET_PRODUCTS,
          products: data.results,
        });
      });
  };

  return (
    <div className="flex flex-col px-10 ">
      <Popup />
      <Slider />
      <div className="px-[400px]">
        <ul className="flex gap-4  ">
          {banners &&
            banners.map((a) => (
              <li
                onClick={() => cambiar(a)}
                className={`${
                  select === a.name ? "bg-white" : " bg-white "
                } :  py-4 w-full flex-col cursor-pointer rounded-lg hover:bg-white border-gray-100 gap-2 text-pike2 text-[0.8rem] justify-center flex text-center  items-center`}
              >
                {iconos2(a.name)}
                <p className="text-pike font-bold">{a.name}</p>
                <p className="text-gray-200">{a.name}</p>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex w-full items-center bg-pike2 rounded-t-lg justify-between mt-4">
        <div className="flex p-4 box-border box-none font-bold text-white">
          Catálogo
        </div>
        <div className="flex p-4 ">
          <input
            className="w-[300px] p-2 bg-white rounded-l-md text-center shadow-md"
            type="text"
            placeholder="Qué estas buscando?"
          />
          <AiOutlineSearch className="bg-pike2 text-[2.5rem] p-1 text-white rounded-r-md cursor-pointer" />
        </div>
        {/* <div className="text-white flex gap-2 p-4 items-center">
          Envíos gratis a todo el país! <BsTruck/>
        </div> */}
      </div>

      <div className="flex h-full bg-gray-200">
        <div className="w-1/4  rounded-bl-lg">
          <h2 className="font-bold mt-4 text-left p-4">Categorias</h2>
          <ul className="px-2 gap-2 flex flex-col">
            <li
              onClick={() => cambiar("todos")}
              className={`${
                select === "todos"
                  ? "bg-pike text-white"
                  : "bg-gray-200 text-gray-500"
              } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
            >
              <AiOutlineFilter /> Todas las categorias
            </li>
            {categories &&
              categories.map((a) => (
                <li
                  onClick={() => cambiar(a)}
                  className={`${
                    select === a.name
                      ? "bg-pike text-white"
                      : "bg-gray-200 text-gray-500"
                  } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
                  /* className="px-4 py-2 text-gray-500 text-left flex items-center gap-2 hover:text-black hover:bg-yellow-200 cursor-pointer" */
                >
                  {iconos(a.name)} {a.name}{" "}
                </li>
              ))}
          </ul>
          <h2 className="font-bold mt-4 text-left px-4">Precio</h2>
          <Range categorias={select} data={categories2} />
        </div>
        <Products products={currentPosts} />
      </div>
      <Pagination
        className="p-2"
        totalPosts={products && products.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
