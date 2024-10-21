import React from 'react';

import whiteSquare from '../../assests/homepage/Homepg_White.jpg'
import blueSquare from '../../assests/homepage/Homepg_Blue.jpg'

import NavBar from '../NavBars/NavBar';
import IntroVideo from "../../assests/homepage/header/IntroVideo.mp4";
import "./DownwardArrow.css";

import MissionStatementBkg from "../../assests/homepage/HomePgBkgd_Intro.jpg";
import ApproachBkg from "../../assests/homepage/HomePgBkgd_Approach.jpg";
import AwardsBkg from "../../assests/homepage/HomePgBkgd_About.jpg";
import ContactBkg from "../../assests/homepage/HomePgBkgd_Contact.jpg";

import ApproachSquiggle from "../../assests/homepage/Approach_Squiggle.png";
import BlueWavyLine from "../../assests/homepage/BlueSquiggle.png";
import WhiteWavyLine from "../../assests/homepage/Work_WhiteSquiggle.png";

import linkedin from "../../assests/about/AboutIcon_Linkend.png";
import email from "../../assests/about/AboutIcon_Email.png";

import formatCell from '../FormatCell';

export default function Homepage() {
    const source = "homepage";
    const FILLED_CIRCLE = <span className="pr-2 pl-8">&#9679;</span>;
    const FILLED_CIRCLE_LESS_SPACE = <span className="px-2">&#9679;</span>;

    const mobileHomepage = () => {
	return <>
        {formatCell("Annual Conference 2023", "col-span-3", source)}
        {formatCell("Lessons Learned Catalog", "col-span-2 row-span-2", source)}
        {formatCell("The Essential 25", "", source)}

        {formatCell("Five Practices for Equity-Focused School Leadership", "", source)}
        {formatCell("Summer Catalog", "col-span-3", source)}

        {formatCell("Giving Students a Say", "col-span-3 row-span-2", source)}
        {formatCell("The Minimalist Teacher", "col-span-3 row-span-2", source)}
        {formatCell("Empower17", "col-span-3", source)}

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
        {formatCell("Annual Conference 2023", "col-span-3", source)}
        {formatCell("Lessons Learned Catalog", "col-span-2 row-span-2", source)}
        {formatCell("The Essential 25", "", source)}

        <img src={whiteSquare} alt="a white square"/>
        {formatCell("Summer Catalog", "col-span-2", source)}
        {formatCell("Five Practices for Equity-Focused School Leadership", "", source)}

        {formatCell("Giving Students a Say", "col-span-2 row-span-2", source)}
        {formatCell("The Minimalist Teacher", "col-span-2 row-span-2", source)}
        {formatCell("Empower17", "col-span-2", source)}
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

    const getGrid = () => {
        return (<>
            {/* mobile version md+ hide */}
            <div className="md:hidden grid grid-cols-3 min-h-screen">
            {mobileHomepage()}
            </div>

            {/* normal version sm hide md+show */}
            <div className="hidden md:grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 min-h-screen gap-0">
            {desktopHomepage()}
            </div>
        </>);
    };

    const getMissionStatement = () => {
        return <div className="bg-brandBlue h-[90vh] min-h-fit content-center bg-cover bg-center text-dark" 
            style={{ backgroundImage: `url(${MissionStatementBkg})`}}>
            <div className="flex flex-col md:flex-row content-center justify-center min-h-fit mt-24 md:mt-40 mx-10">
                <div className="m-auto md:m-0 text-5xl font-thin 
                    border-solid border-y-2 border-black 
                    content-center max-w-fit leading-loose">I'm a</div>
                <div className="text-[5rem] leading-none md:text-[9rem] px-6 mt-4">Design</div>
            </div>
            <div className="text-[5rem] leading-none md:text-[9rem]">Leader</div>

            <div className="bg-brandYellow w-7/12 m-auto mb-24 md:mb-40 p-4 md:px-10 rounded-full mt-11 
                ring-brandPurple ring-offset-4 ring-2 ring-offset-brandBlue
                flex justify-center">
                <div className="bg-white rounded-full w-5 md:w-3 h-3 my-auto"/>
                <div className="grow justify-center mx-2 leading-7 md:leading-8 text-lg">Creating <span className="font-bold">visual impact</span> for brands and people</div>
                <div className="bg-white rounded-full w-5 md:w-3 h-3 my-auto"/>
            </div>
        </div>;
    };

    const getApproach = () => {
        return <div className="bg-dark h-[90vh] min-h-fit text-light content-center text-center md:text-left bg-cover bg-center" 
            style={{ backgroundImage: `url(${ApproachBkg})`}}>
            <div className="text-6xl md:text-7xl leading-normal text-center mt-24 md:mt-32">Approach</div>
            <div className="flex flex-col-reverse md:flex-row mb-20 md:mb-24 content-center">
                <img src={ApproachSquiggle} alt="purple squiggle" className="w-6/12 max-h-96 object-contain m-auto"/>
                <div className="flex flex-col md:w-6/12 md:mr-40 leading-9 m-12 mt-2 md:mt-8">
                    <img src={BlueWavyLine} alt="blue wavy line"/>
                    <div className="border-b-2 border-solid pb-8 ml-2 mt-6 text-2xl md:text-3xl leading-10 md:leading-[2.75rem] tracking-wider">
                        Blending innovation and precision with a  
                        <span className="text-brandYellow px-2">user-centered approach</span>
                        to elevate brand identities since 2014.
                    </div>
                    <div className="text-brandPurple pt-8 text-md md:text-lg leading-8 md:leading-9">
                        {FILLED_CIRCLE_LESS_SPACE}
                        Books {FILLED_CIRCLE_LESS_SPACE} 
                        Advertising {FILLED_CIRCLE_LESS_SPACE} 
                        Environmental {FILLED_CIRCLE_LESS_SPACE} 
                        Editorial {FILLED_CIRCLE_LESS_SPACE} 
                        Branding {FILLED_CIRCLE_LESS_SPACE} 
                        Packaging {FILLED_CIRCLE_LESS_SPACE} 
                        Digital {FILLED_CIRCLE_LESS_SPACE} 
                        UX/UI 
                    </div>
                </div>
            </div>
        </div>;
    };

    const getWorkPage = () => {
        return <div className="bg-brandYellow h-[85vh] md:h-[90vh] min-h-fit content-center text-dark">
            <div className="flex justify-center w-full mt-24 md:mt-28">
                <img src={WhiteWavyLine} alt="a white wavy line" className="object-contain max-w-[20%]"/>
                <div className="text-3xl grow tracking-[0.2em] leading-10">On to the Good Stuff!</div>
                <img src={WhiteWavyLine} alt="a white wavy line" className="object-contain max-w-[20%]"/>
            </div>
            <div className="bg-white text-9xl md:text-[18rem] leading-[1.2] my-6 mt-10">Work</div>
            <div className="tracking-[0.5em] mt-12 mb-20">
                {FILLED_CIRCLE}
                CATALOGS {FILLED_CIRCLE}
                CAMPAIGNS {FILLED_CIRCLE}
                COVERS {FILLED_CIRCLE}
                BRANDING
            </div>
        </div>;
    };

    const getAwards = () => {
        return <div className="bg-light h-[120vh] min-h-fit content-center bg-cover bg-center text-dark" 
            style={{ backgroundImage: `url(${AwardsBkg})`}}>
            <div className="text-2xl mt-32 mb-10 leading-9">Honored and grateful to <br/> be recognized for my work</div>
            <img src={BlueWavyLine} alt="blue wavy line" className="max-w-[70%] md:max-w-[50%] m-auto"/>
            <div className="text-8xl md:text-[12rem] leading-normal border-b-2 border-solid border-dark m-16 mt-2">Awards</div>
            <div>
                <div className="text-2xl tracking-[0.4em] mb-4">GDUSA WINNER</div>
                <div className="tracking-widest">
                    Advertising {FILLED_CIRCLE}
                    Books {FILLED_CIRCLE}
                    Catalogs
                </div>
            </div>
            <div className="m-20 mb-36">
                <div className="text-2xl tracking-[0.4em] mb-4">MUSE PLATINUM WINNER</div>
                <div className="tracking-widest">
                    Brand identity with in-house Creative team
                </div>
            </div>
        </div>;
    };

    const getContact = () => {
        return <div className="bg-dark h-[90vh] min-h-fit content-center text-light bg-cover bg-center" 
            style={{ backgroundImage: `url(${ContactBkg})`}}>
            <div className="text-brandYellow text-2xl mt-32 mb-6 tracking-widest">Ready when you are!</div>
            <img src={BlueWavyLine} alt="blue wavy line" className="max-w-[60%] md:max-w-[50%] m-auto"/>
            <div className="w-fit m-auto py-6">
                <div className="text-7xl md:text-9xl m-6">Contact</div>
                <div className="text-xl leading-9 md:leading-8 tracking-widest mx-24">Let's collaborate together to create <br/> visual impact in your next project</div>
                <div className="flex items-center mt-12 mx-10">
                    <div className="border-t min-w-[41%]"/>
                    <div className="w-6 h-4 bg-brandYellow grow"/> 
                    <div className="border-t min-w-[41%]"/>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center tracking-[0.8em] m-16 mb-48 items-center">
                <a href="https://www.linkedin.com/in/masie-chong" target="_blank">
                    <div className="md:pr-6 flex items-center flex-col md:flex-row">
                        <img src={linkedin} alt="LinkedIn logo" className="object-contain max-w-28 md:max-w-16 pr-6"/>
                        <div className="mt-4 md:mt-0">LINKEDIN</div>
                    </div>
                </a>
                <div className="text-xl invisible md:visible">|</div>
                <a href="mailto:masiecsdesign@gmail.com">
                    <div className="md:pl-6 flex items-center flex-col md:flex-row mt-4 md:mt-0">
                        <img src={email} alt="an envelope" className="object-contain max-w-28 md:max-w-16 pr-6"/>
                        <div className="mt-4 md:mt-0">EMAIL</div>
                    </div>
                </a>
            </div>
        </div>;
    };

    return (
        <div>
            <div>
                <video autoPlay muted loop src={IntroVideo}/>
                <div className="invisible lg:visible fadeArrowIn absolute top-[90%] min-w-full">
                    <p className="text-white text-7xl text-center animate-bounce">&#xFE40;</p>
                </div>
	        </div>            
            <NavBar show={false} displayType={"homepage"}/>
            {getMissionStatement()}
            {getApproach()}
            {getWorkPage()}
            {getGrid()}
            {getAwards()}
            {getContact()}
        </div>
    );
}
