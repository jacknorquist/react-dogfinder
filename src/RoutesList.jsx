import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from './DogList'
import DogDetails from './DogDetails'
import dogs from './db.json';



function RoutesList() {
    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs.dogs} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs.dogs}/>} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    );
}


export default RoutesList;