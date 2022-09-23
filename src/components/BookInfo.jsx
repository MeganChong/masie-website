import React, {useState, useEffect} from "react";
import './BookInfo.css';

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo() {
    var UTRbg = "rgb(0, 128, 0)";
    var LTRbg = "rgb(255, 192, 203)";
    var barbg = "rgb(173, 216, 230)";
    var carouselbg = "rgb(128, 0, 128)";

    function upperTriangle() {
        return ( <div style={{backgroundColor: `${UTRbg}`}} className="upperTriangle"></div> );
    }

    function lowerTriangle() {
        return ( <div style={{backgroundColor: `${LTRbg}`}} className="lowerTriangle"></div> );
    }

    function bottom() {
        return ( <div style={{backgroundColor: `${LTRbg}`, height: "70vh"}}></div> );
    }

    function bottomBar() {
        return ( <div style={{backgroundColor: `${barbg}`, height: "3vh"}}></div> );
    }

    function checkMore() {
        return (
            <p style={{padding: "3%", height: "15vh", textAlign: "center"}}>
                CHECK OUT MORE
            </p>
        );
    }

    function carousel() {
        return ( <div style={{backgroundColor: `${carouselbg}`, height: "85vh"}}></div> );
    }

    function displayPage2() {
        return (
            <div className="parent">
                {upperTriangle()}
                {lowerTriangle()}
                {bottom()}
                {bottomBar()}
                {checkMore()}
                {carousel()}
            </div>
        );
    }

    return displayPage2();
}