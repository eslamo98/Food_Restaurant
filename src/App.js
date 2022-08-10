import React from 'react';
import { Navbar, Main, Packages, About, Dishes, Reviews, OrderForm, Footer } from "./components"
import "./App.scss"
function App() {
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);
  return (
    <div className="App">
      <Navbar windowSize={windowSize} setWindowSize={setWindowSize} />
      <Main windowSize={windowSize} setWindowSize={setWindowSize} />
      <Packages windowSize={windowSize} setWindowSize={setWindowSize} />
      <About windowSize={windowSize} />
      <Dishes windowSize={windowSize} />
      <Reviews windowSize={windowSize} />
      <OrderForm />
      <Footer windowSize={windowSize} />

    </div>
  );

}

export default App;
