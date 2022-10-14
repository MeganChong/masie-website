import React from 'react';
import blueSquare from '../../assests/ColorBox_Blue.jpg'
import purpleSquare from '../../assests/ColorBox_Purple.jpg'
import redSquare from '../../assests/ColorBox_Red.jpg'
import whiteSquare from '../../assests/ColorBox_White.jpg'
import yellowSquare from '../../assests/ColorBox_Yellow.jpg'

import header from '../../assests/Opening Screen.jpg';
import NavBar from '../NavBars/NavBar';
import HeaderCarousel from './HeaderCarousel';

import {photoInfo} from '../PhotoInfo';
import {formatCell} from '../FormatCell';

export default function Homepage() {
    const photoMap = photoInfo();
    const source = "homeSrc";

    return (
        <div>
            {/* <img src={header} alt="opening screen"/> */}
            <HeaderCarousel/>
            
            <NavBar show={false} displayType={"homepage"}/>

            <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 min-h-screen bg-purple-300">
                <img src={photoMap["introBox"]} alt="intro box" class="col-span-3"/>
                {formatCell("flowerHead", "col-span-2 row-span-2", source)}
                {formatCell("boxGif", "", source)}
                <img src={whiteSquare} alt="a white square"/>
                {formatCell("summerGuide", "col-span-2", source)}
                {formatCell("fivePractices", "", source)}
                {formatCell("giveStudents", "col-span-2 row-span-2", source)}
                {formatCell("minimalistGif", "col-span-2 row-span-2", source)}
                {formatCell("membershipAd", "col-span-2", source)}
                {formatCell("janCat", "", source)}
                <img src={blueSquare} alt="a blue square"/>
                <img src={redSquare} alt="a red square"/>
                {formatCell("kids", "col-span-3", source)}
                <img src={purpleSquare} alt="a purple square"/>
                {formatCell("phoneGif", "row-span-2", source)}
                {formatCell("sourceBook", "col-span-2", source)}
                {formatCell("noodles", "", source)}
                <img src={yellowSquare} alt="a yellow square"/>
                <img src={whiteSquare} alt="a white square"/>
            </div>
        </div>
    );
}