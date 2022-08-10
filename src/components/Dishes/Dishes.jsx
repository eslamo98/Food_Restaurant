import React from 'react';
import "./dishes.scss";
import Dish from "./Dish";
const Dishes = ({windowSize}) => {
  return (
    <section id='dishes' className='dishes' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Menu</span>
        <h2 className='package-heading'>
          TODAY'S SPECIALITY
        </h2>
        <div className="dishes-container">
            <Dish image="images/menu-1.jpg"/>
            <Dish image="images/menu-2.jpg"/>
            <Dish image="images/menu-3.jpg"/>
            <Dish image="images/menu-4.jpg"/>
            <Dish image="images/menu-5.jpg"/>
            <Dish image="images/menu-6.jpg"/>
            <Dish image="images/menu-7.jpg"/>
            <Dish image="images/menu-8.jpg"/>
            <Dish image="images/menu-9.jpg"/>
        </div>
    </section>
  )
}

export default Dishes