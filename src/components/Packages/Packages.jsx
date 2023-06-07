import React from 'react';
import "./packages.scss";
import img1 from "./images/dish-1.png";
import img2 from "./images/dish-2.png";
import img3 from "./images/dish-3.png";
import img4 from "./images/dish-4.png";
import img5 from "./images/dish-5.png";
import img6 from "./images/dish-6.png";
import Package from "./Package";

const Packages = ({windowSize}) => {
  return (
    <section id='shop' className='packages' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Dishes</span>
        <h2 className='package-heading'>
        POPULAR DISHES
        </h2>
        <div className="packages-container">
            <Package image={img1}/>
            <Package image={img2}/>
            <Package image={img3}/>
            <Package image={img4}/>
            <Package image={img6}/>
            <Package image={img6}/>
        </div>
    </section>
  )
}

export default Packages