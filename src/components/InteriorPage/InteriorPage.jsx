import React, {useState, useEffect} from "react";
import {useLocation} from "react-router";
import CheckOutMoreCarousel from "./CheckOutMoreCarousel";
import BookInfo from "./BookInfo";
import ErrorPage from "./ErrorPage";

export default function InteriorPage() {
	const data = useLocation();
	const [title, setTitle] = useState(data.state.title);

	useEffect(() => {
        	if (data === undefined || data.state === undefined || data.state.title === undefined) {
	    		return <ErrorPage/>;
		}
        	setTitle(data.state.title);
    	}, [data]);

	function getCarousel() {
		return <CheckOutMoreCarousel title={title}/>;
	}

	return <div className="flex flex-col">
		<BookInfo title={title} carousel={getCarousel()}/>
	</div>;
}
