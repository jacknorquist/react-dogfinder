import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import './App.css';


/**
 * Has a link to each dog + homempage
 *
 * props: dogs (array of dog objects)
 * state: none
 *
 * App --> NavBar
 */

function NavBar({ dogs }) {
    const [activeLink, setActiveLink] = useState(null);

    function onClick(evt) {
        evt.preventDefault();
        setActiveLink(evt.target.id);
    };
    return (
        <div>
            <Link id="Home" className={activeLink === 'Home' ? "activeLink" : "link"} to="/" onClick={onClick}>Home</Link>
            <nav className="NavBar">
                {dogs.map((d, i) => <Link
                    className={d.name === activeLink ? "activeLink" : "link"}
                    to={`/dogs/${d.name}`}
                    onClick={onClick}
                    key={d.name}
                    id={d.name}>{d.name}</Link>)}
            </nav>
        </div>
    );
}


export default NavBar;