import React, { useEffect,useState, useContext } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import {context} from "../../global";


import './result.scss';
import Loader from '../Loader/Loader';

const Results = ({search}) => {
    const { setState } = useContext(context);
    
    const [results, setResults] = useState([]);
    useEffect(()=>{
        if(search.trim().length === 1){
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(response => {
            const data = response.data.meals;
            if(Array.isArray(data)){
          setResults(response.data.meals)
            } else {
                setResults({});
            }
        });
    }else {

        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`)
        .then(response => {
            const data = response.data.meals;
            if(Array.isArray(data)){
          setResults(response.data.meals)
            } else {
                setResults({});
            }
        });

    }
        
    },[search]);
    if(results.length == 0) return <Loader />;
    if(!Array.isArray(results)) return (<div className="no-results">
        <span>No Results found</span>
        <a href="/Food_Restaurant" className='custom-btn'>Return Home</a>
    </div>)
  return (
    <div className='results'>
        {results.map((result,index)=>(
            <div className="result" key={index}>
                <img width="100" src={result.strMealThumb} alt="meal" />
                <span className="result_name">{result.strMeal}</span>
                <Link onClick={()=>{
                    setState(result.idMeal)}} to={`/Food_Restaurant/${result.idMeal}`} className="custom-btn">
                    More details
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Results