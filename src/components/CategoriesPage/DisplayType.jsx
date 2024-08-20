import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import NavBar from "../NavBars/NavBar";
import formatCell from "../FormatCell";
import categories from "../../data/categories.json";

export default function DisplayTypes() {
    const data = useLocation();
    const [type, setType] = useState(data.state.type);
    const [projects, setProjects] = useState(categories[type]);

    const LARGE = " col-span-2";

    useEffect(() => {
        setType(data.state.type);
        setProjects(categories[type]);
        
    }, [data]);

    function displayProjects() {
        var s = "object-contain";
        if (type === "Personal" || type=== "Events")
            s = s + LARGE;
        return projects.map(item => {
            return formatCell(item, s, "thumbnailWithBackground");
        })
    }

    function displayPage() {
        return (
            <div class="md:flex h-fit min-h-screen">
                <NavBar show={true} displayType={"category"}/>

                <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
                    {displayProjects()}
                </div>
            </div>
        );
    }

    return displayPage();
}
