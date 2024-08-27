import React, {useRef} from "react";
import {Link} from 'react-router-dom';
import {photoInfo} from "../data/images";
import useIsVisible from "./useIsVisible.jsx";

export default function FormatCell(itemTitle, classStyle, sourceType) {
    const cellRef = useRef();
    const isCellVisible = useIsVisible(cellRef);
    const photoMap = photoInfo();

    if (photoMap[itemTitle] === undefined)
        return (<div class={classStyle}></div>);

    const path = "/" + itemTitle;
    const opacity = isCellVisible ? "opacity-100" : "opacity-0";
    const style = classStyle + " hover:opacity-50 transition-opacity ease-in duration-700 hover:duration-75 " + opacity;
    return (
        <Link 
            to={{
                pathname: path,
                state: {title: itemTitle}
            }} 
	    ref={cellRef}
            className={style}>
            <img src={photoMap[itemTitle][sourceType]} alt={itemTitle + " Cover"} />
        </Link>
    );
}
