import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Dish = ({image}) => {
  return (
    <div className='dish'>
        <a href='#' className="love-dish">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <div className="dish-img">
        <img src={image} alt="image" />
        </div>
        <div className="dish-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </div>
        <span className="dish-name">Tasty Food</span>
        <span className="dish-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        
        <span className="dish-price">$250 - $450</span>
        <a href="#" className='custom-btn dish-btn'>Learn More</a>

    </div>
  )
}

export default Dish