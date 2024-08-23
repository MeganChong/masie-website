import React from "react";
import { Link } from "react-router-dom";
import {default as logo} from '../../assests/LogoDark.svg';
import { createButton } from "./CreateButton";

export default function HomepageNavBar(props) {
	const buttonStyle = "flex-1 text-center bg-white";

	function displayHomeIcon() {
        	if (props.shouldShow)
            		return <Link to="/" class="bg-white"><img src={logo} alt="The logo - click to go to homepage"/></Link>;
    	}

	return <div className="hidden md:flex md:flex-1 justify-center items-center">
                {displayHomeIcon()}
                {createButton("books", "Books", buttonStyle, {})}
                {createButton("marketing", "Marketing", buttonStyle, {})}
                {createButton("events", "Events", buttonStyle, {})}
                {createButton("personal", "Personal", buttonStyle, {})}
		{createButton("about", "About", buttonStyle, {})}
	</div>;
}
