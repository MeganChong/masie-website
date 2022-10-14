import {Link} from 'react-router-dom';

export function createButton(path, type, classStyle, buttonStyle) {
    return (
        <Link
            to={{
                pathname:`/${path}`,
                state: {type: `${type}`}
            }}
            class= {classStyle}
        >
            <button class="uppercase text-navBar hover:text-purple-500" style={buttonStyle}>{path}</button>
        </Link>
    );
}