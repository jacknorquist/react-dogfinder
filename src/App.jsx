import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoutesList from './RoutesList';
import NavBar from './NavBar';
import dogs from './db.json';


function App() {
  console.log(dogs.dogs);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar dogs={dogs.dogs} />
        <Routes>
          <RoutesList />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
