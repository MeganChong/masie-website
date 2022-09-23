import React, {useState, useEffect} from "react";
import details from '../projectDetails.json';
import {photoInfo} from './PhotoInfo';
import { useLocation } from "react-router";
import NavBar from "./NavBar";
import { formatCell } from "./FormatCell";
import arrow from '../assests/dropdownArrow.png';

import './BookInfo.css';

//to read from a json file:
//import data from './data/data.json
//use .map() to iterate data
//or .forEach()
//***or data.projects[title]

export default function BookInfo() {
    const photoMap = photoInfo();
    const data = useLocation();
    const [title, setTitle] = useState(data.state.title);
    const [altText, setAlt] = useState("");
    const [srcName, setSrc] = useState("");
    const [projectType, setType] = useState("");
    const [duration, setDuration] = useState("");
    const [audience, setAudience] = useState("");
    const [client, setClient] = useState("");
    const [awards, setAwards] = useState("");
    const [clientRequest, setRequest] = useState([]);
    const [approach, setApproach] = useState([]);
    const [approachPictures, setApproachPictures] = useState([]);
    const [otherProjects, setOtherProjects] = useState([]);
    const [showRequest, setShowRequest] = useState(false);
    const [showApproach, setShowApproach] = useState(false);
    const [clientEffect, setClientEffect] = useState("");
    const [approachEffect, setApproachEffect] = useState("");

    useEffect(() => {
        setTitle(data.state.title);
    }, [data]);

    useEffect(() => {
        loadData();
        loadRemainingProjects();
        displayPage();
    }, [title]);

    useEffect(() => {
        displayPicture();
    }, [srcName]);


    function loadData() {
        const project = details[title];
        setAlt(project.altText);
        setSrc(project.srcName);
        setType(project.type);
        setDuration(project.duration);
        setAudience(project.audience);
        setClient(project.client);
        setAwards(project.awards);
        setRequest(project.clientRequest);
        setApproach(project.approach);
        if(photoMap[project.srcName].steps !== undefined)
            setApproachPictures(photoMap[project.srcName].steps);
        else 
            setApproachPictures([]);
        setShowApproach(false);
        setShowRequest(false);
    }

    function loadRemainingProjects() {
        let remaining = [];
        Object.entries(details).map((project) => {
            if (project[0] !== title) {
                remaining.push(project[1].srcName);
            }
        });
        setOtherProjects(remaining);
    }

    function displayAwards() {
        if (awards !== "")
            return (
                <div class="text-left">
                    <h3 class="text-subhead font-bold">AWARDS</h3>
                    <p class="pb-4">{awards}</p>
                </div>
            );
    }

    function displayList(showList, list, pictures) {
        if (showList) {
            if (pictures.length > 0) {
                return list.map((item, index) => 
                    <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-4">
                        <img src={pictures[index]} alt={`step ${index+1} of ${title}'s process`}/>
                        <li class="py-2">{item}</li>
                    </div>
                )
            }
            else
                return list.map((item) => <li class="py-2 list-inside">{item}</li>);
        }
    }

    function displayPicture() {
        if (srcName !== "")
            return <img src={photoMap[srcName]["interiorSrc"]} alt={altText} class="object-scale-down"/>;
    }

    function displayDropdown(setShow, showDropdown, effect, setEffect, header, content, pictures) {
        return (
            <div onClick={()=>{
                setShow(!showDropdown);
                if (effect === "") 
                    setEffect("transform rotate-180");
                else
                    setEffect("");
            }}>
                <div class="items-center flex pt-2">
                    <h3 class="flex-1 font-bold text-subhead">{header}</h3>
                    <p class={`inline object-right ${effect}`}><img  src={arrow} alt="dropdown arrow"/></p>
                </div>
                <ol class="list-decimal pl-12 text-dropdownBody pb-6">
                    {displayList(showDropdown, content, pictures)}
                </ol>
            </div>
        );
    }

    function displayOtherProjects() {
        return otherProjects.map(source => {
            return formatCell(source, "", "interiorSrc")
        });
    }

    function displayPage() {
        return (
            <div class="bg-white min-h-screen">
                <NavBar show={true}/>

                <div class="grid lg:grid-cols-2 sm:grid-cols-1 gap-10 m-10 justify-items-center pt-10">
                    {displayPicture()}

                    <div class="divide-y-4 divide-blue-900">
                        <div>
                            <h1 class="font-bold text-header text-left pb-4">{title}</h1>
                        </div>

                        <div>
                            <ul class="list-disc list-inside text-left pl-12 pt-2 pb-6">
                                <li>Type: {projectType}</li>
                                <li>Duration: {duration}</li>
                                <li>Audience: {audience}</li>
                                <li>Client: {client}</li>
                            </ul>
                            {displayAwards()}
                        </div>

                        {displayDropdown(setShowRequest, showRequest, clientEffect, setClientEffect, "CLIENT REQUEST", clientRequest, [])}

                        {displayDropdown(setShowApproach, showApproach, approachEffect, setApproachEffect, "APPROACH AND CHALLENGES", approach, approachPictures)}

                    </div>
                </div>

                <div class="grid grid-cols-11 bg-blue-200 content-center items-center p-7 opacity-50 hover:opacity-100">
                    {displayOtherProjects()}
                </div>

            </div>
        );
    }

    ////////////////////////////////////////2022 UPDATES ////////////////////////////////////////////////////

    function displayPage2() {
        return (
            <div className="parent">
                <div className="upperTriangle">
                </div>
                <div className="lowerTriangle">
                </div>
                <div className="bottom">
                </div>
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