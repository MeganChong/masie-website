import React from "react";
import { Link } from "react-router-dom";
import darkLogo from '../../assests/LogoDark.png';
import lightLogo from '../../assests/LogoWhite.png';
import { createButton } from "./CreateButton";
import Color from 'color'

export default function InfoPageNavBar(props) {
    const buttonStyle = "flex-1 text-center m-3 mt-14";
    const fontStyle = {fontSize: "12px", letterSpacing: "6px"};
    const isBkgLight = props.backgroundColor != 'undefined' ? Color(props.backgroundColor).isLight() : false;
    const textColor = isBkgLight ? "text-dark" : "text-light";   

    function displayInfoBar() {
        return (
            <div class={`hidden md:flex md:flex-1 justify-center items-center z-20 absolute min-w-full ${textColor}`}>
                <Link to="/" style={{flexGrow: 4, height: "5vw"}}>
                    <img src={isBkgLight ? darkLogo : lightLogo} alt="The logo - click to go to homepage" style={{marginTop: "5vh", marginLeft: "5vh"}}/>
                </Link>
                <div className="mr-10 mt-5">
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
