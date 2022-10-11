import React, {useState, useEffect} from "react";
import './BookInfo.css';
import NavBar from "./NavBar";

import step1 from "../assests/steps/giveSay/step1.jpg";
import step2 from "../assests/steps/giveSay/step2.jpg";
import thumb from "../assests/thumbnails/GivingStudents.jpg"

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

    function thumbNail() {
        return (<img src={thumb} class="thumbNail"/>);
    }

    function audience() {
        return (
            <div className="audience">
                <p>AUDIENCE: K-12 TEACHERS</p>
                <hr className="introLine"/>
            </div>
        );
    }

    function type() {
        return (
            <div className="type">
                <hr className="introLine"/>
                <p>TYPE: BOOK COVER</p>
            </div>
        );
    }

    function client() {
        return (
            <div className="client">
                <p>CLIENT: ASCD</p>
                <hr className="introLine"/>
            </div>
        );
    }

    function upperTriangle() {
        return ( <div style={{backgroundColor: `${UTRbg}`}} className="upperTriangle"></div> );
    }

    // TODO: use variables
    function lowerTriangle() {
        return ( 
            <div style={{backgroundColor: `${LTRbg}`}} className="lowerTriangle">
                {/* empty div to move the rest of the items down to correct position */}
                <div style={{height: "109vh"}}></div> 

                <h1 class="text-center text-5xl font-bold m-7 mb-9 mt-0" style={{whiteSpace: "pre-line"}}>{awardTitle}</h1>
                <hr className="titleLine"/>

                <div class="flex mt-14" style={{marginLeft: "9%"}}>
                    <div class="flex-1 p-3 pt-0">
                        {/* TODO: only display if string exists -> return this in a separate method*/}
                        <p class="mb-10" style={{letterSpacing: "4px", fontSize: "46px", lineHeight:"1.1"}}>
                            award winning chili crab
                        </p>
                        <p class="font-bold text-xl" style={{letterSpacing: "4px"}}>HEADER</p>
                        <p class="pt-3 text-lg" style={{lineHeight: "30px"}}>
                            i'm bobby flay, each week one brave chef tries to
                            take me down in my house. 
                        </p>
                        
                    </div>
                    <div class="flex-1 ml-16 sideways">
                        <img src={step1} class="card"/>
                        <img src={step2} class="card"/>
                    </div>
                </div>
            </div> 
        );
    }

    function bottomBar() {
        return ( <div style={{backgroundColor: `${barbg}`, height: "3vh"}}></div> );
    }

    // TODO
    function carousel() {
        return ( <div style={{backgroundColor: `${carouselbg}`, height: "85vh"}}></div> );
    }

    function displayPage() {
        return (
            <div className="parent">
                <NavBar show={true} displayType={"info"} class="z-20"/>

                {/* <div className="logo"></div> */}
                <div style={{height: "200vh", minHeight: "fit-content"}}>
                    {thumbNail()}
                    {upperTriangle()}
                    {audience()}
                    {type()}
                    {client()}
                    {lowerTriangle()}
                    {/* TODO */}
                    {/* <div className="processBox"></div> */} 
                </div>
                {bottomBar()}
                <p class="text-xl" style={{padding: "3%", height: "15vh", textAlign: "center", letterSpacing: "5px"}}>
                    CHECK OUT MORE
                </p>
                {carousel()}
            </div>
        );
    }

    return displayPage();
}