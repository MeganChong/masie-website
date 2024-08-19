import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { default as WhiteLogo } from '../../assests/LogoWhite.svg';
import { default as DarkLogo } from '../../assests/LogoDark.svg';
import { createButton } from "./CreateButton";

export default function CategoryNavBar() {
    const data = useLocation();
    const type = data.state.type;
    const [selectedButtonStyles, setSelectedButtonStyles] = useState("");
    const buttonStyle = "";
    const extraAboutHover = type==="About" ? "hover:text-light " : "";

    useEffect(() => {
        if (type === "Books") {
            setSelectedButtonStyles("bg-brandPurple text-dark hover:text-dark");
        }
        else if (type === "Marketing") {
            setSelectedButtonStyles("bg-brandYellow text-dark hover:text-dark");
        }
        else if (type === "Events") {
            setSelectedButtonStyles("bg-brandRed text-light hover:text-light");
        }
        else if (type === "Personal") {
            setSelectedButtonStyles("bg-brandBlue text-dark hover:text-dark");
        }
        else {
            setSelectedButtonStyles("bg-light text-dark hover:text-dark");
        }
    }, [type]);

    function button(path, item) {
        if (type === item) {
            return createButton(path, item, buttonStyle, {fontWeight: "bolder", fontSize: "16px"}, selectedButtonStyles + " py-4 pl-9 pr-9 text-left w-full");
        }
        else {
            return createButton(path, item, buttonStyle, {}, extraAboutHover + "p-6 pl-9 mr-9");
        }
    }

    function getCategoryNavBar() {
	return <div className={type==="About" ? "bg-brandPurple text-dark" : "bg-dark text-light"}> 
	   <div className="hidden md:flex md:flex-1 flex-col min-h-screen">
		<Link to="/" className="w-[25%] mb-[30%] mt-7 ml-8 mr-9">
			{ (type==="About")
				? <img src={DarkLogo}/> 
        			: <img src={WhiteLogo}/> 
                	}
		</Link>
		<div className="grow flex flex-col">
			{button("books", "Books")}
                	{button("marketing", "Marketing")}
                	{button("events", "Events")}
                	{button("personal", "Personal")}
                	{button("about", "About")}
		</div>
	   </div>
	</div>;
    }

    return getCategoryNavBar();
}
