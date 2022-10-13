import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/MLogo3.png';
import { createButton } from "./CreateButton";

export default function MobileNavBar() {
    const [openToggle, setToggle] = useState(false);
    const buttonStyle = "flex-1 text-center bg-white";

    function displayMobileBar() {
        if (openToggle) {
            return (
                <div class="block w-full items-center">
                    <div class="block text-center w-full"><Link to="/" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">HOME</button></Link></div>
                    <div class="block text-center w-full">{createButton("about", "", buttonStyle)}</div>
                    <div class="block text-center w-full">{createButton("books", "Book", buttonStyle)}</div>
                    <div class="block text-center w-full">{createButton("catalogs", "Catalog", buttonStyle)}</div>
                    <div class="block text-center w-full">{createButton("ads", "Ad Campaign", buttonStyle)}</div>
                    <div class="block text-center w-full">{createButton("other", "Other", buttonStyle)}</div>
                </div>
            );
        }
    }

    function displayMobileIcon() {
        return (
            <div class="block pl:20 md:hidden justify-self-center">
                <img src={logo} alt="the logo- open for menu" class="mx-auto" onClick={() => {setToggle(!openToggle)}}/>
                {displayMobileBar()}
            </div>
        );
    }

    function display() {
        return (
            <div class="sticky top-0 z-50
                bg-white
                text-black 
                min-w-full p-4 pl-8 content-center">
                {displayMobileIcon()}
            </div>
        );
    }

    return display();
}
