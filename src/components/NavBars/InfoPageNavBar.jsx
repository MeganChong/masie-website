import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/MLogo3.png';
import { createButton } from "./CreateButton";

export default function InfoPageNavBar() {
    const buttonStyle = "flex-1 text-center m-3";

    function displayInfoBar() {
        return (
            <div class="hidden md:flex md:flex-1 justify-center items-center z-20 text-black absolute min-w-full">
                <Link to="/" style={{flexGrow: 4, height: "5vw"}}>
                    <img src={logo} alt="The logo - click to go to homepage" style={{marginTop: "5vh", marginLeft: "5vh"}}/>
                </Link>
                {createButton("books", "Books", buttonStyle)}
                {createButton("marketing", "Marketing", buttonStyle)}
                {createButton("events", "Events", buttonStyle)}
                {createButton("personal", "Personal", buttonStyle)}
                {createButton("about", "About", buttonStyle)}
            </div>
        );
    }

    return displayInfoBar();
}
