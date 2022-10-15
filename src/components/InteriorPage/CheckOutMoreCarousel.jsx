import {photoInfo} from "../../data/images";
import { formatCell } from "../FormatCell";

export default function CheckOutMoreCarousel(props) {
    const images = photoInfo();
    const keys = Object.keys(images);
    const curr = props.title;

    var random1 = -1;
    var random2 = -1;
    var random3 = -1;

    function randomNumbers() {
        const length = keys.length;
        return Math.floor(Math.random() * length);
    }

    function getRandomImages() {
        var r = randomNumbers();
        if (keys.length > 1) {
            while (keys[r] === curr) {
                r = randomNumbers();
            }
            random1 = r;
        }
        if (keys.length > 2) {
            while (keys[r] === curr || r === random1) {
                r = randomNumbers();
            }
            random2 = r;
        }
        if (keys.length > 3) {
            while (keys.length > 2 && (keys[r] === curr || r === random1 || r === random2)) {
                r = randomNumbers();
            }
            random3 = r;
        }
    }

    function displayImage(index) {
        const item = images[keys[index]];
        if (index < 0 || item === undefined)
            return;
        return (
            <div class="flex" style={{height: "100%", backgroundColor: `${item.backgroundColor}`, alignItems: "center"}}>
                {/* <img src={item.thumbnailWithBackground} alt={item.altText + " Cover"} style={{objectFit: "contain"}}/> */}
                {formatCell(keys[index], "" , "thumbnailWithBackground")}
            </div>
        );
    }

    function noImages() {
        if (random1 < 0 && random2 < 0 && random3 < 0) {
            return (
                <div>I've run out of things to show you! Check back later!</div>
            );
        }
    }

    function display() {
        getRandomImages();
        return (
            <div>
                <p class="text-xl bg-white" style={{height: "15vh", lineHeight: "15vh", textAlign: "center", letterSpacing: "5px", alignSelf: "center"}}>
                    CHECK OUT MORE
                </p>
                
                <div class="grid grid-cols-1 md:grid-cols-3" style={{height: "50vh", alignItems: "center", justifyContent: "center"}}>
                    {noImages()}
                    {displayImage(random1)}
                    {displayImage(random2)}
                    {displayImage(random3)}
                </div>
            </div>
        );
    }

    return display();
}