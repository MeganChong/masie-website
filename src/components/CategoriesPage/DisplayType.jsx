import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import NavBar from "../NavBars/NavBar";
import details from '../../projectDetails.json'
import { formatCell } from "../FormatCell";

export default function DisplayTypes() {
    const data = useLocation();
    const [type, setType] = useState(data.state.type);
    const [projects, setProjects] = useState([]); //categories[type]

    useEffect(() => {
        setType(data.state.type);
    }, [data]);

    useEffect(() => {
        loadProjects();
        displayPage();
    }, [type]);

    //no longer needed
    function loadProjects() {
        console.log(type);
        let projects = [];
        Object.entries(details).map((item) => {
            console.log(item[1].type);
            if (item[1].type === type) {
                projects.push(item[1].srcName);
            }
        });
        setProjects(projects);
    }

    //TODO: change with new formatcell
    function displayProjects() {
        return projects.map(item => {
            return formatCell(item, "", "interiorSrc");
        })
    }

    function displayPage() {
        return (
            <div class="min-h-screen md:flex">
                <NavBar show={true} displayType={"category"}/>

                <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 
                            gap-5 items-center m-10 overflow-hidden">
                    {displayProjects()}
                </div>
            </div>
        );
    }

    return displayPage();
}