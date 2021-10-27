import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assests/MLogo3.png';

export default function NavBar(props) {
    const [openToggle, setToggle] = useState(false);

    function createButton(path, type) {
        return (
            <Link
                to={{
                    pathname:`/${path}`,
                    state: {type: `${type}`}
                }}
                class="flex-1 text-center bg-white"
            >
                <button class="uppercase text-navBar hover:text-purple-500">{path}</button>
            </Link>
        );
    }

    function displayHomeIcon() {
        if (props.show)
            return <Link to="/" class="bg-white"><img src={logo} alt="The logo - click to go to homepage"/></Link>;
    }

    function displayWebBar() {
        return (
            <div class="hidden md:flex md:flex-1 justify-center items-center">
                {displayHomeIcon()}
                <Link to="/about" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">ABOUT</button></Link>
                {createButton("books", "Book")}
                {createButton("catalogs", "Catalog")}
                {createButton("ads", "Ad Campaign")}
                {createButton("other", "Other")}
            </div>
        );
    }

    function displayMobileBar() {
        if (openToggle) {
            return (
                <div class="block w-full items-center">
                    <div class="block text-center w-full"><Link to="/" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">HOME</button></Link></div>
                    <div class="block text-center w-full"><Link to="/about" class="flex-1 text-center"><button class="hover:text-purple-500 text-navBar">ABOUT</button></Link></div>
                    <div class="block text-center w-full">{createButton("books", "Book")}</div>
                    <div class="block text-center w-full">{createButton("catalogs", "Catalog")}</div>
                    <div class="block text-center w-full">{createButton("ads", "Ad Campaign")}</div>
                    <div class="block text-center w-full">{createButton("other", "Other")}</div>
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

    return (
        <div class="sticky top-0 z-50
                    bg-white
                    text-black 
                    min-w-full p-4 pl-8 content-center">
            {displayWebBar()}
            {displayMobileIcon()}
        </div>
    );
}
