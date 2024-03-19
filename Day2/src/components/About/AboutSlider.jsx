import React, { useEffect } from "react";
import Slider from "react-slick";
import '../../assets/css/About.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import img1 from'../../assets/images/bolt.svg';
import img2 from'../../assets/images/rocket.svg';
import img3 from'../../assets/images/shield1.svg';
import img4 from'../../assets/images/document-01.svg';
import img5 from'../../assets/images/stopwatch.svg';
import img6 from'../../assets/images/customer-support.svg';

export const data = [
    {
        img : img1,
        content : "Instant and affordable loans"
    },
    {
        img : img2,
        content : "The quick and simplified online application process"
    },
    {
        img : img3,
        content : "A secured database where all the information is in safe hands"
    },
    {
        img : img4,
        content : "Minimal documentation"
    },
    {
        img : img5,
        content : "Fast disbursals"
    },
    {
        img : img6,
        content : "Reliable customer support of trained and qualified customer representatives on each and every step of loan application"
    },
    
]

const settings = {
  //dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,  // Enable autoplay
  autoplaySpeed: 2000,
};
const AboutSlider = ()  => {
return (
  <div className='w-3/4 m-auto'>
    <div className="mt-20">
    <Slider {...settings}>
      {data.map((d) => (
        <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
          <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
            <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <p className="text-xl font-semibold">{d.content}</p>
            <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
          </div>
        </div>
      ))}
    </Slider>
    </div>
    
  </div>
);
}
export default AboutSlider;