import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Package = ({image}) => {
  return (
    <div className='package'>
        <a href='#' className="see-package">
          <FontAwesomeIcon icon={faEye} />
        </a>
        <a href='#' className="love-package">
          <FontAwesomeIcon icon={faHeart} />
        </a>
        <img src={image} alt="image" />
        <span className="package-name">Tasty Food</span>
        <span className="package-details">Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit. Numquam, Eos.</span>
        <div className="package-rating">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfAlt} />
        </div>
        <span className="package-price">$250 - $450</span>
        <a href="#" className='custom-btn package-btn'>Learn More</a>

    </div>
  )
}

export default Package