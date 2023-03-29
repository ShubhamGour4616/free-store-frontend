import {createContext, useState} from "react";
export const  Context = createContext();

 const AppContext =({children})=>{
    
const [products ,setProducts] =useState(null);
const [catgoryData ,setCatgoryData] =useState(null);
const[wishList,setWishList] = useState([]);

const[cartProduct, setCartProduct] = useState([]);
const[cartCount,setCartCount] = useState(0);
const[cartTotal, setCartTotal] = useState(0);
const[quantity,setQuantity] = useState(1);

    return (
        <Context.Provider
        value={{
            products,setProducts,
            catgoryData,setCatgoryData,
            cartProduct,setCartProduct,
            cartCount,setCartCount,
            cartTotal,setCartTotal,
            wishList,setWishList,
            quantity,setQuantity,
        }}
    > 
         {children}
        </Context.Provider>
    );
}

export default AppContext;