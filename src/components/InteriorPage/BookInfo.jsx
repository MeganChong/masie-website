import React, {useState, useEffect, useRef} from "react";
import './BookInfo.css';
import NavBar from "../NavBars/NavBar";
import ErrorPage from "./ErrorPage";

import colors from "../../data/colors.json";
import bookText from "../../data/bookText.json";
import {photoInfo} from '../../data/images';

import Color from 'color';

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo({title, carousel}) {
    const allImages = photoInfo();
    const [colorCodes, setColorCodes] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [images, setImages] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupPhoto, setPopupPhoto] = useState([]);
    const [popupPhotoIndex, setPopupPhotoIndex] = useState(0);
    const processDivRef = useRef();

    useEffect(() => {
        setColorCodes(colors[title]);
        setTextDetails(bookText[title]);
        setImages(allImages[title]);
	if (processDivRef.current) {
		processDivRef.current.scrollLeft = 0;
   	} 
   }, [title]);

    function info() {
	const upperTriText = Color(colorCodes.upperTriangle).isLight() ? "text-dark" : "text-light";
        const bottomTriText = Color(colorCodes.lowerTriangle).isLight() ? "text-dark" : "text-light";
	const upperBg = Color(colorCodes.upperTriangle).isLight() ? "bg-dark" : "bg-light";
	const bottomBg = Color(colorCodes.lowerTriangle).isLight() ? "bg-dark" : "bg-light";	

	return (
            <div className="bookInfo">
                <img src={images.thumbnail} className="thumbNail max-w-[70%]" alt={images.altText + " Cover"}/>

                <div className={`invisible md:visible audience ${bottomTriText}`}>
                    <p className="textDiv">AUDIENCE: {textDetails.audience}</p>
                    <hr className={`introLine ${bottomBg}`}/>
                </div>

                <div className={`invisible md:visible type ${bottomTriText}`}>
                    <hr className={`introLine ${bottomBg}`}/>
                    <p className="textDiv">TYPE: {textDetails.itemType}</p>
                </div>

                <div className={`invisible md:visible client ${upperTriText}`}>
                    <p className="textDiv">CLIENT: {textDetails.client}</p>
                    <hr className={`introLine ${upperBg}`}/>
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
            return <p className="mb-10" style={{letterSpacing: "4px", fontSize: "46px", lineHeight:"1.1"}}>
                        {textDetails.award}
                    </p>;
        }
    }

    function displayProcess() {
        if (images.process === undefined)
            return;
        return images.process.map((item, index) => {
            var i = index+1;
            return <img src={item} key={index} className="card" alt={images.altText + " Step " + i} 
		onClick={() => {setIsPopupOpen(true); setPopupPhoto(images.process); setPopupPhotoIndex(index);}}/>;
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
                <h1 className="text-center text-5xl font-bold mb-9" 
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
                
                <div className="grid grid-col-1 md:grid-cols-4 mt-14 mb-20 relative" 
                    style={{marginLeft: "9%", flexWrap: "wrap"}}>
                    <div className="col-span-1 p-3 pt-0 text-left">
                        {showAward()}
                        <p className="font-bold text-xl" style={{letterSpacing: "4px", textTransform: "uppercase"}}>
                            {textDetails.header}
                        </p>
                        <p className="pt-3 text-lg" style={{lineHeight: "30px"}}>
                            {textDetails.description}
                        </p>
                    </div>

                    <div ref={processDivRef} className="cols-span-1 md:col-span-3 
                                mt-8 md:mt-0 md:ml-16 
                                sideways">
                        {displayProcess()}
                    </div>
                </div>
                
                <div style={{backgroundColor: `${colorCodes.bottomBar}`, height: "3vh", position: "relative"}}></div> 
		{carousel}
            </div>
        );
    }

    function updatePopupIndex(shouldIncrease) {
	if (shouldIncrease) {
		setPopupPhotoIndex(popupPhotoIndex+1 < popupPhoto.length
			? popupPhotoIndex+1
			: 0);
	}
	else {
		setPopupPhotoIndex(popupPhotoIndex-1 >= 0
			? popupPhotoIndex-1
			: popupPhoto.length-1);
	}
	
    }

    function showPopup() {
	return <div className="bg-black bg-opacity-70 text-white min-h-screen min-w-[100vw] z-50 fixed top-0 left-0 flex justify-center">
		<div className="invisible md:visible text-4xl absolute top-[3%] right-[3%]" onClick={() => setIsPopupOpen(false)}>X</div>
		<div className="visible md:invisible text-4xl absolute top-[20%] right-[5%]" onClick={() => setIsPopupOpen(false)}>X</div>
		<div className="text-6xl m-auto" onClick={() => updatePopupIndex(false)}>&lsaquo;</div>
		<img src={popupPhoto[popupPhotoIndex]} alt={`${images.altText} Step ${popupPhotoIndex}`} className="max-w-[80%] max-h-[100%] m-auto object-scale-down"/>		
		<div className="text-6xl m-auto" onClick={() => updatePopupIndex(true)}>&rsaquo;</div>
	</div>;
    }

    function displayPage() {
	if (title === "books" || title === "marketing" || title === "events" || title === "personal" || title === "about") {
		return <></>;
	}
        if (title === undefined || images === undefined) {
            return <ErrorPage/>;
        }
        return (<>
	    {isPopupOpen && showPopup()}
            <div className="parent">
                <NavBar show={true} displayType={"info"} backgroundColor={`${colorCodes.upperTriangle}`} className="z-20"/>

                <div style={{height: "203vh", minHeight: "fit-content", position: "relative"}}>
                    {upperTriangle()}
                    {info()}
                    {itemTitle()}
                    {descriptionProcess()}
                    <div className="invisible md:visible processBox">
                        <p className="processText">PROCESS</p>    
                    </div> 
                    {lowerTriangle()}
                </div>
            </div>
        </>);
    }

    return displayPage();
}
