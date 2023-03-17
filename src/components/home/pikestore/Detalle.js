import React from "react";
import { useParams } from "react-router";
import ImageGallery from "react-image-gallery";
import {MdOutlineArrowLeft, MdOutlineArrowRight } from 'react-icons/md'
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Detalle = () => {
  const [{ products, cartItems }, dispatch] = useStateValue();

  const { productId } = useParams();
  const [detalle, setDetalle] = React.useState();
  const [description, setDescription] = React.useState();
  /*   console.log(productId); */
  const [cantidad, setCantidad] = React.useState(1);
  const [images2, setImages2] = React.useState([]);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    if (items && items.length > 0) {
      addtocart();
    }
  }, [items]);

  const addtocart = React.useCallback(() => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  }, [dispatch, items]);
  
  const LeftNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-left-nav   hover:text-booty  text-white "
            disabled={disabled}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <MdOutlineArrowLeft className='text-[3rem] text-pike2  ' />
        </button>
    );
});
const RightNav = React.memo(({
    disabled,
    onClick,
}) => {
    return (
        <button
            type="button"
            className="image-gallery-icon image-gallery-right-nav hover:text-booty  text-white"
            disabled={disabled}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <MdOutlineArrowRight className='text-[3rem] text-pike2   ' />
        </button>
    );
});
  

  console.log(images2)
  React.useEffect(() => {
    productId &&
      fetch(`https://api.mercadolibre.com/items?ids=${productId}`)
        .then((response) => response.json())
        .then((data) => {
          data && setDetalle(data[0].body);
            setImages2("")
         data && data[0].body.pictures.map((el, index) => {
             setImages2(prevState => [...prevState, { original: el.url, thumbnail: el.url }])

            })  
        });
    productId &&
      fetch(`https://api.mercadolibre.com/items/${productId}/description`)
        .then((response) => response.json())
        .then((data) => {
          setDescription(data.plain_text);

/*           console.log(data);
 */        });
  }, []);

  
  const pedido = (item) => {
    const itemselect = [
      {
        item,
        unidades: cantidad,
      },
    ];
    setItems([...cartItems, itemselect]);
  };
  return (
    <div className="md:w-[85vw] md:px-10 md:py-10 flex md:flex-row flex-col mx-auto pt-[10vh] md:pt-0">
      {/*  <img
          className=" w-[500px] h-[500px] items-center mx-auto object-contain"
          src={detalle && detalle.pictures[0].url}
        />  */}
      <div >
        <ImageGallery
          showPlayButton={false}
          sizes={400}
          showFullscreenButton={false}
          showIndex={false}
          thumbnailPosition="bottom"
          stopPropagation={true}
          lazyLoad={true}
          disableThumbnailScroll={true}
          renderRightNav={(onClick, disabled) => (
            <RightNav onClick={onClick} disabled={disabled} />
          )}
          renderLeftNav={(onClick, disabled) => (
            <LeftNav onClick={onClick} disabled={disabled} />
          )}
          items={images2.slice(0,4)}
        />
      </div>

      <div className="w-full flex flex-col justify-between rounded-lg bg-gray-100 p-4   ">
        <div >
          <h1 className="font-bold text-pike w-[300px] mx-auto text-center justify-center">
            {detalle && detalle.title}
          </h1>
          <p className="text-[12px] text-gray-500 text-center mt-4">
            Codigo: {detalle && detalle.attributes[1].value_name}
          </p>
        </div>
        <p className="p-10 text-gray-400 md:h-full h-[300px] overflow-y-auto p-0 md:p-4 mt-4 mb-4">{description}</p>
        <div className="flex items-center justify-between px-10 gap-4 mt-4">
          <h2 className="text-[2rem] text-center justify-end  ">
            $ {detalle && Math.round(detalle.base_price)}
          </h2>
          <div className="flex  gap-2 ">
            <div
              onClick={
                cantidad > 1 ? () => setCantidad(cantidad - 1) : undefined
              }
              className="flex cursor-pointer w-8 h-8 rounded-lg bg-pike2 items-center justify-center"
            >
              <p className="cursor-pointer text-white font-bold">-</p>
            </div>
            <div className="flex cursor-pointer w-8 h-8 rounded-lg border-2 items-center justify-center">
              <p className="cursor-pointer">{cantidad}</p>
            </div>
            <div
              onClick={() => setCantidad(cantidad + 1)}
              className="flex cursor-pointer w-8 h-8 rounded-lg bg-pike2 items-center justify-center"
            >
              <p className="text-white font-bold">+</p>
            </div>
          </div>
          <button
            type="submit"
            className="hidden md:flex text-white bg-pike2 border-2 border-white hover:border-2 hover:border-pike2  py-2 px-8 focus:outline-none hover:bg-white hover:text-pike2 rounded-lg text-lg"
         onClick={() => pedido(detalle)}
         >
            Añadir al carrito
          </button>
        </div>
        <button
            type="submit"
            className="md:hidden flex mb-4 text-white justify-center bg-pike2 border-2 border-white hover:border-2 hover:border-pike2  py-2 px-8 focus:outline-none hover:bg-white hover:text-pike2 rounded-lg text-lg"
         onClick={() => pedido(detalle)}
         >
            Añadir al carrito
          </button>
      </div>
    </div>
  );
};

export default Detalle;
