import React, { useEffect, useState } from "react";
import { fetchData } from "../Utils/apiCall";
import SinPTemp from "../Utils/SinPTemp";


const Search = () => {
  const [searchText, setSearchText] = useState(null);
  const [searchedData, setSearchedData] = useState([]);
  const handelChange = (e) => {
    setSearchText(e.target.value);
  };


  useEffect(() => {
    if (searchText?.length) {
      fetchData(
        `/api/products?populate=*&filters[name][$containsi]=${searchText}`
      )?.then((d) => setSearchedData(d?.data));
    }
  }, [searchText]);

  return (
 
      <div className="min-h-[78vh] w-full mb-10 mt-3">

        <div className="w-[60%] m-auto flex ">
          <input
            className=" text-4xl w-full bg-slate-200 rounded-lg  text-center"
            placeholder="Search Products"
            onChange={handelChange}
          />
        </div>

        <div className=" mt-10 ">
          <div className="md:w-[80%] mx-auto lg:w-[70%] md:my-10 my-4">
            
           {  
   searchText? searchedData?.map((e)=>{
       return( <SinPTemp key={e?.id} {...e?.attributes}/>
        );
     }) : null
 }
          </div> 
        </div>
      </div>
    
  );
};

export default Search;
