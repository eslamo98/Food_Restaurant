import {useEffect, useState} from 'react';
import axios from 'axios';
import "./packages.scss";
import img1 from "./images/dish-1.png";
import img2 from "./images/dish-2.png";
import img3 from "./images/dish-3.png";
import img4 from "./images/dish-4.png";
import img5 from "./images/dish-5.png";
import img6 from "./images/dish-6.png";
import Package from "./Package";
import Loader from '../Loader/Loader';

const Packages = ({windowSize}) => {
  const [popMeals, setPopMeals] = useState([]);

  useEffect(()=>{
    axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
  .then(response => {
    
    setPopMeals(response.data.meals.slice(4, 10))
})
  
  .catch(error => console.log('error', error));
},[]);

console.log(popMeals);
  
  return (
    <section id='shop' className='packages' style={{padding: windowSize > 1200 ? "5rem 9%" : "5rem 1rem"}}>
      <span className="our-dishes">Our Dishes</span>
        <h2 className='package-heading'>
        POPULAR DISHES
        </h2>
        <div className="packages-container">
       
          {popMeals.length == 0 ? <div style={{margin: "atuo"}}><Loader /></div> : popMeals.map(meal => (
            <Package key={meal.idMeal} image={meal.strMealThumb} meal={meal}/>
          ))}
            
        </div>
    </section>
  )
}

export default Packages
