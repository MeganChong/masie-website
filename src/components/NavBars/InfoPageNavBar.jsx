import React from "react";
import { Link } from "react-router-dom";
import {default as DarkLogo} from '../../assests/LogoDark.svg';
import {default as LightLogo} from '../../assests/LogoWhite.svg';
import { createButton } from "./CreateButton";
import Color from 'color'

export default function InfoPageNavBar(props) {
    const buttonStyle = "flex-1 text-center m-3";
    const fontStyle = {fontSize: "12px", letterSpacing: "6px"};
    const isBkgLight = props.backgroundColor != 'undefined' ? Color(props.backgroundColor).isLight() : false;
    const textColor = isBkgLight ? "text-dark" : "text-light";   

    function displayInfoBar() {
        return (
            <div class={`hidden md:flex md:flex-1 p-3 justify-items-end z-20 absolute min-w-full ${textColor}`}>
                <Link to="/" className="w-[4.5%] mt-7 ml-8">
                    <img src={isBkgLight ? DarkLogo : LightLogo} alt="The logo - click to go to homepage"/>
                </Link>
		<div className="grow"/>
                <div className="flex justify-items-end mt-2 mr-3">
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
