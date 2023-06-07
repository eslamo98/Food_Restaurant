import React from 'react'
import Main from '../Main/Main';
import Packages from '../Packages/Packages';
import About from '../About/About';
import Dishes from '../Dishes/Dishes';
import Reviews from '../Reviews/Reviews';
import OrderForm from '../OrderForm/OrderForm';
const Home = ({windowSize, setWindowSize}) => {
    
  return (
    <>
        <Main windowSize={windowSize} setWindowSize={setWindowSize} />
        <Packages windowSize={windowSize} setWindowSize={setWindowSize} />
        <About windowSize={windowSize} />
        <Dishes windowSize={windowSize} />
        <Reviews windowSize={windowSize} />
        <OrderForm />
    </>
  )
}

export default Home