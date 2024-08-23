import React, {useState, useEffect} from "react";
import {useLocation} from "react-router";
import CheckOutMoreCarousel from "./CheckOutMoreCarousel";
import BookInfo from "./BookInfo";
import ErrorPage from "./ErrorPage";

export default function InteriorPage() {
	const data = useLocation();
	const [title, setTitle] = useState("");

	useEffect(() => {
        	if (data === undefined || data.state === undefined || data.state.title === undefined) {
			if (data.pathname) {
				setTitle(data.pathname.substring(1));
			}
			else {
	    			return <ErrorPage/>;
			}
		}
		else {
        		setTitle(data.state.title);
		}
    	}, [data]);

	useEffect(() => {
		if (title === "You're the Principal! Now What" || title === "What's New") {
                        setTitle(title+"?");
                }
	}, [title]);
console.log(title);
	function getCarousel() {
		return <CheckOutMoreCarousel title={title}/>;
	}

	return <div className="flex flex-col">
		<BookInfo title={title} carousel={getCarousel()}/>
	</div>; 
}
