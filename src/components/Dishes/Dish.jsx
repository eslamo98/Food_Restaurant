import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Dish = ({image, meal}) => {
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
        <span className="dish-name">{meal.strMeal}</span>
        <span className="dish-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        
        <span className="dish-price">$250 - $450</span>
        <Link 
             to={`${meal.idMeal}`} className="custom-btn dish-btn">
            More details
        </Link>

    </div>
  )
}

export default Dish
