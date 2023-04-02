import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {

  return (

<div className="sticky top-0 bg-red-200 z-50">
    <header className="w-full h-16 flex justify-between py-3 drop-shadow-xl z-50 ">
    <Link to="/"> <section className="text-3xl px-2 font-bold  hover:text-cyan-400 ease-in-out duration-300"> FREESTORE</section></Link> 
        <section  className="flex text-3xl mx-5 ">
          <Link to={"/search"}> <BiSearchAlt className='mx-1  hover:text-cyan-400 ease-in-out duration-300' /></Link> 
        <Link to="/whishlist"><AiOutlineHeart  className='mx-1 hover:text-cyan-400 ease-in-out duration-300'/></Link>
         <Link to="/cart"><AiOutlineShoppingCart className='mx-1  hover:text-cyan-400 ease-in-out duration-300'/> </Link>
        </section>
    </header>
</div> 
  );
};

export default Header;
