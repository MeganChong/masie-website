import React, {useState, useEffect, useMemo, useRef} from "react";
import {useLocation} from "react-router";
import CheckOutMoreCarousel from "./CheckOutMoreCarousel";
import BookInfo from "./BookInfo";
import ErrorPage from "./ErrorPage";
import useIsVisible from "../useIsVisible.jsx";

export default function InteriorPage() {
	const data = useLocation();
	const [title, setTitle] = useState("");
	const carousel = useMemo(() => <CheckOutMoreCarousel title={title}/>, [title]);
	const carouselRef = useRef();
	const isCarouselVisible = useIsVisible(carouselRef);

	useEffect(() => {
        	if (data === undefined || data.state === undefined || data.state.title === undefined) {
	    		return <ErrorPage/>;
		}
        	setTitle(data.state.title);
    	}, [data]);

	function getCarousel() {
		const transition = "transition-opacity ease-in duration-700";
		const opacity = isCarouselVisible ? "opacity-100" : "opacity-0";
		const transitionStyle = transition + " " + opacity;
		return <div ref={carouselRef} className={transitionStyle}>{carousel}</div>
	}

	return <div className="flex flex-col">
		<BookInfo title={title} carousel={getCarousel()}/>
	</div>;
}
