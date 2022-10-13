import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/MLogo3.png';
import { createButton } from "./CreateButton";

export default function CategoryNavBar() {
    const buttonStyle = "flex-1";

    function displayCategoryNavBar() {
        return (
            <div class="hidden md:flex md:flex-1 p-6 bg-blue-400"
                style={{width: "20vw", height:"100vh", flexDirection: "column", justifyContent: "right"}}>
                <Link to="/" style={{flexGrow: 1, height: "3vh"}}>
                    <img src={logo} alt="The logo - click to go to homepage" />
                </Link>
                {createButton("about", "", buttonStyle)}
                {createButton("books", "Book", buttonStyle)}
                {createButton("catalogs", "Catalog", buttonStyle)}
                {createButton("ads", "Ad Campaign", buttonStyle)}
                {createButton("other", "Other", buttonStyle)}
            </div>
        );
    }

    return displayCategoryNavBar();
}
