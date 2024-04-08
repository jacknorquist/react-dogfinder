import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import dogs from './db.json';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs.dogs} />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
