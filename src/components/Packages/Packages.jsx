import React from 'react';
import "./packages.scss";
import Package from "./Package";
const Packages = ({windowSize}) => {
  return (
    <section id='shop' className='packages' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Dishes</span>
        <h2 className='package-heading'>
        POPULAR DISHES
        </h2>
        <div className="packages-container">
            <Package image="images/dish-1.png"/>
            <Package image="images/dish-2.png"/>
            <Package image="images/dish-3.png"/>
            <Package image="images/dish-4.png"/>
            <Package image="images/dish-5.png"/>
            <Package image="images/dish-6.png"/>
        </div>
    </section>
  )
}

export default Packages