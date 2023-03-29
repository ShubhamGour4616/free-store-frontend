import React, { useContext } from "react";
import CartSingleItem from "./CartSingleItem";
import { Context } from "../Utils/Context";
const Cart = () => {
    const{cartProduct,cartCount,cartTotal} = useContext(Context);
    
  return (
    <>
     <div className="my-5 mx-10 font-bold  text-2xl"> Shopping Cart</div>
      <div className="w-full mx-auto my-2 lg:w-[80%] flex flex-col lg:flex-row  " >
        {/*  for heading  */}
       
        {/* for all cart products */}
        <div className=" lg:w-[50%] m-auto">
        {
          cartProduct.map((e)=>{
              return(
                <CartSingleItem key={e?.name} {...e}/>
              )
          })
        }
        </div>

        {/* cart detail  */}
        <div className="w-[90%] md:w-[70%] my-4 m-auto lg:w-[40%] ">
          <div className="font-bold text-2xl my-4"> Summary</div>
          <div className="h-50 w-full p-4 bg-slate-200 font-bold rounded-lg">
            <div className="flex  justify-between my-3">
              <span>ITEMS</span>
              <span>{cartCount}</span>
            </div>
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>&#8377; {cartTotal}</span>
            </div>

            <div className="font-thin text-sm my-4">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </div>
            <button className="px-6 py-3 rounded-2xl bg-black text-white"> PLACE ORDER</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
