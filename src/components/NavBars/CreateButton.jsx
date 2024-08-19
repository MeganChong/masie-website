import {Link} from 'react-router-dom';

export function createButton(path, type, classStyle, buttonStyle, extraStyles) {
    return (
        <Link
            to={{
                pathname:`/${path}`,
                state: {type: `${type}`}
            }}
            className= {classStyle}
        >
            <button className={`uppercase text-navBar hover:text-scrollbarPurple ${extraStyles}`} style={buttonStyle}>{path}</button>
        </Link>
    );
}
