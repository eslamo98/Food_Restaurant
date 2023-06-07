import React from 'react'
import img from "./loader.gif";
import './loader.scss';

const Loader = () => {
  return (
    <div className='loader'><img src={img} alt="" /></div>
  )
}


export default Loader