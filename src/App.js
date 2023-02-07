import React, { useCallback, useEffect } from "react";
import MainContainer from "./components/home/MainContainer";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./components/context/StateProvider";
import {
  getAllProductsItems,
  getAllOrders,
} from "./components/utils/firebaseFunctions";
import { actionType } from "./components/context/reducer";
import Dashboard from "./components/dashboard/Dashboard";
import { getAllUsuarios } from "./components/utils/firebaseFunctions";
import Headerleft from "./components/navs/Headerleft";
import CartContainer from "./components/cart/CartContainer";
import SetAddres from "./components/cart/setAddres";
import Favoritos from "./components/home/Favoritos";
import CreateContainer from "./components/dashboard/createContainer";
import EditItem from "./components/dashboard/editItem";
import Ordenes from "./components/producto/Ordenes";
import Pre from "./components/utils/Pre";
import ScrollToTop from "./components/utils/scrolltotop";
import ShowLogin from "./components/home/login";
import Pedidos from "./components/dashboard/Pedidos";
import Usuarios from "./components/dashboard/Usuarios";
import Home from "./components/home/pikestore/Home";
import Header from "./components/home/pikestore/Header";
import Detalle from "./components/home/pikestore/Detalle";
import Headerup2 from "./components/home/pikestore/Headerup2";
import Footer from "./components/home/pikestore/Footer";

function App() {
  const [
    {
      headerShow,
      dondeestoy,
      cartShow,
      editShow,
      favorite,
      loginShow,
      user,
      products,
    },
    dispatch,
  ] = useStateValue();
  const [load, upadateLoad] = React.useState(true);

  /*   const fetchData = useCallback(() => {
    fetch(`https://api.mercadolibre.com/sites/MLU/search?seller_id=109907868&category=${props.id}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: actionType.SET_PRODUCTS,
        products: data.results
      })
      dispatch({
        type: actionType.SET_CATEGORIES,
        categories: data.available_filters[0].values
      })
  
  }); 
  }, []) */
  const fetchData = useCallback(() => {
    fetch("https://api.mercadolibre.com/sites/MLU/search?seller_id=109907868")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: actionType.SET_PRODUCTS,
          products: data.results,
        });
        dispatch({
          type: actionType.SET_CATEGORIES,
          categories: data.available_filters[0].values,
        });
      });
  }, []);

  /* const fetchUsers = useCallback(() => {
    getAllUsuarios().then((data) => {
      dispatch({
        type: actionType.SET_USERS,
        users: data,
      });
      if (user && user != null) {
        dispatch({
          type: actionType.SET_FAVORITE,
          favorite: data.filter((a) => a.user === user.email),
        });
      } else {
        dispatch({
          type: actionType.SET_FAVORITE,
          favorite: "",
        });
      }
    });
  }, []); */

  const location = useLocation();


  useEffect(
    () => {
      setTimeout(() => {
        upadateLoad(false);
      }, 1000);

      fetchData();
     
      /*   fetchUsers(); */
    },
    [ ]
  );

  return (
    <div className="w-screen h-screen bg-white">
      <main className=" ">
        {/*   {loginShow && <ShowLogin />}
        {editShow && <SetAddres />} */}
        {/*   
        <Header />
        {dondeestoy === "Dashboard" && <Headerleft />}
 */}
        {/*  <AnimatePresence>
          <Pre load={load} />
        </AnimatePresence>
 */}
        {/*         <ScrollToTop />
         */}
         <AnimatePresence>{cartShow && <CartContainer />}</AnimatePresence>
         <Headerup2/>
         <Header/>
        <Routes location={location} key={location.pathname}>
          <Route path="/*" element={<Home />} />
          <Route path="/detalle/:productId" element={<Detalle />} />
{/*           <Route path="/carrito" element={<CartContainer />} />
 */}
          {/*    <Route path="/*" element={<MainContainer />} />
       
          <Route path="/Favoritos" element={<Favoritos />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Nuevoproducto" element={<CreateContainer />} />
          <Route path="/edititem" element={<EditItem />} />
          <Route path="/Ordenes/:type" element={<Ordenes />} />
          <Route path="/Dashboard/Pedidos" element={<Pedidos />} />
          <Route path="/Dashboard/Usuarios" element={<Usuarios />} /> */}
        </Routes>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
