import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assests/MLogo3.png';

export default function NavBar(props) {
    function createButton(path, type) {
        return (
            <Link
                to={{
                    pathname:`/${path}`,
                    state: {type: `${type}`}
                }}
                class="flex-1 text-center mt-0"
            >
                <button class="uppercase text-navBar hover:text-purple-500">{path}</button>
            </Link>
        );
    }

    function displayInfoBar() {
        return (
            <div class="hidden md:flex md:flex-1 justify-center items-center z-20 text-black absolute min-w-full">
                <Link to="/" style={{flexGrow: 4, height: "5vw"}}>
                    <img src={logo} alt="The logo - click to go to homepage" style={{marginTop: "5vh", marginLeft: "5vh"}}/>
                </Link>
                <Link to="/about" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">ABOUT</button></Link>
                {createButton("books", "Book")}
                {createButton("catalogs", "Catalog")}
                {createButton("ads", "Ad Campaign")}
                {createButton("other", "Other")}
            </div>
        );
    }

    return displayInfoBar();
}
