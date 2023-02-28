/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { data } from "./data";
import {
  AiOutlineShoppingCart,
  AiFillPlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsCartPlusFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";
import { Pagination } from "flowbite-react";
import { motion } from "framer-motion";

const Products = ({ products, currentPage, postsPerPage, setCurrentPage }) => {
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const [cantidad, setCantidad] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const imagen = (id) => {
    fetch(`https://api.mercadolibre.com/items?ids=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && images.length === 0) {
          setImages((prev) => [...prev, data[0].body.pictures[0].url]);
        }
      });
  };

  React.useEffect(() => {
    products && products.map((a) => imagen(a.id));
    if (items && items.length > 0) {
      addtocart();
    }
  }, [images, items]);

  const addtocart = React.useCallback(() => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [dispatch, items]);
  /* 
  const addtocart = useCallback(() => {
    dispatch({
        type: actionType.SET_CARTITEMS,
        cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
}, [dispatch, items])



React.useEffect(() => {
    if (products && products.length > 0) {
        setThisProduct(products.find(prod => String(prod.id) === String(productId)))
    }
    if (items && items.length > 0) {
        addtocart();
    }

    if (thisProduct != "") {
        if (location.state != null){
            setFiltroColor(location.state)
        } else {
           setFiltroColor(thisProduct.color[0].name)
        }
    }

    dispatch({
        type: actionType.SET_DONDE_ESTOY,
        dondeestoy: 'Detalle'
    })


}, [products, items, dispatch, productId, thisProduct])

 */

  const pedido = (item) => {
    const itemselect = [
      {
        item,
        unidades: cantidad,
      },
    ];
    setItems([...cartItems, itemselect]);
  };

  /*  var _foto = tendencia.results[i].thumbnail;
  var _nueva =
    _foto.substr(0, _foto.lastIndexOf("-") + 1) +
    "O" +
    _foto.substr(_foto.lastIndexOf(".")); */
  const img = (img) => {
    let _foto = img;
    let nueva =
      _foto.substr(0, _foto.lastIndexOf("-") + 1) +
      "O" +
      _foto.substr(_foto.lastIndexOf("."));
    return nueva;
  };

  return (
    <div className="w-full bg-gray-100 gap-4 p-4 rounded-b-lg ">
      {/* <div className="flex items-center mb-4">
        <input
          className="w-full p-2 bg-white rounded-l-md"
          type="text"
          placeholder="Ingrese el producto deseado"
        />
        <AiOutlineSearch className="bg-pike2 text-[2.5rem] p-1 text-white rounded-r-md cursor-pointer" />
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products && products.length > 0 ? (
          products.map((a, index) => (
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1 }}
            transition={{delay: 0.3 + index / 10}}
            key={a.id} 
            className="md:px-5 px-2 py-4 hover:shadow-lg transition-all 1s ease-in rounded-lg cursor-pointer bg-white ">
              <img
                onClick={() => navigate(`/detalle/${a.id}`)}
                src={img(a.thumbnail)}
                className="h-[200px] md:h-[300px] object-contain w-full "
              />

              <h2 className="text-[0.8rem] py-2 h-[120px] md:h-[70px] text-gray-500 text-center">
                {a.title}
              </h2>
              <div className="flex justify-between relative">
                <p className="font-semibold text-pike2 text-[1.3rem] ">
                  $ {a.price}
                </p>

                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="bg-pike absolute bottom-0 right-0 flex items-center p-2 rounded-full"
                >
                  <BsCartPlusFill
                    onClick={() => pedido(a)}
                    className="text-[1.1rem] text-white"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))
        ) : (
          <div>
            <p className=" text-center w-full items-center justify-center">No hay productos :(</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
