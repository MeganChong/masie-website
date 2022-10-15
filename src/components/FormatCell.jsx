import {Link} from 'react-router-dom';
import {photoInfo} from "../data/images";

export function formatCell(itemTitle, classStyle, sourceType) {
    const photoMap = photoInfo();

    if (photoMap[itemTitle] === undefined)
        return (<div class={classStyle}></div>);

    const path = "/" + itemTitle;
    const style = classStyle + " hover:opacity-50";
    return (
        <Link 
            to={{
                pathname: path,
                state: {title: itemTitle}
            }} 
            class={style}>
            <img src={photoMap[itemTitle][sourceType]} alt={itemTitle + " Cover"} />
        </Link>
    );
}