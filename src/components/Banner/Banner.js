import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import b1 from "./b1.jpg";
import b2 from "./b2.jpg";
import b3 from "./b3.jpg";
import b4 from "./b4.jpg";
import b5 from "./b5.jpg";

const Banner = () => {
  return (
    <div className=" w-full ">
      <Carousel 
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        renderIndicator={false}
        showArrows={false}
        
      >
        <div className="bg-top ">
          <img src={b1} alt="" className=" lg:h-[420px] w-full"/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div className="">
          <img src={b2} alt="" className="lg:h-[420px] w-full"/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div className="bg-top bg-cover">
          <img src={b3} alt="" className=" lg:h-[420px] w-full" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="bg-top bg-cover">
          <img src={b4} alt="" className=" lg:h-[420px] w-full" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div className="bg-top bg-cover">
          <img src={b5} alt="" className=" lg:h-[420px] w-full" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
