import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assests/MLogo3.png';

export default function CategoryNavBar(props) {
    function createButton(path, type) {
        return (
            <Link
                to={{
                    pathname:`/${path}`,
                    state: {type: `${type}`}
                }}
                class="flex-1"
            >
                <button class="uppercase text-navBar hover:text-purple-500">{path}</button>
            </Link>
        );
    }

    function displayCategoryNavBar() {
        return (
            <div class="hidden md:flex md:flex-1 p-6 bg-blue-400"
                style={{width: "20vw", height:"100vh", flexDirection: "column", justifyContent: "right"}}>
                <Link to="/" style={{flexGrow: 1, height: "3vh"}}>
                    <img src={logo} alt="The logo - click to go to homepage" />
                </Link>
                <Link to="/about" class="flex-1"><button class="hover:text-purple-500 text-navBar">ABOUT</button></Link>
                {createButton("books", "Book")}
                {createButton("catalogs", "Catalog")}
                {createButton("ads", "Ad Campaign")}
                {createButton("other", "Other")}
            </div>
        );
    }

    return displayCategoryNavBar();
}
