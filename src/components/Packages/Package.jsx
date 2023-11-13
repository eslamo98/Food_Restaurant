import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


const Package = ({image, meal}) => {
  return (
    <div className='package'>
        <a href='#' className="see-package">
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a href='#' className="love-package">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <img src={image} alt="image" />
        <span className="package-name">{meal.strMeal}</span>
        <span className="package-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        <div className="package-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </div>
        <span className="package-price">$250 - $450</span>
        <Link 
             to={`${meal.idMeal}`} className="custom-btn package-btn">
            More details
        </Link>

    </div>
  )
}

export default Package
