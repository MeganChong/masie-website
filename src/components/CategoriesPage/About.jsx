import React from "react";
import NavBar from "../NavBars/NavBar";

import about1 from "../../assests/about/Homepg_Row1-1.jpg";
import about2 from "../../assests/about/Homepg_Row1-2.jpg";
import about3 from "../../assests/about/Homepg_Row1-3.jpg";
import about4 from "../../assests/about/Homepg_Row1-4.jpg";
import about5 from "../../assests/about/Homepg_Row2-1.jpg";
import about6 from "../../assests/about/Homepg_Row2-2.jpg";
import about7 from "../../assests/about/Homepg_Row2-3.jpg";
import about8 from "../../assests/about/Homepg_Row2-4.jpg";
import about9 from "../../assests/about/Homepg_Row3-1.jpg";
import about10 from "../../assests/about/Homepg_Row3-2.jpg";
import about11 from "../../assests/about/Homepg_Row3-3.jpg";
import about12 from "../../assests/about/Homepg_Row4.jpg";

export default function About() {
    return (
        <div class="min-h-screen md:flex">
            <NavBar show={true} displayType={"category"}/>

            <div class="grid grid-cols-2 md:grid-cols-4">
                <img src={about1} alt="a red square with a circle cut out in the top right corner"/>
                <img src={about2} alt="an illustrated bird"/>
                <img src={about3} alt="The sky is the limit!"/>
                <img src={about4} alt="an illustrated crossiant in a circle"/>

                <img src={about5} alt="8 years of experience"/>
                <img src={about6} alt="a red square with a circle cut out in the bottom right corner"/>
                <img src={about7} alt="eat sleep design"/>
                <img src={about8} alt="illustrated desserts"/>

                <img src={about9} alt="print & digital"/>
                <img src={about10} alt="an illustrated bowl of ramen"/>
                <img src={about11} alt="Imagine. Create. Design. Masie." class="col-span-2 row-span-2 min-w-full"/>
                <img src={about12} alt="Chat with me at sleepingartist693@gmail.com" class="col-span-2"/>
                
            </div>
        </div>
    );
}