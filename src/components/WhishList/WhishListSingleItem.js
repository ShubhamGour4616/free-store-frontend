import React, { useContext } from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { Context } from '../Utils/Context'
const WhishListSingleItem = ({name,subtitle,price,thumbnail,slug}) => {
  const{wishList,setWishList} =useContext(Context);
  
           function delwishLItem(){
             
            setWishList( wishList?.filter((e)=>{
                if(e?.name!==name) 
                 return e;
                
                 return;
            }))
           }
    return (
             
             <div className='flex my-4 '>
                {/* layout for single cartt product */}
                <div className='w-[120px] h-[120px]   mr-5'>
                <Link to={`/${slug}`}>   <div> <img src={thumbnail?.data?.attributes?.url} alt="" className='w-full h-full bg'/></div>  </Link>
                    {/* //thumbnail?.data?.attributes?.url */}
                </div>
                <div>
                    <span>
                         <div className='font-medium text-lg pb-0'>{name}</div>
                         <div className='text-[12px]'>{subtitle}</div>
                         <span className='font-bold text-lg'>&#8377;{price}</span>
                         {/* <span className='text-[12px] m-2 pb-2 '> Quantity</span> */}
                         <span onClick={()=>{
                               delwishLItem();
                              
                         } }> <MdDeleteOutline/>  </span>                
                  </span>
                </div>
              </div>
          
       
      );
}

export default WhishListSingleItem