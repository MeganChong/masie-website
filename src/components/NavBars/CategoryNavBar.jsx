import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from '../../assests/LogoDark.png';
import { createButton } from "./CreateButton";

export default function CategoryNavBar() {
    const data = useLocation();
    const type = data.state.type;
    const [color, setColor] = useState("");
    const [bottomHeight, setBottomHeight] = useState("25%");
    const buttonStyle = "flex-1 ml-2";

    useEffect(() => {
        if (type === "Books") {
            setColor("#ffbf4");
            setBottomHeight("40%");
        }
        else if (type === "Marketing") {
            setColor("#f6dff");
            setBottomHeight("40%");
        }
        else if (type === "Events") {
            setColor("#fdc712");
            setBottomHeight("55%");
        }
        else if (type === "Personal") {
            setColor("#bfedf8");
        }
        else {
            setColor("#d4ffd4");
            setBottomHeight("55%");
        }
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
                <div style={{height: `${bottomHeight}`}}></div>
            </div>
        );
    }

    return displayCategoryNavBar();
}
