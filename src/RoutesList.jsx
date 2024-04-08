import './App.css';
import { Route } from "react-router-dom";
import DogList from './DogList'



function RoutesList() {
    return (
        <div>
            <Route path="/list" element={<DogList />} />
            <Route path="/dogs/:name" element={<DogDetails />} />
            <Route path="/" element={<DogList />} />
        </div>
    );
}


export default RoutesList;