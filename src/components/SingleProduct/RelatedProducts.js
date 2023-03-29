import React, { useEffect,useState} from "react";
import OneProduct from "../Products/OneProduct";
import { fetchData } from "../Utils/apiCall";
// import MakeListofData from "./MakeListofData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const RelatedProducts = ({category,curObjName}) => {
  const[currCatObj,setCurrCatObj] = useState(null);

    const responsive={
        desktop :{
            breakpoint :{max:3000, min:1024},
            items: 4,
        },

        tablet:{
            breakpoint :{max:1023, min:464},
            items: 3,
        },
        mobile:{
            breakpoint :{max:767, min:0},
            items: 1 ,
        }
    };


  // api call for fetching categories data
useEffect(()=>{
    const cateData = fetchData(`/api/products?populate=*&[filters][categories][name]=${category}&[filters][name][$ne]=${curObjName}`);
    cateData.then((d)=>{
      setCurrCatObj(d.data); 
   } );


  
 },[category,curObjName]);

 let newList =currCatObj?.map((element)=>{
  return <OneProduct {...element?.attributes} key={element.id}  />
})
 
let List =[
      <div key={"1"}></div>,
      <div  key={"2"}></div>,
      <div  key={"3"}></div>,
      <div  key={"4"}></div>,
];
  return (

<div className='mt-[50px] md:mt-[100px] mb-[100px] md:mb-0'>
     <div className='text-3xl font-bold mb-7'>Related Products</div>
     <Carousel responsive={responsive}
               itemClass="mx-[10px]"
   > 
  
    {   newList ? newList:List
      
    } 
       </Carousel>
     </div>
  );
};

export default RelatedProducts;


