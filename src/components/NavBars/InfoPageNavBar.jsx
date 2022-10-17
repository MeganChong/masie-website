import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/Logo.png';
import { createButton } from "./CreateButton";

export default function InfoPageNavBar() {
    const buttonStyle = "flex-1 text-center m-3 mt-14";
    const fontStyle = {fontSize: "12px", letterSpacing: "6px"};

    function displayInfoBar() {
        return (
            <div class="hidden md:flex md:flex-1 justify-center items-center z-20 text-black absolute min-w-full">
                <Link to="/" style={{flexGrow: 4, height: "5vw"}}>
                    <img src={logo} alt="The logo - click to go to homepage" style={{marginTop: "5vh", marginLeft: "5vh"}}/>
                </Link>
                <div class="mr-10 mt-5 text-white">
                    {createButton("books", "Books", buttonStyle, fontStyle)}
                    {createButton("marketing", "Marketing", buttonStyle, fontStyle)}
                    {createButton("events", "Events", buttonStyle, fontStyle)}
                    {createButton("personal", "Personal", buttonStyle, fontStyle)}
                    {createButton("about", "About", buttonStyle, fontStyle)}
                </div>
            </div>
        );
    }

    return displayInfoBar();
}
