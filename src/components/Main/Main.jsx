import React, {useState, useEffect, useContext} from 'react'
import { Pagination } from 'swiper';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import {context} from "../../global";
import Loader from '../Loader/Loader';
import axios from 'axios';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "./main.scss"



const Main = ({windowSize, setWindowSize}) => {
    const { state, setState } = useContext(context);

    const [meals, setMals] = useState([]);
    window.onresize = () => {
        setWindowSize(window.innerWidth)
    }

useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  .then(response => {
    setMals(response.data.meals)
})
  
  .catch(error => console.log('error', error));
},[]);

if(!meals.length) return <Loader />
  return (

    <main id="main" style={{padding: windowSize > 1200 ? "8rem 9% 0 9%" : "8rem 1rem 0 1rem"}}>
        <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop
        >
            {meals.map(((meal,index)=>(
                <SwiperSlide key={index}>
                    <div className={`slide_${index + 1} slide`}> 
                    <div className="slide-content">
                        <span className='slide_title'>our special dish</span>
                        <span className='slide_name'>{meal.strMeal}</span>
                        <p className="slide-details">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, omnis quasi ab corrupti, rerum debitis fugiat natus cum eius modi praesentium. Ipsum, animi. At atque vero, eius laborum dignissimos rem.
                        </p>
                        <Link onClick={()=>{
                            console.log(meal.idMeal);
                            setState(meal.idMeal)}} to={`${meal.idMeal}`} className="custom-btn">
                            More details
                        </Link>
                    </div>
                    <div className="main-img">
                        <img src={meal.strMealThumb} alt="meal" />
                    </div>
                </div>
                </SwiperSlide>
            )))}
       
        {/* <SwiperSlide>
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
                        <img src={img} alt="meal" />
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
                    <img src={img2} alt="meal" />
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
                    <img src={img3} alt="meal" />
                </div>
            </div>
        </SwiperSlide> */}
    </Swiper>
    </main>
  )
}

export default Main