import React, {useState, useEffect} from 'react';
import Loader from '../Loader/Loader';
import axios from 'axios';
import "./about.scss";

const MealDetails = ({id, windowSize}) => {
    const [meal, setMeal] = useState({});

    useEffect(()=>{
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`).then(res=>{
        setMeal(res.data.meals[0])
        console.log(res.data.meals[0]);
      });
    },[]);
      
  
    const ingredients = Object.keys(meal).filter((element)=>{
      return element.indexOf("strIngredient") ==0;
});

if(!Object.keys(meal).length) return <Loader />
    
  return (
    <section className="about-us"  id='about'
    style={{padding: windowSize > 1200 ? "5rem 9% 5rem 9%" : "5rem 1rem 5rem 1rem"}}>
        <span className="our-dishes">About</span>
        <h2 className='about-heading'>
        {meal.strMeal}
        </h2>
        <div className="about-container">
            <div className="about-img">
                <img src={meal.strMealThumb} alt="meal" />
            </div>
            <div className="about-details">
                <span className="about-details-heading">
                Best Food In The Country
                </span>
                <p className="about-content">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Dolore, Sequi Corrupti Corporis Quaerat Voluptatem Ipsam Neque Labore Modi Autem, Saepe Numquam Quod Reprehenderit Rem? Tempora Aut Soluta Odio Corporis Nihil!

                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Aperiam, Nemo. Sit Porro Illo Eos Cumque Deleniti Iste Alias, Eum Natus.
                </p>
                <div className="how-to-make">
                  How to make {meal.strMeal}
                </div>
                <p>
                  {meal.strInstructions}
                </p>
                
                <a href={meal.strYoutube} target='_blank' className='custom-btn about-btn'>See on Youtube</a>
            </div>
        </div>
        <div className="how-to-make">
          Ingredients
        </div>
        
        <div className="about-ingrednts">
            {ingredients.map((ingredient,index)=>{
              return meal[ingredient] ? (<span key={index} className="delivery">
              <span className="icon-text">
                  {meal[ingredient]}
              </span>
          </span>) : "";
            })}      
        </div>
    </section>
  )
}

export default MealDetails