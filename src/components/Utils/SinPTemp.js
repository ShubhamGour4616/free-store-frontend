import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { Link } from 'react-router-dom';

const SinPTemp = ({name,subtitle,price,slug,thumbnail}) => {
    return (
             <Link to={`/${slug}`}>
               <div className='flex my-4 '>
                {/* layout for single cartt product */}
                <div className='w-[120px] h-[120px]   mr-5'>
                    <div> <img src={thumbnail?.data?.attributes?.url} alt="" className='w-full h-full bg'/></div>
                </div>
                <div>
                    <span>
                         <div className='font-medium text-lg pb-0'>{name}</div>
                         <div className='text-[12px]'>{subtitle}</div>
                         <span className='font-bold text-lg'>&#8377;{price}</span>
                         <span> <MdDeleteOutline/>  </span>                
                  </span>
                </div>
              </div>
              </Link>
       
      );
}

export default SinPTemp