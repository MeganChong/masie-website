import React, {useEffect, useState} from "react";
import { useLocation } from "react-router";
import NavBar from "../NavBars/NavBar";
import formatCell from "../FormatCell";
import categories from "../../data/categories.json";

export default function DisplayTypes() {
    const data = useLocation();
    const [categoryType, setCategoryType] = useState(data.pathname.substring(1).charAt(0).toUpperCase() + data.pathname.substring(2));
    const [projects, setProjects] = useState(categories[categoryType]);

    const LARGE = " col-span-2";

    useEffect(() => {
	const pathname = data.pathname.substring(1);
	const capitalizedPathName = pathname.charAt(0).toUpperCase() + pathname.substring(1);
        setCategoryType(capitalizedPathName);
    }, [data]);

    useEffect(() => setProjects(categories[categoryType]), [categoryType]);

    function displayProjects() {
        var s = "object-contain";
        if (categoryType === "Personal" || categoryType=== "Events")
            s = s + LARGE;
        return projects.map(item => {
            return formatCell(item, s, "thumbnailWithBackground");
        })
    }

    function displayPage() {
        return (
            <div className="md:flex h-fit min-h-screen">
                <NavBar show={true} displayType={"category"}/>

                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 items-center">
                    {displayProjects()}
                </div>
            </div>
        );
    }

    return displayPage();
}
