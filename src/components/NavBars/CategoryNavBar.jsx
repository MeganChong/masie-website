import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assests/old/MLogo3.png';
import { createButton } from "./CreateButton";

export default function CategoryNavBar() {
    const data = useLocation();
    const type = data.state.type;
    const [color, setColor] = useState("");
    const buttonStyle = "flex-1 ml-2";

    useEffect(() => {
        if (type === "Books")
            setColor("#e0aefc");
        else if (type === "Marketing") 
            setColor("#a2bcf5");
        else if (type === "Events")
            setColor("#fff01c");
        else if (type === "Personal")
            setColor("#ffcff9");
        else    
            setColor("#d4ffd4");
    }, [type]);

    function button(path, item) {
        if (type === item) {
            return createButton(path, item, buttonStyle, {fontWeight: "bolder", fontSize: "16px"});
        }
        else {
            return createButton(path, item, buttonStyle, {});
        }
    }

    function displayCategoryNavBar() {
        return (
            <div class="hidden md:flex md:flex-1 p-6"
                style={{width: "18vw", minWidth: "fit-content", height:"100%", flexDirection: "column", alignItems: "flex-start", backgroundColor: `${color}`}}>
                <Link to="/" style={{flexGrow: 1, height: "3vh"}}>
                    <img src={logo} alt="The logo - click to go to homepage" />
                </Link>
                <div style={{height: "11vh"}}></div>
                {button("books", "Books")}
                {button("marketing", "Marketing")}
                {button("events", "Events")}
                {button("personal", "Personal")}
                {button("about", "About")}
                <div style={{height: "21vh"}}></div>
            </div>
        );
    }

    return displayCategoryNavBar();
}
