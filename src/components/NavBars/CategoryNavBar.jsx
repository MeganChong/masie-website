import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assests/MLogo3.png';
import { createButton } from "./CreateButton";

export default function CategoryNavBar() {
    const data = useLocation();
    const type = data.state.type;
    const [color, setColor] = useState("");
    const buttonStyle = "flex-1";

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

    function displayCategoryNavBar() {
        return (
            <div class="hidden md:flex md:flex-1 p-6"
                style={{width: "18vw", height:"100vh", flexDirection: "column", alignItems: "end", backgroundColor: `${color}`}}>
                <Link to="/" style={{flexGrow: 1, height: "3vh", alignSelf: "flex-start"}}>
                    <img src={logo} alt="The logo - click to go to homepage" />
                </Link>
                <div style={{height: "10vh"}}></div>
                {createButton("books", "Books", buttonStyle)}
                {createButton("marketing", "Marketing", buttonStyle)}
                {createButton("events", "Events", buttonStyle)}
                {createButton("personal", "Personal", buttonStyle)}
                {createButton("about", "About", buttonStyle)}
                <div style={{height: "20vh"}}></div>
            </div>
        );
    }

    return displayCategoryNavBar();
}
