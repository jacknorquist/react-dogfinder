import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import DogList from './DogList';
import DogDetails from './DogDetails';
import dogs from '../db.json';
import makeFetch from './helper';

/**
 * Routes for app
 * App --> Routes
 */

function RoutesList({ dogs }) {
    return (
        <Routes>
            <Route path="/dogs" element={<DogList dogs={dogs} />} />
            <Route path="/dogs/:name" element={<DogDetails dogs={dogs}/>} />
            <Route path="*" element={<Navigate to="/dogs" />} />
        </Routes>
    );
}


export default RoutesList;