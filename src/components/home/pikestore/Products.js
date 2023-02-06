/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { data } from "./data";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";
import { Navigate, useNavigate } from "react-router";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Products = ({ products }) => {
  const navigate = useNavigate();
  const [images, setImages] = React.useState([]);
  const [cantidad, setCantidad] = React.useState(1);
  const [items, setItems] = React.useState([]);
  const [{ cartItems }, dispatch] = useStateValue();

  const imagen = (id) => {
    fetch(`https://api.mercadolibre.com/items?ids=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (images.length === 0) {
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
  let _foto = img
  let nueva = _foto.substr(0, _foto.lastIndexOf("-") + 1) +
  "O" +
  _foto.substr(_foto.lastIndexOf("."));
  return nueva
}


  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-r-lg">
      {products &&
        products.map((a, index) => (
          <div
            className="px-5 py-4 hover:shadow-lg rounded-lg cursor-pointer bg-white "
            key={a.id}
          >
            <img
              onClick={() => navigate(`/detalle/${a.id}`)}
              src={img(a.thumbnail)}
              className="h-[200px] object-contain w-full "
            />

            <h2 className="text-[0.8rem] py-2 h-[70px]">{a.title}</h2>
            <div className="flex justify-between">
              <p className="font-semibold text-pike2 text-[1.3rem] ">
                $ {a.price}
              </p>
              <AiOutlineShoppingCart
                onClick={() => pedido(a)}
                className="text-[2rem] rounded-full bg-pike text-white p-2"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Products;
