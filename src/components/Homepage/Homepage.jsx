import React from 'react';

import hello from "../../assests/homepage/Homepg_Intro.jpg";
import whiteSquare from '../../assests/homepage/Homepg_White.jpg'
import blueSquare from '../../assests/homepage/Homepg_Blue.jpg'

import NavBar from '../NavBars/NavBar';
import IntroVideo from "../../assests/homepage/header/IntroVideo.mp4";
import "./DownwardArrow.css";

import formatCell from '../FormatCell';

export default function Homepage() {
    const source = "homepage";

    const mobileHomepage = () => {
	return <>
		<img src={hello} alt="intro box" class="col-span-3"/>
                {formatCell("Lessons Learned Catalog", "col-span-2 row-span-2", source)}
                {formatCell("The Essential 25", "", source)}

                {formatCell("Five Practices for\n Equity-Focused School Leadership", "", source)}
                {formatCell("Summer Catalog", "col-span-3", source)}

                {formatCell("Giving Students a Say", "col-span-3 row-span-2", source)}
                {formatCell("The Minimalist Teacher", "col-span-3 row-span-2", source)}
                {formatCell("Japan Postcards", "col-span-3", source)}

                {formatCell("Happiness", "", source)}
                {formatCell("Empower19", "", source)}
                {formatCell("The Classroom Behavior Manual", "", source)}

                {formatCell("'Be' Ad Series", "col-span-3", source)}

                {formatCell("Math Fact Fluency", "col-span-2 row-span-2", source)}
                {formatCell("Rebranding", "row-span-2", source)}

                {formatCell("Spring Sourcebook", "col-span-3", source)}
	</>;
    }

    const desktopHomepage = () => {
	return <>
                <img src={hello} alt="intro box" class="col-span-3"/>
                {formatCell("Lessons Learned Catalog", "col-span-2 row-span-2", source)}
                {formatCell("The Essential 25", "", source)}

                <img src={whiteSquare} alt="a white square"/>
                {formatCell("Summer Catalog", "col-span-2", source)}
                {formatCell("Five Practices for\n Equity-Focused School Leadership", "", source)}

                {formatCell("Giving Students a Say", "col-span-2 row-span-2", source)}
                {formatCell("The Minimalist Teacher", "col-span-2 row-span-2", source)}
                {formatCell("Japan Postcards", "col-span-2", source)}
                {formatCell("The Classroom Behavior Manual", "", source)}
                <img src={blueSquare} alt="a blue square"/>

                <img src={blueSquare} alt="a blue square"/>
                {formatCell("'Be' Ad Series", "col-span-3", source)}
                {formatCell("Empower19", "", source)}

                {formatCell("Rebranding", "row-span-2", source)}

                {formatCell("Spring Sourcebook", "col-span-2", source)}
                {formatCell("Math Fact Fluency", "", source)}
                <img src={blueSquare} alt="a blue square"/>
                {formatCell("Happiness", "", source)}
	</>;
    }

    return (
        <div>
	    <div>
            	<video autoPlay muted loop src={IntroVideo}/>
	    	<div className="invisible lg:visible fadeArrowIn absolute top-[90%] min-w-full">
			<p className="text-white text-7xl text-center animate-bounce">&#xFE40;</p>
		</div>
	    </div>            

            <NavBar show={false} displayType={"homepage"}/>

            {/* mobile version md+ hide */}
            <div class="md:hidden grid grid-cols-3 min-h-screen">
               {mobileHomepage()}
            </div>

            {/* normal version sm hide md+show */}
            <div class="hidden md:grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 min-h-screen gap-0">
		{desktopHomepage()}
            </div>
        </div>
    );
}
