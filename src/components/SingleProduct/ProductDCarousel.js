import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ProductDCarousel = ({imageData}) => {
//  console.log(imageData);
    return (
        <div >
<Carousel 
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        thumbWidth={60}
        showArrows={false}
        
 >       
         {
             imageData?.map((e)=>{
                 return ( <img src={e?.attributes?.url}  alt="Not Loaded"  key={e?.id}/>)
               
             })
         }
          
      </Carousel> 
       </div>
    );
}

export default ProductDCarousel;
 