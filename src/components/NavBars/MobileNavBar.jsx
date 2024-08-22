import React, { useState } from "react";
import { Link } from "react-router-dom";
import {default as logo} from '../../assests/LogoDark.svg';
import { createButton } from "./CreateButton";

export default function MobileNavBar() {
    const [openToggle, setToggle] = useState(false);
    const buttonStyle = "";

    function displayMobileBar() {
        if (openToggle) {
            return (
                <div class="flex flex-col mx-auto ml-1 items-center w-full mt-6">
                    <Link to="/"><button class="hover:text-purple-500 text-navBar">HOME</button></Link>
                    {createButton("books", "Books", buttonStyle, {})}
                    {createButton("marketing", "Marketing", buttonStyle, {})}
                    {createButton("events", "Events", buttonStyle, {})}
                    {createButton("personal", "Personal", buttonStyle, {})}
                    {createButton("about", "About", buttonStyle, {})}
                </div>
            );
        }
    }

    function displayMobileIcon() {
        return (
            <div class="flex flex-col md:hidden justify-items-center">
                <img className="w-[15%] mx-auto mt-2" src={logo} alt="the logo- open for menu" onClick={() => {setToggle(!openToggle)}}/>
                {displayMobileBar()}
            </div>
        );
    }

    return displayMobileIcon();
}
