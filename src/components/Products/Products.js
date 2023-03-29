import React, { useEffect,useContext } from "react";
import OneProduct from "./OneProduct";
import {fetchData} from "../Utils/apiCall";
import { Context } from "../Utils/Context"; 
import { Link } from "react-router-dom";


const Products = () => {
   const{products,setProducts} = useContext(Context);
  useEffect(()=>{
   const productData = fetchData("/api/products?populate=*");
    productData?.then((d)=>{
     setProducts(d?.data);
    } );
  },[]);
  return (
    <section>
      <div className="font-bold text-center text-5xl my-8 mx-auto py-4 bg-slate-100 rounded-lg w-80 ">
      <Link to="/shop"><span>Products</span></Link>  

      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-12 w-[80%] m-auto justify-center sm:justify-start">

   {
     products?.map((element)=>{
       return <OneProduct {...element.attributes} key={element.id} /> 
     })
   }

      </div>
    </section>
  );
};

export default Products;
