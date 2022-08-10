import React from 'react'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./main.scss"
const Main = ({windowSize, setWindowSize}) => {
    window.onresize = () => {
        setWindowSize(window.innerWidth)
    }
  return (
    <main id="main" style={{padding: windowSize > 1200 ? "8rem 9% 0 9%" : "8rem 1rem 0 1rem"}}>
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop
        >
        <SwiperSlide>
                <div className="slide_1 slide "> 
                    <div className="slide-content">
                        <span className='slide_title'>our special dish</span>
                        <span className='slide_name'>fried chicken</span>
                        <p className="slide-details">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                        </p>
                        <button className="custom-btn">
                            Order Now
                        </button>
                    </div>
                    <div className="main-img">
                        <img src="images/home-img-2.png" alt="meal" />
                    </div>
                </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_2 slide " > 
                <div className="slide-content">
                    <span className='slide_title'>our special dish</span>
                    <span className='slide_name'>Fried Chicken</span>
                    <p className="slide-details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                    </p>
                    <button className="custom-btn">
                        Order Now
                    </button>
                </div>
                <div className="main-img">
                    <img src="images/home-img-1.png" alt="meal" />
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="slide_3 slide "> 
                <div className="slide-content">
                    <span className='slide_title'>our special dish</span>
                    <span className='slide_name'>Hot Pizza</span>
                    <p className="slide-details">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquam minus blanditiis quo deserunt accusantium sit ipsa alias quas, explicabo ex natus ea asperiores rerum optio labore repudiandae? Molestiae, illum.
                    </p>
                    <button className="custom-btn">
                        Order Now
                    </button>
                </div>
                <div className="main-img">
                    <img src="images/home-img-3.png" alt="meal" />
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
    </main>
  )
}

export default Main