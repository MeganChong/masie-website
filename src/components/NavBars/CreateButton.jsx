import {Link} from 'react-router-dom';

export function createButton(path, type, classStyle, buttonStyle, extraStyles, hoverColor) {
    const hoverText = hoverColor ?? "hover:text-scrollbarPurple";
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
