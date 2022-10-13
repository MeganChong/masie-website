import React, {useState, useEffect} from "react";
import {useLocation} from "react-router";
import './BookInfo.css';
import NavBar from "./NavBar";
import CheckOutMoreCarousel from "./CheckOutMoreCarousel";

import step1 from "../assests/steps/giveSay/step1.jpg";
import step2 from "../assests/steps/giveSay/step2.jpg";
import thumb from "../assests/thumbnails/GivingStudents.jpg"

import colors from "../data/colors.json";
import bookText from "../data/bookText.json";
import {photoInfo} from '../data/images';
import catagories from "../data/categories.json";

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo() {
    const data = useLocation();
    const allImages = photoInfo();
    const [title, setTitle] = useState(data.state.title);
    const [colorCodes, setColorCodes] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [images, setImages] = useState([]);

    useEffect(() => {
        setTitle(data.state.title);
    }, [data]);

    useEffect(() => {
        setColorCodes(colors[title]);
        setTextDetails(bookText[title]);
        setImages(allImages[title]);
        displayPage();
    }, [title]);

    function info() {
        return (
            <div class="bookInfo">
                <img src={images.thumbnail} class="thumbNail" alt={images.altText + " Cover"}/>
                <div className="audience">
                    <p>AUDIENCE: {textDetails.audience}</p>
                    <hr className="introLine"/>
                </div>
                <div className="type">
                    <hr className="introLine"/>
                    <p>TYPE: {textDetails.itemType}</p>
                </div>
                <div className="client">
                    <p>CLIENT: {textDetails.client}</p>
                    <hr className="introLine"/>
                </div>
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
            <div style={{backgroundColor: `${colorCodes.lowerTriangle}`}} className="lowerTriangle">
                {/* empty div to move the rest of the items down to correct position */}
                <div style={{height: "109vh"}}></div> 

                    <h1 class="text-center text-5xl font-bold m-7 mb-9 mt-0" style={{whiteSpace: "pre-line"}}>
                        {/* {title} */}
                        The longest title in the world skdfjskdfjksnvlsnsndvjdsknvfndkanvxdsk sdncalcnadk
                    </h1>
                    <hr className="titleLine"/>
                
                
                <div style={{height: "fit-content", backgroundColor: `${colorCodes.lowerTriangle}`}}>

                    <div class="grid grid-col-1 md:grid-cols-4 mt-14 relative" 
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

                        <div class="cols-span-1 md:col-span-3 md:ml-16 sideways">
                            {displayProcess()}
                        </div>
                    </div>
                </div>
            </div> 
        );
    }

    function descriptionProcess() {
        return (
            <div style={{height: "fit-content", backgroundColor: `${colorCodes.lowerTriangle}`}}>
                <div class="grid grid-col-1 md:grid-cols-4 mt-14 relative" 
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

                    <div class="cols-span-1 md:col-span-3 md:ml-16 sideways">
                        {displayProcess()}
                    </div>
                </div>
            </div>
        );
    }

    function displayPage() {
        if (images === undefined)
            return;
        return (
            <div className="parent">
                <NavBar show={true} displayType={"info"} class="z-20"/>

                <div style={{height: "200vh", minHeight: "fit-content", position: "relative"}}>
                    {upperTriangle()}
                    {info()}
                    {lowerTriangle()}
                    {/* TODO */}
                    {/* <div className="processBox"></div> */} 
                </div>
                    {/* {descriptionProcess()} */}

                <div style={{backgroundColor: `${colorCodes.bottomBar}`, height: "3vh", position: "relative"}}></div> 
                <CheckOutMoreCarousel title={title}/>
            </div>
        );
    }

    return displayPage();
}