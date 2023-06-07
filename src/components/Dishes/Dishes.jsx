import React from 'react';
import "./dishes.scss";
import img1 from './images/menu-1.jpg';
import img2 from './images/menu-2.jpg';
import img3 from './images/menu-3.jpg';
import img4 from './images/menu-4.jpg';
import img5 from './images/menu-5.jpg';
import img6 from './images/menu-6.jpg';
import img7 from './images/menu-7.jpg';
import img8 from './images/menu-8.jpg';
import img9 from './images/menu-9.jpg';
import Dish from "./Dish";
const Dishes = ({windowSize}) => {
  
  return (
    <section id='dishes' className='dishes' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Menu</span>
        <h2 className='package-heading'>
          TODAY'S SPECIALITY
        </h2>
        <div className="dishes-container">
            <Dish image={img1}/>
            <Dish image={img2}/>
            <Dish image={img3}/>
            <Dish image={img4}/>
            <Dish image={img5}/>
            <Dish image={img6}/>
            <Dish image={img7}/>
            <Dish image={img8}/>
            <Dish image={img9}/>
        </div>
    </section>
  )
}

export default Dishes