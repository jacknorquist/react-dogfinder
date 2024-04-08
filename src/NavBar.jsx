import React from "react";
// import "./NavBar.css";
import DogLinks from './DogLinks';

function NavBar({ dogs }) {
    return (
        <nav className="NavBar">
            {dogs.map(d => <DogLinks name={d.name} key={d.name} />)}
        </nav>
    );
}


export default NavBar;