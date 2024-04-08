import { Link } from "react-router-dom";
import React from "react";
import makeFetch from "./helper";





function DogList({ dogs }) {

    return (

        <div>
            <h1>DogList</h1>
            {dogs.map((d, i) =>
                <div key={i}>
                    <h3>Name: <Link to={`/dogs/${d.name}`}>{d.name}</Link> </h3>
                    <img src={`${d.src}.jpg`} />
                    <p>{d.age} years young!</p>
                </div>)}
        </div>

    );
}

export default DogList;
