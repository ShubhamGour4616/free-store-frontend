import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Context } from "../Utils/Context"; 

const OneProduct = ({name,subtitle,price,description,slug,thumbnail}) => {
       const{cartProduct,setCartProduct,cartCount,setCartCount,cartTotal,setCartTotal} = useContext(Context);
       const{quantity} = useContext(Context);
//add item to cart
  function addItemToCart(){
    for(var i =0;i<cartProduct?.length;i++){
      if(cartProduct?.[i]?.name===name)
      return;
    }
    setCartProduct([...cartProduct,{name,price,slug,thumbnail,quantity}])
    setCartCount(cartCount+1);
    setCartTotal(cartTotal+price);
  }
  return (
    <Link to={`/${slug}`}>
        <div className=" border-solid  bg-slate-200 rounded-lg drop-shadow-lg hover:drop-shadow-2xl cursor-pointer w-[220px] h-[290px] ">
          <div className=" h-[13rem] p-3 ">
            <img src={thumbnail?.data?.attributes?.url} alt="ProductPhoto" className="w-full h-full rounded-lg" />
          </div>
          <div className="px-3">
            <p className="font-bold py-1 h-7 truncate" > {name}</p>
            <span className="flex text-yellow-500 w-full ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <div className="flex py-1 justify-between">
              <span className="">&#8377;{price}</span>
              <span className="text-xl px-1">
                < BiCartAdd onClick={addItemToCart}  />
              </span>
            </div>
          </div>
        </div>
     </Link>
  );
};

export default OneProduct;
