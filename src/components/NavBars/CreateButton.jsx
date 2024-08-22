import {Link} from 'react-router-dom';

export function createButton(path, type, classStyle, buttonStyle, extraStyles, isHoverDifferentColor) {
    const hoverText = isHoverDifferentColor ? "" : "hover:text-scrollbarPurple";
    return (
        <Link
            to={{
                pathname:`/${path}`,
                state: {type: `${type}`}
            }}
            className= {classStyle}
        >
            <button className={`uppercase text-navBar ${hoverText} ${extraStyles}`} style={buttonStyle}>{path}</button>
        </Link>
    );
}
