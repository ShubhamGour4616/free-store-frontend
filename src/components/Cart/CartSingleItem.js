import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { Context } from "../Utils/Context";
const CartSingleItem = ({ name, subtitle, price, thumbnail, quantity,slug}) => {
  const {
    cartProduct,
    setCartProduct,
    cartCount,
    setCartCount,
    cartTotal,
    setCartTotal,
    wishList,
    setWishList,
  } = useContext(Context);

  // delete item from cart
  function delCartItem() {
    setCartProduct(
      cartProduct?.filter((e) => {
        if (e?.name !== name) return e;
      })
    );
    setCartCount(cartCount - 1);
    setCartTotal(cartTotal - price);
  }
  // save later item =item added to wishlist and remove from cart
  function saveLaterItem() {
    addtoWishList();
    delCartItem();
  }

  function addtoWishList() {
    for (var i = 0; i < wishList?.length; i++) {
      if (wishList?.[i]?.name === name) return;
    }
    setWishList([...wishList, obj]);
  }
let obj={
  name:name,
  subtitle:subtitle,
  price:price/quantity,
  thumbnail:thumbnail,
}
  return (
  
    <div className="flex my-4 ">
      {/* layout for single cart product */}
      <div className="w-[120px] h-[120px]   mr-5">
        <div>
          {" "}
          <Link to={`/${slug}`}>    <img
            src={thumbnail?.data?.attributes?.url}
            alt=""
            className="w-full h-full bg"
          />  </Link>
        </div>
        {/* //thumbnail?.data?.attributes?.url */}
      </div>
      <div>
        <span>
          <div className="font-medium text-lg pb-0">{name}</div>
          <div className="text-[12px]">{subtitle}</div>
          <div>
            <span className="font-bold text-lg">&#8377;{price}</span>
              <span className="border-solid border-2 px-1  mx-4">
                {(quantity)}
              </span>
          </div>
          {/* <span className='text-[12px] m-2 pb-2 '> Quantity</span> */}
          <div className="flex gap-4 items-center mt-1">
            <span
              className="text-md sm:text-xl hover:bg-slate-200 p-0.5 rounded-md ease-in-out duration-300 cursor-pointer "
              onClick={() => {
                delCartItem();
              }}
            >
              {" "}
              <MdDeleteOutline />{" "}
            </span>
            <button
              className="font-medium hover:text-orange-700 hover:bg-slate-200 rounded-sm ease-in-out duration-200"
              onClick={saveLaterItem}
            >
              {" "}
              Save Later
            </button>
          </div>
        </span>
      </div>
    </div>

  );
};

export default CartSingleItem;
