import {Link} from 'react-router-dom';
import {photoInfo} from './PhotoInfo';

export function formatCell(source, classStyle, sourceType) {
    const photoMap = photoInfo();
    const path = "/" + photoMap[source].title;
    const style = classStyle + " hover:opacity-50";
    return (
        <Link 
            to={{
                pathname: path,
                state: {title: photoMap[source].title}
            }} 
            class={style}>
            <img src={photoMap[source][sourceType]} alt={photoMap[source].alt} />
        </Link>
    );
}