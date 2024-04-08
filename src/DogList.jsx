import { Link } from "react-router-dom";
import React from "react";
import RoutesList from "./RoutesList";


/**
 * Shows list of all dogs in the shelter
 *
 * props: dogs (array of dog objects)
 * state: none
 *
 * App --> DogList --> DogDetails
 */


function DogList({ dogs }) {
    return (

        <div>
            <h1>The most adorable dogs</h1>
            <h1>Looking for their forever home</h1>
            <h5>(Click their name for more info)</h5>
            {dogs.map(d =>
                <div key={d.name}>
                    <h3>Name: <Link to={`/dogs/${d.name}`}>{d.name}</Link> </h3>
                    <img src={`/${d.src}.jpg`} />
                    <p>{d.age} years young!</p>
                </div>)}
        </div>

    );
}

export default DogList;
