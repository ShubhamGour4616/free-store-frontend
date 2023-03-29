import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Shop from "./components/Shop/Shop";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import AppContext from "./components/Utils/Context";
import WhishList from "./components/WhishList/WhishList";

function App() {
  return (
  <>
  <AppContext>
  <BrowserRouter> 
     <Header/>
     <Routes>
      <Route path={"/"}  element={<Home/>}/>
      <Route path={"/shop"}  element={<Shop/>}/>
      <Route path={"/:slug"} element={ <SingleProduct/>}/>
      <Route path={"/cart"}  element={<Cart/>}/>
      <Route path={"/whishlist"}  element={<WhishList/>}/>
      <Route path={"/search"}  element={<Search/>}/>
      <Route path="*" element={<h1> no page found</h1>}/>
      </Routes> 
     <Footer/> 
  </BrowserRouter>
  </AppContext>
  </>
  );
}

export default App;
