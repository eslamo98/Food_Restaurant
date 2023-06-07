import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast, faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons'
import img from "./about-img.png";
import "./about.scss";
const About = ({windowSize}) => {
  return (
    <section className="about-us"  id='about'
    style={{padding: windowSize > 1200 ? "5rem 9% 5rem 9%" : "5rem 1rem 5rem 1rem"}}>
        <span className="our-dishes">About Us</span>
        <h2 className='about-heading'>
        WHY CHOOSE US?
        </h2>
        <div className="about-container">
            <div className="about-img">
                <img src={img} alt="about" />
            </div>
            <div className="about-details">
                <span className="about-details-heading">
                Best Food In The Country
                </span>
                <p className="about-content">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!

                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.
                </p>
                <div className="about-icons">
                    <span className="delivery">
                        <FontAwesomeIcon icon={faShippingFast} />
                        <span className="icon-text">
                            Free Delivery
                        </span>
                    </span>
                    <span className="payments">
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span className="icon-text">
                            Easy Payments
                        </span>
                    </span>
                    <span className="service">
                        <FontAwesomeIcon icon={faHeadset} />
                        <span className="icon-text">
                            24/7 Service
                        </span>
                    </span>
                </div>
                <a href="#" className='custom-btn about-btn'>Learn More</a>
            </div>
        </div>
    </section>
  )
}

export default About