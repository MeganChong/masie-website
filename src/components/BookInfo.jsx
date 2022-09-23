import React, {useState, useEffect} from "react";
import './BookInfo.css';

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo() {

    function displayPage2() {
        return (
            <div className="parent">
                <div className="upperTriangle"></div>
                <div className="lowerTriangle"></div>
                <div className="bottom"></div>
                <div className="endBar"></div>
                <div className="checkMore">
                    <p style={{padding: "3%"}}>CHECK OUT MORE</p>
                </div>
                <div className="carousel"></div>
            </div>
        );
    }

    return displayPage2();
}