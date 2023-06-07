import React, { useContext } from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import { Home, Navbar, Footer } from "./components"
import MealDetails from './components/MealDeatails/MealDetails';
import { context } from "./global";
import "./App.scss"
import Results from './components/Results/Results';


function App() {
  const { state, userInput } = useContext(context);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  return (
    <div className="App">
      <Navbar windowSize={windowSize} setWindowSize={setWindowSize} />

      <Router>
        <Link id="link" to="/Food_Restaurant/result" style={{ display: "none" }}>Result</Link>

        <Routes>
          <Route path='/Food_Restaurant' index element={<Home windowSize={windowSize} setWindowSize={setWindowSize} />} />
          <Route path='/Food_Restaurant/:mealId' element={<MealDetails id={state} windowSize={windowSize} />} />
          <Route path='/Food_Restaurant/result' element={<Results search={userInput} />} />
        </Routes>
      </Router>
      <Footer windowSize={windowSize} />

    </div>
  );

}

export default App;
