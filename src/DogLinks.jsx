import { Link } from "react-router-dom";
import React from "react";

function DogLinks({ name }) {
    return (
        <div>
            <Link to={`/dogs/${name}`}>{name}</Link>
        </div>

    );
}

export default DogLinks;