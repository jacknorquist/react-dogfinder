import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import { useState } from 'react';
import dogs from '../db.json';


function App() {

  const [dogs, setDogs] = useState();


  async function getDogs() {
    const result = await fetch('http://localhost:5001/dogs');
    const resultJson = await result.json();

    setDogs(resultJson);
    console.log('json call', resultJson);
    return resultJson;
  }
  console.log(getDogs());
  console.log('dogs after call', dogs);


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={getDogs()} />
        <RoutesList dog={dogs} />
      </BrowserRouter>
    </div>
  );
}

export default App;
