import { useEffect, useState } from "react";
import {photoInfo} from "../data/images";
import { formatCell } from "./FormatCell";

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
                <img src={item.thumbnailWithBackground} alt={item.altText + " Cover"} style={{objectFit: "contain"}}/>
                {/* {formatCell("giveStudents", "" , "interiorSrc")} */}
            </div>
        );
    }

    function noImages() {
        if (random1 < 0 && random2 < 0 && random3 < 0) {
            return (
                <div>Come back later!</div>
            );
        }
    }

    function display() {
        getRandomImages();
        return (
            <div>
                <p class="text-xl" style={{padding: "3%", height: "15vh", textAlign: "center", letterSpacing: "5px"}}>
                    CHECK OUT MORE
                </p>
                <div class="flex" style={{height: "85vh", alignItems: "center", justifyContent: "center"}}>
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