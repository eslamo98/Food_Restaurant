import React, {useEffect} from 'react'
import Review from "./Review";
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./reviews.scss"
const Reviews = ({windowSize}) => {
    const [numOfReviews, setNumOfReviews]=React.useState(3);
  
    useEffect(() => {
      if(windowSize > 912) {
        setNumOfReviews(3)
      } else if(windowSize < 912 && windowSize > 620) {
        setNumOfReviews(2)
      }  else {
        setNumOfReviews(1)
      }
    
      
    }, [windowSize])

  return (
    <section id='Reviews' className="reviews" style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
        <span className="our-clients">
        Customer's Review
        </span>
        <h2 className="reviews-heading">
        WHAT THEY SAY
        </h2>
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={numOfReviews}
        autoplay
        spaceBetween={15}
        loop

        >
            <SwiperSlide>
                <Review image="images/pic-1.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-2.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-3.png"/>
            </SwiperSlide>
            <SwiperSlide>
                <Review image="images/pic-4.png"/>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Reviews