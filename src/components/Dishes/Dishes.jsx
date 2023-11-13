import {useEffect, useState} from 'react';
import axios from 'axios';
import "./dishes.scss";
import img1 from './images/menu-1.jpg';
import img2 from './images/menu-2.jpg';
import img3 from './images/menu-3.jpg';
import img4 from './images/menu-4.jpg';
import img5 from './images/menu-5.jpg';
import img6 from './images/menu-6.jpg';
import img7 from './images/menu-7.jpg';
import img8 from './images/menu-8.jpg';
import img9 from './images/menu-9.jpg';
import Dish from "./Dish";
import Loader from '../Loader/Loader';

const Dishes = ({windowSize}) => {
  const [popMeals, setPopMeals] = useState([]);

  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
  .then(response => {
    console.log(response.data.meals)
    setPopMeals(response.data.meals.slice(0, 9))
})
  
  .catch(error => console.log('error', error));
},[]);


  return (
    <section id='dishes' className='dishes' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Menu</span>
        <h2 className='package-heading'>
          TODAY'S SPECIALITY
        </h2>
        <div className="dishes-container">
        {popMeals.length == 0 ? <div style={{margin: "atuo"}}><Loader /></div> : popMeals.map(meal => (
            <Dish key={meal.idMeal} image={meal.strMealThumb} meal={meal}/>
          ))}
        </div>
    </section>
  )
}

export default Dishes
