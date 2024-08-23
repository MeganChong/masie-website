import React from "react";
import InfoPageNavBar from "./InfoPageNavBar";
import CategoryNavBar from "./CategoryNavBar";
import MobileNavBar from "./MobileNavBar";
import HomepageNavBar from "./HomepageNavBar";

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
		<div className="hidden md:block sticky top-0 z-50
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
	<div className="md:hidden sticky top-0 z-50
		bg-white
                text-black
                min-w-full p-4 content-center">
                <MobileNavBar/>
	</div>
    </>;
}
