import React, { useEffect, useState,useContext } from "react";
import ProductDCarousel from "./ProductDCarousel";
import { AiOutlineHeart } from "react-icons/ai";
import RelatedProducts from "./RelatedProducts";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utils/apiCall";
import { Context } from "../Utils/Context"; 

const SingleProduct = () => {;
      const{wishList,setWishList} = useContext(Context);
      const{cartProduct,setCartProduct,cartCount,setCartCount,cartTotal,setCartTotal} = useContext(Context);

  // Reading Parameter 
  const parameter = useParams();

  //manage wishList 
  function addtoWishList(){
    for(var i =0;i<wishList?.length;i++){
      if(wishList?.[i]?.name===currObj?.name)
      return;
    }
    setWishList([...wishList,currObj]);
  }   


  const[quantity,setQuantity] = useState(1);
   const [currObj, setCurrObj]= useState(null);
  const[category,setCatgory] = useState(null);

  const increment=() =>{
    setQuantity(quantity+1);
  }
  const decrement=() =>{
    if(quantity>1)
    setQuantity(quantity-1);
  }

  function addItemToCart(){
    for(var i =0;i<cartProduct?.length;i++){
      if(cartProduct?.[i]?.name===currObj?.name)
      return;
    }
    setCartProduct([...cartProduct,newObj])
    setCartCount(cartCount+1);
    setCartTotal(cartTotal+newObj.price);
  }
let newObj={
  name:currObj?.name,
  subtitle:currObj?.subtitle,
  price:currObj?.price*quantity,
  thumbnail:currObj?.thumbnail,
  quantity:quantity,
}
 useEffect(()=>{
  const productData = fetchData(`/api/products?populate=*&[filters][slug]=${parameter.slug}`);
   productData?.then((d)=>{
    setCurrObj(d?.data?.[0]?.attributes);
    setCatgory(d?.data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.name);
    } )

  
 },[parameter]);

  return (
    <div>
    <div className=" w-[97%]  md:w-[80%]  mx-auto mt-20">
      <div className="flex flex-col lg:flex-row lg:gap-[100px] gap-50px  ">
        <div className="w-[90%] sm:w-[80%] lg:w-[45%] m-auto">
          {/* <img src={bud} alt="" className=" w-full"/>*/}
          <div className="" >
            {" "}
            <ProductDCarousel imageData={currObj?.image?.data}/>{" "}
          </div>
        </div>
        <div className="flex flex-col my-3  lg:w-[50%] ">
          <span className="text-4xl">{currObj?.name} </span>
          <div className="text-sm">{currObj?.subtitle}</div>
     <div className="flex text-center">
          <span className="my-2 font-medium text-xl">&#8377;{currObj?.price*quantity || currObj?.price}</span>
           <div className="mx-4 text-xl">
                <span className="cursor-pointer" onClick={decrement}>-</span>
                <span className="border-solid border-2 border-black px-1.5  mx-2" >{quantity}</span>
                <span className="cursor-pointer" onClick={increment}>+</span>
           </div>
     </div>
          <div className="flex text-xl my-4 font-bold text-white">
            <button className="py-3 px-5 bg-blue-900 mr-2  rounded-md hover:bg-red-900 hover:text-white flex"  onClick={addtoWishList}>
             <span> Whishlist</span>
               <AiOutlineHeart className="mt- ml-1 text-2xl"/>
            </button>
            <button className="py-3 px-5 bg-green-400 border rounded-md hover:border-black"
             onClick={addItemToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="mx-1">
            <div className="text-xl font-bold mt-5 mb-4"> Product Details</div>
            <div >
              {currObj?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
       {/* // for related products  */}
       <div className="w-[70%] m-auto">
             <RelatedProducts category={category} curObjName={currObj?.name}/>
       </div>
    </div>
  );
};

export default SingleProduct;
