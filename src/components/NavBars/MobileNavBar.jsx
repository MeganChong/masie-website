import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/Logo.png';
import { createButton } from "./CreateButton";

export default function MobileNavBar() {
    const [openToggle, setToggle] = useState(false);
    const buttonStyle = "flex-1 text-center bg-white";

    function displayMobileBar() {
        if (openToggle) {
            return (
                <div class="block w-full items-center">
                    <div class="block text-center w-full"><Link to="/" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">HOME</button></Link></div>
                    <div class="block text-center w-full">{createButton("books", "Books", buttonStyle, {})}</div>
                    <div class="block text-center w-full">{createButton("marketing", "Marketing", buttonStyle, {})}</div>
                    <div class="block text-center w-full">{createButton("events", "Events", buttonStyle, {})}</div>
                    <div class="block text-center w-full">{createButton("personal", "Personal", buttonStyle, {})}</div>
                    <div class="block text-center w-full">{createButton("about", "About", buttonStyle, {})}</div>
                </div>
            );
        }
    }

    function displayMobileIcon() {
        return (
            <div class="block md:hidden justify-self-center text-center">
                <img src={logo} alt="the logo- open for menu" class="mx-auto" onClick={() => {setToggle(!openToggle)}}/>
                {displayMobileBar()}
            </div>
        );
    }

    return displayMobileIcon();
}
