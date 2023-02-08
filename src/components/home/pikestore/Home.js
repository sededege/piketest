import React, { useState } from "react";
import Products from "./Products";
import Slider from "./Slider";
import Range from "./Range";
import Pagination from "./Pagination";
import { IoIosConstruct } from "react-icons/io";
import { AiFillHome, AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { GiFactory, GiClothes, GiCoinsPile } from "react-icons/gi";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { FaBaby } from "react-icons/fa";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { useLocation } from "react-router";

const Home = () => {
  /*   const [products, setProducts] = React.useState();
   */
  const [{ products }, dispatch] = useStateValue();
  const [categories, setCategories] = React.useState();
  const [categories2, setCategories2] = React.useState();
  const [price, setPrice] = React.useState();
  const [select, setSelect] = React.useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts =
    products && products.slice(firstPostIndex, lastPostIndex);
  const location = useLocation();
  const state  = location.state;
 

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

      if (state === 'catalogo'){
        const offsetPosition = 630;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else if (state === 'inicio'){
        const offsetPosition = 0;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }

      setSelect('todos')
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

  const cambiar = (props) => {
    if (props === 'todos'){
      setSelect('todos');

    } else {
      setSelect(props.name);
    }
    fetch(
      `https://api.mercadolibre.com/sites/MLU/search?seller_id=109907868&category=${props.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCategories2(data.results)
        dispatch({
          type: actionType.SET_PRODUCTS,
          products: data.results,
        });
       
      });
  };

  return (
    <div className="flex flex-col px-10 ">
      <Slider />

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
      </div>
      <div>
        {/*  <ul className="flex gap-4 ">
          {categories &&
            categories.map((a) => (
              <li
                onClick={() => cambiar(a)}
                className={`${
                  select === a.name ? "bg-white" : "bg-yellow-400"
                } : px-2 py-2 w-full flex-col border-2 cursor-pointer hover:bg-white border-yellow-500 rounded-lg gap-2 text-pike2 text-[0.8rem] justify-center flex text-center  items-center`}
              >
                {iconos(a.name)}
                {a.name}
              </li>
            ))}
        </ul> */}
      </div>
      <div className="flex h-full bg-gray-200">
        <div className="w-1/4  rounded-bl-lg">
          <h2 className="font-bold mt-4 text-left px-4">Categorias</h2>
          <ul className="px-2 gap-2 flex flex-col">
            <li
              onClick={() => cambiar("todos")}
              className={`${
                select === "todos"
                  ? "bg-pike text-white"
                  : "bg-gray-200 text-gray-500"
              } : px-4 py-2 rounded-lg   text-left flex items-center gap-2 hover:text-white hover:bg-pike cursor-pointer`}
            >
             <AiOutlineFilter/> Todas las categorias
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
          <Range categorias={select} data={categories2}/>
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
