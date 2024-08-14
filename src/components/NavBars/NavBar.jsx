import React from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/LogoDark.png';
import InfoPageNavBar from "./InfoPageNavBar";
import CategoryNavBar from "./CategoryNavBar";
import MobileNavBar from "./MobileNavBar";
import HomepageNavBar from "./HomepageNavBar";
import {createButton} from "./CreateButton";

export default function NavBar(props) {
    function getNavBar() {
        if (props.displayType === "category") {
            return <CategoryNavBar/>;
        }
        else if (props.displayType === "info") {
            return <InfoPageNavBar backgroundColor={props.backgroundColor}/>;
        }
        else {
            return (
		<div class="hidden md:block sticky top-0 z-50
                     bg-white
                     text-black 
                     min-w-full p-4 pl-8 content-center">
                    <HomepageNavBar shouldShow={props.show}/>
                </div>
            );
        }
    }

    return <>
	{getNavBar()}
	<div class="md:hidden sticky top-0 z-50
		bg-white
                text-black
                min-w-full p-4 content-center">
                <MobileNavBar/>
	</div>
    </>;
}
