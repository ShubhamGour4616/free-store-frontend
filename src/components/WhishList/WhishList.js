import React, { useContext } from 'react'
import { Context } from '../Utils/Context';
import WhishListSingleItem from './WhishListSingleItem';

const WhishList = () => {
  const {wishList} = useContext(Context);
  return (
   <div className='md:w-[80%] mx-auto lg:w-[70%] md:my-10 my-4'>
     <div className='font-bold text-2xl text-center mb-6'> WhishList</div>
     {/* <CartSingleItem/> */}
    {
      wishList?.map((e)=>{
       return(<WhishListSingleItem key={e?.name} {...e}/>)
       
      })
}
   </div>
  )
}

export default WhishList