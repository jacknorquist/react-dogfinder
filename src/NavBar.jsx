import React from "react";
import { Link } from "react-router-dom";


/**
 * Has a link to each dog + homempage
 *
 * props: dogs (array of dog objects)
 * state: none
 *
 * App --> NavBar
 */

function NavBar({ dogs }) {
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