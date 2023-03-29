import React,{useContext} from 'react'
import OneProduct from '../Products/OneProduct';
import { Context } from '../Utils/Context';

const Shop = () => {
    const{products} =useContext(Context);
  return (
    <div className=' sm:w-[80%] bg-pink-50 mx-auto py-10'>
        
        <div className="flex flex-wrap gap-4 sm:gap-x-12 sm:gap-y-12 w-[80%] m-auto justify-center sm:justify-start">

        {
     products?.map((element)=>{
       return <OneProduct {...element.attributes} key={element.id} className="" /> 
     })
   }

        {/* <div className=" border-solid  bg-slate-200 rounded-lg drop-shadow-lg hover:drop-shadow-2xl cursor-pointer">
          <div className="w-[12rem] h-[13rem] p-3 ">
            <img  alt="" className="w-full h-full rounded-lg" />
          </div>
          <div className="px-3">
            <span className="font-bold py-1"> Iphone 14 max pro</span>
            <span className="flex text-yellow-500 w-full ">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
           <div className="flex py-1 justify-between">
            <span className="">150000</span>
            <span className="text-xl px-1">
              <BiCartAdd />
            </span>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default Shop