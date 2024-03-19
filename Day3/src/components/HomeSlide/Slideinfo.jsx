import React, { useEffect } from "react"
import Glide from "@glidejs/glide"
import part1 from '../../assets/images/part1.jpg';
import part2 from '../../assets/images/part2.jpg';
import part3 from '../../assets/images/part3.jpg';
import part4 from '../../assets/images/part4.jpeg';
import part5 from '../../assets/images/part5.png';
import part6 from '../../assets/images/part6.jpeg';
import part7 from '../../assets/images/part7.jpeg';
import part8 from '../../assets/images/part8.jpeg';

const CarouselLogo = () => {
  useEffect(() => {
    const slider = new Glide(".glide-09", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 4500,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 5, // Adjust the gap between images here
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
          gap: 36,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Testimonial carousel --> */}
      <div className="glide-09 relative w-full overflow-x-hidden mt-10">
        {/* <!-- Slides --> */}
        <div data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part1}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part2}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part3}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part4}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part5}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part6}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part7}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            <li className="glide-visible:opacity-100 glide-invisible:opacity-0">
              <img
                src={part8}
                className="m-auto h-20 max-h-full w-auto max-w-full"
              />
            </li>
            
          </ul>
        </div>
      </div>
      {/*<!-- End Testimonial carousel --> */}
    </>
  )
}
export default CarouselLogo;
