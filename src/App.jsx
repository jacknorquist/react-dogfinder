import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import { useState } from 'react';
import dogs from '../db.json';


/**
 * Site Appliation for showing dogs
 *
 * state: dogs, isLoaded
 * props: none
 *
 * App --> DogList --> DogDetails
 */

function App() {

  const [dogs, setDogs] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  /** makes an AJAX request, fetches dog info */
  async function getDogs() {
    const result = await fetch('http://localhost:5001/dogs');
    const resultJson = await result.json();

    setDogs(resultJson);
    setIsLoaded(true);
  }

  if (!isLoaded) getDogs();

  return (
    <div className="App">
      {isLoaded
        ? <BrowserRouter>
          <NavBar dogs={dogs} />
          <RoutesList dogs={dogs} getDogs={getDogs}/>
         </BrowserRouter>
        : <h2>Loading...</h2>
    }
    </div>
  );
}

export default App;
