import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight,faStar,faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'


const Review = ({image}) => {
  return (
    <div className='review'>
        <div className="review-body">
        <div className="review-writer">
            <img className='writer-img' src={image} alt="person" />
            <div className="writer-info">
                <span className="writer-name">Jhon Doe</span>
                <span className="writer-title">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </span>
            </div>
            <div className="qoutes">
              <FontAwesomeIcon icon={faQuoteRight} />
            </div>
        </div>
            <p className='review-content'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem voluptas, soluta dolores quis molestiae ratione adipisci, dignissimos placeat nobis, sapiente quia nam non? Ducimus facilis error, ad obcaecati minus officiis?</p>
        </div>
        
    </div>
  )
}

export default Review