import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/MLogo3.png';
import InfoPageNavBar from "./InfoPageNavBar";
import CategoryNavBar from "./CategoryNavBar";
import MobileNavBar from "./MobileNavBar";
import {createButton} from "./CreateButton";

export default function NavBar(props) {
    const buttonStyle = "flex-1 text-center bg-white";

    function displayHomeIcon() {
        if (props.show)
            return <Link to="/" class="bg-white"><img src={logo} alt="The logo - click to go to homepage"/></Link>;
    }

    function displayWebBar() {
        return (
            <div class="hidden md:flex md:flex-1 justify-center items-center">
                {displayHomeIcon()}
                {createButton("about", "", buttonStyle)}
                {createButton("books", "Book", buttonStyle)}
                {createButton("catalogs", "Catalog", buttonStyle)}
                {createButton("ads", "Ad Campaign", buttonStyle)}
                {createButton("other", "Other", buttonStyle)}
            </div>
        );
    }

    function getNavBar() {
        if (props.displayType === "category") {
            return <CategoryNavBar/>;
        }
        else if (props.displayType === "info") {
            return <InfoPageNavBar/>;
        }
        else {
            return (
                <div class="sticky top-0 z-50
                     bg-white
                     text-black 
                     min-w-full p-4 pl-8 content-center">
                    {displayWebBar()}
                </div>
            );
        }
    }

    function display() {
        return (
            <div>
                {getNavBar()}
                <div class="md:hidden sticky top-0 z-50
                     bg-white
                     text-black 
                     min-w-full p-4 pl-8 content-center">
                    <MobileNavBar/>
                </div>
            </div>
        )
    }

    return display();
}
