import React, {useState, useEffect, useRef} from "react";
import {useLocation} from "react-router";
import './BookInfo.css';
import NavBar from "../NavBars/NavBar";
import CheckOutMoreCarousel from "./CheckOutMoreCarousel";

import colors from "../../data/colors.json";
import bookText from "../../data/bookText.json";
import {photoInfo} from '../../data/images';

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo() {
    const data = useLocation();
    const allImages = photoInfo();
    const [title, setTitle] = useState("");
    const [colorCodes, setColorCodes] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [images, setImages] = useState([]);
    const processDivRef = useRef();

    useEffect(() => {
        if (data === undefined || data.state === undefined || data.state.title === undefined)
            return errorPage();
        setTitle(data.state.title);
    }, [data]);

    useEffect(() => {
        setColorCodes(colors[title]);
        setTextDetails(bookText[title]);
        setImages(allImages[title]);
	if (processDivRef.current) {
		processDivRef.current.scrollLeft = 0;
   	} 
   }, [title]);

    // each text div has a copy to get the color blend effect 
    function info() {
        return (
            <div class="bookInfo">
                <img src={images.thumbnail} class="thumbNail" alt={images.altText + " Cover"}/>

                <div class="invisible md:visible audience infoType">
                    <p class="textDiv">AUDIENCE: {textDetails.audience}</p>
                    <hr className="introLine"/>
                </div>
                {/* <div class="sm:invisible md:visible audience copy">
                    <p class="textDiv">AUDIENCE: {textDetails.audience}</p>
                    <hr className="introLine"/>
                </div> */}

                <div className="invisible md:visible type infoType">
                    <hr className="introLine"/>
                    <p class="textDiv">TYPE: {textDetails.itemType}</p>
                </div>
                {/* <div className="sm:invisible md:visible type copy">
                    <hr className="introLine"/>
                    <p class="textDiv">TYPE: {textDetails.itemType}</p>
                </div> */}

                <div className="invisible md:visible client infoType">
                    <p class="textDiv">CLIENT: {textDetails.client}</p>
                    <hr className="introLine"/>
                </div>
                {/* <div className="sm:invisible md:visible client copy">
                    <p class="textDiv">CLIENT: {textDetails.client}</p>
                    <hr className="introLine"/>
                </div> */}
            </div>
        );
    }

    function upperTriangle() {
        return ( <div style={{backgroundColor: `${colorCodes.upperTriangle}`}} className="upperTriangle"></div> );
    }

    function showAward() {
        if (textDetails.award === undefined || textDetails.award === null || textDetails.award.length === 0) {
            return;
        }
        else {
            return <p class="mb-10" style={{letterSpacing: "4px", fontSize: "46px", lineHeight:"1.1"}}>
                        {textDetails.award}
                    </p>;
        }
    }

    function displayProcess() {
        if (images.process === undefined)
            return;
        return images.process.map((item, index) => {
            var i = index+1;
            return <img src={item} class="card" alt={images.altText + " Step " + i}/>
        });
    }
    
    function lowerTriangle() {
        return ( 
            <div style={{backgroundColor: `${colorCodes.lowerTriangle}`}} className="lowerTriangle"></div> 
        );
    }

    function itemTitle() {
        return (
            <div className="titleDiv">
                <h1 class="text-center text-5xl font-bold mb-9" 
                    style={{whiteSpace: "pre-line", marginRight: "6vw", marginLeft: "6vw"}}>
                    {title}
                    {/* The longest title in the world skdfjskdfjksnvlsnsndvjdsknvfndkanvxdsk sdncalcnadk */}
                </h1>
                <hr className="titleLine"/>
            </div>
        );
    }

    function descriptionProcess() {
        return (
            <div className="descriptionProcess" style={{backgroundColor: `${colorCodes.lowerTriangle}`}}>
                
                <div class="grid grid-col-1 md:grid-cols-4 mt-14 mb-20 relative" 
                    style={{marginLeft: "9%", flexWrap: "wrap"}}>
                    <div class="col-span-1 p-3 pt-0">
                        {showAward()}
                        <p class="font-bold text-xl" style={{letterSpacing: "4px", textTransform: "uppercase"}}>
                            {textDetails.header}
                        </p>
                        <p class="pt-3 text-lg" style={{lineHeight: "30px"}}>
                            {textDetails.description}
                        </p>
                    </div>

                    <div ref={processDivRef} class="cols-span-1 md:col-span-3 
                                mt-8 md:mt-0 md:ml-16 
                                sideways">
                        {displayProcess()}
                    </div>
                </div>
                
                <div style={{backgroundColor: `${colorCodes.bottomBar}`, height: "3vh", position: "relative"}}></div> 
                
                <CheckOutMoreCarousel title={title}/>
            </div>
        );
    }

    function errorPage() {
        return (
            <div class="min-h-screen bg-purple-300"> 
                <NavBar show={true} displayType={"info"}/>
                <h1 class="text-center text-lg" style={{lineHeight: "100vh"}}>
                    Whoops! Much like my marbles, I seem to have lost this book! Please go back and try again
                </h1>
            </div>
        );
    }

    function displayPage() {
        if (title === undefined || images === undefined) {
            return errorPage();
        }
        return (
            <div className="parent">
                <NavBar show={true} displayType={"info"} class="z-20"/>

                <div style={{height: "203vh", minHeight: "fit-content", position: "relative"}}>
                    {upperTriangle()}
                    {info()}
                    {itemTitle()}
                    {descriptionProcess()}
                    <div class="invisible md:visible processBox">
                        <p className="processText">PROCESS</p>    
                    </div> 
                    {lowerTriangle()}
                </div>


            </div>
        );
    }

    return displayPage();
}
