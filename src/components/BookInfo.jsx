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

    var awardTitle = "title";

    function upperTriangle() {
        return ( <div style={{backgroundColor: `${UTRbg}`}} className="upperTriangle"></div> );
    }

    function lowerTriangle() {
        return ( 
            <div style={{backgroundColor: `${LTRbg}`}} className="lowerTriangle">
                {/* empty div to move the rest of the items down to correct position */}
                <div style={{height: "109vh"}}></div> 

                <h1 class="text-center text-5xl font-bold m-7 mb-9 mt-0">{awardTitle}</h1>
                <hr/>

                <div class="flex mt-14" style={{marginLeft: "9%"}}>
                    <div class="flex-1 p-3 pt-0">
                        <p style={{letterSpacing: "4px", fontSize: "46px", lineHeight:"1.1"}}>
                            award winning chili crab
                        </p>
                        <p class="font-bold text-xl mt-10" style={{letterSpacing: "4px"}}>HEADER</p>
                        <p class="pt-3 text-lg" style={{lineHeight: "30px"}}>i'm bobby flay, each week one brave chef tries to
                            take me down in my house. 
                        </p>
                        
                    </div>
                    <div class="flex-1 bg-gray-900 ml-6" style={{flexGrow: 3, height: "60vh"}}>
                        

                    </div>
                </div>
            </div> 
        );
    }

    function bottomBar() {
        return ( <div style={{backgroundColor: `${barbg}`, height: "3vh"}}></div> );
    }

    function checkMore() {
        return (
            <p class="text-xl" style={{padding: "3%", height: "15vh", textAlign: "center", letterSpacing: "5px"}}>
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
                <div className="logo"></div>
                <div style={{height: "200vh"}}>
                    {upperTriangle()}
                    {lowerTriangle()}
                    {/* <div className="processBox"></div> */}
                </div>
                {bottomBar()}
                {checkMore()}
                {carousel()}
            </div>
        );
    }

    return displayPage2();
}