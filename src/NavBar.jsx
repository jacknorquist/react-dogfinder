import React from "react";
import { Link } from "react-router-dom";

function NavBar({ dogs }) {
    console.log(dogs);
    return (
        <div>
            <Link to="/">Home</Link>
            <nav className="NavBar">
                {dogs.map((d, i) => <Link to={`/dogs/${d.name}`} key={i}>{d.name}</Link>)}
            </nav>
        </div>
    );
}


export default NavBar;